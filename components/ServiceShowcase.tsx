"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Showcase = {
  id: string;
  index: string;
  title: string;
  italic: string;
  description: string;
  steps: { n: string; label: string; desc: string }[];
  hero: { src: string; caption: string };
  thumbs: { src: string; alt: string }[];
  reverse?: boolean;
};

const showcases: Showcase[] = [
  {
    id: "exhaust-install",
    index: "Service 01",
    title: "Kitchen exhaust",
    italic: "installation",
    description:
      "Engineered exhaust systems built to NFPA 96. Hood selection, ductwork fabrication, ecology units, and rooftop fans — installed and certified end-to-end.",
    steps: [
      { n: "01", label: "Hood specification", desc: "Type I/II hood sizing matched to cookline load and capture velocity." },
      { n: "02", label: "Duct fabrication", desc: "16-gauge welded black iron ductwork with cleanout access doors." },
      { n: "03", label: "Make-up air balance", desc: "Tempered MUA tied in to keep negative pressure within spec." },
      { n: "04", label: "Commissioning", desc: "Airflow tested, balanced, and certified to NFPA 96." },
    ],
    hero: { src: "/photos/14.jpg", caption: "Stainless Type I exhaust hood — fabricated & installed" },
    thumbs: [
      { src: "/photos/06.jpg", alt: "Kitchen line ventilation" },
      { src: "/photos/07.jpg", alt: "Prep station airflow" },
      { src: "/photos/16.jpg", alt: "Restaurant interior" },
    ],
  },
  {
    id: "hvac-install",
    index: "Service 02",
    title: "HVAC systems",
    italic: "installation",
    description:
      "Heating, cooling, and gas line work for commercial spaces. Rooftop units, furnaces, ductwork, and TSSA-licensed gas hookups — designed for performance and reliability.",
    steps: [
      { n: "01", label: "Load calculation", desc: "Manual J / commercial sizing to match BTU demand." },
      { n: "02", label: "Equipment selection", desc: "RTUs, furnaces, condensers — sourced from trusted partners." },
      { n: "03", label: "Gas line install", desc: "TSSA-licensed black iron supply with certified pressure tests." },
      { n: "04", label: "Commission & tune", desc: "Static pressure, temperature split, and supply balancing." },
    ],
    hero: { src: "/photos/10.jpg", caption: "Ceiling ductwork & rooftop service — commercial install" },
    thumbs: [
      { src: "/photos/11.jpg", alt: "Heating equipment" },
      { src: "/photos/22.jpg", alt: "Technician on site" },
      { src: "/photos/29.jpg", alt: "Industrial mechanical" },
    ],
    reverse: true,
  },
  {
    id: "fire-install",
    index: "Service 03",
    title: "Fire suppression",
    italic: "installation",
    description:
      "UL-listed wet chemical fire suppression systems for commercial cooking. Design, install, semi-annual inspection, and Ontario Fire Code certification — all in-house.",
    steps: [
      { n: "01", label: "System design", desc: "Nozzle layout matched to appliance type and hood geometry." },
      { n: "02", label: "UL-listed install", desc: "Pre-engineered systems, agent tank, fusible links, and detection lines." },
      { n: "03", label: "Code certification", desc: "Ontario Fire Code compliance signed off by a licensed inspector." },
      { n: "04", label: "Ongoing service", desc: "Semi-annual inspections and 24/7 emergency response on tap." },
    ],
    hero: { src: "/photos/12.jpg", caption: "UL-listed wet chemical suppression — commissioned & certified" },
    thumbs: [
      { src: "/photos/13.jpg", alt: "Control panel" },
      { src: "/photos/09.jpg", alt: "Fire extinguisher" },
      { src: "/photos/21.jpg", alt: "Fire safety detail" },
    ],
  },
];

export default function ServiceShowcase() {
  return (
    <section className="bg-[#FBFAF7]">
      {showcases.map((s, i) => (
        <Block key={s.id} s={s} index={i} />
      ))}
    </section>
  );
}

function Block({ s, index }: { s: Showcase; index: number }) {
  return (
    <article
      id={s.id}
      className={`py-24 lg:py-36 ${index !== 0 ? "border-t border-[#E5E2DA]" : ""}`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
            s.reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="lg:col-span-7 relative">
            <motion.figure
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#0A0A0A]"
            >
              <Image
                src={s.hero.src}
                alt={s.hero.caption}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority={index === 0}
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-[#FBFAF7]">
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[#FBFAF7]/60 mb-1">
                    Featured install
                  </p>
                  <p className="font-serif text-[20px] tracking-tight leading-tight max-w-md">
                    {s.hero.caption}
                  </p>
                </div>
                <span className="shrink-0 hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F97316] text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A] font-semibold">
                  <span className="size-1 rounded-full bg-[#0A0A0A]" />
                  Live
                </span>
              </figcaption>
            </motion.figure>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {s.thumbs.map((t, idx) => (
                <motion.figure
                  key={t.src}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease, delay: 0.1 + idx * 0.06 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#0A0A0A] group"
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 1024px) 33vw, 200px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.figure>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-px w-6 bg-[#C2410C]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium">
                {s.index}
              </span>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="font-serif text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] balance"
            >
              {s.title}
              <br />
              <span className="italic text-[#6B6B68]">{s.italic}.</span>
            </motion.h3>

            <p className="mt-6 text-[15px] leading-[1.65] text-[#2B2B2B] pretty">
              {s.description}
            </p>

            <ol className="mt-10 border-t border-[#E5E2DA]">
              {s.steps.map((st, idx) => (
                <motion.li
                  key={st.n}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: idx * 0.05 }}
                  className="border-b border-[#E5E2DA] py-4 grid grid-cols-[40px_1fr] gap-4 group"
                >
                  <span className="font-mono text-[11px] text-[#6B6B68] pt-0.5 tracking-wider">
                    {st.n}
                  </span>
                  <div>
                    <p className="text-[14px] font-medium text-[#0A0A0A] group-hover:text-[#C2410C] transition-colors">
                      {st.label}
                    </p>
                    <p className="text-[13px] text-[#6B6B68] mt-1 leading-[1.55]">
                      {st.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </article>
  );
}
