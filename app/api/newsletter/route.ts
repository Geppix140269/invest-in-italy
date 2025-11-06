import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { resend } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const { data: existing } = await supabaseAdmin
      .from('subscribers')
      .select('*')
      .eq('email', email)
      .single();

    if (existing) {
      if (existing.subscribed) {
        return NextResponse.json({
          success: true,
          message: 'You are already subscribed to our newsletter.',
        });
      } else {
        // Resubscribe
        await supabaseAdmin
          .from('subscribers')
          .update({ subscribed: true, updated_at: new Date().toISOString() })
          .eq('email', email);

        return NextResponse.json({
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.',
        });
      }
    }

    // Add new subscriber
    const { error: dbError } = await supabaseAdmin
      .from('subscribers')
      .insert([
        {
          email,
          subscribed: true,
          tags: ['website'],
        },
      ]);

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save subscription');
    }

    // Send welcome email
    try {
      await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: email,
        subject: 'Welcome to Invest in Italy Newsletter',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #2c3e50; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>Welcome to Our Newsletter!</h2>
                </div>
                <div class="content">
                  <p>Thank you for subscribing to Invest in Italy insights.</p>
                  <p>You'll now receive:</p>
                  <ul>
                    <li>Exclusive market intelligence and investment opportunities</li>
                    <li>Italian tax benefit updates</li>
                    <li>Property and business investment insights</li>
                    <li>Expert analysis from our international executive team</li>
                  </ul>
                  <p>Stay tuned for our next newsletter!</p>
                  <p>Best regards,<br/>The Invest in Italy Team</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Check your email for confirmation.',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'An error occurred processing your subscription' },
      { status: 500 }
    );
  }
}
