import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import BlogContent, { BlogBlock, BlogFaq } from "@/components/BlogContent";
import CtaStrip from "@/components/CtaStrip";
import {
  Target,
  MagnifyingGlass,
  Storefront,
  ShareNetwork,
  Code,
  PenNib,
  Compass,
} from "@phosphor-icons/react/dist/ssr";

const PUBLISHED = "2026-10-07";

export const metadata: Metadata = {
  title: "What Does a Digital Marketing Agency in Malaysia Do?",
  description:
    "A data-backed guide to what digital marketing agencies in Malaysia actually do, what to pay, and how to verify one is legitimate before you sign anything, with real DOSM figures, not guessed stats.",
  keywords: [
    "digital marketing agency malaysia",
    "digital marketing agency penang",
    "what is a digital marketing agency",
    "digital marketing agency pricing malaysia",
    "how to choose a digital marketing agency",
  ],
  alternates: { canonical: "https://millecube.com/blog/digital-marketing-agency-malaysia-guide" },
  openGraph: {
    title: "What Does a Digital Marketing Agency in Malaysia Do? — Millecube",
    description:
      "A data-backed guide: what agencies actually do, what to pay, and how to verify one is legitimate before you sign anything.",
    url: "https://millecube.com/blog/digital-marketing-agency-malaysia-guide",
    type: "article",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

const faqs: BlogFaq[] = [
  {
    q: "Do I need a digital marketing agency, or can I do this myself?",
    a: "It depends on time more than skill. The platforms (Meta Ads Manager, Google Ads, Search Console) are learnable by anyone. What most business owners actually run out of is the hours to manage campaigns daily, respond to algorithm changes, and keep up with seven different disciplines at once while also running the business itself.",
  },
  {
    q: "How long does it take to see results?",
    a: "Paid ads (Meta, Google) can show data within days to weeks, since you're paying for placement directly. SEO and content are slower by nature, typically 3-6 months before meaningful movement, because you're building something search engines have to independently decide is worth ranking.",
  },
  {
    q: "What's the real difference between hiring a freelancer and an agency?",
    a: "A freelancer is usually one person covering multiple disciplines, which means less depth per channel and no backup if they're unavailable. An agency should mean a team with someone who actually specialises in each area you're paying for. That's worth confirming directly before signing, since the word \"agency\" doesn't guarantee it.",
  },
  {
    q: "Can one agency really handle all seven areas well?",
    a: "Some can, many can't despite claiming to. Ask directly who on the team handles each specific channel, and ask to see work in that channel specifically, not just a general portfolio. A one-person \"agency\" offering all seven areas is a reasonable thing to be skeptical of.",
  },
  {
    q: "How do I check if an agency is legally registered in Malaysia?",
    a: "Look up the company name or registration number directly at ssm-einfo.my, the official Companies Commission of Malaysia (SSM) portal. It's free, takes under a minute, and is the single most useful check before any contract discussion.",
  },
];

const blocks: BlogBlock[] = [
  {
    type: "quickAnswer",
    paragraphs: [
      "A full-service digital marketing agency in Malaysia typically covers seven distinct areas: paid ads (Meta, Google, TikTok), SEO, social media management, marketplace management, website and landing pages, content and creative, and branding. That's not just \"running ads.\"",
      "Before signing with any agency, confirm who will actually manage your account day-to-day, what the report will measure (real outcomes vs. vanity metrics), and whether you can verify their SSM registration. There's no published, verifiable benchmark for pricing in Malaysia, so treat any specific number you see, including on this page, as one vendor's rate, not an industry standard.",
      "72.7% of Malaysian businesses now have a web presence (DOSM, 2023), leaving roughly 1 in 4 with none. The rest of this guide covers what to ask, what to realistically expect, and when it might make sense to wait.",
    ],
  },
  {
    type: "p",
    text:
      "Malaysia's digital economy crossed RM451.3 billion in 2024, or 23.4% of GDP, according to the Department of Statistics Malaysia's most recent release. Behind that number is a simpler fact: most Malaysian businesses now compete for customers who search, scroll, and buy online first, whether the business is ready for that or not.",
  },
  {
    type: "p",
    text:
      "\"What does a digital marketing agency actually do\" sounds like a basic question, but the honest answer is messier than most agency websites make it look. \"Digital marketing\" has quietly become an umbrella term for seven distinct disciplines, and a business owner comparing agencies usually can't tell which ones they're actually being sold until the invoice arrives.",
  },

  { type: "h2", text: "What a digital marketing agency actually covers" },
  {
    type: "p",
    text:
      "Not every agency offers all seven areas below, and that's fine. Plenty of legitimate agencies specialise in one or two. The problem is when a specialist in one area markets itself as full-service without the team to back it up. Each of these is a distinct skill set, not a variation of the same one:",
  },
  {
    type: "pillars",
    items: [
      { icon: <Target size={20} color="#07503c" weight="bold" />, title: "Paid Advertising", desc: "Meta, Google, and TikTok Ads: audience targeting, creative testing, conversion tracking.", href: "/services/media-advertisement" },
      { icon: <MagnifyingGlass size={20} color="#07503c" weight="bold" />, title: "SEO", desc: "Technical fixes, keyword research, and content built to rank without paying for placement.", href: "/services/seo" },
      { icon: <ShareNetwork size={20} color="#07503c" weight="bold" />, title: "Social Media Management", desc: "Content calendars, organic posting, and community management across platforms.", href: "/services/social-media" },
      { icon: <Storefront size={20} color="#07503c" weight="bold" />, title: "Marketplace Management", desc: "Shopee, Lazada, and TikTok Shop: listings, in-platform ads, and chat response.", href: "/services/marketplace-management" },
      { icon: <Code size={20} color="#07503c" weight="bold" />, title: "Website & Landing Pages", desc: "The page your ad spend actually lands on, built to convert, not just exist.", href: "/services/website" },
      { icon: <PenNib size={20} color="#07503c" weight="bold" />, title: "Content & Creative", desc: "Ad creative, copywriting, and short-form video: the material every channel above needs to run.", href: "/services/content-creative" },
      { icon: <Compass size={20} color="#07503c" weight="bold" />, title: "Branding & Strategy", desc: "Positioning and identity: the layer that decides what every other channel is actually saying.", href: "/services/branding-strategy" },
    ],
  },
  {
    type: "ctaBanner",
    text: "Still comparing agencies in Penang, KL, or Johor Bahru?",
    buttonText: "Talk to Millecube",
    href: "/contact",
  },

  { type: "h2", text: "Why this matters more in Malaysia right now" },
  {
    type: "p",
    text:
      "Malaysian SMEs contributed 39.5% of GDP in 2024, growing 5.8% year-on-year, and employ just under half the national workforce (48.7%), per DOSM's latest SME performance report. The businesses behind that growth are increasingly the ones with a working website, an active ad account, or a stocked marketplace storefront, not necessarily the biggest ones, just the ones that show up.",
  },
  {
    type: "stats",
    items: [
      { value: "72.7%", label: "of Malaysian businesses have a web presence (2023)" },
      { value: "39.5%", label: "of GDP contributed by MSMEs (2024)" },
      { value: "23.4%", label: "of GDP from ICT + e-commerce sectors (2024)" },
    ],
    sourceLabel: "Department of Statistics Malaysia, Nov 2025",
    sourceHref: "https://www.dosm.gov.my/portal-main/release-content/malaysia-digital-economy-2025",
  },
  {
    type: "p",
    text:
      "That 72.7% figure is up only 1.3 points from the year before, which cuts both ways: roughly a quarter of Malaysian businesses still have no web presence of any kind. If your direct competitors fall into that remaining quarter, visibility alone is a real advantage. If they don't, the competition for the same searches and the same ad auctions only gets more crowded from here.",
  },

  { type: "h2", text: "Questions to ask before you sign" },
  {
    type: "p",
    text:
      "This is the part most agency content skips, because it's not flattering to the industry. Ask these directly, and listen for the difference between an answer and a dodge:",
  },
  {
    type: "questions",
    items: [
      {
        q: "Who will actually manage my account day-to-day?",
        good: "Names a specific person or small team, and explains their role and how often they'll check in.",
        bad: "\"Our team\" with no names, or the person who pitched you disappears right after signing.",
      },
      {
        q: "Who owns the ad accounts and data once we stop working together?",
        good: "You do. The agency builds inside accounts you own and can hand over access anytime.",
        bad: "The agency insists on keeping ownership of your ad accounts or pixel data \"for consistency.\"",
      },
      {
        q: "What exactly will I see in my monthly report?",
        good: "Real outcomes, leads, sales, or cost-per-result, tied to an actual number you care about.",
        bad: "Vague \"brand awareness\" or \"reach\" metrics with no connection to a business outcome.",
      },
      {
        q: "Can I see a case study from a business with a similar sales process to mine?",
        good: "A specific example with real before/after numbers, or an offer to connect you with the actual client.",
        bad: "A generic results slide with logos and percentages that don't trace back to a named client.",
      },
      {
        q: "Is this agency registered, and can I verify it myself?",
        good: "They give you their SSM number without hesitation, checkable for free at [ssm-einfo.my](https://www.ssm-einfo.my).",
        bad: "Any hesitation, or an invoice that comes from a personal name instead of a registered business.",
      },
      {
        q: "What happens if results fall short?",
        good: "A clear explanation of what they'll change, and openness to discuss it monthly since there's no lock-in.",
        bad: "A long-term contract that locks you in regardless of performance.",
      },
    ],
  },

  { type: "h2", text: "What should you actually pay?" },
  {
    type: "p",
    text:
      "There is no official, published benchmark for digital marketing agency pricing in Malaysia. Every \"industry average\" figure circulating online, including numbers you'll find on comparison sites, traces back to individual vendors quoting their own rates, not independent research. Treat any specific number you see, anywhere, as one data point from one vendor, not a standard.",
  },
  {
    type: "p",
    text:
      "What genuinely drives the cost of a retainer: the breadth of scope (one channel vs. seven), contract length (month-to-month typically costs more per month than a 12-month lock-in, because the agency is taking on more risk), and whether ad spend is bundled into the fee or billed separately. Bundled pricing usually means less transparency into where your money actually goes.",
  },

  { type: "h2", text: "What to realistically expect, month by month" },
  {
    type: "p",
    text:
      "Results across these seven areas don't arrive on the same clock. A rough, honest timeline:",
  },
  {
    type: "list",
    ordered: false,
    items: [
      "**Days 1-30.** Paid ad accounts (Meta, Google) go live and start generating real data. Tracking setup (pixel, conversions API, Search Console) happens in this window too, since nothing after this point means much without it.",
      "**Month 2-3.** Paid campaigns move past the initial learning phase and cost-per-result starts to stabilise. Technical SEO fixes go live. Social content calendars find a rhythm.",
      "**Month 3-6.** SEO and content begin showing real ranking movement, assuming the technical foundation was fixed first. Marketplace listings and ads get optimised based on actual sales data, not guesses.",
      "**Month 6 onward.** Organic channels (SEO, social, content) start compounding and gradually reduce how much you need to rely on paid spend to stay visible.",
    ],
  },

  { type: "h2", text: "When it may make sense to wait" },
  {
    type: "p",
    text:
      "Hiring an agency too early is a common way to waste a marketing budget, not a lack of ambition. A few situations where fixing the fundamentals first is the better call:",
  },
  {
    type: "list",
    items: [
      "**No one on your team can respond to leads quickly.** Paid traffic generating enquiries nobody answers within hours is money spent on nothing.",
      "**Basic tracking isn't in place yet.** An agency can set this up, but if you can't independently verify their reporting afterward, you're trusting numbers you have no way to check.",
      "**Your offer or pricing hasn't been validated with real customers.** Marketing amplifies what's already working. It doesn't fix a product or pricing mismatch.",
      "**Cash flow can't sustain both ad spend and a management fee for at least three months.** Paid channels need a runway to get past the learning phase; stopping early wastes the money already spent getting there.",
    ],
  },

  { type: "h2", text: "Before you sign anything" },
  {
    type: "p",
    text:
      "None of the above replaces doing your own diligence: checking SSM registration, asking for real numbers instead of vanity metrics, and understanding exactly what you're paying for before the first invoice. The agencies worth hiring are the ones that don't mind you asking.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Does a Digital Marketing Agency in Malaysia Do?",
  description:
    "A data-backed guide to what digital marketing agencies in Malaysia actually do, what to pay, and how to verify one is legitimate before you sign anything.",
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Organization", name: "Millecube Digital", url: "https://millecube.com" },
  publisher: {
    "@type": "Organization",
    name: "Millecube Digital",
    logo: { "@type": "ImageObject", url: "https://millecube.com/logo-3d.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://millecube.com/blog/digital-marketing-agency-malaysia-guide",
  },
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

export default function DigitalMarketingAgencyMalaysiaGuide() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <InnerHero
        label="GUIDE · UPDATED OCTOBER 2026"
        title="What Does a Digital Marketing Agency in Malaysia Do?"
        subtitle="The seven disciplines it actually covers, real DOSM figures on Malaysia's digital economy, and how to verify an agency is legitimate before you sign anything."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />
      <div
        className="max-w-3xl mx-auto"
        style={{ padding: "28px clamp(20px,3vw,40px) 0" }}
      >
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "12px",
            color: "rgba(6,31,23,0.5)",
          }}
        >
          By the Millecube Digital Team · Published October 2026
        </p>
      </div>
      <BlogContent blocks={blocks} faqs={faqs} />
      <CtaStrip />
    </main>
  );
}
