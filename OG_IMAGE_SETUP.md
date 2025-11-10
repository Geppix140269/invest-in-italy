# Open Graph (OG) Image Setup for Capitaly Group

## Current Status
✅ OG image metadata is configured in `app/layout.tsx`
⚠️ Currently using SVG (works, but PNG is better for social media)

## What is an OG Image?
The Open Graph image appears when you share your website link on:
- Facebook
- LinkedIn
- Twitter/X
- WhatsApp
- Slack
- Discord

**Standard size**: 1200×630 pixels (required)

## Quick Setup: Create PNG Version

### Method 1: Use the HTML Generator (Easiest)
1. Open `scripts/create-og-image.html` in your browser
2. Take a screenshot of the displayed image (exactly 1200×630px)
3. Save as `public/images/og-image.png`
4. Update `app/layout.tsx` (see step 4 below)

### Method 2: Use Figma/Canva
1. Create a 1200×630px frame
2. Design specifications:
   - Background: Gradient from #003366 to #005599
   - Brand text: "CAPITALY GROUP" (90px, white, bold)
   - Tagline: "Advisors and Partners for Strategic Investments in Italy" (32px, #DAA520)
   - Italian flag accent on left side
3. Export as PNG
4. Save to `public/images/og-image.png`

### Method 3: Online OG Image Generator
Visit: https://og-image-generator.vercel.app/
- Upload logo or create custom design
- Export as PNG (1200×630)

## Update the Code

Once you have `og-image.png`:

**Edit `app/layout.tsx`:**
```typescript
// Change line 44 and 55 from:
url: '/images/og-image.svg',

// To:
url: '/images/og-image.png',
```

## Commit and Deploy
```bash
git add public/images/og-image.png app/layout.tsx
git commit -m "feat: add PNG Open Graph image for social media sharing"
git push origin main
```

## Test Your OG Image

After deployment, test with these tools:

1. **Facebook Sharing Debugger**
   https://developers.facebook.com/tools/debug/
   Paste: `https://www.capitalygroup.com`

2. **LinkedIn Post Inspector**
   https://www.linkedin.com/post-inspector/
   Paste: `https://www.capitalygroup.com`

3. **Twitter Card Validator**
   https://cards-dev.twitter.com/validator
   Paste: `https://www.capitalygroup.com`

4. **OpenGraph.xyz (All platforms)**
   https://www.opengraph.xyz/
   Paste: `https://www.capitalygroup.com`

## Current SVG vs PNG

**SVG (current)**:
- ✅ Works on some platforms
- ⚠️ Not supported by all social media
- ✅ Scalable and small file size

**PNG (recommended)**:
- ✅ Universal support (all platforms)
- ✅ More reliable rendering
- ✅ Industry standard
- ⚠️ Larger file size (~50-200KB)

## Troubleshooting

**Image not showing?**
- Clear cache on social platform's debug tool
- Ensure file is publicly accessible
- Check file size (< 8MB)
- Verify 1200×630 dimensions

**Wrong image showing?**
- Use platform's cache clearing tool
- Wait 5-10 minutes for CDN propagation
- Check metadata in browser DevTools

## Design Specifications

Current Capitaly Group OG Image:
- **Dimensions**: 1200×630px
- **Background**: Linear gradient (#003366 → #005599)
- **Brand Name**: CAPITALY GROUP (white, 90px, bold)
- **Tagline**: Split into 2 lines, gold (#DAA520), 32px
- **Accent**: Italian flag stripes (left side)
- **Decorative**: Subtle circles for depth

## Need Help?

If you need a professional OG image designed:
- **Fiverr**: Search "Open Graph image design"
- **Upwork**: Hire a graphic designer
- **Canva Pro**: Use pre-made social media templates
