"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-px w-6 bg-[#C2410C]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium">
                Contact
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="font-serif text-[44px] sm:text-[60px] lg:text-[76px] leading-[0.98] tracking-[-0.02em] balance"
            >
              Let&apos;s build something
              <br />
              <span className="italic text-[#6B6B68]">that lasts.</span>
            </motion.h2>
            <p className="mt-8 text-[16px] leading-[1.6] text-[#2B2B2B] max-w-md pretty">
              Tell us about your project. We&apos;ll respond within one business
              day with next steps and a quote pathway.
            </p>

            <div className="mt-12 space-y-6 border-t border-[#E5E2DA] pt-8">
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] mb-1.5">
                  24/7 Emergency
                </p>
                <a
                  href="tel:+14165551234"
                  className="font-serif text-[28px] tracking-tight hover:text-[#C2410C] transition-colors"
                >
                  (416) 555-1234
                </a>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] mb-1.5">
                  Email
                </p>
                <a
                  href="mailto:hello@cbmsinc.ca"
                  className="font-serif text-[22px] tracking-tight hover:text-[#C2410C] transition-colors"
                >
                  hello@cbmsinc.ca
                </a>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] mb-1.5">
                  Service area
                </p>
                <p className="text-[15px] text-[#0A0A0A]">
                  Toronto · Mississauga · Brampton · Vaughan · Markham · GTA
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="bg-[#F4F2EC]/60 border border-[#E5E2DA] rounded-2xl p-6 lg:p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="mx-auto mb-4 text-[#C2410C]"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="18"
                      stroke="currentColor"
                      strokeWidth="1.25"
                    />
                    <path
                      d="M13 20.5L18 25L27 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="font-serif text-[28px] tracking-tight mb-2">
                    Message received.
                  </h3>
                  <p className="text-[14px] text-[#6B6B68]">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <Field label="Name" name="name" placeholder="Jane Doe" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@business.ca"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="(416) 000-0000"
                  />
                  <div>
                    <label className="block text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] mb-2">
                      Service interest
                    </label>
                    <select
                      name="service"
                      className="w-full bg-transparent border-b border-[#E5E2DA] py-2.5 text-[15px] focus:border-[#0A0A0A] outline-none transition-colors"
                    >
                      <option>Kitchen Exhaust</option>
                      <option>HVAC Systems</option>
                      <option>Fire Suppression</option>
                      <option>Multiple / Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] mb-2">
                      Project details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your space, timeline, and any specifics."
                      className="w-full bg-transparent border-b border-[#E5E2DA] py-2.5 text-[15px] focus:border-[#0A0A0A] outline-none resize-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full mt-4 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#0A0A0A] text-[#FBFAF7] text-[14px] font-medium hover:bg-[#2B2B2B] transition-colors"
                  >
                    Send message
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
                  </button>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[#E5E2DA] py-2.5 text-[15px] focus:border-[#0A0A0A] outline-none transition-colors placeholder:text-[#6B6B68]/50"
      />
    </div>
  );
}
