"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const plans = {
  starter: {
    name: "Başlangıç",
    price: "299",
    description: "Küçük ölçekli e-ticaret işletmeleri için ideal başlangıç paketi",
    features: [
      "5 farklı pazaryeri entegrasyonu",
      "1000 ürüne kadar",
      "Günlük otomatik ürün güncellemesi",
      "Web sitelerinden ürün çekme",
      "E-mail destek"
    ]
  },
  pro: {
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
    ]
  },
  enterprise: {
    name: "Enterprise",
    price: "1299",
    description: "Büyük ölçekli işletmeler için tam entegrasyon çözümü",
    features: [
      "Sınırsız pazaryeri entegrasyonu",
      "Sınırsız ürün",
      "Gerçek zamanlı otomatik ürün güncellemesi",
      "Özel API entegrasyonları",
      "Özel veri çekme sistemleri",
      "Yapay zeka destekli içerik ve fiyat optimizasyonu",
      "7/24 öncelikli destek",
      "Özel eğitim ve danışmanlık hizmetleri"
    ]
  }
};

type PaymentMethod = "creditCard" | "bankTransfer" | "paypal";
type BillingCycle = "monthly" | "yearly";

export default function EnterprisePlanPage() {
  const router = useRouter();
  const [selectedBillingCycle, setSelectedBillingCycle] = useState("monthly");
  const currentPlan = plans.enterprise;

  const onClickBillingCycle = (cycle: string) => {
    setSelectedBillingCycle(cycle);
  };

  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6">{currentPlan.name} Plan</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {currentPlan.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
            <h2 className="text-2xl font-medium mb-6">Plan Detayları</h2>
            <ul className="space-y-4 mb-8">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-medium mb-6">Ödeme Bilgileri</h2>
            
            <div className="flex justify-center mb-6 bg-gray-100 p-1 rounded-lg">
              <button
                className={`py-2 px-4 rounded-md w-1/2 text-sm font-medium ${
                  selectedBillingCycle === "monthly" ? "bg-white shadow-sm" : ""
                }`}
                onClick={() => onClickBillingCycle("monthly")}
              >
                Aylık
              </button>
              <button
                className={`py-2 px-4 rounded-md w-1/2 text-sm font-medium ${
                  selectedBillingCycle === "annually" ? "bg-white shadow-sm" : ""
                }`}
                onClick={() => onClickBillingCycle("annually")}
              >
                Yıllık <span className="text-green-600">%15 İndirim</span>
              </button>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold mb-1">
                {selectedBillingCycle === "monthly"
                  ? `${currentPlan.price} ₺`
                  : `${Math.round(Number(currentPlan.price) * 0.85 * 12)} ₺`}
                <span className="text-sm font-normal text-muted-foreground">
                  {selectedBillingCycle === "monthly" ? "/ay" : "/yıl"}
                </span>
              </div>
              {selectedBillingCycle === "annually" && (
                <div className="text-sm text-green-600">%15 indirim uygulandı</div>
              )}
            </div>
            
            <Button className="w-full mb-4">Hemen Başlayın</Button>
            
            <div className="text-xs text-center text-muted-foreground">
              Ödeme yapmadan önce kullanım şartlarını okuyunuz
            </div>
          </div>
        </div>

        {/* Plan Karşılaştırma */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium mb-6">Diğer Planlarla Karşılaştırın</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/odeme/starter">
            <div className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full border-2 ${currentPlan.name === "Başlangıç" ? "border-primary" : "border-transparent bg-white"}`}>
              <div className="text-center mb-4">
                <h3 className="text-xl font-medium mb-1">Başlangıç</h3>
                <div className="text-2xl font-bold">299 ₺<span className="text-sm font-normal text-muted-foreground">/ay</span></div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>5 pazaryeri entegrasyonu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>1000 ürüne kadar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>E-mail destek</span>
                </li>
              </ul>
            </div>
          </Link>
          
          <Link href="/odeme/pro">
            <div className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full border-2 ${currentPlan.name === "Pro" ? "border-primary" : "border-transparent bg-white"}`}>
              <div className="text-center mb-4">
                <h3 className="text-xl font-medium mb-1">Pro</h3>
                <div className="text-2xl font-bold">599 ₺<span className="text-sm font-normal text-muted-foreground">/ay</span></div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>10 pazaryeri entegrasyonu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>5000 ürüne kadar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Yapay zeka destekli optimizasyon</span>
                </li>
              </ul>
            </div>
          </Link>
          
          <Link href="/odeme/enterprise">
            <div className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full border-2 ${currentPlan.name === "Enterprise" ? "border-primary" : "border-transparent bg-white"}`}>
              <div className="text-center mb-4">
                <h3 className="text-xl font-medium mb-1">Enterprise</h3>
                <div className="text-2xl font-bold">1299 ₺<span className="text-sm font-normal text-muted-foreground">/ay</span></div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sınırsız pazaryeri entegrasyonu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sınırsız ürün</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>7/24 öncelikli destek</span>
                </li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 