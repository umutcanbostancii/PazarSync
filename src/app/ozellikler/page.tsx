import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function OzelliklerPage() {
  const features = [
    {
      title: "Tek Ekran Yönetimi",
      description: "Tüm e-ticaretinizi tek ekrandan yönetebilirsiniz. Bilgisayar, tablet ya da akıllı telefonunuzdan hesabınıza erişebilirsiniz."
    },
    {
      title: "Kolay Ürün Listeleme",
      description: "Ürünleriniz sanal mağazalarınızda otomatik listelenir. Dilerseniz ürünleri elinizle anlık olarak ekleyebilir veya toplu entegrasyon başlatabilirsiniz."
    },
    {
      title: "Otomatik Güncelleme",
      description: "Ürünleriniz her gün düzenli olarak belirlediğiniz kurallarla güncellenir. Dilerseniz ürünleriniz için dilediğiniz zaman güncelleme başlatabilirsiniz."
    },
    {
      title: "Ürün Çekme ve Yükleme",
      description: "İstediğiniz web sitesinden ürün çekip, kendi sisteminize aktarabilir ve dilediğiniz pazaryerine otomatik olarak yükleyebilirsiniz."
    },
    {
      title: "Müşteri Mesajlaşma",
      description: "Müşterilerinizin mağazanız üzerinden ilettiği mesajları görebilir ve cevaplayabilirsiniz."
    },
    {
      title: "Ürün Özelleştirme",
      description: "Ürünlerinizi farklı platformlar için özelleştirebilir, platform bazında gösterilebilecek özel açıklamalar ekleyebilirsiniz."
    },
    {
      title: "Yapay Zeka Desteği",
      description: "Yapay zeka teknolojisiyle ürün açıklamalarını geliştirebilir ve SEO'nuzu iyileştirebilirsiniz."
    },
    {
      title: "Çoklu Dil Desteği",
      description: "Ürün bilgilerini herhangi bir dile otomatik olarak çevirebilirsiniz."
    }
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6">PazarSync Özellikleri</h1>
          <p className="text-muted-foreground text-lg">
            PazarSync size e-ticaret operasyonlarınızı verimli bir şekilde yönetmenize yardımcı olacak çeşitli özellikler sunar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-medium mb-2">{feature.title}</h2>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-secondary/10 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-light mb-4">Zahmetsiz Veri Çıkarma ve Yapay Zeka Optimizasyonu</h2>
                <p className="text-muted-foreground mb-6">
                  İstediğiniz herhangi bir web sitesi, toptancı veya markadan ürünleri istediğiniz formatta çıkarın, ürün açıklamalarını yapay zeka ile optimize edin ve görsellerinizi düzenleyin.
                </p>
                <div className="text-sm font-medium bg-primary text-white inline-block py-2 px-4 rounded-lg">
                  Ürün başına sadece 6 TL
                </div>
              </div>
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/dashboard-screenshot.png"
                  alt="PazarSync Dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
