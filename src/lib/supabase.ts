import { createClient } from '@supabase/supabase-js'

// Ortam değişkenlerinden Supabase URL ve API anahtarı alınır
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Custom fetch fonksiyonu
const customFetch = (url: URL | RequestInfo, init?: RequestInit) => {
  // ASCII olmayan karakterleri önle
  if (init?.headers) {
    const headers = new Headers(init.headers);
    
    // Headers'ı kontrol et ve düzelt
    headers.forEach((value, key) => {
      // ASCII olmayan karakterleri filtrele
      const safeValue = value.replace(/[^\x00-\x7F]/g, '');
      if (safeValue !== value) {
        headers.set(key, safeValue);
      }
    });

    // Temizlenmiş headers'ı kullan
    init.headers = headers;
  }

  // Fetch çağrısını yap
  return fetch(url, init);
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