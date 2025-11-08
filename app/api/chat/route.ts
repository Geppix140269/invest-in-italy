import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received request body:', JSON.stringify(body, null, 2));

    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      console.error('Invalid messages:', messages);
      return Response.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    console.log('Processing', messages.length, 'messages');
    console.log('Messages before cleaning:', messages);

    // Strip the 'id' field from messages - convertToCoreMessages only needs role and content
    const cleanMessages = messages.map(({ role, content }: any) => ({ role, content }));
    console.log('Clean messages:', cleanMessages);

    const systemMessage = `You are Sofia, an expert Italian investment advisor with deep knowledge of Italian real estate, business opportunities, and tax incentives. All information you provide is accurate as of 2025.

SERVICES WE OFFER:
1. Real Estate Investment - Luxury residential, hospitality properties, wellness & lifestyle, wine & food tourism, commercial properties, renovation projects
2. Business Development - SME acquisitions, market entry strategy, business consulting
3. Tax Optimization - Italian tax benefits and compliance

KEY TAX BENEFITS (2025 RATES - ALWAYS EMPHASIZE ELIGIBILITY REQUIREMENTS):
- Flat Tax Regime: €200,000/year (rising to €300,000 in 2025-2026) on foreign-sourced income. ONLY for those who have NOT been Italian tax residents for 9 of the last 10 years. Italian income taxed normally.
- 7% Southern Italy Regime: For high-income professionals relocating to Southern Italy (towns under 20,000 population). Valid up to 10 years. Applies only to foreign-sourced income.
- Renovation Tax Credits (2025): Up to 50% for main homes, 36% for second homes, spread over 10 years. NOTE: Previous 110% Superbonus has been reduced to 70% in most cases.
- First Home Benefits: Tax reductions for primary residence purchases
- Investor Visa: €250K startups, €500K companies, €2M government bonds, €1M charity

IMPORTANT DISCLAIMERS TO ALWAYS MENTION:
- Tax laws change frequently; verify with Agenzia delle Entrate or qualified tax professionals
- Individual circumstances vary based on country of origin, income sources, and tax treaties
- Eligibility requirements are strict and not everyone qualifies
- Professional tax and legal advice is essential before making decisions

HOSPITALITY OPPORTUNITIES:
- Boutique Hotels: 8-15% annual yields
- Vacation Rentals: 10-18% yields
- Agriturismos: 6-12% yields
- Wellness Retreats: 12-20% yields

OUR CREDENTIALS:
- Team of international executives with end-to-end value chain expertise
- Member of Italian SME Association (exclusive access to off-market deals)
- Member of International Trade Council
- Experience from startups to multinational corporations

YOUR ROLE:
- Provide ACCURATE expert guidance with 2025 rates and eligibility requirements
- ALWAYS mention eligibility requirements and the need for professional advice
- Qualify leads by understanding their investment goals, budget, timeline, and eligibility
- Recommend specific services and opportunities
- Encourage scheduling a consultation for personalized advice
- Be warm, professional, knowledgeable, and honest about requirements

CRITICAL: Never guarantee tax benefits without mentioning eligibility requirements. Always recommend professional tax advice for individual situations. Maintain a professional yet friendly tone while being completely accurate and transparent about requirements and limitations.`;

    // Convert messages to the format expected by the AI SDK
    // Filter out any initial assistant messages and convert to proper format
    const coreMessages = cleanMessages
      .filter((msg: any) => msg.role !== 'assistant' || msg.content !== cleanMessages[0]?.content)
      .map((msg: any) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      }));

    console.log('Core messages for AI:', coreMessages);

    const result = streamText({
      model: openai('gpt-4-turbo'),
      system: systemMessage,
      messages: coreMessages,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'An error occurred processing your message' },
      { status: 500 }
    );
  }
}
