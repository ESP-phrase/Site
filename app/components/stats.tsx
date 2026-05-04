const stats = [
  { value: "2,000+", label: "Stores Fixed", sub: "across 40+ countries" },
  { value: "98%", label: "Satisfaction Rate", sub: "verified post-fix reviews" },
  { value: "2hr", label: "Avg Response Time", sub: "from submission to fix start" },
  { value: "5yr", label: "Shopify Experience", sub: "certified Shopify Partners" },
];

const highlights = [
  "Shopify Partner certified experts",
  "No overseas outsourcing — direct experts only",
  "We fix it or you don't pay",
  "Worked on 2,000+ live stores",
  "Available 24 hours, 7 days a week",
  "Transparent pricing, no hidden fees",
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-[#171717] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              We Live &amp; Breathe{" "}
              <span className="text-[#fb923c]">Shopify</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Since 2016, we&apos;ve been the behind-the-scenes team powering hundreds of Shopify stores.
              Every developer, designer, and marketer is vetted specifically for eCommerce — no generalists, ever.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-[#fb923c] mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-[#fb923c] mb-1">{stat.label}</div>
                <div className="text-xs text-white/50">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
