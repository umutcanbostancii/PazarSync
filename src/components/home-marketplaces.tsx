"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function HomeMarketplaces() {
  const { theme } = useTheme();
  const marketplaces = [
    { name: "Trendyol", logo: "/marketplace-logos/trendyol.svg", darkLogo: "/marketplace-logos/dark-mode-logos/trendyol-dark2.svg", link: "/entegrasyonlar/bilgi" },
    { name: "Hepsiburada", logo: "/marketplace-logos/hepsiburada.svg", darkLogo: "/marketplace-logos/dark-mode-logos/hepsiburada-dark.svg", link: "/entegrasyonlar/bilgi" },
    { name: "Amazon", logo: "/marketplace-logos/amazon-for-light-mode.svg", darkLogo: "/marketplace-logos/dark-mode-logos/amazon-for-dark-mode.svg", link: "/entegrasyonlar/bilgi" },
    { name: "Shopify", logo: "/marketplace-logos/shopify.svg", darkLogo: "/marketplace-logos/dark-mode-logos/shopify-dark.svg", link: "/entegrasyonlar/bilgi" },
    { name: "Çiçek Sepeti", logo: "/marketplace-logos/ciceksepeti.svg", link: "/entegrasyonlar/bilgi" },
    { name: "Etsy", logo: "/marketplace-logos/etsy.svg", darkLogo: "/marketplace-logos/dark-mode-logos/etsy-dark.svg", link: "/entegrasyonlar/bilgi" },
    { name: "İkas", logo: "/marketplace-logos/ikas.svg", darkLogo: "/marketplace-logos/dark-mode-logos/ikas-dark.svg", link: "/entegrasyonlar/bilgi" },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container-wide px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">E-Ticaret Entegrasyonları</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Popüler pazaryerleri ile sorunsuz entegrasyon sağlayın.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {marketplaces.map((marketplace) => (
            <Link
              href={marketplace.link}
              key={marketplace.name}
              className="group"
            >
              <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm h-full flex flex-col border border-border hover-scale transition-shadow hover:shadow-md">
                <div className="h-8 md:h-10 w-full relative flex items-center justify-center mb-3 md:mb-4">
                  <img
                    src={theme === "dark" && marketplace.darkLogo ? marketplace.darkLogo : marketplace.logo}
                    alt={marketplace.name}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', width: 'auto', height: '100%' }}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = marketplace.logo; }}
                  />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-center mb-1 md:mb-2 text-card-foreground">{marketplace.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground text-center mb-2 md:mb-4">
                  {marketplace.name} Entegrasyonu
                </p>
                <div className="mt-auto text-center">
                  <span className="text-primary inline-flex items-center text-xs md:text-sm">
                    Detaylı Bilgi
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <Link href="/entegrasyonlar/bilgi">
            <Button variant="outline" className="gap-2 text-sm md:text-base">
              Tüm Entegrasyonları Gör
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
