"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    slug: "e-ticarette-yapay-zeka-kullanimi-2024-trendleri",
    title: "Yapay Zeka Destekli E-Ticaretin Geleceği",
    date: "12 Mart 2024",
    category: "Yapay Zeka",
    image: "/images/ai-thumbnail.webp",
    content: `
      <p>Yapay zeka, e-ticaret dünyasında devrim yaratıyor. 2024 yılında öne çıkan trendler arasında kişiselleştirilmiş alışveriş deneyimi, otomatik müşteri hizmetleri ve stok optimizasyonu yer alıyor.</p>
      <h2>1. Kişiselleştirme</h2>
      <p>AI tabanlı öneri sistemleri ile müşterilere özel ürünler sunmak artık çok daha kolay.</p>
      <h2>2. Otomasyon</h2>
      <p>Sipariş yönetimi, stok takibi ve fiyatlandırma gibi süreçler tamamen otomatikleşiyor.</p>
      <blockquote>"Yapay zeka ile rekabet avantajı sağlayın!"</blockquote>
    `
  },
  {
    slug: "pazaryeri-entegrasyonuyla-satislarinizi-nasil-artirirsiniz",
    title: "Çoklu Pazaryeri Entegrasyonunun Avantajları",
    date: "5 Mart 2024",
    category: "Entegrasyon",
    image: "/images/marketplace-integration.webp",
    content: `
      <p>Çoklu pazaryeri entegrasyonu ile satışlarınızı artırmak için en iyi uygulamaları ve stratejileri keşfedin.</p>
      <ul><li>Entegrasyon araçları kullanın</li><li>Stok ve fiyat senkronizasyonu sağlayın</li><li>Veri analizine önem verin</li></ul>
    `
  },
  {
    slug: "e-ticarette-stok-yonetimi-zorluklar-cozumler",
    title: "Stok Yönetiminde Sık Yapılan Hatalar ve Çözümleri",
    date: "28 Şubat 2024",
    category: "Stok Yönetimi",
    image: "/images/product-sync.webp",
    content: `
      <p>Stok yönetiminde karşılaşılan başlıca zorluklar ve bunlara yönelik pratik çözümler.</p>
      <ol><li>Otomasyon ile hata payını azaltın</li><li>Gerçek zamanlı stok takibi yapın</li></ol>
    `
  },
  {
    slug: "basarili-satis-stratejileri",
    title: "Trendyol, Hepsiburada ve Amazon'da Başarılı Satış Stratejileri",
    date: "20 Şubat 2024",
    category: "Pazaryeri",
    image: "/images/dashboard-screenshot.webp",
    content: `
      <p>Türkiye'nin önde gelen pazaryerlerinde satışlarınızı artırmak için ipuçları:</p>
      <ul><li>Ürün açıklamalarını optimize edin</li><li>Rekabetçi fiyatlandırma uygulayın</li></ul>
    `
  },
  {
    slug: "urun-icerigi-optimizasyonu-donusum-artisi",
    title: "Dönüşüm Oranlarını Artıran Ürün İçerik Stratejileri",
    date: "15 Şubat 2024",
    category: "İçerik Stratejisi",
    image: "/images/why-choose-us.webp",
    content: `
      <p>Ürün başlıkları, açıklamaları ve görsellerini optimize ederek dönüşüm oranlarını artırabilirsiniz.</p>
      <ul><li>SEO uyumlu içerik</li><li>Yüksek kaliteli görseller</li></ul>
    `
  },
  {
    slug: "e-ticaret-otomasyonu-verimlilik",
    title: "E-ticarette Otomasyonun Rolü ve Önemi",
    date: "8 Şubat 2024",
    category: "Otomasyon",
    image: "/images/ai-thumbnail.webp",
    content: `
      <p>E-ticaret süreçlerinizi otomatikleştirerek operasyonel verimliliği artırabilirsiniz.</p>
      <ul><li>Otomatik sipariş yönetimi</li><li>Stok ve fiyat güncellemeleri</li></ul>
    `
  }
];

export default function BlogReaderPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPosts.find((b) => b.slug.endsWith(slug));

  if (!post) return notFound();

  return (
    <div className="container-wide py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-primary text-sm mb-6 inline-block hover:underline">← Tüm Bloglar</Link>
        <div className="p-6 md:p-8 bg-card rounded-xl shadow-sm border border-border">
          <div className="flex items-center gap-4 mb-4">
            {/* Badge component is not defined in the original file, so I'm using a simple span */}
            <span className="text-xs font-medium bg-muted px-3 py-1 rounded-full mr-2 text-card-foreground">{post.category}</span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="text-3xl font-bold mb-6 text-card-foreground">{post.title}</h1>
          <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden">
           <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
          <article className="prose prose-lg max-w-none text-card-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
} 