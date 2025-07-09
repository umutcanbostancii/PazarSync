import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Download, Upload, RefreshCw } from "lucide-react";

export default function EntegrasyonBilgiPage() {
  const desteklenenPlatformlar = [
    {
      name: "Trendyol",
      logo: "/marketplace-logos/trendyol.svg",
      description: "Türkiye'nin en büyük e-ticaret platformu",
      features: ["Ürün listeleme", "Stok senkronizasyonu", "Sipariş yönetimi"]
    },
    {
      name: "Hepsiburada",
      logo: "/marketplace-logos/hepsiburada.svg", 
      description: "Milyonlarca müşteriye ulaşın",
      features: ["Hızlı entegrasyon", "Otomatik güncelleme", "Fiyat yönetimi"]
    },
    {
      name: "Amazon",
      logo: "/marketplace-logos/amazon-for-light-mode.svg",
      description: "Küresel pazarlara açılın",
      features: ["Dünya çapında satış", "FBA entegrasyonu", "Multi-market"]
    },
    {
      name: "Shopify",
      logo: "/marketplace-logos/shopify.svg",
      description: "E-ticaret mağaza sistemi",
      features: ["Mağaza entegrasyonu", "Tema uyumluluğu", "App store"]
    },
    {
      name: "Çiçek Sepeti",
      logo: "/marketplace-logos/ciceksepeti.svg",
      description: "Hediye ve çiçek kategorisi",
      features: ["Özel kategoriler", "Sezonsal ürünler", "Hızlı teslimat"]
    },
    {
      name: "Etsy",
      logo: "/marketplace-logos/etsy.svg",
      description: "El yapımı ve vintage ürünler",
      features: ["Handmade kategorisi", "Sanatsal ürünler", "Global pazar"]
    },
    {
      name: "İkas",
      logo: "/marketplace-logos/ikas.svg",
      description: "Türk e-ticaret platformu",
      features: ["Yerel destek", "Kolay kullanım", "Hızlı kurulum"]
    },
    {
      name: "n11",
      logo: "/marketplace-logos/n11.webp",
      description: "Günlük alışveriş platformu",
      features: ["Hızlı onay", "Geniş kategori", "Mobil uyumlu"]
    }
  ];

  const nasılÇalışır = [
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "1. Ürün Çekme",
      description: "İstediğiniz web sitesinden ürün bilgilerini, görselleri ve özelliklerini otomatik olarak çekin."
    },
    {
      icon: <Upload className="w-8 h-8 text-primary" />,
      title: "2. Ürün Yükleme", 
      description: "Çektiğiniz ürünleri dilediğiniz pazaryerlerine tek tıkla yükleyin ve satışa sunun."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      title: "3. Otomatik Senkronizasyon",
      description: "Stok, fiyat ve ürün bilgilerinizi tüm platformlarda otomatik olarak güncel tutun."
    }
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Bölümü */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            E-Ticaret Platform <span className="text-primary">Entegrasyonları</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            PazarSync ile tüm büyük e-ticaret platformlarına sorunsuz entegrasyon sağlayın. 
            Ürünlerinizi tek noktadan yönetin, satışlarınızı artırın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fiyatlar">
              <Button size="lg" className="clean-button w-full sm:w-auto">
                Ücretsiz Deneyin
              </Button>
            </Link>
            <Link href="/iletisim">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Demo Talep Edin
              </Button>
            </Link>
          </div>
        </div>

        {/* Nasıl Çalışır */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Nasıl Çalışır?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nasılÇalışır.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desteklenen Platformlar */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
            Desteklenen Platformlar
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Aşağıdaki platformlarla entegrasyon kurarak ürünlerinizi geniş kitlelere ulaştırabilirsiniz.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {desteklenenPlatformlar.map((platform, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="h-12 w-full relative mb-4 flex items-center justify-center">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={96}
                    height={48}
                    className="object-contain max-h-12"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground text-center">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {platform.description}
                </p>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bölümü */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Entegrasyonlarınızı Bugün Başlatın
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            14 günlük ücretsiz deneme ile tüm özellikleri keşfedin. Kredi kartı gerekmez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fiyatlar">
              <Button size="lg" className="clean-button w-full sm:w-auto">
                Ücretsiz Başlayın
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/iletisim">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                İletişime Geçin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 