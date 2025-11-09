import { getItalyNews, getRelativeTime } from '@/lib/rss';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

export async function ItalyRSSAggregator() {
  const news = await getItalyNews();

  if (news.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>No Italy-related news found. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {news.map((item, index) => (
        <article
          key={index}
          className="border-b border-border pb-4 last:border-0 hover:bg-muted/30 p-3 rounded-md transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {item.source}
                </Badge>
                {item.category && (
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                )}
                <span className="text-xs text-muted-foreground">
                  {getRelativeTime(item.pubDate)}
                </span>
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1 flex items-center gap-2">
                  {item.title}
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                {item.summary && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.summary}
                  </p>
                )}
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
