import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About Denver Roof Repair Pros | Trusted Roof Repair in Denver",
  description: "Learn about Denver Roof Repair Pros. 14+ years protecting Colorado homes. Licensed, insured, and committed to quality. Serving Denver metro area.",
  keywords: "about denver roof repair pros, denver roofing company, denver roofing contractor about us",
  alternates: { canonical: "https://roofrepairindenver.com/about" },
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              About Denver Roof Repair Pros
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Your trusted roof repair experts serving Denver and the surrounding areas since 2010.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">Trusted Roof Repair Experts in Denver</h2>
              <div className="space-y-4 text-[#c8c5cd] leading-relaxed">
                <p>
                  For over 14 years, Denver Roof Repair Pros has been the go-to choice for homeowners across the Denver metro area who need fast, reliable roof repair. We've built our reputation on quality workmanship, honest pricing, and exceptional customer service.
                </p>
                <p>
                  We understand that roof problems don't wait for business hours. That's why we offer 24/7 emergency service — because we know that a leaking roof at 2 AM can't wait until morning.
                </p>
                <p>
                  Our team of licensed and insured technicians uses the latest equipment and techniques to get the job done right the first time. From simple leak repairs to complex insurance claims, we handle it all with professionalism and care.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { num: "14+", label: "Years Experience" },
                  { num: "5,000+", label: "Jobs Completed" },
                  { num: "4.9★", label: "Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 card-dark">
                    <div className="font-display text-3xl text-[#e94560]">{stat.num}</div>
                    <div className="text-[#c8c5cd] text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-6">Why Denver Trusts Us</h2>
              <div className="space-y-6">
                {[
                  { title: "Licensed & Insured", desc: "Full Colorado state licensing and comprehensive insurance coverage for your protection." },
                  { title: "A+ BBB Rating", desc: "Our reputation is built on doing the right thing every time — verified by the Better Business Bureau." },
                  { title: "24/7 Emergency Service", desc: "Real emergency response, not just an answering service. A roofing specialist answers every call." },
                  { title: "Insurance Experts", desc: "500+ successful insurance claims filed. We know what Denver insurance companies need to see." },
                  { title: "1-Year Labor Warranty", desc: "Every repair and replacement is backed by our comprehensive labor warranty." },
                  { title: "Local & Committed", desc: "We're part of this community. We're not storm chasers — we're here for the long haul." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#e94560] rounded-full flex items-center justify-center text-white text-sm font-black shrink-0">✓</div>
                    <div>
                      <h3 className="font-bold text-[#e2e2e2] uppercase text-sm mb-1">{item.title}</h3>
                      <p className="text-[#c8c5cd] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-center mb-3 text-[#e2e2e2] uppercase">Ready to Experience the Difference?</h2>
            <p className="text-center text-[#c8c5cd] mb-10">Call us today for fast, professional roof repair in Denver.</p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Phone</p>
                  <a href={PHONE_HREF} className="text-2xl font-bold text-[#e94560] hover:text-white transition-colors">{PHONE}</a>
                </div>
                <div>
                  <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Hours</p>
                  <p className="text-lg text-[#e2e2e2]">24/7 — Emergency service available</p>
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
