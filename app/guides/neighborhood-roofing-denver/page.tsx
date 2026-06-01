import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Denver Neighborhood Roofing Guide | Challenges & Costs by Area",
  description: "Roof repair and replacement guide for every Denver neighborhood. Housing stock, common roof types, hail vulnerability, and average costs by area.",
  keywords: "denver neighborhood roof repair, park hill roof repair, stapleton roofing, highlands denver roof, cherry creek roofing, aurora roof repair",
  alternates: { canonical: "https://roofrepairindenver.com/guides/neighborhood-roofing-denver" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Denver Neighborhood Roofing Guide: Roof Types, Challenges, and Repair Costs by Area",
  "description": "Comprehensive guide to roofing needs across Denver metro neighborhoods.",
  "author": { "@type": "Organization", "name": "Denver Roof Repair Pros" },
  "publisher": {
    "@type": "Organization",
    "name": "Denver Roof Repair Pros",
    "logo": { "@type": "ImageObject", "url": "https://roofrepairindenver.com/favicon.svg" },
  },
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-01",
  "url": "https://roofrepairindenver.com/guides/neighborhood-roofing-denver",
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function NeighborhoodRoofingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.88)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/areas-we-serve" className="hover:text-[#ff5a77]">Areas</Link> / Neighborhood Roofing Guide
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Denver Neighborhood<br /><span className="text-[#e94560]">Roofing Guide</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Denver's neighborhoods have distinct housing stock, roof types, and weather vulnerabilities. Here's what homeowners in every major area need to know about roof repair and replacement.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Overview */}
            <div>
              <h2 className="section-heading mb-6">Why Neighborhood Matters for Your Roof</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  Denver metro neighborhoods vary dramatically in housing age, roof material, hail exposure, and HOA rules. A 1950s ranch in Park Hill has fundamentally different roofing needs than a 2015 build in Stapleton or a historic home in Capitol Hill.
                </p>
                <p>
                  Understanding your neighborhood's specific challenges helps you make smarter decisions about materials, timing, and insurance claims. Here's the breakdown by area.
                </p>
              </div>
            </div>

            {/* Denver Proper */}
            <div>
              <h2 className="section-heading mb-6">Denver Proper Neighborhoods</h2>
              <div className="space-y-6">
                {[
                  { name: "Park Hill", era: "1950s–1970s ranch and bungalow", roof: "3-tab asphalt shingles (aging), some wood shake", value: "$600K–$850K", challenges: "Original roofs from 1980s–1990s nearing end of life. Hail vulnerability high. Flat roof sections common on mid-century ranches prone to ponding." },
                  { name: "Stapleton (Central Park)", era: "2000s–2020s new construction", roof: "Architectural shingles, some tile and metal on higher-end builds", value: "$650K–$1M+", challenges: "Newer roofs but many hit by 2017, 2018, and 2023 hailstorms. Class 4 shingles increasingly common. HOA may require specific materials." },
                  { name: "Wash Park (Washington Park)", era: "1920s–1940s craftsman and Tudor", roof: "Original cedar shake, asphalt overlays, some slate", value: "$900K–$1.5M", challenges: "Historic homes with original roofing materials. Cedar shake is fire-prone and deteriorates in Denver's UV. Replacements require careful material matching." },
                  { name: "Highlands (Berkeley / Sunnyside)", era: "1880s–1940s Victorian and bungalow", roof: "Asphalt shingles, some original wood shake, metal on renovated homes", value: "$650K–$900K", challenges: "Older housing stock with multiple roof layers. Steep pitches on Victorians increase labor costs. Gentrification driving high-end material upgrades." },
                  { name: "Cherry Creek", era: "1950s–1980s ranch, 2000s+ luxury rebuilds", roof: "High-end architectural shingles, tile, metal on new builds", value: "$1M–$3M+", challenges: "Luxury homes expect premium materials. Large, complex roof designs with multiple peaks and valleys. HOA restrictions common in newer sections." },
                  { name: "Capitol Hill", era: "1880s–1920s Victorian, Denver square, mansion", roof: "Asphalt overlays on original wood, some slate and tile", value: "$500K–$1.2M", challenges: "Very old housing stock. Original wood shake under asphalt overlays is common. Flat roof sections on commercial-style conversions. Parking and access challenges for roofing crews." },
                  { name: "LoDo / RiNo", era: "1880s warehouses converted to lofts; new construction", roof: "Flat membrane (TPO/EPDM) on conversions; shingles on new", value: "$600K–$1.5M", challenges: "Flat commercial roofs require specialized membrane expertise. Rooftop HVAC units create penetration points. New builds facing intense sun exposure on south-facing roofs." },
                  { name: "Five Points", era: "1880s–1950s mixed Victorian, bungalow, duplex", roof: "Asphalt shingles, some original wood underlay", value: "$450K–$700K", challenges: "Aging housing stock with deferred maintenance common. Gentrification bringing full replacements. Ice dam issues on older insulation." },
                  { name: "Montclair", era: "1920s–1950s bungalow and ranch", roof: "3-tab and architectural asphalt", value: "$550K–$800K", challenges: "Mature trees drop debris and create shade/moss issues. Roofs from 1990s–2000s hail events nearing replacement age." },
                ].map((n, i) => (
                  <div key={i} className="card-dark p-6">
                    <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">{n.name}</h3>
                    <div className="grid md:grid-cols-2 gap-2 text-sm text-[#c8c5cd]">
                      <div><strong className="text-[#e2e2e2]">Era:</strong> {n.era}</div>
                      <div><strong className="text-[#e2e2e2]">Common Roof:</strong> {n.roof}</div>
                      <div><strong className="text-[#e2e2e2]">Home Value:</strong> {n.value}</div>
                      <div className="md:col-span-2"><strong className="text-[#e2e2e2]">Challenges:</strong> {n.challenges}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suburbs */}
            <div>
              <h2 className="section-heading mb-6">Denver Suburbs</h2>
              <div className="space-y-6">
                {[
                  { name: "Aurora — Southshore / Tallyn's Reach", era: "1990s–2010s suburban development", roof: "Architectural shingles, some concrete tile", value: "$500K–$750K", challenges: "Mass-produced homes from the 1990s–2000s with original roofs now aging. HOA restrictions on materials in master-planned communities. Hail corridor location increases claim frequency." },
                  { name: "Lakewood — Belmar / Green Mountain", era: "1960s–1990s ranch and split-level", roof: "3-tab and architectural asphalt", value: "$500K–$800K", challenges: "Older ranches with low-pitch roofs prone to wind uplift. Belmar area has mixed commercial/residential with flat roof sections. Heavy tree cover in Green Mountain creates debris issues." },
                  { name: "Littleton — Ken Caryl / Columbine", era: "1980s–2000s suburban", roof: "Architectural shingles, some wood shake on custom homes", value: "$550K–$850K", challenges: "Foothills location exposes roofs to stronger winds and faster-forming storms. Ken Caryl has HOA material restrictions. Elevation slightly higher than Denver intensifies UV damage." },
                  { name: "Arvada — Olde Town / Candelas", era: "1880s–1950s (Olde Town); 2010s+ (Candelas)", roof: "Mixed asphalt, some metal on renovated Olde Town homes", value: "$500K–$900K", challenges: "Olde Town has historic homes requiring material matching. Candelas has newer builds but exposed to western storm tracks. Rapid growth means varying contractor quality in new developments." },
                  { name: "Boulder — Gunbarrel / Newlands", era: "1970s–1990s ranch and contemporary", roof: "Architectural shingles, metal on upscale homes", value: "$700K–$1.2M", challenges: "Higher elevation (5,400+ ft) means even more UV exposure than Denver. Stricter building codes. Boulder's green building requirements may affect material selection." },
                ].map((n, i) => (
                  <div key={i} className="card-dark p-6">
                    <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">{n.name}</h3>
                    <div className="grid md:grid-cols-2 gap-2 text-sm text-[#c8c5cd]">
                      <div><strong className="text-[#e2e2e2]">Era:</strong> {n.era}</div>
                      <div><strong className="text-[#e2e2e2]">Common Roof:</strong> {n.roof}</div>
                      <div><strong className="text-[#e2e2e2]">Home Value:</strong> {n.value}</div>
                      <div className="md:col-span-2"><strong className="text-[#e2e2e2]">Challenges:</strong> {n.challenges}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost by area */}
            <div>
              <h2 className="section-heading mb-6">Average Roof Replacement Costs by Neighborhood Type</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="card-dark p-6 text-center">
                  <div className="font-display text-2xl text-[#e94560] mb-2">$8,000 – $14,000</div>
                  <div className="text-[#e2e2e2] text-sm font-semibold uppercase mb-1">Post-War Ranch</div>
                  <div className="text-[#c8c5cd] text-sm">Park Hill, Montclair, Original Aurora</div>
                </div>
                <div className="card-dark p-6 text-center">
                  <div className="font-display text-2xl text-[#e94560] mb-2">$12,000 – $20,000</div>
                  <div className="text-[#e2e2e2] text-sm font-semibold uppercase mb-1">Suburban Standard</div>
                  <div className="text-[#c8c5cd] text-sm">Stapleton, Highlands, Lakewood, Arvada</div>
                </div>
                <div className="card-dark p-6 text-center">
                  <div className="font-display text-2xl text-[#e94560] mb-2">$18,000 – $35,000+</div>
                  <div className="text-[#e2e2e2] text-sm font-semibold uppercase mb-1">Luxury / Historic</div>
                  <div className="text-[#c8c5cd] text-sm">Cherry Creek, Wash Park, Boulder</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="card-dark p-8">
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">Get a Neighborhood-Specific Estimate</h2>
              <p className="text-[#c8c5cd] mb-6 leading-relaxed">
                We know every Denver neighborhood's housing stock, common roof types, and specific challenges. Get a free inspection tailored to your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
                <a href="#inspect-form" className="btn-outline">Request Free Inspection</a>
              </div>
            </div>

          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }} id="inspect-form">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Schedule Your Free Inspection</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Every Denver neighborhood, every roof type.</p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Phone</p>
                  <a href={PHONE_HREF} className="text-2xl font-bold text-[#e94560] hover:text-white transition-colors">{PHONE}</a>
                </div>
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Service Area</p>
                  <p className="text-lg text-[#e2e2e2]">All Denver metro neighborhoods</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
