"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const heroRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const hero = document.querySelector("#hero-sentinel");
    if (!hero) return;

    heroRef.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0 }
    );
    heroRef.current.observe(hero);
    return () => heroRef.current?.disconnect();
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#09090f] border-t border-white/10 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 max-w-full">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          <span className="text-white text-sm font-medium truncate">
            Store down? Our experts are online now.
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="#contact"
            className="px-4 py-2 rounded-lg bg-[#2563eb] text-white text-xs font-bold hover:bg-[#1d4ed8] transition-colors"
          >
            Get Help Now →
          </Link>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="text-white/40 hover:text-white transition-colors p-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
