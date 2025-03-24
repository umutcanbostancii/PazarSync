"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function EntegrasyonlarPage() {
  const [openDialog, setOpenDialog] = useState(null);

  const marketplaces = [
    { name: "Trendyol", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Trendyol_logo.svg/2560px-Trendyol_logo.svg.png" },
    { name: "Hepsiburada", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada-logo.svg/2560px-Hepsiburada-logo.svg.png" },
    { name: "n11", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/N11.com_logo.svg/1200px-N11.com_logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
    { name: "Çiçek Sepeti", logo: "https://upload.wikimedia.org/wikipedia/tr/archive/4/48/20220102210840%21Ciceksepeti_logo.png" },
    { name: "GittiGidiyor", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/GittiGidiyor_logo.png/1200px-GittiGidiyor_logo.png" },
    { name: "Pttavm", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/PTT_AVM_logo.png" },
    { name: "Morhipo", logo: "https://play-lh.googleusercontent.com/zf0azSS7fDMpjnA_eZ78U8mZoYXAS0F4Mqy9fOxUSg9p86fNNamiQ_ZIdU8c2R38iA" },
  ];

  const ecommercePlatforms = [
    { name: "WooCommerce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png" },
    { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" },
    { name: "Magento", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magento_Logo.svg/2560px-Magento_Logo.svg.png" },
    { name: "PrestaShop", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/PrestaShop_logo_%282022%29.svg/1200px-PrestaShop_logo_%282022%29.svg.png" },
    { name: "OpenCart", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/OpenCart_logo.svg/2560px-OpenCart_logo.svg.png" },
    { name: "Wix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wix.com_website_logo.svg/2560px-Wix.com_website_logo.svg.png" },
    { name: "Etsy", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/2560px-Etsy_logo.svg.png" },
    { name: "Squarespace", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Squarespace_Logo_%282019%29.svg/1200px-Squarespace_Logo_%282019%29.svg.png" },
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6">Entegrasyonlar</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            PazarSync ile popüler e-ticaret pazaryerlerine ve platformlara sorunsuz entegrasyon sağlayın.
            <strong className="text-primary block mt-2">
              İstediğiniz web sitesinden ürün çekip, istediğiniz platforma yükleyebilirsiniz!
            </strong>
          </p>
        </div>

        <div className="space-y-12">
          <div className="p-8 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Pazaryeri Entegrasyonları</h2>
            <p className="text-muted-foreground mb-6">
              Trendyol, Hepsiburada, N11, Amazon, Çiçek Sepeti ve daha fazlası ile entegre olun. Ürünlerinizi tüm pazaryerlerinde tek bir platformdan yönetin ve yeni ürünleri kolayca ekleyin.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {marketplaces.map((marketplace) => (
                <div key={marketplace.name} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg h-32">
                  <div className="w-20 h-20 mb-2 relative flex items-center justify-center">
                    <Image 
                      src={marketplace.logo} 
                      alt={marketplace.name} 
                      width={80} 
                      height={80}
                      className="object-contain"
                      onError={(e) => {
                        // @ts-ignore
                        e.target.onerror = null; // Sonsuz döngüyü engelle
                        // @ts-ignore
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24' fill='none' stroke='%230066cc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Cpath d='M9 3v18'/%3E%3Cpath d='M15 3v18'/%3E%3Cpath d='M3 9h18'/%3E%3Cpath d='M3 15h18'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium">{marketplace.name}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setOpenDialog("marketplace")}
              className="inline-flex items-center text-primary"
            >
              Daha fazla bilgi <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-medium mb-4">E-Ticaret Platformu Entegrasyonları</h2>
            <p className="text-muted-foreground mb-6">
              WooCommerce, Shopify, Magento ve diğer e-ticaret platformları ile entegre olun. <strong>İstediğiniz web sitesinden ürün çekip</strong> kendi web sitenizi ve diğer pazaryerlerini senkronize edin.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {ecommercePlatforms.map((platform) => (
                <div key={platform.name} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg h-32">
                  <div className="w-20 h-20 mb-2 relative flex items-center justify-center">
                    <Image 
                      src={platform.logo} 
                      alt={platform.name} 
                      width={80} 
                      height={80}
                      className="object-contain"
                      onError={(e) => {
                        // @ts-ignore
                        e.target.onerror = null; // Sonsuz döngüyü engelle
                        // @ts-ignore
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24' fill='none' stroke='%230066cc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Cpath d='M9 3v18'/%3E%3Cpath d='M15 3v18'/%3E%3Cpath d='M3 9h18'/%3E%3Cpath d='M3 15h18'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium">{platform.name}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setOpenDialog("ecommerce")}
              className="inline-flex items-center text-primary"
            >
              Daha fazla bilgi <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Geliştirilmekte Olan Özellikler</h2>
            <p className="text-muted-foreground mb-6">
              PazarSync&apos;i sürekli geliştiriyoruz! Yakında eklenecek olan özellikleri takipte kalın.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Stok takibi (Geliştirme aşamasında)</li>
              <li>Sipariş yönetimi (Çok yakında)</li>
              <li>Muhasebe yazılımı entegrasyonları (Planlama aşamasında)</li>
              <li>ERP entegrasyonları (Planlama aşamasında)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/fiyatlar">
            <Button className="clean-button">
              Hemen Başlayın
            </Button>
          </Link>
        </div>
      </div>

      {/* Pazaryeri Entegrasyonları Detay Dialog */}
      <Dialog open={openDialog === "marketplace"} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium mb-2">
              Pazaryeri Entegrasyonları Detayları
            </DialogTitle>
            <DialogDescription>
              PazarSync ile tüm büyük pazaryerleri arasında kesintisiz ürün senkronizasyonu
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <p>
              PazarSync, Türkiye&apos;nin ve dünyanın en popüler e-ticaret pazaryerleriyle tam entegrasyon sağlar. Ürünlerinizi sadece bir kez tanımlayarak tüm pazaryerlerinde otomatik olarak listeleyebilirsiniz.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Öne Çıkan Özellikler:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>İstediğiniz web sitesinden ürün çekme:</strong> Herhangi bir web sitesindeki ürünleri otomatik olarak çekip kendi listenize ekleyebilirsiniz.</li>
                <li><strong>Toplu ürün yükleme:</strong> Binlerce ürünü aynı anda farklı pazaryerlerine yükleyebilirsiniz.</li>
                <li><strong>Otomatik fiyat güncelleme:</strong> Tek bir yerden fiyat değişikliği yaparak tüm pazaryerlerinde anında güncelleyin.</li>
                <li><strong>Stok senkronizasyonu:</strong> Geliştirilmekte olan stok takibi ile stok durumunuz tüm platformlarda otomatik güncellenecek.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Desteklenen Pazaryerleri:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {marketplaces.map((marketplace) => (
                  <div key={marketplace.name} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 mb-2 relative flex items-center justify-center">
                      <Image 
                        src={marketplace.logo} 
                        alt={marketplace.name} 
                        width={48} 
                        height={48}
                        className="object-contain"
                        onError={(e) => {
                          // @ts-ignore
                          e.target.onerror = null; // Sonsuz döngüyü engelle
                          // @ts-ignore
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%230066cc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Cpath d='M9 3v18'/%3E%3Cpath d='M15 3v18'/%3E%3Cpath d='M3 9h18'/%3E%3Cpath d='M3 15h18'/%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium">{marketplace.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="font-medium text-primary">
              ...ve daha fazlası! Sürekli büyüyen entegrasyon ağımız ile istediğiniz her pazaryerine ürünlerinizi kolayca satışa sunabilirsiniz.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* E-Ticaret Platformu Entegrasyonları Detay Dialog */}
      <Dialog open={openDialog === "ecommerce"} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium mb-2">
              E-Ticaret Platformu Entegrasyonları Detayları
            </DialogTitle>
            <DialogDescription>
              Kendi e-ticaret sitenizi diğer tüm kanallarla senkronize edin
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <p>
              PazarSync, kendi web siteniz ile pazaryerleri arasında çift yönlü entegrasyon sağlar. En popüler e-ticaret altyapılarıyla uyumlu çalışan PazarSync, her platformdan veri çekme ve gönderme yeteneğine sahiptir.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Ana Özellikler:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>İstediğiniz web sitesinden veri çekme:</strong> Herhangi bir web sitesindeki ürünleri otomatik olarak kendi sisteminize dahil edebilirsiniz.</li>
                <li><strong>Kolay veri aktarımı:</strong> Web sitenizde yaptığınız güncellemeler diğer platformlara, ya da diğer platformlardaki değişiklikler web sitenize otomatik yansıtılabilir.</li>
                <li><strong>Kolay kurulum:</strong> Birkaç dakika içinde kurulumu tamamlayıp hemen kullanmaya başlayabilirsiniz.</li>
                <li><strong>Özel API desteği:</strong> İhtiyacınıza göre özel API entegrasyonları geliştirebiliriz.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Desteklenen E-Ticaret Platformları:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {ecommercePlatforms.map((platform) => (
                  <div key={platform.name} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 mb-2 relative flex items-center justify-center">
                      <Image 
                        src={platform.logo} 
                        alt={platform.name} 
                        width={48} 
                        height={48}
                        className="object-contain"
                        onError={(e) => {
                          // @ts-ignore
                          e.target.onerror = null; // Sonsuz döngüyü engelle
                          // @ts-ignore
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%230066cc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Cpath d='M9 3v18'/%3E%3Cpath d='M15 3v18'/%3E%3Cpath d='M3 9h18'/%3E%3Cpath d='M3 15h18'/%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-primary font-medium">
              Diğer platformlar için API entegrasyonu sunabiliyoruz. Özel ihtiyaçlarınız için bizimle iletişime geçin!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
