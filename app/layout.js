import { Geist_Mono, Mulish, Open_Sans } from "next/font/google";

import "./globals.css";

const mulish = Mulish({
  variable: "--font-heading",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Beam & Clover | Digital Vehicle Administration & IT Solutions",
  description:
    "Premier provider of digital vehicle registration systems, government fleet administration, and enterprise IT integration services in Nigeria. Trusted by government agencies for secure, scalable technology solutions.",
  keywords: [
    "vehicle administration Nigeria",
    "digital vehicle registration",
    "government IT solutions",
    "traffic data collection",
    "fleet management Nigeria",
    "enterprise IT integration",
    "smart transportation",
    "Abuja IT company",
  ],
  authors: [{ name: "Beam & Clover Technology Solutions Ltd" }],
  creator: "Beam & Clover Technology Solutions Ltd",
  publisher: "Beam & Clover Technology Solutions Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/B-C.png",
    shortcut: "/images/B-C.png",
    apple: "/images/B-C.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://beamandclover.com",
    siteName: "Beam & Clover",
    title: "Beam & Clover | Digital Vehicle Administration & IT Solutions",
    description:
      "Premier provider of digital vehicle registration systems, government fleet administration, and enterprise IT integration services in Nigeria.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Beam & Clover - Digital Vehicle Administration & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beam & Clover | Digital Vehicle Administration & IT Solutions",
    description:
      "Premier provider of digital vehicle registration systems, government fleet administration, and enterprise IT integration services in Nigeria.",
    images: ["/images/og-image.webp"],
  },
  alternates: {
    canonical: "https://beamandclover.com",
  },
};

// Structured Data - Organization & LocalBusiness Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://beamandclover.com/#organization",
      "name": "Beam & Clover Technology Solutions Ltd",
      "url": "https://beamandclover.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://beamandclover.com/images/B-C.png",
      },
      "description":
        "Technology-driven solutions provider specializing in digital vehicle administration, traffic data collection, enterprise IT integration, and logistics consulting services in Nigeria.",
      "email": "beamandclovertech@gmail.com",
      "telephone": "+234-703-421-8092",
      "address": {
        "@type": "PostalAddress",
        "streetAddress":
          "Suite DC10, Apo Spark-light Mall, Opp. Living Faith Church, Durumi",
        "addressLocality": "Abuja",
        "addressCountry": "NG",
      },
      "sameAs": [],
      "areaServed": {
        "@type": "Country",
        "name": "Nigeria",
      },
      "serviceType": [
        "Vehicle Administration Systems",
        "Traffic Survey Services",
        "IT Integration",
        "Digital Infrastructure Solutions",
        "Logistics Consulting",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://beamandclover.com/#localbusiness",
      "name": "Beam & Clover Technology Solutions Ltd",
      "image": "https://beamandclover.com/images/B-C.png",
      "url": "https://beamandclover.com",
      "telephone": "+234-703-421-8092",
      "email": "beamandclovertech@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress":
          "Suite DC10, Apo Spark-light Mall, Opp. Living Faith Church, Durumi",
        "addressLocality": "Abuja",
        "addressRegion": "FCT",
        "addressCountry": "NG",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 9.0192,
        "longitude": 7.4515,
      },
      "priceRange": "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://beamandclover.com/#website",
      "url": "https://beamandclover.com",
      "name": "Beam & Clover",
      "publisher": {
        "@id": "https://beamandclover.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${mulish.variable} ${openSans.variable} ${geistMono.variable}  antialiased selection:bg-[#F48244]/40 selection:text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
