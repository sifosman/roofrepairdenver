import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Denver Roof Replacement Permits | What You Need to Know (2026)",
  description: "Roofing permit requirements for Denver, Aurora, Lakewood, Boulder, and Littleton. Costs, timelines, and how we handle permitting for you. Free estimates.",
  keywords: "denver roof replacement permit, roofing permit aurora, lakewood roof permit, boulder roofing permit, colorado roof permit cost",
  alternates: { canonical: canonical("/resources/denver-building-permits") },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Denver Roof Replacement Permits: What You Need to Know",
  "description": "Permit requirements, costs, and timelines for roof replacement across Denver metro cities.",
  "author": { "@type": "Organization", "name": SITE.name },
  "publisher": {
    "@type": "Organization",
    "name": SITE.name,
    "logo": { "@type": "ImageObject", "url": `${SITE.url}/favicon.svg` },
  },
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-01",
  "url": "https://roofrepairindenver.com/resources/denver-building-permits",
};

const PHONE = SITE.phone.display;
const PHONE_HREF = SITE.phone.href;

export default function PermitsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <span className="text-[#e94560]">Resources</span> / Building Permits
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Denver Roof<br /><span className="text-[#e94560]">Replacement Permits</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Permit requirements, costs, and timelines for every Denver metro city. We handle all permitting on your behalf.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="section-heading mb-6">Do You Need a Permit for Roof Replacement?</h2>
              <p className="text-[#c8c5cd] leading-relaxed">In most Colorado municipalities, a roofing permit is required before any roof replacement work begins. This ensures the project meets current building codes, including requirements for ice and water shield, proper ventilation, and wind resistance. We handle all permitting on your behalf — it's included in our service.</p>
            </div>

            <div>
              <h2 className="section-heading mb-6">Permit Requirements by City</h2>
              <div className="space-y-4">
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Denver</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Roofing permit required for full replacement. Specialty Class D contractor certificate required. Permit fee: ~$150–$400 depending on roof size. Inspection required upon completion. Timeline: 3–5 business days.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Aurora</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Roofing permit required. Supervisor license AND Roofing Contractor license required for the contractor. Permit fee: ~$100–$350. Inspection required. Timeline: 5–7 business days.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Lakewood</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Roofing permit required. Contractor must be registered with the city. Permit fee: ~$125–$300. Final inspection mandatory. Timeline: 5–7 business days.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Boulder</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Roofing permit required. Contractor must hold Class A, B, or C business license. Permit fee: ~$200–$500. Stringent inspection process. Timeline: 7–10 business days.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Littleton</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Roofing permit required. Licensed contractor mandatory. Permit fee: ~$100–$250. Timeline: 3–5 business days.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Arvada</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Roofing permit required. Contractor registration required. Permit fee: ~$100–$250. Timeline: 3–5 business days.</p>
                </div>
              </div>
            </div>

            <div className="card-dark p-8">
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">We Handle All Permitting</h2>
              <p className="text-[#c8c5cd] mb-6 leading-relaxed">Don't worry about paperwork, fees, or inspection scheduling. We pull permits, schedule inspections, and ensure code compliance — included with every full roof replacement.</p>
              <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Your Free Estimate</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Permits included. No hidden fees.</p>
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
