import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Asphalt Shingle Roofing in Denver | Best Brands for Hail & UV",
  description: "Asphalt shingles are the most popular roofing material in Denver. Learn which brands and styles perform best in Colorado's hail and UV climate. Free estimates.",
  keywords: "asphalt shingles denver, best shingles colorado, architectural shingles denver, 3 tab shingles denver, hail resistant shingles denver",
  alternates: { canonical: "https://roofrepairindenver.com/materials/asphalt-shingles-denver" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Asphalt Shingle Roofing in Denver",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Denver Roof Repair Pros",
    "telephone": "+17205550199",
    "url": "https://roofrepairindenver.com/",
    "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
  },
  "areaServed": "Denver, CO",
  "description": "Asphalt shingle roofing services in Denver. Best brands for hail and UV resistance.",
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function MaterialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632759145351-1d592919f47c?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <span className="text-[#e94560]">Materials</span> / Asphalt Shingles
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Asphalt Shingles<br /><span className="text-[#e94560]">in Denver</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              The most popular roofing material in Denver. Learn which brands and styles survive hail and UV best.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="section-heading mb-6">Why Asphalt Shingles Dominate Denver</h2>
              <p className="text-[#c8c5cd] leading-relaxed">Asphalt shingles cover approximately 75% of Denver metro homes. They're affordable, come in dozens of colors, and install quickly. But Denver's climate — intense UV at 5,280 feet, violent hail, and freeze-thaw cycles — demands more than the cheapest option.</p>
            </div>

            <div>
              <h2 className="section-heading mb-6">Types of Asphalt Shingles for Denver</h2>
              <div className="space-y-4">
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">3-Tab Shingles (Budget Option)</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Flat, single-layer tabs. Cost: $6–$9/sq ft. Wind rating: 60–80 mph. Lifespan in Denver: 12–18 years. <strong className="text-[#e2e2e2]">Not recommended</strong> for Colorado's hail and wind exposure. We only install these on budget-restricted insurance claims where homeowner pays the difference for upgrade.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Architectural / Dimensional Shingles (Standard)</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Multi-layer laminated tabs create depth and shadow lines. Cost: $8–$13/sq ft. Wind rating: 110–130 mph. Lifespan in Denver: 18–22 years. Best value for most homeowners. Look for algae-resistant granules in shaded neighborhoods.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Class 4 Impact-Resistant Shingles (Premium)</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Reinforced with polymer or rubberized asphalt to withstand 2-inch steel ball impacts. Cost: $10–$14/sq ft. Wind rating: 130 mph. Lifespan in Denver: 20–25 years. May qualify for insurance discounts. <strong className="text-[#e2e2e2]">Strongly recommended</strong> for Denver's hail climate.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-heading mb-6">Top Brands for Colorado</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-dark p-4"><h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">GAF Timberline</h3><p className="text-sm text-[#c8c5cd]">Most popular brand in Colorado. Timberline HDZ and UHDZ offer excellent wind and UV resistance. "StainGuard" algae protection for shaded homes.</p></div>
                <div className="card-dark p-4"><h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">CertainTeed Landmark</h3><p className="text-sm text-[#c8c5cd]">Heavier weight than competitors = better wind resistance. Landmark PRO and ClimateFlex lines perform well in hail.</p></div>
                <div className="card-dark p-4"><h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">Owens Corning Duration</h3><p className="text-sm text-[#c8c5cd]">"SureNail" technology increases wind resistance. Duration Storm is Class 4 impact-rated. Good color selection.</p></div>
                <div className="card-dark p-4"><h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">Malarkey Legacy</h3><p className="text-sm text-[#c8c5cd]">Polymer-modified asphalt = superior flexibility and impact resistance. NEX rubberized asphalt core. Excellent for Colorado.</p></div>
              </div>
            </div>

            <div className="card-dark p-8">
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">Free Shingle Consultation</h2>
              <p className="text-[#c8c5cd] mb-6 leading-relaxed">We help Denver homeowners choose the right asphalt shingle for their budget, neighborhood, and insurance situation.</p>
              <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Your Free Estimate</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Material options, honest pricing, expert installation.</p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Phone</p>
                  <a href={PHONE_HREF} className="text-2xl font-bold text-[#e94560] hover:text-white transition-colors">{PHONE}</a>
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
