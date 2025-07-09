import {
  Download,
  FileCheck,
  Laptop,
  Megaphone,
  MessageSquare,
  SlidersHorizontal,
} from "lucide-react";

const icons = {
  Laptop,
  FileCheck,
  SlidersHorizontal,
  Download,
  MessageSquare,
  Megaphone,
};

const featureCards: {
  icon: keyof typeof icons;
  title: string;
  description: string;
}[] = [
  {
    icon: "Laptop",
    title: "Tek Ekran",
    description: "Tüm e-ticaretinizi tek ekrandan yönetebilirsiniz. Bilgisayar, tablet ya da akıllı telefonunuzdan hesabınıza erişebilirsiniz."
  },
  {
    icon: "FileCheck",
    title: "Listeleme",
    description: "Ürünleriniz sanal mağazalarınızda otomatik listelenir. Dilerseniz ürünleri elinizle anlık olarak ekleyebilir veya toplu entegrasyon başlatabilirsiniz."
  },
  {
    icon: "SlidersHorizontal",
    title: "Güncelleme",
    description: "Ürünleriniz her gün düzenli olarak belirlediğiniz kurallarla güncellenir. Dilerseniz ürünleriniz için dilediğiniz zaman güncelleme başlatabilirsiniz."
  },
  {
    icon: "Download",
    title: "Ürün Çekme ve Yükleme",
    description: "İstediğiniz web sitesinden ürün çekip, kendi sisteminize aktarabilir ve dilediğiniz pazaryerine otomatik olarak yükleyebilirsiniz."
  },
  {
    icon: "MessageSquare",
    title: "Mesajlaşma",
    description: "Müşterilerinizin mağazanız üzerinden ilettiği mesajları görebilir ve cevaplayabilirsiniz."
  },
  {
    icon: "Megaphone",
    title: "Ürün Özelleştirme",
    description: "Ürünlerinizi farklı platformlar için özelleştirebilir, platform bazında gösterilebilecek özel açıklamalar ekleyebilirsiniz."
  }
];

export function HomeFeatures() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/20 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground dark:bg-primary/10 dark:text-primary-foreground">
            Özellikler
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            PazarSync ile Neler Yapabilirsiniz?
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            E-ticaret süreçlerinizi otomatize ederek işinizi büyütmeniz için gereken tüm araçlar burada.
            Verimliliğinizi artırın, zamandan tasarruf edin.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {featureCards.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <div
                key={index}
                className="relative group flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-card shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border/20 overflow-hidden"
              >
                <Icon className="absolute -right-8 -bottom-8 h-32 w-32 text-muted/10 group-hover:text-primary/10 transition-colors duration-300 transform group-hover:scale-110" />
                <div className="relative z-10">
                  <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-card-foreground">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
