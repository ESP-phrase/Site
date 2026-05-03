"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setError("Network error — please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="bg-[#f0f4ff] py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl px-8 py-10 shadow-sm border border-[#e0e9ff]">
          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-[#0f2d5e] flex items-center justify-center mx-auto mb-5">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-2xl font-black text-[#0f2d5e] mb-2">
            Get Shopify Tips & Emergency Alerts
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Join store owners who get our weekly Shopify tips, common issue fixes, and priority access when something breaks.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-green-50 border border-green-200">
              <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-700 font-semibold text-sm">You&apos;re in! We&apos;ll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="your@store.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-[#e0e9ff] text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-xl bg-[#0f2d5e] text-white font-bold text-sm hover:bg-[#1a3f7a] transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === "loading" ? "Joining..." : "Join the List"}
              </button>
            </form>
          )}

          {error && (
            <p className="text-red-500 text-xs mt-3">{error}</p>
          )}

          <p className="text-gray-400 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
