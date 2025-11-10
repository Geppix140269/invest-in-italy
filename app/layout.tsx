import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SofiaChat } from "@/components/sofia-chat";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Capitaly Group - Advisors and Partners for Strategic Investments in Italy",
  description: "We help international investors originate, structure, and execute high-quality deals in Italy—combining financial rigor with local execution across hospitality, energy, data infrastructure, and manufacturing.",
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/favicons/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/favicons/favicon-96x96.svg', sizes: '96x96', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  metadataBase: new URL('https://www.capitalygroup.com'),
  alternates: {
    canonical: 'https://www.capitalygroup.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.capitalygroup.com',
    siteName: 'Capitaly Group',
    title: 'Capitaly Group - Advisors and Partners for Strategic Investments in Italy',
    description: 'We help international investors originate, structure, and execute high-quality deals in Italy—combining financial rigor with local execution.',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Capitaly Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capitaly Group - Advisors and Partners for Strategic Investments in Italy',
    description: 'We help international investors originate, structure, and execute high-quality deals in Italy.',
    images: ['/images/og-image.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Capitaly Group',
    url: 'https://www.capitalygroup.com',
    logo: 'https://www.capitalygroup.com/brand/capitaly-group.svg',
    sameAs: []
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SofiaChat />
      </body>
    </html>
  );
}
