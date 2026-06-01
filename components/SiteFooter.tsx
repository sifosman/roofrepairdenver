import Link from "next/link";

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";
const EMAIL = "info@roofrepairindenver.com";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0c0f0f] border-t-2 border-[#929097] py-20 px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="font-display text-4xl text-[#c6c4df] uppercase mb-4">Denver Roof Repair Pros</div>
          <p className="text-[#c8c5cd] text-base mb-6 max-w-md">
            Built to protect. We specialize in high-stakes structural repair and insurance claims in the Denver metro area.
          </p>
          <a
            href={PHONE_HREF}
            className="font-display text-3xl text-[#e94560] block mb-8 hover:text-white transition-colors no-underline"
          >
            {PHONE}
          </a>
        </div>
        <div>
          <h4 className="font-bold text-sm tracking-wider text-[#e2e2e2] uppercase mb-4 border-b border-[#47464c] pb-2">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/services/hail-damage-repair" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Hail Damage Repair</Link></li>
            <li><Link href="/services/roof-replacement" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Roof Replacement</Link></li>
            <li><Link href="/services/emergency-roof-repair" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Emergency Repair</Link></li>
            <li><Link href="/services/roof-inspection" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Free Inspection</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm tracking-wider text-[#e2e2e2] uppercase mb-4 border-b border-[#47464c] pb-2">
            Guides & Blog
          </h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/guides/hail-damage-denver" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Hail Damage Guide</Link></li>
            <li><Link href="/guides/insurance-claims-colorado" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Insurance Claims</Link></li>
            <li><Link href="/blog/denver-hail-damage-guide" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Blog</Link></li>
            <li><Link href="/areas-we-serve" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Service Areas</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm tracking-wider text-[#e2e2e2] uppercase mb-4 border-b border-[#47464c] pb-2">
            Resources
          </h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/materials/asphalt-shingles-denver" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Roofing Materials</Link></li>
            <li><Link href="/resources/denver-building-permits" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Building Permits</Link></li>
            <li><Link href="/resources/colorado-roofing-laws" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Colorado Roofing Laws</Link></li>
            <li><a href={PHONE_HREF} className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">📞 {PHONE}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-[#1e2020] text-center">
        <p className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase">
          &copy; {new Date().getFullYear()} Denver Roof Repair Pros. Built To Protect.
        </p>
      </div>
    </footer>
  );
}
