import type { NextConfig } from "next";

const securityHeaders = [
  // Force HTTPS via HSTS
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Prevent clickjacking / silent embedding
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Prevent MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Basic referrer policy
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Allow public crawlers (Googlebot, GPTBot, etc.)
  {
    key: "X-Robots-Tag",
    value: "index, follow",
  },
  // Permissions policy — disable unused browser APIs
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Content Security Policy — allow Stripe, PostHog, Reddit
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://*.redditstatic.com https://us.i.posthog.com https://cdn.vercel-insights.com https://t.contentsquare.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://i.pravatar.cc https://*.redditstatic.com https://*.reddit.com",
      "frame-src https://js.stripe.com",
      "connect-src 'self' https://api.stripe.com https://us.i.posthog.com https://vitals.vercel-insights.com https://*.reddit.com https://*.redditstatic.com https://alb.reddit.com https://*.contentsquare.net",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
