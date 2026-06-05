import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Are Ice Dams a Real Problem in Denver? | Denver Roof Repair Pros",
  description: "Ice dams in Denver: causes, risks, prevention, and removal. How freeze-thaw cycles create ice dams and what homeowners can do to protect their roofs.",
  keywords: "ice dams denver, denver roof ice dam removal, ice dam prevention colorado, freeze thaw roof damage denver",
  alternates: { canonical: canonical("/blog/ice-dams-denver-roofs") },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Are Ice Dams a Real Problem in Denver?",
  "description": "Understanding ice dam risks, prevention, and removal for Denver homeowners.",
  "author": { "@type": "Organization", "name": SITE.name },
  "publisher": {
    "@type": "Organization",
    "name": SITE.name,
    "logo": { "@type": "ImageObject", "url": `${SITE.url}/favicon.svg` },
  },
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-01",
  "url": "https://roofrepairindenver.com/blog/ice-dams-denver-roofs",
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
              Are Ice Dams a Real Problem in Denver?
            </h1>
            <div className="flex gap-4 text-[#c8c5cd] text-sm mb-8">
              <span>📅 June 1, 2026</span>
              <span>✍️ Denver Roof Repair Pros</span>
            </div>

            <article className="prose prose-invert max-w-none">
              <div className="space-y-6 text-[#c8c5cd] leading-relaxed">
                <p>
                  Denver isn't Minnesota, but ice dams are a real and growing problem. Denver's extreme freeze-thaw cycles — daytime highs in the 40s–50s°F and overnight lows in the teens — create the perfect conditions for ice dam formation.
                </p>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">What Causes Ice Dams</h2>
                <p>
                  Ice dams form when snow melts on the warmer upper roof, flows to colder eaves, and refreezes. The ridge traps meltwater, which backs up under shingles. In Denver, this is driven by <strong className="text-[#e2e2e2]">inadequate attic insulation</strong> more than extreme cold. Warm air escaping into the attic heats the roof deck from below.
                </p>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">Signs You Have Ice Dams</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Icicles consistently forming along eaves</li>
                  <li>Ice buildup in gutters</li>
                  <li>Water stains on ceilings near exterior walls</li>
                  <li>Damp or compressed attic insulation</li>
                </ul>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">Prevention</h2>
                <div className="space-y-4">
                  <div className="card-dark p-4">
                    <h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">1. Upgrade Attic Insulation</h3>
                    <p className="text-sm">Bring to R-49 minimum (Colorado code). Reduces heat transfer to roof deck.</p>
                  </div>
                  <div className="card-dark p-4">
                    <h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">2. Improve Ventilation</h3>
                    <p className="text-sm">Soffit-to-ridge airflow keeps attic near outside temperature. Check soffit vents aren't blocked.</p>
                  </div>
                  <div className="card-dark p-4">
                    <h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">3. Seal Air Leaks</h3>
                    <p className="text-sm">Seal gaps around chimneys, light fixtures, fans, and attic hatches.</p>
                  </div>
                  <div className="card-dark p-4">
                    <h3 className="font-display text-base text-[#e2e2e2] uppercase mb-1">4. Install Ice & Water Shield</h3>
                    <p className="text-sm">Required by Denver code on new roofs. Provides backup protection at eaves and valleys.</p>
                  </div>
                </div>

                <h2 className="font-display text-2xl uppercase text-[#e2e2e2] mt-10 mb-4">Safe Removal</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use a roof rake from the ground to remove snow</li>
                  <li>Apply calcium chloride in mesh bags on ice dams</li>
                  <li><strong className="text-[#e2e2e2]">Never use rock salt</strong> — corrodes metal, kills vegetation</li>
                  <li>Never chip ice with tools — you'll damage shingles</li>
                </ul>

                <div className="p-6 card-dark my-8">
                  <h3 className="font-display text-xl uppercase text-[#e2e2e2] mb-3">Ice Dam Inspection & Prevention</h3>
                  <p className="mb-4">We assess attic insulation, ventilation, and roof condition. Proper prevention costs less than one season of interior water damage.</p>
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
