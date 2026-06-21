import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServiceContent from "@/components/ServiceContent";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Social Media Marketing — Millecube Digital",
  description:
    "Social media management for Malaysian businesses. Meta, TikTok, LinkedIn, Xiaohongshu — content strategy, creative, and community management handled every month.",
};

export default function SocialMediaPage() {
  return (
    <main>
      <InnerHero
        bgImage="/hero-bg.png"
        label="SOCIAL MEDIA"
        title="A feed that works while you sleep."
        subtitle="We manage your brand's presence across Meta, TikTok, LinkedIn, and Xiaohongshu — consistent, on-brand, and strategically directed every month."
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
        featuresBody="Consistent, strategic content across every channel your audience uses — planned a month ahead, designed to your brand, and tracked to real business outcomes. Not random posts. A managed presence."
        features={[
          {
            name: "Content strategy & calendar",
            desc: "Monthly editorial calendar planned around your promotions, product launches, and seasonal moments — approved before anything is posted.",
          },
          {
            name: "Copywriting & caption writing",
            desc: "Platform-native copy — Instagram captions, TikTok hooks, LinkedIn thought leadership, and Xiaohongshu review-style posts.",
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
