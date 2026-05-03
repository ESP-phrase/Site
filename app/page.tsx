import ActivityTicker from "./components/activity-ticker";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TrustedBy from "./components/trusted-by";
import Services from "./components/services";
import HowItWorks from "./components/how-it-works";
import Pricing from "./components/pricing";
import Guarantee from "./components/guarantee";
import Stats from "./components/stats";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";
import ContactForm from "./components/contact-form";
import Footer from "./components/footer";
import WhatsAppButton from "./components/whatsapp-button";
import StickyCta from "./components/sticky-cta";

export default function Home() {
  return (
    <>
      <ActivityTicker />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <HowItWorks />
        <Pricing />
        <Guarantee />
        <Stats />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCta />
    </>
  );
}
