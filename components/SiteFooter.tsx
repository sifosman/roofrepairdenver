import Link from "next/link";

const PHONE = "(720) 555-0199";
const PHONE_HREF = "tel:+17205550199";
const EMAIL = "info@roofrepairdenver.com";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0c0f0f] border-t-2 border-[#929097] py-20 px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-2">
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
            Links
          </h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Home</Link></li>
            <li><Link href="/#services" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Services</Link></li>
            <li><Link href="/areas-we-serve" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Service Areas</Link></li>
            <li><Link href="/blog/denver-hail-damage-guide" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm tracking-wider text-[#e2e2e2] uppercase mb-4 border-b border-[#47464c] pb-2">
            Emergency
          </h4>
          <ul className="flex flex-col gap-3">
            <li><a href={PHONE_HREF} className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">📞 {PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">📧 {EMAIL}</a></li>
            <li className="text-[#c8c5cd] text-base">📍 Denver, CO</li>
            <li className="text-[#c8c5cd] text-base">🚨 24/7 Emergency Service</li>
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
