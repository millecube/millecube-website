import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import NumberStats from "@/components/NumberStats";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import WhyMillecube from "@/components/WhyMillecube";
import Portfolio from "@/components/Portfolio";
import CtaStrip from "@/components/CtaStrip";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhoWeAre />
      <NumberStats />
      <Services />
      <WhyMillecube />
      <Portfolio />
      <CtaStrip />
    </main>
  );
}
