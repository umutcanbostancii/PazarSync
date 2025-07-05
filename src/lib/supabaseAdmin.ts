import { createClient } from '@supabase/supabase-js'

// Server-side environment variable'ları
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Server-side için service role client (RLS bypass eder)
// 🚨 BU DOSYA SADECE SERVER-SIDE'DA KULLANILMALI! 🚨
// API route'lar, getServerSideProps, server actions için
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Environment variable kontrolleri
if (!supabaseUrl) {
  throw new Error('❌ NEXT_PUBLIC_SUPABASE_URL environment variable eksik!');
}

if (!supabaseServiceKey) {
  throw new Error('❌ SUPABASE_SERVICE_ROLE_KEY environment variable eksik!');
}

// Server-side bağlantıyı test etme fonksiyonu
export const testAdminConnection = async () => {
  try {
    const { data, error } = await supabaseAdmin.from('user_profiles').select('count', { count: 'exact' });
    
    if (error) {
      console.error('❌ Supabase Admin bağlantı hatası:', error);
      return false;
    }
    
    console.log('✅ Supabase Admin bağlantısı başarılı!');
    return true;
  } catch (err) {
    console.error('❌ Supabase Admin test hatası:', err);
    return false;
  }
}; 