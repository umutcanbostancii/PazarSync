import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function HomeHero() {
  const { theme } = useTheme();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-16 pb-12 md:pt-32 md:pb-24">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
              Tüm Pazaryerlerini <span className="text-secondary-foreground dark:text-primary">Tek Ekrandan</span> Yönetin
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg">
              PazarSync ile e-ticaret operasyonlarınızı basitleştirin. <strong>İstediğiniz web sitesinden ürün çekip, dilediğiniz pazaryerine yükleyin.</strong> Stok ve fiyat güncellemelerinizi tek bir platformdan yönetin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Link href="/fiyatlar">
                <Button size="lg" className="clean-button w-full sm:w-auto">
                  Ücretsiz Deneyin
                </Button>
              </Link>
              <Link href="/entegrasyonlar">
                <Button variant="outline" size="lg" className="w-full sm:w-auto no-borders">
                  Entegrasyonları Keşfedin
                </Button>
              </Link>
            </div>
            <div className="pt-4 md:pt-6">
              <p className="text-sm text-muted-foreground mb-3 md:mb-4">
                Desteklenen Pazaryerleri
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <div className="h-6 w-20 md:h-8 md:w-24 relative">
                  <Image
                    src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/trendyol-dark2.svg" : "/marketplace-logos/trendyol.svg"}
                    alt="Trendyol"
                    fill
                    sizes="(max-width: 768px) 80px, 96px"
                    className="object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = "/marketplace-logos/trendyol.svg"; }}
                  />
                </div>
                <div className="h-6 w-20 md:h-8 md:w-24 relative">
                  <Image
                    src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/hepsiburada-dark.svg" : "/marketplace-logos/hepsiburada.svg"}
                    alt="Hepsiburada"
                    fill
                    sizes="(max-width: 768px) 80px, 96px"
                    className="object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = "/marketplace-logos/hepsiburada.svg"; }}
                  />
                </div>
                <div className="h-6 w-20 md:h-8 md:w-24 relative">
                  <Image
                    src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/shopify-dark.svg" : "/marketplace-logos/shopify.svg"}
                    alt="Shopify"
                    fill
                    sizes="(max-width: 768px) 80px, 96px"
                    className="object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = "/marketplace-logos/shopify.svg"; }}
                  />
                </div>
                <div className="h-6 w-20 md:h-8 md:w-24 relative">
                  <Image
                    src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/ikas-dark.svg" : "/marketplace-logos/ikas.svg"}
                    alt="İkas"
                    fill
                    sizes="(max-width: 768px) 80px, 96px"
                    className="object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = "/marketplace-logos/ikas.svg"; }}
                  />
                </div>
                <div className="h-6 w-20 md:h-8 md:w-24 relative">
                  <Image
                    src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/etsy-dark.svg" : "/marketplace-logos/etsy.svg"}
                    alt="Etsy"
                    fill
                    sizes="(max-width: 768px) 80px, 96px"
                    className="object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = "/marketplace-logos/etsy.svg"; }}
                  />
                </div>
                <div className="h-6 w-20 md:h-8 md:w-24 relative">
                  <Image
                    src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/amazon-for-dark-mode.svg" : "/marketplace-logos/amazon-for-light-mode.svg"}
                    alt="Amazon"
                    fill
                    sizes="(max-width: 768px) 80px, 96px"
                    className="object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = "/marketplace-logos/amazon-for-light-mode.svg"; }}
                  />
                </div>
                <span className="text-sm text-muted-foreground hover:text-primary">
                  <Link href="/entegrasyonlar">+10 daha fazla</Link>
                </span>
              </div>
            </div>
          </div>
          {/* Image Content - Order 1 on mobile, Order 2 on desktop */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-lg shadow-2xl overflow-hidden">
              <Image
                alt="PazarSync Dashboard"
                className="object-cover"
                height={800}
                src="/images/dashboard-screenshot.webp"
                width={1400}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-primary text-white rounded-lg p-3 md:p-4 shadow-lg hidden sm:block">
              <p className="text-xs md:text-sm font-medium">İstediğiniz siteden ürün çekin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
