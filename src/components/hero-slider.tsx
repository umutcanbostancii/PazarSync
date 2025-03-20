"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './hero-slider.css';

export default function HeroSlider() {
  const [textActiveIndex, setTextActiveIndex] = useState(0);
  const [imageActiveIndex, setImageActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const textSwiperRef = useRef<SwiperType | null>(null);
  const imageSwiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Sayfa yüklendiğinde animasyonları etkinleştir
    setIsLoaded(true);
  }, []);

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
      image: "/images/dashboard-screenshot.png",
      alt: "PazarSync Dashboard",
      badge: "İstediğiniz siteden ürün çekin"
    },
    {
      image: "/images/product-sync.jpg",
      alt: "Ürün Senkronizasyonu",
      badge: "Otomatik senkronizasyon"
    },
    {
      image: "/images/marketplace-integration.jpg",
      alt: "Pazaryeri Entegrasyonu",
      badge: "10+ Pazaryeri Entegrasyonu"
    }
  ];

  // Metin sliderın değişimini izle ve görsel sliderını da güncelle
  const handleTextSlideChange = (swiper: SwiperType) => {
    setTextActiveIndex(swiper.activeIndex);
    
    // Görsel sliderını metin sliderı ile senkronize et
    if (imageSwiperRef.current && swiper.activeIndex !== imageActiveIndex) {
      imageSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };
  
  // Görsel sliderının değişimini izle ve metin sliderını da güncelle
  const handleImageSlideChange = (swiper: SwiperType) => {
    setImageActiveIndex(swiper.activeIndex);
    
    // Metin sliderını görsel sliderı ile senkronize et
    if (textSwiperRef.current && swiper.activeIndex !== textActiveIndex) {
      textSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };

  return (
    <section className={`relative w-full overflow-hidden bg-gradient-to-b from-secondary/30 to-background ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 hero-gradient-overlay z-10"></div>
      </div>

      <div className="relative z-20 flex flex-col lg:flex-row w-full hero-slider-container">
        {/* Metin slider - Sol taraf */}
        <div className="w-full lg:w-1/2 flex items-center relative z-20">
          <div className="w-full max-w-3xl mx-auto px-6 lg:pr-12 py-20 lg:py-32">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => (textSwiperRef.current = swiper)}
              onSlideChange={handleTextSlideChange}
              className="w-full"
              pagination={{
                clickable: true,
                el: '.custom-pagination',
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active',
              }}
            >
              {textSlides.map((slide, index) => (
                <SwiperSlide key={`text-slide-${index}`}>
                  <div className="space-y-6">
                    <h1 className="heading-xl text-foreground" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                    <p className="text-lg text-muted-foreground max-w-lg" dangerouslySetInnerHTML={{ __html: slide.description }}></p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      {slide.buttons.map((button, buttonIndex) => (
                        <Link key={buttonIndex} href={button.href}>
                          <Button 
                            size="lg" 
                            variant={button.variant === "outline" ? "outline" : "default"}
                            className={button.variant === "outline" ? "w-full sm:w-auto no-borders" : "clean-button w-full sm:w-auto"}
                          >
                            {button.text}
                          </Button>
                        </Link>
                      ))}
                    </div>
                    
                    {index === 0 && (
                      <div className="pt-6">
                        <p className="text-sm text-muted-foreground mb-4">
                          Desteklenen Pazaryerleri
                        </p>
                        <div className="flex flex-wrap items-center gap-6">
                          <div className="h-8 w-24 relative">
                            <Image
                              src="/images/trendyol-logo.png"
                              alt="Trendyol"
                              fill
                              sizes="96px"
                              className="object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='32' viewBox='0 0 96 32' fill='none'%3E%3Crect width='96' height='32' rx='4' fill='%23f1f5f9'/%3E%3Cpath d='M48 16C48 20.4183 44.4183 24 40 24C35.5817 24 32 20.4183 32 16C32 11.5817 35.5817 8 40 8C44.4183 8 48 11.5817 48 16Z' fill='%2394a3b8'/%3E%3Cpath d='M64 16C64 20.4183 60.4183 24 56 24C51.5817 24 48 20.4183 48 16C48 11.5817 51.5817 8 56 8C60.4183 8 64 11.5817 64 16Z' fill='%23475569'/%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                          <div className="h-8 w-24 relative">
                            <Image
                              src="/images/hepsiburada-logo.png"
                              alt="Hepsiburada"
                              fill
                              sizes="96px"
                              className="object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='32' viewBox='0 0 96 32' fill='none'%3E%3Crect width='96' height='32' rx='4' fill='%23f1f5f9'/%3E%3Cpath d='M48 16C48 20.4183 44.4183 24 40 24C35.5817 24 32 20.4183 32 16C32 11.5817 35.5817 8 40 8C44.4183 8 48 11.5817 48 16Z' fill='%2394a3b8'/%3E%3Cpath d='M64 16C64 20.4183 60.4183 24 56 24C51.5817 24 48 20.4183 48 16C48 11.5817 51.5817 8 56 8C60.4183 8 64 11.5817 64 16Z' fill='%23475569'/%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                          <div className="h-8 w-16 relative">
                            <Image
                              src="/images/n11-logo.png"
                              alt="N11"
                              fill
                              sizes="64px"
                              className="object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='32' viewBox='0 0 64 32' fill='none'%3E%3Crect width='64' height='32' rx='4' fill='%23f1f5f9'/%3E%3Cpath d='M32 16C32 20.4183 28.4183 24 24 24C19.5817 24 16 20.4183 16 16C16 11.5817 19.5817 8 24 8C28.4183 8 32 11.5817 32 16Z' fill='%2394a3b8'/%3E%3Cpath d='M48 16C48 20.4183 44.4183 24 40 24C35.5817 24 32 20.4183 32 16C32 11.5817 35.5817 8 40 8C44.4183 8 48 11.5817 48 16Z' fill='%23475569'/%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                          <div className="h-8 w-20 relative">
                            <Image
                              src="/images/amazon-logo.png"
                              alt="Amazon"
                              fill
                              sizes="80px"
                              className="object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='32' viewBox='0 0 80 32' fill='none'%3E%3Crect width='80' height='32' rx='4' fill='%23f1f5f9'/%3E%3Cpath d='M40 16C40 20.4183 36.4183 24 32 24C27.5817 24 24 20.4183 24 16C24 11.5817 27.5817 8 32 8C36.4183 8 40 11.5817 40 16Z' fill='%2394a3b8'/%3E%3Cpath d='M56 16C56 20.4183 52.4183 24 48 24C43.5817 24 40 20.4183 40 16C40 11.5817 43.5817 8 48 8C52.4183 8 56 11.5817 56 16Z' fill='%23475569'/%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground hover:text-primary">
                            <Link href="/entegrasyonlar">+10 daha fazla</Link>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Özel tasarım slider pagination noktaları */}
            <div className="flex space-x-2 mt-8 custom-pagination">
              {textSlides.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all custom-bullet ${
                    index === textActiveIndex ? "custom-bullet-active w-8 bg-primary" : "w-2 bg-gray-300"
                  }`}
                  onClick={() => {
                    // Tıklandığında hem metin hem de görsel sliderlarını güncelle
                    if (textSwiperRef.current) {
                      textSwiperRef.current.slideTo(index);
                    }
                    if (imageSwiperRef.current) {
                      imageSwiperRef.current.slideTo(index);
                    }
                    setTextActiveIndex(index);
                    setImageActiveIndex(index);
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Görsel slider - Sağ taraf */}
        <div className="w-full lg:w-1/2 relative">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
            onSlideChange={handleImageSlideChange}
            className="w-full h-full"
          >
            {imageSlides.map((slide, index) => (
              <SwiperSlide key={`image-slide-${index}`} className="h-full">
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600' fill='none'%3E%3Crect width='800' height='600' fill='%23f1f5f9'/%3E%3Crect x='200' y='150' width='400' height='300' rx='8' fill='%23e2e8f0'/%3E%3Cpath d='M400 250C418.807 250 434 265.193 434 284C434 302.807 418.807 318 400 318C381.193 318 366 302.807 366 284C366 265.193 381.193 250 400 250Z' fill='%2394a3b8'/%3E%3Cpath d='M334 350H466C466 350 450 400 400 400C350 400 334 350 334 350Z' fill='%2394a3b8'/%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute bottom-8 left-8 bg-primary text-white rounded-lg p-4 shadow-lg z-10">
                    <p className="text-sm font-medium">{slide.badge}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
} 