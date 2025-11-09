'use client';

import { Suspense } from 'react';
import { Navigation } from '@/components/navigation';
import { Card } from '@/components/widgets/card';
import { Tabs } from '@/components/widgets/tabs';
import { TradingEconomicsItalyNews } from '@/components/widgets/trading-economics-italy-news';
import { InvestingCalendarItaly } from '@/components/widgets/investing-calendar-italy';
import { FinlogixNewsFeed } from '@/components/widgets/finlogix-news-feed';
import { ItalyRSSAggregator } from '@/components/widgets/italy-rss-aggregator';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Code2 } from 'lucide-react';

export default function WidgetsPage() {
  const tabs = [
    {
      label: 'TradingEconomics',
      content: (
        <Card
          title="TradingEconomics Italy News"
          description="Real-time economic news and data for Italy from TradingEconomics.com"
        >
          <TradingEconomicsItalyNews />
        </Card>
      ),
    },
    {
      label: 'Economic Calendar',
      content: (
        <Card
          title="Economic Calendar (Italy)"
          description="Key economic events and indicators for Italy from Investing.com"
        >
          <InvestingCalendarItaly />
        </Card>
      ),
    },
    {
      label: 'Finlogix Feed',
      content: (
        <Card
          title="Finlogix News Feed"
          description="Financial news and market updates from Finlogix"
        >
          <FinlogixNewsFeed />
        </Card>
      ),
    },
    {
      label: 'Curated Italy News',
      content: (
        <Card
          title="Curated Italy News"
          description="Aggregated news from Borsa Italiana, ANSA, Il Sole 24 Ore, and other Italian business sources"
        >
          <Suspense
            fallback={
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                <p className="mt-4 text-sm text-muted-foreground">Loading Italy news...</p>
              </div>
            }
          >
            <ItalyRSSAggregator />
          </Suspense>
        </Card>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Navigation variant="solid" />

      <main className="container max-w-6xl mx-auto px-4 py-20">
        <div className="mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
            Market Intelligence
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Italy Investment <span className="gradient-text">Widgets</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real-time market data, economic calendars, and curated news feeds focused on Italian
            investment opportunities. All widgets are free and can be embedded on your site.
          </p>
          <Link
            href="/widgets/snippets"
            className="inline-flex items-center gap-2 mt-4 text-accent hover:underline"
          >
            <Code2 className="h-4 w-4" />
            View embed code snippets
          </Link>
        </div>

        <Tabs tabs={tabs} />

        <div className="mt-12 p-6 rounded-lg bg-muted/50 border border-border">
          <h2 className="text-xl font-semibold mb-2">Note on Content Security Policy (CSP)</h2>
          <p className="text-sm text-muted-foreground">
            If you're embedding these widgets on your own site, you may need to add the following
            domains to your CSP script-src directive:
          </p>
          <code className="block mt-2 p-3 bg-background rounded text-xs">
            script-src 'self' 'unsafe-inline' https://widgets.investing.com
            https://sslecal2.investing.com https://tradingeconomics.com https://www.finlogix.com;
          </code>
        </div>
      </main>
    </div>
  );
}
