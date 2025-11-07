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
  title: "Invest in Italy - Expert Italian Investment Advisory",
  description: "Premium investment advisory services for foreign investors. Expert guidance on Italian real estate, business acquisitions, tax benefits, and hospitality investments from international executives.",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://invest-in-italy.com',
    siteName: 'Invest in Italy',
    title: 'Invest in Italy - Expert Italian Investment Advisory',
    description: 'Premium investment advisory services for foreign investors. Expert guidance on Italian real estate, business acquisitions, tax benefits, and hospitality investments.',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Invest in Italy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invest in Italy - Expert Italian Investment Advisory',
    description: 'Premium investment advisory services for foreign investors.',
    images: ['/images/og-image.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SofiaChat />
      </body>
    </html>
  );
}
