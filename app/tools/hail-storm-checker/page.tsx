"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE } from "@/lib/site";

const PHONE = SITE.phone.display;
const PHONE_HREF = SITE.phone.href;

type RiskLevel = "high" | "medium" | "low";

interface AreaData {
  risk: RiskLevel;
  storms: string[];
  maxHail: string;
  claimDeadline: string;
}

const areaDatabase: Record<string, AreaData> = {
  "Aurora": { risk: "high", storms: ["June 1, 2026", "May 2024", "June 2024", "May 2025"], maxHail: "2.5 inches", claimDeadline: "June 1, 2027" },
  "Stapleton / Central Park": { risk: "high", storms: ["June 1, 2026", "May 2024", "July 2024"], maxHail: "2.5 inches", claimDeadline: "June 1, 2027" },
  "Highlands / Berkeley": { risk: "high", storms: ["June 1, 2026", "July 2024", "June 2025"], maxHail: "2.0 inches", claimDeadline: "June 1, 2027" },
  "Park Hill": { risk: "high", storms: ["June 1, 2026", "May 2024"], maxHail: "2.0 inches", claimDeadline: "June 1, 2027" },
  "Lakewood": { risk: "medium", storms: ["June 2024", "July 2024", "June 2025"], maxHail: "1.75 inches", claimDeadline: "Varies by storm date" },
  "Littleton": { risk: "medium", storms: ["May 2024", "May 2025", "June 2025"], maxHail: "1.5 inches", claimDeadline: "Varies by storm date" },
  "Arvada": { risk: "medium", storms: ["June 2024", "July 2024", "June 2025"], maxHail: "1.75 inches", claimDeadline: "Varies by storm date" },
  "Englewood": { risk: "medium", storms: ["June 1, 2026", "May 2025"], maxHail: "1.5 inches", claimDeadline: "June 1, 2027" },
  "Centennial": { risk: "medium", storms: ["May 2024", "May 2025", "June 2025"], maxHail: "1.5 inches", claimDeadline: "Varies by storm date" },
  "Highlands Ranch": { risk: "medium", storms: ["May 2025", "June 2025"], maxHail: "1.5 inches", claimDeadline: "Varies by storm date" },
  "Denver (Downtown / Capitol Hill)": { risk: "medium", storms: ["June 1, 2026", "July 2024"], maxHail: "1.5 inches", claimDeadline: "June 1, 2027" },
  "Wheat Ridge": { risk: "low", storms: ["July 2024"], maxHail: "1.25 inches", claimDeadline: "July 2025" },
  "Westminster": { risk: "low", storms: ["June 2024", "June 2025"], maxHail: "1.25 inches", claimDeadline: "Varies by storm date" },
  "Thornton": { risk: "low", storms: ["June 2024", "May 2025"], maxHail: "1.25 inches", claimDeadline: "Varies by storm date" },
  "Broomfield": { risk: "low", storms: ["June 2024"], maxHail: "1.25 inches", claimDeadline: "June 2025" },
  "Parker": { risk: "low", storms: ["May 2025"], maxHail: "1.25 inches", claimDeadline: "May 2026" },
  "Castle Rock": { risk: "low", storms: ["May 2025"], maxHail: "1.0 inches", claimDeadline: "May 2026" },
  "Golden": { risk: "low", storms: ["July 2024"], maxHail: "1.0 inches", claimDeadline: "July 2025" },
  "Boulder": { risk: "low", storms: ["July 2024", "June 2025"], maxHail: "1.5 inches", claimDeadline: "Varies by storm date" },
};

const riskConfig: Record<RiskLevel, { color: string; bg: string; icon: string; label: string; desc: string }> = {
  high: {
    color: "#e94560",
    bg: "rgba(233,69,96,0.1)",
    icon: "🔴",
    label: "HIGH RISK",
    desc: "Your area was directly hit by recent severe hailstorms. We strongly recommend a professional inspection.",
  },
  medium: {
    color: "#f5a623",
    bg: "rgba(245,166,35,0.1)",
    icon: "🟡",
    label: "MEDIUM RISK",
    desc: "Your area has experienced multiple hail events. An inspection is recommended to catch hidden damage.",
  },
  low: {
    color: "#0f9b0f",
    bg: "rgba(15,155,15,0.1)",
    icon: "🟢",
    label: "LOW RISK",
    desc: "Your area has had minimal recent hail activity. Still worth checking if your roof is aging.",
  },
};

