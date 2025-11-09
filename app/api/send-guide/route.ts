import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { resend } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, guideHTML } = body;

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    // Save lead to database
    try {
      await supabaseAdmin.from('leads').insert([
        {
          name,
          email,
          source: 'investment-guide-download',
          tags: ['investment-guide', 'website'],
        },
      ]);
    } catch (dbError) {
      console.error('Database error:', dbError);
      // Don't fail if database save fails
    }

    // Send email with investment guide
    try {
      await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: email,
        subject: 'Your Complete Guide to Investing in Italy 2024',
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #2c3e50;
                background-color: #f5f7fa;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 40px auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              }
              .header {
                background: linear-gradient(135deg, #1a2332 0%, #2c3e50 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0 0 10px 0;
                font-size: 28px;
              }
              .badge {
                display: inline-block;
                background: #d4a574;
                color: white;
                padding: 6px 16px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                margin-bottom: 15px;
              }
              .content {
                padding: 40px 30px;
              }
              .greeting {
                font-size: 18px;
                margin-bottom: 20px;
                color: #1a2332;
              }
              .highlight-box {
                background: linear-gradient(135deg, #fff5e6 0%, #ffe6cc 100%);
                border-left: 4px solid #d4a574;
                padding: 20px;
                margin: 25px 0;
                border-radius: 6px;
              }
              .highlight-box h3 {
                margin: 0 0 10px 0;
                color: #1a2332;
                font-size: 18px;
              }
              .feature-list {
                list-style: none;
                padding: 0;
                margin: 20px 0;
              }
              .feature-list li {
                padding: 10px 0;
                padding-left: 30px;
                position: relative;
                font-size: 15px;
              }
              .feature-list li:before {
                content: "✓";
                position: absolute;
                left: 0;
                color: #d4a574;
                font-weight: bold;
                font-size: 18px;
              }
              .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #d4a574 0%, #c89860 100%);
                color: white;
                padding: 14px 32px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                margin: 20px 0;
                text-align: center;
              }
              .footer {
                background: #f8f9fa;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #e0e0e0;
              }
              .footer-contact {
                margin: 15px 0;
                font-size: 14px;
                color: #666;
              }
              .footer-contact strong {
                color: #1a2332;
              }
              .social-links {
                margin: 20px 0;
              }
              .social-links a {
                display: inline-block;
                margin: 0 8px;
                color: #d4a574;
                text-decoration: none;
              }
              .small-text {
                font-size: 12px;
                color: #999;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <span class="badge">FREE RESOURCE</span>
                <h1>Your Investment Guide is Ready!</h1>
                <p style="margin: 0; opacity: 0.9;">Complete Guide to Investing in Italy 2024</p>
              </div>

              <div class="content">
                <p class="greeting">Dear ${name},</p>

                <p>
                  Thank you for your interest in investing in Italy! We're thrilled to share our comprehensive
                  <strong>50+ page investment guide</strong> with you.
                </p>

                <div class="highlight-box">
                  <h3>📥 Your Guide Includes:</h3>
                  <ul class="feature-list">
                    <li><strong>8 Detailed Chapters</strong> covering every aspect of Italian investment</li>
                    <li><strong>Real Case Studies</strong> with actual ROI data and lessons learned</li>
                    <li><strong>Tax Optimization Strategies</strong> including flat tax regimes</li>
                    <li><strong>Step-by-Step Processes</strong> from planning through closing</li>
                    <li><strong>Legal & Financial Frameworks</strong> explained clearly</li>
                    <li><strong>Regional Market Analysis</strong> with specific opportunities</li>
                  </ul>
                </div>

                <p>
                  <strong>Please find the guide attached to this email</strong> as a PDF document. You can
                  save it, print it, or read it on any device at your convenience.
                </p>

                <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; margin: 25px 0;">
                  <h3 style="margin: 0 0 10px 0; color: #1a2332;">🚀 Ready to Take the Next Step?</h3>
                  <p style="margin: 0 0 15px 0;">
                    Our team of experienced advisors is ready to discuss your specific investment goals
                    and help you navigate the Italian market.
                  </p>
                  <a href="https://invest-in-italy.com/#contact" class="cta-button">Schedule Free Consultation</a>
                </div>

                <p>
                  <strong>What happens next?</strong>
                </p>
                <ul class="feature-list">
                  <li>Review the guide at your own pace</li>
                  <li>Receive exclusive market updates and opportunities (opt-in)</li>
                  <li>Access additional resources on our website</li>
                  <li>Connect with our advisory team when you're ready</li>
                </ul>

                <p>
                  We're committed to making your Italian investment journey successful. If you have any
                  questions after reviewing the guide, please don't hesitate to reach out.
                </p>

                <p style="margin-top: 30px;">
                  <strong>Best regards,</strong><br/>
                  <span style="color: #d4a574; font-weight: 600;">The Invest in Italy Team</span><br/>
                  1402 Celsius Ltd
                </p>
              </div>

              <div class="footer">
                <div class="footer-contact">
                  <strong>1402 Celsius Ltd</strong><br/>
                  Trading as: Invest in Italy™
                </div>
                <div class="footer-contact">
                  📧 <a href="mailto:info@1402celsius.com" style="color: #d4a574; text-decoration: none;">info@1402celsius.com</a><br/>
                  📞 <a href="tel:+441696434469" style="color: #d4a574; text-decoration: none;">+44 1696 434469</a>
                </div>

                <div class="social-links">
                  <a href="https://invest-in-italy.com">Visit Our Website</a>
                </div>

                <p class="small-text">
                  You're receiving this email because you requested the Invest in Italy investment guide.
                  We respect your privacy and will never share your information with third parties.
                </p>
                <p class="small-text">
                  © 2024 1402 Celsius Ltd. All rights reserved.<br/>
                  Invest in Italy™ is a trademark of 1402 Celsius Ltd.
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
        attachments: [
          {
            filename: 'Investing-in-Italy-Complete-Guide-2024.html',
            content: Buffer.from(guideHTML).toString('base64'),
          },
        ],
      });

      return NextResponse.json({
        success: true,
        message: 'Investment guide sent successfully! Please check your email.',
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Send guide error:', error);
    return NextResponse.json(
      { error: 'An error occurred processing your request' },
      { status: 500 }
    );
  }
}
