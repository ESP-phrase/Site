import Image from "next/image";

const testimonials = [
  {
    quote:
      "Our checkout was broken on a Friday night before a major product launch. TaskDudes had it fixed in under 90 minutes. Absolute lifesavers. We would have lost thousands.",
    name: "Marcus T.",
    role: "Founder, RunGear Co.",
    rating: 5,
    tag: "Checkout Fix",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    quote:
      "After updating a third-party loyalty app, half our theme stopped rendering. TaskDudes diagnosed the script conflict in 30 minutes and cleaned everything up perfectly.",
    name: "Priya M.",
    role: "CEO, LuxeHome Decor",
    rating: 5,
    tag: "App Conflict",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    quote:
      "I had no idea why our store was loading so slowly. They audited everything and cut our load time from 8 seconds to under 2. Conversions went up 23% that same week.",
    name: "Jake S.",
    role: "Store Owner, UrbanKicks",
    rating: 5,
    tag: "Speed Optimization",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f0f4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-white text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090f] tracking-tight mb-4">
            What Shopify Store Owners Say
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Real fixes. Real results. From real store owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl p-8 shadow-sm border border-[#e0e9ff] flex flex-col ${
                i === 1 ? "md:mt-8" : i === 2 ? "md:mt-4" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <StarRating count={t.rating} />
                <span className="text-xs font-semibold text-[#2563eb] bg-[#f0f4ff] px-2.5 py-1 rounded-full">
                  {t.tag}
                </span>
              </div>

              <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 bg-[#09090f]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#09090f]">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
