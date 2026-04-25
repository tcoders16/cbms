import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E2DA] bg-[#F4F2EC]/40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-2 md:col-span-5">
            <Logo />
            <p className="mt-6 text-[14px] text-[#6B6B68] leading-[1.6] max-w-xs pretty">
              Commercial Building Mechanical Systems. Designing, installing, and
              certifying commercial kitchen systems across the GTA.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E5E2DA] bg-[#FBFAF7]">
              <span className="size-1.5 rounded-full bg-[#C2410C] animate-pulse" />
              <span className="text-[11px] tracking-[0.18em] uppercase text-[#2B2B2B] font-medium">
                24/7 Emergency line open
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium mb-5">
              Services
            </p>
            <ul className="space-y-2.5 text-[14px] text-[#0A0A0A]">
              <li>
                <a href="#services" className="hover:text-[#C2410C] transition-colors">
                  Kitchen Exhaust
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C2410C] transition-colors">
                  HVAC Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C2410C] transition-colors">
                  Fire Suppression
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C2410C] transition-colors">
                  Inspections & Certification
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium mb-5">
              Company
            </p>
            <ul className="space-y-2.5 text-[14px] text-[#0A0A0A]">
              <li>
                <a href="#about" className="hover:text-[#C2410C] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#C2410C] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-[#C2410C] transition-colors">
                  Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C2410C] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium mb-5">
              Contact
            </p>
            <ul className="space-y-2.5 text-[14px] text-[#0A0A0A]">
              <li>
                <a href="tel:+14165551234" className="hover:text-[#C2410C] transition-colors">
                  (416) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:hello@cbmsinc.ca" className="hover:text-[#C2410C] transition-colors">
                  hello@cbmsinc.ca
                </a>
              </li>
              <li className="text-[#6B6B68]">Greater Toronto Area</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E2DA] flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-[12px] text-[#6B6B68]">
          <p>© {year} CBMS Inc. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span>NFPA 96 Compliant</span>
            <span className="size-1 rounded-full bg-[#6B6B68]/40" />
            <span>Licensed in Ontario</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
