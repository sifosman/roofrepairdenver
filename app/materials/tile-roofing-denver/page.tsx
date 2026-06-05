import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tile & Slate Roofing in Denver | Pros, Cons & Climate Fit",
  description: "Tile and slate roofing in Denver: longevity, fire resistance, and hail vulnerability. Clay, concrete, and synthetic tile options for Colorado homes.",
  keywords: "tile roofing denver, slate roof denver, clay tile colorado, concrete tile roof denver, synthetic tile roofing",
  alternates: { canonical: canonical("/materials/tile-roofing-denver") },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tile and Slate Roofing in Denver",
  "provider": {
    "@type": "RoofingContractor",
    "name": SITE.name,
    "telephone": SITE.phone.raw,
    "url": SITE.url,
    "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
  },
  "areaServed": "Denver, CO",
  "description": "Tile and slate roofing installation and repair in Denver.",
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
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <span className="text-[#e94560]">Materials</span> / Tile & Slate
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Tile & Slate<br /><span className="text-[#e94560]">in Denver</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              50+ year lifespan, Class A fire rating, and timeless beauty. Is tile right for your Colorado home?
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="section-heading mb-6">Tile Roofing in Colorado's Climate</h2>
              <p className="text-[#c8c5cd] leading-relaxed">Tile and slate offer excellent longevity and fire resistance — critical in Colorado's wildfire-prone environment. However, Denver's hail risk creates a significant concern: large hail can crack clay and concrete tiles. Hail 2+ inches (common in Denver) can fracture tiles, leading to expensive repairs. Synthetic tile offers a compromise: the look of natural tile with better impact resistance.</p>
            </div>

            <div>
              <h2 className="section-heading mb-6">Tile Types Compared</h2>
              <div className="space-y-4">
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Clay Tile</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Natural, earthy appearance. Lifespan: 50–100 years. Weight: 600–900 lbs/square. Hail vulnerability: high — cracks under 1.5+ inch hail. Best for lower-hail zones or with reinforced decking. Cost: $12–$18/sq ft.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Concrete Tile</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Heavier and more durable than clay. Lifespan: 50+ years. Weight: 700–1,000 lbs/square. Hail resistance: moderate — better than clay but still vulnerable to large hail. Cost: $10–$16/sq ft.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Synthetic / Composite Tile</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Rubber/polymer construction. Lifespan: 40–50 years. Weight: 150–300 lbs/square. Hail resistance: excellent — flexible, won't crack. Best Denver option for tile appearance without hail risk. Cost: $10–$16/sq ft.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Natural Slate</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Lifespan: 75–150 years. Weight: 800–1,500 lbs/square. Hail vulnerability: moderate — hard but brittle. Requires structural verification. Rare in Denver due to weight and cost. Cost: $20–$35+/sq ft.</p>
                </div>
              </div>
            </div>

            <div className="card-dark p-8">
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">Free Tile Roofing Consultation</h2>
              <p className="text-[#c8c5cd] mb-6 leading-relaxed">We assess your home's structure, hail risk, and aesthetic goals to recommend the best tile option.</p>
              <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Your Free Estimate</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Clay, concrete, and synthetic tile options.</p>
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
