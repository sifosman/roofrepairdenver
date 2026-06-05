import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Colorado Roofing Laws | Claims, Matching & Contractor Rules (2026)",
  description: "Colorado roofing laws every homeowner should know: SB38, deductible rules, contractor licensing, matching shingles, and insurance claim timelines.",
  keywords: "colorado roofing laws, colorado roof insurance claim law, sb38 colorado roofing, roofing contractor license colorado, matching shingles law",
  alternates: { canonical: canonical("/resources/colorado-roofing-laws") },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Colorado Roofing Laws: Claims, Matching and Contractor Rules",
  "description": "Essential Colorado roofing laws every homeowner should understand.",
  "author": { "@type": "Organization", "name": SITE.name },
  "publisher": {
    "@type": "Organization",
    "name": SITE.name,
    "logo": { "@type": "ImageObject", "url": `${SITE.url}/favicon.svg` },
  },
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-01",
  "url": "https://roofrepairindenver.com/resources/colorado-roofing-laws",
};

const PHONE = SITE.phone.display;
const PHONE_HREF = SITE.phone.href;

export default function LawsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <span className="text-[#e94560]">Resources</span> / Colorado Roofing Laws
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Colorado Roofing<br /><span className="text-[#e94560]">Laws & Regulations</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              The laws every Colorado homeowner should know before hiring a roofing contractor or filing an insurance claim.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="section-heading mb-6">Senate Bill 38: The Residential Roofing Bill of Rights</h2>
              <p className="text-[#c8c5cd] leading-relaxed mb-4">Signed into law June 6, 2012, SB38 (C.R.S. 6-22-101 to 6-22-105) protects Colorado homeowners from predatory roofing contractors. Key provisions:</p>
              <ul className="list-disc list-inside space-y-2 text-[#c8c5cd]">
                <li><strong className="text-[#e2e2e2]">Written contract required</strong> — contractors must provide a signed contract with scope, materials, cost, and timeline before any work</li>
                <li><strong className="text-[#e2e2e2]">72-hour cancellation right</strong> — homeowners can cancel within 3 business days</li>
                <li><strong className="text-[#e2e2e2]">No deductible waiver</strong> — contractors cannot offer to waive, rebate, or absorb insurance deductibles</li>
                <li><strong className="text-[#e2e2e2]">Licensing verification</strong> — contractors must be licensed in the municipality where work is performed</li>
              </ul>
            </div>

            <div>
              <h2 className="section-heading mb-6">Insurance Claim Laws in Colorado</h2>
              <div className="space-y-4">
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Claim Filing Deadlines</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Most policies require claims within 1–2 years of the storm date. Some insurers have shortened to 6–12 months. Check your declarations page. Missing the deadline = automatic denial.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Matching Shingles</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Colorado does not have a statewide law requiring insurers to replace an entire roof when matching shingles are discontinued. Some policies include "matching" coverage riders. Without this, insurers may only pay for damaged sections.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Wind/Hail Deductibles</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">Many Colorado policies now have separate wind/hail deductibles calculated as a percentage of insured value (typically 1–5%). On a $500K home with 2% deductible, that's $10,000 out of pocket.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-heading mb-6">Contractor Licensing by City</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-dark p-4"><h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">Denver</h3><p className="text-sm text-[#c8c5cd]">Specialty Class D certificate required for roofing contractors.</p></div>
                <div className="card-dark p-4"><h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">Aurora</h3><p className="text-sm text-[#c8c5cd]">Supervisor license AND Roofing Contractor license required.</p></div>
                <div className="card-dark p-4"><h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">Lakewood</h3><p className="text-sm text-[#c8c5cd]">Contractor registration with the city required.</p></div>
                <div className="card-dark p-4"><h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">Boulder</h3><p className="text-sm text-[#c8c5cd]">Class A, B, or C business license required.</p></div>
              </div>
            </div>

            <div className="card-dark p-8">
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">Work With a Licensed, Compliant Contractor</h2>
              <p className="text-[#c8c5cd] mb-6 leading-relaxed">We are fully licensed in Denver, Aurora, Lakewood, Boulder, Littleton, and Arvada. We follow SB38 to the letter. No deductible waivers. Written contracts. Full transparency.</p>
              <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Get Your Free Consultation</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Licensed. Compliant. Trusted across the Denver metro area.</p>
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
