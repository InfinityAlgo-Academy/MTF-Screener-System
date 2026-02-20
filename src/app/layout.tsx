import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "MTF Screener MA Cross System | InfinityAlgo Academy",
  description: "Professional multi-timeframe analytical framework that integrates moving average cross logic, higher timeframe context, risk modeling and multi-symbol monitoring within a unified interface. Free download for MT4, MT5, TradingView.",
  keywords: ["MTF Screener", "MA Cross System", "Trading Indicator", "MT4", "MT5", "TradingView", "Moving Average", "Multi-timeframe Analysis", "InfinityAlgo"],
  authors: [{ name: "InfinityAlgo Academy" }],
  icons: {
    icon: "https://infinityalgoacademy.net/wp-content/uploads/2025/06/cropped-cropped-photo_2025-06-04_18-26-58-1-32x32.jpg",
  },
  openGraph: {
    title: "MTF Screener MA Cross System | InfinityAlgo Academy",
    description: "Professional multi-timeframe analytical framework for trading. Free download for MT4, MT5, TradingView.",
    url: "https://infinityalgoacademy.net/item/mtf-screener-ma-cross-system/",
    siteName: "InfinityAlgo Academy",
    type: "website",
    images: [
      {
        url: "https://infinityalgoacademy.net/wp-content/uploads/2026/02/MTF-Screener-MA-Cross-System-.png",
        width: 1962,
        height: 965,
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MTF Screener MA Cross System",
    description: "Professional multi-timeframe analytical framework for trading.",
    images: ["https://infinityalgoacademy.net/wp-content/uploads/2026/02/MTF-Screener-MA-Cross-System-.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
