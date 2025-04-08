# Supabase Kurulum Talimatları

Bu belge, PazarSync projesinin Supabase kurulumu ve yapılandırması için adım adım talimatlar içerir.

## 1. Supabase Hesabı Oluşturma

1. [Supabase'e kaydolun](https://app.supabase.io/sign-up)
2. Projeye özel bir Supabase projesi oluşturun
3. Oluşturulan projenin URL ve API anahtarlarını alın

## 2. Ortam Değişkenlerini Ayarlama

`.env.local` dosyanızda aşağıdaki değişkenleri ayarlayın:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_REDIRECT_URL=http://localhost:3000/auth/login
```

## 3. Supabase Auth Ayarları

1. Supabase Dashboard > Authentication > URL Configuration bölümüne gidin
2. Site URL'i ayarlayın: `http://localhost:3000` (geliştirme için) veya canlı URL
3. Redirect URL'leri ekleyin:
   - `http://localhost:3000/auth/login`
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/update-password`

## 4. Email Auth Sağlayıcı Ayarları

1. Supabase Dashboard > Authentication > Providers > Email
2. "Enable Email Sign Up" seçeneğini açık tutun
3. Geliştirme aşamasında kolaylık için "Confirm email" seçeneğini kapatabilirsiniz
4. "Secure email change with email confirmation" seçeneğini açık tutun

## 5. Veritabanı Şemalarını Oluşturma

1. SQL Editor'e gidin
2. `sql/database-schema.sql` dosyasındaki SQL kodunu kopyalayın
3. SQL Editor'de yapıştırın ve çalıştırın

## 6. Row Level Security (RLS) Kontrolleri

Bütün tablolarda Row Level Security (RLS) etkinleştirilmiştir. Bu, her kullanıcının yalnızca kendi verilerine erişebileceği anlamına gelir.

- User Profiles: `auth.uid() = id`
- Subscriptions: `auth.uid() = user_id`
- Marketplaces: `auth.uid() = user_id`
- Products: `auth.uid() = user_id`
- Marketplace Products: Özel fonksiyonlar kullanılarak ürün ve pazaryeri sahipliği kontrol edilir

## 7. Supabase Functions (Gerekliyse)

Edge Functions oluşturmak için Supabase CLI'yı kullanın:

```bash
npm install -g supabase
supabase login
supabase link --project-ref your-project-id
supabase functions new my-function
```

## 8. Storage Ayarları (Ürün Görselleri için)

1. Supabase Dashboard > Storage bölümüne gidin
2. "product-images" adında yeni bir bucket oluşturun:
   - Public: Hayır
   - RLS: Evet
3. Bucket için RLS politikası oluşturun:

```sql
-- Herkes okuyabilir
CREATE POLICY "Herkes ürün görsellerini görebilir"
ON storage.objects FOR SELECT
USING (bucket_id = 'product-images');

-- Sadece kullanıcılar kendi ürün görsellerini yükleyebilir
CREATE POLICY "Kullanıcılar kendi ürün görsellerini yükleyebilir"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'product-images' AND
  auth.uid() = (storage.foldername(name))[1]::uuid
);

-- Sadece kullanıcılar kendi ürün görsellerini güncelleyebilir
CREATE POLICY "Kullanıcılar kendi ürün görsellerini güncelleyebilir"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'product-images' AND
  auth.uid() = (storage.foldername(name))[1]::uuid
);

-- Sadece kullanıcılar kendi ürün görsellerini silebilir
CREATE POLICY "Kullanıcılar kendi ürün görsellerini silebilir"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'product-images' AND
  auth.uid() = (storage.foldername(name))[1]::uuid
);
```

## 9. Realtime Ayarları (İsteğe Bağlı)

Eş zamanlı güncellemeleri takip etmek için:

1. Supabase Dashboard > Database > Replication
2. "source" veritabanını yayınlayın
3. İzlemek istediğiniz tabloları seçin (örneğin: products, marketplace_products)

## 10. Admin Kullanıcısı Oluşturma

1. Standart bir kullanıcı hesabı oluşturun (örn. admin@pazarsync.com)
2. SQL Editor'de şu sorguyu çalıştırın:

```sql
-- Admin kullanıcısını etkinleştir
UPDATE auth.users
SET raw_user_meta_data = jsonb_set(raw_user_meta_data, '{is_admin}', 'true')
WHERE email = 'admin@pazarsync.com';
```

## 11. Test ve Doğrulama

Kurulumu doğrulamak için:

1. Yeni bir kullanıcı hesabı oluşturun
2. Giriş yapın
3. Profil oluşturmayı deneyin
4. Pazaryeri eklemeyi deneyin
5. Ürün eklemeyi deneyin

## 12. Sorun Giderme

1. **Kimlik Doğrulama Sorunları**
   - JWT tokenlarının geçerli olup olmadığını kontrol edin
   - Browser konsolundaki hataları izleyin
   - Supabase loglarını kontrol edin

2. **RLS Sorunları**
   - SQL Editor'de RLS politikalarını kontrol edin
   - `anon` ve `authenticated` rolleri için doğru izinlerin verildiğinden emin olun

3. **ISO-8859-1 Karakter Hatası**
   - Şifre ve diğer girdilerde ASCII olmayan karakter kullanmadığınızdan emin olun
   - Custom fetch fonksiyonunun headers'ı düzgün şekilde işlediğini kontrol edin

## 13. Canlı Ortama Geçiş

1. Canlı ortam için yeni `.env.production` dosyası oluşturun
2. Supabase proje URL ve anahtarlarını güncelleyin
3. Supabase Dashboard'da Site URL ve Redirect URL'leri canlı URL'lerle güncelleyin 