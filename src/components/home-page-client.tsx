"use client";

import dynamic from 'next/dynamic';
import HeroSlider from "@/components/hero-slider";
import { HomeStats } from "@/components/home-stats";
import { HomeFeatures } from "@/components/home-features";
import { HomeServices } from "@/components/home-services";
import { HomeWorkflow } from "@/components/home-workflow";

const HomeAIServices = dynamic(() => import('@/components/home-ai-services').then(mod => mod.HomeAIServices), { loading: () => <div className="h-96 w-full" />, ssr: false });
const HomeMarketplaces = dynamic(() => import('@/components/home-marketplaces').then(mod => mod.HomeMarketplaces), { loading: () => <div className="h-96 w-full" />, ssr: false });
const HomeWhyChooseUs = dynamic(() => import('@/components/home-why-choose-us').then(mod => mod.HomeWhyChooseUs), { loading: () => <div className="h-96 w-full" />, ssr: false });
const HomeCTA = dynamic(() => import('@/components/home-cta').then(mod => mod.HomeCTA), { loading: () => <div className="h-96 w-full" />, ssr: false });

export default function HomePageClient() {
  return (
    <>
      <HeroSlider />
      <HomeStats />
      <HomeFeatures />
      <HomeWorkflow />
      <HomeServices />
      <HomeAIServices />
      <HomeMarketplaces />
      <HomeWhyChooseUs />
      <HomeCTA />
    </>
  );
} 