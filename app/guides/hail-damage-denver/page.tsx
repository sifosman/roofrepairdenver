import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Complete Guide to Roof Hail Damage in Denver (2026) | Denver Roof Repair Pros",
  description: "Denver is the hail capital of the U.S. Learn how hail damages roofs, what to check after a storm, insurance claim deadlines, and repair costs.",
  keywords: "denver hail damage roof, hail damage repair denver, roof hail damage guide colorado, denver hail capital, hail insurance claim denver",
  alternates: { canonical: canonical("/guides/hail-damage-denver") },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to Roof Hail Damage in Denver",
  "description": "Data-driven guide to Denver hail damage: storm history, insurance claims, repair costs, and what every homeowner needs to know.",
  "author": { "@type": "Organization", "name": SITE.name },
  "publisher": {
    "@type": "Organization",
    "name": SITE.name,
    "logo": { "@type": "ImageObject", "url": `${SITE.url}/favicon.svg` },
  },
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-01",
  "url": "https://roofrepairindenver.com/guides/hail-damage-denver",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many hail days does Denver get per year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Denver averages more hail days per year than any other major U.S. city. Colorado's hail season runs April 15 to September 15, with June being the peak month for destructive hailstorms according to NOAA data.",
      },
    },
    {
      "@type": "Question",
      "name": "What size hail damages a roof?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hail 1 inch or larger can damage asphalt shingles. Golf ball-sized hail (1.75 inches) causes significant damage. Baseball-sized hail (2.75+ inches) can puncture roofs, break skylights, and dent metal components. In 2023, Colorado saw 34 reports of baseball-sized hail, up from 12 in 2019.",
      },
    },
    {
      "@type": "Question",
      "name": "How long do I have to file a hail damage insurance claim in Colorado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Colorado homeowners insurance policies require claims to be filed within 1-2 years of the storm date. However, some insurers have shortened this window. Check your policy declarations page for your specific deadline. Failing to meet the deadline can result in claim denial.",
      },
    },
    {
      "@type": "Question",
      "name": "What does hail damage look like on a roof?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visible signs include dented gutters and downspouts, missing granules on shingles (dark spots or bald patches), soft spots when pressed, cracked or split shingles, and dented vents or flashing. Hidden damage requires professional inspection with drone technology and thermal imaging.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does hail damage roof repair cost in Denver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A full roof replacement in Denver after hail damage typically costs $9,500 to $24,000 for a 1,500-3,000 sq ft home (2026 data). Most homeowners' policies cover hail damage minus the deductible. Wind/hail deductibles in Colorado are often 1-5% of the home's insured value.",
      },
    },
  ],
};

const PHONE = SITE.phone.display;
const PHONE_HREF = SITE.phone.href;

