"use client";

import Image from "next/image";

const EkibimizPage = () => {
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      position: "Kurucu & CEO",
      bio: "10+ yıllık e-ticaret ve yazılım deneyimi ile PazarSync'i 2018 yılında kurdu. Öncesinde çeşitli e-ticaret platformlarında üst düzey yönetici olarak görev aldı.",
      image: "/images/team/ceo.jpg"
    },
    {
      name: "Zeynep Kaya",
      position: "CTO",
      bio: "15 yıllık teknoloji ve yazılım geliştirme deneyimine sahip. PazarSync'in teknoloji stratejisini yöneterek inovatif çözümler geliştiriyor.",
      image: "/images/team/cto.jpg"
    },
    {
      name: "Mehmet Demir",
      position: "Ürün Direktörü",
      bio: "Kullanıcı deneyimi ve ürün yönetimi konusunda uzman. PazarSync'in müşteri odaklı ürün stratejisini şekillendiriyor.",
      image: "/images/team/team.jpg"
    },
    {
      name: "Ayşe Şahin",
      position: "Pazarlama Direktörü",
      bio: "Dijital pazarlama ve marka stratejisi konularında 8+ yıllık deneyime sahip. PazarSync'in büyüme stratejisini yönlendiriyor.",
      image: "/images/team/team.jpg"
    },
    {
      name: "Emre Özkan",
      position: "Müşteri Başarı Yöneticisi",
      bio: "E-ticaret operasyonları ve müşteri ilişkileri yönetimi konusunda uzman. Müşterilerimizin PazarSync ile maksimum değer elde etmesini sağlıyor.",
      image: "/images/team/team.jpg"
    },
    {
      name: "Deniz Yıldız",
      position: "Yazılım Geliştirme Lideri",
      bio: "Full-stack geliştirme ve yazılım mimarisi konularında uzman. PazarSync'in teknik altyapısını ve yazılım geliştirme süreçlerini yönetiyor.",
      image: "/images/team/team.jpg"
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
          <h1 className="heading-lg mb-6">Ekibimiz</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            PazarSync&apos;i bu noktaya getiren güçlü ekibimizle tanışın. Tüm ekip üyelerimiz, e-ticaret ve teknoloji alanlarında geniş deneyime sahiptir.
          </p>
        </div>

        {/* Team Overview */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/team/team.jpg"
                alt="PazarSync Ekibi"
                className="object-cover rounded-xl"
                fill
              />
            </div>
            <div>
              <h2 className="text-3xl font-light mb-6">Birlikte Daha Güçlüyüz</h2>
              <p className="text-muted-foreground mb-4">
                PazarSync ekibi, e-ticaret ve yazılım geliştirme konularında derin bilgi ve deneyime sahip uzmanlardan oluşmaktadır. Her bir ekip üyemiz, müşterilerimizin başarısı için tutku ile çalışmaktadır.
              </p>
              <p className="text-muted-foreground mb-4">
                İnovasyon, müşteri odaklılık ve sürekli gelişim ilkelerimizle hareket eden ekibimiz, e-ticaret dünyasının karmaşık yapısını anlayarak müşterilerimize en etkili çözümleri sunmaktadır.
              </p>
              <p className="text-muted-foreground">
                Farklı geçmişlere ve uzmanlık alanlarına sahip ekip üyelerimiz, zengin bir bakış açısı ve yaratıcı çözümler geliştirmemize yardımcı olmaktadır.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <h2 className="text-3xl font-light mb-12 text-center">Yönetim Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1 text-card-foreground">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="bg-primary/5 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">Bize Katılın</h2>
              <p className="text-muted-foreground mb-6">
                Ekibimizin bir parçası olmak ve e-ticaret dünyasını değiştirmek ister misiniz? Açık pozisyonlarımızı inceleyin ve kariyer fırsatları için başvurun.
              </p>
              <a href="/kurumsal/kariyer">
                <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                  Kariyer Fırsatlarını İncele
                </button>
              </a>
            </div>
            <div className="relative h-[200px] md:h-[250px]">
              <Image
                src="/images/team/team.jpg"
                alt="PazarSync Ofisi"
                className="object-cover rounded-xl"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EkibimizPage; 