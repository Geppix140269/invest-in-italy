import { NextRequest, NextResponse } from 'next/server';
import { streamChatCompletion } from '@/lib/openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    const result = await streamChatCompletion(messages);

    if (!result.success || !result.stream) {
      return NextResponse.json(
        { error: result.error || 'Failed to get AI response' },
        { status: 500 }
      );
    }

    // Convert OpenAI stream to Vercel AI SDK stream
    const stream = OpenAIStream(result.stream);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'An error occurred processing your message' },
      { status: 500 }
    );
  }
}
