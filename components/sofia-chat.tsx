'use client';

// Sofia AI Chat Component
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, Send, MessageCircle, Sparkles } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export function SofiaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! I'm Sofia, your Italian investment advisor. I'm here to help you discover exceptional opportunities in Italy—from luxury real estate and hospitality ventures to business acquisitions and tax optimization strategies. What interests you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    // Add user message to chat
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      console.log('Sending messages:', [...messages, userMessage]);

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.error('API error:', response.status, errorData);
        throw new Error(errorData.error || 'Failed to get response');
      }

      // Parse the text stream response
      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      // Create assistant message placeholder
      const assistantId = (Date.now() + 1).toString();
      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: 'assistant',
          content: '',
        },
      ]);

      // Read the stream
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          // Decode the chunk
          const text = decoder.decode(value, { stream: true });

          // Accumulate the text
          assistantMessage += text;

          // Update the assistant message in real-time
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId
                ? { ...msg, content: assistantMessage }
                : msg
            )
          );
        }
      } catch (streamError) {
        console.error('Stream reading error:', streamError);
        throw streamError;
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    'Tax benefits in Italy',
    'Hospitality investments',
    'Real estate opportunities',
    'Schedule consultation',
  ];

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Open chat with Sofia"
        >
          <div className="relative">
            {/* Pulsing ring effect */}
            <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>

            {/* Main button */}
            <div className="relative flex items-center gap-3 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <MessageCircle className="h-6 w-6" />
              <div className="hidden md:block">
                <div className="text-sm font-semibold">Chat with Sofia</div>
                <div className="text-xs opacity-90">Your Investment Advisor</div>
              </div>
              <Sparkles className="h-4 w-4 animate-pulse" />
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-[380px] md:w-[420px] h-[600px] shadow-2xl flex flex-col border-2 border-accent/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-accent-foreground" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-primary"></div>
              </div>
              <div>
                <div className="font-display font-semibold text-lg">Sofia</div>
                <div className="text-xs opacity-90">Investment Advisor • Online</div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-accent text-accent-foreground rounded-br-sm'
                      : 'bg-card border border-border rounded-bl-sm'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="h-3 w-3 text-accent" />
                      <span className="text-xs font-semibold text-accent">Sofia</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3 bg-card border border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-xs text-muted-foreground">Sofia is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={onSubmit} className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Italian investments..."
                disabled={isLoading}
                className="flex-1"
                autoComplete="off"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="icon"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Powered by advanced AI • Sofia can make mistakes
            </p>
          </form>

          {/* Quick Actions */}
          <div className="px-4 pb-4 pt-2 border-t border-border/50 bg-secondary/5">
            <div className="text-xs font-semibold text-muted-foreground mb-2">Quick questions:</div>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    if (!isLoading) {
                      setInput(suggestion);
                      setTimeout(() => {
                        const syntheticEvent = {
                          preventDefault: () => {},
                        } as React.FormEvent<HTMLFormElement>;
                        onSubmit(syntheticEvent);
                      }, 100);
                    }
                  }}
                  disabled={isLoading}
                  className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors disabled:opacity-50"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
