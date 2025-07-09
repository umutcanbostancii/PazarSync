import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Download, BrainCircuit, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function UrunCekmeYuklemePage() {
  const features = [
    {
      title: "Veri Çekme",
      description: "İstediğiniz siteden ürün verilerini (görsel, açıklama, fiyat, varyasyonlar) otomatik olarak çekeriz.",
      icon: <Download className="h-8 w-8 text-primary" />,
    },
    {
      title: "AI ile Özelleştirme",
      description: "GPT destekli yapay zekamızla açıklamaları yeniden yazar, başlıkları optimize eder ve dil çevirisi yaparız.",
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    },
    {
      title: "Platforma Yükleme",
      description: "Ürünlerinizi Shopify, Trendyol, Etsy gibi dilediğiniz platforma doğrudan entegre eder ve yayınlarız.",
      icon: <Upload className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Ürün Çekme & Yükleme Otomasyonu
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Sitenizi Ürünle Doldurmanın En Kolay Yolu: PazarSync ile tek tıkla binlerce ürünü internetteki herhangi bir siteden çekin, kendi e-ticaret mağazanıza kolayca yükleyin.
          </p>
        </div>
      </section>

      {/* Nasıl Çalışır? Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Akıllı Bot Sistemimiz Nasıl Çalışır?</h2>
            <p className="text-muted-foreground mt-2">Satışa giden yolda ilk adımı otomatik atın.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center p-6">
                <div className="flex justify-center items-center mb-4 h-16 w-16 rounded-full bg-primary/10 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantajlar Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Otomasyonun Gücüyle Tanışın</h2>
            <p className="text-muted-foreground mb-6">
              Manuel ürün girişiyle saatlerinizi harcamak yerine, PazarSync otomasyonu ile iş akışınızı hızlandırın. Rakiplerinizin ürünlerini, pazar yerlerindeki popüler ürünleri veya tedarikçi kataloglarını saniyeler içinde mağazanıza taşıyın.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Check className="h-6 w-6 text-green-500 mr-3" />
                <span>Zamandan tasarruf edin, işinize odaklanın.</span>
              </li>
              <li className="flex items-center">
                <Check className="h-6 w-6 text-green-500 mr-3" />
                <span>Tek merkezden binlerce ürünü kolayca yönetin.</span>
              </li>
              <li className="flex items-center">
                <Check className="h-6 w-6 text-green-500 mr-3" />
                <span>Daha hızlı ürün listeleyerek satışa bir adım önde başlayın.</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Image 
              src="/images/product-sync.webp" 
              alt="Ürün Senkronizasyon Otomasyonu"
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
          <h2 className="text-3xl font-bold text-primary mb-4">Hazır mısınız?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Hemen ücretsiz denemeye başlayın ve ürün listeleme sürecinizi otomatize ederek işinizi büyütmenin keyfini çıkarın.
          </p>
          <Link href="/demo">
            <Button size="lg">Ücretsiz Deneyin ve Başlayın</Button>
          </Link>
        </div>
      </section>
    </div>
  );
} 