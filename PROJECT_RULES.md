# Supabase Backend Entegrasyonu Planı

## ✅ TAMAMLANAN GÖREVLER

### Netlify Deployment Sorunları Çözüldü
- ✅ `package.json` ve build komutları düzeltildi
- ✅ `next.config.mjs` dosyası statik export için yapılandırıldı
- ✅ Hatalı `staticExport` parametresi kaldırıldı
- ✅ Statik dışa aktarım için gerekli `generateStaticParams()` fonksiyonları eklendi
- ✅ Görüntü dönüşüm yapılandırması düzeltildi

### Auth Sayfa ve Bileşenleri Başlandı
- ✅ Login sayfası oluşturuldu
- ✅ Register sayfası oluşturuldu
- ✅ Şifremi unuttum sayfası oluşturuldu
- ✅ Auth Context yapısı kuruldu
- ✅ Temel Supabase bağlantısı kuruldu

## 🔴 MEVCUT SORUNLAR

### Supabase Auth Sorunları
- ❌ ISO-8859-1 karakter seti hatası: "Failed to construct 'Headers': String contains non ISO-8859-1 code point"
- ❌ Login ve register işlemlerinde JWT token sorunları
- ❌ Supabase auth sağlayıcısı yapılandırması düzgün çalışmıyor

## 1. Kurulum ve Altyapı Hazırlıkları

### Supabase Projesi Oluşturma
- ✅ Supabase hesabı açma
- ✅ Yeni proje oluşturma
- ✅ Database URL ve API anahtarlarını alma
- ✅ Next.js projesine Supabase bağlantısını kurma
- 🔄 **ACİL:** Auth yapılandırmasını güncellemek gerekiyor

### Gerekli Paketlerin Yüklenmesi
```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs @supabase/auth-helpers-react
```
- ✅ Gerekli paketler yüklendi
- 🔄 **YENİ GÖREV:** Supabase paketlerini en son sürüme güncelleme

## 2. Kullanıcı Yönetimi (Auth)

### Veritabanı Tabloları
- ✅ **users** tablosu (Supabase otomatik oluşturur)
  - 🔄 Ek alanlar eklenecek: isim, soyisim, şirket adı, telefon, adres, vergi no vb.
- 🔄 **subscriptions** tablosu (abonelikler için)
  - user_id, plan_type (starter, pro, enterprise), start_date, end_date, status

### Auth Sayfaları ve Componentler
1. **Login Sayfası** (`/auth/login`) ✅ Başlandı
   - ✅ Email/şifre ile giriş
   - ✅ Şifremi unuttum fonksiyonu
   - ✅ "Kayıt ol" yönlendirmesi
   - ✅ Şifre görünürlük butonu eklendi
   - 🔄 **YENİ GÖREV:** OAuth (Google/GitHub) entegrasyonu eklenecek
   - 🔴 **HATA:** ISO-8859-1 kod noktası hatası çözülecek

2. **Kayıt Sayfası** (`/auth/register`) ✅ Başlandı
   - ✅ Email/şifre ile kayıt
   - 🔄 Temel kullanıcı bilgilerini alma
   - ✅ Şartlar ve koşulları kabul etme
   - 🔴 **HATA:** ISO-8859-1 kod noktası hatası çözülecek

3. **Şifre Sıfırlama** (`/auth/reset-password`) ✅ Başlandı
   - ✅ Email ile şifre sıfırlama bağlantısı gönderimi
   - 🔴 **HATA:** ISO-8859-1 kod noktası hatası çözülecek

4. **Auth Context** ✅ Başlandı
   - ✅ Kullanıcı durumu yönetimi
   - 🔄 Route koruması (auth gerektiren sayfalar için)
   - 🔄 **YENİ GÖREV:** JWT işleme mekanizmasını güncelleme

## 3. Kullanıcı Dashboard'u (Üye Paneli)

### Veritabanı Tabloları
- 🔄 **marketplaces** tablosu (kullanıcının entegre ettiği pazaryerleri)
  - user_id, marketplace_type, credentials (şifrelenmiş), status
- 🔄 **products** tablosu (kullanıcı ürünleri)
  - user_id, product_name, sku, price, stock, images, description, attributes
- 🔄 **marketplace_products** tablosu (pazaryeri ürün eşleştirmeleri)
  - product_id, marketplace_id, marketplace_product_id, status, last_sync

### Dashboard Sayfaları
1. **Ana Dashboard** (`/dashboard`) 🔄 Başlanacak
   - Temel istatistikler (ürün sayısı, satışlar, entegrasyonlar)
   - Durum özeti ve hızlı eylemler

2. **Pazaryeri Entegrasyonları** (`/dashboard/marketplaces`) 🔄 Başlandı
   - ✅ Arayüz tasarımı tamamlandı
   - 🔄 Backend entegrasyonu yapılacak
   - 🔄 API bağlantı durumu takibi eklenecek

