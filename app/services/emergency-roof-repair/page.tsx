import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Emergency Roof Repair Denver CO | 24/7 Storm Damage Service",
  description: "24/7 emergency roof repair in Denver, CO. Storm damage, fallen trees, sudden leaks — 60-min arrival. Serving Denver, Aurora, Lakewood. Call (720) 555-0199 now.",
  keywords: "emergency roof repair denver, 24/7 roof repair denver, storm damage roof repair denver, emergency roofing contractor denver",
  alternates: { canonical: "https://roofrepairdenver.com/services/emergency-roof-repair" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Emergency Roof Repair",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Denver Roof Repair Pros",
    "telephone": "+17205550199",
    "url": "https://roofrepairdenver.com/",
    "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
  },
  "areaServed": "Denver, CO",
  "description": "24/7 emergency roof repair in Denver. Storm damage, fallen trees, sudden leaks — 60-minute arrival.",
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function EmergencyRoofRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632889688072-6f9e3c982169?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e94560] mb-4">
              <Link href="/" className="hover:text-[#ff5a77]">Home</Link> / <Link href="/#services" className="hover:text-[#ff5a77]">Services</Link> / Emergency Roof Repair
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Emergency Roof Repair<br /><span className="text-[#e94560]">Denver, CO</span>
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              24/7 emergency response. Storm damage, fallen trees, sudden leaks — we aim to be on-site within 60 minutes anywhere in the Denver metro area.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">What Counts as an Emergency?</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p><strong className="text-[#e2e2e2]">Active leaking</strong> during a rain or snowstorm is the most common emergency call we receive in Denver. Water entering your home can destroy insulation, drywall, and electrical systems within hours.</p>
                <p><strong className="text-[#e2e2e2]">Fallen trees or branches</strong> after Denver's frequent windstorms can puncture roofs and create immediate structural hazards.</p>
                <p><strong className="text-[#e2e2e2]">Post-hail damage</strong> requires immediate tarping to prevent secondary water damage while insurance assessments are scheduled.</p>
                <p><strong className="text-[#e2e2e2]">Fire or ice dam damage</strong> from Denver's freeze-thaw cycles can compromise roof decking and needs urgent attention.</p>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">Our Emergency Response</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Call Answered 24/7", desc: "No answering service. You speak directly to a roofing specialist who can dispatch a crew immediately." },
                  { step: "2", title: "60-Min Arrival", desc: "We keep crews on standby across the metro area for true emergency response anywhere in Denver, Aurora, or Lakewood." },
                  { step: "3", title: "Temporary Protection", desc: "We install emergency tarps and seal active leaks to stop further damage before permanent repairs begin." },
                  { step: "4", title: "Full Repair", desc: "Once weather permits, we return for permanent repair or replacement with full documentation for insurance." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#e94560] text-white rounded-full flex items-center justify-center text-sm font-black shrink-0">{s.step}</div>
                    <div>
                      <h3 className="font-bold text-[#e2e2e2] uppercase text-sm mb-1">{s.title}</h3>
                      <p className="text-[#c8c5cd] text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Emergency? Call Now — 24/7</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Don't wait. Every minute of active leaking causes more damage.</p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Emergency Hotline</p>
                  <a href={PHONE_HREF} className="text-2xl font-bold text-[#e94560] hover:text-white transition-colors">{PHONE}</a>
                </div>
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Response Time</p>
                  <p className="text-lg text-[#e2e2e2]">60 minutes — Denver metro area</p>
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
