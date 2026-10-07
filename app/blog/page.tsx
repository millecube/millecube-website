import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and data-backed resources on digital marketing in Malaysia — Meta Ads, Google Ads, SEO, social media management, and marketplace growth, from Millecube Digital.",
  keywords: [
    "digital marketing blog Malaysia",
    "digital marketing agency Malaysia guide",
    "Meta Ads Malaysia guide",
    "SEO Malaysia guide",
  ],
  alternates: { canonical: "https://millecube.com/blog" },
  openGraph: {
    title: "Blog — Millecube Digital",
    description:
      "Guides and data-backed resources on digital marketing in Malaysia, from Millecube Digital.",
    url: "https://millecube.com/blog",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

export default function BlogIndexPage() {
  return (
    <main>
      <BlogIndex />
      <CtaStrip />
    </main>
  );
}
