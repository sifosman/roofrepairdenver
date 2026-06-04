"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

const providers = [
  "State Farm", "Allstate", "Farmers", "American Family",
  "Liberty Mutual", "USAA", "Travelers", "Other / Not Sure",
];

const providerDiscounts: Record<string, number> = {
  "State Farm": 0.25, "Allstate": 0.20, "Farmers": 0.22,
  "American Family": 0.28, "Liberty Mutual": 0.18, "USAA": 0.30,
  "Travelers": 0.20, "Other / Not Sure": 0.20,
};

const upgradeCost = 3500;

export default function ShingleSavingsCalculatorPage() {
  const [provider, setProvider] = useState("");
  const [premium, setPremium] = useState(2200);
  const [showResult, setShowResult] = useState(false);

  const discountRate = provider ? providerDiscounts[provider] : 0;
  const annualSavings = Math.round(premium * discountRate);
  const tenYearSavings = annualSavings * 10;
  const paybackYears = annualSavings > 0 ? (upgradeCost / annualSavings).toFixed(1) : "0";
  const netTenYear = tenYearSavings - upgradeCost;

  const handleCalculate = () => {
    if (provider) setShowResult(true);
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="mb-4">
              <Link href="/tools" className="text-[#c8c5cd] hover:text-[#e2e2e2] transition-colors text-sm">← Back to Free Tools</Link>
            </p>
            <h1 className="font-display text-4xl md:text-5xl uppercase mb-4 text-[#e2e2e2]">
              Class 4 Shingle <span className="text-[#e94560]">Savings Calculator</span>
            </h1>
            <p className="text-lg text-[#c8c5cd] max-w-xl mx-auto">
              Colorado insurers offer big discounts for impact-resistant Class 4 shingles. See exactly how much you could save.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            {!showResult ? (
              <div className="card-dark p-8 md:p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#e94560] text-white flex items-center justify-center font-bold text-sm">1</span>
                    <h2 className="font-display text-xl uppercase text-[#e2e2e2]">Who is your insurance provider?</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {providers.map((p) => (
                      <button
                        key={p}
                        onClick={() => { setProvider(p); setShowResult(false); }}
                        className={`p-4 rounded border text-left transition-all ${provider === p ? "border-[#e94560] bg-[#e94560]/10" : "border-[#47464c] bg-[#121414] hover:border-[#929097]"}`}
                      >
                        <div className="text-[#e2e2e2] font-bold text-sm">{p}</div>
                        <div className="text-[#c8c5cd] text-xs mt-1">Avg. discount: {(providerDiscounts[p] * 100).toFixed(0)}%</div>
                      </button>
                    ))}
                  </div>
                </div>

                {provider && (
                  <div className="mb-8 animate-[fadeIn_0.3s_ease]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-[#e94560] text-white flex items-center justify-center font-bold text-sm">2</span>
                      <h2 className="font-display text-xl uppercase text-[#e2e2e2]">Your annual home insurance premium</h2>
                    </div>
                    <div className="bg-[#121414] border border-[#47464c] rounded p-6">
                      <div className="flex justify-between text-[#c8c5cd] text-sm mb-2">
                        <span>$800</span>
                        <span className="text-[#e2e2e2] font-bold text-lg">${premium.toLocaleString()}</span>
                        <span>$5,000+</span>
                      </div>
                      <input
                        type="range"
                        min="800"
                        max="5000"
                        step="100"
                        value={premium}
                        onChange={(e) => { setPremium(Number(e.target.value)); setShowResult(false); }}
                        className="w-full accent-[#e94560] mb-4"
                      />
                      <p className="text-[#c8c5cd] text-xs">
                        💡 Most Denver homeowners pay between $1,800–$2,800/year. Check your declarations page if unsure.
                      </p>
                    </div>
                  </div>
                )}

                {provider && (
                  <button onClick={handleCalculate} className="btn-primary w-full text-lg">
                    Calculate My Savings
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </button>
                )}
              </div>
            ) : (
              <div className="card-dark p-8 md:p-10 animate-[fadeIn_0.4s_ease]">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">🛡️</div>
                  <h2 className="font-display text-3xl uppercase text-[#e2e2e2] mb-2">Your Class 4 Savings</h2>
                  <p className="text-[#c8c5cd] text-sm">{provider} • ${premium.toLocaleString()}/year premium</p>
                </div>

                <div className="bg-[#121414] border border-[#47464c] rounded p-6 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-[#c8c5cd] text-xs uppercase tracking-wider mb-1">Annual Savings</div>
                      <div className="font-display text-3xl text-[#0f9b0f]">${annualSavings.toLocaleString()}/yr</div>
                    </div>
                    <div>
                      <div className="text-[#c8c5cd] text-xs uppercase tracking-wider mb-1">10-Year Savings</div>
                      <div className="font-display text-3xl text-[#0f9b0f]">${tenYearSavings.toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#121414] border border-[#47464c] rounded p-4 text-center">
                    <div className="text-2xl mb-2">💰</div>
                    <div className="text-[#c8c5cd] text-xs uppercase tracking-wider mb-1">Upgrade Premium</div>
                    <div className="text-[#e2e2e2] font-bold">~${upgradeCost.toLocaleString()}</div>
                  </div>
                  <div className="bg-[#121414] border border-[#47464c] rounded p-4 text-center">
                    <div className="text-2xl mb-2">⏱️</div>
                    <div className="text-[#c8c5cd] text-xs uppercase tracking-wider mb-1">Payback Period</div>
                    <div className="text-[#e2e2e2] font-bold">{paybackYears} years</div>
                  </div>
                  <div className="bg-[#121414] border border-[#47464c] rounded p-4 text-center">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-[#c8c5cd] text-xs uppercase tracking-wider mb-1">10-Year Net Profit</div>
                    <div className="text-[#0f9b0f] font-bold">+${netTenYear.toLocaleString()}</div>
                  </div>
                </div>

                <div className="bg-[#0f9b0f]/10 border border-[#0f9b0f] rounded p-4 mb-8">
                  <p className="text-[#e2e2e2] text-sm">
                    <strong>Bonus protection:</strong> Class 4 shingles withstand 2-inch steel ball impacts — the same size as the hail that hit Denver on June 1, 2026. Many homeowners with Class 4 roofs saw zero damage.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={PHONE_HREF} className="btn-primary flex-1 text-center justify-center">
                    Get a Class 4 Upgrade Quote
                  </a>
                  <button onClick={() => { setShowResult(false); setProvider(""); setPremium(2200); }} className="btn-outline flex-1">
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