export default function HailDamageGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.88)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/#services" className="hover:text-[#ff5a77]">Services</Link> / Hail Damage Guide
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Complete Guide to Roof<br /><span className="text-[#e94560]">Hail Damage in Denver</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Denver is the hail capital of the United States. Between 1980 and 2024, Colorado endured <strong className="text-[#e2e2e2]">38 billion-dollar hailstorms</strong> — more than any other disaster type. Here is everything homeowners need to know.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-10 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-display text-3xl text-[#e94560]">#2</div>
              <div className="text-[#c8c5cd] text-sm mt-1">National rank for hail damage</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[#e94560]">$1,988</div>
              <div className="text-[#c8c5cd] text-sm mt-1">Annual damage per 100 residents</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[#e94560]">70+</div>
              <div className="text-[#c8c5cd] text-sm mt-1">Billion-dollar disasters since 1980</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[#e94560]">$2.2B</div>
              <div className="text-[#c8c5cd] text-sm mt-1">Costliest Denver metro storm (2017)</div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Section 1 */}
            <div>
              <h2 className="section-heading mb-6">Why Denver Is the Hail Capital of America</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  Colorado stands out as one of the most hail-prone states in the United States. Hail occurrences are more prevalent in the lee of the Rockies than in any other region across North America. The state's distinctive topography — the Front Range mountains forcing warm, moist air upward — creates the perfect conditions for violent hailstorms.
                </p>
                <p>
                  <strong className="text-[#e2e2e2]">The numbers are staggering:</strong> Colorado ranks second nationally for hail-related property damage, with an annual average of <strong className="text-[#e2e2e2]">$1,987.64 per 100 residents</strong>. The highest frequency of damaging hail occurs near the border regions of Colorado, Wyoming, and Nebraska — directly impacting Denver's northern suburbs.
                </p>
                <p>
                  The hail season in Colorado runs from <strong className="text-[#e2e2e2]">April 15 to September 15</strong>, with June emerging as the month of highest frequency for hail occurrences. The mid-June period is marked by a heightened tendency for particularly destructive hailstorms.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="section-heading mb-6">The 5 Most Destructive Denver-Area Hailstorms of the Last Decade</h2>
              <div className="space-y-6">
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">1. May 8–11, 2017 — The Costliest Storm in Colorado History</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">
                    Baseball-sized hail hammered the Denver metro area. Insured losses soared past <strong className="text-[#e2e2e2]">$2.2 billion in Colorado alone</strong>, with total multi-state damage reaching $4.2 billion. This remains the costliest hail storm in Colorado history. Neighborhoods across Denver, Aurora, and Lakewood saw widespread roof destruction.
                  </p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">2. June 21–26, 2023 — Multi-State Catastrophe</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">
                    A severe storm system spawned more than <strong className="text-[#e2e2e2]">60 tornadoes</strong> across Colorado, Wyoming, Minnesota, Indiana, Kentucky, and Arkansas. Colorado bore the brunt of severe hail impacts. Around 100 people were injured at an outdoor concert. Total damage across all affected states reached <strong className="text-[#e2e2e2]">$5.3 billion</strong>, with 8 lives lost.
                  </p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">3. July 18–19, 2018 — Northern Metro Devastation</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">
                    Golf ball to baseball-sized hail struck northern Denver, Boulder, and Fort Collins. Widespread damage to homes and businesses across residential and commercial properties. The storm was part of a larger system that also caused moderate hail damage in Utah.
                  </p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">4. May 10–12, 2023 — Eastern Rockies Hail Event</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">
                    A series of tornadoes and severe hail storms swept across the eastern Rockies and central states. Severe hail impacts centered predominantly in Colorado. Total damage across all affected states reached <strong className="text-[#e2e2e2]">$3.5 billion</strong>.
                  </p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-2">5. July 20, 2009 — Jefferson County $1.4B Storm</h3>
                  <p className="text-[#c8c5cd] text-sm leading-relaxed">
                    Jefferson County was the center of a cataclysmic event with hail reported to be at least <strong className="text-[#e2e2e2]">8 inches deep</strong> in some areas. The storm inflicted $1.4 billion in damages and was reminiscent of the notorious July 11, 1990 Colorado hail storm.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="section-heading mb-6">The Rising Trend of Large Hail in Colorado</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  2023 signaled a disturbing shift in Colorado hail patterns. Reports of baseball-sized hail (over 3 inches in diameter) surged nearly threefold since 2019, rising from <strong className="text-[#e2e2e2]">12 reports to 34 reports</strong>.
                </p>
                <p>
                  Reports of softball-sized hail (approximately 4 inches in diameter) also witnessed a notable uptick. Coloradans filed <strong className="text-[#e2e2e2]">13 reports of softball-sized hail in 2023</strong> with the NWS Denver office — nearly three times the number reported in 2005.
                </p>
                <p>
                  In eastern Colorado, hailstones ranging from 1 to 2 inches in diameter, falling at speeds of up to <strong className="text-[#e2e2e2]">80 miles per hour</strong>, are a common occurrence each summer. Northeastern Colorado has witnessed hailstones as large as 4.5 inches in diameter — capable of puncturing roofs, windows, siding, and vehicles.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="section-heading mb-6">What Hail Damage Looks Like on Your Roof</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                  <p><strong className="text-[#e2e2e2]">Dented gutters and downspouts</strong> — the easiest visible indicator of hail impact from the ground.</p>
                  <p><strong className="text-[#e2e2e2]">Missing granules</strong> on asphalt shingles — appears as dark spots or bald patches. Granule loss accelerates UV degradation.</p>
                  <p><strong className="text-[#e2e2e2]">Soft spots</strong> on shingles when pressed gently — indicates fractured fiberglass mat beneath.</p>
                  <p><strong className="text-[#e2e2e2]">Dented vents, flashing, or skylights</strong> — metal components show damage clearly and are often the first thing adjusters check.</p>
                  <p><strong className="text-[#e2e2e2]">Cracked or split shingles</strong> — caused by large hail impact, these create immediate water entry points.</p>
                </div>
                <div className="card-dark p-6">
                  <h3 className="font-display text-lg text-[#e2e2e2] uppercase mb-4">Hail Size Damage Scale</h3>
                  <div className="space-y-3 text-sm text-[#c8c5cd]">
                    <div className="flex justify-between border-b border-[#333] pb-2"><span className="text-[#e2e2e2]">1.0" (Quarter)</span> <span>Granule loss, minor denting</span></div>
                    <div className="flex justify-between border-b border-[#333] pb-2"><span className="text-[#e2e2e2]">1.75" (Golf Ball)</span> <span>Significant shingle damage</span></div>
                    <div className="flex justify-between border-b border-[#333] pb-2"><span className="text-[#e2e2e2]">2.0" (Egg)</span> <span>Cracked shingles, flashing dents</span></div>
                    <div className="flex justify-between border-b border-[#333] pb-2"><span className="text-[#e2e2e2]">2.75" (Baseball)</span> <span>Punctures, broken skylights</span></div>
                    <div className="flex justify-between border-b border-[#333] pb-2"><span className="text-[#e2e2e2]">4.0" (Softball)</span> <span>Severe structural damage</span></div>
                    <div className="flex justify-between"><span className="text-[#e2e2e2]">4.5"+ (Record)</span> <span>Total roof destruction</span></div>
                  </div>
                </div>
              </div>
              <p className="text-[#c8c5cd] mt-4 leading-relaxed">
                <strong className="text-[#e2e2e2]">Critical warning:</strong> Damage isn't always visible from the ground. Our free inspection uses drone technology and thermal imaging to identify hidden fractures in the fiberglass mat beneath shingles — damage that can lead to leaks months later.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="section-heading mb-6">Insurance Claims: Deadlines, Deductibles & Denials</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  <strong className="text-[#e2e2e2]">Claim deadlines are shrinking.</strong> Most Colorado homeowners' policies require claims to be filed within 1-2 years of the storm date. However, some insurers have recently shortened this window. Missing your deadline can result in claim denial — regardless of damage severity.
                </p>
                <p>
                  <strong className="text-[#e2e2e2]">Wind/hail deductibles are different.</strong> Many Colorado policies now have separate wind/hail deductibles calculated as a <strong className="text-[#e2e2e2]">percentage of your home's insured value</strong> (typically 1-5%), rather than a flat dollar amount. On a $500,000 home, a 2% deductible means $10,000 out of pocket.
                </p>
                <p>
                  <strong className="text-[#e2e2e2]">Cosmetic damage exclusions</strong> are increasingly common. Some insurers now exclude coverage if hail only dents shingles or flashing but doesn't compromise performance. This means you might get zero payout even with visible damage.
                </p>
                <p>
                  <strong className="text-[#e2e2e2]">Code upgrades may not be covered</strong> unless you carry specific ordinance or law coverage. If your 1995 roof needs to be replaced under 2026 building codes, the cost difference comes out of your pocket without this endorsement.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="section-heading mb-6">Denver Hail Damage Repair Costs (2026)</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="card-dark p-6 text-center">
                  <div className="font-display text-3xl text-[#e94560] mb-2">$9,500 – $24,000</div>
                  <div className="text-[#e2e2e2] text-sm font-semibold uppercase mb-1">Full Replacement</div>
                  <div className="text-[#c8c5cd] text-sm">1,500–3,000 sq ft home, architectural shingles</div>
                </div>
                <div className="card-dark p-6 text-center">
                  <div className="font-display text-3xl text-[#e94560] mb-2">$3,000 – $8,000</div>
                  <div className="text-[#e2e2e2] text-sm font-semibold uppercase mb-1">Partial Repair</div>
                  <div className="text-[#c8c5cd] text-sm">Section replacement, moderate hail damage</div>
                </div>
                <div className="card-dark p-6 text-center">
                  <div className="font-display text-3xl text-[#e94560] mb-2">$500 – $2,500</div>
                  <div className="text-[#e2e2e2] text-sm font-semibold uppercase mb-1">Minor Repair</div>
                  <div className="text-[#c8c5cd] text-sm">Spot repairs, gutter replacement, sealing</div>
                </div>
              </div>
              <p className="text-[#c8c5cd] mt-4 text-sm leading-relaxed">
                Costs vary based on roof size, pitch, material choice, and code requirements. Most hail damage claims are covered by insurance minus your deductible. We provide free, detailed estimates and work directly with your adjuster.
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="section-heading mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "How many hail days does Denver get per year?", a: "Denver averages more hail days per year than any other major U.S. city. Colorado's hail season runs April 15 to September 15, with June being the peak month for destructive hailstorms according to NOAA data." },
                  { q: "What size hail damages a roof?", a: "Hail 1 inch or larger can damage asphalt shingles. Golf ball-sized hail (1.75 inches) causes significant damage. Baseball-sized hail (2.75+ inches) can puncture roofs, break skylights, and dent metal components. In 2023, Colorado saw 34 reports of baseball-sized hail, up from 12 in 2019." },
                  { q: "How long do I have to file a hail damage insurance claim in Colorado?", a: "Most Colorado homeowners insurance policies require claims to be filed within 1-2 years of the storm date. However, some insurers have shortened this window. Check your policy declarations page for your specific deadline." },
                  { q: "What does hail damage look like on a roof?", a: "Visible signs include dented gutters and downspouts, missing granules on shingles (dark spots or bald patches), soft spots when pressed, cracked or split shingles, and dented vents or flashing. Hidden damage requires professional inspection with drone technology and thermal imaging." },
                  { q: "How much does hail damage roof repair cost in Denver?", a: "A full roof replacement in Denver after hail damage typically costs $9,500 to $24,000 for a 1,500-3,000 sq ft home (2026 data). Most homeowners' policies cover hail damage minus the deductible. Wind/hail deductibles in Colorado are often 1-5% of the home's insured value." },
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
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">Free Hail Damage Inspection</h2>
              <p className="text-[#c8c5cd] mb-6 leading-relaxed">
                After any Denver hailstorm, time is limited. Insurance deadlines are shrinking, and hidden damage only gets worse. We offer free, no-obligation inspections with drone photography and thermal imaging across the entire Denver metro area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
                <a href="#inspect-form" className="btn-outline">Request Free Inspection</a>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }} id="inspect-form">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Request Your Free Inspection</h2>
            <p className="text-center text-[#c8c5cd] mb-10">No obligation. Detailed report. Honest assessment.</p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Phone</p>
                  <a href={PHONE_HREF} className="text-2xl font-bold text-[#e94560] hover:text-white transition-colors">{PHONE}</a>
                </div>
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Hours</p>
                  <p className="text-lg text-[#e2e2e2]">24/7 Emergency Response</p>
                </div>
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Coverage Area</p>
                  <p className="text-lg text-[#e2e2e2]">Denver, Aurora, Lakewood, Littleton, Arvada, Boulder & all suburbs</p>
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
