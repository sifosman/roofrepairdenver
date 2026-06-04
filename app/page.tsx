"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does roof repair cost in Denver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every job is different. That's why we offer free, no-obligation estimates — we assess the damage and give you an honest upfront price.",
      },
    },
    {
      "@type": "Question",
      "name": "Does insurance cover roof repair in Denver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Denver policies cover hail and storm damage. We've helped hundreds of homeowners file successful claims and handle the entire process.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does a roof repair take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minor repairs take 2-4 hours. Major repairs 1-2 days. Full replacements take 2-3 days. Emergency tarping within 60 minutes.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer free inspections?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Free, no-obligation inspections across the Denver metro area. Detailed written report and honest recommendations.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I know if I have hail damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signs include dented gutters, missing granules, and soft spots on shingles. Our free inspection identifies it for certain.",
      },
    },
  ],
};

const services = [
  { title: "Residential Roof Repair", desc: "Expert roof repair for Denver homes. Fix leaks, replace shingles, restore integrity.", icon: "🏠" },
  { title: "Emergency Roof Repair", desc: "24/7 emergency response. Storm damage, fallen trees, sudden leaks — 60-min arrival.", icon: "🚨" },
  { title: "Hail Damage Repair", desc: "Denver's #1 hail damage specialists. Insurance claims, assessment, full restoration.", icon: "🌨️" },
  { title: "Roof Replacement", desc: "Full replacements. Architectural shingles, metal roofing, flat systems.", icon: "🔧" },
  { title: "Roof Inspection", desc: "Free thorough inspections. Drone tech, thermal imaging, insurance-grade reports.", icon: "🔍" },
  { title: "Insurance Claim Help", desc: "We fight your insurance so you don't have to. 500+ successful claims filed.", icon: "📋" },
];

const whyUs = [
  { num: "01", title: "Trust", desc: "14+ years protecting Colorado homes. A+ BBB rating. Our reputation is built on doing the right thing every time." },
  { num: "02", title: "Precision", desc: "We don't cut corners. From first inspection to final shingle, every detail is handled with expert craftsmanship." },
  { num: "03", title: "Protection", desc: "Your roof is your home's first defense. We protect what matters most with durable materials and a 1-year labor warranty." },
];

const testimonials = [
  { name: "Michael R.", loc: "Denver", text: "They fixed my roof after the big hailstorm in April. The insurance claim process was confusing but they handled everything. Saved me thousands.", rating: 5 },
  { name: "Jennifer W.", loc: "Aurora", text: "Called at 9pm with a leaking roof during a rainstorm. They were here within an hour and had tarps up before any damage was done.", rating: 5 },
  { name: "Tom S.", loc: "Littleton", text: "Had my entire roof replaced after hail damage. The team was professional, cleaned up every nail, and finished in 2 days. Looks beautiful.", rating: 5 },
];

const faq = [
  { q: "How much does roof repair cost in Denver?", a: "Every job is different. That's why we offer free, no-obligation estimates — we assess the damage and give you an honest upfront price." },
  { q: "Does insurance cover roof repair in Denver?", a: "Most Denver policies cover hail and storm damage. We've helped hundreds of homeowners file successful claims and handle the entire process." },
  { q: "How long does a roof repair take?", a: "Minor repairs take 2-4 hours. Major repairs 1-2 days. Full replacements take 2-3 days. Emergency tarping within 60 minutes." },
  { q: "Do you offer free inspections?", a: "Yes! Free, no-obligation inspections across the Denver metro area. Detailed written report and honest recommendations." },
  { q: "How do I know if I have hail damage?", a: "Signs include dented gutters, missing granules, and soft spots on shingles. Our free inspection identifies it for certain." },
];

const trustBadges = [
  { text: "4.9 ★ 500+ Reviews", type: "success" },
  { text: "A+ BBB Rating", type: "trust" },
  { text: "20+ Years in Denver", type: "trust" },
  { text: "Licensed & Insured", type: "trust" },
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.75)" }}></div>
        <div className="relative max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-20 lg:py-[80px]">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="font-display text-5xl md:text-7xl md:leading-[72px] text-[#e2e2e2] uppercase leading-tight">
              Denver Roof Repair That Fights Your Insurance Claim. Free Inspections.
            </h1>
            <p className="text-lg md:text-xl text-[#c8c5cd] max-w-2xl">
              Free inspection. No obligation. We handle the insurance claim so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="#inspect-form" className="btn-primary">
                Book Free Inspection
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </a>
              <a href={PHONE_HREF} className="btn-outline">
                Call Now: {PHONE}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-4 mt-8 flex-wrap">
              {trustBadges.map((badge, i) => (
                <span key={i} className={badge.type === "success" ? "success-chip" : "trust-chip"}>
                  {badge.text}
                </span>
              ))}
            </div>
          </div>

          {/* Lead Form in Hero */}
          <div className="lg:col-span-5 mt-12 lg:mt-0" id="inspect-form">
            <div className="card-dark p-8">
              <h3 className="font-display text-2xl text-[#e2e2e2] uppercase mb-6 border-b-2 inline-block" style={{ borderColor: "#e94560", paddingBottom: "8px" }}>
                Request Inspection
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES STRIP */}
      <section className="border-b border-[#929097]">
        <div className="max-w-[1280px] mx-auto px-6 py-8 flex justify-center items-center gap-6 md:gap-12 flex-wrap">
          <span className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase">
            Certified. Accredited. Trusted.
          </span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6" id="services">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="section-heading text-center md:text-left mb-12">Our Roof Repair Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-display text-xl text-[#e2e2e2] uppercase mb-3">{s.title}</h3>
                <p className="text-[#c8c5cd] text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1a1a2e" }} id="why-us">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="section-heading text-center mb-4">Why Homeowners Trust Us</h2>
          <p className="text-[#c8c5cd] text-lg text-center mb-12 max-w-2xl mx-auto">
            We've earned the confidence of Colorado homeowners with over 14 years of proven results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((w, i) => (
              <div key={i} className="text-center">
                <div className="text-[#e94560] font-display text-5xl mb-4">{w.num}</div>
                <h3 className="font-display text-2xl text-[#e2e2e2] uppercase mb-3">{w.title}</h3>
                <p className="text-[#c8c5cd] text-base max-w-sm mx-auto">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6" id="reviews">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="section-heading text-center md:text-left mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="text-yellow-400 text-lg mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j}>{j < t.rating ? "★" : "☆"}</span>
                  ))}
                </div>
                <p className="text-[#c8c5cd] text-base italic mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="font-bold text-[#e2e2e2]">&mdash; {t.name}</div>
                <div className="text-[#c8c5cd] text-sm">{t.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-[#e2e2e2] uppercase mb-6">
            We Only Take On 20 Jobs Per Week
          </h2>
          <p className="text-[#c8c5cd] text-lg mb-8 max-w-xl mx-auto">
            Limited availability. Don't wait until your small leak becomes a major problem.
          </p>
          <a href="#inspect-form" className="btn-primary text-lg">Book Your Free Inspection</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" id="faq">
        <div className="max-w-[1280px] mx-auto max-w-3xl">
          <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-2">
            {faq.map((f, i) => (
              <div key={i} className={`faq-item card-dark ${activeFaq === i ? "active" : ""}`}>
                <button className="faq-btn" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  {f.q}
                </button>
                <div className="faq-answer">
                  <p className="text-[#c8c5cd] text-base">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
