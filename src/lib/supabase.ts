import { createClient } from '@supabase/supabase-js'

// Ortam değişkenlerinden Supabase URL ve API anahtarı alınır
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Hata ayıklama mesajlarını kaldırıyorum, güvenlik için
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
      fetch: (...args) => {
        // ISO-8859-1 karakter seti sorununu önlemek için özel fetch
        return fetch(...args).catch(error => {
          console.error('Fetch error:', error);
          throw error;
        });
      }
    }
  }
);

// Eğer supabase url ve api anahtarı yoksa uyarı ver
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or API key is missing. Check your environment variables.')
} 