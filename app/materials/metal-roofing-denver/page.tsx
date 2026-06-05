import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Metal Roofing in Denver | Cost, Durability & Hail Resistance",
  description: "Metal roofing offers unmatched hail resistance, fire protection, and longevity for Denver homes. Standing seam, corrugated, and shingle options.",
  keywords: "metal roofing denver, metal roof cost colorado, standing seam metal roof denver, metal roof hail resistant, metal roofing aurora",
  alternates: { canonical: canonical("/materials/metal-roofing-denver") },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Metal Roofing in Denver",
  "provider": {
    "@type": "RoofingContractor",
    "name": SITE.name,
    "telephone": SITE.phone.raw,
    "url": SITE.url,
    "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
  },
  "areaServed": "Denver, CO",
  "description": "Metal roofing installation and repair in Denver. Hail-resistant, fire-resistant, long-lasting.",
};

const PHONE = SITE.phone.display;
const PHONE_HREF = SITE.phone.href;

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
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <span className="text-[#e94560]">Materials</span> / Metal Roofing
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Metal Roofing<br /><span className="text-[#e94560]">in Denver</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Hail-proof, fire-resistant, and built to last 40–70 years. The smart investment for Colorado's extreme climate.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="section-heading mb-6">Why Metal Roofing Makes Sense in Denver</h2>
              <p className="text-[#c8c5cd] leading-relaxed">Metal roofing is the fastest-growing segment in Colorado roofing. After the 2017, 2018, 2024, and 2025 hail seasons, Denver homeowners increasingly see metal as the best long-term defense. While upfront costs are higher, the combination of hail resistance, fire rating, and longevity makes metal the lowest lifetime-cost option for many Colorado homes.</p>
            </div>

            <div>
              <h2 className="section-heading mb-6">Types of Metal Roofing</h2>
              <div className="space-y-4">
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Standing Seam (Premium)</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Concealed fasteners, vertical panels. Cost: $14–$22/sq ft. Lifespan: 50–70 years. Hail resistance: excellent (cosmetic denting only up to 2.5" hail). Wind rating: 140+ mph. Most popular metal style in Denver. Clean, modern appearance.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Metal Shingles (Mid-Range)</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Stamped to look like slate, tile, or wood shake. Cost: $12–$18/sq ft. Lifespan: 40–60 years. Easier to install than standing seam. Good for HOAs that restrict visible metal roofing.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Corrugated / Exposed Fastener (Budget)</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Cost: $10–$14/sq ft. Lifespan: 30–40 years. Requires fastener maintenance every 10–15 years. Best for outbuildings, barns, and rustic aesthetics. Not recommended for residential steep-slope roofs in Denver.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-heading mb-6">Metal vs. Hail: Real Performance</h2>
              <p className="text-[#c8c5cd] leading-relaxed">After the May 2024 Denver metro hailstorm (hail up to 2.75 inches), our inspections confirmed: metal roofs sustained only cosmetic denting while asphalt shingles on neighboring homes required full replacement. The metal roof homeowners who had cosmetic damage exclusions got zero payouts — but their roofs were still functional. The asphalt homeowners got insurance checks, but only because their roofs were destroyed.</p>
            </div>

            <div className="card-dark p-8">
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">Free Metal Roofing Consultation</h2>
              <p className="text-[#c8c5cd] mb-6 leading-relaxed">We help Denver homeowners decide if metal is right for their home, budget, and neighborhood.</p>
              <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Your Free Estimate</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Standing seam, metal shingles, and custom options.</p>
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
