import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Our Work — Millecube Digital",
  description:
    "Case studies and results from Millecube Digital. Meta Ads, Marketplace Management, SEO, and more — for Malaysian SMEs.",
};

const cases = [
  { label: "F&B · Meta Ads", title: "Food & Beverage Brand", result: "3.8x ROAS on Meta Ads campaign", desc: "Reduced cost per sale by 62% over 90 days through audience restructuring and creative testing." },
  { label: "Retail · Shopee", title: "Retail Product Seller", result: "Shopee revenue doubled in 60 days", desc: "Full store audit, listing optimisation, and Shopee Ads restructure." },
  { label: "Services · Google Ads", title: "Professional Services", result: "Cost per lead reduced by 42%", desc: "Google Search campaign rebuilt from scratch with new keyword strategy and landing page." },
  { label: "F&B · Social Media", title: "F&B Chain — Social Media", result: "4x organic reach in 3 months", desc: "Content calendar, creative direction, and consistent posting across Meta and TikTok." },
  { label: "E-commerce · Lazada", title: "E-commerce Brand", result: "Lazada store — top category ranking", desc: "Product listing optimisation, Lazada Sponsored Discovery setup, and review strategy." },
  { label: "B2B · Meta Ads", title: "B2B Services Brand", result: "22 qualified leads in first month", desc: "Lead generation campaign with CRM integration and follow-up sequence." },
];

export default function WorkPage() {
  return (
    <main>
      <InnerHero
        label="OUR WORK"
        title="Results that speak louder than decks."
        subtitle="A selection of what we've driven for our clients — measured in business outcomes, not social metrics."
      />

      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F5F5", borderBottom: "1px solid rgba(7,80,60,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-lg overflow-hidden"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(7,80,60,0.08)" }}
              >
                {/* Placeholder image */}
                <div
                  className="w-full flex items-center justify-center"
                  style={{ height: "200px", backgroundColor: "#EBFFF3" }}
                >
                  <span
                    className="text-xs font-medium tracking-widest"
                    style={{ color: "rgba(7,80,60,0.2)", fontFamily: "var(--font-montserrat)" }}
                  >
                    CLIENT WORK
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <span
                    className="text-xs font-bold tracking-widest"
                    style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.label}
                  </span>
                  <h3
                    className="text-sm font-bold"
                    style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.result}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "rgba(7,80,60,0.5)", fontFamily: "var(--font-montserrat)", lineHeight: 1.7 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </main>
  );
}
