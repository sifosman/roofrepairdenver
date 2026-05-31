import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Denver Roof Repair Pros | Roof Repair in Denver",
  description: "Contact Denver Roof Repair Pros for roof repair in Denver, CO. Call (720) 555-0199 or fill out our form. 24/7 emergency service available.",
  keywords: "contact denver roof repair, denver roofing contact, roof repair quote denver",
  alternates: { canonical: "https://roofrepairdenver.com/contact" },
};

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";
const EMAIL = "info@roofrepairdenver.com";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Contact Us
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mb-8 leading-relaxed">
              Get in touch for fast, reliable roof repair. We're available 24/7 for emergencies.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Phone (24/7)</p>
                    <a href={PHONE_HREF} className="text-xl font-bold text-[#e94560] hover:text-white transition-colors">{PHONE}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-xl font-bold text-[#e94560] hover:text-white transition-colors">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Service Area</p>
                    <p className="text-xl font-bold text-[#e2e2e2]">Denver Metro Area</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🕐</div>
                  <div>
                    <p className="text-[#c8c5cd] text-sm font-semibold uppercase mb-1">Business Hours</p>
                    <p className="text-[#e2e2e2]">Mon–Sat: 7am–7pm<br />🚨 24/7 Emergency Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-dark p-8">
              <h3 className="font-display text-2xl text-[#e2e2e2] uppercase mb-6">Request a Callback</h3>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl mb-6 text-[#e2e2e2] uppercase">Emergency? We're Here 24/7</h2>
            <p className="text-[#c8c5cd] mb-8">Don't wait — call us now for immediate roof repair assistance in Denver.</p>
            <a href={PHONE_HREF} className="btn-primary text-lg">Call Now: {PHONE}</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
