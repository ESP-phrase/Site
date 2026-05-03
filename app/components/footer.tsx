import Image from "next/image";
import { Fredoka } from "next/font/google";
import Link from "next/link";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["600"] });

const footerLinks = {
  Services: ["Checkout Fix", "Theme Bugs", "App Conflicts", "Speed Optimization", "Payment Failures", "Emergency Migration"],
  Company: ["About Us", "How It Works", "Pricing", "Testimonials"],
  Support: ["Submit a Request", "FAQ", "Contact Us", "Guarantee Policy"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f2d5e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className={`${fredoka.className} text-white text-2xl tracking-tight`}>
                Task<span className="text-[#3b82f6]">Dudes</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Your Shopify emergency team. When something breaks, we&apos;re the first call you make.
            </p>
            <div className="flex gap-3">
              {["twitter", "linkedin", "facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="text-xs text-white/70 capitalize">{social.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} TaskDudes. All rights reserved. Not affiliated with Shopify Inc.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/50">Experts online now</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
