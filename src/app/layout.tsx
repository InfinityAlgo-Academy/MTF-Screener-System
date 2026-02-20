import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MTF Screener MA Cross System | InfinityAlgo Academy",
  description: "Professional multi-timeframe analytical framework that integrates moving average cross logic, higher timeframe context, risk modeling and multi-symbol monitoring within a unified interface. Free download for MT4, MT5, TradingView.",
  keywords: ["MTF Screener", "MA Cross System", "Trading Indicator", "MT4", "MT5", "TradingView", "Moving Average", "Multi-timeframe Analysis", "InfinityAlgo"],
  authors: [{ name: "InfinityAlgo Academy" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "MTF Screener MA Cross System | InfinityAlgo Academy",
    description: "Professional multi-timeframe analytical framework for trading. Free download for MT4, MT5, TradingView.",
    url: "https://infinityalgoacademy.net/item/mtf-screener-ma-cross-system/",
    siteName: "InfinityAlgo Academy",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MTF Screener MA Cross System",
    description: "Professional multi-timeframe analytical framework for trading.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cairo.variable}>
      <body className={`${cairo.className} antialiased bg-white text-slate-900`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