3. **Ürün Yönetimi** (`/dashboard/products`) 🔄 Başlanacak
   - Ürün listeleme, ekleme, düzenleme
   - Toplu ürün işlemleri
   - Pazaryerlerinde durum takibi

4. **Profil ve Ayarlar** (`/dashboard/settings`) 🔄 Başlanacak
   - Kullanıcı bilgilerini düzenleme
   - Şifre değiştirme
   - Abonelik bilgileri ve fatura yönetimi

## 4. Ödeme Sistemi

### Veritabanı Tabloları
- 🔄 **payments** tablosu
  - user_id, amount, currency, payment_method, status, payment_date
- 🔄 **invoices** tablosu
  - payment_id, user_id, invoice_details, invoice_pdf_url

### Ödeme Sayfaları
1. **Plan Seçimi** (`/pricing` - mevcut sayfa revize edilecek) ✅ Mevcut
   - ✅ Fiyat planları gösterimi
   - 🔄 "Satın Al" butonu ile ödeme sayfasına yönlendirme

2. **Ödeme Sayfası** (`/checkout/[plan]`) ✅ Başlandı
   - 🔄 Ödeme formu
   - 🔄 Fatura bilgileri
   - 🔄 İki aşamalı onaylama

3. **Ödeme Başarı/Hata Sayfası** (`/checkout/result`) 🔄 Başlanacak
   - Ödeme sonuç bilgisi
   - Dashboard'a yönlendirme

## 5. İletişim Sistemi

### Veritabanı Tabloları
- 🔄 **contact_messages** tablosu
  - name, email, phone, subject, message, status (new, read, answered), created_at
- 🔄 **notifications** tablosu
  - user_id, type, content, is_read, created_at

### İletişim Sayfaları ve Fonksiyonlar
1. **İletişim Formu** (`/iletisim` - mevcut sayfa revize edilecek) ✅ Mevcut
   - ✅ Ad, email, telefon, konu, mesaj alanları
   - 🔄 Form gönderimi için Supabase bağlantısı

2. **Admin Mesaj Paneli** (`/dashboard/admin/messages` - sadece admin kullanıcılar) 🔄 Başlanacak
   - Gelen mesajları listeleme
   - Mesaj detayı görüntüleme
   - Mesajları yanıtlama (email gönderimi)

## 6. İş Planı ve Uygulama Takvimi

### Aşama 1: Temel Auth ve Database Kurulumu (1 Hafta) 🔄 Devam Ediyor
- ✅ Supabase kurulumu ve konfigürasyonu
- 🔄 Veritabanı şemalarını oluşturma
- 🔄 Auth sayfalarını geliştirme
- 🔄 Temel route koruması
- 🔴 **ACİL GÖREV:** Supabase Auth sorunlarını çözme

### Aşama 2: Dashboard Geliştirme (2 Hafta) 🔄 Başlanacak
- Admin paneli iskeletini oluşturma
- Kullanıcı profil yönetimi
- Pazaryeri entegrasyonlarını yapılandırma
- Ürün yönetimi arayüzleri

### Aşama 3: Ödeme Sisteminin Entegrasyonu (1 Hafta) 🔄 Başlanacak
- Ödeme sayfalarını oluşturma
- Stripe/Iyzico entegrasyonu
- Abonelik yönetimi

### Aşama 4: İletişim Sistemi ve Son Rötuşlar (1 Hafta) 🔄 Başlanacak
- İletişim formunu aktifleştirme
- Bildirim sistemini kurma
- Testler ve hata düzeltmeleri
- Dokümantasyon

## 7. Acil Çözülmesi Gereken Sorunlar

### Supabase Auth Sorunları
1. **JWT Token ve Headers Sorunları**
   - 🔴 ISO-8859-1 kod noktası hatası (Non-ASCII karakter sorunu)
   - 🔴 Kimlik doğrulama isteklerinde header sorunları

2. **Alternatif Auth Seçenekleri**
   - 🔄 Supabase-js kütüphanesini güncelleme (en son sürüm)
   - 🔄 Farklı bir auth sağlayıcısına geçiş (Auth0, Firebase Auth, vb.)
   - 🔄 OAuth entegrasyonu (Google, GitHub)

3. **Supabase Proje Yapılandırması**
   - 🔄 Auth ayarlarını gözden geçirme
   - 🔄 JWT token işleme mekanizmasını güncelleme
   - 🔄 Locale ve karakter kodlama ayarlarını kontrol etme

Bu plan, modern bir SaaS projesi için temel bileşenleri içeriyor ve modüler bir yapıda genişletilebilecek şekilde tasarlandı. Proje büyüklüğüne ve gereksinimlere göre süreçler ve özellikler ayarlanabilir. 