import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Roof Repair Cherry Creek Denver | Luxury Home Specialists",
  description: "Expert roof repair in Cherry Creek, Denver. Luxury homes, premium materials, tile, metal, and architectural shingles. Free inspections.",
  keywords: "roof repair cherry creek, cherry creek denver roofing, luxury roof repair denver, tile roof cherry creek",
  alternates: { canonical: "https://roofrepairindenver.com/areas/denver/cherry-creek" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Denver Roof Repair Pros",
  "telephone": "+17205550199",
  "url": "https://roofrepairindenver.com/",
  "areaServed": { "@type": "Place", "name": "Cherry Creek" },
  "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function CherryCreekPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/areas-we-serve" className="hover:text-[#ff5a77]">Areas</Link> / Cherry Creek
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Roof Repair<br /><span className="text-[#e94560]">Cherry Creek, Denver</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Luxury home roofing specialists serving Cherry Creek. Premium materials, white-glove service, and discretion.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">About Cherry Creek</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p><strong className="text-[#e2e2e2]">Housing Era:</strong> 1950s–1980s ranch, 2000s+ luxury rebuilds</p>
                <p><strong className="text-[#e2e2e2]">Common Roofing Material:</strong> High-end architectural shingles, tile, metal on new builds</p>
                <p><strong className="text-[#e2e2e2]">Average Home Value:</strong> $1M–$3M+</p>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">Roofing Challenges in Cherry Creek</h2>
              <p className="text-[#c8c5cd] leading-relaxed">
                Luxury homes expect premium materials and flawless execution. Large, complex roof designs with multiple peaks, valleys, and dormers increase labor complexity. HOA restrictions are common in newer sections. Homeowners often request Class 4 shingles, synthetic slate, or standing seam metal for both aesthetics and hail protection.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading mb-10">Services in Cherry Creek</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Residential Roof Repair", desc: "Leak fixes, shingle replacement, and storm damage repair.", href: "/services/residential-roof-repair" },
                { title: "Emergency Roof Repair", desc: "24/7 dispatch for sudden leaks and storm damage.", href: "/services/emergency-roof-repair" },
                { title: "Hail Damage Repair", desc: "Insurance claims and full hail damage restoration.", href: "/services/hail-damage-repair" },
                { title: "Roof Inspection", desc: "Free inspections with drone technology and thermal imaging.", href: "/services/roof-inspection" },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="p-6 card-dark hover:border-[#e94560] transition-all group">
                  <div className="w-8 h-1 bg-[#e94560] mb-3 group-hover:w-16 transition-all"></div>
                  <h3 className="font-display text-[#e2e2e2] uppercase mb-2">{s.title}</h3>
                  <p className="text-[#c8c5cd] text-sm">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Same-Day Service in Cherry Creek</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Call or fill out the form — we respond fast.</p>
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
