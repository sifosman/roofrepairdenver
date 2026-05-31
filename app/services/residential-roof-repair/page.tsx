import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Residential Roof Repair Denver CO | Expert Home Roofing",
  description: "Expert residential roof repair in Denver, CO. Leak fixes, shingle replacement, storm damage. Serving Denver, Aurora, Lakewood, Littleton. Free estimates. Call (720) 555-0199.",
  keywords: "residential roof repair denver, home roof repair denver, shingle repair denver, roof leak repair denver, denver residential roofing",
  alternates: { canonical: "https://roofrepairdenver.com/services/residential-roof-repair" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Residential Roof Repair",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Denver Roof Repair Pros",
    "telephone": "+17205550199",
    "url": "https://roofrepairdenver.com/",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "addressCountry": "US",
    },
  },
  "areaServed": "Denver, CO",
  "description": "Professional residential roof repair for Denver homes. Fix leaks, replace shingles, restore roof integrity.",
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function ResidentialRoofRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section
          className="relative py-20 px-6"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1632889688072-6f9e3c982169?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/#services" className="hover:text-[#ff5a77]">Services</Link> / Residential Roof Repair
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Residential Roof Repair<br />
              <span className="text-[#e94560]">Denver, CO</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Expert roof repair for Denver homes. From minor leaks to full shingle replacement, we protect what matters most.
            </p>
            <a href={PHONE_HREF} className="btn-primary">
              📞 Call {PHONE}
            </a>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">Common Residential Roof Problems in Denver</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  Denver's extreme weather — from intense UV exposure at 5,280 feet to sudden hailstorms and heavy snow loads — creates unique challenges for residential roofs.
                </p>
                <p>
                  In neighborhoods like <strong className="text-[#e2e2e2]">Park Hill, Stapleton, and Wash Park</strong>, we frequently see wind-lifted shingles, hail bruising, and ice dam damage on older homes.
                </p>
                <p>
                  Newer developments in <strong className="text-[#e2e2e2]">Highlands Ranch and Parker</strong> often have installation-related issues or insufficient ventilation that leads to premature shingle aging.
                </p>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">Our Repair Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Free Inspection", desc: "We assess every inch of your roof, document damage with photos, and provide a written estimate." },
                  { step: "2", title: "Honest Diagnosis", desc: "We tell you exactly what needs repair vs. replacement — no upselling on work you don't need." },
                  { step: "3", title: "Expert Repair", desc: "Our licensed crews use premium materials matched to your existing roof for seamless repairs." },
                  { step: "4", title: "Final Check", desc: "We inspect our work, clean every nail and scrap, and provide a warranty certificate." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#e94560] text-white rounded-full flex items-center justify-center text-sm font-black shrink-0">{s.step}</div>
                    <div>
                      <h3 className="font-bold text-[#e2e2e2] uppercase text-sm mb-1">{s.title}</h3>
                      <p className="text-[#c8c5cd] text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/emergency-roof-repair" className="p-6 card-dark hover:border-[#e94560] transition-all group">
                <div className="w-8 h-1 bg-[#e94560] mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-display text-[#e2e2e2] uppercase mb-2">Emergency Roof Repair</h3>
                <p className="text-[#c8c5cd] text-sm">24/7 urgent response for storm damage and sudden leaks.</p>
              </Link>
              <Link href="/services/hail-damage-repair" className="p-6 card-dark hover:border-[#e94560] transition-all group">
                <div className="w-8 h-1 bg-[#e94560] mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-display text-[#e2e2e2] uppercase mb-2">Hail Damage Repair</h3>
                <p className="text-[#c8c5cd] text-sm">Insurance claims and full hail damage restoration.</p>
              </Link>
              <Link href="/services/roof-inspection" className="p-6 card-dark hover:border-[#e94560] transition-all group">
                <div className="w-8 h-1 bg-[#e94560] mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-display text-[#e2e2e2] uppercase mb-2">Roof Inspection</h3>
                <p className="text-[#c8c5cd] text-sm">Free thorough inspections with drone and thermal imaging.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Your Roof Fixed Today</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Same-day service across the Denver metro area.</p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Phone</p>
                  <a href={PHONE_HREF} className="text-2xl font-bold text-[#e94560] hover:text-white transition-colors">{PHONE}</a>
                </div>
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Hours</p>
                  <p className="text-lg text-[#e2e2e2]">24/7 — Emergency service available</p>
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
