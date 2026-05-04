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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Shopify Fix Plans",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Basic Fix",
            price: "35",
            priceCurrency: "USD",
            description: "1 issue diagnosed and fixed. Response within 4 hours.",
          },
          {
            "@type": "Offer",
            name: "Priority",
            price: "175",
            priceCurrency: "USD",
            description: "Up to 3 issues fixed. Response within 2 hours.",
          },
          {
            "@type": "Offer",
            name: "Unlimited",
            price: "299",
            priceCurrency: "USD",
            description: "Unlimited fixes per month. Response within 30 minutes. Flat monthly rate.",
          },
        ],
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
            text: "Response times depend on your plan: Basic Fix within 4 hours, Priority within 2 hours, and Emergency within 30 minutes.",
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
            text: "Choose a plan on our pricing section, describe your problem, and proceed to payment. A Shopify expert will contact you within the response time for your plan.",
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
