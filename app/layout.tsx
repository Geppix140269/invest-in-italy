import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// Temporarily disabled for production build - AI SDK compatibility issue
// import { SofiaChat } from "@/components/sofia-chat";

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
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
        url: '/images/og-image.png',
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
    images: ['/images/og-image.png'],
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
        {/* Temporarily disabled for production build - AI SDK compatibility issue */}
        {/* <SofiaChat /> */}
      </body>
    </html>
  );
}
