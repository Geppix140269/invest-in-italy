import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { sendContactEmail, sendWelcomeEmail } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, interest, message } = body;

    // Validation
    if (!firstName || !lastName || !email || !interest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { data: lead, error: dbError } = await supabaseAdmin
      .from('leads')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone: phone || null,
          interest_area: interest,
          message,
          status: 'new',
          source: 'website_contact_form',
          metadata: {
            user_agent: request.headers.get('user-agent'),
            referer: request.headers.get('referer'),
          },
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Supabase error:', dbError);
      // Continue even if database fails - at least send email
    }

    // Send notification email to team
    const emailResult = await sendContactEmail({
      firstName,
      lastName,
      email,
      phone,
      interest,
      message,
    });

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
    }

    // Send welcome email to client
    await sendWelcomeEmail(email, firstName);

    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry. We will contact you within 24 hours.',
      leadId: lead?.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred processing your request' },
      { status: 500 }
    );
  }
}
