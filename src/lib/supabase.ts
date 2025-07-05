import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side için normal supabase client
export const supabase = createClient(supabaseUrl, supabaseKey)

// Backwards compatibility için
export default supabase

// Eğer supabase url ve api anahtarı yoksa hata ver
if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Supabase URL veya API anahtarı eksik!');
  console.error('✅ Lütfen .env.local dosyasında NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_ANON_KEY değerlerini kontrol edin');
}

// Supabase bağlantısını test etme fonksiyonu
export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('user_profiles').select('count', { count: 'exact' });
    
    if (error) {
      console.error('❌ Supabase bağlantı hatası:', error);
      return false;
    }
    
    console.log('✅ Supabase bağlantısı başarılı!');
    return true;
  } catch (err) {
    console.error('❌ Supabase bağlantı test hatası:', err);
    return false;
  }
};

// Development modunda bağlantıyı test et
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  testSupabaseConnection();
} 