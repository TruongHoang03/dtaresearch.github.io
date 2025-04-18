import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viện Công nghệ số và Trí tuệ nhân tạo",
  description: "Institute of Digital Technology and Artificial Intelligence",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/dta.png",
    apple: "/dta.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}