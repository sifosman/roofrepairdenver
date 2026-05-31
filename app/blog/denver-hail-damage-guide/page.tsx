import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Everything Denver Homeowners Should Know After a Hailstorm | Denver Roof Repair Pros",
  description: "Denver gets more hail than any major US city. Here's exactly what to check, what insurance covers, and how to file your roof repair claim.",
  keywords: "denver hail damage, hail damage roof denver, what to do after hailstorm denver, roof hail damage insurance denver",
  alternates: { canonical: "https://roofrepairindenver.com/blog/denver-hail-damage-guide" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Everything Denver Homeowners Should Know After a Hailstorm",
  "description": "Denver gets more hail than any major US city. Here's exactly what to check, what insurance covers, and how to file your roof repair claim.",
  "author": { "@type": "Organization", "name": "Denver Roof Repair Pros" },
  "publisher": {
    "@type": "Organization",
    "name": "Denver Roof Repair Pros",
    "logo": { "@type": "ImageObject", "url": "https://roofrepairindenver.com/favicon.svg" },
  },
  "datePublished": "2026-05-15",
  "dateModified": "2026-05-15",
  "url": "https://roofrepairindenver.com/blog/denver-hail-damage-guide",
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function BlogPostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SiteHeader />
      <main>
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              <Link href="/areas-we-serve" className="text-[#c8c5cd] hover:text-[#e2e2e2] transition-colors">← Back to Blog</Link>
            </p>
            <h1 className="font-display text-4xl md:text-5xl uppercase mb-4 text-[#e2e2e2]">
              Everything Denver Homeowners Should Know After a Hailstorm
            </h1>
            <div className="flex gap-4 text-[#c8c5cd] text-sm mb-8">
              <span>📅 May 15, 2026</span>
              <span>✍️ Denver Roof Repair Pros</span>
            </div>

            <article className="prose prose-invert max-w-none">
              <div className="space-y-6 text-[#c8c5cd] leading-relaxed">
                <p>
                  If you've been through a Denver hailstorm, you know the feeling — that panicked moment when you wonder if your roof made it through. And for good reason: <strong className="text-[#e2e2e2]">Denver is the hail capital of the United States</strong>, averaging more hailstorms per year than any other major city.
                </p>
                <p>
                  After the April 2026 storms that hit the Park Hill, Stapleton, and Aurora areas hard, most homeowners don't realize they could have damage they can't see from the ground. Here's exactly what you need to know.
                </p>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">Step 1: Check for Hail Damage (Even If You Think You're Fine)</h2>
                <p>Hail damage isn't always obvious. You might not see it until your next storm when water starts leaking through. Here's what to look for:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-[#e2e2e2]">Dented gutters and downspouts</strong> — the easiest visible indicator of hail impact</li>
                  <li><strong className="text-[#e2e2e2]">Missing granules</strong> on asphalt shingles — looks like dark spots or bald patches</li>
                  <li><strong className="text-[#e2e2e2]">Soft spots</strong> on shingles when pressed gently with your fingers</li>
                  <li><strong className="text-[#e2e2e2]">Dented vents, flashing, or skylights</strong> — metal components show damage clearly</li>
                  <li><strong className="text-[#e2e2e2]">Cracked or split shingles</strong> from large hail impact</li>
                </ul>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">Step 2: Understand Your Insurance Coverage</h2>
                <p>
                  Most Denver homeowners' policies cover hail and storm damage. But there are critical details:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-[#e2e2e2]">You have a limited window</strong> to file a claim — typically 1-2 years from the storm date</li>
                  <li><strong className="text-[#e2e2e2]">Your deductible applies</strong> — most Colorado policies have a separate wind/hail deductible</li>
                  <li><strong className="text-[#e2e2e2]">Code upgrades may not be covered</strong> unless you have specific ordinance coverage</li>
                  <li><strong className="text-[#e2e2e2]">Matching issues</strong> — insurers may only pay for damaged sections, not full replacement</li>
                </ul>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">Step 3: Get a Professional Inspection Before Filing</h2>
                <p>
                  Don't file your claim until you have a professional roof inspection. Here's why: once you file, the clock starts ticking. If the adjuster misses damage and you discover it later, getting a supplement approved is harder.
                </p>
                <p>
                  A professional inspection from a Denver roofing contractor gives you:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Documentation of every damaged shingle with photos</li>
                  <li>A detailed written report for your adjuster</li>
                  <li>An advocate who can attend the adjuster meeting with you</li>
                  <li>Knowledge of what Denver insurance companies typically approve</li>
                </ul>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">Step 4: Don't Sign Anything Until You Understand It</h2>
                <p>
                  After a big storm, you'll get door-knockers offering "free roof inspections." Some are legitimate contractors. Others are storm chasers who collect insurance checks and leave town. Before signing any contract:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Verify they're licensed in Colorado</li>
                  <li>Check their BBB rating and local reviews</li>
                  <li>Confirm they have a physical Denver-area address</li>
                  <li>Get everything in writing — scope, materials, timeline, warranty</li>
                </ul>

                <div className="p-6 card-dark my-8">
                  <h3 className="font-display text-xl uppercase text-[#e2e2e2] mb-3">Free Hail Damage Inspection</h3>
                  <p className="mb-4">We offer free, no-obligation hail damage inspections across the Denver metro area. We'll give you an honest assessment — even if you don't need repairs.</p>
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
