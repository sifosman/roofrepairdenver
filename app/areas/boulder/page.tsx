import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Roof Repair Boulder CO | Local Same-Day Service",
  description: "Professional roof repair in Boulder, Colorado. Emergency service, hail damage, leak repair. Serving all Boulder neighborhoods. Free estimates. Call (720) 555-0199.",
  keywords: "roof repair boulder co, boulder roofing contractor, boulder roof replacement, hail damage repair boulder, emergency roof repair boulder",
  alternates: { canonical: "https://roofrepairdenver.com/areas/boulder" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Denver Roof Repair Pros",
  "telephone": "+17205550199",
  "url": "https://roofrepairdenver.com/",
  "areaServed": { "@type": "City", "name": "Boulder", "containedInPlace": { "@type": "State", "name": "Colorado" } },
  "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function BoulderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632889688072-6f9e3c982169?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/areas-we-serve" className="hover:text-[#ff5a77]">Areas</Link> / Boulder
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Roof Repair<br /><span className="text-[#e94560]">Boulder, CO</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Expert roof repair for Boulder homes. From the Flatirons to North Boulder, we handle Boulder's unique roofing challenges.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">Roofing in Boulder</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  Boulder's <strong className="text-[#e2e2e2]">elevation of 5,430 feet</strong> and exposure to intense mountain weather create unique roofing challenges.
                </p>
                <p>
                  <strong className="text-[#e2e2e2]">High winds</strong> coming off the Flatirons regularly lift shingles, especially on homes above Baseline Road.
                </p>
                <p>
                  Historic homes in <strong className="text-[#e2e2e2]">Mapleton Hill and Whittier</strong> require specialized materials and preservation expertise.
                </p>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">Response Time</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>We're typically on-site in Boulder within <strong className="text-[#e2e2e2]">60-90 minutes</strong>.</p>
                <p>We serve all Boulder zip codes including <strong className="text-[#e2e2e2]">80301, 80302, 80303, 80304, 80305, 80309, 80310</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Service in Boulder Today</h2>
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
