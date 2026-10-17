import type { Metadata } from "next";
import Image from "next/image";
import InnerHero from "@/components/InnerHero";
import BlogContent, { BlogBlock, BlogFaq } from "@/components/BlogContent";
import CtaStrip from "@/components/CtaStrip";
import { Clock } from "@phosphor-icons/react/dist/ssr";

const PUBLISHED = "2026-10-17";
const PUBLISHED_DISPLAY = "17 Oct 2026";
const READ_TIME = "10 min read";
const AUTHOR_NAME = "Zack Kho";
const AUTHOR_ROLE = "Head of Marketing";

export const metadata: Metadata = {
  title: "Facebook Ads for Malaysian SMEs: A 2026 Starter Guide",
  description:
    "A practical Facebook ads Malaysia guide for SMEs: boost vs Ads Manager, objectives, MYR budgets, WhatsApp lead tracking and the 2026 rules to know.",
  keywords: [
    "facebook ads malaysia",
    "facebook ads",
    "meta ads malaysia",
    "facebook ads for small business malaysia",
    "instagram ads malaysia",
  ],
  alternates: { canonical: "https://millecube.com/blog/facebook-ads-malaysia-sme-guide" },
  openGraph: {
    title: "Facebook Ads for Malaysian SMEs: A 2026 Starter Guide | Millecube",
    description:
      "Move from boosting posts to real campaigns: objectives, MYR budgets, the learning phase, WhatsApp lead tracking and the 2026 rules to know.",
    url: "https://millecube.com/blog/facebook-ads-malaysia-sme-guide",
    type: "article",
    images: [{ url: "/blog-facebook-ads-malaysia-hero.png", width: 1672, height: 941, alt: "Facebook Ads for Malaysian SMEs: A 2026 Starter Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Ads for Malaysian SMEs: A 2026 Starter Guide",
    description:
      "Move from boosting posts to real campaigns: objectives, MYR budgets, the learning phase, WhatsApp lead tracking and the 2026 rules to know.",
    images: ["/blog-facebook-ads-malaysia-hero.png"],
  },
};

const faqs: BlogFaq[] = [
  {
    q: "Is boosting a post enough?",
    a: "For small jobs like promoting an event post, boosting can be fine. For leads or sales you want to track, it's limited: fewer objectives, less control over audience and placements, and no proper testing. Ads Manager gives you the tools to see what each ringgit actually produced.",
  },
  {
    q: "How much should I spend to start?",
    a: "There's no universal number. Start with an amount you can sustain for a few weeks without pressure, and concentrate it in one or two ad sets so Meta can get through the learning phase. Check Billing in Ads Manager for payment options and any minimums. If you want help, Millecube's management starts from RM 2,000 per month per channel, with ad spend billed separately.",
  },
  {
    q: "Can I run ads that open WhatsApp?",
    a: "Yes. Click-to-WhatsApp ads open a chat with your business number when someone taps the ad. You'll need your WhatsApp Business number connected to your Facebook Page. Use a different pre-filled greeting per campaign and a simple lead sheet so you know which ad each chat came from.",
  },
  {
    q: "How long until I see results?",
    a: "You'll usually see delivery data within days. Judging performance takes longer, because each ad set needs time and enough events to get through the learning phase. Plan on a few weeks of steady running before making big calls, and longer if your sales cycle is long, as with renovation or property.",
  },
  {
    q: "Do I need a website?",
    a: "Not to start. Click-to-WhatsApp ads, Messenger ads and Instant Form lead ads all work without a website. A website with the Meta Pixel and Conversions API becomes important when you want to sell online or track actions on your own pages.",
  },
];

const blocks: BlogBlock[] = [
  {
    type: "quickAnswer",
    paragraphs: [
      "Facebook Ads are paid ads you build in Meta Ads Manager. One campaign can run across Facebook, Instagram and Messenger, or open a WhatsApp chat, and you control the goal, audience, budget and how results are measured. For Malaysian SMEs, they're one of the most direct ways to reach local customers in Penang, KL, JB or anywhere else.",
      "The most important rule: **track results before you scale spend.** If you can't tell which ringgit produced which enquiry or sale, spending more just makes the guesswork more expensive.",
      "Below: boosting vs real campaigns, picking an objective, budgeting in MYR, tracking WhatsApp leads, and the rules worth knowing in 2026.",
    ],
  },
  {
    type: "p",
    text:
      "Most SME owners have pressed the Boost button at least once. Some got a few messages. Most got likes from people who never bought anything. That isn't proof that Facebook Ads don't work. It's a sign that **boosting skips most of the decisions that make ads work.**",
  },

  { type: "h2", text: "Boosting a post is not a campaign" },
  {
    type: "p",
    text:
      "Boosting pays to show an existing post to more people. It's quick and fine for small jobs, like an event announcement. But it only gives you **a slice of what Ads Manager can do.**",
  },
  {
    type: "table",
    headers: ["Area", "Boost post", "Ads Manager"],
    rows: [
      ["Objective", "A short list of simplified goals", "**All six objectives**, including Leads and Sales"],
      ["Audience & placements", "Basic options", "**Full control** over location, language, age and placements"],
      ["Testing", "One post at a time", "**Several ads per ad set**, plus A/B tests"],
      ["Tracking", "Mostly likes and reach", "**Optimise for real results**: leads, chats, purchases"],
      ["Best for", "Quick event or promo posts", "**Campaigns you need to measure in ringgit**"],
    ],
  },
  {
    type: "p",
    text:
      "Boosting isn't wrong. It's just a different tool. If you want **enquiries or sales you can trace back to spend**, Ads Manager is where that happens.",
  },

  { type: "h2", text: "Why Meta still matters in Malaysia" },
  {
    type: "p",
    text:
      "Meta's apps are still where most Malaysians can be reached with paid ads. DataReportal's Digital 2026 report for Malaysia shows the scale:",
  },
  {
    type: "stats",
    items: [
      { value: "23.0M", label: "Facebook ad reach (63.7% of population)" },
      { value: "86.4%", label: "of adults 18+ reachable with Facebook ads" },
      { value: "16.1M", label: "Instagram ad reach (44.6% of population)" },
      { value: "30.7M", label: "social media user identities (85.0% of population)" },
    ],
    sourceLabel: "DataReportal, Digital 2026: Malaysia",
    sourceHref: "https://datareportal.com/reports/digital-2026-malaysia",
  },
  {
    type: "p",
    text:
      "**Two caveats.** Ad reach comes from Meta's advertising tools, so read it as **the audience you can target, not a headcount**. And social media identities aren't unique people: one person with both a Facebook and an Instagram account can count twice.",
  },
  {
    type: "p",
    text:
      "Local data points the same way. The Department of Statistics Malaysia found that **98.0% of individuals used the internet** in 2024 ([DOSM ICT Use and Access Survey 2024](https://www.dosm.gov.my/portal-main/release-content/ict-use-and-access-by-individuals-and-households-survey-report-2024)). MSMEs contributed **39.7% of GDP in 2025**, or RM689.8 billion, and employed 8.09 million people, 48.7% of total employment ([DOSM MSMEs Performance 2025](https://www.dosm.gov.my/portal-main/release-content/micro-small--medium-enterprises-msmes-performance-2025)). **Your customers are online. So are your competitors.**",
  },

  { type: "h2", text: "Pick the objective that matches your goal" },
  {
    type: "p",
    text:
      "The first choice in Ads Manager is the objective. Meta's current simplified set has six: Awareness, Traffic, Engagement, Leads, App promotion and Sales. It matters because **Meta delivers toward whatever you ask for.** Ask for clicks and you get clickers. Ask for leads and it looks for people likely to enquire.",
  },
  {
    type: "table",
    headers: ["Objective", "Typical SME goal"],
    rows: [
      ["Awareness", "A new café in George Town wants nearby people to know it exists. Good for recall, weak for measuring enquiries."],
      ["Traffic", "Send people to a menu, property listing or product page. Clicks are not customers, so watch what happens after."],
      ["Engagement", "Start WhatsApp or Messenger conversations, or get video views. A common choice for clinics and contractors who close deals in chat."],
      ["Leads", "Trial-class sign-ups for a tuition centre or quote requests for a renovation firm, through an Instant Form or a chat."],
      ["App promotion", "Only relevant if you have your own app. Most SMEs can skip it."],
      ["Sales", "Online purchases tracked with the Meta Pixel and Conversions API. Best for sellers with a working checkout."],
    ],
  },
  {
    type: "p",
    text:
      "The destination options inside each objective change from time to time, so go with what Ads Manager shows you when you build. For most service businesses, the real choice is **a messaging destination or an Instant Form.**",
  },
  { type: "h3", text: "A note on WhatsApp ads" },
  {
    type: "p",
    text:
      "Click-to-WhatsApp ads open a chat with your business number. They suit Malaysian buyers who like to ask a quick question before committing. **The catch is speed.** Thirty chats a day are wasted if the replies come the next afternoon.",
  },
  {
    type: "ctaBanner",
    text: "Boosting but not sure what's actually bringing customers? Get a free Ad Account Quick Check: we look inside your account and show you exactly where your budget is leaking.",
    buttonText: "Claim my free check",
    href: "https://wa.me/60164963875",
  },

  { type: "h2", text: "How to think about budget in MYR" },
  {
    type: "p",
    text:
      "We can't give you an honest \"right\" budget. Costs depend on your industry, offer, creative, season and how crowded the auction is that week. Be wary of any \"industry average\" cost per lead for Malaysia that **doesn't show its source.**",
  },
  {
    type: "p",
    text:
      "What you can plan around is the learning phase. After you launch or significantly edit an ad set, Meta needs time to work out who to show it to. Meta's guidance is **roughly 50 optimisation events within 7 days** for an ad set to exit learning. Check Meta's Help Center for the current threshold. An optimisation event is whatever you asked for: a lead, a conversation, a purchase.",
  },
  {
    type: "p",
    text:
      "That's why **splitting a small budget across many ad sets stalls learning.** Each ad set learns separately. Spread thin, none of them gets enough results, and Ads Manager may flag them as \"Learning limited\".",
  },
  { type: "h3", text: "A worked example (illustration only)" },
  {
    type: "p",
    text:
      "These are hypothetical round numbers to show the logic. They are not benchmarks, and your real costs could be much higher or lower.",
  },
  {
    type: "list",
    items: [
      "**Budget:** RM 1,500 a month, roughly RM 50 a day.",
      "**Assumed cost per WhatsApp conversation:** RM 10, purely for illustration.",
      "**One ad set at RM 50 a day:** about 5 conversations a day, or 35 a week. Short of 50, but a real signal for Meta to work with.",
      "**Five ad sets at RM 10 a day each:** about 1 conversation a day each, or 7 a week. None of them gets close.",
    ],
  },
  {
    type: "p",
    text:
      "The lesson isn't \"spend more\". It's **\"concentrate what you spend\"**. Run fewer ad sets, put a few ads inside each, and optimise for an event that happens often enough to learn from. **A conversation started happens far more often than a closed sale.**",
  },
  {
    type: "p",
    text:
      "For payment methods, charges, taxes and any minimums, check Billing & payments in Ads Manager. Those details change, and Ads Manager is the source of truth.",
  },

  { type: "h2", text: "Set up tracking before you scale" },
  {
    type: "p",
    text:
      "Tracking decides **whether you ever know what worked.** You need two pieces on your website, plus a simple manual layer for chats.",
  },
  {
    type: "p",
    text:
      "The [Meta Pixel](https://developers.facebook.com/docs/meta-pixel) is, in Meta's words, \"a snippet of JavaScript code that allows you to track visitor activity on your website.\" The [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api) sends web events from your server instead, and Meta processes them like Pixel events for measurement and optimisation. **Using both gives Meta a fuller picture** when the browser-side Pixel misses events.",
  },
  {
    type: "callout",
    title: "Tracking WhatsApp leads that close offline",
    text:
      "Ads Manager counts chats started. It can't see which chat became a paying patient or a signed renovation job. Close the gap with three habits. **UTM links:** tag every website link in your ads so Google Analytics shows which campaign sent the visit. **A lead-source question:** use a different pre-filled greeting per campaign, and have whoever replies ask \"How did you hear about us?\" when it's unclear. **A tracking sheet:** one row per lead, with date, campaign, enquiry type, and whether it closed and for how much. After a month, you'll know your cost per customer, not just your cost per chat.",
  },
  {
    type: "p",
    text:
      "A shared Google Sheet updated daily works for most small teams. **The habit matters more than the tool.**",
  },
  {
    type: "ctaBanner",
    text: "Is your Pixel firing? Are WhatsApp leads being counted? Our free Ad Account Quick Check finds tracking gaps in one session, before you spend another ringgit.",
    buttonText: "Check my account free",
    href: "https://wa.me/60164963875",
  },

  { type: "h2", text: "Creative and targeting for Malaysian audiences" },
  {
    type: "p",
    text:
      "**Creative now does most of the heavy lifting.** Meta's delivery system has become better at finding buyers on its own, so what you show matters more than how narrowly you target.",
  },
  { type: "h3", text: "Plan for the language mix" },
  {
    type: "p",
    text:
      "Don't cram English, Malay and Chinese into one ad. **Make separate versions of the same offer** and let each one read naturally. Ads Manager lets you target by language, and a native speaker should check every version. Stiff machine translation is easy to spot.",
  },
  { type: "h3", text: "Shoot vertical, for mobile" },
  {
    type: "p",
    text:
      "Most people will see your ad on a phone, often in Reels or Stories. Shoot **vertical 9:16 video**, put **the hook in the first few seconds**, and **add captions** for people scrolling with the sound off. Real footage of your outlet, team or finished work usually feels more trustworthy than polished stock images.",
  },
  { type: "h3", text: "Go broader than feels comfortable" },
  {
    type: "p",
    text:
      "Stacking interests like \"parents\" plus \"education\" plus a tight age band often leaves an audience too small to learn from. For most local SMEs, start with a sensible radius around your business, a broad age range, and creative that makes clear who the offer is for. **Let the ad do the filtering.**",
  },
  {
    type: "p",
    text:
      "Ads also work better when your page looks active. If you need help with the organic side, see how we approach [social media management](/services/social-media).",
  },

  { type: "h2", text: "Rules to know before you run ads" },
  {
    type: "p",
    text:
      "None of these should stop a normal SME from advertising. Ignoring them can get **ads rejected or accounts restricted.**",
  },
  {
    type: "list",
    items: [
      "**Meta's Advertising Standards.** Every ad is reviewed against Meta's own rules. Read the sections for your industry, especially in health, beauty, finance or property, where restrictions tend to be stricter. Avoid claims you can't back up.",
      "**Social media licensing and the Online Safety Act.** From 1 January 2026, platforms with 8 million or more Malaysian users, including Facebook, Instagram, WhatsApp, TikTok, YouTube and Telegram, are deemed licensed under the Communications and Multimedia Act 1998 ([Bernama, 15 Dec 2025](https://www.bernama.com/en/general/news.php?id=2502828)). The Online Safety Act 2025 has also been in force since 1 January 2026 and places duties on those licensed platforms ([Bernama](https://bernama.com/en/news.php?id=2507830)). **What it means for you:** the duties sit with the platforms, not with SME advertisers. Still, keep your ads accurate and lawful, because platforms have every reason to take enforcement seriously.",
      "**Political and social-issue ads.** Ads about elections, politics or social issues need Meta authorisation and a \"Paid for by\" disclaimer ([Meta policy](https://transparency.meta.com/en-us/policies/ad-standards/SIEP-advertising/SIEP)). Most SMEs won't touch this, but a campaign tied to a public cause or debate can be classified this way, so check before you run it.",
    ],
  },

  { type: "h2", text: "Questions to ask a Meta Ads agency or freelancer" },
  {
    type: "p",
    text:
      "If you'd rather hand this off, ask these before signing. They apply to us too. For a wider checklist, read our guide to [what a digital marketing agency in Malaysia does](/blog/digital-marketing-agency-malaysia-guide).",
  },
  {
    type: "questions",
    items: [
      {
        q: "Who owns the ad account?",
        good: "You do. The ad account sits in your own Meta business portfolio, and the agency gets partner access you can remove anytime.",
        bad: "The agency runs your ads from its own account, so your history and data leave with them.",
      },
      {
        q: "Who owns the Pixel and the data?",
        good: "Your business does. The Pixel and Conversions API setup stay with you if you part ways.",
        bad: "The Pixel was created under the agency's account and \"can't be transferred\".",
      },
      {
        q: "What will the monthly report measure?",
        good: "Results tied to your business: conversations, leads, cost per lead and, where your tracking sheet allows, cost per paying customer.",
        bad: "Reach, impressions and likes, with no link to enquiries or sales.",
      },
      {
        q: "How is ad spend billed?",
        good: "Ad spend goes to Meta on your own payment method, and the management fee is separate and clearly stated.",
        bad: "One bundled figure where you can't see how much actually went to Meta.",
      },
      {
        q: "Is there a lock-in?",
        good: "Month-to-month, or a short first term with a clear exit, because results should earn the renewal.",
        bad: "A long contract with exit penalties, signed before any results exist.",
      },
    ],
  },

  { type: "h2", text: "Common mistakes SMEs make" },
  {
    type: "list",
    items: [
      "**Treating a boost as a campaign.** It skips the objective, testing and tracking decisions.",
      "**Spending before tracking works.** Without the Pixel, Conversions API and a lead sheet, you can't tell good spend from bad.",
      "**Judging results after two or three days.** Learning needs time and enough events.",
      "**Splitting a small budget across too many ad sets.** Each learns slowly, and none stabilises.",
      "**Editing constantly.** Significant changes can send an ad set back into learning. Batch your changes.",
      "**Optimising for likes when you want customers.** Meta will find people who like things, not people who buy.",
      "**Targeting all of Malaysia for a local shop.** A clinic in Bayan Lepas rarely needs clicks from Kota Kinabalu.",
      "**Slow WhatsApp replies.** A chat answered the next day is often a lead lost to a competitor who replied in ten minutes.",
    ],
  },

  { type: "h2", text: "Where to start" },
  {
    type: "p",
    text:
      "Start small and start measurable. Pick one objective that matches how you actually close sales. Set up the Pixel, Conversions API and a simple lead sheet. Run one or two well-built ad sets with a few creative variations, and give them enough time and events to learn. Then **judge on cost per customer, not cost per like**, and scale what's proven.",
  },
  {
    type: "p",
    text:
      "That's the standard worth holding any ad spend to: **no vanity metrics, no guesswork, every ringgit tracked.** It applies whether you run the ads yourself or bring in help.",
  },
  {
    type: "ctaBanner",
    text: "Start with a free Ad Account Quick Check. No pitch deck, no obligation, just a straight answer on what's working, what's leaking, and what to fix first.",
    buttonText: "Book my free check",
    href: "https://wa.me/60164963875",
  },

  { type: "h2", text: "Sources" },
  {
    type: "list",
    items: [
      "DataReportal, [Digital 2026: Malaysia](https://datareportal.com/reports/digital-2026-malaysia) (Facebook and Instagram ad reach, social media user identities).",
      "Department of Statistics Malaysia, [ICT Use and Access by Individuals and Households Survey 2024](https://www.dosm.gov.my/portal-main/release-content/ict-use-and-access-by-individuals-and-households-survey-report-2024).",
      "Department of Statistics Malaysia, [MSMEs Performance 2025](https://www.dosm.gov.my/portal-main/release-content/micro-small--medium-enterprises-msmes-performance-2025).",
      "Meta for Developers, [Meta Pixel](https://developers.facebook.com/docs/meta-pixel) and [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api) documentation.",
      "Meta Transparency Center, [Ads about social issues, elections or politics](https://transparency.meta.com/en-us/policies/ad-standards/SIEP-advertising/SIEP).",
      "Bernama, [social media platform licensing, 15 Dec 2025](https://www.bernama.com/en/general/news.php?id=2502828) and [Online Safety Act 2025 in force](https://bernama.com/en/news.php?id=2507830).",
    ],
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Facebook Ads for Malaysian SMEs: A 2026 Starter Guide",
  description:
    "A practical Facebook ads Malaysia guide for SMEs: boost vs Ads Manager, objectives, MYR budgets, WhatsApp lead tracking and the 2026 rules to know.",
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  image: "https://millecube.com/blog-facebook-ads-malaysia-hero.png",
  author: { "@type": "Person", name: AUTHOR_NAME, jobTitle: AUTHOR_ROLE, worksFor: { "@type": "Organization", name: "Millecube Digital" } },
  publisher: {
    "@type": "Organization",
    name: "Millecube Digital",
    logo: { "@type": "ImageObject", url: "https://millecube.com/logo-3d.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://millecube.com/blog/facebook-ads-malaysia-sme-guide",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://millecube.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://millecube.com/blog" },
    { "@type": "ListItem", position: 3, name: "Facebook Ads for Malaysian SMEs: A 2026 Starter Guide", item: "https://millecube.com/blog/facebook-ads-malaysia-sme-guide" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FacebookAdsMalaysiaSmeGuide() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InnerHero
        label="GUIDE · UPDATED OCTOBER 2026"
        title="Facebook Ads for Malaysian SMEs: A 2026 Starter Guide"
        subtitle="How to move from boosting posts to real campaigns in Ads Manager: objectives, MYR budgets, WhatsApp lead tracking, and the rules worth knowing this year."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />
      <div style={{ background: "#ffffff" }}>
      <div
        className="max-w-3xl mx-auto"
        style={{ padding: "28px clamp(20px,3vw,40px) 0" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <Image
            src="/author-zack-kho.png"
            alt={AUTHOR_NAME}
            width={40}
            height={40}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <div>
            <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "13px", fontWeight: 700, color: "#061f17", margin: 0, lineHeight: 1.3 }}>
              {AUTHOR_NAME}
            </p>
            <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "12px", color: "rgba(6,31,23,0.55)", margin: 0, lineHeight: 1.3 }}>
              {AUTHOR_ROLE}
            </p>
          </div>
          <span style={{ color: "rgba(6,31,23,0.3)" }}>·</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-montserrat)", fontSize: "12.5px", color: "rgba(6,31,23,0.55)" }}>
            <Clock size={14} /> {READ_TIME}
          </span>
          <span style={{ color: "rgba(6,31,23,0.3)" }}>·</span>
          <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "12.5px", color: "rgba(6,31,23,0.55)" }}>
            Updated {PUBLISHED_DISPLAY}
          </span>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "16px",
            overflow: "hidden",
            marginTop: "24px",
          }}
        >
          <Image
            src="/blog-facebook-ads-malaysia-hero.png"
            alt="Facebook Ads for Malaysian SMEs: A 2026 Starter Guide"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      </div>
      <BlogContent blocks={blocks} faqs={faqs} />
      <CtaStrip />
    </main>
  );
}
