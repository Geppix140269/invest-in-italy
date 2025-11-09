interface ItalyNewsFeedProps {
  height?: number;
}

export function ItalyNewsFeed({ height = 700 }: ItalyNewsFeedProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-border shadow-lg">
      <iframe
        src="https://tradingeconomics.com/italy/news"
        width="100%"
        height={height}
        frameBorder="0"
        loading="lazy"
        title="Italy Economic News - TradingEconomics"
        className="w-full"
        aria-label="Live Italy Economic News Feed"
      />
    </div>
  );
}
