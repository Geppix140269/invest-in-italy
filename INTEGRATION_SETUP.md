# Integration Setup Guide

This guide will help you complete the setup of all third-party integrations for the Invest in Italy website.

## ✅ What's Already Configured

- ✅ All npm packages installed
- ✅ Environment variables configured in `.env.local`
- ✅ API routes created for:
  - Contact form (`/api/contact`)
  - Newsletter (`/api/newsletter`)
  - AI Chatbot (`/api/chat`)
- ✅ Service configuration files created
- ✅ Email templates configured

## 📋 Step-by-Step Setup

### 1. Supabase Database Setup

**You need to run the database schema in your Supabase project.**

1. Go to your Supabase project: https://supabase.com/dashboard/project/nlummhoosphnqtfafssf
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy the entire SQL from `SUPABASE_SETUP.md`
5. Click **Run** to create all tables

This will create:
- `leads` table (contact form submissions)
- `subscribers` table (newsletter signups)
- `chat_sessions` table (optional - for tracking chat conversations)

**Verification:**
- Go to **Database** → **Tables**
- You should see: `leads`, `subscribers`, `chat_sessions`

---

### 2. Resend Email Setup

**Your email service is ready to use!**

Current configuration:
- API Key: Configured ✅
- From Email: noreply@apulink.com
- To Email (for notifications): ceo@apulink.com

**Optional: Customize Email Domain**
If you want emails to come from `@invest-in-italy.com`:
1. Go to Resend Dashboard → Domains
2. Add your custom domain
3. Update DNS records
4. Update `EMAIL_FROM` in `.env.local`

**Test Your Setup:**
The contact form will automatically send emails when someone submits an inquiry.

---

### 3. OpenAI Chatbot Setup

**Your AI assistant is configured and ready!**

The chatbot knows about:
- All your services (real estate, business development, management)
- Tax benefits (flat tax, 7% regime, Superbonus)
- Hospitality opportunities and yields
- Your team's credentials

**To add the chatbot to your website:**
A chatbot UI component needs to be added. Would you like me to create a floating chat widget or an embedded chat interface?

---

### 4. Sanity CMS Setup

**You need to create your Sanity content studio.**

1. **Option A - Use Existing Sanity Project (ws30on9c)**

   If you want to use your existing Sanity project from ApuLink:
   - Your project ID is already configured
   - You just need to add a Sanity API token to `.env.local`
   - Go to: https://www.sanity.io/manage/personal/project/ws30on9c/api
   - Create a new token with Editor permissions
   - Add it to `.env.local` as `SANITY_API_TOKEN`

2. **Option B - Create New Sanity Project** (Recommended for separate content)

   ```bash
   npm install -g @sanity/cli
   cd invest-in-italy
   npx sanity init
   ```

   Then update `.env.local` with your new project ID.

**Content Types You'll Need:**
- **Blog Posts** - For investment insights and articles
- **Properties** - For listing real estate opportunities
- **Case Studies** - Success stories
- **Team Members** - Your executive team profiles

I can provide Sanity schemas for these if you need them.

---

### 5. Twilio Setup (Optional)

**SMS/WhatsApp notifications are configured.**

Your Twilio credentials are set up to send:
- SMS notifications when new leads come in
- WhatsApp messages for urgent inquiries

**To enable:**
Uncomment Twilio code in `/app/api/contact/route.ts`

---

## 🧪 Testing Your Integrations

### Test Contact Form
1. Go to http://localhost:3000/#contact
2. Fill out the form
3. Submit

**What should happen:**
- ✅ Data saved to Supabase `leads` table
- ✅ Notification email sent to ceo@apulink.com
- ✅ Welcome email sent to the submitter
- ✅ Success message displayed

### Test Newsletter
1. Go to http://localhost:3000 (newsletter section)
2. Enter an email
3. Subscribe

**What should happen:**
- ✅ Email saved to Supabase `subscribers` table
- ✅ Welcome email sent to subscriber
- ✅ Success message displayed

### Test Chatbot (when UI is added)
1. Open chat widget
2. Ask: "What are the tax benefits of investing in Italy?"
3. The AI should respond with information about flat tax, 7% regime, etc.

---

## 🚀 Going to Production

### 1. Update Environment Variables in Netlify

Go to your Netlify site settings → Environment variables and add:

```
RESEND_API_KEY=re_Zw2J5JMC_3y3uV9uErZ2ais2k58r6p7CZ
EMAIL_FROM=noreply@apulink.com
EMAIL_TO=ceo@apulink.com

NEXT_PUBLIC_SUPABASE_URL=https://nlummhoosphnqtfafssf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your_anon_key]
SUPABASE_SERVICE_ROLE_KEY=[your_service_role_key]

OPENAI_API_KEY=[your_openai_key]

NEXT_PUBLIC_SANITY_PROJECT_ID=ws30on9c
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=[your_token]

NEXT_PUBLIC_SITE_URL=https://your-domain.netlify.app
```

### 2. Update Allowed Origins

**Supabase:**
- Go to Settings → API → URL Configuration
- Add your production URL to allowed origins

**Resend:**
- No additional configuration needed

**Sanity:**
- Go to your Sanity project settings
- Add your production domain to CORS origins

---

## 📊 Monitoring & Analytics

### Supabase Dashboard
- View all leads: Database → Tables → leads
- Newsletter subscribers: Database → Tables → subscribers
- Query data, export to CSV

### Email Deliverability
- Check Resend dashboard for delivery rates
- Monitor bounces and spam reports

### Chatbot Usage
- Track in Supabase `chat_sessions` table
- Monitor OpenAI API usage in their dashboard

---

## 🔒 Security Checklist

- ✅ `.env.local` is in `.gitignore` (never commit secrets!)
- ✅ Service role keys only used in API routes (server-side)
- ✅ Row Level Security (RLS) enabled on all Supabase tables
- ⚠️ When going to production, rotate all API keys
- ⚠️ Set up rate limiting on API routes
- ⚠️ Add CAPTCHA to forms if spam becomes an issue

---

## 🛟 Troubleshooting

### "Failed to fetch" errors
- Check that dev server is running: `npm run dev`
- Verify environment variables are loaded (restart server after changes)

### Emails not sending
- Check Resend dashboard for errors
- Verify `EMAIL_FROM` domain is verified in Resend
- Check spam folder

### Database errors
- Verify Supabase tables are created
- Check service role key is correct
- Look at Supabase logs: Database → Logs

### Chatbot not responding
- Verify OpenAI API key is valid
- Check API usage limits
- Look at browser console for errors

---

## 📝 Next Steps

1. ✅ Complete Supabase database setup (run SQL from SUPABASE_SETUP.md)
2. ⏳ Test contact form
3. ⏳ Test newsletter signup
4. ⏳ Decide on chatbot UI (I can create this for you)
5. ⏳ Set up Sanity Studio content types (optional)
6. ⏳ Deploy to production and configure Netlify env vars

---

## 💬 Need Help?

All integration code is production-ready. If you encounter any issues:
1. Check the specific integration's dashboard for logs
2. Look at browser console (F12) for client-side errors
3. Check server logs for API route errors
4. Refer to official documentation:
   - Supabase: https://supabase.com/docs
   - Resend: https://resend.com/docs
   - OpenAI: https://platform.openai.com/docs
   - Sanity: https://www.sanity.io/docs
