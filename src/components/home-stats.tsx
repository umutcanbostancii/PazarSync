export function HomeStats() {
  const stats = [
    { number: "%77", text: "Düzenli kullanıcılarının %77'lik bölümünde yıllık bazda ciro artışı sağlanmıştır" },
    { number: "%208", text: "İlk günden bugüne birlikte olduğu kullanıcılarında ortalama %208 ciro artışı sağlanmıştır" },
    { number: "93,6", text: "Ortalama ürün ve mağaza sayısına sahip bir kullanıcıya yılda 93,6 gün zaman tasarrufu sağlanmıştır" },
    { number: "%100", text: "Belirlediğiniz kurallara göre %100 ürün güncelleme doğruluğu sağlar" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-muted-foreground text-sm">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
