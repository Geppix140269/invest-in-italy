# Midjourney Prompt for Capitaly Group OG Image

## Main Prompt (Copy & Paste) - WORKS WITH V6

```
Professional corporate social media banner for CAPITALY GROUP investment advisory firm, navy blue gradient background, elegant gold accents, centered composition, subtle Italian flag colors, modern minimalist design, clean professional layout, luxury finance aesthetic, abstract geometric patterns, corporate branding --ar 1200:630 --v 6
```

## Alternative: Use V5.2 (More Reliable)

```
Professional corporate social media banner for "CAPITALY GROUP" investment advisory firm, navy blue gradient background (#003366 to #004d99), elegant gold text (#DAA520), centered composition, subtle Italian flag colors accent (green white red), modern minimalist design, the text "Capitaly Group" in large bold sans-serif font, subtitle "Advisors and Partners for Strategic Investments in Italy" in smaller elegant text, clean professional layout, luxury finance aesthetic, abstract geometric patterns, corporate branding, 1200x630 pixels aspect ratio, high contrast, legible text, --ar 1200:630 --v 5.2
```

## Alternative Versions

### Version 1: With Italian Landmarks (V5.2 - Most Reliable)
```
Elegant corporate banner for CAPITALY GROUP, deep navy blue gradient background, subtle silhouette of Italian architecture faded in background, centered bold white text, gold tagline, modern sans-serif typography, professional financial services aesthetic, minimal design, luxury branding, clean composition --ar 1200:630 --v 5.2
```

### Version 2: Abstract & Modern (V5.2)
```
Premium corporate social media banner, CAPITALY GROUP in bold white typography, navy blue background with abstract flowing gold gradient waves, sophisticated modern design, clean minimalist layout, high-end financial branding, geometric accents, professional investment advisory aesthetic --ar 1200:630 --v 5.2
```

### Version 3: Background Only (V6 - Simple)
```
Abstract corporate background, deep navy blue gradient, flowing gold geometric shapes, Italian flag colors subtle accent, modern minimal design, professional finance aesthetic, luxury branding background, clean composition --ar 1200:630 --v 6
```

### Version 4: Clean & Corporate (V5.2)
```
Ultra-professional corporate banner design, navy blue to lighter blue gradient background, gold accent elements, minimal composition, modern business aesthetic, high contrast, financial institution branding, Swiss design principles, clean negative space --ar 1200:630 --v 5.2
```

## Midjourney Parameters Explained

- `--ar 1200:630` = Aspect ratio for social media OG images
- `--style raw` = Less artistic interpretation, more literal/professional
- `--v 6` = Use Midjourney version 6 (latest)
- Add `--q 2` for higher quality (costs more credits)

## After Generation Steps

1. **Download** the image from Midjourney (upscale first)
2. **Resize** to exactly 1200×630 pixels if needed
3. **Save** as `og-image.png` in `public/images/`
4. **Update** `app/layout.tsx`:
   ```typescript
   url: '/images/og-image.png',  // line 44 and 55
   ```
5. **Commit & Push**:
   ```bash
   git add public/images/og-image.png app/layout.tsx
   git commit -m "feat: add Midjourney-generated OG image"
   git push origin main
   ```

## Tips for Best Results

### Text Legibility
- Midjourney can struggle with exact text
- Consider generating WITHOUT text, then add text in Canva/Figma
- Or use `--no text` and add typography separately

### Better Prompt for Text-Free Version
```
Elegant abstract corporate background for investment advisory, deep navy blue gradient (#003366), flowing gold (#DAA520) geometric shapes, subtle Italian flag colors (green white red) as accent, modern minimal design, professional finance aesthetic, luxury branding background, clean composition, negative space for text overlay --ar 1200:630 --style raw --v 6
```

Then add your text in:
- **Canva** (easiest): canva.com
- **Figma** (professional): figma.com
- **Photoshop** (advanced)

## Recommended Workflow

**Best Approach:**
1. Generate background-only image in Midjourney (no text)
2. Download and open in Canva
3. Add text layers:
   - "CAPITALY GROUP" - 88px bold, white
   - "Advisors and Partners for Strategic Investments in Italy" - 36px, gold #DAA520
4. Export as PNG (1200×630)
5. Use in website

This ensures perfect text legibility for WhatsApp, LinkedIn, etc.

## Color Codes (For Reference)
- **Navy Blue**: #003366
- **Gold**: #DAA520
- **Italian Green**: #009246
- **Italian White**: #FFFFFF
- **Italian Red**: #CE2B37

## Brand Keywords for Midjourney
Use these to refine your prompts:
- "luxury finance"
- "corporate elegance"
- "professional investment"
- "Swiss design"
- "minimal corporate"
- "high-end advisory"
- "premium financial services"
- "sophisticated branding"
