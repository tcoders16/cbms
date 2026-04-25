"use client";

import { motion } from "framer-motion";

const points = [
  "Licensed & certified technicians",
  "NFPA 96 & Ontario Fire Code compliant",
  "Serving the entire GTA & surrounding areas",
  "24/7 emergency response & maintenance",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-px w-6 bg-[#C2410C]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium">
                About CBMS
              </span>
            </div>
            <h2 className="font-serif text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] balance">
              Built on
              <br />
              <span className="italic">code, craft,</span>
              <br />
              and consistency.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-[18px] lg:text-[20px] leading-[1.55] text-[#2B2B2B] pretty"
            >
              CBMS Inc. — Commercial Building Mechanical Systems — is the GTA's
              specialist for kitchen exhaust, HVAC, and fire suppression. We
              work with national restaurant brands and independent operators
              alike, delivering systems that pass inspection the first time and
              keep running for years.
            </motion.p>

            <p className="mt-6 text-[15px] leading-[1.65] text-[#6B6B68] pretty">
              Every project is led by licensed technicians, designed to NFPA 96
              and Ontario Fire Code, and supported by a 24/7 emergency line.
              Whether you're opening a new location or upgrading an existing
              kitchen, we make compliance feel effortless.
            </p>

            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-t border-[#E5E2DA] pt-8">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                  className="flex items-start gap-3 text-[14px] text-[#0A0A0A]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0 mt-0.5 text-[#C2410C]"
                  >
                    <path
                      d="M3 8.5L6.5 12L13 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {p}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
