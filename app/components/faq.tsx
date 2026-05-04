"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How fast will you respond?",
    a: "Most inbound requests get an expert reply within about two hours. If your partnership includes tighter SLAs or campaign launches, we'll agree response targets when we finalize terms.",
  },
  {
    q: "Do you need my Shopify admin password?",
    a: "We ask for collaborator access, not your password. Shopify's collaborator system lets you grant us access with specific permissions — you stay in full control and can revoke access at any time.",
  },
  {
    q: "What if you can't fix the issue?",
    a: "You pay nothing. If our experts are unable to resolve your issue after a thorough diagnosis, you receive a full refund. No questions, no hassle.",
  },
  {
    q: "How does pricing work for creators and brands?",
    a: "We don't publish flat-rate packages anymore. Creators and brands negotiate with us directly — often including per-click or performance-aligned economics — so what you pay matches traffic, campaigns, and scope. You'll get a written summary before anything goes live.",
  },
  {
    q: "Do you work on all Shopify themes and apps?",
    a: "Yes. We work with all Shopify themes (including custom and third-party), all Shopify plans, and virtually all third-party apps. If something is causing a conflict on your Shopify store, we can investigate and fix it.",
  },
  {
    q: "What happens after the fix?",
    a: "You receive a detailed report explaining what was broken, what we changed, and how to avoid it in the future. Ongoing partnerships can include follow-up checks depending on what we negotiate.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#fff7ed] text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight mb-4">
            Common Questions
          </h2>
          <p className="text-gray-500 text-lg">Everything you need to know before reaching out.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#fed7aa] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[#fff7ed] transition-colors"
              >
                <span className="flex-1 min-w-0 font-bold text-[#171717] text-sm pr-4 text-left">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-[#f97316] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 bg-[#fff7ed] border-t border-[#fed7aa]">
                  <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
