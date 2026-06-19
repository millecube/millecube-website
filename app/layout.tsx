import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakartaDisplay = Plus_Jakarta_Sans({
  weight: ["700", "800"],
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const jakartaBody = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency Malaysia | Meta Ads & Marketplace Management — Millecube",
  description:
    "Millecube is a technical-first digital marketing agency in Penang, Malaysia. We manage Meta Ads, Google Ads, Shopee, Lazada, and TikTok Shop — tracked to every ringgit, no contract.",
  keywords: [
    "digital marketing agency Malaysia",
    "meta ads agency Penang",
    "Facebook ads agency Malaysia",
    "marketplace management Malaysia",
    "Shopee Lazada management Penang",
    "Google ads agency Malaysia",
  ],
  openGraph: {
    title: "Millecube Digital — Strategy built on data. Results measured in revenue.",
    description:
      "Technical-first digital marketing agency from Penang. Meta Ads, Google Ads, Shopee, Lazada, TikTok Shop — no contract.",
    type: "website",
    locale: "en_MY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaDisplay.variable} ${jakartaBody.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
