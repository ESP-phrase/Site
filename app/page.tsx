import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import HowItWorks from "./components/how-it-works";
import Pricing from "./components/pricing";
import Guarantee from "./components/guarantee";
import Stats from "./components/stats";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";
import ContactForm from "./components/contact-form";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
import WhatsAppButton from "./components/whatsapp-button";
import CouponPopup from "./components/coupon-popup";
import ScrollReveal from "./components/scroll-reveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.taskdudes.xyz/#organization",
      name: "TaskDudes",
      url: "https://www.taskdudes.xyz",
      logo: "https://www.taskdudes.xyz/icon.svg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-512-796-7462",
        contactType: "customer support",
        availLanguage: "English",
        hoursAvailable: "Mo-Su 00:00-24:00",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.taskdudes.xyz/#website",
      url: "https://www.taskdudes.xyz",
      name: "TaskDudes — Shopify Break Fixes, Fast",
      publisher: { "@id": "https://www.taskdudes.xyz/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://www.taskdudes.xyz/#service",
      name: "Shopify Emergency Support & Repair",
      provider: { "@id": "https://www.taskdudes.xyz/#organization" },
      description:
        "Expert Shopify fix service for checkout errors, theme bugs, app conflicts, and payment failures. Diagnosed and resolved in hours, not days.",
      areaServed: "Worldwide",
      offers: {
        "@type": "Offer",
        name: "Creator & brand partnerships",
        description:
          "Custom commercial terms negotiated per partner — including per-click and performance-aligned models. No flat-rate packages sold on-site; contact TaskDudes to scope support.",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          description: "Terms negotiated individually (e.g. per-click, hybrid, or performance-based).",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How fast will you fix my Shopify store?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Response times depend on what we agree in your partnership — most inbound requests get an expert reply within about two hours; urgent scopes can be prioritized when negotiated upfront.",
          },
        },
        {
          "@type": "Question",
          name: "What kinds of Shopify issues do you fix?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We fix checkout errors, theme bugs, app conflicts, payment failures, speed issues, broken layouts, and most other Shopify store problems.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer a guarantee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every fix comes with a guarantee — if the same issue comes back within the guarantee window, we fix it again for free.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the contact form or WhatsApp to describe your store and goals. We'll discuss partnership terms — including per-click or other structures — then assign an expert and confirm timelines before any work begins.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal><Newsletter /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><HowItWorks /></ScrollReveal>
        <ScrollReveal><Pricing /></ScrollReveal>
        <ScrollReveal><Guarantee /></ScrollReveal>
        <ScrollReveal><Stats /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><Faq /></ScrollReveal>
        <ScrollReveal><ContactForm /></ScrollReveal>
      </main>
      <Footer />
      <WhatsAppButton />
      <CouponPopup />
    </>
  );
}
