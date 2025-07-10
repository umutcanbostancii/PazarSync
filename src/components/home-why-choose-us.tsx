import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeWhyChooseUs() {
  const benefits = [
    {
      title: "7/24 Kesintisiz Senkronizasyon",
      description: "Stok ve fiyat güncellemeleriniz 7/24 kesintisiz senkronize edilir."
    },
    {
      title: "Her Siteden Veri Çekme",
      description: "İstediğiniz web sitesinden ürün bilgilerini otomatik olarak çekebilirsiniz."
    },
    {
      title: "Rekabetçi Fiyatlandırma",
      description: "Farklı ihtiyaçlara göre özelleştirilebilen paketler ile maliyet avantajı sağlayın."
    },
    {
      title: "Türkçe Destek",
      description: "Uzman ekibimiz tüm sorularınıza Türkçe destek sağlar."
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[300px] md:h-[500px]">
            <Image
              src="/images/about-us.webp"
              alt="Why choose us"
              fill
              className="rounded-xl object-cover shadow-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="heading-lg mb-6 text-foreground">Neden PazarSync?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                PazarSync, e-ticaret süreçlerinizi otomatikleştirmek ve büyümenizi hızlandırmak için tasarlanmıştır.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/kurumsal/hakkimizda">
                <Button variant="outline" className="gap-2 no-borders">
                  Daha Fazla Bilgi
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
