const fs = require('fs');
const path = require('path');

// Domain
const DOMAIN = 'https://pazarsync.com';

// Tüm static route'lar
const routes = [
  // Ana sayfalar
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/urun-cekme-yukleme', priority: '0.8', changefreq: 'weekly' },
  { path: '/eticaret-kurulumu', priority: '0.8', changefreq: 'weekly' },
  { path: '/ai-kreatif', priority: '0.8', changefreq: 'weekly' },
  { path: '/entegrasyonlar', priority: '0.8', changefreq: 'weekly' },
  { path: '/entegrasyonlar/bilgi', priority: '0.7', changefreq: 'weekly' },
  { path: '/iletisim', priority: '0.7', changefreq: 'weekly' },
  { path: '/fiyatlar', priority: '0.8', changefreq: 'weekly' },
  { path: '/demo', priority: '0.7', changefreq: 'weekly' },
  { path: '/ozellikler', priority: '0.7', changefreq: 'weekly' },
  { path: '/kaynaklar', priority: '0.6', changefreq: 'weekly' },
  { path: '/sss', priority: '0.6', changefreq: 'weekly' },
  { path: '/yardim', priority: '0.6', changefreq: 'weekly' },
  { path: '/api-docs', priority: '0.6', changefreq: 'weekly' },
  
  // Kurumsal sayfalar
  { path: '/kurumsal', priority: '0.6', changefreq: 'weekly' },
  { path: '/kurumsal/hakkimizda', priority: '0.6', changefreq: 'weekly' },
  { path: '/kurumsal/ekibimiz', priority: '0.6', changefreq: 'weekly' },
  { path: '/kurumsal/misyon-vizyon', priority: '0.6', changefreq: 'weekly' },
  { path: '/kurumsal/kariyer', priority: '0.6', changefreq: 'weekly' },
  { path: '/kurumsal/sozlesmeler', priority: '0.5', changefreq: 'weekly' },
  { path: '/kurumsal/kvkk', priority: '0.5', changefreq: 'weekly' },
  
  // Blog
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  
  // Ödeme sayfaları
  { path: '/odeme/starter', priority: '0.7', changefreq: 'weekly' },
  { path: '/odeme/pro', priority: '0.7', changefreq: 'weekly' },
  { path: '/odeme/enterprise', priority: '0.7', changefreq: 'weekly' },
  
  // Yasal sayfalar
  { path: '/kullanim-sartlari', priority: '0.5', changefreq: 'monthly' },
  { path: '/gizlilik-politikasi', priority: '0.5', changefreq: 'monthly' },
  { path: '/cerez-politikasi', priority: '0.5', changefreq: 'monthly' },
  
  // Auth sayfaları (public olanlar)
  { path: '/giris', priority: '0.6', changefreq: 'weekly' },
  { path: '/kayit', priority: '0.6', changefreq: 'weekly' },
  { path: '/sifre-sifirlama', priority: '0.5', changefreq: 'weekly' },
];

// Sitemap XML oluştur
function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Sitemap'i yaz
function writeSitemap() {
  const sitemap = generateSitemap();
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  
  try {
    fs.writeFileSync(outputPath, sitemap, 'utf8');
    console.log('✅ Sitemap.xml başarıyla oluşturuldu!');
    console.log(`📁 Konum: ${outputPath}`);
    console.log(`🌐 Toplam URL sayısı: ${routes.length}`);
    
    // Eklenen route'ları listele
    console.log('\n📋 Eklenen route\'lar:');
    routes.forEach(route => {
      console.log(`   ${route.path} (Priority: ${route.priority}, Changefreq: ${route.changefreq})`);
    });
    
  } catch (error) {
    console.error('❌ Sitemap oluşturulurken hata:', error);
  }
}

// Script çalıştır
writeSitemap(); 