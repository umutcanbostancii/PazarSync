"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function HomeMarketplaces() {
  const { theme } = useTheme();
  const marketplaces = [
    { name: "Trendyol", logo: "/marketplace-logos/trendyol.svg", darkLogo: "/marketplace-logos/dark-mode-logos/trendyol-dark2.svg", link: "/entegrasyonlar/trendyol" },
    { name: "Hepsiburada", logo: "/marketplace-logos/hepsiburada.svg", darkLogo: "/marketplace-logos/dark-mode-logos/hepsiburada-dark.svg", link: "/entegrasyonlar/hepsiburada" },
    { name: "Amazon", logo: "/marketplace-logos/amazon-for-light-mode.svg", darkLogo: "/marketplace-logos/dark-mode-logos/amazon-for-dark-mode.svg", link: "/entegrasyonlar/amazon" },
    { name: "Shopify", logo: "/marketplace-logos/shopify.svg", darkLogo: "/marketplace-logos/dark-mode-logos/shopify-dark.svg", link: "/entegrasyonlar/shopify" },
    { name: "Çiçek Sepeti", logo: "/marketplace-logos/ciceksepeti.svg", link: "/entegrasyonlar/ciceksepeti" },
    { name: "Etsy", logo: "/marketplace-logos/etsy.svg", darkLogo: "/marketplace-logos/dark-mode-logos/etsy-dark.svg", link: "/entegrasyonlar/etsy" },
    { name: "İkas", logo: "/marketplace-logos/ikas.svg", darkLogo: "/marketplace-logos/dark-mode-logos/ikas-dark.svg", link: "/entegrasyonlar/ikas" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-foreground">E-Ticaret Entegrasyonları</h2>
          <p className="text-muted-foreground text-lg">
            Popüler pazaryerleri ile sorunsuz entegrasyon sağlayın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {marketplaces.map((marketplace) => (
            <Link
              href={marketplace.link}
              key={marketplace.name}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 shadow-sm h-full flex flex-col border border-border hover-scale">
                <div className="h-10 w-24 relative flex items-center justify-center">
                  <img
                    src={theme === "dark" && marketplace.darkLogo ? marketplace.darkLogo : marketplace.logo}
                    alt={marketplace.name}
                    style={{ maxHeight: 40, maxWidth: 96, objectFit: 'contain', width: 'auto', height: '100%' }}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2 text-card-foreground">{marketplace.name}</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {marketplace.name} Entegrasyonu
                </p>
                <div className="mt-auto text-center">
                  <span className="text-primary inline-flex items-center">
                    Detaylı Bilgi
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/entegrasyonlar">
            <Button variant="outline" className="gap-2">
              Tüm Entegrasyonları Gör
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
