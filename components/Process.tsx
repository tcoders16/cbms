"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "Step 01",
    title: "Assess",
    desc: "On-site evaluation of your kitchen, mechanical layout, and compliance requirements. We listen first, then specify.",
  },
  {
    n: "Step 02",
    title: "Design & Quote",
    desc: "Engineered drawings, equipment recommendations, and a transparent quote — built around code, capacity, and your timeline.",
  },
  {
    n: "Step 03",
    title: "Install & Certify",
    desc: "Licensed installation by certified technicians, followed by inspection, certification, and ongoing maintenance support.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-36 bg-[#0A0A0A] text-[#FBFAF7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-px w-6 bg-[#C2410C]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#FBFAF7]/60 font-medium">
                How we work
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.02em] balance">
              From quote to certified system,
              <br />
              <span className="italic text-[#FBFAF7]/60">a calm process.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#FBFAF7]/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="bg-[#0A0A0A] p-8 lg:p-10 min-h-[280px] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-[0.22em] uppercase text-[#FBFAF7]/50 font-medium">
                  {s.n}
                </span>
                <span className="font-serif text-[40px] leading-none text-[#FBFAF7]/15">
                  0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-[32px] leading-tight tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-[#FBFAF7]/70 pretty">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