export default function HailStormCheckerPage() {
  const [area, setArea] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleCheck = () => {
    if (area) setShowResult(true);
  };

  const data = areaDatabase[area];
  const risk = data ? riskConfig[data.risk] : null;

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="mb-4">
              <Link href="/tools" className="text-[#c8c5cd] hover:text-[#e2e2e2] transition-colors text-sm">← Back to Free Tools</Link>
            </p>
            <h1 className="font-display text-4xl md:text-5xl uppercase mb-4 text-[#e2e2e2]">
              Denver Hail Storm <span className="text-[#e94560]">Risk Checker</span>
            </h1>
            <p className="text-lg text-[#c8c5cd] max-w-xl mx-auto">
              Select your neighborhood to see if your area was hit by recent Front Range hailstorms and when your insurance claim deadline is.
            </p>
          </div>
        </section>

        {/* Checker */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            {!showResult ? (
              <div className="card-dark p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-[#e94560] text-white flex items-center justify-center font-bold text-sm">1</span>
                  <h2 className="font-display text-xl uppercase text-[#e2e2e2]">Select your area</h2>
                </div>

                <select
                  value={area}
                  onChange={(e) => { setArea(e.target.value); setShowResult(false); }}
                  className="input-dark mb-6 text-base"
                >
                  <option value="">Choose your Denver metro neighborhood...</option>
                  {Object.keys(areaDatabase).sort().map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>

                <div className="mb-6 p-4 bg-[#121414] border border-[#47464c] rounded">
                  <p className="text-[#c8c5cd] text-sm">
                    💡 <strong className="text-[#e2e2e2]">Tip:</strong> If you are unsure which area to pick, choose the closest major city. Storm paths can vary by a few miles.
                  </p>
                </div>

                <button
                  onClick={handleCheck}
                  disabled={!area}
                  className={`btn-primary w-full text-lg ${!area ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Check My Risk
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </button>
              </div>
            ) : (
              /* Results */
              <div className="card-dark p-8 md:p-10 animate-[fadeIn_0.4s_ease]">
                {risk && data && (
                  <>
                    <div className="text-center mb-8">
                      <div className="text-5xl mb-4">{risk.icon}</div>
                      <div
                        className="inline-block px-4 py-2 rounded-full font-bold text-sm tracking-wider mb-4"
                        style={{ backgroundColor: risk.bg, color: risk.color, border: `1px solid ${risk.color}` }}
                      >
                        {risk.label}
                      </div>
                      <h2 className="font-display text-3xl uppercase text-[#e2e2e2] mb-2">{area}</h2>
                      <p className="text-[#c8c5cd] text-base max-w-md mx-auto">{risk.desc}</p>
                    </div>

                    {/* Storm Details */}
                    <div className="bg-[#121414] border border-[#47464c] rounded p-6 mb-6">
                      <h3 className="font-bold text-[#e2e2e2] uppercase text-sm tracking-wider mb-4">Recent Storm Activity</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="text-[#c8c5cd] text-xs uppercase tracking-wider mb-1">Storms Recorded</div>
                          <div className="text-[#e2e2e2] font-bold">{data.storms.join(", ")}</div>
                        </div>
                        <div>
                          <div className="text-[#c8c5cd] text-xs uppercase tracking-wider mb-1">Largest Hail Reported</div>
                          <div className="text-[#e2e2e2] font-bold">{data.maxHail}</div>
                        </div>
                      </div>
                    </div>

                    {/* Claim Deadline Alert */}
                    <div className="bg-[#e94560]/10 border border-[#e94560] rounded p-6 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">⏰</div>
                        <div>
                          <h3 className="font-bold text-[#e2e2e2] mb-1">Insurance Claim Deadline</h3>
                          <p className="text-[#c8c5cd] text-sm">
                            Most Colorado policies require claims within <strong className="text-[#e2e2e2]">1–2 years</strong> of the storm date. Your latest deadline is approximately <strong className="text-[#e2e2e2]">{data.claimDeadline}</strong>.
                          </p>
                          <p className="text-[#c8c5cd] text-sm mt-2">
                            Missing this deadline = automatic denial. Don&apos;t wait.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* What to check */}
                    <div className="mb-8">
                      <h3 className="font-bold text-[#e2e2e2] uppercase text-sm tracking-wider mb-4">Quick Self-Check Signs</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "Dented gutters or downspouts",
                          "Missing granules (dark spots on shingles)",
                          "Soft spots when pressing shingles",
                          "Dented vents, flashing, or skylights",
                          "Cracked or split shingles",
                        ].map((sign, i) => (
                          <div key={i} className="flex items-center gap-3 bg-[#121414] border border-[#47464c] rounded p-3">
                            <span className="text-[#e94560] text-lg">✓</span>
                            <span className="text-[#c8c5cd] text-sm">{sign}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href={PHONE_HREF} className="btn-primary flex-1 text-center justify-center">
                        Book Free Inspection
                      </a>
                      <button onClick={() => { setShowResult(false); setArea(""); }} className="btn-outline flex-1">
                        Check Another Area
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
