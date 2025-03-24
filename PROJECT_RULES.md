# Supabase Backend Entegrasyonu Planı

## 1. Kurulum ve Altyapı Hazırlıkları

### Supabase Projesi Oluşturma
- Supabase hesabı açma
- Yeni proje oluşturma
- Database URL ve API anahtarlarını alma
- Next.js projesine Supabase bağlantısını kurma

### Gerekli Paketlerin Yüklenmesi
```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs @supabase/auth-helpers-react
```

## 2. Kullanıcı Yönetimi (Auth)

### Veritabanı Tabloları
- **users** tablosu (Supabase otomatik oluşturur)
  - Ek alanlar: isim, soyisim, şirket adı, telefon, adres, vergi no vb.
- **subscriptions** tablosu (abonelikler için)
  - user_id, plan_type (starter, pro, enterprise), start_date, end_date, status

### Auth Sayfaları ve Componentler
1. **Login Sayfası** (`/auth/login`)
   - Email/şifre ile giriş
   - Şifremi unuttum fonksiyonu
   - "Kayıt ol" yönlendirmesi

2. **Kayıt Sayfası** (`/auth/register`)
   - Email/şifre ile kayıt
   - Temel kullanıcı bilgilerini alma
   - Şartlar ve koşulları kabul etme

3. **Şifre Sıfırlama** (`/auth/reset-password`)
   - Email ile şifre sıfırlama bağlantısı gönderimi

4. **Auth Context**
   - Kullanıcı durumu yönetimi
   - Route koruması (auth gerektiren sayfalar için)

## 3. Kullanıcı Dashboard'u (Üye Paneli)

### Veritabanı Tabloları
- **marketplaces** tablosu (kullanıcının entegre ettiği pazaryerleri)
  - user_id, marketplace_type, credentials (şifrelenmiş), status
- **products** tablosu (kullanıcı ürünleri)
  - user_id, product_name, sku, price, stock, images, description, attributes
- **marketplace_products** tablosu (pazaryeri ürün eşleştirmeleri)
  - product_id, marketplace_id, marketplace_product_id, status, last_sync

### Dashboard Sayfaları
1. **Ana Dashboard** (`/dashboard`)
   - Temel istatistikler (ürün sayısı, satışlar, entegrasyonlar)
   - Durum özeti ve hızlı eylemler

2. **Pazaryeri Entegrasyonları** (`/dashboard/marketplaces`)
   - Entegrasyon ekleme/düzenleme/silme
   - API bağlantı durumu takibi

3. **Ürün Yönetimi** (`/dashboard/products`)
   - Ürün listeleme, ekleme, düzenleme
   - Toplu ürün işlemleri
   - Pazaryerlerinde durum takibi

4. **Profil ve Ayarlar** (`/dashboard/settings`)
   - Kullanıcı bilgilerini düzenleme
   - Şifre değiştirme
   - Abonelik bilgileri ve fatura yönetimi

## 4. Ödeme Sistemi

### Veritabanı Tabloları
- **payments** tablosu
  - user_id, amount, currency, payment_method, status, payment_date
- **invoices** tablosu
  - payment_id, user_id, invoice_details, invoice_pdf_url

### Ödeme Sayfaları
1. **Plan Seçimi** (`/pricing` - mevcut sayfa revize edilecek)
   - Fiyat planları gösterimi
   - "Satın Al" butonu ile ödeme sayfasına yönlendirme

2. **Ödeme Sayfası** (`/checkout/[plan]`)
   - Ödeme formu
   - Fatura bilgileri
   - İki aşamalı onaylama

3. **Ödeme Başarı/Hata Sayfası** (`/checkout/result`)
   - Ödeme sonuç bilgisi
   - Dashboard'a yönlendirme

## 5. İletişim Sistemi

### Veritabanı Tabloları
- **contact_messages** tablosu
  - name, email, phone, subject, message, status (new, read, answered), created_at
- **notifications** tablosu
  - user_id, type, content, is_read, created_at

### İletişim Sayfaları ve Fonksiyonlar
1. **İletişim Formu** (`/iletisim` - mevcut sayfa revize edilecek)
   - Ad, email, telefon, konu, mesaj alanları
   - Form gönderimi için Supabase bağlantısı

2. **Admin Mesaj Paneli** (`/dashboard/admin/messages` - sadece admin kullanıcılar)
   - Gelen mesajları listeleme
   - Mesaj detayı görüntüleme
   - Mesajları yanıtlama (email gönderimi)

## 6. İş Planı ve Uygulama Takvimi

### Aşama 1: Temel Auth ve Database Kurulumu (1 Hafta)
- Supabase kurulumu ve konfigürasyonu
- Veritabanı şemalarını oluşturma
- Auth sayfalarını geliştirme
- Temel route koruması

### Aşama 2: Dashboard Geliştirme (2 Hafta)
- Admin paneli iskeletini oluşturma
- Kullanıcı profil yönetimi
- Pazaryeri entegrasyonlarını yapılandırma
- Ürün yönetimi arayüzleri

### Aşama 3: Ödeme Sisteminin Entegrasyonu (1 Hafta)
- Ödeme sayfalarını oluşturma
- Stripe/Iyzico entegrasyonu
- Abonelik yönetimi

### Aşama 4: İletişim Sistemi ve Son Rötuşlar (1 Hafta)
- İletişim formunu aktifleştirme
- Bildirim sistemini kurma
- Testler ve hata düzeltmeleri
- Dokümantasyon

Bu plan, modern bir SaaS projesi için temel bileşenleri içeriyor ve modüler bir yapıda genişletilebilecek şekilde tasarlandı. Proje büyüklüğüne ve gereksinimlere göre süreçler ve özellikler ayarlanabilir. 