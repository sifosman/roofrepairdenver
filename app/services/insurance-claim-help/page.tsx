import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Roof Insurance Claims Help Denver CO | 500+ Claims Filed",
  description: "Expert roof insurance claim help in Denver, CO. We fight your insurance so you don't have to. 500+ successful claims. Serving Denver metro. Call (720) 555-0199.",
  keywords: "roof insurance claim denver, insurance claim help denver, roofing insurance denver, hail damage insurance denver",
  alternates: { canonical: "https://roofrepairdenver.com/services/insurance-claim-help" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Insurance Claim Help",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Denver Roof Repair Pros",
    "telephone": "+17205550199",
    "url": "https://roofrepairdenver.com/",
    "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
  },
  "areaServed": "Denver, CO",
  "description": "Expert roof insurance claim assistance in Denver. 500+ successful claims filed. We handle the entire process from documentation to negotiation.",
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function InsuranceClaimHelpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632889688072-6f9e3c982169?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/#services" className="hover:text-[#ff5a77]">Services</Link> / Insurance Claim Help
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Insurance Claim Help<br /><span className="text-[#e94560]">Denver, CO</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              We fight your insurance so you don't have to. 500+ successful claims filed across the Denver metro area.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">Why Claims Get Denied</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>Insurance companies deny or underpay roof claims for predictable reasons:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-[#e2e2e2]">Insufficient documentation</strong> — adjusters need clear photo evidence of storm-related damage</li>
                  <li><strong className="text-[#e2e2e2]">Pre-existing condition claims</strong> — insurers argue damage is from age, not storms</li>
                  <li><strong className="text-[#e2e2e2]">Missed damage</strong> — adjusters inspect from the ground and miss bruised shingles</li>
                  <li><strong className="text-[#e2e2e2]">Deprecated pricing</strong> — initial offers use outdated material costs</li>
                  <li><strong className="text-[#e2e2e2]">Code upgrade exclusions</strong> — policies often omit required code compliance costs</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">How We Help</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Document Everything", desc: "We photograph every damaged shingle, dented vent, and compromised flashing with date-stamped, geo-tagged evidence." },
                  { step: "2", title: "Meet the Adjuster", desc: "We attend the adjuster meeting on your behalf, pointing out damage they might otherwise miss." },
                  { step: "3", title: "Write the Supplement", desc: "When initial offers are too low, we submit detailed supplements with line-item justifications for every necessary repair." },
                  { step: "4", title: "Get You Paid", desc: "We follow up persistently until you receive fair coverage for all storm-related damage." },
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

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Help With Your Claim</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Don't accept the first offer. Let us review your claim for free.</p>
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
