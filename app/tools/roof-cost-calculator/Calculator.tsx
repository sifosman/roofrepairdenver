"use client";

import { useState } from "react";

const PHONE_HREF = "tel:+17205550199";

type HomeSize = "small" | "medium" | "large";
type Stories = 1 | 2 | 3;
type Material = "asphalt" | "premium" | "metal";

const sizeLabels: Record<HomeSize, string> = {
  small: "Small (1–2 bedrooms)",
  medium: "Medium (3–4 bedrooms)",
  large: "Large (5+ bedrooms)",
};

const storyLabels: Record<Stories, string> = {
  1: "1 Story",
  2: "2 Stories",
  3: "3 Stories",
};

const materialLabels: Record<Material, string> = {
  asphalt: "Standard Asphalt Shingles",
  premium: "Premium Designer Shingles",
  metal: "Metal Roofing",
};

const baseCosts: Record<HomeSize, [number, number]> = {
  small: [5500, 7500],
  medium: [8500, 11500],
  large: [12000, 16500],
};

const storyMultipliers: Record<Stories, number> = {
  1: 1.0,
  2: 1.15,
  3: 1.35,
};

const materialMultipliers: Record<Material, number> = {
  asphalt: 1.0,
  premium: 1.35,
  metal: 2.1,
};

const permitRange: [number, number] = [150, 450];

