"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useTheme } from "next-themes";

// Swiper CSS
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './hero-slider.css';

export default function HeroSlider() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const textSwiperRef = useRef<any>(null);
  const imageSwiperRef = useRef<any>(null);

  // Text slider içeriği
  const textSlides = [
    {
      title: "Tüm Pazaryerlerini <span class='text-primary'>Tek Ekrandan</span> Yönetin",
      description: "PazarSync ile e-ticaret operasyonlarınızı basitleştirin. <strong>İstediğiniz web sitesinden ürün çekip, dilediğiniz pazaryerine yükleyin.</strong> Stok ve fiyat güncellemelerinizi tek bir platformdan yönetin.",
      buttons: [
        { text: "Ücretsiz Deneyin", href: "/fiyatlar", variant: "primary" },
        { text: "Entegrasyonları Keşfedin", href: "/entegrasyonlar", variant: "outline" }
      ]
    },
    {
      title: "<span class='text-primary'>Web Sitelerinden</span> Ürün Çekin",
      description: "İstediğiniz herhangi bir web sitesinden ürün bilgilerini otomatik olarak çekebilirsiniz. Ürünleri tek tıkla kendi e-ticaret sisteminize entegre edin.",
      buttons: [
        { text: "Nasıl Çalışır?", href: "/entegrasyonlar", variant: "primary" },
        { text: "Fiyatları İnceleyin", href: "/fiyatlar", variant: "outline" }
      ]
    },
    {
      title: "Güçlü <span class='text-primary'>Pazaryeri Entegrasyonları</span>",
      description: "Trendyol, Hepsiburada, n11, Amazon ve daha fazlası. Tüm büyük pazaryerlerine sorunsuz entegrasyon sağlayın ve satışlarınızı artırın.",
      buttons: [
        { text: "Entegrasyonları Keşfedin", href: "/entegrasyonlar", variant: "primary" },
        { text: "Demo İsteyin", href: "/iletisim", variant: "outline" }
      ]
    }
  ];

  // Görsel slider içeriği
  const imageSlides = [
    {
      image: theme === "dark" ? "/images/dashboard-screenshot-darkmode.webp" : "/images/dashboard-screenshot.webp",
      alt: "PazarSync Dashboard",
      badge: "İstediğiniz siteden ürün çekin"
    },
    {
      image: theme === "dark" ? "/images/dashboard-screenshot-darkmode.webp" : "/images/product-sync.webp",
      alt: 'Stok ve Sipariş Senkronizasyonu',
      badge: 'Daha Fazla Bilgi'
    },
    {
      image: theme === "dark" ? "/images/dashboard-screenshot-darkmode.webp" : "/images/marketplace-integration.webp",
      alt: 'Pazaryeri Entegrasyonları',
      badge: 'Entegrasyonları Gör'
    }
  ];

  // Slide change handler - useCallback ile optimize edildi
  const handleSlideChange = useCallback((swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    
    // Senkronize diğer slider
    if (swiper === textSwiperRef.current && imageSwiperRef.current) {
      imageSwiperRef.current.slideTo(swiper.activeIndex);
    } else if (swiper === imageSwiperRef.current && textSwiperRef.current) {
      textSwiperRef.current.slideTo(swiper.activeIndex);
    }
  }, []);

  // Image error handler
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const alt = target.alt || "Placeholder";
    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='32' viewBox='0 0 96 32' fill='none'%3E%3Crect width='96' height='32' rx='4' fill='%23f1f5f9'/%3E%3Ctext x='48' y='20' font-family='Arial' font-size='12' text-anchor='middle' fill='%23475569'%3E${alt}%3C/text%3E%3C/svg%3E`;
  }, []);

  return (
    <section
      className="hero-slider-container w-full flex flex-col justify-center bg-white dark:bg-[#18181b] text-gray-900 dark:text-white min-h-[600px] md:min-h-[700px] relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 hero-gradient-overlay z-10"></div>
      </div>

      <div className="relative z-20 flex flex-col lg:flex-row w-full hero-slider-container">
        {/* Metin slider - Sol taraf / Üst taraf (mobil) - Mobil için order-2 */}
        <div className="w-full lg:w-1/2 flex items-center relative z-20 order-2 lg:order-1">
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-12 py-12 sm:py-16 lg:py-20 xl:py-32">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper: any) => (textSwiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              className="w-full"
              pagination={{
                clickable: true,
                el: '.custom-pagination',
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active',
              }}
              touchStartPreventDefault={false}
              allowTouchMove={true}
              spaceBetween={0}
              slidesPerView={1}
            >
              {textSlides.map((slide, index) => (
                <SwiperSlide key={`text-slide-${index}`}>
                  <div className="space-y-4 sm:space-y-6">
                    <h1 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-tight text-gray-900 dark:text-white"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    ></h1>
                    <p 
                      className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-lg" 
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    ></p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                      {slide.buttons.map((button, buttonIndex) => (
                        <Link key={buttonIndex} href={button.href}>
                          <Button 
                            size="lg" 
                            variant={button.variant === "outline" ? "outline" : "default"}
                            className={`w-full sm:w-auto ${button.variant === "outline" ? "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                          >
                            {button.text}
                          </Button>
                        </Link>
                      ))}
                    </div>
                    
                    {index === 0 && (
                      <div className="pt-6">
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-4">
                          Desteklenen Pazaryerleri
                        </p>
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                          <div className="h-6 w-20 sm:h-8 sm:w-24 relative">
                            <Image
                              src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/trendyol-dark2.svg" : "/marketplace-logos/trendyol.svg"}
                              alt="Trendyol"
                              fill
                              sizes="(max-width: 640px) 80px, 96px"
                              className="object-contain"
                              priority={true}
                              onError={handleImageError}
                            />
                          </div>
                          <div className="h-6 w-20 sm:h-8 sm:w-24 relative">
                            <Image
                              src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/hepsiburada-dark.svg" : "/marketplace-logos/hepsiburada.svg"}
                              alt="Hepsiburada"
                              fill
                              sizes="(max-width: 640px) 80px, 96px"
                              className="object-contain"
                              onError={handleImageError}
                            />
                          </div>
                          <div className="h-6 w-20 sm:h-8 sm:w-24 relative">
                            <Image
                              src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/shopify-dark.svg" : "/marketplace-logos/shopify.svg"}
                              alt="Shopify"
                              fill
                              sizes="(max-width: 640px) 80px, 96px"
                              className="object-contain"
                              onError={handleImageError}
                            />
                          </div>
                          <div className="h-6 w-20 sm:h-8 sm:w-24 relative">
                            <Image
                              src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/ikas-dark.svg" : "/marketplace-logos/ikas.svg"}
                              alt="İkas"
                              fill
                              sizes="(max-width: 640px) 80px, 96px"
                              className="object-contain"
                              onError={handleImageError}
                            />
                          </div>
                          <div className="h-6 w-20 sm:h-8 sm:w-24 relative">
                            <Image
                              src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/etsy-dark.svg" : "/marketplace-logos/etsy.svg"}
                              alt="Etsy"
                              fill
                              sizes="(max-width: 640px) 80px, 96px"
                              className="object-contain"
                              onError={handleImageError}
                            />
                          </div>
                          <div className="h-6 w-20 sm:h-8 sm:w-24 relative">
                            <Image
                              src={theme === "dark" ? "/marketplace-logos/dark-mode-logos/amazon-for-dark-mode.svg" : "/marketplace-logos/amazon-for-light-mode.svg"}
                              alt="Amazon"
                              fill
                              sizes="(max-width: 640px) 80px, 96px"
                              className="object-contain"
                              onError={handleImageError}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Pagination */}
            <div className="custom-pagination mt-8 flex justify-center lg:justify-start"></div>
          </div>
        </div>

        {/* Görsel slider - Sağ taraf / Alt taraf (mobil) - Mobil için order-1 */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center order-1 lg:order-2">
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-12 py-12 lg:py-20 xl:py-32">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper: any) => (imageSwiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              className="w-full"
              touchStartPreventDefault={false}
              allowTouchMove={true}
              spaceBetween={0}
              slidesPerView={1}
            >
              {imageSlides.map((slide, index) => (
                <SwiperSlide key={`image-slide-${index}`}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-full max-w-lg mx-auto">
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                          priority={index === 0}
                          onError={handleImageError}
                        />
                        {slide.badge && (
                          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                            {slide.badge}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
} 