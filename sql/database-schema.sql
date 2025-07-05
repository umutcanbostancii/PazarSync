-- Database Schema for PazarSync

-- NOT: Supabase'de auth.users tablosu otomatik olarak oluşturulur

-- USER_PROFILES: Kullanıcı profil bilgilerini saklar
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  company_name TEXT,
  phone TEXT,
  address TEXT,
  tax_number TEXT,
  profile_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Row Level Security (RLS) için politikalar
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Kullanıcı sadece kendi profilini görebilir ve düzenleyebilir
CREATE POLICY "Kullanıcılar kendi profillerini görebilir" 
  ON user_profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Kullanıcılar kendi profillerini düzenleyebilir" 
  ON user_profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Kullanıcılar kendi profillerini oluşturabilir" 
  ON user_profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- SUBSCRIPTIONS: Kullanıcı aboneliklerini saklar
CREATE TYPE subscription_status AS ENUM ('active', 'cancelled', 'expired', 'trial');
CREATE TYPE subscription_plan AS ENUM ('starter', 'pro', 'enterprise');

CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  plan_type subscription_plan DEFAULT 'starter',
  start_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  end_date TIMESTAMP WITH TIME ZONE,
  status subscription_status DEFAULT 'trial',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- RLS Politikaları
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcılar kendi aboneliklerini görebilir" 
  ON subscriptions FOR SELECT USING (auth.uid() = user_id);

-- Sadece yöneticiler abonelikleri yönetebilir
CREATE POLICY "Adminler tüm abonelikleri görebilir" 
  ON subscriptions FOR ALL USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.is_admin = true
    )
  );

-- MARKETPLACES: Kullanıcının entegre ettiği pazaryerlerini saklar
CREATE TYPE marketplace_type AS ENUM ('trendyol', 'hepsiburada', 'n11', 'amazon', 'etsy', 'shopify', 'woocommerce');
CREATE TYPE marketplace_status AS ENUM ('active', 'disconnected', 'error');

CREATE TABLE IF NOT EXISTS marketplaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  marketplace_type marketplace_type NOT NULL,
  name TEXT NOT NULL,
  credentials JSONB NOT NULL, -- şifrelenmiş API anahtarları, tokenlar vs.
  status marketplace_status DEFAULT 'active',
  connection_data JSONB, -- son bağlantı tarihi, hata mesajları vs.
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- RLS Politikaları
ALTER TABLE marketplaces ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcılar kendi pazaryerlerini görebilir" 
  ON marketplaces FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi pazaryerlerini düzenleyebilir" 
  ON marketplaces FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi pazaryerlerini ekleyebilir" 
  ON marketplaces FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi pazaryerlerini silebilir" 
  ON marketplaces FOR DELETE USING (auth.uid() = user_id);

-- PRODUCTS: Kullanıcı ürünlerini saklar
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  sku TEXT NOT NULL,
  barcode TEXT,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  cost_price DECIMAL(10,2),
  stock INTEGER DEFAULT 0,
  category TEXT,
  attributes JSONB,
  images JSONB, -- URL'ler dizisi
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (user_id, sku)
);

-- RLS Politikaları
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcılar kendi ürünlerini görebilir" 
  ON products FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi ürünlerini düzenleyebilir" 
  ON products FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi ürünlerini ekleyebilir" 
  ON products FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi ürünlerini silebilir" 
  ON products FOR DELETE USING (auth.uid() = user_id);

-- MARKETPLACE_PRODUCTS: Pazaryeri ürün eşleştirmelerini saklar
CREATE TYPE sync_status AS ENUM ('pending', 'synced', 'error', 'out_of_stock');

CREATE TABLE IF NOT EXISTS marketplace_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) NOT NULL,
  marketplace_id UUID REFERENCES marketplaces(id) NOT NULL,
  marketplace_product_id TEXT NOT NULL, -- pazaryerindeki ürün ID'si
  status sync_status DEFAULT 'pending',
  marketplace_url TEXT, -- pazaryerindeki ürün URL'i
  marketplace_data JSONB, -- pazaryeri spesifik ek bilgiler
  last_sync TIMESTAMP WITH TIME ZONE,
  sync_errors TEXT, -- son senkronizasyon hataları
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (product_id, marketplace_id)
);

-- RLS Politikaları
ALTER TABLE marketplace_products ENABLE ROW LEVEL SECURITY;

