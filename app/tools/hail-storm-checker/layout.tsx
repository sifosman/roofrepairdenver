import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denver Hail Damage Risk Checker | Free Storm Tool",
  description:
    "Check if your Denver neighborhood was hit by recent hailstorms. See your insurance claim deadline and damage risk in seconds.",
  keywords:
    "denver hail damage checker, hail storm risk denver, roof hail damage map, colorado hail storm 2026",
  alternates: { canonical: "https://roofrepairindenver.com/tools/hail-storm-checker" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
