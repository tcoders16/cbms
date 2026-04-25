"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const lines = [
  {
    lead: "We build for",
    word: "Precision",
    proof: "NFPA 96 · 16ga welded ductwork · zero-leak commissioning",
  },
  {
    lead: "We work with",
    word: "Intent",
    proof: "Every nozzle mapped · every weld inspected · every joint pressure-tested",
  },
  {
    lead: "We deliver",
    word: "Craft",
    proof: "Stainless that holds · seams that don't ghost · finishes built to last",
  },
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  return (
    <section
      ref={ref}
      className="relative bg-[#FBFAF7] py-32 lg:py-44 overflow-hidden border-t border-[#E5E2DA]"
    >
      <BackdropWord progress={smooth} />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between mb-16 lg:mb-24">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-6 bg-[#C2410C]" />
            <span className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium">
              Manifesto
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#6B6B68]">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C2410C] opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[#C2410C]" />
            </span>
            Three principles
          </div>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {lines.map((l, i) => (
            <Line key={l.word} index={i} {...l} />
          ))}
        </div>

        <div className="mt-24 lg:mt-32 pt-10 border-t border-[#E5E2DA] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[12px] tracking-[0.22em] uppercase text-[#6B6B68]">
          <div className="flex items-center gap-3">
            <span className="size-1 rounded-full bg-[#C2410C]" />
            Engineered in the GTA · Installed everywhere we work
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px]">EST.</span>
            <span className="font-serif text-[14px] tracking-tight normal-case text-[#0A0A0A]">
              CBMS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({
  lead,
  word,
  proof,
  index,
}: {
  lead: string;
  word: string;
  proof: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease, delay: index * 0.06 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end"
    >
      <div className="lg:col-span-2 flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
        <span className="font-mono text-[11px] tracking-wider text-[#6B6B68]">
          0{index + 1}
        </span>
        <span className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium">
          {lead}
        </span>
      </div>

      <div className="lg:col-span-7">
        <h3 className="font-serif italic text-[64px] sm:text-[96px] lg:text-[128px] xl:text-[148px] leading-[0.95] tracking-[-0.03em] text-[#0A0A0A]">
          {word}
          <span className="not-italic text-[#C2410C]">.</span>
        </h3>
      </div>

      <div className="lg:col-span-3">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease, delay: index * 0.06 + 0.25 }}
          className="text-[13px] leading-[1.65] text-[#6B6B68] pretty border-l border-[#E5E2DA] pl-4"
        >
          {proof}
        </motion.p>
      </div>
    </motion.div>
  );
}

function BackdropWord({ progress }: { progress: ReturnType<typeof useSpring> }) {
  const x = useTransform(progress, [0, 1], ["10%", "-30%"]);
  return (
    <motion.div
      style={{ x }}
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-start"
    >
      <span className="font-serif text-[24vw] leading-none tracking-[-0.04em] text-[#0A0A0A]/[0.04] whitespace-nowrap select-none">
        cbms · cbms · cbms
      </span>
    </motion.div>
  );
}
