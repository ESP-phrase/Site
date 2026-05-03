"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const badges = [
  { value: "2,000+", label: "Stores Fixed" },
  { value: "2hr", label: "Avg Response" },
  { value: "98%", label: "Satisfaction Rate" },
];

const issues = ["Broke?", "Crashing?", "Losing Sales?", "Down?", "Erroring?"];

export default function Hero() {
  const [issueIndex, setIssueIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = issues[issueIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIssueIndex((i) => (i + 1) % issues.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, issueIndex]);

  return (
    <section className="relative bg-[#0f2d5e] h-screen flex items-center overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#2563eb] opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#1d4ed8] opacity-10 blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Your Shopify Store{" "}
            <span className="text-[#3b82f6]">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            We Fix It <span className="text-[#3b82f6]">Fast.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-7 leading-relaxed">
            Checkout errors, theme bugs, app conflicts, payment failures — our Shopify experts diagnose
            and resolve your issues in hours, not days. No downtime. No headaches.
          </p>

          {/* Quick issue selector */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">What&apos;s broken?</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Checkout Error", "Theme / Display Bug", "App Conflict", "Speed Issues", "Payment Failure"].map((issue) => (
                <a
                  key={issue}
                  href="#contact"
                  onClick={() => sessionStorage.setItem("selectedIssue", issue)}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium hover:bg-[#2563eb] hover:border-[#2563eb] hover:text-white transition-colors"
                >
                  {issue}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2563eb] text-white font-bold text-lg hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/30"
            >
              Get Help Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold text-lg hover:border-white/60 hover:bg-white/5 transition-colors"
            >
              See Pricing
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 border-t border-white/10 pt-8">
            {badges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="text-2xl font-black text-white">{badge.value}</div>
                <div className="text-sm text-white/50 leading-tight">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="hero-sentinel" className="absolute bottom-0 left-0 w-px h-px" />
    </section>
  );
}
