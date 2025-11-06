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
