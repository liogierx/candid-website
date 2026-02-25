import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  title: "CANDID study",
  description: "CANDID study website",
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

        {/* Floating "Study update" button */}
        <Link
          href="/studyupdate"
          className="fixed bottom-6 right-6 z-[999]
                     inline-flex items-center gap-2
                     rounded-full px-5 py-3 text-sm font-medium text-white
                     bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb]
                     shadow-lg hover:opacity-90 transition"
        >
          Study update <span className="text-white/80">↗</span>
        </Link>
        <Analytics />
      </body>
    </html>
  );
}
