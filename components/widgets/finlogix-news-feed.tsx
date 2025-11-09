interface FinlogixNewsFeedProps {
  src?: string;
  height?: number;
  theme?: 'light' | 'dark';
}

export function FinlogixNewsFeed({ src, height = 600, theme = 'light' }: FinlogixNewsFeedProps) {
  if (!src) {
    return (
      <div className="rounded-lg border-2 border-dashed border-muted p-8 text-center">
        <h3 className="text-lg font-semibold mb-2">Finlogix Widget Not Configured</h3>
        <p className="text-sm text-muted-foreground mb-4">
          To display the Finlogix news feed, please:
        </p>
        <ol className="text-sm text-left max-w-md mx-auto space-y-2">
          <li>1. Visit <a href="https://www.finlogix.com/widgets" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Finlogix Widgets</a></li>
          <li>2. Generate a news feed widget</li>
          <li>3. Copy the iframe URL</li>
          <li>4. Pass it as the <code className="bg-muted px-1 rounded">src</code> prop</li>
        </ol>
      </div>
    );
  }

  return (
    <iframe
      src={src}
      width="100%"
      height={height}
      loading="lazy"
      frameBorder="0"
      title="Finlogix News Feed"
      className={`rounded-md ${theme === 'dark' ? 'invert' : ''}`}
      aria-label="Finlogix Financial News Feed"
    />
  );
}
