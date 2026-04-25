"use client";

import { motion } from "framer-motion";

const badges = [
  {
    label: "NFPA 96",
    desc: "Standard for ventilation control of commercial cooking operations",
  },
  {
    label: "Ontario Fire Code",
    desc: "Provincial fire safety regulations & inspection compliance",
  },
  {
    label: "UL Listed",
    desc: "Tested & certified fire suppression systems",
  },
  {
    label: "Licensed Gas",
    desc: "TSSA-certified gas line installation & service",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Compliance() {
  return (
    <section className="py-20 lg:py-28 border-y border-[#E5E2DA]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="h-px w-6 bg-[#C2410C]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium">
                Compliance
              </span>
            </div>
            <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] balance max-w-2xl">
              Code-compliant by design.
            </h2>
          </div>
          <p className="text-[14px] text-[#6B6B68] max-w-sm leading-[1.6]">
            We don't cut corners on safety. Every install is built and certified
            to the standards that matter — and inspected to prove it.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E2DA] border border-[#E5E2DA]">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              className="bg-[#FBFAF7] p-6 lg:p-8 min-h-[180px] flex flex-col justify-between hover:bg-[#F4F2EC] transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#C2410C]"
              >
                <path
                  d="M12 2L3 6V12C3 17 6.5 21 12 22C17.5 21 21 17 21 12V6L12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="font-serif text-[24px] tracking-tight leading-tight mb-1.5">
                  {b.label}
                </h3>
                <p className="text-[12px] text-[#6B6B68] leading-[1.5]">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
