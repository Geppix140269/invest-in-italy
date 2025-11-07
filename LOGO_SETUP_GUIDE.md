# Logo & Image Setup Guide

I've updated your site to use your beautiful geometric logo. Now you need to create and place the following image files:

## Required Images to Create

### 1. Main Logo
**Path:** `public/images/logo.png`
- **Size:** 200x200px (or larger, will scale down)
- **Format:** PNG with transparent background
- **Usage:** Navigation, header, general branding

### 2. Favicons

Create these favicon sizes and place them in `public/favicons/`:

#### Standard Favicons
- `favicon-16x16.png` - 16x16px
- `favicon-32x32.png` - 32x32px
- `favicon-96x96.png` - 96x96px
- `favicon.ico` - 32x32px ICO format (optional but recommended)

#### Apple Touch Icon
- `apple-touch-icon.png` - 180x180px

### 3. Open Graph / Social Media Image
**Path:** `public/images/og-image.png`
- **Size:** 1200x630px
- **Format:** PNG or JPG
- **Usage:** When sharing your site on Facebook, LinkedIn, Twitter, WhatsApp, etc.
- **Design:** Should include your logo, company name, and a brief tagline

## Quick Creation Guide

### Using Your Logo Image:

1. **Main Logo** (public/images/logo.png)
   - Export your logo at 200x200px
   - Keep transparent background
   - Save as PNG

2. **Favicons** (public/favicons/)
   You can use online tools like:
   - https://realfavicongenerator.net/
   - https://favicon.io/

   Or manually resize:
   - 16x16px for browser tabs
   - 32x32px for bookmarks
   - 96x96px for shortcuts
   - 180x180px for Apple devices

3. **Open Graph Image** (public/images/og-image.png)
   Create a 1200x630px image with:
   - Your logo centered or on the left
   - Text: "Invest in Italy"
   - Subtitle: "Expert Italian Investment Advisory"
   - Use your brand colors (navy blue, gold accent)
   - Background: Gradient or solid color

## Recommended Tools

- **Photoshop/Figma**: Professional design
- **Canva**: Easy online tool with templates
- **GIMP**: Free Photoshop alternative
- **Online Favicon Generator**: https://realfavicongenerator.net/

## Example Folder Structure

```
public/
├── images/
│   ├── logo.png                    # Main logo (200x200px)
│   └── og-image.png                # Social sharing image (1200x630px)
└── favicons/
    ├── favicon-16x16.png           # Browser tab icon
    ├── favicon-32x32.png           # Bookmark icon
    ├── favicon-96x96.png           # Shortcut icon
    ├── apple-touch-icon.png        # iOS home screen (180x180px)
    └── favicon.ico                 # Legacy ICO format (optional)
```

## What I've Already Done

✅ Created `Logo` component that displays your logo
✅ Updated navigation to use the Logo component
✅ Added favicon metadata to the site
✅ Added Open Graph tags for social media sharing
✅ Created folder structure (public/images and public/favicons)

## Next Steps

1. Save your logo image as `public/images/logo.png` (200x200px, transparent PNG)
2. Create the favicon sizes using a generator or manually
3. Create an Open Graph image for social sharing (1200x630px)
4. Place all files in their respective folders
5. Refresh your browser to see the changes

## Testing

After placing the images:
1. Visit http://localhost:3000 - Your logo should appear in the navigation
2. Check the browser tab - Should show your favicon
3. Use Facebook Debugger to test OG image: https://developers.facebook.com/tools/debug/
4. Use Twitter Card Validator: https://cards-dev.twitter.com/validator

Need help creating any of these images? Let me know!
