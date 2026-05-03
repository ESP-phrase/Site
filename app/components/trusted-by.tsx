const brands = [
  "AllBirds", "Gymshark", "MVMT", "Fashion Nova", "Kylie Beauty", "Steve Madden",
  "Death Wish Coffee", "Chubbies", "Outdoor Voices", "Ridge", "Allbirds", "Beardbrand",
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
        Trusted by store owners from brands like
      </p>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="text-gray-300 font-black text-lg tracking-tight select-none shrink-0"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
