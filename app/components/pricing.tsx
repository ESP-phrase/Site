"use client";

import Link from "next/link";

const partnershipPoints = [
  {
    title: "Performance-aligned terms",
    description:
      "We work with creators and brands on structures that match how you scale — including negotiated per-click or performance-based arrangements instead of flat monthly packages.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Custom scope per partner",
    description:
      "Campaign volume, storefront complexity, and support depth all inform the deal. You discuss goals and economics with our team — nothing is one-size-fits-all.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Same expert-quality fixes",
    description:
      "Checkout errors, themes, apps, speed — you still get vetted eCommerce specialists and clear reporting; only the commercial model is tailored to your partnership.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Pricing() {
  return (
    <section id="partnership" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#fff7ed] text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4">
            Creators &amp; brands
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171717] tracking-tight mb-4">
            No flat-rate checkout.
            <br />
            <span className="text-[#f97316]">Negotiate what fits you.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We retired fixed packages on the site. If you&apos;re a creator or brand, we&apos;ll scope support together — including{" "}
            <strong className="text-[#171717] font-semibold">per-click</strong> or other performance-aligned terms — so economics match your campaigns and traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {partnershipPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#fff7ed] border border-[#fed7aa] p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#171717] text-white flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#171717] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-[#171717] px-8 py-10 text-center">
          <p className="text-white font-bold text-lg mb-2">Ready to talk numbers?</p>
          <p className="text-white/60 text-sm max-w-xl mx-auto mb-6">
            Tell us who you are, your store or audience size, and what you&apos;re trying to achieve. We&apos;ll follow up to discuss CPC, bundles, or hybrid models — whatever aligns with both sides.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#f97316] text-white font-bold text-sm hover:bg-[#ea580c] transition-colors w-full sm:w-auto"
            >
              Start a partnership conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://wa.me/15127967462"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border-2 border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {[
            {
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              label: "Shopify Partner certified",
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              label: "SSL secure collaboration",
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              label: "2,000+ stores supported",
            },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="text-[#f97316]">{badge.icon}</span>
              <span className="font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
