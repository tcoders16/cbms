"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const rotatingWords = ["commercial kitchens", "rooftop plants", "fire-safe lines", "tight-tolerance HVAC"];

const ticker = [
  { city: "Etobicoke", job: "Type I hood · NFPA 96", status: "Commissioning" },
  { city: "North York", job: "RTU swap · 7.5 ton", status: "Tied in" },
  { city: "Mississauga", job: "Wet chemical install", status: "Inspected" },
  { city: "Scarborough", job: "Make-up air balance", status: "Tuned" },
  { city: "Vaughan", job: "Black iron gas line", status: "Pressure-tested" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      <Backdrop />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="flex items-center gap-2.5 mb-10"
            >
              <span className="h-px w-8 bg-[#C2410C]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium">
                NFPA 96 · Ontario Fire Code Compliant
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.2 }}
              className="balance font-serif text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.98] tracking-[-0.02em] text-[#0A0A0A]"
            >
              Mechanical systems
              <br />
              <span className="italic text-[#2B2B2B]">engineered for</span>
              <br />
              <RotatingWord />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.45 }}
              className="pretty mt-8 max-w-xl text-[16px] lg:text-[17px] leading-[1.55] text-[#2B2B2B]"
            >
              CBMS designs, installs, and maintains commercial kitchen exhaust,
              HVAC, and fire suppression systems across the Greater Toronto Area —
              built for safety, performance, and code compliance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0A0A0A] text-[#FBFAF7] text-[14px] font-medium hover:bg-[#2B2B2B] transition-colors"
              >
                Request a free quote
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 7h8m0 0L7 3m4 4L7 11"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#E5E2DA] text-[#0A0A0A] text-[14px] font-medium hover:border-[#0A0A0A] transition-colors"
              >
                View services
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <FloatingCluster />
            <LiveTicker />
          </motion.div>
        </div>

        <CountUpStats />
      </div>
    </section>
  );
}

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % rotatingWords.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "0.4em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.4em", opacity: 0 }}
          transition={{ duration: 0.55, ease }}
          className="inline-block"
        >
          {rotatingWords[i]}
          <span className="text-[#C2410C]">.</span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function FloatingCluster() {
  return (
    <div className="relative h-[440px] lg:h-[520px]">
      <FloatCard
        src="/photos/14.jpg"
        caption="Type I hood · welded stainless"
        meta="Live · Etobicoke"
        className="absolute top-0 right-0 w-[78%] aspect-[4/5] z-20"
        delay={0.1}
        float={6}
      />
      <FloatCard
        src="/photos/10.jpg"
        caption="Rooftop plant · 7.5 ton RTU"
        meta="Tied in · 14:02"
        className="absolute top-[42%] left-0 w-[60%] aspect-[5/4] z-30"
        delay={0.25}
        float={-8}
      />
      <FloatCard
        src="/photos/12.jpg"
        caption="UL-listed wet chemical"
        meta="Inspected · pass"
        className="absolute bottom-0 right-[8%] w-[52%] aspect-[1/1] z-10"
        delay={0.4}
        float={5}
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease, delay: 0.6 }}
        className="absolute top-[38%] left-[52%] -translate-x-1/2 -translate-y-1/2 size-14 rounded-full border border-[#0A0A0A]/15 flex items-center justify-center bg-[#FBFAF7]/80 backdrop-blur-sm z-40"
      >
        <span className="size-1.5 rounded-full bg-[#C2410C] animate-pulse" />
      </motion.div>
    </div>
  );
}

function FloatCard({
  src,
  caption,
  meta,
  className,
  delay,
  float,
}: {
  src: string;
  caption: string;
  meta: string;
  className: string;
  delay: number;
  float: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, float, 0] }}
        transition={{ duration: 6 + Math.abs(float) * 0.3, ease: "easeInOut", repeat: Infinity }}
        className="relative h-full w-full rounded-2xl overflow-hidden bg-[#0A0A0A] shadow-[0_30px_60px_-20px_rgba(10,10,10,0.18)] ring-1 ring-[#0A0A0A]/5"
      >
        <Image
          src={src}
          alt={caption}
          fill
          sizes="(max-width: 1024px) 50vw, 30vw"
          className="object-cover"
          priority
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent"
        />
        <figcaption className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 text-[#FBFAF7]">
          <p className="font-serif text-[13px] leading-tight tracking-tight max-w-[14ch]">
            {caption}
          </p>
          <span className="shrink-0 text-[9px] tracking-[0.2em] uppercase text-[#FBFAF7]/75 font-mono">
            {meta}
          </span>
        </figcaption>
      </motion.div>
    </motion.figure>
  );
}

function LiveTicker() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ticker.length), 2400);
    return () => clearInterval(id);
  }, []);
  const t = ticker[i];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay: 0.9 }}
      className="mt-6 rounded-full border border-[#E5E2DA] bg-[#FBFAF7]/90 backdrop-blur-sm px-4 py-2.5 flex items-center gap-3 overflow-hidden"
    >
      <span className="relative flex size-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C2410C] opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-[#C2410C]" />
      </span>
      <span className="text-[10px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium shrink-0">
        On site
      </span>
      <span className="h-3 w-px bg-[#E5E2DA] shrink-0" />
      <div className="relative flex-1 h-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="absolute inset-0 flex items-center gap-2 text-[12px] whitespace-nowrap"
          >
            <span className="font-medium text-[#0A0A0A]">{t.city}</span>
            <span className="text-[#6B6B68]">·</span>
            <span className="text-[#6B6B68] truncate">{t.job}</span>
            <span className="ml-auto text-[10px] tracking-[0.18em] uppercase text-[#C2410C] font-medium shrink-0">
              {t.status}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function CountUpStats() {
  const stats = [
    { v: 15, suffix: "+", l: "Years of expertise" },
    { v: 500, suffix: "+", l: "Projects completed" },
    { v: 24, suffix: "/7", l: "Emergency response" },
    { v: 100, suffix: "%", l: "Code-compliant work" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease, delay: 0.8 }}
      className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 border-t border-[#E5E2DA] pt-10"
    >
      {stats.map((s, i) => (
        <div key={s.l} className="flex flex-col">
          <Counter value={s.v} suffix={s.suffix} delay={0.9 + i * 0.08} />
          <span className="mt-3 text-[12px] tracking-wide text-[#6B6B68] uppercase">
            {s.l}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

function Counter({
  value,
  suffix,
  delay,
}: {
  value: number;
  suffix: string;
  delay: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20, mass: 0.6 });
  const display = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => mv.set(value), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, value, delay, mv]);

  return (
    <span
      ref={ref}
      className="font-serif text-[40px] lg:text-[52px] leading-none tracking-tight text-[#0A0A0A] inline-flex items-baseline"
    >
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

function Backdrop() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(194,65,12,0.06), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, #000 30%, transparent 70%)",
        }}
      />
    </>
  );
}
