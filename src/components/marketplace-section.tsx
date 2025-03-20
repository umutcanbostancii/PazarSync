import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MarketplaceSection() {
  const marketplaces = [
    { name: "Trendyol", logo: "/images/trendyol-logo.png", link: "/entegrasyonlar/trendyol" },
    { name: "Hepsiburada", logo: "/images/hepsiburada-logo.png", link: "/entegrasyonlar/hepsiburada" },
    { name: "Amazon", logo: "/images/amazon-logo.png", link: "/entegrasyonlar/amazon" },
    { name: "N11", logo: "/images/n11-logo.png", link: "/entegrasyonlar/n11" },
    { name: "Çiçek Sepeti", logo: "/images/ciceksepeti-logo.png", link: "/entegrasyonlar/ciceksepeti" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">E-Ticaret Entegrasyonları</h2>
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
              <div className="bg-white rounded-xl p-6 shadow-sm h-full flex flex-col">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="h-10 w-24 relative">
                    <Image
                      src={marketplace.logo}
                      alt={marketplace.name}
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{marketplace.name}</h3>
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
