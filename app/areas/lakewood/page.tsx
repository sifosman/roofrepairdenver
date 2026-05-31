import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Roof Repair Lakewood CO | Local Same-Day Service",
  description: "Professional roof repair in Lakewood, Colorado. Emergency service, hail damage, leak repair. Serving all Lakewood neighborhoods. Free estimates. Call (720) 555-0199.",
  keywords: "roof repair lakewood co, lakewood roofing contractor, lakewood roof replacement, hail damage repair lakewood, emergency roof repair lakewood",
  alternates: { canonical: "https://roofrepairindenver.com/areas/lakewood" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Denver Roof Repair Pros",
  "telephone": "+17205550199",
  "url": "https://roofrepairindenver.com/",
  "areaServed": { "@type": "City", "name": "Lakewood", "containedInPlace": { "@type": "State", "name": "Colorado" } },
  "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function LakewoodPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/areas-we-serve" className="hover:text-[#ff5a77]">Areas</Link> / Lakewood
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Roof Repair<br /><span className="text-[#e94560]">Lakewood, CO</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Trusted roof repair for Lakewood homes. We know the neighborhoods from Belmar to Green Mountain and everything in between.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">Roofing in Lakewood</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  Lakewood's mix of <strong className="text-[#e2e2e2]">mid-century homes and modern developments</strong> creates diverse roofing needs. The older ranch-style homes built in the 1950s-1970s often have original cedar shake or early asphalt shingles that are well past their lifespan.
                </p>
                <p>
                  The <strong className="text-[#e2e2e2]">foothills location</strong> exposes Lakewood roofs to stronger winds than Denver proper, leading to more frequent shingle lifting and blow-off after storms.
                </p>
                <p>
                  Newer communities near <strong className="text-[#e2e2e2]">Colorado Mills and Sloan's Lake</strong> have strict HOA roofing guidelines that we follow precisely for all repairs and replacements.
                </p>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">Response Time</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>We're typically on-site in Lakewood within <strong className="text-[#e2e2e2]">30-60 minutes</strong> for standard calls. Emergency calls prioritized for same-hour dispatch.</p>
                <p>We serve all Lakewood zip codes including <strong className="text-[#e2e2e2]">80214, 80215, 80226, 80227, 80228, 80232, 80235</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Service in Lakewood Today</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Call or fill out the form — we cover all of Lakewood.</p>
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
