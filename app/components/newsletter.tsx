"use client";

import { useState } from "react";

const perks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Weekly Shopify Tips",
    desc: "Actionable fixes and optimizations sent every Tuesday — no fluff.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Emergency Alerts",
    desc: "Get notified about Shopify outages and common bugs before they hit your store.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Priority Access",
    desc: "Subscribers get moved to the front of the queue when they need a fix.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Free Monthly Audit Checklist",
    desc: "A printable Shopify health checklist to catch issues before they become crises.",
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative bg-[#04040a] overflow-hidden py-20 lg:py-28">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #38bdf8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2563eb] opacity-10 blur-[80px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/30 text-[#38bdf8] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              Free — No Spam Ever
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Stay One Step Ahead
              <br />
              <span className="text-[#38bdf8]">of Shopify Disasters.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Join 1,200+ store owners who get our weekly tips, emergency alerts, and priority access — straight to their inbox.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((perk) => (
                <div key={perk.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2563eb]/20 border border-[#2563eb]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                    {perk.icon}
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold mb-0.5">{perk.title}</div>
                    <div className="text-white/50 text-xs leading-relaxed">{perk.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <div className="mb-6">
              <h3 className="text-xl font-black text-white mb-1">Get on the List</h3>
              <p className="text-white/50 text-sm">Free forever. Unsubscribe anytime.</p>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-bold text-lg mb-1">You&apos;re in!</p>
                <p className="text-white/50 text-sm">Check your inbox for a welcome email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@yourstore.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#38bdf8] focus:bg-white/15 transition"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs">Something went wrong — please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-[#2563eb] text-white font-black text-sm hover:bg-[#1d4ed8] transition-colors disabled:opacity-60 shadow-lg shadow-blue-500/30"
                >
                  {status === "loading" ? "Joining..." : "Join 1,200+ Store Owners →"}
                </button>

                <div className="flex items-center justify-center gap-4 pt-2">
                  {["No spam", "Free forever", "Unsubscribe anytime"].map((t) => (
                    <span key={t} className="flex items-center gap-1 text-white/30 text-xs">
                      <svg className="w-3 h-3 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {t}
                    </span>
                  ))}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
