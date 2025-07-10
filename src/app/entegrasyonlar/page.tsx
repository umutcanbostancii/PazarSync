"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

export default function IntegrationsPage() {
  const { theme } = useTheme();

  const marketplaces = {
    "Pazaryerleri": [
      { name: "Trendyol", logo: "/marketplace-logos/trendyol.svg", darkLogo: "/marketplace-logos/dark-mode-logos/trendyol-dark2.svg" },
      { name: "Hepsiburada", logo: "/marketplace-logos/hepsiburada.svg", darkLogo: "/marketplace-logos/dark-mode-logos/hepsiburada-dark.svg" },
      { name: "n11", logo: "/marketplace-logos/n11.webp", darkLogo: "/marketplace-logos/dark-mode-logos/n11-dark.svg" },
      { name: "Amazon", logo: "/marketplace-logos/amazon-for-light-mode.svg", darkLogo: "/marketplace-logos/dark-mode-logos/amazon-for-dark-mode.svg" },
      { name: "Çiçek Sepeti", logo: "/marketplace-logos/ciceksepeti.svg", darkLogo: "/marketplace-logos/dark-mode-logos/ciceksepeti-dark.svg" },
      { name: "Pttavm", logo: "/marketplace-logos/pttavm.webp", darkLogo: "/marketplace-logos/dark-mode-logos/pttavm-dark.svg" },
      { name: "Morhipo", logo: "/marketplace-logos/morhipo.svg", darkLogo: "/marketplace-logos/dark-mode-logos/Morhipo-dark.svg" },
      { name: "Etsy", logo: "/marketplace-logos/etsy.svg", darkLogo: "/marketplace-logos/dark-mode-logos/etsy-dark.svg" },
    ],
    "E-ticaret Altyapıları": [
      { name: "Shopify", logo: "/marketplace-logos/shopify.svg", darkLogo: "/marketplace-logos/dark-mode-logos/shopify-dark.svg" },
      { name: "WooCommerce", logo: "/marketplace-logos/woocommerce.svg", darkLogo: "/marketplace-logos/dark-mode-logos/woocommerce-dark.svg" },
      { name: "ikas", logo: "/marketplace-logos/ikas.svg", darkLogo: "/marketplace-logos/dark-mode-logos/ikas-dark.svg" },
      { name: "BigCommerce", logo: "/marketplace-logos/bigcommerce.svg", darkLogo: "/marketplace-logos/dark-mode-logos/bigcommerce-dark.svg" },
      { name: "Magento", logo: "/marketplace-logos/magento.svg", darkLogo: "/marketplace-logos/dark-mode-logos/magento-dark.svg" },
      { name: "OpenCart", logo: "/marketplace-logos/opencart.webp", darkLogo: "/marketplace-logos/dark-mode-logos/opencart-dark.svg" },
      { name: "Wix", logo: "/marketplace-logos/wix.webp", darkLogo: "/marketplace-logos/dark-mode-logos/wix-dark.svg" },
      { name: "Prestashop", logo: "/marketplace-logos/prestashop.svg", darkLogo: "/marketplace-logos/dark-mode-logos/prestashop-dark.svg" },
      { name: "Wordpress", logo: "/marketplace-logos/wordpress.svg", darkLogo: "/marketplace-logos/dark-mode-logos/wordpress-dark.svg" },
    ],
  };

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">Pazar Yeri ve E-Ticaret Entegrasyonları</h1>
          <p className="mt-3 md:mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            PazarSync, Türkiye'nin ve dünyanın en popüler pazar yerleri ve e-ticaret altyapıları ile tam entegre çalışır.
          </p>
        </div>

        {Object.entries(marketplaces).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary/90 border-b-2 border-primary/20 pb-2 mb-6 md:mb-8">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
              {items.map((marketplace) => (
                <div key={marketplace.name} className="flex flex-col items-center justify-center p-3 md:p-4 bg-secondary/20 rounded-lg h-28 md:h-32 hover:bg-secondary/30 transition-colors">
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-2 relative flex items-center justify-center">
                    <img
                      src={theme === 'dark' && marketplace.darkLogo ? marketplace.darkLogo : marketplace.logo}
                      alt={`${marketplace.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-sm md:text-base font-medium text-center">{marketplace.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
