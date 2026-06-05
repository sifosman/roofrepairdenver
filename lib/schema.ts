import { SITE } from "./site";

export function localRoofingSchema(areaName: string, addressLocality: string = SITE.address.locality) {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": SITE.name,
    "telephone": SITE.phone.raw,
    "url": SITE.url,
    "areaServed": { "@type": "Place", "name": areaName },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": addressLocality,
      "addressRegion": SITE.address.region,
      "addressCountry": SITE.address.country,
    },
  };
}
