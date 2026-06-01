import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Denver Roof Replacement Guide 2026 | Costs, Materials & Timeline",
  description: "Complete 2026 guide to Denver roof replacement costs, best materials for Colorado's climate, permit requirements, and what to expect. Free estimates.",
  keywords: "denver roof replacement cost 2026, roof replacement denver, best roofing materials colorado, asphalt shingles denver, metal roof denver cost",
  alternates: { canonical: "https://roofrepairindenver.com/guides/roof-replacement-denver" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Denver Roof Replacement Guide: Costs, Materials, and What to Expect in 2026",
  "description": "Complete guide to Denver roof replacement costs, materials best for Colorado's climate, and the full process from inspection to completion.",
  "author": { "@type": "Organization", "name": "Denver Roof Repair Pros" },
  "publisher": {
    "@type": "Organization",
    "name": "Denver Roof Repair Pros",
    "logo": { "@type": "ImageObject", "url": "https://roofrepairindenver.com/favicon.svg" },
  },
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-01",
  "url": "https://roofrepairindenver.com/guides/roof-replacement-denver",
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function RoofReplacementGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632759145351-1d592919f47c?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.88)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/#services" className="hover:text-[#ff5a77]">Services</Link> / Roof Replacement Guide
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Denver Roof Replacement<br /><span className="text-[#e94560]">Guide 2026</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Everything you need to know about replacing your roof in Denver: real costs, materials built for altitude and hail, permits, timelines, and how to avoid overpaying.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-display text-3xl text-[#e94560]">$9,500 – $24,000</div>
              <div className="text-[#c8c5cd] text-sm mt-1">Typical replacement range (2026)</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[#e94560]">2–3 Days</div>
              <div className="text-[#c8c5cd] text-sm mt-1">Average project timeline</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[#e94560]">25%</div>
              <div className="text-[#c8c5cd] text-sm mt-1">More UV at Denver's elevation</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[#e94560]">20+ Years</div>
              <div className="text-[#c8c5cd] text-sm mt-1">Expected shingle lifespan</div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Costs */}
            <div>
              <h2 className="section-heading mb-6">Denver Roof Replacement Costs (2026)</h2>
              <p className="text-[#c8c5cd] leading-relaxed mb-6">
                Colorado homeowners typically invest between <strong className="text-[#e2e2e2]">$9,500 and $24,000</strong> for residential roof replacement in 2026. This range covers typical home sizes of 1,500 to 3,000 square feet. Denver pricing runs higher than national averages due to specialized labor demand, permit costs, and the need for hail-resistant materials.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="card-dark p-6">
                  <div className="font-display text-2xl text-[#e94560] mb-2">$6 – $9/sq ft</div>
                  <div className="text-[#e2e2e2] text-sm font-semibold uppercase mb-1">3-Tab Asphalt</div>
                  <div className="text-[#c8c5cd] text-sm">Basic option, shorter lifespan in Colorado's UV</div>
                </div>
                <div className="card-dark p-6">
                  <div className="font-display text-2xl text-[#e94560] mb-2">$8 – $13/sq ft</div>
                  <div className="text-[#e2e2e2] text-sm font-semibold uppercase mb-1">Architectural Shingles</div>
                  <div className="text-[#c8c5cd] text-sm">Most popular. Better hail resistance and warranty</div>
                </div>
                <div className="card-dark p-6">
                  <div className="font-display text-2xl text-[#e94560] mb-2">$14 – $22/sq ft</div>
                  <div className="text-[#e2e2e2] text-sm font-semibold uppercase mb-1">Metal Roofing</div>
                  <div className="text-[#c8c5cd] text-sm">40–70 year lifespan, excellent hail & fire resistance</div>
                </div>
              </div>
              <p className="text-[#c8c5cd] text-sm leading-relaxed">
                A 2,000 square foot house in the Denver area usually falls in the range of <strong className="text-[#e2e2e2]">$13,000 to $20,000</strong> for a standard architectural shingle replacement. Steep pitch, extra tear-off labor, ventilation upgrades, and material changes can move that number higher. Class 4 impact-resistant shingles are often worth considering in Colorado — some insurers offer premium discounts.
              </p>
            </div>

            {/* Materials */}
            <div>
              <h2 className="section-heading mb-6">Best Roofing Materials for Denver's Climate</h2>
              <p className="text-[#c8c5cd] leading-relaxed mb-6">
                Denver's elevation of 5,280 feet exposes roofs to <strong className="text-[#e2e2e2]">25% more UV radiation</strong> than sea-level cities. Combined with violent hailstorms, freeze-thaw cycles, and occasional high winds, material selection is critical.
              </p>
              <div className="space-y-6">
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Architectural Asphalt Shingles (Most Popular)</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">
                    The standard choice for Denver homes. Architectural shingles offer better wind and hail resistance than 3-tab shingles. At Denver's altitude, expect a <strong className="text-[#e2e2e2]">15-20 year lifespan</strong> due to accelerated UV degradation. Class 4 impact-rated versions withstand hail up to 2 inches and may qualify for insurance discounts. Cost: $8–$13/sq ft installed.
                  </p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Metal Roofing (Longest Lifespan)</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">
                    Metal roofs offer excellent hail resistance (up to 2.5-inch hail), withstand wind speeds up to <strong className="text-[#e2e2e2]">140 mph</strong>, and allow snow to slide off cleanly — reducing ice dam risk. Lifespan: 40–70 years. Fire resistance is Class A, critical for Colorado's wildfire-prone areas. Cost: $14–$22/sq ft installed. Higher upfront cost but lower lifetime cost than asphalt.
                  </p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Concrete/Clay Tile</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">
                    Excellent longevity (50+ years) and fire resistance. However, hail can crack tiles — especially in Denver where 2+ inch hail is common. Tile is also heavy, requiring structural verification. Best suited for homes in lower-hail zones or with reinforced decking. Cost: $12–$18/sq ft installed.
                  </p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Wood Shake / Cedar</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">
                    Not recommended for most Denver homes. Susceptible to fire (unless pressure-treated), prone to mold and rot in Colorado's variable moisture, and hail can split shakes. Denver's arid climate also causes premature drying and cracking. Some municipalities restrict wood shake due to wildfire risk.
                  </p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Synthetic / Composite Shingles</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">
                    Emerging option that mimics slate or wood with better durability. Impact ratings vary by brand. UV stability has improved significantly in recent years. Cost: $10–$16/sq ft installed.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="section-heading mb-6">The Denver Roof Replacement Process: Timeline</h2>
              <div className="space-y-6">
                {[
                  { day: "Day 1", title: "Inspection & Estimate", text: "We perform a thorough inspection, measure the roof, assess decking condition, and provide a detailed written estimate. If insurance is involved, we document all damage for the claim." },
                  { day: "Day 2–5", title: "Permit & Material Ordering", text: "We pull the required permit from the city (Denver, Aurora, Lakewood, etc.) and order materials. Permit timelines vary: Denver typically 3-5 business days, Aurora 5-7 days, Boulder up to 10 days." },
                  { day: "Day 6–7", title: "Tear-Off & Deck Inspection", text: "Old roofing is removed down to the deck. We inspect for rotted or damaged plywood and replace any compromised sections. This is when hidden damage is usually found." },
                  { day: "Day 7–8", title: "Installation", text: "Ice and water shield is installed at eaves and valleys (required by Denver code). Underlayment, shingles/flashing, and ventilation components are installed. Most replacements are completed in 1-2 days of active work." },
                  { day: "Day 8–10", title: "Cleanup & Final Inspection", text: "Magnetic sweep for nails, gutter cleaning, and debris removal. We perform a final walkthrough with the homeowner and schedule the city inspection for permit closure." },
                ].map((item, i) => (
                  <div key={i} className="card-dark p-6 flex gap-4">
                    <div className="font-display text-xl text-[#e94560] shrink-0 w-20">{item.day}</div>
                    <div>
                      <h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">{item.title}</h3>
                      <p className="text-[#c8c5cd] text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Permits */}
            <div>
              <h2 className="section-heading mb-6">Permit Requirements by Denver Metro City</h2>
              <p className="text-[#c8c5cd] leading-relaxed mb-4">
                In most Colorado municipalities, a roofing permit is required before any work begins. This ensures the project meets current building codes. We handle all permitting on your behalf.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { city: "Denver", req: "Roofing permit required for full replacement. Specialty Class D contractor certificate required. Permit fee: ~$150–$400 depending on roof size. Inspection required upon completion." },
                  { city: "Aurora", req: "Roofing permit required. Supervisor license AND Roofing Contractor license required for the contractor. Permit fee: ~$100–$350. Inspection required." },
                  { city: "Lakewood", req: "Roofing permit required. Contractor must be registered with the city. Permit fee: ~$125–$300. Final inspection mandatory." },
                  { city: "Boulder", req: "Roofing permit required. Contractor must hold Class A, B, or C business license. Permit fee: ~$200–$500. Stringent inspection process." },
                  { city: "Littleton", req: "Roofing permit required. Licensed contractor mandatory. Permit fee: ~$100–$250." },
                  { city: "Arvada", req: "Roofing permit required. Contractor registration required. Permit fee: ~$100–$250." },
                ].map((item, i) => (
                  <div key={i} className="card-dark p-4">
                    <h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">{item.city}</h3>
                    <p className="text-[#c8c5cd] text-sm leading-relaxed">{item.req}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="card-dark p-8">
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">Free Roof Replacement Estimate</h2>
              <p className="text-[#c8c5cd] mb-6 leading-relaxed">
                We provide detailed, no-obligation estimates with multiple material options. We handle permits, insurance claims, and code upgrades. Most Denver roof replacements are completed in 2-3 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
                <a href="#inspect-form" className="btn-outline">Request Free Estimate</a>
              </div>
            </div>

          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }} id="inspect-form">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Your Free Estimate</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Detailed inspection, material options, and honest pricing.</p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Phone</p>
                  <a href={PHONE_HREF} className="text-2xl font-bold text-[#e94560] hover:text-white transition-colors">{PHONE}</a>
                </div>
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Coverage</p>
                  <p className="text-lg text-[#e2e2e2]">All Denver metro cities and suburbs</p>
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
