import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from './header';
import { Footer } from './footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viện Công nghệ số và Trí tuệ nhân tạo",
  description: "Institute of Digital Technology and Artificial Intelligence",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/dta.png", type: "image/png" }
    ],
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}