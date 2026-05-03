const stats = [
  { value: "2,000+", label: "Stores Fixed", sub: "across 40+ countries" },
  { value: "98%", label: "Satisfaction Rate", sub: "verified post-fix reviews" },
  { value: "2hr", label: "Avg Response Time", sub: "from submission to fix start" },
  { value: "5yr", label: "Shopify Experience", sub: "certified Shopify Partners" },
];

const comparisons = [
  { them: "Generic freelancers & agencies", us: "Shopify Partner certified experts" },
  { them: "Overseas outsourcing, slow comms", us: "Direct experts only — no middlemen" },
  { them: "Pay upfront, no guarantees", us: "We fix it or you don't pay" },
  { them: "Little Shopify experience", us: "2,000+ live stores worked on" },
  { them: "Business hours only", us: "Available 24 hours, 7 days a week" },
  { them: "Surprise bills & hidden fees", us: "Transparent pricing, no surprises" },
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-[#0f2d5e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              We Live &amp; Breathe{" "}
              <span className="text-[#3b82f6]">Shopify</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Since 2016, we&apos;ve been the behind-the-scenes team powering hundreds of Shopify stores.
              Every developer, designer, and marketer is vetted specifically for eCommerce — no generalists, ever.
            </p>

            {/* Comparison table */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-widest">
                <div className="bg-white/5 px-4 py-2.5 text-white/40">Others</div>
                <div className="bg-[#2563eb]/20 px-4 py-2.5 text-[#3b82f6]">TaskDudes</div>
              </div>
              {comparisons.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 border-t border-white/10"
                >
                  <div className="flex items-start gap-2 px-4 py-3 bg-white/[0.02]">
                    <svg className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-xs text-white/40 leading-snug">{row.them}</span>
                  </div>
                  <div className="flex items-start gap-2 px-4 py-3 bg-[#2563eb]/5">
                    <svg className="w-3.5 h-3.5 text-[#3b82f6] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-white/80 leading-snug font-medium">{row.us}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-[#3b82f6] mb-1">{stat.label}</div>
                <div className="text-xs text-white/50">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
