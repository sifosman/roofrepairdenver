import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Roof Repair Littleton CO | Local Same-Day Service",
  description: "Professional roof repair in Littleton, Colorado. Emergency service, hail damage, leak repair. Serving all Littleton neighborhoods. Free estimates. Call (720) 555-0199.",
  keywords: "roof repair littleton co, littleton roofing contractor, littleton roof replacement, hail damage repair littleton, emergency roof repair littleton",
  alternates: { canonical: "https://roofrepairdenver.com/areas/littleton" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Denver Roof Repair Pros",
  "telephone": "+17205550199",
  "url": "https://roofrepairdenver.com/",
  "areaServed": { "@type": "City", "name": "Littleton", "containedInPlace": { "@type": "State", "name": "Colorado" } },
  "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function LittletonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/areas-we-serve" className="hover:text-[#ff5a77]">Areas</Link> / Littleton
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Roof Repair<br /><span className="text-[#e94560]">Littleton, CO</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Expert roof repair for Littleton homeowners. From Historic Downtown to Ken Caryl Ranch, we serve every neighborhood.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">Roofing in Littleton</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  Littleton's <strong className="text-[#e2e2e2]">Historic Downtown</strong> features homes dating back to the late 1800s with complex rooflines, original materials, and preservation requirements.
                </p>
                <p>
                  The <strong className="text-[#e2e2e2]">foothills elevation</strong> in areas like Roxborough and Deer Creek Canyon exposes roofs to stronger winds and more extreme temperature swings than the plains below.
                </p>
                <p>
                  Subdivisions in <strong className="text-[#e2e2e2]">Columbine Valley and Southglenn</strong> have homes from the 1970s-1990s that are entering their replacement cycle.
                </p>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">Response Time</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>We're typically on-site in Littleton within <strong className="text-[#e2e2e2]">45-75 minutes</strong>.</p>
                <p>We serve all Littleton zip codes including <strong className="text-[#e2e2e2]">80120, 80121, 80122, 80123, 80124, 80125, 80126, 80127, 80128, 80129, 80130</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Service in Littleton Today</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Call or fill out the form.</p>
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
