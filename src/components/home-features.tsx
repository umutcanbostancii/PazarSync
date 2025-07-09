export function HomeFeatures() {
  // Feature cards data to match screenshot
  const featureCards = [
    {
      icon: "laptop",
      title: "Tek Ekran",
      description: "Tüm e-ticaretinizi tek ekrandan yönetebilirsiniz. Bilgisayar, tablet ya da akıllı telefonunuzdan hesabınıza erişebilirsiniz."
    },
    {
      icon: "file-check",
      title: "Listeleme",
      description: "Ürünleriniz sanal mağazalarınızda otomatik listelenir. Dilerseniz ürünleri elinizle anlık olarak ekleyebilir veya toplu entegrasyon başlatabilirsiniz."
    },
    {
      icon: "sliders",
      title: "Güncelleme",
      description: "Ürünleriniz her gün düzenli olarak belirlediğiniz kurallarla güncellenir. Dilerseniz ürünleriniz için dilediğiniz zaman güncelleme başlatabilirsiniz."
    },
    {
      icon: "download",
      title: "Ürün Çekme ve Yükleme",
      description: "İstediğiniz web sitesinden ürün çekip, kendi sisteminize aktarabilir ve dilediğiniz pazaryerine otomatik olarak yükleyebilirsiniz."
    },
    {
      icon: "message-square",
      title: "Mesajlaşma",
      description: "Müşterilerinizin mağazanız üzerinden ilettiği mesajları görebilir ve cevaplayabilirsiniz."
    },
    {
      icon: "megaphone",
      title: "Ürün Özelleştirme",
      description: "Ürünlerinizi farklı platformlar için özelleştirebilir, platform bazında gösterilebilecek özel açıklamalar ekleyebilirsiniz."
    }
  ];

  // Icon components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'laptop':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/></svg>
        );
      case 'file-check':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
        );
      case 'sliders':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>
        );
      case 'download':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        );
      case 'message-square':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        );
      case 'megaphone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m3 11 18-5v12L3 13"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container-wide mb-8 md:mb-12 lg:mb-16">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">Neler Yapabilirsiniz?</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            PazarSync ile e-ticaret süreçlerinizi kolaylaştırın ve verimliliğinizi artırın.
          </p>
        </div>
      </div>

      <div className="container-wide px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="hover-scale"
            >
              <div className="bg-card rounded-xl shadow-sm p-4 md:p-6 h-full border border-border transition-shadow hover:shadow-md">
                <div className="flex flex-col">
                  <div className="mb-3 md:mb-4 bg-primary/10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg">
                    {getIcon(card.icon)}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-card-foreground">{card.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
