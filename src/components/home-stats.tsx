import { BarChart, TrendingUp, Clock, CheckCircle } from "lucide-react";

export function HomeStats() {
  const stats = [
    { number: "%77", text: "Düzenli kullanıcılarının %77'lik bölümünde yıllık bazda ciro artışı sağlanmıştır" },
    { number: "%208", text: "İlk günden bugüne birlikte olduğu kullanıcılarında ortalama %208 ciro artışı sağlanmıştır" },
    { number: "93,6", text: "Ortalama ürün ve mağaza sayısına sahip bir kullanıcıya yılda 93,6 gün zaman tasarrufu sağlanmıştır" },
    { number: "%100", text: "Belirlediğiniz kurallara göre %100 ürün güncelleme doğruluğu sağlar" }
  ];

  const icons = [
    <BarChart className="mx-auto mb-2 text-primary" size={24} />,
    <TrendingUp className="mx-auto mb-2 text-primary" size={24} />,
    <Clock className="mx-auto mb-2 text-primary" size={24} />,
    <CheckCircle className="mx-auto mb-2 text-primary" size={24} />
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-wide px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-card p-4 md:p-6 rounded-xl border border-border">
              <div className="mb-3">
                {icons[index]}
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 md:mb-3">{stat.number}</p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
