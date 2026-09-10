import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
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
    ];
  },
};

export default nextConfig;
