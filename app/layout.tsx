import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
        <Analytics />
      </body>
    </html>
  );
}
