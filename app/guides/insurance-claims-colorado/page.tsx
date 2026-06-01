import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "How to File a Roof Insurance Claim in Colorado (2026) | Step-by-Step Guide",
  description: "Step-by-step guide to filing a roof insurance claim in Colorado. Deadlines, deductibles, documentation, supplementing claims, and contractor rules. Avoid claim denial.",
  keywords: "colorado roof insurance claim, hail damage insurance claim denver, roof claim process colorado, insurance supplementing denver, wind hail deductible colorado",
  alternates: { canonical: "https://roofrepairindenver.com/guides/insurance-claims-colorado" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to File a Roof Insurance Claim in Colorado",
  "description": "Step-by-step guide to filing a successful roof insurance claim in Colorado after hail or storm damage.",
  "totalTime": "P3D",
  "supply": ["Camera or smartphone", "Roof inspection report", "Insurance policy declarations page", "Contractor estimate"],
  "tool": ["Drone camera", "Ladder", "Flashlight"],
  "step": [
    { "@type": "HowToStep", "name": "Document the damage immediately", "text": "Take photos and video of all visible damage from the ground. Include gutters, downspouts, vents, flashing, and any interior water stains." },
    { "@type": "HowToStep", "name": "Review your policy declarations page", "text": "Check your wind/hail deductible, claim filing deadline, and whether you have ordinance/law coverage for code upgrades." },
    { "@type": "HowToStep", "name": "Get a professional roof inspection", "text": "Hire a licensed Denver roofing contractor to document all damage with photos and a written report before filing your claim." },
    { "@type": "HowToStep", "name": "File the claim with your insurer", "text": "Call your insurance company's claims line. Provide the storm date, damage description, and your contractor's preliminary findings." },
    { "@type": "HowToStep", "name": "Meet with the insurance adjuster", "text": "Have your roofing contractor present during the adjuster inspection. They can point out damage the adjuster might miss." },
    { "@type": "HowToStep", "name": "Review the estimate and supplement if needed", "text": "Compare the adjuster's estimate with your contractor's. If items are missing or underpriced, file a supplement with additional documentation." },
    { "@type": "HowToStep", "name": "Choose a licensed Colorado contractor", "text": "Under Colorado SB38, contractors must provide a written contract with specific terms. Never sign with a door-knocker who lacks a local license." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the deadline to file a roof insurance claim in Colorado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Colorado homeowners insurance policies require claims to be filed within 1-2 years from the storm date. However, some insurers have recently shortened this to 6-12 months. Check your policy declarations page for your specific deadline. Failing to meet it results in automatic denial.",
      },
    },
    {
      "@type": "Question",
      "name": "What is a wind/hail deductible in Colorado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many Colorado policies now have separate wind/hail deductibles calculated as a percentage of your home's insured value (typically 1-5%), rather than a flat dollar amount. For example, a 2% deductible on a $500,000 home means $10,000 out of pocket before insurance pays.",
      },
    },
    {
      "@type": "Question",
      "name": "Can a Colorado roofing contractor negotiate with my insurance adjuster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under Colorado law, contractors can attend adjuster meetings and advocate for homeowners. Having your contractor present significantly increases the likelihood of full coverage approval because they can identify damage the adjuster may miss.",
      },
    },
    {
      "@type": "Question",
      "name": "What is supplementing an insurance claim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Supplementing is the process of requesting additional funds after the initial adjuster estimate is too low. Common reasons include missed damage, incorrect material pricing, omitted code upgrade costs, and insufficient labor allowances. A qualified contractor handles this with detailed documentation.",
      },
    },
  ],
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function InsuranceClaimsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.88)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/#services" className="hover:text-[#ff5a77]">Services</Link> / Insurance Claims Guide
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              How to File a Roof<br /><span className="text-[#e94560]">Insurance Claim in Colorado</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              We've filed <strong className="text-[#e2e2e2]">500+ successful claims</strong> for Denver homeowners. Here's the exact step-by-step process, with deadlines, deductibles, and traps to avoid.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        {/* Warning Box */}
        <section className="py-10 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-4xl mx-auto card-dark p-6 border-l-4 border-[#e94560]">
            <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">Insurance Deadlines Are Shrinking</h3>
            <p className="text-[#c8c5cd] text-sm leading-relaxed">
              Colorado insurers are increasingly shortening claim filing windows. Some now require claims within <strong className="text-[#e2e2e2]">6-12 months</strong> of the storm date. Cosmetic damage exclusions and percentage-based wind/hail deductibles are also becoming standard. Understanding your policy <em>before</em> filing is critical.
            </p>
          </div>
        </section>

        {/* Step-by-Step */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-16">

            <div>
              <h2 className="section-heading mb-6">The 7-Step Colorado Roof Insurance Claim Process</h2>
              <p className="text-[#c8c5cd] leading-relaxed mb-8">
                Filing a roof insurance claim in Colorado isn't just about making a phone call. The process involves specific documentation, timing, and legal requirements under <strong className="text-[#e2e2e2]">Colorado Senate Bill 38 (C.R.S. 6-22-101 to 6-22-105)</strong> — the Residential Roofing Bill of Rights signed into law June 6, 2012.
              </p>

              <div className="space-y-6">
                {[
                  { num: "01", title: "Document the Damage Immediately", text: "Before calling your insurer, take photos and video of all visible damage from the ground. Include dented gutters, missing granules, cracked shingles, dented vents, damaged flashing, and any interior water stains or ceiling discoloration. The more documentation you have, the harder it is for the insurer to deny your claim." },
                  { num: "02", title: "Review Your Policy Declarations Page", text: "Find your declarations page and check three critical items: (1) Your wind/hail deductible — many Colorado policies now use a percentage of insured value (1-5%), not a flat fee. (2) Your claim filing deadline — typically 1-2 years but shrinking. (3) Whether you have ordinance/law coverage for code upgrades. Without it, you pay the difference between old and new code requirements." },
                  { num: "03", title: "Get a Professional Roof Inspection First", text: "Do NOT file your claim until you have a professional inspection. Here's why: once you file, the clock starts ticking. If the adjuster misses damage and you discover it later, getting a supplement approved is significantly harder. A Denver roofing contractor provides photo documentation, a detailed written report, and an advocate who knows what adjusters look for." },
                  { num: "04", title: "File the Claim With Your Insurer", text: "Call your insurance company's claims line. Provide the exact storm date (check NOAA or NWS records), a description of visible damage, and your contractor's preliminary findings. Request the claim number and adjuster appointment immediately. Most insurers must respond within a specific timeframe — ask for their deadline." },
                  { num: "05", title: "Meet With the Insurance Adjuster — With Your Contractor Present", text: "This is the most critical step. Insurance adjusters inspect hundreds of roofs per month. They can miss subtle damage — especially soft spots, bruised shingles, and hidden fractures. Having your contractor present ensures nothing is overlooked. Under Colorado law, contractors can attend these meetings and advocate for homeowners. This single step often increases claim payouts by 20-40%." },
                  { num: "06", title: "Review the Estimate and Supplement If Needed", text: "The adjuster's initial estimate is often incomplete. Common omissions include: insufficient decking replacement, missing drip edge, underpriced material costs, omitted permit fees, and missing code upgrade coverage. Supplementing involves submitting additional documentation to justify higher costs. A qualified contractor handles this process with line-item comparisons and photo evidence." },
                  { num: "07", title: "Choose a Licensed Colorado Contractor and Begin Work", text: "Under Colorado SB38, roofing contractors must provide a written contract signed by both parties with specific terms including: scope of work, materials to be used, total cost, payment terms, and cancellation policy. Waiving insurance deductibles is illegal in Colorado. Never pay the full amount upfront — legitimate contractors accept payment upon completion or in milestones tied to progress." },
                ].map((step, i) => (
                  <div key={i} className="card-dark p-6 flex gap-4">
                    <div className="font-display text-3xl text-[#e94560] shrink-0">{step.num}</div>
                    <div>
                      <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">{step.title}</h3>
                      <p className="text-[#c8c5cd] text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance Companies */}
            <div>
              <h2 className="section-heading mb-6">Major Home Insurance Companies in Colorado: What to Know</h2>
              <div className="space-y-4">
                {[
                  { name: "State Farm", note: "Largest market share in Colorado. Has specific hail damage evaluation guidelines. Wind/hail deductibles increasingly common. Claims can be filed online or by phone. Known for thorough adjuster inspections." },
                  { name: "Allstate", note: "Offers specialized hail coverage endorsements. Claims processing typically 7-14 days for initial response. May require contractor estimates before approval." },
                  { name: "Farmers Insurance", note: "Strong presence in Colorado Front Range. Some policies include cosmetic damage exclusions. Discounts available for Class 4 impact-resistant shingles." },
                  { name: "USAA", note: "Available to military families. Generally strong claims satisfaction ratings. Hail coverage standard on most policies. Quick adjuster response times." },
                  { name: "American Family Insurance", note: "Colorado-based company with deep local knowledge. Offers roof replacement cost coverage options. May non-renew policies with multiple hail claims." },
                  { name: "Liberty Mutual", note: "National carrier with Colorado-specific policy language. Wind/hail endorsements may apply. Code upgrade coverage available as add-on." },
                  { name: "Travelers", note: "Offers contractor network programs that can streamline claims. Some discounts for impact-resistant roofing materials." },
                  { name: "Progressive / Homesite", note: "Competitive rates but may have stricter claim requirements. Review cosmetic damage exclusions carefully." },
                ].map((co, i) => (
                  <div key={i} className="card-dark p-4">
                    <h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">{co.name}</h3>
                    <p className="text-[#c8c5cd] text-sm leading-relaxed">{co.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Colorado Laws */}
            <div>
              <h2 className="section-heading mb-6">Colorado Roofing Laws Every Homeowner Must Know</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  <strong className="text-[#e2e2e2]">Senate Bill 38 (C.R.S. 6-22-101 to 6-22-105)</strong> — Signed June 6, 2012. Requires roofing contractors to provide a written contract with specific terms before any work begins. The contract must include: scope of work, materials, total cost, payment schedule, and cancellation rights.
                </p>
                <p>
                  <strong className="text-[#e2e2e2]">Waiving Deductibles Is Illegal</strong> — Colorado law explicitly prohibits roofing contractors from offering to waive, rebate, or absorb an insurance deductible. Contractors who do this are breaking the law and may face penalties. If a contractor offers to "cover your deductible," it is a red flag.
                </p>
                <p>
                  <strong className="text-[#e2e2e2]">Permit Requirements Vary by City</strong> — In Denver, a Specialty Class D certificate is required for roofing contractors. Aurora requires both a Supervisor license and a Roofing Contractor license. Boulder uses Class A, B, and C business license types. Lakewood requires contractor registration. Most municipalities require permits for full roof replacements.
                </p>
                <p>
                  <strong className="text-[#e2e2e2]">Matching Shingles (The "Uniformity" Issue)</strong> — Colorado does not have a statewide law requiring insurers to replace an entire roof when matching shingles are discontinued. However, some policies include "matching" coverage riders. Without this, insurers may only pay for damaged sections, leaving you with a patchwork roof.
                </p>
              </div>
            </div>

            {/* Supplementing */}
            <div>
              <h2 className="section-heading mb-6">What Is Supplementing and When Do You Need It?</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  <strong className="text-[#e2e2e2]">Supplementing</strong> is the process of requesting additional funds after the insurance company issues an initial estimate that is too low. This is extremely common in Colorado hail claims.
                </p>
                <p>Common reasons for supplementing include:</p>
                <ul className="list-disc list-inside space-y-2 text-[#c8c5cd]">
                  <li><strong className="text-[#e2e2e2]">Missed damage</strong> — the adjuster didn't see bruised shingles or hidden deck damage</li>
                  <li><strong className="text-[#e2e2e2]">Incorrect material pricing</strong> — Xactimate or insurer software undervalues current material costs</li>
                  <li><strong className="text-[#e2e2e2]">Omitted code upgrades</strong> — current Denver building codes require ice and water shield, drip edge, etc.</li>
                  <li><strong className="text-[#e2e2e2]">Insufficient labor</strong> — steep roofs, multiple layers, or complex geometry require more labor hours</li>
                  <li><strong className="text-[#e2e2e2]">Missing permit fees</strong> — Denver, Aurora, and Boulder all charge permit fees that adjusters sometimes omit</li>
                </ul>
                <p>
                  A qualified contractor handles the supplementing process by submitting line-item comparisons, updated material invoices, and photo documentation of additional damage found during tear-off.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="section-heading mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is the deadline to file a roof insurance claim in Colorado?", a: "Most Colorado homeowners insurance policies require claims to be filed within 1-2 years from the storm date. However, some insurers have recently shortened this to 6-12 months. Check your policy declarations page for your specific deadline. Failing to meet it results in automatic denial." },
                  { q: "What is a wind/hail deductible in Colorado?", a: "Many Colorado policies now have separate wind/hail deductibles calculated as a percentage of your home's insured value (typically 1-5%), rather than a flat dollar amount. For example, a 2% deductible on a $500,000 home means $10,000 out of pocket before insurance pays." },
                  { q: "Can a Colorado roofing contractor negotiate with my insurance adjuster?", a: "Yes. Under Colorado law, contractors can attend adjuster meetings and advocate for homeowners. Having your contractor present significantly increases the likelihood of full coverage approval because they can identify damage the adjuster may miss." },
                  { q: "What is supplementing an insurance claim?", a: "Supplementing is the process of requesting additional funds after the initial adjuster estimate is too low. Common reasons include missed damage, incorrect material pricing, omitted code upgrade costs, and insufficient labor allowances. A qualified contractor handles this with detailed documentation." },
                ].map((item, i) => (
                  <div key={i} className="card-dark p-6">
                    <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">{item.q}</h3>
                    <p className="text-[#c8c5cd] text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="card-dark p-8">
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">We Handle the Entire Claim Process</h2>
              <p className="text-[#c8c5cd] mb-6 leading-relaxed">
                From initial inspection to final supplement, we manage every step of your Colorado roof insurance claim. We've helped hundreds of Denver homeowners get full coverage. Don't leave money on the table.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
                <a href="#inspect-form" className="btn-outline">Free Insurance Claim Review</a>
              </div>
            </div>

          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }} id="inspect-form">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Start Your Claim the Right Way</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Free inspection and claim strategy session. No obligation.</p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Phone</p>
                  <a href={PHONE_HREF} className="text-2xl font-bold text-[#e94560] hover:text-white transition-colors">{PHONE}</a>
                </div>
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Claims Experience</p>
                  <p className="text-lg text-[#e2e2e2]">500+ successful claims filed</p>
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
