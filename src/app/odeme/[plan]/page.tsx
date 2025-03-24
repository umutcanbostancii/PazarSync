"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

// Planlar burada tanımlanmış, bunlar statik export için kullanılacak
export const plans = {
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
    ]
  }
};

type PaymentMethod = "creditCard" | "bankTransfer" | "paypal";
type BillingCycle = "monthly" | "yearly";

export default function OdemePage() {
  const params = useParams();
  const planId = params?.plan as string || "starter";

  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("creditCard");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const plan = plans[planId as keyof typeof plans] || plans.starter;

  if (planId === "enterprise") {
    return (
      <div className="container-wide py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6">Kurumsal Plan Talebi</h1>
            <p className="text-muted-foreground text-lg">
              Kurumsal plan için size özel teklif hazırlayalım. Lütfen bilgilerinizi bırakın, uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="ornek@sirket.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Şirket Adı
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Şirket Adınız"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefon Numarası
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Notlar veya Özel İhtiyaçlarınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Özel talepleriniz veya sorularınız..."
                ></textarea>
              </div>

              <div className="flex justify-center">
                <Button type="submit" className="clean-button px-8">
                  Teklif Talebinde Bulun
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Ödemeniz başarıyla tamamlandı! Yönlendiriliyorsunuz...");
      
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }, 2000);
  };
  
  const calculatePrice = () => {
    const basePrice = parseInt(plan.price);
    if (billingCycle === "yearly") {
      return (basePrice * 12 * 0.85).toFixed(0);
    }
    return basePrice;
  };

  return (
    <div className="container-wide py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6">Ödeme</h1>
          <p className="text-muted-foreground text-lg">
            {plan.name} paketiniz için ödeme detaylarını tamamlayın.
          </p>
        </div>

        {successMessage ? (
          <div className="bg-green-50 p-8 rounded-xl shadow-sm text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-medium mb-4">Tebrikler!</h2>
            <p className="text-lg mb-2">{successMessage}</p>
            <p className="text-muted-foreground">E-posta adresinize detaylı bilgiler gönderildi.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-medium mb-6">Ödeme Bilgileri</h2>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Fatura Dönemi</h3>
                  <div className="flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => setBillingCycle("monthly")}
                      className={`px-4 py-3 border rounded-lg flex-1 ${
                        billingCycle === "monthly" 
                          ? "border-primary bg-primary/5 text-primary" 
                          : "border-gray-300"
                      }`}
                    >
                      Aylık
                    </button>
                    <button
                      type="button"
                      onClick={() => setBillingCycle("yearly")}
                      className={`px-4 py-3 border rounded-lg flex-1 ${
                        billingCycle === "yearly" 
                          ? "border-primary bg-primary/5 text-primary" 
                          : "border-gray-300"
                      }`}
                    >
                      Yıllık (15% indirim)
                    </button>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Ödeme Yöntemi</h3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("creditCard")}
                      className={`px-4 py-3 border rounded-lg flex-1 ${
                        paymentMethod === "creditCard" 
                          ? "border-primary bg-primary/5 text-primary" 
                          : "border-gray-300"
                      }`}
                    >
                      Kredi Kartı
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("bankTransfer")}
                      className={`px-4 py-3 border rounded-lg flex-1 ${
                        paymentMethod === "bankTransfer" 
                          ? "border-primary bg-primary/5 text-primary" 
                          : "border-gray-300"
                      }`}
                    >
                      Banka Havalesi
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("paypal")}
                      className={`px-4 py-3 border rounded-lg flex-1 ${
                        paymentMethod === "paypal" 
                          ? "border-primary bg-primary/5 text-primary" 
                          : "border-gray-300"
                      }`}
                    >
                      PayPal
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-posta Adresiniz
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="ornek@sirket.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Şirket Adı
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Şirket Adınız"
                    />
                  </div>

                  {paymentMethod === "creditCard" && (
                    <>
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">
                          Kart Numarası
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium mb-2">
                            Son Kullanma Tarihi
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            placeholder="AA/YY"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvc" className="block text-sm font-medium mb-2">
                            CVC
                          </label>
                          <input
                            type="text"
                            id="cvc"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {paymentMethod === "bankTransfer" && (
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <h4 className="font-medium mb-2">Banka Transfer Bilgileri</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Aşağıdaki banka hesabına ödemenizi yapabilirsiniz. Ödemenizi yaptıktan sonra işleminiz manuel olarak onaylanacaktır.
                      </p>
                      <div className="text-sm">
                        <p><strong>Banka:</strong> PazarSync Bank</p>
                        <p><strong>IBAN:</strong> TR00 0000 0000 0000 0000 0000 00</p>
                        <p><strong>Hesap Adı:</strong> PazarSync Yazılım Ltd. Şti.</p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center mt-8">
                    <Button 
                      type="submit" 
                      className="clean-button px-8" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "İşleminiz Gerçekleştiriliyor..." : "Ödemeyi Tamamla"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                <h3 className="text-xl font-medium mb-4">Sipariş Özeti</h3>
                
                <div className="border-t border-b py-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>{plan.name} Paketi</span>
                    <span>{calculatePrice()} TL</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {billingCycle === "monthly" ? "Aylık faturalandırma" : "Yıllık faturalandırma (%15 indirimli)"}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between font-medium">
                    <span>Toplam</span>
                    <span>{calculatePrice()} TL</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {billingCycle === "monthly" ? "Aylık ödeme" : "Yıllık ödeme (peşin)"}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Paket İçeriği</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 text-center">
                  <Link href="/fiyatlar">
                    <Button variant="outline" className="w-full">
                      Fiyat Karşılaştırması
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { plan: "starter" },
    { plan: "pro" },
    { plan: "enterprise" }
  ];
} 