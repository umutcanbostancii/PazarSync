"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useTheme } from "next-themes";

// Swiper CSS
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PageHeroSliderProps {
  title: string;
  description: string;
  slides: {
    type: 'image' | 'video';
    src: string;
    alt: string;
    badge?: string;
  }[];
  ctaButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function PageHeroSlider({ 
  title, 
  description, 
  slides, 
  ctaButton,
  secondaryButton 
}: PageHeroSliderProps) {
  const { theme } = useTheme();
  const [textActiveIndex, setTextActiveIndex] = useState(0);
  const [imageActiveIndex, setImageActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const textSwiperRef = useRef(null);
  const imageSwiperRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Text slider içeriği - her slide için aynı metin kullanılacak
  const textSlides = slides.map(() => ({
    title,
    description,
    buttons: [
      ...(ctaButton ? [{ text: ctaButton.text, href: ctaButton.href, variant: "primary" as const }] : []),
      ...(secondaryButton ? [{ text: secondaryButton.text, href: secondaryButton.href, variant: "outline" as const }] : [])
    ]
  }));

  // Metin sliderın değişimini izle ve görsel sliderını da güncelle
  const handleTextSlideChange = (swiper: SwiperType) => {
    setTextActiveIndex(swiper.activeIndex);
    
    if (imageSwiperRef.current && swiper.activeIndex !== imageActiveIndex) {
      imageSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };
  
  // Görsel sliderının değişimini izle ve metin sliderını da güncelle
  const handleImageSlideChange = (swiper: SwiperType) => {
    setImageActiveIndex(swiper.activeIndex);
    
    if (textSwiperRef.current && swiper.activeIndex !== textActiveIndex) {
      textSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };

  // Image error handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const alt = target.alt || "Placeholder";
    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='32' viewBox='0 0 96 32' fill='none'%3E%3Crect width='96' height='32' rx='4' fill='%23f1f5f9'/%3E%3Ctext x='48' y='20' font-family='Arial' font-size='12' text-anchor='middle' fill='%23475569'%3E${alt}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <section className="page-hero-slider-container w-full flex flex-col justify-center bg-white dark:bg-[#18181b] text-gray-900 dark:text-white min-h-[600px] md:min-h-[700px] relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 hero-gradient-overlay z-10"></div>
      </div>

      <div className="relative z-20 flex flex-col lg:flex-row w-full page-hero-slider-container">
        {/* Metin slider - Sol taraf / Üst taraf (mobil) */}
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
              onSwiper={(swiper: SwiperType) => (textSwiperRef.current = swiper)}
              onSlideChange={handleTextSlideChange}
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
                    
                    {slide.buttons.length > 0 && (
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
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Pagination */}
            <div className="custom-pagination mt-8 flex justify-center lg:justify-start"></div>
          </div>
        </div>

        {/* Görsel slider - Sağ taraf / Alt taraf (mobil) */}
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
              onSwiper={(swiper: SwiperType) => (imageSwiperRef.current = swiper)}
              onSlideChange={handleImageSlideChange}
              className="w-full"
              allowTouchMove={true}
              touchStartPreventDefault={false}
              spaceBetween={0}
              slidesPerView={1}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={`image-slide-${index}`}>
                  <div className="relative bg-card/30 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                    {slide.badge && (
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                        <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
                          {slide.badge}
                        </span>
                      </div>
                    )}
                    <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] relative">
                      {slide.type === 'video' ? (
                        <video
                          src={slide.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={handleImageError}
                        />
                      )}
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