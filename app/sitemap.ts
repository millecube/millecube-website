import { MetadataRoute } from "next";

const BASE = "https://millecube.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/services/media-advertisement`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/social-media`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/seo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/marketplace-management`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/website`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/content-creative`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/branding-strategy`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
