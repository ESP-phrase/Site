"use client";

import { useState, useEffect } from "react";

const waitMessages = [
  "Current wait: ~12 min",
  "Experts available now",
  "Current wait: ~18 min",
  "2 experts online — fast response",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [waitMsg, setWaitMsg] = useState(waitMessages[0]);
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

  useEffect(() => {
    const idx = Math.floor(Math.random() * waitMessages.length);
    setWaitMsg(waitMessages[idx]);
    const interval = setInterval(() => {
      setWaitMsg(waitMessages[Math.floor(Math.random() * waitMessages.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
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
            <span className="inline-block px-3 py-1 rounded-full bg-[#f0f4ff] text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-6">
              Get Help
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2d5e] tracking-tight mb-6 leading-tight">
              Store Down?
              <br />
              <span className="text-[#2563eb]">Let&apos;s Fix It Now.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Fill out the form and a Shopify expert will reach out to you within minutes.
              No commitments until you approve the fix plan.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  text: "Average first response in under 2 hours",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  text: "Your store credentials are always secure",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: "Fix it or you don't pay — guaranteed",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0f2d5e] text-white flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f0f4ff] rounded-2xl p-8 border border-[#e0e9ff]">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#0f2d5e] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-[#0f2d5e] mb-2">Request Received!</h3>
                <p className="text-gray-500 text-sm">
                  A Shopify expert will be in touch within the hour. Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e0e9ff] text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@mystore.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e0e9ff] text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1.5">
                    Store URL
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://mystore.myshopify.com"
                    value={form.storeUrl}
                    onChange={(e) => update("storeUrl", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e0e9ff] text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1.5">
                    Issue Type
                  </label>
                  <select
                    required
                    value={form.issueType}
                    onChange={(e) => update("issueType", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e0e9ff] text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition"
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
                  <label className="block text-xs font-bold text-[#0f2d5e] uppercase tracking-wider mb-1.5">
                    Describe the Problem
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us exactly what's broken, any error messages you're seeing, and when it started..."
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e0e9ff] text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition resize-none"
                  />
                </div>

                {/* Response time estimator */}
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#e0e9ff]">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  <span className="text-xs text-gray-500 font-medium">{waitMsg}</span>
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
                  className="w-full py-4 px-6 rounded-xl bg-[#0f2d5e] text-white font-bold text-sm hover:bg-[#1a3f7a] disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
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
