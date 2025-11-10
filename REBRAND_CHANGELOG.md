# Rebrand Changelog: Invest in Italy → Capitaly Group

## Overview
Complete rebrand from "Invest in Italy" to "Capitaly Group" while preserving 100% of existing styling, layout, and functionality. Only content, branding, SEO, and domain references have been changed.

## What Changed

### Brand Identity
- **Brand Name**: Invest in Italy → Capitaly Group
- **Tagline**: "Your Gateway to Italian Investment Opportunities" → "Advisors and Partners for Strategic Investments in Italy"
- **Value Proposition**: Updated to emphasize deal origination, structuring, and execution across hospitality, energy, data infrastructure, and manufacturing

### Assets Updated
1. **Logo** (`/public/brand/capitaly-group.svg`)
   - Created new text-based wordmark SVG
   - Replaced references from `/images/logo.svg` to `/brand/capitaly-group.svg`

2. **Favicons** (all in `/public/favicons/`)
   - `favicon-16x16.svg` - Updated from "I" to "C"
   - `favicon-32x32.svg` - Updated from "I" to "C"
   - `favicon-96x96.svg` - Updated from "I" to "C"
   - `apple-touch-icon.svg` - Updated from "I" to "C"

3. **Open Graph Image** (`/public/images/og-image.svg`)
   - Updated title text to "Capitaly Group"
   - Updated tagline to new brand message

### SEO & Metadata
1. **Root Layout** (`app/layout.tsx`)
   - Updated all metadata (title, description)
   - Set canonical domain to `https://www.capitalygroup.com`
   - Added JSON-LD Organization schema with new brand info
   - Updated Open Graph and Twitter card metadata

2. **Page-Specific Metadata**
   - Blog pages: Updated titles and descriptions
   - All page-level metadata updated to reference Capitaly Group

### Content Updates

#### Pages Updated:
1. **Homepage** (`app/page.tsx`)
   - Video hero title and subtitle
   - Footer description and trademark notice

2. **Services** (`app/services/page.tsx`)
   - CTA section heading ("Ready to Invest in Italy?" → "Ready to Get Started?")
   - Footer copyright

3. **Hospitality Investment** (`app/hospitality-investment/page.tsx`)
   - Footer copyright

4. **Tax Benefits** (`app/tax-benefits/page.tsx`)
   - Footer copyright

5. **Blog** (`app/blog/page.tsx` and `app/blog/[slug]/page.tsx`)
   - Page metadata
   - CTA section heading
   - Dynamic post metadata

6. **Privacy Policy** (`app/privacy/page.tsx`)
   - Updated legal entity references

7. **Terms of Use** (`app/terms/page.tsx`)
   - Updated all brand name references
   - Updated trademark notices
   - Updated "Trading as" section

#### Components Updated:
1. **Logo** (`components/logo.tsx`)
   - Updated image source path
   - Updated alt text

2. **Video Hero** (`components/video-hero.tsx`)
   - Updated default title and subtitle values

3. **Navigation** (`components/navigation.tsx`)
   - No changes needed (uses Logo component)

#### Backend/API Files:
1. **OpenAI System Prompt** (`lib/openai.ts`)
   - Updated AI assistant prompt to reflect new brand identity and focus

2. **Email Templates** (`lib/resend.ts`)
   - Updated welcome email subject line
   - Updated email header text
   - Updated email signature

### Infrastructure & Deployment

1. **Redirects** (`public/_redirects`)
   - Created comprehensive 301 redirects
   - All HTTP → HTTPS
   - All legacy invest-in-italy.com domains → www.capitalygroup.com
   - All non-www → www

2. **Robots.txt** (`public/robots.txt`)
   - Created with sitemap pointing to www.capitalygroup.com

3. **Domain Configuration**
   - Set `metadataBase` to `https://www.capitalygroup.com`
   - All canonical URLs point to new domain

## What Didn't Change

### ✅ Preserved (Zero Changes):
- **All CSS/styling** - No Tailwind classes, custom styles, or theme tokens modified
- **All layouts** - Component structure and page layouts identical
- **All functionality** - No code logic, hooks, or behaviors changed
- **Build tooling** - No changes to Next.js config, build scripts, or dependencies
- **Component architecture** - No refactoring or structural changes
- **Visual design** - Colors, spacing, typography, animations all unchanged
- **User experience** - Navigation, forms, interactions all identical
- **API integrations** - Sanity CMS, email service, AI chat all untouched (only text updated)

## Testing Checklist

### Pre-Deployment:
- [x] Build completes without errors
- [ ] All pages render correctly
- [ ] Logo appears on all pages
- [ ] Favicons display correctly
- [ ] Open Graph images show correct branding
- [ ] JSON-LD validates
- [ ] All internal links work

### Post-Deployment:
- [ ] Canonical tags point to www.capitalygroup.com
- [ ] Legacy domain redirects work (test with `curl -I`)
- [ ] SSL certificate issued for capitalygroup.com
- [ ] Netlify Forms still functional
- [ ] Contact form sends emails with new branding
- [ ] AI chat references correct brand name
- [ ] Search engines can crawl sitemap

## Environment Variables

Required for deployment:
```bash
SITE_URL=https://www.capitalygroup.com
NEXT_PUBLIC_SITE_URL=https://www.capitalygroup.com
```

## DNS Configuration

Before go-live, ensure:
1. `capitalygroup.com` A/CNAME records point to Netlify
2. `www.capitalygroup.com` CNAME points to Netlify
3. SSL/TLS certificate provisioned
4. Legacy domain (`invest-in-italy.com`) kept active for redirects

## Rollback Plan

If issues arise:
1. Revert to `main` branch
2. DNS remains unchanged (old domain still works)
3. New domain can be set up separately and tested before switching

## Notes

- **Legal entity unchanged**: Site still operated by 1402 Celsius Ltd
- **Contact info unchanged**: Same email and phone numbers
- **No content removed**: All pages and features preserved
- **SEO continuity**: 301 redirects maintain search rankings
- **Brand evolution**: This is a positioning update, not a service change
