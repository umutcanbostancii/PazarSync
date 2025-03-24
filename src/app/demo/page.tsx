import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DemoPage() {
  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6">Ücretsiz Demo</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            PazarSync&apos;in güçlü özelliklerini keşfedin. 14 gün boyunca tüm özellikleri ücretsiz olarak kullanabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-light mb-6">Neden PazarSync Demosunu Denemeliyim?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Kolay Kullanım</h3>
                  <p className="text-muted-foreground">
                    Kullanıcı dostu arayüzümüz sayesinde teknik bilgiye gerek kalmadan tüm e-ticaret operasyonlarınızı yönetebilirsiniz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Hızlı Entegrasyon</h3>
                  <p className="text-muted-foreground">
                    Dakikalar içinde tüm e-ticaret kanallarınızı entegre edin ve hemen ürünlerinizi listelemeye başlayın.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Yapay Zeka Desteği</h3>
                  <p className="text-muted-foreground">
                    Yapay zeka teknolojimiz ile ürün verilerini otomatik olarak optimize edin ve satışlarınızı artırın.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[400px]">
            <Image
              src="/images/dashboard-screenshot.png"
              alt="PazarSync Dashboard Demo"
              fill
              className="object-cover rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-light mb-6 text-center">Demo Talebinde Bulunun</h2>
          <form className="max-w-3xl mx-auto space-y-8">
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
              <label htmlFor="interest" className="block text-sm font-medium mb-2">
                İlgilendiğiniz Özellikler
              </label>
              <select
                id="interest"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              >
                <option value="">Seçiniz</option>
                <option value="marketplace">Pazaryeri Entegrasyonları</option>
                <option value="product-data">Ürün Veri Çıkarma ve Optimizasyonu</option>
                <option value="ai">Yapay Zeka Desteği</option>
                <option value="all">Tüm Özellikler</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Notlar veya Sorular
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
                Demo Talebinde Bulun
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
