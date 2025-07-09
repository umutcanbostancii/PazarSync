import { Button } from "@/components/ui/button";
import { Check, Store, Settings, Brush } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EticaretKurulumuPage() {
  const platforms = [
    "Shopify", "WooCommerce / WordPress", "BigCommerce",
    "Headless CMS sistemleri", "Dropshipping yapıları", "Gelişmiş ödeme sistemleri (iyzico, Stripe, PayPal)",
    "Domain, hosting, SSL altyapısı", "Temadan sepete uzman desteği"
  ];

  const processSteps = [
    {
      title: "1. Analiz ve Planlama",
      description: "Markanızın hedeflerini ve ihtiyaçlarını anlıyor, sizin için en doğru e-ticaret platformunu ve stratejiyi birlikte belirliyoruz.",
      icon: <Settings className="h-8 w-8 text-primary" />,
    },
    {
      title: "2. Kurulum ve Entegrasyon",
      description: "Seçilen platform üzerinde teknik ve görsel kurulumu yapıyor, ödeme sistemlerinden lojistiğe tüm entegrasyonları tamamlıyoruz.",
      icon: <Store className="h-8 w-8 text-primary" />,
    },
    {
      title: "3. Lansman ve Destek",
      description: "Mağazanızı yayına alıyor ve sonrasında da teknik destek ve danışmanlık hizmetlerimizle yanınızda olmaya devam ediyoruz.",
      icon: <Brush className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            E-Ticaret Sistemi Kurulumu & Danışmanlığı
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Sıfırdan Online Mağazanızı Kuralım – Profesyonelce. Teknik yükleri bize bırakın, siz sadece satışa odaklanın.
          </p>
        </div>
      </section>

      {/* Kapsam Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
             <Image 
              src="/images/marketplace-integration.webp" 
              alt="E-ticaret Platformları"
              width={500}
              height={500}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Sadece Mağaza Değil, Satışa Hazır Bir Sistem Kuruyoruz</h2>
            <p className="text-muted-foreground mb-6">
              Markanız için en uygun platformu birlikte seçiyoruz. İster küçük bir butik olun, ister global bir oyuncu; tüm altyapıyı sizin için biz yönetiyoruz.
            </p>
            <ul className="space-y-3 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {platforms.map((platform, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{platform}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Süreç Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">🎯 3 Günde Yayındasınız!</h2>
            <p className="text-muted-foreground mt-2">İstediğiniz e-ticaret platformunu seçin, size özel kurulumla hızla satışa başlayın.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.title} className="text-center p-6 border border-border/50 rounded-lg">
                <div className="flex justify-center items-center mb-4 h-16 w-16 rounded-full bg-primary/10 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">E-ticaret Hayallerinizi Ertelemeyin</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Profesyonel bir başlangıç yapmak için ilk adımı atın. Projenizi ve hedeflerinizi görüşmek üzere bizimle iletişime geçin.
          </p>
          <Link href="/iletisim">
            <Button size="lg">Danışmanlık Alın</Button>
          </Link>
        </div>
      </section>
    </div>
  );
} 