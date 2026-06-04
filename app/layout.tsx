import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Best Roof Repair in Denver, CO | Denver Roof Repair Pros",
  description:
    "Professional roof repair in Denver, CO. Emergency roof repair available 24/7. Licensed roofers serving the Denver metro area including Aurora, Lakewood, Littleton. Call (720) 555-0199 for fast, reliable service.",
  keywords:
    "roof repair denver, roof repair denver co, emergency roof repair denver, hail damage repair denver, roof replacement denver, roof inspection denver, roofing contractor denver, aurora roof repair, lakewood roof repair, littleton roof repair",
  metadataBase: new URL("https://roofrepairindenver.com"),
  alternates: { canonical: "https://roofrepairindenver.com/" },
  openGraph: {
    title: "Best Roof Repair in Denver, CO | Denver Roof Repair Pros",
    description:
      "Professional roof repair in Denver, CO. Emergency roof repair available 24/7. Licensed roofers serving the Denver metro area.",
    url: "https://roofrepairindenver.com/",
    siteName: "Denver Roof Repair Pros",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Roof Repair in Denver, CO",
    description:
      "Professional roof repair and emergency service in Denver, CO. Free inspections. Call today.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Denver Roof Repair Pros",
  "description":
    "Professional roof repair, hail damage restoration, emergency roof repair, and insurance claim assistance in Denver, Colorado and surrounding metro areas.",
  "url": "https://roofrepairindenver.com",
  "telephone": "+17205550199",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "addressCountry": "US",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.7392,
    "longitude": -104.9903,
  },
  "areaServed": [
    { "@type": "City", "name": "Denver" },
    { "@type": "City", "name": "Aurora" },
    { "@type": "City", "name": "Lakewood" },
    { "@type": "City", "name": "Englewood" },
    { "@type": "City", "name": "Littleton" },
    { "@type": "City", "name": "Centennial" },
    { "@type": "City", "name": "Highlands Ranch" },
    { "@type": "City", "name": "Wheat Ridge" },
    { "@type": "City", "name": "Arvada" },
    { "@type": "City", "name": "Westminster" },
    { "@type": "City", "name": "Thornton" },
    { "@type": "City", "name": "Broomfield" },
    { "@type": "City", "name": "Parker" },
    { "@type": "City", "name": "Castle Rock" },
    { "@type": "City", "name": "Golden" },
    { "@type": "City", "name": "Boulder" },
  ],
  "serviceType": [
    "Residential Roof Repair",
    "Emergency Roof Repair",
    "Hail Damage Repair",
    "Roof Replacement",
    "Roof Inspection",
    "Insurance Claim Help",
  ],
  "openingHours": ["Mo-Su 00:00-23:59"],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Check, Insurance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
