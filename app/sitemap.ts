import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://roofrepairdenver.com";
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services/residential-roof-repair`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/emergency-roof-repair`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/hail-damage-repair`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/roof-replacement`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/roof-inspection`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/insurance-claim-help`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/areas/denver`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/areas/aurora`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/areas/lakewood`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/areas/littleton`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/areas/arvada`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/areas/boulder`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/areas-we-serve`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/denver-hail-damage-guide`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
