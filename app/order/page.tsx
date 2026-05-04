"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

const planDetails: Record<string, { name: string; price: string; features: string[]; response: string }> = {
  basic: {
    name: "Basic Fix",
    price: "$35",
    response: "Response within 4 hours",
    features: ["1 issue diagnosed & fixed", "Fix report included", "30-day fix guarantee", "Email support"],
  },
  priority: {
    name: "Priority",
    price: "$175",
    response: "Response within 2 hours",
    features: ["Up to 3 issues fixed", "Detailed fix report", "60-day fix guarantee", "Priority chat support", "Follow-up check included"],
  },
  lifetime: {
    name: "Lifetime",
    price: "$299",
    response: "Response within 30 minutes",
    features: ["Unlimited issues, forever", "Full audit + fix report", "Lifetime fix guarantee", "Dedicated Slack channel", "Priority 24/7 support"],
  },
};

function OrderForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planKey = searchParams.get("plan") || "basic";
  const plan = planDetails[planKey] || planDetails.basic;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!planDetails[planKey]) router.replace("/order?plan=basic");
  }, [planKey, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planKey, name, email, storeUrl, description }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] flex flex-col">
      {/* Top bar */}
      <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Link href="/#pricing" className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to pricing
        </Link>
        <span className="text-white/30 text-xs">Secured by Stripe · SSL Encrypted</span>
      </div>

      <div className="flex-1 flex items-start justify-center px-4 py-12">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left — plan summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div className="rounded-2xl bg-[#171717] border border-white/10 overflow-hidden">
                <div className="bg-[#f97316] px-6 py-5">
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Selected Plan</p>
                  <div className="flex items-end gap-2">
                    <span className="text-white font-black text-3xl">{plan.price}</span>
                    <span className="text-white/60 text-sm mb-1">/ fix</span>
                  </div>
                  <p className="text-white font-bold text-lg mt-1">{plan.name}</p>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[#fb923c] text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {plan.response}
                  </div>
                  <div className="border-t border-white/10 pt-3 space-y-2.5">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-[#f97316] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/70 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                    <p className="text-white/50 text-xs">
                      Not the right plan?{" "}
                      <Link href="/#pricing" className="text-[#fb923c] hover:underline font-medium">
                        Change plan
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <h1 className="text-2xl font-black text-white mb-1">Tell us about your issue</h1>
            <p className="text-white/50 text-sm mb-8">
              Our expert reviews your details immediately after payment and gets to work.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]/30 transition text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@store.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]/30 transition text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wide">
                  Store URL
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://yourstore.myshopify.com"
                  value={storeUrl}
                  onChange={(e) => setStoreUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]/30 transition text-base"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wide">
                  Describe the Problem
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="e.g. Checkout page shows a blank screen after adding items to cart. Started happening after installing the XYZ app yesterday..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]/30 transition resize-none text-base"
                />
              </div>

              {error && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                  </svg>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#f97316] text-white font-black text-base hover:bg-[#ea580c] transition-colors disabled:opacity-60 flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20"
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Redirecting to payment...
                  </>
                ) : (
                  <>
                    Continue to Payment — {plan.price}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-white/30">
                Secured by Stripe &middot; SSL encrypted &middot; Cancel anytime
              </p>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}

export default function OrderPage() {
  return (
    <Suspense>
      <OrderForm />
    </Suspense>
  );
}
