"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBFAF7]/80 backdrop-blur-xl border-b border-[#E5E2DA]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="text-[#0A0A0A]">
          <Logo />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] text-[#2B2B2B] hover:text-[#0A0A0A] tracking-wide transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+14165551234"
            className="text-[13px] text-[#6B6B68] hover:text-[#0A0A0A] transition-colors"
          >
            24/7 Emergency
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0A0A0A] text-[#FBFAF7] text-[13px] font-medium hover:bg-[#2B2B2B] transition-colors"
          >
            Get a Quote
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M2.5 6h7m0 0L6 2.5M9.5 6L6 9.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block h-px w-5 bg-[#0A0A0A] transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-[#0A0A0A] transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-[#E5E2DA] bg-[#FBFAF7]/95 backdrop-blur-xl overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-[15px] text-[#0A0A0A]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-block px-4 py-2 rounded-full bg-[#0A0A0A] text-[#FBFAF7] text-[14px]"
                >
                  Get a Quote →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
