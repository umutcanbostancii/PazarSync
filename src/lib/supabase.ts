import { createClient } from '@supabase/supabase-js'

// Ortam değişkenlerinden Supabase URL ve API anahtarı alınır
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Supabase istemci oluşturulur
export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
)

// Eğer supabase url ve api anahtarı yoksa uyarı ver
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or API key is missing. Check your environment variables.')
} 