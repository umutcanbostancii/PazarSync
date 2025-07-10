"use client";

import Image from "next/image";

const steps = [
  {
    step: 1,
    title: "Ürün Verisini Toplayın",
    description: "İstediğiniz web sitesinden, XML'den veya manuel olarak ürün verilerinizi PazarSync platformuna kolayca aktarın.",
    image: "/images/workflow-step1.webp",
  },
  {
    step: 2,
    title: "Yapay Zeka ile Optimize Edin",
    description: "Platformumuz, ürünleriniz için en uygun kategorileri bulur, başlık ve açıklamaları SEO uyumlu hale getirir ve görselleri temizler.",
    image: "/images/workflow-step2.webp",
  },
  {
    step: 3,
    title: "Pazaryerlerine Dağıtın",
    description: "Optimize edilmiş ürün verilerinizi tek tıkla Trendyol, Hepsiburada, Amazon ve diğer onlarca platforma aynı anda yükleyin.",
    image: "/images/workflow-step3 Large.webp",
  },
];

export function HomeWorkflow() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/20 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground dark:bg-primary/10 dark:text-primary-foreground">
            İş Akışı
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            PazarSync Nasıl Çalışır?
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Karmaşık e-ticaret süreçlerinizi 3 basit adımda nasıl otomatize ettiğimizi görün. Veri toplamadan pazaryeri entegrasyonuna kadar tüm süreci sizin için yönetiyoruz.
          </p>
        </div>

        <div className="relative">
          {/* Dikey Çizgi */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-border hidden md:block" aria-hidden="true" />

          <div className="grid md:grid-cols-1 gap-16">
            {steps.map((step, index) => (
              <div key={step.step} className="relative grid md:grid-cols-2 gap-8 items-center">
                {/* Görsel Bölümü */}
                <div className={`flex justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={450}
                    height={300}
                    className="rounded-2xl shadow-xl object-cover"
                  />
                </div>

                {/* Metin Bölümü */}
                <div className={`relative flex flex-col justify-center text-center md:text-left md:items-start ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} pt-12 md:pt-0 md:pl-20`}>
                  {/* Adım Numarası */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-8 md:-translate-y-1/2 bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold border-4 border-background z-10">
                    {step.step}
                  </div>
                  
                  {/* Metin İçeriği */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 