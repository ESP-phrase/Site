"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ParticleNetwork from "./particle-network";

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
    <section className="relative bg-[#0f2d5e] min-h-[100dvh] flex items-center overflow-hidden py-24">
      <ParticleNetwork />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Your Shopify Store
            <br />
            <span className="text-[#3b82f6]">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            We Fix It <span className="text-[#3b82f6]">Fast.</span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mb-7 leading-relaxed">
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
                  className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium hover:bg-[#2563eb] hover:border-[#2563eb] hover:text-white transition-colors"
                >
                  {issue}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto">
            {/* Primary CTA — glowing pulse ring */}
            <Link
              href="#contact"
              className="btn-glow relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2563eb] text-white font-bold text-base transition-colors shadow-lg shadow-blue-500/40"
            >
              Get Help Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Secondary CTA — shimmer border */}
            <Link
              href="#pricing"
              className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold text-base hover:border-white/60 hover:bg-white/5 transition-colors"
            >
              See Pricing
            </Link>
          </div>

          <div className="flex justify-center items-center border-t border-white/10 pt-8 w-full">
            {badges.map((badge, i) => (
              <div
                key={badge.label}
                className={`flex flex-col items-center px-6 sm:px-10 py-2 ${i < badges.length - 1 ? "border-r border-white/10" : ""}`}
              >
                <div className="text-2xl sm:text-3xl font-black text-white">{badge.value}</div>
                <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-1">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="hero-sentinel" className="absolute bottom-0 left-0 w-px h-px" />
    </section>
  );
}