export default function Calculator() {
  const [size, setSize] = useState<HomeSize | null>(null);
  const [stories, setStories] = useState<Stories | null>(null);
  const [material, setMaterial] = useState<Material | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    if (size && stories && material) setShowResult(true);
  };

  const getEstimate = (): [number, number] => {
    if (!size || !stories || !material) return [0, 0];
    const [low, high] = baseCosts[size];
    const sMult = storyMultipliers[stories];
    const mMult = materialMultipliers[material];
    const lowTotal = Math.round((low * sMult * mMult + permitRange[0]) / 100) * 100;
    const highTotal = Math.round((high * sMult * mMult + permitRange[1]) / 100) * 100;
    return [lowTotal, highTotal];
  };

  const [lowEst, highEst] = getEstimate();
  const step = size ? (stories ? (material ? 3 : 2) : 1) : 0;

  return (
    <div className="max-w-2xl mx-auto">
      {!showResult ? (
        <div className="card-dark p-8 md:p-10">
          {/* Step 1: Home Size */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-[#e94560] text-white flex items-center justify-center font-bold text-sm">1</span>
              <h2 className="font-display text-xl uppercase text-[#e2e2e2]">How big is your home?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(Object.keys(sizeLabels) as HomeSize[]).map((k) => (
                <button
                  key={k}
                  onClick={() => { setSize(k); setStories(null); setMaterial(null); setShowResult(false); }}
                  className={`p-4 rounded border text-left transition-all ${size === k ? "border-[#e94560] bg-[#e94560]/10" : "border-[#47464c] bg-[#121414] hover:border-[#929097]"}`}
                >
                  <div className="text-2xl mb-2">{k === "small" ? "🛏️" : k === "medium" ? "🏠" : "🏡"}</div>
                  <div className="text-[#e2e2e2] font-bold text-sm">{sizeLabels[k]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Stories */}
          {size && (
            <div className="mb-8 animate-[fadeIn_0.3s_ease]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#e94560] text-white flex items-center justify-center font-bold text-sm">2</span>
                <h2 className="font-display text-xl uppercase text-[#e2e2e2]">How many stories?</h2>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {([1, 2, 3] as Stories[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => { setStories(s); setMaterial(null); setShowResult(false); }}
                    className={`p-4 rounded border text-center transition-all ${stories === s ? "border-[#e94560] bg-[#e94560]/10" : "border-[#47464c] bg-[#121414] hover:border-[#929097]"}`}
                  >
                    <div className="text-2xl mb-2">{s === 1 ? "🟰" : s === 2 ? "⏶" : "⏶⏶"}</div>
                    <div className="text-[#e2e2e2] font-bold text-sm">{storyLabels[s]}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Material */}
          {size && stories && (
            <div className="mb-8 animate-[fadeIn_0.3s_ease]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#e94560] text-white flex items-center justify-center font-bold text-sm">3</span>
                <h2 className="font-display text-xl uppercase text-[#e2e2e2]">What material do you prefer?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(materialLabels) as Material[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => { setMaterial(m); setShowResult(false); }}
                    className={`p-4 rounded border text-left transition-all ${material === m ? "border-[#e94560] bg-[#e94560]/10" : "border-[#47464c] bg-[#121414] hover:border-[#929097]"}`}
                  >
                    <div className="text-2xl mb-2">{m === "asphalt" ? "🏠" : m === "premium" ? "✨" : "🛡️"}</div>
                    <div className="text-[#e2e2e2] font-bold text-sm">{materialLabels[m]}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Calculate Button */}
          {size && stories && material && (
            <button onClick={handleCalculate} className="btn-primary w-full text-lg">
              Show My Estimate
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </button>
          )}

          {/* Progress indicator */}
          <div className="mt-6 flex gap-2 justify-center">
            {[0, 1, 2, 3].map((s) => (
              <div key={s} className={`h-2 w-8 rounded-full ${step >= s ? "bg-[#e94560]" : "bg-[#47464c]"}`} />
            ))}
          </div>
        </div>
      ) : (
        /* Results */
        <div className="card-dark p-8 md:p-10 animate-[fadeIn_0.4s_ease]">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🏠</div>
            <h2 className="font-display text-3xl uppercase text-[#e2e2e2] mb-2">Your Estimated Range</h2>
            <p className="text-[#c8c5cd] text-sm">Based on {sizeLabels[size!]} • {storyLabels[stories!]} • {materialLabels[material!]}</p>
          </div>

          <div className="bg-[#121414] border border-[#47464c] rounded p-6 mb-8 text-center">
            <div className="font-display text-4xl md:text-5xl text-[#e94560] mb-2">
              ${lowEst.toLocaleString()} – ${highEst.toLocaleString()}
            </div>
            <p className="text-[#c8c5cd] text-sm">Denver metro market average (includes materials, labor, cleanup & permits)</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#121414] border border-[#47464c] rounded p-4 text-center">
              <div className="text-2xl mb-2">🔨</div>
              <div className="text-[#e2e2e2] font-bold text-sm">Materials</div>
              <div className="text-[#c8c5cd] text-xs">High-grade shingles, underlayment, flashing</div>
            </div>
            <div className="bg-[#121414] border border-[#47464c] rounded p-4 text-center">
              <div className="text-2xl mb-2">👷</div>
              <div className="text-[#e2e2e2] font-bold text-sm">Labor</div>
              <div className="text-[#c8c5cd] text-xs">Licensed Denver-area roofing crew</div>
            </div>
            <div className="bg-[#121414] border border-[#47464c] rounded p-4 text-center">
              <div className="text-2xl mb-2">📋</div>
              <div className="text-[#e2e2e2] font-bold text-sm">Permits & Cleanup</div>
              <div className="text-[#c8c5cd] text-xs">City permit, debris removal, magnet sweep</div>
            </div>
          </div>

          <div className="bg-[#e94560]/10 border border-[#e94560] rounded p-4 mb-8">
            <p className="text-[#e2e2e2] text-sm">
              <strong>Important:</strong> This is a market-range estimate. Actual costs vary based on roof pitch, decking condition, number of shingle layers, and access. A physical inspection is required for an exact, guaranteed quote.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF} className="btn-primary flex-1 text-center justify-center">
              Book Free Inspection
            </a>
            <button onClick={() => { setShowResult(false); setSize(null); setStories(null); setMaterial(null); }} className="btn-outline flex-1">
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
