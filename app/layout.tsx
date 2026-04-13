import type { Metadata } from "next";

import { getMetadataBase } from "@/lib/site";

import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "Everfu CV",
  description: "A print-friendly resume built with Next.js.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
