# Midjourney Prompt for Capitaly Group OG Image

## Main Prompt (Copy & Paste)

```
Professional corporate social media banner for "CAPITALY GROUP" investment advisory firm, navy blue gradient background (#003366 to #004d99), elegant gold text (#DAA520), centered composition, subtle Italian flag colors accent (green white red), modern minimalist design, the text "Capitaly Group" in large bold sans-serif font, subtitle "Advisors and Partners for Strategic Investments in Italy" in smaller elegant text, clean professional layout, luxury finance aesthetic, abstract geometric patterns, corporate branding, 1200x630 pixels aspect ratio, high contrast, legible text, --ar 1200:630 --style raw --v 6
```

## Alternative Versions

### Version 1: With Italian Landmarks (Subtle)
```
Elegant corporate banner for "CAPITALY GROUP", deep navy blue gradient background, subtle silhouette of Italian architecture (Colosseum, towers) faded in background at 5% opacity, centered bold white text "CAPITALY GROUP", gold tagline "Advisors and Partners for Strategic Investments in Italy", modern sans-serif typography, professional financial services aesthetic, minimal design, luxury branding, clean composition --ar 1200:630 --style raw --v 6
```

### Version 2: Abstract & Modern
```
Premium corporate social media banner, "CAPITALY GROUP" in bold white typography, navy blue (#003366) background with abstract flowing gold (#DAA520) gradient waves, sophisticated modern design, subtitle text "Advisors and Partners for Strategic Investments in Italy" in refined font, clean minimalist layout, high-end financial branding, geometric accents, professional investment advisory aesthetic --ar 1200:630 --style raw --v 6
```

### Version 3: Italian Elements (Artistic)
```
Sophisticated financial services banner, "CAPITALY GROUP" centered in elegant serif font, deep blue background (#003366), subtle Italian flag tricolor stripe accent on left edge, gold (#DAA520) decorative elements, tagline "Advisors and Partners for Strategic Investments in Italy", luxury brand aesthetic, corporate elegance, marble texture hints, Renaissance-inspired minimal details, professional composition --ar 1200:630 --style raw --v 6
```

### Version 4: Clean & Corporate
```
Ultra-professional corporate banner design, "CAPITALY GROUP" in bold geometric sans-serif, navy blue to lighter blue gradient background, gold accent line, minimal white space, centered text layout, subtitle "Advisors and Partners for Strategic Investments in Italy" in clean font, modern business card aesthetic, high contrast, legible design, financial institution branding, Swiss design principles --ar 1200:630 --style raw --v 6
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
Elegant abstract corporate background for investment advisory, deep navy blue gradient (#003366), flowing gold (#DAA520) geometric shapes, subtle Italian flag colors (green white red) as accent, modern minimal design, professional finance aesthetic, luxury branding background, clean composition, negative space for text overlay --ar 1200:630 --style raw --v 6 --no text --no letters
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
