import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Repair Cost Calculator Denver | Free Estimate Tool",
  description:
    "Get an instant roof repair or replacement cost estimate for your Denver home. No email required. Based on real Denver metro pricing data.",
  keywords:
    "roof repair cost denver, roof replacement cost denver, denver roofing calculator, how much to replace roof denver",
  alternates: { canonical: "https://roofrepairindenver.com/tools/roof-cost-calculator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
