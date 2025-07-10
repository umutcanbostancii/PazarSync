import { Check } from 'lucide-react';
import Image from "next/image";

const features = [
  {
    title: "Herhangi Bir Siteden Ürün Verisi Çıkarma",
    description: "İstediğiniz herhangi bir web sitesi, toptancı veya markadan ürünleri istediğiniz formatta çıkarabilirsiniz.",
    image: "/images/Herhangi-siteden-uruncekme.webp",
    points: ["Gelişmiş Web Kazıma", "XML/API Entegrasyonu", "Manuel Veri Girişi"]
  },
  {
    title: "Yapay Zeka Destekli İçerik Optimizasyonu",
    description: "Yapay zeka teknolojisiyle ürün açıklamalarını geliştirebilir, SEO'nuzu iyileştirebilir ve otomatik içerik toplayabilirsiniz.",
    image: "/images/Yapay-Zeka-Icerik-Large.webp",
    points: ["Otomatik İçerik Oluşturma", "SEO Odaklı İyileştirme", "Görsel Optimizasyonu"]
  },
  {
    title: "Çoklu Dil Desteği",
    description: "Ürün bilgilerini herhangi bir dile otomatik olarak çevirerek global pazarlara açılın.",
    image: "/images/multiple-language.webp",
    points: ["Otomatik Çeviri", "Lokalizasyon Desteği", "Global Pazaryerleri"]
  },
];

export function HomeAIServices() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Arka Plan Görseli */}
      <Image
        src="/images/ai-background.webp"
        alt="Yapay Zeka Arka Plan"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/60 to-black/70 z-10" />

      {/* İçerik */}
      <div className="relative z-20 container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
            Uzmanlığımız
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white shadow-lg">
            Veri Çıkarma ve Yapay Zeka Optimizasyonu
          </h2>
          <p className="max-w-[900px] text-indigo-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            E-ticaret verimliliğinizi sorunsuz otomasyon ve yapay zeka destekli içerikle yeni bir seviyeye taşıyın.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-1 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="grid gap-8 md:grid-cols-2 items-center bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className={`flex flex-col justify-center space-y-4 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <p className="text-indigo-200">
                      {feature.description}
                    </p>
                </div>
                <ul className="grid gap-2 py-2">
                  {feature.points.map(point => (
                    <li key={point} className="flex items-center text-indigo-100">
                      <Check className="mr-2 inline-block h-4 w-4 text-green-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                alt={feature.title}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src={feature.image}
                width="550"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
