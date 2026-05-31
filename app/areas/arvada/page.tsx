import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Roof Repair Arvada CO | Local Same-Day Service",
  description: "Professional roof repair in Arvada, Colorado. Emergency service, hail damage, leak repair. Serving all Arvada neighborhoods. Free estimates. Call (720) 555-0199.",
  keywords: "roof repair arvada co, arvada roofing contractor, arvada roof replacement, hail damage repair arvada, emergency roof repair arvada",
  alternates: { canonical: "https://roofrepairindenver.com/areas/arvada" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Denver Roof Repair Pros",
  "telephone": "+17205550199",
  "url": "https://roofrepairindenver.com/",
  "areaServed": { "@type": "City", "name": "Arvada", "containedInPlace": { "@type": "State", "name": "Colorado" } },
  "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function ArvadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/areas-we-serve" className="hover:text-[#ff5a77]">Areas</Link> / Arvada
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Roof Repair<br /><span className="text-[#e94560]">Arvada, CO</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Trusted roof repair for Arvada homes. From Olde Town to West Woods Ranch, we serve every Arvada neighborhood.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">Roofing in Arvada</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  Arvada's <strong className="text-[#e2e2e2]">rapid growth</strong> means a mix of historic homes, mid-century builds, and new construction — each with different roofing needs.
                </p>
                <p>
                  The <strong className="text-[#e2e2e2]">higher elevation</strong> compared to central Denver means more UV exposure and faster shingle aging.
                </p>
                <p>
                  <strong className="text-[#e2e2e2]">Candelas and West Woods Ranch</strong> have newer homes with modern roofing systems that still suffer from installation defects and wind damage.
                </p>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">Response Time</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>We're typically on-site in Arvada within <strong className="text-[#e2e2e2]">45-60 minutes</strong>.</p>
                <p>We serve all Arvada zip codes including <strong className="text-[#e2e2e2]">80002, 80003, 80004, 80005, 80007</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Service in Arvada Today</h2>
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
