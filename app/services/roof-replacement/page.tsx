import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Roof Replacement Denver CO | Full Re-Roofing Service",
  description: "Full roof replacement in Denver, CO. Architectural shingles, metal roofing, flat systems. Serving Denver, Aurora, Lakewood. Free estimates. Call (720) 555-0199.",
  keywords: "roof replacement denver, full roof replacement denver, re-roofing denver, new roof denver, roof installation denver",
  alternates: { canonical: "https://roofrepairdenver.com/services/roof-replacement" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Roof Replacement",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Denver Roof Repair Pros",
    "telephone": "+17205550199",
    "url": "https://roofrepairdenver.com/",
    "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
  },
  "areaServed": "Denver, CO",
  "description": "Full roof replacement in Denver. Architectural shingles, metal roofing, and flat roof systems with premium materials and expert installation.",
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function RoofReplacementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/#services" className="hover:text-[#ff5a77]">Services</Link> / Roof Replacement
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Roof Replacement<br /><span className="text-[#e94560]">Denver, CO</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Full roof replacements with premium materials built for Denver's extreme weather. Architectural shingles, metal roofing, and flat systems.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading mb-12 text-center">When to Consider Full Replacement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Age Over 20 Years", desc: "Most asphalt shingle roofs in Denver's intense UV environment last 20-25 years. If yours is approaching this age, replacement is often more cost-effective than repeated repairs." },
                { title: "Widespread Hail Damage", desc: "When more than 30% of shingles show bruising, cracking, or granule loss, insurance typically approves full replacement rather than spot repairs." },
                { title: "Multiple Leak Points", desc: "If you're experiencing leaks in several areas, the underlying decking may be compromised. A full replacement addresses the root cause." },
              ].map((item, i) => (
                <div key={i} className="service-card">
                  <h3 className="font-display text-xl text-[#e2e2e2] uppercase mb-3">{item.title}</h3>
                  <p className="text-[#c8c5cd] text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get a Free Replacement Estimate</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Detailed written estimate with material options and timeline.</p>
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
