"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const columns = [
  {
    title: "Exhaust",
    italic: "by the numbers",
    image: "/photos/25.jpg",
    stats: [
      { v: "180+", l: "Hoods installed" },
      { v: "16ga", l: "Welded black iron" },
      { v: "NFPA 96", l: "Every install" },
    ],
  },
  {
    title: "HVAC",
    italic: "engineered tight",
    image: "/photos/30.jpg",
    stats: [
      { v: "120+", l: "Rooftop units" },
      { v: "TSSA", l: "Licensed gas" },
      { v: "0.04″", l: "Pressure tolerance" },
    ],
  },
  {
    title: "Suppression",
    italic: "code-perfect",
    image: "/photos/33.jpg",
    stats: [
      { v: "UL-300", l: "Listed systems" },
      { v: "2x / yr", l: "Inspection cycle" },
      { v: "100%", l: "Pass rate" },
    ],
  },
];

export default function InstallStats() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A] text-[#FBFAF7] border-y border-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-px w-6 bg-[#F97316]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#FBFAF7]/55 font-medium">
                Install metrics
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] balance">
              Built to spec.
              <span className="italic text-[#FBFAF7]/55"> Measured to prove it.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#FBFAF7]/10">
          {columns.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="bg-[#0A0A0A] p-7 lg:p-9 flex flex-col gap-8 group"
            >
              <div className="relative aspect-[5/3] rounded-xl overflow-hidden bg-[#FBFAF7]/5">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.22em] uppercase text-[#FBFAF7]/80">
                  Field photo
                </span>
              </div>

              <div>
                <h3 className="font-serif text-[28px] lg:text-[34px] leading-tight tracking-tight">
                  {c.title}{" "}
                  <span className="italic text-[#FBFAF7]/45">{c.italic}.</span>
                </h3>
              </div>

              <ul className="space-y-4 border-t border-[#FBFAF7]/10 pt-6">
                {c.stats.map((s) => (
                  <li
                    key={s.l}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#FBFAF7]/10 pb-3 last:border-b-0"
                  >
                    <span className="font-serif text-[28px] tracking-tight">
                      {s.v}
                    </span>
                    <span className="text-[11px] tracking-[0.18em] uppercase text-[#FBFAF7]/55 text-right">
                      {s.l}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