-- Ürünün sahibi olup olmadığını kontrol eden fonksiyon
CREATE OR REPLACE FUNCTION check_product_ownership(product_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM products 
    WHERE products.id = product_id 
    AND products.user_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Pazaryerinin sahibi olup olmadığını kontrol eden fonksiyon
CREATE OR REPLACE FUNCTION check_marketplace_ownership(marketplace_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM marketplaces 
    WHERE marketplaces.id = marketplace_id 
    AND marketplaces.user_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Ürün eşleştirmelerini korumak için politikalar
CREATE POLICY "Kullanıcılar kendi ürün eşleştirmelerini görebilir" 
  ON marketplace_products FOR SELECT USING (
    check_product_ownership(product_id) OR
    check_marketplace_ownership(marketplace_id)
  );

CREATE POLICY "Kullanıcılar kendi ürün eşleştirmelerini düzenleyebilir" 
  ON marketplace_products FOR UPDATE USING (
    check_product_ownership(product_id) AND
    check_marketplace_ownership(marketplace_id)
  );

CREATE POLICY "Kullanıcılar kendi ürün eşleştirmelerini ekleyebilir" 
  ON marketplace_products FOR INSERT WITH CHECK (
    check_product_ownership(product_id) AND
    check_marketplace_ownership(marketplace_id)
  );

CREATE POLICY "Kullanıcılar kendi ürün eşleştirmelerini silebilir" 
  ON marketplace_products FOR DELETE USING (
    check_product_ownership(product_id) AND
    check_marketplace_ownership(marketplace_id)
  );

-- PAYMENTS: Kullanıcı ödemelerini saklar
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
CREATE TYPE payment_method AS ENUM ('credit_card', 'bank_transfer', 'other');

CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  subscription_id UUID REFERENCES subscriptions(id),
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'TRY',
  payment_method payment_method,
  payment_reference TEXT, -- ödeme sağlayıcısı referans numarası
  status payment_status DEFAULT 'pending',
  payment_details JSONB, -- ödeme sağlayıcısı detayları
  payment_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- RLS Politikaları
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcılar kendi ödemelerini görebilir" 
  ON payments FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi ödemelerini ekleyebilir" 
  ON payments FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi ödemelerini güncelleyebilir" 
  ON payments FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi ödemelerini silebilir" 
  ON payments FOR DELETE USING (auth.uid() = user_id);

-- INVOICES: Fatura bilgilerini saklar
CREATE TABLE IF NOT EXISTS invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_id UUID REFERENCES payments(id) NOT NULL,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  invoice_number TEXT NOT NULL,
  invoice_details JSONB NOT NULL, -- fatura bilgileri
  invoice_pdf_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- RLS Politikaları
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcılar kendi faturalarını görebilir" 
  ON invoices FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi faturalarını ekleyebilir" 
  ON invoices FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi faturalarını güncelleyebilir" 
  ON invoices FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi faturalarını silebilir" 
  ON invoices FOR DELETE USING (auth.uid() = user_id);

-- CONTACT_MESSAGES: İletişim formundan gelen mesajları saklar
CREATE TYPE message_status AS ENUM ('new', 'read', 'answered');

CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status message_status DEFAULT 'new',
  response TEXT,
  response_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Sadece adminler iletişim mesajlarını görebilir
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Adminler tüm iletişim mesajlarını yönetebilir" 
  ON contact_messages FOR ALL USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.is_admin = true
    )
  );

-- NOTIFICATIONS: Kullanıcı bildirimlerini saklar
CREATE TYPE notification_type AS ENUM ('system', 'marketplace', 'product', 'payment');

CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  type notification_type DEFAULT 'system',
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  related_entity_id UUID, -- ilgili ürün/pazaryeri/ödeme ID'si
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- RLS Politikaları
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcılar kendi bildirimlerini görebilir" 
  ON notifications FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcılar kendi bildirimlerini güncelleyebilir" 
  ON notifications FOR UPDATE USING (auth.uid() = user_id);

-- Otomatik updated_at güncellemesi için tetikleyici
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Tüm tablolar için tetikleyici
CREATE TRIGGER update_user_profiles_modtime
BEFORE UPDATE ON user_profiles
FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_subscriptions_modtime
BEFORE UPDATE ON subscriptions
FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_marketplaces_modtime
BEFORE UPDATE ON marketplaces
FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_products_modtime
BEFORE UPDATE ON products
FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_marketplace_products_modtime
BEFORE UPDATE ON marketplace_products
FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_payments_modtime
BEFORE UPDATE ON payments
FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_invoices_modtime
BEFORE UPDATE ON invoices
FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_contact_messages_modtime
BEFORE UPDATE ON contact_messages
FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

-- Admin kullanıcılarını kontrol etmek için is_admin kolonu yoksa auth.users tablosuna ekleme
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'auth'
    AND table_name = 'users'
    AND column_name = 'is_admin'
  ) THEN
    -- Supabase'de RLS kontrolleri için bu bir fonksiyonla yapılmalı
    -- Bu kısım sadece şema tasarımı içindir, gerçek uygulamada superbase tarafından yönetilir
    -- EXECUTE 'ALTER TABLE auth.users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT false';
    NULL;
  END IF;
END
$$; 