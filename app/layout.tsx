import type { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
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
