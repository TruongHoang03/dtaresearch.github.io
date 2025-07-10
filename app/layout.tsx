import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from './header';
import { Footer } from './footer';
import { Suspense } from "react";
import GATracker from "@/components/googleAnalytics/ga-tracker";
import { Toaster } from "sonner";
import {GA_MEASUREMENT_ID} from "@/lib/gtag";

const inter = Inter({ subsets: ["latin"] });

// const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
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
      <head>
        {/* GA4 Script */}
        {GA_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <GATracker />
        </Suspense>
        <Header />
          <main>{children}</main>
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}