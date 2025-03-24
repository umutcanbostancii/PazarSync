import Link from "next/link";
import Image from "next/image";

export default function KurumsalPage() {
  const sections = [
    {
      title: "Hakkımızda",
      description: "PazarSync kimdir ve nasıl başladı?",
      link: "/kurumsal/hakkimizda"
    },
    {
      title: "Ekibimiz",
      description: "PazarSync'in arkasındaki uzman ekip",
      link: "/kurumsal/ekibimiz"
    },
    {
      title: "Kariyer",
      description: "PazarSync ailesine katılın",
      link: "/kurumsal/kariyer"
    },
    {
      title: "Misyon & Vizyon",
      description: "Neden varız ve nereye gidiyoruz?",
      link: "/kurumsal/misyon-vizyon"
    },
    {
      title: "Sözleşmeler",
      description: "Yasal belgeler ve kullanım şartları",
      link: "/kurumsal/sozlesmeler"
    },
    {
      title: "KVKK",
      description: "Kişisel verilerin korunması politikası",
      link: "/kurumsal/kvkk"
    }
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6">Kurumsal</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            PazarSync hakkında daha fazla bilgi edinin ve e-ticaret dünyasındaki misyonumuzu keşfedin.
          </p>
        </div>

        {/* Company Overview */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/why-choose-us.jpg"
                alt="PazarSync Ekibi"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light mb-4">E-Ticaret İşlemlerinizi Basitleştiriyoruz</h2>
              <p className="text-muted-foreground mb-6">
                PazarSync, 2018 yılında e-ticaret satıcılarının karşılaştığı karmaşık entegrasyon sorunlarını çözmek için kuruldu. Bugün Türkiye&apos;nin önde gelen e-ticaret entegrasyon platformu olarak binlerce satıcıya hizmet veriyoruz.
              </p>
              <p className="text-muted-foreground mb-6">
                Misyonumuz, e-ticaret satıcılarının pazaryeri entegrasyonlarını basitleştirerek, onların satışlarına ve büyümelerine odaklanmalarını sağlamaktır. Müşterilerimize zaman kazandırırken, ciro artışı sağlıyoruz.
              </p>
              <Link href="/kurumsal/hakkimizda" className="text-primary inline-flex items-center">
                Detaylı Bilgi
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Corporate Section Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Link key={index} href={section.link} className="group hover-scale">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full no-borders">
                <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">{section.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
                <span className="text-primary text-sm font-medium inline-flex items-center group-hover:gap-2 transition-all duration-300">
                  İncele
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 bg-secondary/10 rounded-xl p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light mb-4">Rakamlarla PazarSync</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Aktif Kullanıcı</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Pazaryeri Entegrasyonu</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-sm text-muted-foreground">Yönetilen Ürün</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">%98</div>
              <div className="text-sm text-muted-foreground">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
