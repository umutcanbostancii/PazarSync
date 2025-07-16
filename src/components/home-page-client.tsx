"use client";

import dynamic from 'next/dynamic';
import HeroSlider from "@/components/hero-slider";
import { HomeStats } from "@/components/home-stats";
import { HomeFeatures } from "@/components/home-features";
import { HomeServices } from "@/components/home-services";
import { HomeWorkflow } from "@/components/home-workflow";

const HomeAIServices = dynamic(() => import('@/components/home-ai-services').then(mod => mod.HomeAIServices), { loading: () => <div className="h-96 w-full" /> });
const HomeMarketplaces = dynamic(() => import('@/components/home-marketplaces').then(mod => mod.HomeMarketplaces), { loading: () => <div className="h-96 w-full" /> });
const HomeWhyChooseUs = dynamic(() => import('@/components/home-why-choose-us').then(mod => mod.HomeWhyChooseUs), { loading: () => <div className="h-96 w-full" /> });
const HomeCTA = dynamic(() => import('@/components/home-cta').then(mod => mod.HomeCTA), { loading: () => <div className="h-96 w-full" /> });

export default function HomePageClient() {
  return (
    <>
      <HeroSlider />
      <HomeStats />
      <HomeAIServices />
      <HomeFeatures />
      <HomeWorkflow />
      <HomeServices />
      <HomeMarketplaces />
      <HomeWhyChooseUs />
      <HomeCTA />
    </>
  );
} 