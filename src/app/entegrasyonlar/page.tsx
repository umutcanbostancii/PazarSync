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
import { useTheme } from "next-themes";

export default function EntegrasyonlarPage() {
  const { theme } = useTheme();
  const [openDialog, setOpenDialog] = useState(null);

  const marketplaces = [
    { name: "Trendyol", logo: "/marketplace-logos/trendyol.svg", darkLogo: "/marketplace-logos/dark-mode-logos/trendyol-dark2.svg", link: "/entegrasyonlar/trendyol" },
    { name: "Hepsiburada", logo: "/marketplace-logos/hepsiburada.svg", darkLogo: "/marketplace-logos/dark-mode-logos/hepsiburada-dark.svg" },
    { name: "n11", logo: "/marketplace-logos/n11.png" },
    { name: "Amazon", logo: "/marketplace-logos/amazon-for-light-mode.svg", darkLogo: "/marketplace-logos/dark-mode-logos/amazon-for-dark-mode.svg" },
    { name: "Çiçek Sepeti", logo: "/marketplace-logos/ciceksepeti.svg" },
    { name: "Shopify", logo: "/marketplace-logos/shopify.svg", darkLogo: "/marketplace-logos/dark-mode-logos/shopify-dark.svg" },
    { name: "Pttavm", logo: "/marketplace-logos/pttavm.png" },
    { name: "Morhipo", logo: "/marketplace-logos/morhipo.svg", darkLogo: "/marketplace-logos/dark-mode-logos/Morhipo-dark.svg" },
  ];

  const ecommercePlatforms = [
    { name: "WooCommerce", logo: "/marketplace-logos/woocommerce.svg" },
    { name: "Shopify", logo: "/marketplace-logos/shopify.svg", darkLogo: "/marketplace-logos/dark-mode-logos/shopify-dark.svg" },
    { name: "Magento", logo: "/marketplace-logos/magento.svg" },
    { name: "PrestaShop", logo: "/marketplace-logos/prestashop.svg" },
    { name: "OpenCart", logo: "/marketplace-logos/opencart.png" },
    { name: "Wix", logo: "/marketplace-logos/wix.png" },
    { name: "Etsy", logo: "/marketplace-logos/etsy.svg" },
    { name: "Squarespace", logo: "/marketplace-logos/squarespace.svg" },
    { name: "BigCommerce", logo: "/marketplace-logos/bigcommerce.svg" },
    { name: "WordPress", logo: "/marketplace-logos/wordpress.svg" },
    { name: "İkas", logo: "/marketplace-logos/ikas.svg" },
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6 text-foreground">Entegrasyonlar</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            PazarSync ile popüler e-ticaret pazaryerlerine ve platformlara sorunsuz entegrasyon sağlayın.
            <strong className="text-primary block mt-2">
              İstediğiniz web sitesinden ürün çekip, istediğiniz platforma yükleyebilirsiniz!
            </strong>
          </p>
        </div>

        <div className="space-y-12">
          <div className="p-8 bg-card rounded-xl shadow-sm border border-border">
            <h2 className="text-2xl font-medium mb-4 text-card-foreground">Pazaryeri Entegrasyonları</h2>
            <p className="text-muted-foreground mb-6">
              Trendyol, Hepsiburada, N11, Amazon, Çiçek Sepeti ve daha fazlası ile entegre olun. Ürünlerinizi tüm pazaryerlerinde tek bir platformdan yönetin ve yeni ürünleri kolayca ekleyin.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {marketplaces.map((marketplace) => (
                <div key={marketplace.name} className="flex flex-col items-center justify-center p-4 bg-secondary/20 rounded-lg h-32">
                  <div className="w-20 h-20 mb-2 relative flex items-center justify-center">
                    <img 
                      src={theme === "dark" && marketplace.darkLogo ? marketplace.darkLogo : marketplace.logo} 
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
                  <span className="text-sm font-medium text-foreground">{marketplace.name}</span>
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

          <div className="p-8 bg-card rounded-xl shadow-sm border border-border">
            <h2 className="text-2xl font-medium mb-4 text-card-foreground">E-Ticaret Platformu Entegrasyonları</h2>
            <p className="text-muted-foreground mb-6">
              WooCommerce, Shopify, Magento ve diğer e-ticaret platformları ile entegre olun. <strong>İstediğiniz web sitesinden ürün çekip</strong> kendi web sitenizi ve diğer pazaryerlerini senkronize edin.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {ecommercePlatforms.map((platform) => (
                <div key={platform.name} className="flex flex-col items-center justify-center p-4 bg-secondary/20 rounded-lg h-32">
                  <div className="w-20 h-20 mb-2 relative flex items-center justify-center">
                    <img 
                      src={theme === "dark" && platform.darkLogo ? platform.darkLogo : platform.logo} 
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
                  <span className="text-sm font-medium text-foreground">{platform.name}</span>
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

          <div className="p-8 bg-card rounded-xl shadow-sm border border-border">
            <h2 className="text-2xl font-medium mb-4 text-card-foreground">Geliştirilmekte Olan Özellikler</h2>
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
          <div>
            <DialogTitle>Pazaryeri Entegrasyonları Detayları</DialogTitle>
            <DialogDescription>
              PazarSync ile tüm büyük pazaryerleri arasında kesintisiz ürün senkronizasyonu
            </DialogDescription>
            
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
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  {marketplaces.map((marketplace) => (
                    <div key={marketplace.name} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 mb-2 relative flex items-center justify-center">
                        <img 
                          src={theme === "dark" && marketplace.darkLogo ? marketplace.darkLogo : marketplace.logo} 
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
          </div>
        </DialogContent>
      </Dialog>

      {/* E-Ticaret Platformu Entegrasyonları Detay Dialog */}
      <Dialog open={openDialog === "ecommerce"} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="max-w-3xl">
          <div>
            <DialogTitle>E-Ticaret Platformu Entegrasyonları Detayları</DialogTitle>
            <DialogDescription>
              Kendi e-ticaret sitenizi diğer tüm kanallarla senkronize edin
            </DialogDescription>
            
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
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  {ecommercePlatforms.map((platform) => (
                    <div key={platform.name} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 mb-2 relative flex items-center justify-center">
                        <img 
                          src={theme === "dark" && platform.darkLogo ? platform.darkLogo : platform.logo} 
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
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
