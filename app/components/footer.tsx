import { Fredoka } from "next/font/google";
import Link from "next/link";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["600"] });

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Checkout Fix", href: "#services" },
    { label: "Theme Bugs", href: "#services" },
    { label: "App Conflicts", href: "#services" },
    { label: "Speed Optimization", href: "#services" },
    { label: "Payment Failures", href: "#services" },
    { label: "Emergency Migration", href: "#services" },
  ],
  Company: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  Support: [
    { label: "Submit a Request", href: "#contact" },
    { label: "Contact Us", href: "#contact" },
    { label: "Guarantee", href: "#contact" },
    { label: "WhatsApp Us", href: "https://wa.me/15127967462" },
  ],
};


export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className={`${fredoka.className} text-white text-2xl tracking-tight`}>
                Task<span className="text-[#fb923c]">Dudes</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Your Shopify emergency team. When something breaks, we&apos;re the first call you make.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex items-center justify-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} TaskDudes. All rights reserved. Not affiliated with Shopify Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
