import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeAIServices() {
  const features = [
    {
      title: "Herhangi Bir Siteden Ürün Verisi Çıkarma",
      description: "İstediğiniz herhangi bir web sitesi, toptancı veya markadan ürünleri istediğiniz formatta çıkarabilirsiniz."
    },
    {
      title: "Otomatik İçerik Toplama",
      description: "Ürün açıklamaları, fiyatlar ve görselleri otomatik olarak toplayabilirsiniz."
    },
    {
      title: "Çoklu Dil Desteği",
      description: "Ürün bilgilerini herhangi bir dile otomatik olarak çevirebilirsiniz."
    },
    {
      title: "Görsel Düzenleme",
      description: "İhtiyaç duyduğunuz şekilde ürün görsellerini düzenleyebilir ve optimize edebilirsiniz."
    },
    {
      title: "Yapay Zeka Desteği",
      description: "Yapay zeka teknolojisiyle ürün açıklamalarını geliştirebilir ve SEO'nuzu iyileştirebilirsiniz."
    },
    {
      title: "Uygun Fiyat",
      description: "Tüm bu hizmetler ürün başına sadece 6 TL'dir."
    }
  ];

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-foreground">Uzmanlığımız: Zahmetsiz Veri Çıkarma ve Yapay Zeka Optimizasyonu</h2>
          <p className="text-muted-foreground text-lg">
            E-ticaret verimliliğinizi sorunsuz otomasyon ve yapay zeka destekli içerikle artırın!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover-scale">
                <div className="flex space-x-5">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-card-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/fiyatlar">
            <Button size="lg" className="clean-button">
              Hemen Başlayın
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
