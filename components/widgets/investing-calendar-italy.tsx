'use client';

import { useEffect, useRef } from 'react';

interface InvestingCalendarItalyProps {
  theme?: 'light' | 'dark';
  width?: string;
  height?: number;
}

export function InvestingCalendarItaly({
  theme = 'light',
  width = '100%',
  height = 600,
}: InvestingCalendarItalyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current || !containerRef.current) return;

    const script = document.createElement('script');
    script.src = `https://sslecal2.investing.com/ecocalendar/getCalendar.php?theme=${theme}&columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&countries=4&calType=week&timeZone=8&lang=1`;
    script.async = true;
    script.setAttribute('data-loaded', 'true');

    containerRef.current.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      if (containerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      id="investing-ecocal"
      style={{ width, minHeight: height }}
      className="rounded-md overflow-hidden"
      aria-label="Investing.com Economic Calendar for Italy"
    />
  );
}
