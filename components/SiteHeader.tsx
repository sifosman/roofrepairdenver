"use client";

import Link from "next/link";
import { useState } from "react";

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-[#929097] bg-[#121414] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center h-20 px-6 max-w-[1280px] mx-auto">
        <Link href="/" className="font-display text-2xl text-[#e2e2e2] uppercase tracking-tighter no-underline">
          Denver Roof Repair Pros
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/#services" className="text-[#c8c5cd] hover:text-[#e2e2e2] font-bold text-sm tracking-wider transition-colors no-underline uppercase">
            Services
          </Link>
          <Link href="/#why-us" className="text-[#c8c5cd] hover:text-[#e2e2e2] font-bold text-sm tracking-wider transition-colors no-underline uppercase">
            Why Us
          </Link>
          <Link href="/#reviews" className="text-[#c8c5cd] hover:text-[#e2e2e2] font-bold text-sm tracking-wider transition-colors no-underline uppercase">
            Reviews
          </Link>
          <Link href="/#faq" className="text-[#c8c5cd] hover:text-[#e2e2e2] font-bold text-sm tracking-wider transition-colors no-underline uppercase">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={PHONE_HREF}
            className="hidden md:flex items-center gap-2 text-[#c6c4df] hover:bg-[#1a1a2e]/30 transition-colors px-4 py-2 font-bold text-sm tracking-wider no-underline uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Emergency Call: {PHONE}
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 bg-none border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-[#e2e2e2] block"></span>
            <span className="w-6 h-0.5 bg-[#e2e2e2] block"></span>
            <span className="w-6 h-0.5 bg-[#e2e2e2] block"></span>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#121414] border-b border-[#929097] px-6 py-6 flex flex-col gap-4">
          <Link href="/#services" onClick={() => setMobileOpen(false)} className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase no-underline">
            Services
          </Link>
          <Link href="/#why-us" onClick={() => setMobileOpen(false)} className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase no-underline">
            Why Us
          </Link>
          <Link href="/#reviews" onClick={() => setMobileOpen(false)} className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase no-underline">
            Reviews
          </Link>
          <Link href="/#faq" onClick={() => setMobileOpen(false)} className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase no-underline">
            FAQ
          </Link>
          <a href={PHONE_HREF} className="font-bold text-sm tracking-wider text-[#e94560] uppercase no-underline">
            📞 {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
