"use client";

export default function MisyonVizyonPage() {
  return (
    <div className="container py-12 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="heading-xl mb-4">Misyon & Vizyon</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          PazarSync olarak vizyonumuz, misyonumuz ve temel değerlerimiz doğrultusunda her gün çalışmalarımızı sürdürüyoruz.
        </p>
      </div>

      <div className="space-y-20">
        {/* Misyon Bölümü */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="heading-lg text-primary mb-4">Misyonumuz</h2>
            <p className="text-muted-foreground mb-4">
              Türkiye ve dünya genelindeki e-ticaret işletmelerine en gelişmiş teknolojileri kullanarak, pazaryeri entegrasyonlarını kolaylaştırmak ve ürün yönetimini merkezi bir platformdan sağlamak.
            </p>
            <p className="text-muted-foreground mb-4">
              İşletmelerin e-ticaret operasyonlarını otomatikleştirerek, onların büyümelerine ve rekabet güçlerini artırmalarına yardımcı olmak misyonumuzdur.
            </p>
            <p className="text-muted-foreground">
              Müşterilerimizin başarısını kendi başarımız olarak görüyor, her zaman yenilikçi çözümler sunarak onların yanında olmayı hedefliyoruz.
            </p>
          </div>
          <div className="bg-secondary/20 rounded-xl p-8">
            <blockquote className="text-xl italic border-l-4 border-primary pl-4 py-2">
              &quot;E-ticaret ekosisteminde her işletmenin başarılı olabilmesi için gereken teknolojik altyapıyı sağlamak ve işletmeleri büyütmek için çalışıyoruz.&quot;
            </blockquote>
            <div className="mt-4 flex items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">AY</div>
              <div className="ml-4">
                <p className="font-medium">Ahmet Yılmaz</p>
                <p className="text-sm text-muted-foreground">Kurucu & CEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vizyon Bölümü */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 bg-secondary/20 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p>E-ticaret ekosisteminde lider yazılım çözümleri sağlayıcısı olmak</p>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p>Yapay zeka destekli e-ticaret çözümleriyle sektörde standartları belirlemek</p>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p>Küresel pazarda tanınan bir Türk teknoloji markası olmak</p>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p>10.000+ işletmenin e-ticaret operasyonlarını PazarSync ile yönetmesini sağlamak</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="heading-lg text-primary mb-4">Vizyonumuz</h2>
            <p className="text-muted-foreground mb-4">
              E-ticaret ekosisteminde teknolojik dönüşümün öncüsü olmak ve global pazarda lider bir yazılım şirketi olarak kabul görmek.
            </p>
            <p className="text-muted-foreground mb-4">
              PazarSync olarak, yapay zeka ve otomatizasyon teknolojileriyle e-ticaret operasyonlarını en verimli hale getirerek, işletmelerin iş süreçlerini basitleştirmek ve satışlarını artırmak istiyoruz.
            </p>
            <p className="text-muted-foreground">
              2030 yılına kadar Türkiye&apos;den çıkan ve dünya çapında tanınan bir teknoloji markası olma hedefimizi gerçekleştirmek için var gücümüzle çalışıyoruz.
            </p>
          </div>
        </div>

        {/* Değerlerimiz Bölümü */}
        <div className="pt-10">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">Temel Değerlerimiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              PazarSync olarak, tüm çalışmalarımızda bizi yönlendiren ve her kararımızda dikkate aldığımız temel değerlerimiz:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
              </div>
              <h3 className="font-medium text-xl mb-2">Müşteri Odaklılık</h3>
              <p className="text-muted-foreground">
                Müşterilerimizin başarısı bizim başarımızdır. Her kararımızda müşteri ihtiyaçlarını ön planda tutuyoruz.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <h3 className="font-medium text-xl mb-2">Yenilikçilik</h3>
              <p className="text-muted-foreground">
                Sürekli olarak yeni teknolojileri takip ediyor ve ürünlerimizi geliştiriyoruz. Yerinde saymak yerine, hep ileriyi hedefliyoruz.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3 className="font-medium text-xl mb-2">Kalite</h3>
              <p className="text-muted-foreground">
                Ürünlerimizin ve hizmetlerimizin en yüksek kalite standartlarına uygun olmasını sağlıyoruz. Kaliteden asla ödün vermiyoruz.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 className="font-medium text-xl mb-2">Şeffaflık</h3>
              <p className="text-muted-foreground">
                Müşterilerimiz, çalışanlarımız ve iş ortaklarımızla olan tüm ilişkilerimizde şeffaflığı benimsiyoruz.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect x="3" y="4" width="18" height="18" rx="2"/><circle cx="12" cy="10" r="2"/><path d="M8 2v2"/><path d="M16 2v2"/></svg>
              </div>
              <h3 className="font-medium text-xl mb-2">Takım Çalışması</h3>
              <p className="text-muted-foreground">
                Birlikte daha güçlü olduğumuza inanıyoruz. Farklı perspektiflere saygı duyuyor ve birlikte çalışarak başarıya ulaşıyoruz.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
              </div>
              <h3 className="font-medium text-xl mb-2">Tutku ve Kararlılık</h3>
              <p className="text-muted-foreground">
                E-ticaret teknolojilerine olan tutkumuz ve hedeflerimize ulaşma konusundaki kararlılığımız, başarımızın temel taşlarıdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 