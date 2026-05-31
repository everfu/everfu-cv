import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_SC } from "next/font/google";

import { getMetadataBase } from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.scss";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "Everfu CV",
  description: "A print-friendly resume built with Next.js."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geist.variable} ${notoSansSC.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
