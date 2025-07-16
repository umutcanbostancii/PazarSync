import { Button } from "@/components/ui/button";
import { Check, Store, Settings, Brush } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHeroSlider from "@/components/page-hero-slider";

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

  // Hero slider için slide'lar
  const heroSlides = [
    {
      type: 'image' as const,
      src: "/images/ecommerce-illustration.webp",
      alt: "E-ticaret Kurulumu",
      badge: "Profesyonel Kurulum"
    },
    {
      type: 'image' as const,
      src: "/images/dashboard-screenshot.webp",
      alt: "E-ticaret Dashboard",
      badge: "Modern Arayüz"
    },
    {
      type: 'image' as const,
      src: "/images/marketplace-integration.webp",
      alt: "Pazaryeri Entegrasyonu",
      badge: "Kolay Entegrasyon"
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Slider */}
      <PageHeroSlider
        title="E-Ticaret Sistemi <span class='text-primary'>Kurulumu</span> & Danışmanlığı"
        description="Sıfırdan Online Mağazanızı Kuralım – Profesyonelce. Teknik yükleri bize bırakın, siz sadece satışa odaklanın."
        slides={heroSlides}
        ctaButton={{
          text: "Danışmanlık Alın",
          href: "/iletisim"
        }}
        secondaryButton={{
          text: "Platformları İnceleyin",
          href: "#kapsam"
        }}
      />

      {/* Kapsam Section */}
      <section id="kapsam" className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
             <Image 
              src="/images/ecommerce-illustration.webp" 
              alt="E-ticaret Kurulumu"
              width={500}
              height={500}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Sadece Mağaza Değil, Satışa Hazır Bir Sistem Kuruyoruz</h2>
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
      <section className="py-12 md:py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">🎯 3 Günde Yayındasınız!</h2>
            <p className="text-muted-foreground mt-2">İstediğiniz e-ticaret platformunu seçin, size özel kurulumla hızla satışa başlayın.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">E-ticaret Hayallerinizi Ertelemeyin</h2>
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