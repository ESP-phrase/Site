import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partnership — TaskDudes",
  description:
    "TaskDudes works with creators and brands on negotiated terms including per-click partnerships. Reach out to discuss scope and commercial terms.",
};

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-lg text-center">
        <p className="text-[#fb923c] text-xs font-bold uppercase tracking-widest mb-4">Checkout retired</p>
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
          We don&apos;t sell flat-rate plans here anymore
        </h1>
        <p className="text-white/60 text-sm leading-relaxed mb-8">
          Creators and brands negotiate custom deals with us — including per-click and performance-aligned structures. Use the form below or WhatsApp and we&apos;ll align on scope and economics together.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#f97316] text-white font-bold text-sm hover:bg-[#ea580c] transition-colors"
          >
            Go to contact form
          </Link>
          <Link
            href="/#partnership"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-colors"
          >
            Partnership overview
          </Link>
        </div>
      </div>
    </main>
  );
}
