"use client";

import { BarChart, TrendingUp, Clock, CheckCircle } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: BarChart,
    value: 77,
    suffix: "%",
    text: "Düzenli kullanıcılarının %77'lik bölümünde yıllık bazda ciro artışı sağlanmıştır",
  },
  {
    icon: TrendingUp,
    value: 208,
    suffix: "%",
    text: "İlk günden bugüne birlikte olduğu kullanıcılarında ortalama %208 ciro artışı sağlanmıştır",
  },
  {
    icon: Clock,
    value: 93.6,
    decimals: 1,
    text: "Ortalama ürün ve mağaza sayısına sahip bir kullanıcıya yılda 93,6 gün zaman tasarrufu sağlanmıştır",
  },
  {
    icon: CheckCircle,
    value: 100,
    suffix: "%",
    text: "Belirlediğiniz kurallara göre %100 ürün güncelleme doğruluğu sağlar",
  },
];

export function HomeStats() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Arka plan renk geçişi */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5"></div>
      
      <div className="relative z-10 container px-4 md:px-6">
        {/* Başlık */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Rakamlarla PazarSync
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Binlerce kullanıcımızın deneyimlerinden elde ettiğimiz başarı oranları
          </p>
        </div>

        {/* İstatistik kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:-translate-y-1"
              >
                <div className="mb-4 text-primary bg-primary/10 p-4 rounded-full">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">
                  <CountUp end={stat.value} duration={3} decimals={stat.decimals || 0} />
                  {stat.suffix}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
