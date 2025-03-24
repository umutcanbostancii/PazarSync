import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-6">
            <h1 className="heading-xl text-foreground">
              Tüm Pazaryerlerini <span className="text-primary">Tek Ekrandan</span> Yönetin
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              PazarSync ile e-ticaret operasyonlarınızı basitleştirin. <strong>İstediğiniz web sitesinden ürün çekip, dilediğiniz pazaryerine yükleyin.</strong> Stok ve fiyat güncellemelerinizi tek bir platformdan yönetin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                Desteklenen Pazaryerleri
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="h-8 w-24 relative">
                  <Image
                    src="/images/trendyol-logo.png"
                    alt="Trendyol"
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
                <div className="h-8 w-24 relative">
                  <Image
                    src="/images/hepsiburada-logo.png"
                    alt="Hepsiburada"
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
                <div className="h-8 w-16 relative">
                  <Image
                    src="/images/n11-logo.png"
                    alt="N11"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div className="h-8 w-20 relative">
                  <Image
                    src="/images/amazon-logo.png"
                    alt="Amazon"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-muted-foreground hover:text-primary">
                  <Link href="/entegrasyonlar">+10 daha fazla</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full md:h-[500px] lg:h-[580px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/dashboard-screenshot.png"
                alt="PazarSync Dashboard"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-lg p-4 shadow-lg hidden md:block">
              <p className="text-sm font-medium">İstediğiniz siteden ürün çekin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
