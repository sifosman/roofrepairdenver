import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Service Areas | Denver Roof Repair Pros — Roof Repair in Denver Metro",
  description: "Roof repair throughout the Denver metro area. Denver, Aurora, Lakewood, Littleton, Arvada, Boulder, Westminster, Thornton & more. Call (720) 555-0199.",
  keywords: "roof repair denver metro, roof repair aurora, roof repair lakewood, roof repair littleton, roof repair arvada, roof repair boulder, roof repair westminster, roof repair thornton",
  alternates: { canonical: "https://roofrepairindenver.com/areas-we-serve" },
};

const areas = [
  { name: "Denver", href: "/areas/denver" },
  { name: "Aurora", href: "/areas/aurora" },
  { name: "Lakewood", href: "/areas/lakewood" },
  { name: "Littleton", href: "/areas/littleton" },
  { name: "Arvada", href: "/areas/arvada" },
  { name: "Boulder", href: "/areas/boulder" },
  { name: "Englewood", href: "/areas/denver" },
  { name: "Centennial", href: "/areas/denver" },
  { name: "Highlands Ranch", href: "/areas/denver" },
  { name: "Wheat Ridge", href: "/areas/denver" },
  { name: "Westminster", href: "/areas/denver" },
  { name: "Thornton", href: "/areas/denver" },
  { name: "Broomfield", href: "/areas/denver" },
  { name: "Parker", href: "/areas/denver" },
  { name: "Castle Rock", href: "/areas/denver" },
  { name: "Golden", href: "/areas/denver" },
];

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";

export default function AreasWeServePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative py-20 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.85)" }}></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tighter uppercase mb-6 text-[#e2e2e2]">
              Service Areas
            </h1>
            <p className="text-xl text-[#c8c5cd] max-w-2xl mx-auto mb-8 leading-relaxed">
              We provide roof repair throughout the Denver metro area. Click your area to learn more.
            </p>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading text-center mb-12">Communities We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="p-6 card-dark hover:border-[#e94560] transition-all text-center group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📍</div>
                  <span className="text-[#e2e2e2] font-bold text-sm uppercase tracking-wider">{area.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl mb-6 text-[#e2e2e2] uppercase">Need Roof Repair in Your Area?</h2>
            <p className="text-[#c8c5cd] mb-8">We cover all areas of the Denver metro. Call us now for fast service.</p>
            <a href={PHONE_HREF} className="btn-primary text-lg">Call Now: {PHONE}</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
