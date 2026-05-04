"use client";

import Link from "next/link";

const badges = [
  { value: "2,000+", label: "Stores Fixed" },
  { value: "2hr", label: "Avg Response" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function Hero() {
  return (
    <section className="relative bg-[#171717] h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left — copy */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Shopify Problem?{" "}
              <span className="text-[#fb923c]">Stop Losing Sales.</span>
              <br />
              We Fix It <span className="text-[#fb923c]">In Hours.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed">
              Checkout errors, theme bugs, app conflicts, payment failures — our eCommerce experts diagnose
              and resolve your issues in hours, not days. Shopify, WooCommerce, BigCommerce, and more.
            </p>

            {/* Quick issue selector */}
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2.5">What&apos;s broken?</p>
              <div className="flex flex-wrap gap-2">
                {["Checkout Error", "Theme / Display Bug", "App Conflict", "Speed Issues", "Payment Failure"].map((issue) => (
                  <a
                    key={issue}
                    href="#contact"
                    onClick={() => sessionStorage.setItem("selectedIssue", issue)}
                    className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium hover:bg-[#f97316] hover:border-[#f97316] hover:text-white transition-colors"
                  >
                    {issue}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="#contact"
                className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#f97316] text-white font-bold text-base transition-colors shadow-lg shadow-orange-500/30"
              >
                Get Help Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#pricing"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/30 text-white font-bold text-base hover:bg-white/5 transition-colors"
              >
                See Pricing
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 border-t border-white/10 pt-6">
              {badges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2.5">
                  <div className="text-xl font-black text-white">{badge.value}</div>
                  <div className="text-xs text-white/50 leading-tight">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual element */}
          <div className="hidden lg:flex justify-center items-center py-8">
            <div className="relative w-full">

              {/* Floating fix badge */}
              <div className="absolute -top-5 -right-2 z-20 flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#f97316] shadow-xl shadow-orange-500/30">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-sm font-bold">Issue Fixed!</span>
              </div>

              {/* Browser mockup */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                {/* Chrome bar */}
                <div className="bg-[#1c1c1c] px-5 py-3 flex items-center gap-2 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  <div className="flex-1 mx-3 h-6 rounded-md bg-white/10 flex items-center px-3 gap-2">
                    <svg className="w-3 h-3 text-white/40 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-xs text-white/40">mystore.myshopify.com/checkout</span>
                  </div>
                </div>

                {/* Page content */}
                <div className="bg-[#111111] p-7 space-y-4">
                  {/* Error banner */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                    <svg className="w-6 h-6 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <div className="text-red-400 text-sm font-bold mb-0.5">Checkout Error 422</div>
                      <div className="text-white/50 text-sm">Payment gateway timeout. Transaction could not be processed.</div>
                    </div>
                  </div>

                  {/* Fake form fields */}
                  <div className="space-y-2.5">
                    <div className="h-11 rounded-lg bg-white/5 border border-white/10 flex items-center px-4">
                      <div className="h-2.5 w-32 rounded bg-white/20" />
                    </div>
                    <div className="h-11 rounded-lg bg-white/5 border border-white/10 flex items-center px-4">
                      <div className="h-2.5 w-40 rounded bg-white/20" />
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="h-11 rounded-lg bg-white/5 border border-white/10" />
                      <div className="h-11 rounded-lg bg-white/5 border border-white/10" />
                    </div>
                  </div>

                  {/* Disabled CTA */}
                  <div className="h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <span className="text-red-400 text-sm font-semibold">Complete Purchase — Unavailable</span>
                  </div>
                </div>
              </div>

              {/* Floating expert card */}
              <div className="absolute -bottom-5 -left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#262626] border border-white/10 shadow-xl">
                <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 bg-[#f97316]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://i.pravatar.cc/100?img=11"
                    alt="Alex"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white text-sm font-bold">Alex — Shopify Expert</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs">Diagnosing your issue...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div id="hero-sentinel" className="absolute bottom-0 left-0 w-px h-px" />
    </section>
  );
}
