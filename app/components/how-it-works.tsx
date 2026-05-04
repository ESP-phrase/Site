const steps = [
  {
    number: "01",
    title: "Submit Your Issue",
    description:
      "Describe what's broken using our quick form. Include your store URL and any error messages you're seeing. Takes under 2 minutes.",
    detail: "No technical knowledge required",
  },
  {
    number: "02",
    title: "Expert Gets Assigned",
    description:
      "A certified Shopify expert reviews your issue within minutes and confirms the fix plan before we touch anything on your store.",
    detail: "You approve the fix plan first",
  },
  {
    number: "03",
    title: "Fixed & Live",
    description:
      "We resolve the issue, test everything thoroughly, and send you a detailed report. Your store is back up and running — fast.",
    detail: "Full fix report included",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#f0f4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-white text-[#2563eb] text-xs font-bold uppercase tracking-widest mb-4">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090f] tracking-tight mb-4">
            Done In 3 Simple Steps
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Getting your store fixed is straightforward. No lengthy onboarding, no back-and-forth.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#2563eb]/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-white shadow-lg shadow-blue-500/10 border border-[#e0e9ff] flex flex-col items-center justify-center mb-6">
                  <span className="text-3xl font-black text-[#2563eb]">{step.number}</span>
                </div>

                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-12 left-1/2 translate-x-8 h-full w-px bg-gradient-to-b from-[#2563eb]/30 to-transparent" />
                )}

                <h3 className="text-xl font-bold text-[#09090f] mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs">{step.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563eb] bg-white px-3 py-1.5 rounded-full border border-[#e0e9ff]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
