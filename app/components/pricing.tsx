"use client";

import { useRouter } from "next/navigation";

const plans = [
  {
    name: "Basic Fix",
    price: "$35",
    description: "Perfect for a single, well-defined issue that needs a quick resolution.",
    features: [
      "1 issue diagnosed & fixed",
      "Response within 4 hours",
      "Fix report included",
      "30-day fix guarantee",
      "Email support",
    ],
    cta: "Start Basic Fix",
    featured: false,
    plan: "basic",
  },
  {
    name: "Priority",
    price: "$175",
    description: "For urgent issues or when you need faster turnaround with ongoing support.",
    features: [
      "Up to 3 issues fixed",
      "Response within 2 hours",
      "Detailed fix report",
      "60-day fix guarantee",
      "Priority chat support",
      "Follow-up check included",
    ],
    cta: "Get Priority Help",
    featured: true,
    plan: "priority",
  },
  {
    name: "Unlimited",
    price: "$299",
    description: "Unlimited fixes every month. One flat rate, no matter how many issues come up.",
    features: [
      "Unlimited fixes per month",
      "Response within 30 minutes",
      "Full audit + fix report",
      "90-day fix guarantee",
      "Dedicated Slack channel",
      "Priority 24/7 support",
    ],
    cta: "Get Unlimited Access",
    featured: false,
    plan: "lifetime",
  },
];

export default function Pricing() {
  const router = useRouter();

  return (
    <>
      <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#fff7ed] text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171717] tracking-tight mb-4">
            Transparent Pricing.
            <br />
            <span className="text-[#f97316]">No Surprises.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Flat-rate fixes. You know exactly what you pay before we start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl flex flex-col ${
                plan.featured
                  ? "bg-[#171717] text-white shadow-2xl shadow-navy/20 ring-4 ring-[#f97316]/30 md:scale-105"
                  : "bg-[#fff7ed] text-[#171717]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#f97316] text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className={`text-lg font-bold mb-1 ${plan.featured ? "text-white" : "text-[#171717]"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1 mb-3">
                    <span className={`text-5xl font-black tracking-tight ${plan.featured ? "text-white" : "text-[#171717]"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm mb-2 ${plan.featured ? "text-white/60" : "text-gray-500"}`}>
                      / fix
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.featured ? "text-white/70" : "text-gray-500"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-[#fb923c]" : "text-[#f97316]"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.featured ? "text-white/80" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => router.push(`/order?plan=${plan.plan}`)}
                  className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-xl font-bold text-sm transition-colors ${
                    plan.featured
                      ? "bg-[#f97316] text-white hover:bg-[#ea580c]"
                      : "bg-[#171717] text-white hover:bg-[#262626]"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {[
            {
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              label: "Shopify Partner Certified",
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              label: "SSL Secure",
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              label: "30-Day Fix Guarantee",
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              label: "2,000+ Stores Fixed",
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
    </>
  );
}

