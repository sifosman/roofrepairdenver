import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Free Roof Tools for Denver Homeowners | Denver Roof Repair Pros",
  description:
    "Free interactive tools for Denver homeowners: roof cost estimator, hail damage checker, and Class 4 shingle savings calculator. No email required.",
  keywords:
    "roof repair cost denver, hail damage checker denver, roof replacement calculator, class 4 shingle savings, free roofing tools",
  alternates: { canonical: "https://roofrepairindenver.com/tools" },
};

const tools = [
  {
    title: "Roof Cost Estimator",
    desc: "Get an instant market-range estimate for your roof repair or replacement in just 3 simple clicks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M8 21v-5a2 2 0 012-2h4a2 2 0 012 2v5"/>
      </svg>
    ),
    href: "/tools/roof-cost-calculator",
    cta: "Estimate My Roof Cost",
    badge: "Most Popular",
  },
  {
    title: "Hail Storm Checker",
    desc: "Was your Denver neighborhood hit by the recent June 2026 storm? Check your risk in seconds.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/><path d="M20 14v.01"/>
      </svg>
    ),
    href: "/tools/hail-storm-checker",
    cta: "Check My Area",
    badge: "New",
  },
  {
    title: "Shingle Savings Calculator",
    desc: "See how much Colorado homeowners save on insurance premiums by upgrading to impact-resistant Class 4 shingles.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    href: "/tools/shingle-savings-calculator",
    cta: "Calculate My Savings",
    badge: null,
  },
];

export default function ToolsHubPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl uppercase mb-6 text-[#e2e2e2]">
              Free Tools for <span className="text-[#e94560]">Denver Homeowners</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mx-auto leading-relaxed">
              No email required. No fine print. Just fast, honest answers to the questions every Colorado homeowner has after a storm.
            </p>
          </div>
        </section>

        {/* Tool Cards */}
        <section className="py-20 px-6">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <div key={i} className="card-dark p-8 flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform">
                {tool.badge && (
                  <span className="mb-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#e94560] text-white">
                    {tool.badge}
                  </span>
                )}
                <div className="text-[#e94560] mb-6">{tool.icon}</div>
                <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">{tool.title}</h2>
                <p className="text-[#c8c5cd] text-base mb-8 flex-1 leading-relaxed">{tool.desc}</p>
                <Link href={tool.href} className="btn-primary w-full">
                  {tool.cta}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Strip */}
        <section className="border-t border-b border-[#929097] py-12 px-6">
          <div className="max-w-[1280px] mx-auto text-center">
            <p className="text-[#c8c5cd] text-lg mb-8 max-w-2xl mx-auto">
              These tools use real Denver metro pricing data, recent National Weather Service storm reports, and average Colorado insurance premium discounts.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <span className="trust-chip">No Email Required</span>
              <span className="trust-chip">Denver-Specific Data</span>
              <span className="trust-chip">Instant Results</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-[#e2e2e2] uppercase mb-6">
              Want an Exact Quote?
            </h2>
            <p className="text-[#c8c5cd] text-lg mb-8 max-w-xl mx-auto">
              Our free inspection includes drone photography, thermal imaging, and a written report you can use for your insurance claim.
            </p>
            <a href="tel:+17205550199" className="btn-primary text-lg">
              Book Free Inspection
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
