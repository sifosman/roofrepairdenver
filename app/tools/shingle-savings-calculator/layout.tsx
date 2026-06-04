import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 4 Shingle Savings Calculator Denver | Insurance Discount",
  description:
    "Calculate how much Colorado homeowners save on insurance premiums by upgrading to impact-resistant Class 4 shingles. Free tool.",
  keywords:
    "class 4 shingle insurance discount colorado, impact resistant roof roi, denver roofing insurance savings",
  alternates: { canonical: "https://roofrepairindenver.com/tools/shingle-savings-calculator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
