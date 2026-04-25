"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const certs = [
  { code: "TSSA", label: "Licensed gas contractor", id: "G2 / G3" },
  { code: "NFPA 96", label: "Exhaust standard", id: "Every install" },
  { code: "ULC-S524", label: "Fire alarm systems", id: "Certified" },
  { code: "OFC", label: "Ontario Fire Code", id: "Compliant" },
  { code: "WSIB", label: "Workplace coverage", id: "Active" },
  { code: "$5M", label: "Liability coverage", id: "Bonded" },
];

const status = [
  { dot: "#22C55E", label: "Dispatch online", sub: "Crew available" },
  { dot: "#F97316", label: "24/7 emergency", sub: "Avg. response · 38m" },
  { dot: "#22C55E", label: "Inspections", sub: "Booking 5 days out" },
];

export default function TrustStrip() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#FBFAF7] border-t border-[#E5E2DA] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 lg:mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-px w-6 bg-[#C2410C]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium">
                Credentials · Live
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="font-serif text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.04] tracking-[-0.02em] balance"
            >
              Licensed, bonded, on-call —
              <span className="italic text-[#6B6B68]"> verifiable.</span>
            </motion.h2>
          </div>
        </div>

        {/* Live status row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#E5E2DA] rounded-2xl overflow-hidden border border-[#E5E2DA] mb-10">
          {status.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.06 }}
              className="bg-[#FBFAF7] px-6 py-5 flex items-center gap-4"
            >
              <span className="relative flex size-2.5 shrink-0">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ backgroundColor: s.dot }}
                />
                <span
                  className="relative inline-flex size-2.5 rounded-full"
                  style={{ backgroundColor: s.dot }}
                />
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-[#0A0A0A] tracking-tight">
                  {s.label}
                </p>
                <p className="text-[11px] text-[#6B6B68] mt-0.5 tracking-[0.06em]">
                  {s.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cert grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#E5E2DA] rounded-2xl overflow-hidden border border-[#E5E2DA]">
          {certs.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              className="bg-[#FBFAF7] p-6 lg:p-7 flex flex-col justify-between min-h-[140px] group hover:bg-[#F4F2EC] transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-[22px] lg:text-[26px] tracking-tight text-[#0A0A0A] leading-none">
                  {c.code}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-[#C2410C] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path
                    d="M3 7L6 10L11 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-[#6B6B68] leading-snug">
                  {c.label}
                </p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A]/55 mt-2 font-mono">
                  {c.id}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] flex items-center gap-3">
          <span className="size-1 rounded-full bg-[#C2410C]" />
          Documents on request · Verified annually
        </p>
      </div>
    </section>
  );
}
