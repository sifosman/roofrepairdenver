import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Roof Repair Aurora CO | Local Same-Day Service",
  description: "Professional roof repair in Aurora, Colorado. Emergency service, hail damage, leak repair. Serving all Aurora neighborhoods. Free estimates. Call (720) 555-0199.",
  keywords: "roof repair aurora co, aurora roofing contractor, aurora roof replacement, hail damage repair aurora, emergency roof repair aurora",
  alternates: { canonical: "https://roofrepairdenver.com/areas/aurora" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Denver Roof Repair Pros",
  "telephone": "+17205550199",
  "url": "https://roofrepairdenver.com/",
  "areaServed": { "@type": "City", "name": "Aurora", "containedInPlace": { "@type": "State", "name": "Colorado" } },
  "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function AuroraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632889688072-6f9e3c982169?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/areas-we-serve" className="hover:text-[#ff5a77]">Areas</Link> / Aurora
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Roof Repair<br /><span className="text-[#e94560]">Aurora, CO</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Fast, local roof repair for Aurora homeowners. We serve all Aurora neighborhoods from Century City to Southshore.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">Roofing in Aurora</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  Aurora sits on the eastern edge of the Denver metro area, exposed to <strong className="text-[#e2e2e2]">intense hail tracks</strong> that sweep across the plains. The May 2024 hailstorm damaged thousands of roofs in Aurora, particularly in newer subdivisions.
                </p>
                <p>
                  Homes in <strong className="text-[#e2e2e2]">Saddle Rock, Tallyn's Reach, and Murphy Creek</strong> often have HOA requirements for specific shingle styles and colors, which we match precisely during repairs.
                </p>
                <p>
                  Older neighborhoods near <strong className="text-[#e2e2e2]">Colfax and Havana</strong> have homes from the 1960s-1980s with original roofs that are well past their service life.
                </p>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">Response Time</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>From our Denver base, we're typically on-site in Aurora within <strong className="text-[#e2e2e2]">45-75 minutes</strong> for standard calls. Emergency calls are prioritized for same-hour dispatch.</p>
                <p>We serve all Aurora zip codes including <strong className="text-[#e2e2e2]">80010, 80011, 80012, 80013, 80014, 80015, 80016, 80017, 80018</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Service in Aurora Today</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Call or fill out the form — we cover all of Aurora.</p>
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
