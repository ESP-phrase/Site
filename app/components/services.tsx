const services = [
  {
    tag: "Checkout",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Checkout Errors",
    description:
      "Customers can't complete purchases? We identify and fix checkout flow issues, validation errors, and payment gateway conflicts fast.",
  },
  {
    tag: "Theme",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Theme Fixes & Customization",
    description:
      "Precise code edits to your Shopify theme — broken layouts, rendering glitches, mobile issues — no rebuilds, no risk to your live store.",
  },
  {
    tag: "Apps",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "App Integration & Setup",
    description:
      "Klaviyo, Mailchimp, review apps, subscriptions — configured correctly with zero breakage. Third-party script conflicts resolved fast.",
  },
  {
    tag: "Speed",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Speed Optimization",
    description:
      "Slow load times killing conversions? We audit and optimize your store — scripts, images, fonts, and code — for blazing fast performance.",
  },
  {
    tag: "Product Page",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm7 3v4m0 0l-2-2m2 2l2-2M7 15h10" />
      </svg>
    ),
    title: "Product Page Optimization",
    description:
      "Image zoom, sticky add-to-cart, dynamic checkout buttons — built to convert more visitors into buyers without touching your theme files.",
  },
  {
    tag: "Cart",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Cart & Checkout Improvements",
    description:
      "Reduce abandonment with custom cart drawers, upsell features, and cleaner checkout flows that guide customers through to purchase.",
  },
  {
    tag: "Payment",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Payment Failures",
    description:
      "Stripe, PayPal, Shop Pay not processing? We troubleshoot gateway configurations, webhook errors, and currency conflicts.",
  },
  {
    tag: "Design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Custom Graphics & Banners",
    description:
      "Hero images, collection banners, and ad creatives crafted for your brand — designed to stop the scroll and drive more clicks.",
  },
  {
    tag: "Collections",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    title: "Collection & Navigation Setup",
    description:
      "Mega menus, nested collections, multi-tier categories — navigation structured to guide shoppers and drive more sales.",
  },
  {
    tag: "Migration",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Emergency Migrations",
    description:
      "Urgent platform moves, theme upgrades, or data migrations handled safely — with zero data loss and minimal downtime.",
  },
  {
    tag: "SEO",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
      </svg>
    ),
    title: "SEO & Metadata Fixes",
    description:
      "Missing meta titles, broken structured data, duplicate pages — we clean up your store's SEO foundation so Google actually finds you.",
  },
  {
    tag: "Analytics",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analytics & Tracking Setup",
    description:
      "GA4, Meta Pixel, TikTok Pixel, and conversion events set up correctly — so every dollar you spend on ads is properly tracked.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#fff7ed] text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4">
            What We Fix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171717] tracking-tight mb-4">
            Everything You Need When
            <br />
            <span className="text-[#f97316]">Shopify Breaks</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From minor glitches to full store outages — our team has seen it all and fixed it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-[#fff7ed] border border-transparent hover:border-[#f97316]/20 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#171717] text-white flex items-center justify-center group-hover:bg-[#f97316] transition-colors shrink-0">
                  {service.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-2 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#171717] mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Platform strip */}
        <div className="mt-14 rounded-2xl bg-[#171717] px-8 py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-0 justify-between">
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-sm mb-0.5">Not just Shopify.</p>
            <p className="text-white/50 text-xs">We fix any eCommerce platform your store runs on.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Shopify", "WooCommerce", "BigCommerce", "Magento", "Wix", "Squarespace", "Custom Stores"].map((p) => (
              <span
                key={p}
                className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/70 text-xs font-medium hover:bg-[#f97316]/20 hover:border-[#f97316]/30 hover:text-[#fb923c] transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
