import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Free Roof Inspection Denver CO | Drone & Thermal Imaging",
  description: "Free roof inspections in Denver, CO. Drone technology, thermal imaging, insurance-grade reports. Serving Denver metro area. Call (720) 555-0199.",
  keywords: "free roof inspection denver, roof inspection denver co, drone roof inspection denver, thermal imaging roof inspection denver",
  alternates: { canonical: "https://roofrepairdenver.com/services/roof-inspection" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Roof Inspection",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Denver Roof Repair Pros",
    "telephone": "+17205550199",
    "url": "https://roofrepairdenver.com/",
    "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
  },
  "areaServed": "Denver, CO",
  "description": "Free thorough roof inspections in Denver with drone technology, thermal imaging, and insurance-grade written reports.",
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function RoofInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/#services" className="hover:text-[#ff5a77]">Services</Link> / Roof Inspection
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Roof Inspection<br /><span className="text-[#e94560]">Denver, CO</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Free, no-obligation inspections across the Denver metro area. Detailed written report with drone photos and thermal imaging.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">What's Included</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>Our comprehensive inspection covers every element of your roofing system:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-[#e2e2e2]">Shingle condition</strong> — granule loss, cracking, curling, hail bruising</li>
                  <li><strong className="text-[#e2e2e2]">Flashing integrity</strong> — around chimneys, vents, and valleys</li>
                  <li><strong className="text-[#e2e2e2]">Gutter system</strong> — drainage flow, damage, attachment</li>
                  <li><strong className="text-[#e2e2e2]">Decking condition</strong> — soft spots, moisture intrusion</li>
                  <li><strong className="text-[#e2e2e2]">Ventilation assessment</strong> — attic airflow and moisture control</li>
                  <li><strong className="text-[#e2e2e2]">Drone aerial survey</strong> — high-resolution photos of hard-to-reach areas</li>
                  <li><strong className="text-[#e2e2e2]">Thermal imaging</strong> — detects moisture and insulation gaps invisible to the eye</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">When to Schedule</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p><strong className="text-[#e2e2e2]">After any hailstorm</strong> — Denver's frequent hail can cause damage that's invisible from the ground.</p>
                <p><strong className="text-[#e2e2e2]">Before selling your home</strong> — a clean inspection report increases buyer confidence and sale price.</p>
                <p><strong className="text-[#e2e2e2]">After severe wind</strong> — Denver's Front Range wind gusts can lift and tear shingles.</p>
                <p><strong className="text-[#e2e2e2]">If your roof is 15+ years old</strong> — proactive inspections catch problems before they become emergencies.</p>
                <p><strong className="text-[#e2e2e2]">For insurance renewals</strong> — some carriers require current inspection documentation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Schedule Your Free Inspection</h2>
            <p className="text-center text-[#c8c5cd] mb-10">No obligation. Detailed report within 24 hours.</p>
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
