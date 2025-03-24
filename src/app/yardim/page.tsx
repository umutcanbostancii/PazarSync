"use client";

export default function YardimPage() {
  const helpCategories = [
    {
      title: "Başlangıç Kılavuzları",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      ),
      items: [
        { title: "PazarSync&apos;e Hoş Geldiniz", link: "/yardim/hosgeldiniz" },
        { title: "Hesabınızı Oluşturma ve Kurulum", link: "/yardim/hesap-kurulumu" },
        { title: "Hızlı Başlangıç Rehberi", link: "/yardim/hizli-baslangic" },
        { title: "Pazaryeri Bağlantılarını Kurma", link: "/yardim/pazaryeri-baglantilari" },
      ]
    },
    {
      title: "Ürün ve Katalog Yönetimi",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a1.93 1.93 0 0 0-.97 1.68v4.8a1.93 1.93 0 0 0 .97 1.68l3.65 1.9"/><path d="m22 17.5-.02 3.05a1.85 1.85 0 0 1-.97 1.6l-3.65 1.82a1.85 1.85 0 0 1-1.82 0l-3.63-1.82a1.85 1.85 0 0 1-.97-1.6V16.7"/><path d="m20.91 8.84-1.95 1.01a1.93 1.93 0 0 0-.97 1.68v1.9"/><path d="M9.73 5.06 12 6.2l3.97 2.07"/><path d="m14.24 16.95 3.74 1.87"/><path d="m9.79 14.7-2.33-1.16"/><path d="m22 12-5.5 2.85-5.5-2.85L16.5 9.5 22 12Z"/><path d="m16.5 17.15v-4.3"/></svg>
      ),
      items: [
        { title: "Ürün Ekleme ve Düzenleme", link: "/yardim/urun-ekleme" },
        { title: "Toplu Ürün İşlemleri", link: "/yardim/toplu-urun-islemleri" },
        { title: "Ürün Kategori Eşleştirme", link: "/yardim/kategori-eslestirme" },
        { title: "Ürün Görselleri Optimizasyonu", link: "/yardim/gorsel-optimizasyonu" },
      ]
    },
    {
      title: "Stok ve Fiyat Yönetimi",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 0 0-7 7"/><path d="M12 2a7 7 0 0 1 7 7"/><path d="m12 22 4-4"/><path d="m12 22-4-4"/><path d="M12 16v6"/><circle cx="12" cy="8" r="2"/><path d="M12 11v3"/></svg>
      ),
      items: [
        { title: "Stok Yönetimi Temelleri", link: "/yardim/stok-yonetimi" },
        { title: "Fiyatlandırma Stratejileri", link: "/yardim/fiyatlandirma" },
        { title: "Otomatik Fiyat Güncellemeleri", link: "/yardim/otomatik-fiyat" },
        { title: "Minimum Stok Uyarıları", link: "/yardim/minimum-stok" },
      ]
    },
    {
      title: "Sipariş Yönetimi",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H2v14h20V5h-7"/><path d="M9 5a4 4 0 0 1 8 0"/><path d="M9 14h.01"/><path d="M17 14h.01"/><path d="M12 14h.01"/><path d="M12 10h.01"/><path d="M12 18h.01"/><path d="M17 10h.01"/><path d="M17 18h.01"/><path d="M9 10h.01"/><path d="M9 18h.01"/></svg>
      ),
      items: [
        { title: "Siparişleri Görüntüleme ve Yönetme", link: "/yardim/siparis-yonetimi" },
        { title: "Fatura Oluşturma", link: "/yardim/fatura-olusturma" },
        { title: "Kargo Entegrasyonları", link: "/yardim/kargo-entegrasyonu" },
        { title: "İade ve İptal İşlemleri", link: "/yardim/iade-iptal" },
      ]
    },
    {
      title: "Raporlama ve Analitik",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
      ),
      items: [
        { title: "Satış Raporları", link: "/yardim/satis-raporlari" },
        { title: "Performans Analizi", link: "/yardim/performans-analizi" },
        { title: "Özel Raporlar Oluşturma", link: "/yardim/ozel-raporlar" },
        { title: "Veri Dışa Aktarma", link: "/yardim/veri-disa-aktarma" },
      ]
    },
    {
      title: "Hesap ve Güvenlik",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M9.1 12a2.1 2.1 0 0 1 0-3 2.1 2.1 0 0 1 3 0 2.1 2.1 0 0 1 0 3"/><path d="m12 13-1.7-1"/><path d="M12 13v3"/></svg>
      ),
      items: [
        { title: "Kullanıcı Yönetimi", link: "/yardim/kullanici-yonetimi" },
        { title: "İki Faktörlü Kimlik Doğrulama", link: "/yardim/iki-faktor" },
        { title: "API Erişim Anahtarları", link: "/yardim/api-anahtarlar" },
        { title: "Fatura ve Ödeme Bilgileri", link: "/yardim/odeme-bilgileri" },
      ]
    }
  ];

  const popularArticles = [
    { title: "PazarSync&apos;e Yeni Pazaryeri Nasıl Eklenir?", link: "/yardim/pazaryeri-ekleme" },
    { title: "Ürün İçeriklerini Yapay Zeka ile Optimize Etme", link: "/yardim/ai-optimizasyon" },
    { title: "Otomatik Fiyat Güncelleme Kuralları Oluşturma", link: "/yardim/fiyat-kurallari" },
    { title: "Pazaryeri Komisyonlarını Hesaplama", link: "/yardim/komisyon-hesaplama" },
    { title: "Çoklu Depo Yönetimi", link: "/yardim/coklu-depo" },
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6">Yardım Merkezi</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            PazarSync&apos;i kullanmak hakkında tüm sorularınızın cevaplarını bulabileceğiniz kapsamlı rehber.
          </p>
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Nasıl yardımcı olabiliriz?"
                className="w-full py-4 px-6 pr-12 rounded-full border border-gray-300 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {helpCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-primary mb-4">{category.icon}</div>
              <h2 className="text-xl font-medium mb-4">{category.title}</h2>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i}>
                    <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="bg-primary/5 rounded-xl p-8 md:p-10 mb-16">
          <h2 className="text-2xl font-light mb-6">Popüler Makaleler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularArticles.map((article, idx) => (
              <a key={idx} href={article.link} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
                <span>{article.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Video Tutorials */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-6">Video Eğitimler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#000000" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="white"/></svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">PazarSync&apos;e Başlangıç</h3>
                <p className="text-sm text-muted-foreground">Temel özellikleri ve kurulum adımlarını öğrenin (5:32)</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#000000" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="white"/></svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Ürün Katalog Yönetimi</h3>
                <p className="text-sm text-muted-foreground">Ürünlerinizi verimli şekilde nasıl yöneteceğinizi öğrenin (7:15)</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#000000" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="white"/></svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Otomatik Fiyat Optimizasyonu</h3>
                <p className="text-sm text-muted-foreground">Rekabetçi fiyatlandırma kurallarını ayarlama (6:48)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
          <h2 className="text-2xl font-light mb-4">İhtiyacınız olan bilgiyi bulamadınız mı?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Destek ekibimiz size yardımcı olmak için hazır. İster e-posta gönderin, ister canlı destek hattımızdan bize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/iletisim" className="inline-block">
              <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors w-full">
                Destek Talebi Oluştur
              </button>
            </a>
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full hover:bg-secondary/80 transition-colors">
              Canlı Desteğe Bağlan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 