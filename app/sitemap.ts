import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://roofrepairindenver.com";
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
    { url: `${base}/blog/denver-hail-season-2024-2025`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/class-4-shingles-denver`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/roofing-warranties-colorado`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/metal-vs-asphalt-denver`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/winter-roof-repair-denver`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/hoa-roofing-rules-denver`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/uv-elevation-roof-damage-denver`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/ice-dams-denver-roofs`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/denver-wind-damage-roofs`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides/hail-damage-denver`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/insurance-claims-colorado`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/roof-replacement-denver`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/neighborhood-roofing-denver`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/areas/denver/park-hill`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/areas/denver/stapleton`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/areas/denver/wash-park`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/areas/denver/highlands`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/areas/denver/cherry-creek`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/areas/denver/capitol-hill`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/areas/aurora/southshore`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/areas/aurora/tallyns-reach`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/areas/lakewood/belmar`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/areas/littleton/ken-caryl`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/areas/arvada/olde-town`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/areas/boulder/gunbarrel`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/materials/asphalt-shingles-denver`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/materials/metal-roofing-denver`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/materials/tile-roofing-denver`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/resources/denver-building-permits`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources/colorado-roofing-laws`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
