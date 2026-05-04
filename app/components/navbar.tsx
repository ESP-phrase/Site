"use client";

import { Fredoka } from "next/font/google";
import { useState } from "react";
import Link from "next/link";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["600"] });

const navItems = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Partnership", href: "#partnership" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className={`${fredoka.className} text-white text-2xl tracking-tight`}>
              Task<span className="text-[#fb923c]">Dudes</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-1 px-5 py-2 rounded-lg bg-[#f97316] text-white text-sm font-semibold hover:bg-[#ea580c] transition-colors ml-8"
            >
              Get Help Now
            </Link>
            <button
              className="md:hidden p-2 text-white/70 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#171717] px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex justify-center items-center px-4 py-2 rounded-lg bg-[#f97316] text-white text-sm font-semibold hover:bg-[#ea580c] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get Help Now
          </Link>
        </div>
      )}
    </header>
  );
}
