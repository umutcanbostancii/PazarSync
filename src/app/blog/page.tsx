import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "E-ticarette Yapay Zeka Kullanımı: 2024 Trendleri",
      excerpt: "E-ticaret dünyasında yapay zeka kullanımı hızla artıyor. Peki bu teknolojiler nasıl rekabet avantajı sağlıyor?",
      image: "/images/ai-thumbnail.jpg",
      date: "12 Mart 2024",
      category: "Yapay Zeka",
      slug: "/blog/e-ticarette-yapay-zeka-kullanimi-2024-trendleri"
    },
    {
      id: 2,
      title: "Pazaryeri Entegrasyonuyla Satışlarınızı Nasıl %40 Artırabilirsiniz?",
      excerpt: "Çoklu pazaryeri stratejisi ile satışlarınızı artırmanın yollarını ve en iyi uygulamaları açıklıyoruz.",
      image: "/images/marketplace-integration.jpg",
      date: "5 Mart 2024",
      category: "Entegrasyon",
      slug: "/blog/pazaryeri-entegrasyonuyla-satislarinizi-nasil-artirirsiniz"
    },
    {
      id: 3,
      title: "E-ticarette Stok Yönetimi: Karşılaşılan Zorluklar ve Çözümler",
      excerpt: "Çoklu kanal stratejisinde stok yönetiminin püf noktaları ve otomasyonun önemi hakkında.",
      image: "/images/product-sync.jpg",
      date: "28 Şubat 2024",
      category: "Stok Yönetimi",
      slug: "/blog/e-ticarette-stok-yonetimi-zorluklar-cozumler"
    },
    {
      id: 4,
      title: "Trendyol, Hepsiburada ve Amazon'da Başarılı Satış Stratejileri",
      excerpt: "Türkiye'nin önde gelen e-ticaret pazaryerlerinde satışlarınızı artırmak için önemli ipuçları.",
      image: "/images/dashboard-screenshot.png",
      date: "20 Şubat 2024",
      category: "Pazaryeri",
      slug: "/blog/basarili-satis-stratejileri"
    },
    {
      id: 5,
      title: "E-ticarette Ürün İçeriği Optimizasyonu: Dönüşüm Oranını Artırmanın Yolları",
      excerpt: "Ürün başlıkları, açıklamaları ve görsellerini optimize ederek dönüşüm oranlarını nasıl yükseltebilirsiniz?",
      image: "/images/why-choose-us.jpg",
      date: "15 Şubat 2024",
      category: "İçerik Stratejisi",
      slug: "/blog/urun-icerigi-optimizasyonu-donusum-artisi"
    },
    {
      id: 6,
      title: "E-ticaret Otomasyonu: Zamanınızı ve Kaynaklarınızı Verimli Kullanmanın Yolları",
      excerpt: "E-ticaret süreçlerinizi otomatikleştirerek operasyonel verimliliği nasıl artırabilirsiniz?",
      image: "/images/ai-thumbnail.jpg",
      date: "8 Şubat 2024",
      category: "Otomasyon",
      slug: "/blog/e-ticaret-otomasyonu-verimlilik"
    }
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6">Blog</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            E-ticaret, pazaryeri entegrasyonları ve dijital pazarlama hakkında en güncel bilgiler ve pratik ipuçları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={post.slug} key={post.id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium bg-secondary px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center group-hover:underline">
                    Devamını Oku
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
