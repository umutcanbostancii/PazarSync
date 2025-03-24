"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Plan tipini tanımlayalım
interface PlanFeature {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  details: string[];
  popular: boolean;
  buttonText: string;
  buttonLink: string;
}

export default function FiyatlarPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanFeature | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const plans: PlanFeature[] = [
    {
      id: "starter",
      name: "Başlangıç",
      price: "299",
      description: "Küçük ölçekli e-ticaret işletmeleri için ideal başlangıç paketi",
      features: [
        "5 farklı pazaryeri entegrasyonu",
        "1000 ürüne kadar",
        "Günlük otomatik ürün güncellemesi",
        "Web sitelerinden ürün çekme",
        "E-mail destek"
      ],
      popular: false,
      buttonText: "Ücretsiz Deneyin",
      buttonLink: "/odeme/starter",
      details: [
        "Aylık fatura opsiyonu",
        "İlk 14 gün ücretsiz deneme",
        "Teknik kurulum desteği",
        "7/24 e-mail destek",
        "Pazaryeri API entegrasyonları",
        "Kolay kurulum",
        "Ürün içe ve dışa aktarma",
        "Herhangi bir web sitesinden ürün çekme"
      ]
    },
    {
      id: "pro",
      name: "Pro",
      price: "599",
      description: "Orta ölçekli işletmeler için genişletilmiş yetenekler",
      features: [
        "10 farklı pazaryeri entegrasyonu",
        "5000 ürüne kadar",
        "Saatlik otomatik ürün güncellemesi",
        "Gelişmiş web sitesi veri çekme",
        "Yapay zeka destekli içerik iyileştirme",
        "E-mail ve telefon desteği"
      ],
      popular: true,
      buttonText: "Pro Paketi Seçin",
      buttonLink: "/odeme/pro",
      details: [
        "Aylık veya yıllık fatura opsiyonu (yıllık ödemeye %15 indirim)",
        "İlk 14 gün ücretsiz deneme",
        "Ayrıcalıklı teknik destek",
        "7/24 telefon ve e-mail desteği",
        "10+ Pazaryeri API entegrasyonları",
        "Yardımlı kurulum",
        "Gelişmiş ürün yönetimi",
        "Otomatik veri çekme zamanlaması",
        "Yapay zeka ile ürün açıklaması optimizasyonu",
        "Çoklu kullanıcı desteği",
        "Gelişmiş analitik ve raporlar"
      ]
    },
    {
      id: "enterprise",
      name: "Kurumsal",
      price: "1199",
      description: "Büyük ölçekli ve çok kanallı e-ticaret operasyonları için",
      features: [
        "Sınırsız pazaryeri entegrasyonu",
        "Sınırsız ürün",
        "Anlık ürün güncellemesi",
        "Özel veri çekme çözümleri",
        "Özel API erişimi",
        "Öncelikli 7/24 destek",
        "Özel eğitim ve danışmanlık"
      ],
      popular: false,
      buttonText: "İletişime Geçin",
      buttonLink: "/odeme/enterprise",
      details: [
        "Aylık, yıllık veya özel fatura opsiyonları",
        "İlk 30 gün ücretsiz deneme",
        "Öncelikli teknik destek",
        "Tam 7/24 destek",
        "Sınırsız Pazaryeri entegrasyonları",
        "VIP kurulum desteği",
        "Özel API erişimi",
        "Özel veri çekme ve işleme modülleri",
        "Özel raporlar ve analizler",
        "Kişiselleştirilmiş danışmanlık hizmetleri",
        "Gelişmiş veri analizi opsiyonları",
        "İsteğe özel geliştirmeler"
      ]
    }
  ];

  const openDialog = (plan: PlanFeature) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
  };
  
  const redirectToPayment = (planId: string) => {
    // Bu fonksiyon ödeme sayfasına yönlendirecek
    window.location.href = `/odeme/${planId}`;
  };

  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6">Fiyatlandırma</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            İşletmenizin büyüklüğüne ve ihtiyaçlarınıza uygun esnek fiyatlandırma planları sunuyoruz. Tüm planlarımız 14 gün ücretsiz deneme ile başlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan: PlanFeature) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl p-8 shadow-sm relative hover:shadow-md transition-shadow cursor-pointer ${
                plan.popular ? "border-2 border-primary" : ""
              }`}
              onClick={() => openDialog(plan)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-semibold py-1 px-4 rounded-full">
                  En Popüler
                </div>
              )}

              <div className="text-center mb-6">
                <h2 className="text-2xl font-medium mb-3">{plan.name}</h2>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-light">{plan.price}</span>
                  <span className="text-lg text-muted-foreground"> TL / ay</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-auto">
                <Button
                  className={plan.popular ? "clean-button w-full" : "w-full"}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Detayları Görüntüle
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Özel ihtiyaçlarınız mı var? Ürün başına ödeme veya özel paket seçenekleri için iletişime geçin.
          </p>
          <Link href="/iletisim">
            <Button variant="outline">
              Özel Fiyat Teklifi Alın
            </Button>
          </Link>
        </div>
      </div>

      {/* Plan Detayları Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedPlan && (
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-medium mb-2">
                {selectedPlan.name} Paket Detayları
              </DialogTitle>
              <DialogDescription>
                Paket fiyatı: <span className="font-semibold">{selectedPlan.price} TL / ay</span>
              </DialogDescription>
            </DialogHeader>
            
            <div className="my-4">
              <h3 className="text-lg font-medium mb-3">Bu pakete dahil olanlar:</h3>
              <ul className="space-y-3">
                {selectedPlan.details.map((detail: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <DialogFooter className="mt-6 gap-4">
              <Button
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="w-full sm:w-auto"
              >
                Kapat
              </Button>
              <Button 
                className="clean-button w-full sm:w-auto"
                onClick={() => redirectToPayment(selectedPlan.id)}
              >
                {selectedPlan.id === 'enterprise' ? 'İletişime Geçin' : 'Satın Al'}
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
