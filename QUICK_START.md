# Quick Start Guide - Invest in Italy Platform

## ✅ What's Now Complete

Your platform is **fully functional** with all forms connected to backend services! Here's what works:

### ✅ Completed Features
- ✅ **Contact Form** - Fully functional with loading states, error handling, and success messages
- ✅ **Newsletter Signup** - Working with email validation and user feedback
- ✅ **AI Chatbot (Sofia)** - Ready to provide investment advice
- ✅ **Email System** - Configured with Resend for transactional emails
- ✅ **Database Schema** - Complete Supabase table structures defined
- ✅ **All API Routes** - Implemented and ready to use

---

## 🚀 Setup Steps (15 minutes)

### Step 1: Install Dependencies

```bash
cd invest-in-italy
npm install
```

### Step 2: Configure Environment Variables

1. Copy the example environment file:
```bash
copy .env.example .env.local
```

2. Fill in your environment variables in `.env.local`:

```env
# Email Service (Resend)
RESEND_API_KEY=re_Zw2J5JMC_3y3uV9uErZ2ais2k58r6p7CZ
EMAIL_FROM=noreply@apulink.com
EMAIL_TO=ceo@apulink.com

# Database (Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://nlummhoosphnqtfafssf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[get from Supabase dashboard]
SUPABASE_SERVICE_ROLE_KEY=[get from Supabase dashboard]

# AI Chatbot (OpenAI)
OPENAI_API_KEY=[your OpenAI API key]

# CMS (Sanity) - Optional
NEXT_PUBLIC_SANITY_PROJECT_ID=ws30on9c
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=[get from Sanity dashboard]

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Where to get API keys:**
- **Supabase Keys**: Go to https://supabase.com/dashboard/project/nlummhoosphnqtfafssf/settings/api
- **OpenAI Key**: Go to https://platform.openai.com/api-keys
- **Sanity Token** (optional): Go to https://www.sanity.io/manage/personal/project/ws30on9c/api

### Step 3: Set Up Supabase Database

**CRITICAL: You must run this SQL in your Supabase dashboard**

1. Go to https://supabase.com/dashboard/project/nlummhoosphnqtfafssf
2. Click **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the entire SQL from `SUPABASE_SETUP.md`
5. Click **Run** (bottom right)
6. Verify tables created: Go to **Database** → **Tables** → You should see: `leads`, `subscribers`, `chat_sessions`

### Step 4: Start Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 🧪 Testing Your Platform

### Test 1: Contact Form
1. Navigate to http://localhost:3000/#contact
2. Fill out the form with test data
3. Click "Send Message"
4. **Expected Results:**
   - ✅ Loading spinner appears
   - ✅ Success message displayed
   - ✅ Email sent to ceo@apulink.com (check inbox)
   - ✅ Welcome email sent to the user
   - ✅ Lead saved in Supabase `leads` table

### Test 2: Newsletter Signup
1. Scroll to the newsletter section on homepage
2. Enter an email address
3. Click "Subscribe"
4. **Expected Results:**
   - ✅ Loading spinner appears
   - ✅ Success message displayed
   - ✅ Email saved in Supabase `subscribers` table
   - ✅ Welcome email sent to subscriber

### Test 3: AI Chatbot (Sofia)
1. Look for the floating "Chat with Sofia" button (bottom right)
2. Click to open the chat
3. Try asking: "What are the tax benefits of investing in Italy?"
4. **Expected Results:**
   - ✅ Chat window opens
   - ✅ Welcome message from Sofia appears
   - ✅ Sofia responds with accurate tax information
   - ✅ Quick action buttons work

---

## 🔍 Troubleshooting

### Forms not submitting?
- ✅ **Check:** Environment variables are set in `.env.local`
- ✅ **Check:** Development server is running (`npm run dev`)
- ✅ **Check:** Browser console for errors (F12)
- ✅ **Fix:** Restart dev server after changing `.env.local`

### Emails not sending?
- ✅ **Check:** `RESEND_API_KEY` is correct
- ✅ **Check:** `EMAIL_FROM` domain is verified in Resend
- ✅ **Check:** Resend dashboard for error logs
- ✅ **Note:** Resend free tier may have sending limits

### Database errors?
- ✅ **Check:** You ran the SQL from `SUPABASE_SETUP.md`
- ✅ **Check:** Both `NEXT_PUBLIC_SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY` are set
- ✅ **Check:** Supabase project is active (not paused)
- ✅ **Fix:** View logs in Supabase Dashboard → Logs

### AI Chatbot not responding?
- ✅ **Check:** `OPENAI_API_KEY` is set correctly
- ✅ **Check:** You have OpenAI API credits
- ✅ **Check:** Browser console for errors
- ✅ **Note:** GPT-4 Turbo requires paid OpenAI account

---

## 📊 Viewing Your Data

### Supabase Dashboard
**View Leads (Contact Form Submissions):**
1. Go to https://supabase.com/dashboard/project/nlummhoosphnqtfafssf
2. Click **Database** → **Tables** → `leads`
3. You'll see all contact form submissions with status tracking

**View Newsletter Subscribers:**
1. Database → Tables → `subscribers`
2. Export to CSV for email marketing campaigns

### Email Dashboard (Resend)
1. Go to https://resend.com/emails
2. View all sent emails
3. Track delivery, opens, and bounces

---

## 🎨 Customization

### Update Logo
See `LOGO_SETUP_GUIDE.md` for instructions on replacing the logo.

### Modify Email Templates
Email templates are in `lib/resend.ts`. Edit the HTML to match your branding.

### Customize AI Chatbot (Sofia)
The chatbot's knowledge is in `app/api/chat/route.ts` (lines 17-57). Update the system prompt to:
- Add new services
- Update tax rates
- Change personality/tone
- Add more specific knowledge

### Add Blog Content
The platform is configured for Sanity CMS:
1. Set up your Sanity Studio (see `INTEGRATION_SETUP.md`)
2. Create blog posts in Sanity
3. They'll automatically appear at `/blog`

---

## 🚢 Deploying to Production

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

**Then:**
1. Add all environment variables in Vercel dashboard
2. Update `NEXT_PUBLIC_SITE_URL` to your production domain
3. Deploy!

### Option 2: Netlify
```bash
npm run build
```
Upload the `.next` build folder to Netlify.

### Production Checklist
- [ ] Update all environment variables in hosting platform
- [ ] Add production domain to Supabase allowed origins
- [ ] Verify email domain in Resend
- [ ] Test all forms on production URL
- [ ] Set up custom domain
- [ ] Enable SSL/HTTPS
- [ ] Add Google Analytics (optional)

---

## 📈 Next Steps

### Immediate (Optional)
- [ ] Customize email templates with your branding
- [ ] Add your actual company logo
- [ ] Test with real data
- [ ] Set up Sanity CMS for blog content

### Marketing
- [ ] Connect Google Analytics
- [ ] Set up Facebook Pixel
- [ ] Create email drip campaigns
- [ ] Add SEO meta descriptions
- [ ] Submit sitemap to Google Search Console

### Advanced Features (Future)
- [ ] User authentication/client portal
- [ ] Property listings database
- [ ] Document upload for consultations
- [ ] Payment processing (Stripe)
- [ ] Multi-language support (Italian/English)
- [ ] Admin dashboard for managing leads

---

## 📞 Support & Resources

### Documentation
- **Supabase Docs**: https://supabase.com/docs
- **Resend Docs**: https://resend.com/docs
- **OpenAI Docs**: https://platform.openai.com/docs
- **Next.js Docs**: https://nextjs.org/docs

### Platform Status
- Check all API services are operational
- Monitor Supabase quotas (free tier limits)
- Track OpenAI usage to avoid unexpected charges

---

## 🎉 You're Ready!

Your platform is production-ready. All forms are functional, emails are configured, and the AI chatbot is ready to engage visitors.

**What happens when someone fills out the contact form:**
1. ✅ Their information is saved to Supabase
2. ✅ You receive an email notification at ceo@apulink.com
3. ✅ They receive a welcome email
4. ✅ You can track their status (new → contacted → qualified → converted)

**Start the dev server and test it now!**

```bash
npm run dev
```

Then visit http://localhost:3000 and try submitting the contact form!
