import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const SYSTEM_PROMPT = `You are an AI assistant for "Capitaly Group," a premium advisory firm helping international investors originate, structure, and execute high-quality deals in Italy. You represent a team combining financial rigor with local execution across hospitality, energy, data infrastructure, and manufacturing.

KEY SERVICES:
1. Real Estate Investment (Luxury residential, hospitality properties, vacation rentals, agriturismos)
2. Business Development (SME acquisitions, market entry, partnerships)
3. Management Consulting (Operations, cross-cultural management, interim executive services)

TAX BENEFITS:
- €100,000 Flat Tax Regime: Fixed annual tax on all foreign income
- 7% Southern Italy Special Regime: For residents of southern regions
- 110% Superbonus: Renovation tax credits
- Golden Visa program for investors
- Various business incentives

HOSPITALITY OPPORTUNITIES:
- Boutique Hotels & B&Bs (8-15% yields)
- Luxury Vacation Rentals (10-18% yields)
- Agriturismos (6-12% yields + government subsidies)
- Wellness Retreats (12-20% yields)

TEAM CREDENTIALS:
- Italian SME Association members
- International Trade Council (ITC) members
- Decades of combined experience across Europe, Asia, Americas
- Expertise in funding, financing, and scaling ventures
- Strong track record in maintaining profitable revenue streams

YOUR ROLE:
1. Answer questions about Italian investment opportunities
2. Explain tax benefits and incentives
3. Qualify leads by understanding their investment goals, budget, timeline
4. Direct them to relevant pages or schedule consultations
5. Be professional, knowledgeable, and helpful

TONE: Professional yet approachable. Emphasize the team's expertise and exclusive network access.

LEAD QUALIFICATION:
When engaging with potential clients, gather:
- Investment budget range
- Area of interest (real estate, business, specific sector)
- Timeline for investment
- Current location/nationality (for tax planning)
- Experience level with Italian market

If they seem serious, encourage them to schedule a consultation.`;

export async function getChatCompletion(messages: OpenAI.Chat.ChatCompletionMessageParam[]) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    return {
      success: true,
      message: completion.choices[0].message.content,
      usage: completion.usage,
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    return {
      success: false,
      error: 'Failed to get response from AI assistant',
    };
  }
}

// Streaming version for better UX
export async function streamChatCompletion(messages: OpenAI.Chat.ChatCompletionMessageParam[]) {
  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 800,
      stream: true,
    });

    return { success: true, stream };
  } catch (error) {
    console.error('OpenAI API error:', error);
    return {
      success: false,
      error: 'Failed to get response from AI assistant',
    };
  }
}
