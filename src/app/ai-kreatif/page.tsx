import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clapperboard, PenSquare, Palette, Sparkles, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AiKreatifPage() {
  const services = [
    {
      title: "AI Görsel & Video Üretimi",
      description: "Ürününüzden yola çıkarak her platform için farklı konseptlerde göz alıcı görseller ve videolar üretiriz.",
      icon: <Palette className="h-8 w-8 text-primary" />,
    },
    {
      title: "AI ile Sosyal Medya İçerikleri",
      description: "Satışı artıran, dikkat çeken dinamik Reels, TikTok ve YouTube Shorts içerikleriyle hedef kitlenize ulaşın.",
      icon: <Clapperboard className="h-8 w-8 text-primary" />,
    },
    {
      title: "AI Metin Yazarlığı",
      description: "SEO uyumlu ve satış odaklı ürün açıklamaları, blog yazıları ve sosyal medya metinleri oluştururuz.",
      icon: <PenSquare className="h-8 w-8 text-primary" />,
    },
    {
      title: "AI Marka Stratejisi",
      description: "Markanızın stilini, ses tonunu ve görsel dilini analiz eder, size özel kampanya ve mailing kreatifleri üretiriz.",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Yapay Zeka ile Kreatif Üretim
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Yapay Zeka ile E-Ticarette Fark Yaratın. Sıradan içeriklerle boğulmayın, PazarSync'in kreatif servisleriyle markanızı parlatın.
          </p>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Ajanslara Bağımlı Kalmayın</h2>
            <p className="text-muted-foreground mt-2">Zaman, maliyet ve kalite: Hepsini tek pakette sunuyoruz.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6">
                <div className="flex justify-center items-center mb-4 h-16 w-16 rounded-full bg-primary/10 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-muted-foreground text-center text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neden AI? Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Kreatif Süreçlerinizi Otomatize Edin</h2>
            <p className="text-muted-foreground mb-6">
              Yapay zeka, sadece içerik üretmekle kalmaz, aynı zamanda A/B testleri için sayısız varyasyon oluşturarak en etkili kreatifleri bulmanızı sağlar. Bu sayede reklam harcamalarınızın geri dönüşünü (ROAS) maksimize eder.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Check className="h-6 w-6 text-green-500 mr-3" />
                <span>Daha hızlı ve daha uygun maliyetli içerik üretimi.</span>
              </li>
              <li className="flex items-center">
                <Check className="h-6 w-6 text-green-500 mr-3" />
                <span>Veriye dayalı, yüksek performanslı kreatifler.</span>
              </li>
              <li className="flex items-center">
                <Check className="h-6 w-6 text-green-500 mr-3" />
                <span>Marka kimliğinizle tam uyumlu, özgün tasarımlar.</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Image 
              src="/images/why-choose-us.webp" 
              alt="Yapay Zeka Kreatif Üretim"
              width={500}
              height={500}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Markanızı Geleceğe Taşıyın</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Yapay zekanın sunduğu sınırsız kreatif potansiyelden yararlanmak için bizimle iletişime geçin ve projenizi bir sonraki seviyeye taşıyalım.
          </p>
          <Link href="/iletisim">
            <Button size="lg">Projenizi Görüşelim</Button>
          </Link>
        </div>
      </section>
    </div>
  );
} 