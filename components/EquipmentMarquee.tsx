"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  { src: "/photos/15.jpg", label: "Exhaust Fans" },
  { src: "/photos/17.jpg", label: "Kitchen Hoods" },
  { src: "/photos/18.jpg", label: "Ductwork" },
  { src: "/photos/20.jpg", label: "HVAC Plant" },
  { src: "/photos/23.jpg", label: "Fire Suppression" },
  { src: "/photos/24.jpg", label: "Make-up Air" },
];

export default function EquipmentMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Two tracks moving in opposite directions on scroll
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-[#0A0A0A] text-[#FBFAF7] overflow-hidden border-y border-[#0A0A0A]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-12 lg:mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="h-px w-6 bg-[#F97316]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#FBFAF7]/55 font-medium">
                What we install
              </span>
            </div>
            <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] balance max-w-2xl">
              Every component,
              <span className="italic text-[#FBFAF7]/55"> spec'd & sourced.</span>
            </h2>
          </div>
          <p className="text-[14px] text-[#FBFAF7]/55 max-w-xs leading-[1.6]">
            From rooftop fans to UL-listed suppression nozzles — we handle the
            whole stack so your kitchen passes inspection.
          </p>
        </div>
      </div>

      {/* Track 1 */}
      <motion.div style={{ x: x1 }} className="flex gap-4 lg:gap-6 will-change-transform">
        {[...items, ...items].map((it, i) => (
          <Card key={`a-${i}`} {...it} />
        ))}
      </motion.div>

      {/* Track 2 — offset, opposite direction */}
      <motion.div
        style={{ x: x2 }}
        className="flex gap-4 lg:gap-6 mt-4 lg:mt-6 will-change-transform"
      >
        {[...items.slice().reverse(), ...items.slice().reverse()].map((it, i) => (
          <Card key={`b-${i}`} {...it} small />
        ))}
      </motion.div>
    </section>
  );
}

function Card({
  src,
  label,
  small,
}: {
  src: string;
  label: string;
  small?: boolean;
}) {
  return (
    <figure
      className={`group relative shrink-0 overflow-hidden rounded-xl ${
        small ? "h-44 w-64 lg:h-52 lg:w-80" : "h-56 w-80 lg:h-72 lg:w-[420px]"
      }`}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes={small ? "320px" : "420px"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      />
      <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="font-serif text-[18px] lg:text-[20px] tracking-tight">
          {label}
        </span>
        <span className="text-[10px] tracking-[0.22em] uppercase text-[#FBFAF7]/50">
          spec'd
        </span>
      </figcaption>
    </figure>
  );
}
