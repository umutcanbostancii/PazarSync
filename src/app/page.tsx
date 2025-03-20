import HeroSlider from "@/components/hero-slider";
import { HomeFeatures } from "@/components/home-features";
import { HomeAIServices } from "@/components/home-ai-services";
import { HomeMarketplaces } from "@/components/home-marketplaces";
import { HomeWhyChooseUs } from "@/components/home-why-choose-us";
import { HomeCTA } from "@/components/home-cta";
import { HomeStats } from "@/components/home-stats";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HomeStats />
      <HomeFeatures />
      <HomeAIServices />
      <HomeMarketplaces />
      <HomeWhyChooseUs />
      <HomeCTA />
    </>
  );
}
