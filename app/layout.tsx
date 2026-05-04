import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import ClarityInit from "./components/clarity";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TaskDudes — Shopify Break Fixes, Fast",
  description:
    "When your Shopify store breaks, TaskDudes fixes it. Checkout errors, theme bugs, app conflicts, payment failures — resolved by experts in hours, not days.",
  keywords: ["Shopify support", "Shopify fix", "Shopify emergency", "TaskDudes"],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "TaskDudes — Shopify Break Fixes, Fast",
    description:
      "When your Shopify store breaks, TaskDudes fixes it. Checkout errors, theme bugs, app conflicts, payment failures — resolved by experts in hours, not days.",
    type: "website",
    locale: "en_US",
    siteName: "TaskDudes",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskDudes — Shopify Break Fixes, Fast",
    description:
      "When your Shopify store breaks, TaskDudes fixes it. Checkout errors, theme bugs, app conflicts, payment failures — resolved by experts in hours, not days.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        {children}
        <ClarityInit />
        <Analytics />
        <Script id="reddit-pixel" strategy="afterInteractive">{`
          !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js?pixel_id=a2_iy8mlikqvgbh",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);
          rdt('init','a2_iy8mlikqvgbh',{email:'aubreynicholsacc@gmail.com',phoneNumber:'+15127967462'});
          rdt('track','PageVisit');
        `}</Script>
      </body>
    </html>
  );
}
