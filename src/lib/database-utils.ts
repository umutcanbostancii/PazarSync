import { supabase } from '@/lib/supabase';

// Database tablolarını kontrol etme fonksiyonu
export const checkDatabaseTables = async () => {
  const tables = [
    'user_profiles',
    'subscriptions', 
    'marketplaces',
    'products',
    'marketplace_products',
    'payments',
    'invoices',
    'contact_messages',
    'notifications'
  ];

  console.log('🔍 Database tablolarını kontrol ediliyor...');
  
  const tableStatus = [];
  
  for (const tableName of tables) {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .limit(1);
      
      if (error) {
        console.error(`❌ ${tableName} tablosu hatası:`, error);
        tableStatus.push({ table: tableName, status: 'error', error: error.message });
      } else {
        console.log(`✅ ${tableName} tablosu çalışıyor`);
        tableStatus.push({ table: tableName, status: 'ok', rowCount: data?.length || 0 });
      }
    } catch (err) {
      console.error(`❌ ${tableName} tablosu beklenmeyen hata:`, err);
      tableStatus.push({ table: tableName, status: 'exception', error: err });
    }
  }
  
  return tableStatus;
};

// Kullanıcı profili oluşturma fonksiyonu
export const createUserProfile = async (userId: string, email: string, fullName?: string) => {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .insert({
        id: userId,
        email: email,
        full_name: fullName || '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single();
    
    if (error) {
      console.error('Kullanıcı profili oluşturma hatası:', error);
      return { success: false, error: error.message };
    }
    
    console.log('✅ Kullanıcı profili oluşturuldu:', data);
    return { success: true, data };
  } catch (err) {
    console.error('Kullanıcı profili oluşturma genel hatası:', err);
    return { success: false, error: 'Beklenmeyen hata' };
  }
};

// Kullanıcı profilini getirme fonksiyonu
export const getUserProfile = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) {
      console.error('Kullanıcı profili alma hatası:', error);
      return { success: false, error: error.message };
    }
    
    return { success: true, data };
  } catch (err) {
    console.error('Kullanıcı profili alma genel hatası:', err);
    return { success: false, error: 'Beklenmeyen hata' };
  }
};

// Kullanıcı aboneliğini kontrol etme fonksiyonu
export const checkUserSubscription = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1);
    
    if (error) {
      console.error('Abonelik kontrolü hatası:', error);
      return { success: false, error: error.message };
    }
    
    return { success: true, data: data?.[0] || null };
  } catch (err) {
    console.error('Abonelik kontrolü genel hatası:', err);
    return { success: false, error: 'Beklenmeyen hata' };
  }
};

// Database bağlantı durumunu test etme
export const testDatabaseConnection = async () => {
  try {
    console.log('🔄 Database bağlantısı test ediliyor...');
    
    // Basit bir select sorgusu ile bağlantıyı test et
    const { data, error } = await supabase
      .from('user_profiles')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('❌ Database bağlantı hatası:', error);
      return { success: false, error: error.message };
    }
    
    console.log('✅ Database bağlantısı başarılı!');
    return { success: true };
  } catch (err) {
    console.error('❌ Database bağlantı test hatası:', err);
    return { success: false, error: 'Beklenmeyen hata' };
  }
};

// Database durumunu kapsamlı kontrol etme
export const checkFullDatabaseStatus = async () => {
  console.log('🔍 Tam database durumu kontrol ediliyor...');
  
  // Bağlantı testi
  const connectionTest = await testDatabaseConnection();
  
  // Tablo kontrolleri
  const tableStatus = await checkDatabaseTables();
  
  const result = {
    connection: connectionTest,
    tables: tableStatus,
    summary: {
      totalTables: tableStatus.length,
      workingTables: tableStatus.filter(t => t.status === 'ok').length,
      errorTables: tableStatus.filter(t => t.status === 'error').length,
      exceptionTables: tableStatus.filter(t => t.status === 'exception').length
    }
  };
  
  console.log('📊 Database durumu:', result);
  return result;
}; 