export const DEFAULT_RSS_FEEDS = [
  'https://www.borsaitaliana.it/rss/news/news.xml',
  'https://www.ansa.it/sito/ansait_rss.xml',
  'https://www.ilsole24ore.com/rss/italia--finanza.xml',
];

export const DEFAULT_KEYWORDS = [
  'Italia',
  'Italy',
  'Puglia',
  'energia',
  'rinnovabili',
  'manifattura',
  'data center',
  'turismo',
  'ospitalità',
  'investimenti',
  'borsa',
  'economia',
  'finanza',
];

export function getFeedUrls(): string[] {
  const envFeeds = process.env.ITALY_RSS_FEEDS;
  if (envFeeds) {
    return envFeeds.split(',').map((url) => url.trim());
  }
  return DEFAULT_RSS_FEEDS;
}

export function getKeywords(): string[] {
  const envKeywords = process.env.ITALY_RSS_KEYWORDS;
  if (envKeywords) {
    return envKeywords.split(',').map((kw) => kw.trim().toLowerCase());
  }
  return DEFAULT_KEYWORDS.map((kw) => kw.toLowerCase());
}
