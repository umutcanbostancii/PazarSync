"use client";

import Image from "next/image";

export default function KariyerPage() {
  const openPositions = [
    {
      title: "Senior Frontend Geliştirici",
      department: "Yazılım Geliştirme",
      location: "İstanbul (Hibrit)",
      description: "E-ticaret platformumuz için kullanıcı arayüzleri geliştirmek üzere deneyimli bir Frontend Geliştirici arıyoruz.",
      requirements: [
        "5+ yıl React ve modern JavaScript kütüphaneleri ile deneyim",
        "TypeScript ve Next.js konularında bilgi sahibi olmak",
        "Responsive tasarımlar konusunda deneyim",
        "UI/UX prensiplerini anlama ve uygulama yeteneği",
        "Git ve modern CI/CD araçları konusunda bilgi sahibi olmak"
      ]
    },
    {
      title: "Ürün Müdürü",
      department: "Ürün Yönetimi",
      location: "İstanbul (Hibrit)",
      description: "Ürün vizyonumuzun geliştirilmesi ve uygulanmasına liderlik edecek deneyimli bir Ürün Müdürü arıyoruz.",
      requirements: [
        "3+ yıl SaaS ürünlerinde ürün yönetimi deneyimi",
        "Güçlü analitik ve problem çözme becerileri",
        "Mükemmel iletişim ve paydaş yönetimi becerileri",
        "Veri odaklı karar verme konusunda deneyim",
        "E-ticaret veya pazaryeri entegrasyon platformları konusunda deneyim bir avantaj olacaktır"
      ]
    },
    {
      title: "Müşteri Başarı Uzmanı",
      department: "Müşteri Başarısı",
      location: "İstanbul / Ankara (Hibrit)",
      description: "Müşterilerimizin PazarSync platformunu etkin bir şekilde kullanmalarını sağlayacak ve değer elde etmelerine yardımcı olacak bir Müşteri Başarı Uzmanı arıyoruz.",
      requirements: [
        "2+ yıl müşteri başarısı, hesap yönetimi veya müşteri hizmetleri deneyimi",
        "Mükemmel iletişim ve sunum becerileri",
        "Problem çözme ve müşteri odaklı düşünme becerileri",
        "E-ticaret sektörü hakkında bilgi sahibi olmak bir avantaj olacaktır",
        "CRM sistemleri konusunda deneyim"
      ]
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
          <h1 className="heading-lg mb-6">Kariyer Fırsatları</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            PazarSync ekibine katılın ve e-ticaret dünyasında fark yaratacak çözümler geliştirmemize yardımcı olun.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Neden PazarSync?</h2>
              <p className="text-muted-foreground mb-4">
                PazarSync&apos;te çalışmak, e-ticaret sektöründe fark yaratan bir ekibin parçası olmak demektir. Hızla büyüyen şirketimizde, her gün binlerce işletmenin başarısına katkıda bulunacak yenilikçi çözümler geliştiriyoruz.
              </p>
              <p className="text-muted-foreground mb-4">
                Çalışanlarımıza sunduğumuz avantajlar:
              </p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Rekabetçi maaş ve yan haklar</li>
                <li>Esnek ve hibrit çalışma modeli</li>
                <li>Profesyonel gelişim fırsatları ve eğitimler</li>
                <li>Dinamik ve yenilikçi çalışma ortamı</li>
                <li>Özel sağlık sigortası</li>
                <li>Yemek ve ulaşım desteği</li>
              </ul>
            </div>
            <div className="relative h-96 w-full overflow-hidden rounded-lg">
              <Image
                alt="Kariyer"
                className="object-cover"
                fill
                src="/images/team/team.webp"
              />
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-light mb-12 text-center">Açık Pozisyonlar</h2>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-medium mb-1">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /><path d="M3 9h18" /></svg>
                          {position.department}
                        </span>
                        <span className="inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                      Başvur
                    </button>
                  </div>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Aranan Nitelikler:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      {position.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">Başvuru Süreci</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <span className="font-bold text-lg">1</span>
              </div>
              <h3 className="font-medium mb-2">Başvuru</h3>
              <p className="text-muted-foreground text-sm">
                İlgilendiğiniz pozisyona online olarak başvurun. Özgeçmişinizi ve ön yazınızı dikkatle inceleyeceğiz.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <span className="font-bold text-lg">2</span>
              </div>
              <h3 className="font-medium mb-2">Görüşmeler</h3>
              <p className="text-muted-foreground text-sm">
                Uygun adaylarla önce telefon görüşmesi, ardından teknik görüşme ve son olarak kültür uyumu görüşmesi yapılır.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <span className="font-bold text-lg">3</span>
              </div>
              <h3 className="font-medium mb-2">Teklif</h3>
              <p className="text-muted-foreground text-sm">
                Başarılı adaylara teklif sunulur ve PazarSync ekibine katılım süreci başlar.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Açık pozisyonlarımızla ilgili sorularınız mı var?</h2>
          <p className="text-muted-foreground mb-6">
            İnsan Kaynakları ekibimizle iletişime geçin.
          </p>
          <a href="mailto:kariyer@pazarsync.com" className="inline-block">
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
              ik@pazarsync.com
            </button>
          </a>
        </div>
      </div>
    </div>
  );
} 