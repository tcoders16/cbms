"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const before = "/photos/31.jpg";
const after = "/photos/32.jpg";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  return (
    <section className="py-24 lg:py-36 bg-[#FBFAF7] border-t border-[#E5E2DA]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 lg:mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-px w-6 bg-[#C2410C]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium">
                Before / After
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="font-serif text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] balance"
            >
              From rough-in
              <br />
              <span className="italic text-[#6B6B68]">to certified install.</span>
            </motion.h2>
            <p className="mt-6 text-[14px] text-[#6B6B68] max-w-md leading-[1.6]">
              Drag the divider to see the transformation. Every install gets the
              same care — from welded ductwork to polished stainless finish.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          ref={ref}
          className="relative aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden bg-[#0A0A0A] cursor-ew-resize select-none"
          onMouseDown={(e) => {
            dragging.current = true;
            updateFromClientX(e.clientX);
          }}
          onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchStart={(e) => {
            dragging.current = true;
            updateFromClientX(e.touches[0].clientX);
          }}
          onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
          onTouchEnd={() => (dragging.current = false)}
        >
          {/* After (full) */}
          <Image
            src={after}
            alt="After installation"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
          />

          {/* Before (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Image
              src={before}
              alt="Before installation"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            />
          </div>

          {/* Labels */}
          <span className="absolute top-5 left-5 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-semibold bg-[#FBFAF7]/90 text-[#0A0A0A]">
            Before
          </span>
          <span className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-semibold bg-[#F97316] text-[#0A0A0A]">
            After
          </span>

          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 w-px bg-[#FBFAF7] pointer-events-none"
            style={{ left: `${pos}%`, boxShadow: "0 0 24px rgba(0,0,0,0.4)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full bg-[#FBFAF7] flex items-center justify-center shadow-2xl">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7 5L3 10L7 15M13 5L17 10L13 15"
                  stroke="#0A0A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        <p className="mt-4 text-center text-[11px] tracking-[0.22em] uppercase text-[#6B6B68]">
          Drag · Compare · Inspect
        </p>
      </div>
    </section>
  );
}
