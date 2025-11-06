# Supabase Database Setup

This document contains the SQL schema needed to set up your Supabase database for the Invest in Italy website.

## Step 1: Create Tables

Go to your Supabase project → SQL Editor → New Query, and run the following SQL:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Leads table for storing contact form submissions
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  interest_area TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'closed')),
  source TEXT DEFAULT 'website_contact_form',
  metadata JSONB,
  notes TEXT
);

-- Subscribers table for newsletter signups
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT true,
  tags TEXT[]
);

-- Chat sessions table (optional - for tracking chat interactions)
CREATE TABLE chat_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  user_email TEXT,
  messages JSONB,
  lead_qualified BOOLEAN DEFAULT false,
  metadata JSONB
);

-- Create indexes for better query performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_subscribers_email ON subscribers(email);
CREATE INDEX idx_subscribers_subscribed ON subscribers(subscribed);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;

-- Create policies (these allow service role to do anything, but restrict client access)
CREATE POLICY "Service role can do anything with leads" ON leads
  FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role can do anything with subscribers" ON subscribers
  FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role can do anything with chat_sessions" ON chat_sessions
  FOR ALL
  USING (auth.role() = 'service_role');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscribers_updated_at
  BEFORE UPDATE ON subscribers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## Step 2: Get Your API Keys

1. Go to Project Settings → API
2. Copy these values to your `.env.local` file:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: The `anon` `public` key
   - `SUPABASE_SERVICE_ROLE_KEY`: The `service_role` `secret` key (⚠️ Keep this secret!)

## Step 3: Optional - Create Views for Analytics

```sql
-- View for lead statistics
CREATE OR REPLACE VIEW lead_stats AS
SELECT
  status,
  COUNT(*) as count,
  DATE_TRUNC('day', created_at) as date
FROM leads
GROUP BY status, DATE_TRUNC('day', created_at)
ORDER BY date DESC;

-- View for recent leads
CREATE OR REPLACE VIEW recent_leads AS
SELECT
  id,
  created_at,
  first_name,
  last_name,
  email,
  interest_area,
  status
FROM leads
ORDER BY created_at DESC
LIMIT 50;
```

## Step 4: Test Your Setup

You can test your tables by running:

```sql
-- Insert a test lead
INSERT INTO leads (first_name, last_name, email, interest_area, message)
VALUES ('Test', 'User', 'test@example.com', 'Real Estate Investment', 'This is a test inquiry');

-- Insert a test subscriber
INSERT INTO subscribers (email, tags)
VALUES ('subscriber@example.com', ARRAY['website', 'test']);

-- View your data
SELECT * FROM leads;
SELECT * FROM subscribers;
```

## Security Notes

- The `service_role` key has full access to your database - never expose it in client-side code
- Always use Row Level Security (RLS) policies for any client-accessible data
- The current setup only allows server-side access (API routes) to modify data
- Consider adding backup policies if you later add user authentication

## Monitoring

Go to Supabase Dashboard → Database → Tables to:
- View your data
- Monitor table sizes
- Check indexes
- Review slow queries
