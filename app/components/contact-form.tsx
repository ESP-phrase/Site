"use client";

import { useState, useEffect } from "react";


export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    storeUrl: "",
    issueType: "",
    description: "",
  });

  useEffect(() => {
    const stored = sessionStorage.getItem("selectedIssue");
    if (stored) {
      setForm((f) => ({ ...f, issueType: stored }));
      setSelectedIssue(stored);
      sessionStorage.removeItem("selectedIssue");
    }
  }, []);

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const conversionId = `lead-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, conversionId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);

      // Reddit pixel — same conversionId as CAPI event for deduplication
      if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).rdt) {
        (window as unknown as { rdt: (event: string, type: string, data: Record<string, string>) => void }).rdt("track", "Lead", { conversionId });
      }
    } catch {
      setError("Network error — please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#fff7ed] text-[#f97316] text-xs font-bold uppercase tracking-widest mb-6">
              Get Help
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171717] tracking-tight mb-6 leading-tight">
              Store Down?
              <br />
              <span className="text-[#f97316]">Let&apos;s Fix It Now.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Fill out the form and a Shopify expert will reach out to you within minutes.
              No commitments until you approve the fix plan.
            </p>

          </div>

          <div className="bg-[#fff7ed] rounded-2xl p-5 sm:p-8 border border-[#fed7aa]">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#171717] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-[#171717] mb-2">Request Received!</h3>
                <p className="text-gray-500 text-sm">
                  A Shopify expert will be in touch within the hour. Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#fed7aa] text-base sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/30 focus:border-[#f97316] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@mystore.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#fed7aa] text-base sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/30 focus:border-[#f97316] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1.5">
                    Store URL
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://mystore.myshopify.com"
                    value={form.storeUrl}
                    onChange={(e) => update("storeUrl", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#fed7aa] text-base sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/30 focus:border-[#f97316] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1.5">
                    Issue Type
                  </label>
                  <select
                    required
                    value={form.issueType}
                    onChange={(e) => update("issueType", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#fed7aa] text-base sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]/30 focus:border-[#f97316] transition"
                  >
                    <option value="">Select an issue type</option>
                    <option>Checkout Error</option>
                    <option>Theme / Display Bug</option>
                    <option>App Conflict</option>
                    <option>Speed Issues</option>
                    <option>Payment Failure</option>
                    <option>Emergency Migration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171717] uppercase tracking-wider mb-1.5">
                    Describe the Problem
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us exactly what's broken, any error messages you're seeing, and when it started..."
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#fed7aa] text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/30 focus:border-[#f97316] transition resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-xs text-red-600">{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-[#171717] text-white font-bold text-sm hover:bg-[#262626] disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit Fix Request"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
