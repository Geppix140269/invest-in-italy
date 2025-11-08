import { NextResponse } from 'next/server';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { createClient } from '@supabase/supabase-js';

const twilio = require('twilio');

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Sofia's system message
const systemMessage = `You are Sofia, an expert Italian investment advisor with deep knowledge of Italian real estate, business opportunities, and tax incentives. All information you provide is accurate as of 2025.

SERVICES WE OFFER:
1. Real Estate Investment - Luxury residential, hospitality properties, wellness & lifestyle, wine & food tourism, commercial properties, renovation projects
2. Business Development - SME acquisitions, market entry strategy, business consulting
3. Tax Optimization - Italian tax benefits and compliance

KEY TAX BENEFITS (2025 RATES - ALWAYS EMPHASIZE ELIGIBILITY REQUIREMENTS):
- Flat Tax Regime: €200,000/year (rising to €300,000 in 2025-2026) on foreign-sourced income. ONLY for those who have NOT been Italian tax residents for 9 of the last 10 years.
- 7% Southern Italy Regime: For high-income professionals relocating to Southern Italy (towns under 20,000 population). Valid up to 10 years.
- Renovation Tax Credits (2025): Up to 50% for main homes, 36% for second homes, spread over 10 years.

YOUR ROLE:
- Provide ACCURATE expert guidance with 2025 rates and eligibility requirements
- ALWAYS mention eligibility requirements and the need for professional advice
- Qualify leads by understanding their investment goals, budget, timeline, and eligibility
- Be warm, professional, knowledgeable, and concise (WhatsApp messages should be brief)
- If appropriate, suggest scheduling a call or consultation

IMPORTANT FOR WHATSAPP:
- Keep responses under 1600 characters
- Use line breaks for readability
- Be conversational but professional`;

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const from = formData.get('From') as string; // WhatsApp number
    const body = formData.get('Body') as string; // Message text
    const profileName = formData.get('ProfileName') as string; // User's WhatsApp name

    console.log('WhatsApp message received from:', from, 'Name:', profileName, 'Message:', body);

    if (!from || !body) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get conversation history from Supabase
    const { data: session, error: sessionError } = await supabase
      .from('chat_sessions')
      .select('*')
      .eq('user_identifier', from)
      .eq('platform', 'whatsapp')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    let sessionId: string;
    let conversationHistory: any[] = [];

    if (session) {
      sessionId = session.id;
      conversationHistory = session.messages || [];
    } else {
      // Create new session
      const { data: newSession, error: createError } = await supabase
        .from('chat_sessions')
        .insert({
          user_identifier: from,
          platform: 'whatsapp',
          user_name: profileName,
          messages: [],
        })
        .select()
        .single();

      if (createError || !newSession) {
        console.error('Error creating session:', createError);
        throw new Error('Failed to create session');
      }

      sessionId = newSession.id;
    }

    // Add user message to history
    conversationHistory.push({
      role: 'user',
      content: body,
      timestamp: new Date().toISOString(),
    });

    // Limit conversation history to last 10 messages
    const recentMessages = conversationHistory.slice(-10);

    // Generate AI response
    const result = await generateText({
      model: openai('gpt-4-turbo'),
      system: systemMessage,
      messages: recentMessages.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      temperature: 0.7,
      maxTokens: 500, // Keep responses concise for WhatsApp
    });

    const assistantMessage = result.text;

    // Add assistant response to history
    conversationHistory.push({
      role: 'assistant',
      content: assistantMessage,
      timestamp: new Date().toISOString(),
    });

    // Update session in Supabase
    await supabase
      .from('chat_sessions')
      .update({
        messages: conversationHistory,
        updated_at: new Date().toISOString(),
      })
      .eq('id', sessionId);

    // Send response via Twilio WhatsApp
    await twilioClient.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: from,
      body: assistantMessage,
    });

    console.log('Response sent to:', from);

    // Return TwiML response (Twilio expects this)
    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8"?><Response></Response>`,
      {
        headers: {
          'Content-Type': 'text/xml',
        },
      }
    );
  } catch (error) {
    console.error('WhatsApp webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle GET requests (for Twilio webhook validation)
export async function GET(req: Request) {
  return NextResponse.json({ message: 'WhatsApp webhook endpoint is active' });
}
