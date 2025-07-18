import Link from "next/link";
import Image from "next/image";

export default function KaynaklarPage() {
  const resources = [
    {
      title: "PazarSync'e Başlarken",
      description: "PazarSync'i kullanmaya başlamak için ihtiyacınız olan her şey.",
      image: "/images/dashboard-screenshot.webp",
      link: "/kaynaklar/baslarken",
    },
    {
      title: "Entegrasyon Rehberleri",
      description: "Tüm pazar yerleri ve e-ticaret platformları için detaylı entegrasyon rehberleri.",
      image: "/images/dashboard-screenshot.webp",
      link: "/kaynaklar/entegrasyonlar",
    },
    {
      title: "Sıkça Sorulan Sorular",
      description: "Merak ettiğiniz tüm soruların cevapları burada.",
      image: "/images/dashboard-screenshot.webp",
      link: "/sss",
    },
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6">Kaynaklar</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            PazarSync&apos;i daha etkili kullanmak için ihtiyaç duyacağınız tüm kaynaklar, kılavuzlar ve dokümantasyonlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Link href={resource.link} key={index} className="group hover-scale">
              <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col no-borders">
                <div className="relative h-40">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors text-card-foreground">{resource.title}</h2>
                  <p className="text-muted-foreground text-sm flex-1">{resource.description}</p>
                  <div className="mt-4">
                    <span className="text-primary text-sm font-medium inline-flex items-center group-hover:gap-2 transition-all duration-300">
                      Görüntüle
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light mb-4">İhtiyacınız olan kaynağı bulamadınız mı?</h2>
            <p className="text-muted-foreground">
              Destek ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/iletisim" className="inline-block">
              <button className="clean-button">
                İletişime Geçin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
