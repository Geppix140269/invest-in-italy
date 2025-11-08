# WhatsApp Integration Setup Guide

Sofia can now respond to WhatsApp messages via Twilio! Here's how to set it up.

## Prerequisites

✅ Twilio account with WhatsApp enabled
✅ Twilio credentials already in `.env.local`
✅ Webhook endpoint created at `/api/whatsapp/webhook`

## Setup Steps

### 1. Enable WhatsApp on Twilio

1. Go to [Twilio Console](https://console.twilio.com/)
2. Navigate to **Messaging** → **Try it out** → **Send a WhatsApp message**
3. Follow the wizard to activate WhatsApp Sandbox (for testing) or apply for production access
4. You'll get a WhatsApp number like `whatsapp:+14155238886`

### 2. Deploy Your Application

You need a publicly accessible URL for Twilio webhooks. Choose one option:

#### Option A: Deploy to Netlify (Recommended)

**First Time Setup:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name: invest-in-italy (or your preference)
- Build command: `npm run build`
- Publish directory: `.next`

**Set Environment Variables:**
```bash
# Set all environment variables
netlify env:set NEXT_PUBLIC_SUPABASE_URL "https://dkgybaraoabsmsgpbwpf.supabase.co"
netlify env:set NEXT_PUBLIC_SUPABASE_ANON_KEY "your-anon-key"
netlify env:set SUPABASE_SERVICE_ROLE_KEY "your-service-role-key"
netlify env:set OPENAI_API_KEY "your-openai-key"
netlify env:set TWILIO_ACCOUNT_SID "your-twilio-sid"
netlify env:set TWILIO_AUTH_TOKEN "your-twilio-token"
netlify env:set TWILIO_WHATSAPP_NUMBER "whatsapp:+447862140269"
netlify env:set RESEND_API_KEY "your-resend-key"
netlify env:set EMAIL_FROM "noreply@apulink.com"
netlify env:set EMAIL_TO "ceo@apulink.com"
netlify env:set NEXT_PUBLIC_SITE_URL "https://your-site.netlify.app"
```

**Deploy:**
```bash
# Deploy to production
netlify deploy --prod
```

Your webhook URL will be: `https://your-site.netlify.app/api/whatsapp/webhook`

**Or use Netlify UI:**
1. Push your code to GitHub
2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repo
5. Netlify will auto-detect Next.js settings
6. Add environment variables in Site Settings → Environment Variables
7. Deploy!

#### Option B: Use ngrok for Local Testing
```bash
# Install ngrok
brew install ngrok

# Start ngrok tunnel
ngrok http 3001

# Copy the HTTPS URL (e.g., https://abc123.ngrok.io)
```

Your webhook URL will be: `https://abc123.ngrok.io/api/whatsapp/webhook`

### 3. Configure Twilio Webhook

1. In Twilio Console, go to **Messaging** → **Settings** → **WhatsApp Sandbox Settings** (or your WhatsApp number)
2. Under **When a message comes in**, paste your webhook URL:
   ```
   https://your-site.netlify.app/api/whatsapp/webhook
   ```
   Or if using ngrok:
   ```
   https://abc123.ngrok.io/api/whatsapp/webhook
   ```
3. Set method to **POST**
4. Click **Save**

### 4. Test the Integration

#### For Sandbox Testing:
1. Send the join code to your Twilio WhatsApp number (shown in Twilio console)
   - Example: "join [your-code]" to +14155238886
2. Once joined, send any message like:
   ```
   Hello, I'm interested in Italian real estate
   ```
3. Sofia should respond within seconds!

#### For Production:
1. Users can message your approved WhatsApp Business number directly
2. No join code needed

## Features

✨ **Conversation Memory**: Each WhatsApp user has their own conversation history stored in Supabase
✨ **Context-Aware**: Sofia remembers the last 10 messages for context
✨ **Concise Responses**: Optimized for WhatsApp (under 1600 characters)
✨ **Lead Qualification**: Sofia asks relevant questions to understand needs

## Monitoring

### View Logs
Check your deployment logs to see incoming messages:

**Netlify:**
```bash
# View function logs
netlify functions:log whatsapp-webhook

# Or view in Netlify UI
# Go to: Site → Functions → Select function → View logs
```

**Local Development:**
```bash
# Check the dev server console where you ran npm run dev
```

### Database
Conversations are stored in the `chat_sessions` table in Supabase:
- `user_identifier`: WhatsApp phone number
- `platform`: 'whatsapp'
- `messages`: Full conversation history
- `user_name`: WhatsApp profile name

## Example Conversation

**User**: "What tax benefits are available in Italy?"

**Sofia**: "Great question! Italy offers several attractive tax benefits for 2025:

1. **Flat Tax Regime** - €200,000/year on foreign income (rising to €300,000 in 2025-2026)
   - Requirement: Must NOT have been Italian tax resident for 9 of last 10 years

2. **7% Southern Italy Regime** - For high-income professionals relocating to Southern Italy
   - Valid up to 10 years
   - Only towns under 20,000 population

3. **Renovation Tax Credits** - Up to 50% for main homes, 36% for second homes

Important: Tax laws change frequently. I recommend scheduling a consultation to discuss your specific situation and eligibility.

Would you like to learn more about any of these?"

## Troubleshooting

### Messages not being received?
- Check Twilio webhook logs in the console
- Verify your webhook URL is publicly accessible
- Ensure the webhook is set to POST method

### Sofia not responding?
- Check server logs for errors
- Verify OpenAI API key is valid in .env.local
- Check Supabase connection

### Rate Limits
- Twilio has message rate limits
- OpenAI has token rate limits
- Consider implementing queuing for high volume

## Next Steps

1. **Apply for Production Access**: Submit your WhatsApp Business Profile to Meta for approval
2. **Add Rich Media**: Enhance responses with images, documents, or location
3. **Add Quick Replies**: Implement WhatsApp quick reply buttons
4. **Analytics**: Track conversation metrics and conversion rates

## Support

For issues:
- Twilio Support: https://support.twilio.com
- Supabase Docs: https://supabase.com/docs
- OpenAI Docs: https://platform.openai.com/docs
