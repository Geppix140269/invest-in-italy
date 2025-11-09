'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

export default function SnippetsPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const snippets = [
    {
      title: 'TradingEconomics Italy News',
      description: 'Embed real-time economic news for Italy. Adjust height as needed.',
      code: `<!-- TradingEconomics Italy News Widget -->
<iframe
  src="https://tradingeconomics.com/embed/?s=italy&c=news"
  width="100%"
  height="600"
  frameborder="0"
  loading="lazy"
  title="Trading Economics Italy News"
></iframe>`,
      notes: [
        'Width: Set to 100% or specific pixel value',
        'Height: Adjust as needed (default: 600px)',
        'Theme: Append &theme=dark for dark mode',
      ],
    },
    {
      title: 'Investing.com Economic Calendar (Italy)',
      description: 'Display economic events filtered to Italy only.',
      code: `<!-- Investing.com Economic Calendar for Italy -->
<div id="investing-ecocal-widget"></div>
<script type="text/javascript">
  (function() {
    var script = document.createElement('script');
    script.src = 'https://sslecal2.investing.com/ecocalendar/getCalendar.php?theme=light&columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&countries=4&calType=week&timeZone=8&lang=1';
    script.async = true;
    document.getElementById('investing-ecocal-widget').appendChild(script);
  })();
</script>`,
      notes: [
        'Theme: Change theme=light to theme=dark',
        'Country: 4 = Italy (do not change)',
        'CSP: Add https://sslecal2.investing.com to script-src',
      ],
    },
    {
      title: 'Finlogix News Feed',
      description: 'Generic iframe placeholder. Generate your custom widget at Finlogix.com',
      code: `<!-- Finlogix News Feed Widget -->
<!-- Visit https://www.finlogix.com/widgets to generate your custom iframe URL -->
<iframe
  src="YOUR_FINLOGIX_WIDGET_URL_HERE"
  width="100%"
  height="600"
  frameborder="0"
  loading="lazy"
  title="Finlogix News Feed"
></iframe>`,
      notes: [
        'Visit https://www.finlogix.com/widgets',
        'Choose "News Feed" widget type',
        'Customize filters and appearance',
        'Copy the generated iframe URL and replace placeholder above',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Navigation variant="solid" />

      <main className="container max-w-4xl mx-auto px-4 py-20">
        <div className="mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
            Embed Code
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Widget <span className="gradient-text">Snippets</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Copy and paste these HTML snippets to embed Italy investment widgets on any website,
            even if you're not using React or Next.js.
          </p>
        </div>

        <div className="space-y-8">
          {snippets.map((snippet, index) => (
            <div key={index} className="glass p-6 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{snippet.title}</h2>
                  <p className="text-sm text-muted-foreground">{snippet.description}</p>
                </div>
                <Button
                  onClick={() => copyToClipboard(snippet.code, index)}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              <pre className="bg-background p-4 rounded border border-border overflow-x-auto text-sm mb-4">
                <code>{snippet.code}</code>
              </pre>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-muted-foreground">Customization Notes:</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  {snippet.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-muted/50 border border-border">
          <h2 className="text-xl font-semibold mb-3">Security & Performance Tips</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>CSP Headers:</strong> If your site uses Content Security Policy, whitelist
              the widget domains in your script-src directive
            </li>
            <li>
              <strong>Lazy Loading:</strong> All iframes use loading="lazy" for better performance
            </li>
            <li>
              <strong>External Links:</strong> Third-party widgets control their own styles;
              appearance may vary
            </li>
            <li>
              <strong>Mobile:</strong> Widgets are responsive but test on mobile devices for best UX
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
