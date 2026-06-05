import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Class 4 Impact-Resistant Shingles: Are They Worth It in Denver? | Denver Roof Repair Pros",
  description: "Class 4 shingles withstand 2-inch steel ball impacts. In Denver's hail capital, they can mean the difference between repair and replacement.",
  keywords: "class 4 shingles denver, impact resistant shingles colorado, hail proof roof denver, class 4 roof insurance discount",
  alternates: { canonical: canonical("/blog/class-4-shingles-denver") },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Class 4 Impact-Resistant Shingles: Are They Worth It in Denver?",
  "description": "Cost-benefit analysis of Class 4 shingles for Denver homeowners, including insurance discounts and hail resistance data.",
  "author": { "@type": "Organization", "name": SITE.name },
  "publisher": {
    "@type": "Organization",
    "name": SITE.name,
    "logo": { "@type": "ImageObject", "url": `${SITE.url}/favicon.svg` },
  },
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-01",
  "url": "https://roofrepairindenver.com/blog/class-4-shingles-denver",
};

const PHONE = SITE.phone.display;
const PHONE_HREF = SITE.phone.href;

export default function BlogPostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SiteHeader />
      <main>
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              <Link href="/blog" className="text-[#c8c5cd] hover:text-[#e2e2e2] transition-colors">← Back to Blog</Link>
            </p>
            <h1 className="font-display text-4xl md:text-5xl uppercase mb-4 text-[#e2e2e2]">
              Class 4 Impact-Resistant Shingles: Are They Worth It in Denver?
            </h1>
            <div className="flex gap-4 text-[#c8c5cd] text-sm mb-8">
              <span>📅 June 1, 2026</span>
              <span>✍️ Denver Roof Repair Pros</span>
            </div>

            <article className="prose prose-invert max-w-none">
              <div className="space-y-6 text-[#c8c5cd] leading-relaxed">
                <p>
                  If you live in Denver, you've probably heard contractors mention "Class 4" shingles. But what does that actually mean — and more importantly, are they worth the extra cost in the hail capital of the United States?
                </p>
                <p>
                  The short answer: <strong className="text-[#e2e2e2]">for most Denver homeowners, yes</strong>. Here's the data.
                </p>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">What Are Class 4 Shingles?</h2>
                <p>
                  Class 4 is the highest impact-resistance rating under the <strong className="text-[#e2e2e2]">UL 2218 standard</strong>. To earn Class 4, a shingle must withstand impact from a 2-inch steel ball dropped from 20 feet — twice — without cracking or splitting.
                </p>
                <p>
                  Standard 3-tab and basic architectural shingles are typically Class 1 or 2. They may survive small hail, but golf ball-sized hail (1.75 inches) or larger will crack them. In Denver, where 2+ inch hail is increasingly common, that difference matters enormously.
                </p>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">The Cost Difference</h2>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="card-dark p-4">
                    <h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">Standard Architectural</h3>
                    <p className="text-sm">$8–$11/sq ft installed. Class 2–3 impact rating. 15–20 year lifespan in Denver's UV. Vulnerable to hail 1.5 inches and larger.</p>
                  </div>
                  <div className="card-dark p-4">
                    <h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">Class 4 Impact-Resistant</h3>
                    <p className="text-sm">$10–$14/sq ft installed. Class 4 rating. 20–25 year lifespan. Withstands hail up to 2+ inches. Better wind ratings too.</p>
                  </div>
                </div>
                <p>
                  On a typical 2,000 sq ft roof, the upgrade cost is roughly <strong className="text-[#e2e2e2]">$2,000–$4,000 more</strong> than standard architectural shingles. That difference pays for itself quickly in Denver.
                </p>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">Insurance Discounts: The Hidden ROI</h2>
                <p>
                  Several major Colorado insurers offer premium discounts for homes with Class 4 shingles:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-[#e2e2e2]">State Farm:</strong> Discounts up to 10-15% on hail/wind coverage in qualifying areas</li>
                  <li><strong className="text-[#e2e2e2]">Farmers Insurance:</strong> Impact-resistant material discounts available in Colorado</li>
                  <li><strong className="text-[#e2e2e2]">Allstate:</strong> Offers roof material upgrades that can lower premiums</li>
                  <li><strong className="text-[#e2e2e2]">USAA:</strong> Discounts for Fortified Home standards, which include Class 4 roofs</li>
                </ul>
                <p>
                  On a $2,000 annual premium, a 10% discount saves $200/year. Over 15 years, that's <strong className="text-[#e2e2e2]">$3,000 in savings</strong> — more than covering the upfront cost difference.
                </p>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">Real-World Performance in Denver Hailstorms</h2>
                <p>
                  After the May 2024 Denver metro hailstorm (hail up to 2.75 inches), we inspected hundreds of roofs. The pattern was unmistakable:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Homes with Class 4 shingles: mostly cosmetic denting, minimal functional damage</li>
                  <li>Homes with standard architectural shingles: cracked shingles, exposed fiberglass, granule loss requiring full replacement</li>
                  <li>Homes with 3-tab shingles: catastrophic damage, immediate leak risk</li>
                </ul>
                <p>
                  The homeowners with Class 4 roofs who had cosmetic damage exclusions in their policies? They were the ones who got zero payouts. But their roofs were still functional. The standard-shingle homeowners got insurance checks — but only because their roofs were destroyed.
                </p>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">The Verdict</h2>
                <p>
                  If you plan to stay in your Denver home for more than 5 years, Class 4 shingles are a smart investment. The upfront cost is modest, insurance discounts offset it over time, and the peace of mind during hail season is significant.
                </p>
                <p>
                  If you're replacing your roof after hail damage and insurance is paying, the upgrade to Class 4 is often only a small out-of-pocket difference — and well worth it.
                </p>

                <div className="p-6 card-dark my-8">
                  <h3 className="font-display text-xl uppercase text-[#e2e2e2] mb-3">Free Roof Inspection & Material Consultation</h3>
                  <p className="mb-4">We assess your current roof and recommend the best material for your neighborhood, budget, and insurance situation. Class 4 isn't right for everyone — but it's right for most Denver homeowners.</p>
                  <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
