"use client";

import Link from "next/link";
import { useState } from "react";

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

type DropdownKey = "services" | "guides" | "blog" | "areas" | "materials" | "resources" | null;

const navItems: { key: Exclude<DropdownKey, null>; label: string; links: { label: string; href: string }[] }[] = [
  {
    key: "services",
    label: "Services",
    links: [
      { label: "Hail Damage Repair", href: "/services/hail-damage-repair" },
      { label: "Roof Replacement", href: "/services/roof-replacement" },
      { label: "Emergency Repair", href: "/services/emergency-roof-repair" },
      { label: "Roof Inspection", href: "/services/roof-inspection" },
      { label: "Insurance Claim Help", href: "/services/insurance-claim-help" },
      { label: "Residential Repair", href: "/services/residential-roof-repair" },
    ],
  },
  {
    key: "guides",
    label: "Guides",
    links: [
      { label: "Hail Damage Guide", href: "/guides/hail-damage-denver" },
      { label: "Insurance Claims", href: "/guides/insurance-claims-colorado" },
      { label: "Roof Replacement", href: "/guides/roof-replacement-denver" },
      { label: "Neighborhood Roofing", href: "/guides/neighborhood-roofing-denver" },
    ],
  },
  {
    key: "blog",
    label: "Blog",
    links: [
      { label: "Denver Hail Season 2024–2025", href: "/blog/denver-hail-season-2024-2025" },
      { label: "Class 4 Shingles", href: "/blog/class-4-shingles-denver" },
      { label: "Roofing Warranties", href: "/blog/roofing-warranties-colorado" },
      { label: "Metal vs Asphalt", href: "/blog/metal-vs-asphalt-denver" },
      { label: "Winter Roof Repair", href: "/blog/winter-roof-repair-denver" },
      { label: "HOA Roofing Rules", href: "/blog/hoa-roofing-rules-denver" },
      { label: "UV & Elevation Damage", href: "/blog/uv-elevation-roof-damage-denver" },
      { label: "Ice Dams", href: "/blog/ice-dams-denver-roofs" },
      { label: "Wind Damage", href: "/blog/denver-wind-damage-roofs" },
    ],
  },
  {
    key: "areas",
    label: "Areas",
    links: [
      { label: "Denver", href: "/areas/denver" },
      { label: "Aurora", href: "/areas/aurora" },
      { label: "Lakewood", href: "/areas/lakewood" },
      { label: "Littleton", href: "/areas/littleton" },
      { label: "Arvada", href: "/areas/arvada" },
      { label: "Boulder", href: "/areas/boulder" },
      { label: "All Areas", href: "/areas-we-serve" },
    ],
  },
  {
    key: "materials",
    label: "Materials",
    links: [
      { label: "Asphalt Shingles", href: "/materials/asphalt-shingles-denver" },
      { label: "Metal Roofing", href: "/materials/metal-roofing-denver" },
      { label: "Tile & Slate", href: "/materials/tile-roofing-denver" },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    links: [
      { label: "Building Permits", href: "/resources/denver-building-permits" },
      { label: "Colorado Roofing Laws", href: "/resources/colorado-roofing-laws" },
    ],
  },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);

  const toggleMobile = (key: Exclude<DropdownKey, null>) => {
    setMobileExpanded((prev) => (prev === key ? null : key));
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-[#929097] bg-[#121414] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center h-20 px-6 max-w-[1280px] mx-auto">
        <Link href="/" className="font-display text-2xl text-[#e2e2e2] uppercase tracking-tighter no-underline">
          Denver Roof Repair Pros
        </Link>

        {/* Desktop nav with dropdowns */}
        <nav className="hidden lg:flex gap-1 items-center">
          {navItems.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.links[0].href}
                className="flex items-center gap-1 text-[#c8c5cd] hover:text-[#e2e2e2] font-bold text-sm tracking-wider transition-colors no-underline uppercase px-3 py-2"
              >
                {item.label}
                <svg
                  className={`w-3 h-3 transition-transform ${openDropdown === item.key ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {openDropdown === item.key && (
                <div className="absolute top-full left-0 bg-[#1a1a2e] border border-[#929097] shadow-lg min-w-[220px] py-2 z-50">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-[#c8c5cd] hover:text-[#e2e2e2] hover:bg-[#121414] transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
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
            className="lg:hidden flex flex-col gap-1.5 p-2 bg-none border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-[#e2e2e2] block"></span>
            <span className="w-6 h-0.5 bg-[#e2e2e2] block"></span>
            <span className="w-6 h-0.5 bg-[#e2e2e2] block"></span>
          </button>
        </div>
      </div>

      {/* Mobile nav with accordions */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#121414] border-b border-[#929097] px-6 py-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.key} className="border-b border-[#1e2020] last:border-b-0">
              <button
                onClick={() => toggleMobile(item.key)}
                className="flex items-center justify-between w-full py-3 font-bold text-sm tracking-wider text-[#c8c5cd] uppercase bg-none border-none cursor-pointer"
              >
                <span>{item.label}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${mobileExpanded === item.key ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileExpanded === item.key && (
                <div className="pb-3 pl-4 flex flex-col gap-2">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-[#c8c5cd] hover:text-[#e2e2e2] transition-colors no-underline py-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={PHONE_HREF}
            onClick={() => setMobileOpen(false)}
            className="py-3 font-bold text-sm tracking-wider text-[#e94560] uppercase no-underline"
          >
            📞 {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
