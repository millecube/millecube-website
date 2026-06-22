import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";
import ConsentBanner from "@/components/ConsentBanner";

const jakartaDisplay = Plus_Jakarta_Sans({
  weight: ["700", "800"],
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const jakartaBody = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Millecube Digital",
    default: "Digital Marketing Agency Malaysia — Millecube",
  },
  description:
    "Millecube is a technical-first digital marketing agency in Penang, Malaysia. We manage Meta Ads, Google Ads, Shopee, Lazada, and TikTok Shop — tracked to every ringgit, no contract.",
  openGraph: {
    title: "Millecube Digital — Strategy built on data. Results measured in revenue.",
    description:
      "Technical-first digital marketing agency from Penang. Meta Ads, Google Ads, Shopee, Lazada, TikTok Shop — no contract.",
    type: "website",
    locale: "en_MY",
    siteName: "Millecube Digital",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
  twitter: {
    card: "summary",
    site: "@millecubedigital",
    images: ["/logo-3d.png"],
  },
  metadataBase: new URL("https://millecube.com"),
};

/* ── JSON-LD structured data ─────────────────────────────────────────────── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://millecube.com/#organization",
  name: "Millecube Digital",
  legalName: "Cadoo Venture Sdn. Bhd.",
  url: "https://millecube.com",
  logo: "https://millecube.com/logo-ori.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+60164963875",
    email: "hello@millecube.com",
    availableLanguage: ["English", "Malay"],
  },
  sameAs: [
    "https://www.facebook.com/millecubedigital",
    "https://www.instagram.com/millecubedigital",
    "https://www.linkedin.com/company/millecube",
  ],
};

const localBizSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://millecube.com/#local",
  name: "Millecube Digital",
  description:
    "Technical-first digital marketing agency in Penang, Malaysia. Meta Ads, Google Ads, Shopee, Lazada, TikTok Shop management — no lock-in contract.",
  url: "https://millecube.com",
  telephone: "+60164963875",
  email: "hello@millecube.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2-5-9, Gat Lebuh Macallum",
    addressLocality: "George Town",
    addressRegion: "Pulau Pinang",
    postalCode: "10300",
    addressCountry: "MY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 5.4164,
    longitude: 100.3357,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "RM 2,000 - RM 10,000",
  foundingDate: "2024",
  areaServed: "Malaysia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html
      lang="en"
      className={`${jakartaDisplay.variable} ${jakartaBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {/* GTM loads only after PDPA consent is granted */}
        <GoogleTagManager gtmId={gtmId} />

        <Navbar />
        {children}
        <Footer />

        {/* PDPA consent banner — must appear after body opens */}
        <ConsentBanner />
      </body>
    </html>
  );
}
