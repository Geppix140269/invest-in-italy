interface TradingEconomicsItalyNewsProps {
  height?: number;
  theme?: 'light' | 'dark';
}

export function TradingEconomicsItalyNews({
  height = 600,
  theme = 'light',
}: TradingEconomicsItalyNewsProps) {
  const src = `https://tradingeconomics.com/embed/?s=italy&c=news${theme === 'dark' ? '&theme=dark' : ''}`;

  return (
    <iframe
      src={src}
      width="100%"
      height={height}
      loading="lazy"
      frameBorder="0"
      title="Trading Economics Italy News"
      className="rounded-md"
      aria-label="Trading Economics Italy News Feed"
    />
  );
}
