"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "/images/automation-illustration Large.webp",
    title: "Ürün Otomasyonu",
    description: "Tek tıkla binlerce ürünü dilediğiniz siteden çekin, yapay zeka ile zenginleştirin ve mağazanızda yayınlayın.",
    href: "/urun-cekme-yukleme",
  },
  {
    image: "/images/ecommerce-illustration.webp",
    title: "E-Ticaret Kurulumu",
    description: "Shopify, WooCommerce veya size özel altyapılarla, satışa hazır profesyonel e-ticaret sitenizi 3 günde teslim edelim.",
    href: "/eticaret-kurulumu",
  },
  {
    image: "/images/ai-creative-illustration.webp",
    title: "AI Kreatif Üretimi",
    description: "Markanız için dikkat çekici görseller, videolar ve metinler üretin. Rakiplerinizden sıyrılın, satışlarınızı artırın.",
    href: "/ai-kreatif",
  },
];

export function HomeServices() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Hizmetlerimiz
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            İşinizi Geleceğe Taşıyın
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            E-ticarette başarının anahtarı olan otomasyon, profesyonel kurulum ve yapay zeka destekli kreatif çözümlerimizle tanışın.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              href={service.href}
              key={service.title}
              className="group block rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="flex items-center font-semibold text-primary">
                  Detaylı Bilgi
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 