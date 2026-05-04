"use client";

import { useState, useEffect } from "react";

const COUPON_CODE = "SAVE25";
const STORAGE_KEY = "td_coupon_dismissed";

function getEmailError(val: string): string {
  if (!val) return "";
  if (!val.includes("@")) return "Missing @ — e.g. name@store.com";
  const [local, domain] = val.split("@");
  if (!local) return "Add something before the @";
  if (!domain || !domain.includes(".")) return "Add a domain — e.g. name@store.com";
  return "";
}

export default function CouponPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "revealed">("idle");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed/used this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    // Trigger 1: exit intent (mouse moves toward top of browser)
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY < 20 && !dismissed) {
        setVisible(true);
      }
    };

    // Trigger 2: after 50 seconds if still on page
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    }, 50000);

    document.addEventListener("mouseleave", handleExitIntent);
    return () => {
      document.removeEventListener("mouseleave", handleExitIntent);
      clearTimeout(timer);
    };
  }, [dismissed]);

  function dismiss() {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = getEmailError(email);
    if (err || !email) { setEmailError(err || "Email is required"); return; }
    setEmailError("");
    setStatus("loading");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "coupon_popup" }),
      });
    } catch {
      // Non-fatal — still reveal the code
    }
    setStatus("revealed");
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  function copyCode() {
    navigator.clipboard.writeText(COUPON_CODE).catch(() => {});
  }

  if (!visible) return null;

  return (
    <>
      {/* Mobile: tap dimmed area to close instantly */}
      <button
        type="button"
        aria-label="Close offer"
        onClick={dismiss}
        className="sm:hidden fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px]"
      />

      <div
        className="fixed z-50 left-4 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:left-auto sm:right-6 sm:bottom-6 w-auto sm:w-80 max-w-md mx-auto sm:mx-0"
        style={{ animation: "slideUp 0.35s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

        <div className="relative bg-[#171717] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
        {/* Top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#f97316] to-[#fb923c]" />

        <div className="p-5">
          {/* Dismiss — large tap target on mobile */}
          <button
            type="button"
            onClick={dismiss}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 w-11 h-11 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-white/10 sm:bg-transparent text-white/80 hover:text-white hover:bg-white/20 sm:hover:bg-transparent transition"
            aria-label="Close"
          >
            <svg className="w-5 h-5 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {status !== "revealed" ? (
            <>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f97316]/15 border border-[#f97316]/25 mb-3">
                <svg className="w-3 h-3 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="text-[#f97316] text-xs font-bold uppercase tracking-wide">Limited Offer</span>
              </div>

              <h3 className="text-white font-black text-lg leading-tight mb-1">
                Get 25% Off Your First Fix
              </h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Enter your email to unlock the discount code. One-time use.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(getEmailError(e.target.value)); }}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white/5 border text-white text-sm placeholder-white/25 focus:outline-none focus:ring-1 transition pr-9 ${
                      emailError ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20" : "border-white/10 focus:border-[#f97316]/50 focus:ring-[#f97316]/20"
                    }`}
                  />
                  {email && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {emailError ? (
                        <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
                {emailError && (
                  <p className="text-red-400 text-[11px] flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {emailError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-2.5 rounded-xl bg-[#f97316] text-white font-bold text-sm hover:bg-[#ea580c] transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Unlocking..." : "Unlock My 25% Off"}
                </button>
              </form>

              <button
                type="button"
                onClick={dismiss}
                className="w-full py-3 text-sm font-medium text-white/50 hover:text-white/80 active:text-white/90 sm:py-2"
              >
                No thanks
              </button>

              <p className="text-white/25 text-[10px] text-center mt-1">
                No spam. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Your code is ready!</p>
                  <p className="text-white/40 text-xs">Mention SAVE25 when you finalize terms with us</p>
                </div>
              </div>

              <button
                onClick={copyCode}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-dashed border-[#f97316]/50 hover:bg-white/10 transition group"
              >
                <span className="text-[#fb923c] font-black text-lg tracking-widest">{COUPON_CODE}</span>
                <span className="flex items-center gap-1 text-white/40 group-hover:text-white/70 text-xs transition">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </span>
              </button>

              <a
                href="/#partnership"
                onClick={dismiss}
                className="block text-center text-[#f97316] text-xs font-bold mt-3 hover:underline"
              >
                Partnership overview →
              </a>

              <button
                type="button"
                onClick={dismiss}
                className="w-full py-3 mt-2 text-sm font-medium text-white/50 hover:text-white/80 sm:py-2"
              >
                Close
              </button>
            </>
          )}
        </div>
        </div>
      </div>
    </>
  );
}
