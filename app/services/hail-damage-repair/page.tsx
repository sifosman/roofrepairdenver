import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Hail Damage Roof Repair Denver CO | Insurance Claims Help",
  description: "Denver's #1 hail damage roof repair specialists. Insurance claims, assessment, full restoration. Serving Denver, Aurora, Lakewood. 500+ claims filed. Call (720) 555-0199.",
  keywords: "hail damage repair denver, hail damage roof repair denver, roof insurance claim denver, denver hail damage roofing",
  alternates: { canonical: "https://roofrepairdenver.com/services/hail-damage-repair" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hail Damage Repair",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Denver Roof Repair Pros",
    "telephone": "+17205550199",
    "url": "https://roofrepairdenver.com/",
    "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
  },
  "areaServed": "Denver, CO",
  "description": "Denver's leading hail damage roof repair specialists. Insurance claims assistance, damage assessment, and full restoration.",
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function HailDamageRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/#services" className="hover:text-[#ff5a77]">Services</Link> / Hail Damage Repair
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Hail Damage Repair<br /><span className="text-[#e94560]">Denver, CO</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Denver is the hail capital of the United States. We've handled 500+ insurance claims and restored hundreds of hail-damaged roofs across the metro area.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">Signs of Hail Damage</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>Denver averages more hailstorms per year than any other major US city. After a storm, look for these warning signs:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-[#e2e2e2]">Dented gutters and downspouts</strong> — the easiest visible indicator</li>
                  <li><strong className="text-[#e2e2e2]">Missing granules</strong> on asphalt shingles — looks like dark spots or bald patches</li>
                  <li><strong className="text-[#e2e2e2]">Soft spots</strong> on shingles when pressed gently</li>
                  <li><strong className="text-[#e2e2e2]">Dented vents, flashing, or skylights</strong></li>
                  <li><strong className="text-[#e2e2e2]">Cracked or split shingles</strong> from large hail impact</li>
                </ul>
                <p>Damage isn't always visible from the ground. Our free inspection uses drone technology and thermal imaging to identify hidden damage.</p>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">Insurance Claim Help</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>Most Denver homeowners' policies cover hail and storm damage. But filing a successful claim requires proper documentation and timing.</p>
                <p>We handle the entire process:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Professional damage assessment with photo documentation</li>
                  <li>Detailed written report for your insurance adjuster</li>
                  <li>Meeting with the adjuster on-site to ensure nothing is missed</li>
                  <li>Supplementing underpaid claims with additional evidence</li>
                  <li>Direct billing to insurance when possible</li>
                </ul>
                <p>We've helped hundreds of homeowners get full coverage for their hail damage repairs.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Free Hail Damage Inspection</h2>
            <p className="text-center text-[#c8c5cd] mb-10">After any Denver hailstorm, get a free inspection before your insurance deadline expires.</p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Phone</p>
                  <a href={PHONE_HREF} className="text-2xl font-bold text-[#e94560] hover:text-white transition-colors">{PHONE}</a>
                </div>
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Inspection</p>
                  <p className="text-lg text-[#e2e2e2]">Free — No obligation</p>
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
