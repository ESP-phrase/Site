import Link from "next/link";

const points = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Full refund if we can't fix it",
    desc: "If our experts can't resolve your issue, you pay nothing. No questions asked.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "30-day fix guarantee",
    desc: "If the same issue comes back within 30 days, we fix it again at no charge.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "You approve before we touch anything",
    desc: "We send a full fix plan for your approval before making a single change to your store.",
  },
];

export default function Guarantee() {
  return (
    <section className="py-16 bg-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-4">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              We Fix It Or You{" "}
              <span className="text-[#fb923c]">Don&apos;t Pay.</span>
              <br />Period.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We stand behind every fix we deliver. No hedging, no excuses — if the problem isn&apos;t solved, neither is your bill.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f97316] text-white font-bold text-sm hover:bg-[#ea580c] transition-colors"
            >
              Get Help Risk-Free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="lg:w-1/2 w-full space-y-4">
            {points.map((point) => (
              <div key={point.title} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#f97316]/20 text-[#fb923c] flex items-center justify-center shrink-0">
                  {point.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-1">{point.title}</div>
                  <div className="text-white/50 text-sm leading-relaxed">{point.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
