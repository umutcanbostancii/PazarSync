import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-6 fade-up">
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
              <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                <Image
                  alt="Trendyol logo"
                  className="w-24"
                  height="40"
                  src="/images/trendyol-logo.webp"
                  width="100"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <Image
                  alt="Hepsiburada logo"
                  className="w-24"
                  height="40"
                  src="/images/hepsiburada-logo.webp"
                  width="100"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <Image
                  alt="n11 logo"
                  className="w-24"
                  height="40"
                  src="/images/n11-logo.webp"
                  width="100"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <Image
                  alt="Amazon logo"
                  className="w-24"
                  height="40"
                  src="/images/amazon-logo.webp"
                  width="100"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                alt="PazarSync Dashboard"
                className="rounded-lg shadow-xl"
                height="600"
                src="/images/dashboard-screenshot.webp"
                width="800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
