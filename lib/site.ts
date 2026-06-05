export const SITE = {
  name: "Denver Roof Repair Pros",
  phone: {
    display: "(720) 555-0199",
    href: "tel:+17205550199",
    raw: "+17205550199",
  },
  url: "https://roofrepairindenver.com",
  email: "info@roofrepairindenver.com",
  address: {
    locality: "Denver",
    region: "CO",
    country: "US",
  },
} as const;

export function canonical(path: string): string {
  if (path === "/") return `${SITE.url}/`;
  return `${SITE.url}${path}`;
}
