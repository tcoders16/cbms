const words = [
  "Precision",
  "Safety",
  "Compliance",
  "Craft",
  "NFPA 96",
  "24 / 7",
  "Licensed",
  "GTA",
];

export default function WordsBand() {
  const loop = [...words, ...words, ...words];

  return (
    <section
      aria-hidden
      className="relative py-10 lg:py-14 bg-[#FBFAF7] border-y border-[#E5E2DA] overflow-hidden"
    >
      <div className="flex marquee-track gap-12 lg:gap-16 whitespace-nowrap">
        {loop.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="inline-flex items-center gap-12 lg:gap-16 shrink-0"
          >
            <span
              className={
                i % 2 === 0
                  ? "font-serif italic text-[44px] lg:text-[72px] tracking-[-0.02em] text-[#0A0A0A]"
                  : "font-sans uppercase text-[20px] lg:text-[28px] tracking-[0.18em] text-[#6B6B68]"
              }
            >
              {w}
            </span>
            <Star />
          </span>
        ))}
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="text-[#C2410C] shrink-0"
    >
      <path
        d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}
