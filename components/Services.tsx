"use client";

import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "Commercial Kitchen Exhaust",
    desc: "End-to-end exhaust systems designed and installed to NFPA 96. From hoods to ecology units, we keep kitchens safe and ventilated.",
    items: [
      "Exhaust hoods & systems",
      "Exhaust fans",
      "Ductwork",
      "Ecology units",
      "Make-up / fresh air systems",
    ],
  },
  {
    n: "02",
    title: "HVAC Systems",
    desc: "Heating, cooling, and gas line work for restaurants and commercial spaces — engineered for performance and longevity.",
    items: [
      "Furnace installation",
      "AC & cooling systems",
      "Gas line installation",
      "Commercial ductwork",
      "Maintenance & repair",
    ],
  },
  {
    n: "03",
    title: "Fire Suppression",
    desc: "UL-listed fire suppression systems with the inspections, certifications, and emergency service required to stay compliant.",
    items: [
      "UL-listed installation",
      "Semi-annual inspections",
      "Compliance certification",
      "Repair & emergency service",
      "Ontario Fire Code expertise",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-36 relative">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-px w-6 bg-[#C2410C]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium">
                Services
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.02em] balance">
              Three disciplines.
              <br />
              <span className="italic text-[#6B6B68]">One trusted team.</span>
            </h2>
          </div>
        </div>

        {/* Service rows */}
        <div className="border-t border-[#E5E2DA]">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.05 }}
              className="group border-b border-[#E5E2DA] py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 hover:bg-[#F4F2EC]/60 transition-colors px-2 -mx-2 rounded-sm"
            >
              <div className="lg:col-span-1 text-[12px] font-mono text-[#6B6B68]">
                {s.n}
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-[28px] lg:text-[36px] leading-tight tracking-tight">
                  {s.title}
                </h3>
              </div>
              <div className="lg:col-span-4">
                <p className="text-[15px] leading-[1.6] text-[#2B2B2B] pretty">
                  {s.desc}
                </p>
              </div>
              <div className="lg:col-span-3">
                <ul className="space-y-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="text-[13px] text-[#6B6B68] flex items-center gap-2"
                    >
                      <span className="h-px w-3 bg-[#6B6B68]/50" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
