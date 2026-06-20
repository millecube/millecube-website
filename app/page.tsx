import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import NumberStats from "@/components/NumberStats";
import WhoWeAre from "@/components/WhoWeAre";
import TrustCarousel from "@/components/TrustCarousel";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CtaStrip from "@/components/CtaStrip";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhoWeAre />
      <TrustCarousel />
      <NumberStats />
      <Portfolio />
      <CtaStrip />
    </main>
  );
}
