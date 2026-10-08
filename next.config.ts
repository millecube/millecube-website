import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  compress: true,
  experimental: {
    optimizePackageImports: ["framer-motion", "@phosphor-icons/react"],
  },
  async redirects() {
    // Legacy WordPress-site URLs still indexed in Google Search Console
    // (found in the 2026-09 GSC audit) — 301 them to their current
    // equivalents instead of letting them 404 and lose ranking equity.
    return [
      { source: "/tiktok-marketing", destination: "/services/marketplace-management", permanent: true },
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/content-creation", destination: "/services/content-creative", permanent: true },
      { source: "/facebook-instagram-marketing", destination: "/services/media-advertisement", permanent: true },
      { source: "/other-services", destination: "/services", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/category/uncategorized", destination: "/", permanent: true },
      // Found via GA4 (Sept 2026): real visits still landing on this dead
      // legacy slug (currently 404s) — some external link (old ad/bio/
      // backlink) still points here. Recover that traffic instead of
      // dropping it.
      { source: "/contact-us", destination: "/contact", permanent: true },
      // Found via GSC (Oct 2026): legacy WordPress careers page, still
      // indexed with real impressions, currently 404s. No careers page
      // exists on the new site — route to contact instead of dropping it.
      { source: "/careers", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
