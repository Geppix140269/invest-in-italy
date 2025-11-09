import Parser from 'rss-parser';
import { getFeedUrls, getKeywords } from '@/config/feeds';

export interface ItalyNewsItem {
  title: string;
  link: string;
  pubDate: Date;
  source: string;
  category?: string;
  summary?: string;
}

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; InvestInItaly/1.0)',
  },
});

function sanitizeText(text: string): string {
  // Strip HTML tags, keep plain text only
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}

function matchesKeywords(text: string, keywords: string[]): boolean {
  const lowerText = text.toLowerCase();
  return keywords.some((keyword) => lowerText.includes(keyword));
}

function extractSource(feedUrl: string): string {
  if (feedUrl.includes('borsaitaliana')) return 'Borsa Italiana';
  if (feedUrl.includes('ansa')) return 'ANSA';
  if (feedUrl.includes('ilsole24ore')) return 'Il Sole 24 Ore';
  return 'Italy News';
}

async function fetchFeed(url: string, keywords: string[]): Promise<ItalyNewsItem[]> {
  try {
    const feed = await parser.parseURL(url);
    const source = extractSource(url);

    const items: ItalyNewsItem[] = (feed.items || [])
      .filter((item) => {
        const title = item.title || '';
        const description = item.contentSnippet || item.content || '';
        const combined = `${title} ${description}`;
        return matchesKeywords(combined, keywords);
      })
      .map((item) => ({
        title: sanitizeText(item.title || 'Untitled'),
        link: item.link || '#',
        pubDate: item.pubDate ? new Date(item.pubDate) : new Date(),
        source,
        category: item.categories?.[0] || undefined,
        summary: item.contentSnippet
          ? sanitizeText(item.contentSnippet).slice(0, 160) + '...'
          : undefined,
      }));

    return items;
  } catch (error) {
    console.error(`Failed to fetch feed ${url}:`, error);
    return [];
  }
}

export async function getItalyNews(): Promise<ItalyNewsItem[]> {
  const feedUrls = getFeedUrls();
  const keywords = getKeywords();

  // Fetch all feeds in parallel with Next.js caching
  const allFeedPromises = feedUrls.map((url) => fetchFeed(url, keywords));

  try {
    const allFeeds = await Promise.all(allFeedPromises);
    const allItems = allFeeds.flat();

    // Sort by date descending, take top 25
    const sorted = allItems
      .filter((item) => item.pubDate instanceof Date && !isNaN(item.pubDate.getTime()))
      .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
      .slice(0, 25);

    return sorted;
  } catch (error) {
    console.error('Error aggregating Italy news:', error);
    return [];
  }
}

export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}
