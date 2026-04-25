"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Tile = {
  src: string;
  label: string;
  caption: string;
  span: string;
  ratio: string;
};

const tiles: Tile[] = [
  {
    src: "/photos/01.jpg",
    label: "Kitchen Hood System",
    caption: "Stainless exhaust hood, NFPA 96 install · Toronto, ON",
    span: "lg:col-span-7 lg:row-span-2",
    ratio: "aspect-[16/11]",
  },
  {
    src: "/photos/02.jpg",
    label: "Rooftop Exhaust Fan",
    caption: "Belt-drive upblast fan replacement",
    span: "lg:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/photos/05.jpg",
    label: "Fire Suppression",
    caption: "UL-listed wet chemical system",
    span: "lg:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/photos/03.jpg",
    label: "Commercial Ductwork",
    caption: "Fabricated & insulated supply ducts",
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/photos/04.jpg",
    label: "HVAC Plant",
    caption: "Rooftop unit & gas line installation",
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/photos/08.jpg",
    label: "Hood Detail",
    caption: "Stainless welded seam, polished finish",
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
];

export default function Installations() {
  return (
    <section id="work" className="py-24 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-px w-6 bg-[#C2410C]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium">
                Installations
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.02em] balance">
              Real systems.
              <br />
              <span className="italic text-[#6B6B68]">
                Installed across the GTA.
              </span>
            </h2>
            <p className="mt-6 text-[15px] text-[#6B6B68] max-w-md leading-[1.6]">
              A small look at recent commercial kitchen, HVAC, and fire
              suppression installs — designed, fabricated, and certified by
              CBMS.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 auto-rows-auto">
          {tiles.map((t, i) => (
            <motion.figure
              key={t.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl bg-[#0A0A0A] ${t.span} ${t.ratio}`}
            >
              <Image
                src={t.src}
                alt={t.label}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "0 0 24px 2px #F97316" }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-[#FBFAF7]">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] tracking-[0.22em] uppercase text-[#FBFAF7]/60 mb-1.5">
                      {String(i + 1).padStart(2, "0")} —{" "}
                      {t.label.split(" ")[0]}
                    </p>
                    <h3 className="font-serif text-[22px] lg:text-[26px] leading-tight tracking-tight">
                      {t.label}
                    </h3>
                    <p className="text-[12px] text-[#FBFAF7]/70 mt-1">
                      {t.caption}
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center justify-center size-9 rounded-full border border-[#FBFAF7]/30 transition-all duration-300 group-hover:border-[#F97316] group-hover:bg-[#F97316]/10">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path
                        d="M3.5 10.5L10.5 3.5M10.5 3.5H5M10.5 3.5V9"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
