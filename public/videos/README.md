# Video Files

## How to Add Your Intro Video

1. **Create your video with Grok:**
   - Go to https://grok.x.ai or use X/Twitter's Grok AI
   - Upload your image
   - Ask Grok to create an intro video about "Invest in Italy"
   - Download the generated video

2. **Prepare your video:**
   - Rename the video file to: `intro.mp4`
   - Recommended format: MP4 (H.264 codec)
   - Recommended resolution: 1920x1080 (Full HD) or 3840x2160 (4K)
   - Keep file size reasonable (under 50MB for fast loading)

3. **Add to your website:**
   - Place `intro.mp4` in this folder (`public/videos/`)
   - Optionally, create a poster image (screenshot of the first frame)
   - Save the poster as `intro-poster.jpg` in this same folder

4. **Deploy:**
   - Commit the changes: `git add public/videos/`
   - Commit: `git commit -m "Add intro video"`
   - Push: `git push origin main`
   - Netlify will automatically deploy with your new video

## Video Features

Your video hero section includes:
- ✅ Auto-play on page load (muted by default)
- ✅ Play/Pause controls
- ✅ Mute/Unmute button
- ✅ Fullscreen mode
- ✅ Loops continuously
- ✅ Responsive on all devices
- ✅ Beautiful overlay with your branding
- ✅ Call-to-action buttons

## Troubleshooting

**Video not playing?**
- Check the file name is exactly `intro.mp4`
- Ensure the file is in the correct location: `public/videos/`
- Try converting to MP4 format if using a different format
- Check file size - keep under 50MB for best performance

**Need help?**
Just ask Claude Code to help you with any adjustments!
