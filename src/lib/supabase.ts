import { createClient } from '@supabase/supabase-js'

// Ortam değişkenlerinden Supabase URL ve API anahtarı alınır
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Custom fetch fonksiyonu - ISO-8859-1 karakter seti hatasını çözmek için
const customFetch = (url: URL | RequestInfo, init?: RequestInit) => {
  // Eğer init ya da headers yoksa standart fetch'i kullan
  if (!init?.headers) {
    return fetch(url, init);
  }
  
  try {
    // Headers'ı kopyala ve güvenli biçimde işle
    const safeHeaders = new Headers();
    
    // Orijinal headers'ı oku
    const originalHeaders = new Headers(init.headers);
    
    // Her bir header'ı güvenli şekilde kopyala
    originalHeaders.forEach((value, key) => {
      try {
        // ASCII olmayan karakterleri filtrele
        const safeValue = value.replace(/[^\x00-\x7F]/g, '');
        safeHeaders.set(key, safeValue);
      } catch (error) {
        console.warn(`Header işlenirken hata: ${key}`, error);
        // Hataya rağmen devam et, problematik header'ı atla
      }
    });
    
    // Yeni init objesi oluştur ve güvenli headers'ı ekle
    const safeInit = {
      ...init,
      headers: safeHeaders
    };
    
    // Güvenli init ile fetch'i çağır
    return fetch(url, safeInit);
  } catch (error) {
    console.error('Header işleme hatası:', error);
    // Hata olursa orijinal fetch'e geri dön
    return fetch(url, init);
  }
};

// Supabase istemci oluşturulur, özel header ayarları ile
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      // Debug modunu açarak sorunları daha iyi anlayabilirsiniz
      debug: true,
    },
    global: {
      fetch: customFetch
    }
  }
);

// Eğer supabase url ve api anahtarı yoksa uyarı ver
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or API key is missing. Check your environment variables.');
} 