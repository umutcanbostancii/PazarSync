"use client";

import Image from "next/image";

// Milestone veri yapısı
interface Milestone {
  year: string;
  title: string;
  description: string;
}

export default function HakkimizdaPage() {
  const milestones: Milestone[] = [
    {
      year: "2018",
      title: "PazarSync'in Kuruluşu",
      description: "PazarSync, e-ticaret satıcılarının pazaryeri entegrasyonlarını basitleştirmek amacıyla İstanbul'da kuruldu."
    },
    {
      year: "2019",
      title: "İlk Entegrasyonlar",
      description: "Trendyol ve Hepsiburada entegrasyonları ile ilk müşterilerimize hizmet vermeye başladık."
    },
    {
      year: "2020",
      title: "Büyüme Dönemi",
      description: "1000+ aktif kullanıcıya ulaştık ve ekibimizi genişlettik. Amazon ve N11 entegrasyonlarını tamamladık."
    },
    {
      year: "2021",
      title: "Yapay Zeka Odağı",
      description: "Yapay zeka destekli ürün içeriği optimizasyonu ve otomatik kategorizasyon özelliklerini tanıttık."
    },
    {
      year: "2022",
      title: "Uluslararası Pazarlara Açılma",
      description: "Global pazaryerlerine erişim sağlayarak müşterilerimize uluslararası satış kanalları açtık."
    },
    {
      year: "2023",
      title: "Yeni Sürüm ve Entegrasyonlar",
      description: "PazarSync 2.0 sürümünü ve 5 yeni pazaryeri entegrasyonunu kullanıma sunduk."
    },
    {
      year: "2024",
      title: "Yeni Teknolojik Atılım",
      description: "İleri seviye veri analizi ve e-ticaret optimizasyonu araçlarımızla sektörde öncü olmaya devam ediyoruz."
    }
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/kurumsal" className="text-primary inline-flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 rotate-180"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            Kurumsal&apos;a Dön
          </a>
          <h1 className="heading-lg mb-6">Hakkımızda</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            2018 yılında kurulan PazarSync, Türkiye&apos;nin önde gelen e-ticaret entegrasyon platformu olarak hizmet vermektedir.
          </p>
        </div>

        {/* About Company Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-light mb-6">Biz Kimiz?</h2>
              <p className="text-muted-foreground mb-4">
                PazarSync, e-ticaret satıcılarının çoklu pazaryeri yönetimini basitleştirmeyi amaçlayan teknoloji odaklı bir şirkettir. Başarılı bir e-ticaret operasyonu için gerekli olan tüm araçları tek bir platformda sunuyoruz.
              </p>
              <p className="text-muted-foreground mb-4">
                Sunduğumuz entegrasyon çözümleri, işletmelerin farklı pazaryerlerinde ürünlerini listelemesini, stok ve fiyat yönetimini merkezi olarak yapmasını ve siparişleri tek bir panelden yönetmesini sağlamaktadır.
              </p>
              <p className="text-muted-foreground">
                Yapay zeka destekli araçlarımız ve otomatik iş akışlarımız sayesinde, müşterilerimiz operasyonel yüklerini azaltarak büyümeye ve stratejik kararlara odaklanabilmektedir.
              </p>
            </div>
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                alt="Hakkımızda"
                className="object-cover"
                fill
                src="/images/why-choose-us.webp"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-light mb-8 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full border border-border">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-card-foreground">Güvenilirlik</h3>
              <p className="text-muted-foreground">Müşterilerimize her zaman güvenilir ve şeffaf bir hizmet sunarak uzun vadeli ilişkiler kuruyoruz.</p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full border border-border">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-card-foreground">Sürekli İyileştirme</h3>
              <p className="text-muted-foreground">Sürekli öğrenme ve gelişme kültürümüz ile her zaman daha iyisini sunmak için çalışıyoruz.</p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full border border-border">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-card-foreground">Müşteri Odaklılık</h3>
              <p className="text-muted-foreground">Tüm kararlarımızda ve ürün geliştirmelerimizde müşterilerimizin ihtiyaçlarını ön planda tutuyoruz.</p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-light mb-12 text-center">Tarihçemiz</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full font-medium">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 bg-gray-200 h-full mt-2"></div>
                  )}
                </div>
                <div className="pt-3 pb-8">
                  <h3 className="text-xl font-medium mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 