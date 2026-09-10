import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServiceContent from "@/components/ServiceContent";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Social Media Management Agency Malaysia",
  description:
    "Social media management for Malaysian businesses on Facebook, Instagram, TikTok, LinkedIn, and Xiaohongshu — content strategy, creative, and community management on a monthly retainer. Serving businesses across Malaysia, including Penang, Petaling Jaya, Kuala Lumpur, and Johor Bahru.",
  keywords: [
    "social media management Malaysia",
    "social media management agency Malaysia",
    "social media marketing Malaysia",
    "social media management Penang",
    "social media marketing Penang",
    "social media agency Penang",
    "Facebook page management Malaysia",
    "Facebook marketing agency Malaysia",
    "Instagram marketing Malaysia",
    "TikTok content Malaysia",
  ],
  alternates: { canonical: "https://millecube.com/services/social-media" },
  openGraph: {
    title: "Social Media Management Agency Malaysia — Millecube",
    description: "Content strategy, creative, and community management for Malaysian brands on Facebook, Instagram, TikTok, LinkedIn, and Xiaohongshu.",
    url: "https://millecube.com/services/social-media",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

export default function SocialMediaPage() {
  return (
    <main>
      <InnerHero
        bgImage="/hero-bg.webp"
        label="SOCIAL MEDIA MANAGEMENT MALAYSIA"
        title="A feed that works while you sleep."
        subtitle="A social media management agency for Malaysian businesses on Facebook, Instagram, TikTok, LinkedIn, and Xiaohongshu — serving brands across Malaysia, including Penang, Petaling Jaya, Kuala Lumpur, and Johor Bahru, with consistent, on-brand, strategically directed content every month."
      />
      <ServiceContent
        slug="social-media"
        stats={[
          { value: "4×", label: "Avg organic reach growth" },
          { value: "4", label: "Platforms we manage" },
          { value: "30", label: "Day content calendar" },
        ]}
        featuresLabel="WHAT WE DO"
        featuresHeadline="Social media that builds equity, not just posts."
        featuresBody="As a social media management agency for Malaysian SMEs, we run consistent, strategic content across Facebook, Instagram, TikTok, LinkedIn, and Xiaohongshu — planned a month ahead, designed to your brand, and tracked to real business outcomes for clients across Malaysia, including Penang, Petaling Jaya, Kuala Lumpur, and Johor Bahru. Not random posts. A managed presence."
        features={[
          {
            name: "Content strategy & calendar",
            desc: "Monthly editorial calendar for Facebook and Instagram planned around your promotions, product launches, and seasonal moments — approved before anything is posted.",
          },
          {
            name: "Copywriting & caption writing",
            desc: "Platform-native copy — Facebook and Instagram captions, TikTok hooks, LinkedIn thought leadership, and Xiaohongshu review-style posts.",
          },
          {
            name: "Creative direction",
            desc: "Visual brief, moodboard, and design templates that keep your feed consistent and recognisable across all platforms.",
          },
          {
            name: "Community management",
            desc: "DMs, comments, and story replies handled so your audience gets responses — not silence.",
          },
          {
            name: "Analytics & reporting",
            desc: "Monthly breakdown of reach, engagement, follower growth, and content performance with next-month strategy adjustments.",
          },
          {
            name: "Xiaohongshu (RED) management",
            desc: "RED platform content strategy for brands targeting the Chinese-speaking demographic in Malaysia and regionally.",
          },
        ]}
        process={[
          {
            num: "01",
            title: "Platform audit",
            body: "We audit your existing profiles, audience data, and content history to understand what's working and what's been missing.",
          },
          {
            num: "02",
            title: "Brand tone & content pillars",
            body: "We define your voice, visual direction, and content mix across all managed platforms before Month 1 begins.",
          },
          {
            num: "03",
            title: "Monthly content calendar",
            body: "A 30-day calendar submitted for your approval before the first post goes live. No surprises.",
          },
          {
            num: "04",
            title: "Creation & scheduling",
            body: "Design, copy, and scheduling handled. You review drafts; we post on time, every time.",
          },
          {
            num: "05",
            title: "Review & optimise",
            body: "Monthly performance review with content adjustments based on what's driving reach, saves, and engagement.",
          },
        ]}
        deliverablesLabel="WHAT'S INCLUDED"
        deliverablesHeadline="A full social media operation, handled."
        deliverablesBody="Consistent output, on-brand design, and a strategy that evolves as your brand grows — not a template recycled from another client."
        deliverables={[
          "30-day content calendar",
          "Caption copywriting",
          "Graphic design (static + reel covers)",
          "Post scheduling",
          "Community management",
          "Monthly analytics report",
          "Platform profile optimisation",
        ]}
        ctaText="Manage my social"
      />
      <CtaStrip />
    </main>
  );
}
