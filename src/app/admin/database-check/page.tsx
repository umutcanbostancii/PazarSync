"use client";

import { useState, useEffect } from 'react';
import { checkFullDatabaseStatus, checkDatabaseTables } from '@/lib/database-utils';

export default function DatabaseCheckPage() {
  const [dbStatus, setDbStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const checkDatabase = async () => {
    setLoading(true);
    setError('');
    
    try {
      const status = await checkFullDatabaseStatus();
      setDbStatus(status);
    } catch (err) {
      console.error('Database kontrol hatası:', err);
      setError('Database kontrol edilirken bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkDatabase();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ok':
        return 'text-green-600 bg-green-50';
      case 'error':
        return 'text-red-600 bg-red-50';
      case 'exception':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ok':
        return '✅';
      case 'error':
        return '❌';
      case 'exception':
        return '⚠️';
      default:
        return '❓';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Database Durum Kontrolü
            </h1>
            <button
              onClick={checkDatabase}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Kontrol Ediliyor...' : 'Yeniden Kontrol Et'}
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {dbStatus && (
            <div className="space-y-6">
              {/* Bağlantı Durumu */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">Bağlantı Durumu</h2>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    dbStatus.connection.success 
                      ? 'text-green-600 bg-green-100' 
                      : 'text-red-600 bg-red-100'
                  }`}>
                    {dbStatus.connection.success ? '✅ Bağlantı Başarılı' : '❌ Bağlantı Hatası'}
                  </span>
                </div>
                {dbStatus.connection.error && (
                  <div className="mt-2 p-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded">
                    Hata: {dbStatus.connection.error}
                  </div>
                )}
              </div>

              {/* Tablo Durumu Özeti */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">Tablo Durumu Özeti</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{dbStatus.summary.totalTables}</div>
                    <div className="text-sm text-gray-600">Toplam Tablo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{dbStatus.summary.workingTables}</div>
                    <div className="text-sm text-gray-600">Çalışan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{dbStatus.summary.errorTables}</div>
                    <div className="text-sm text-gray-600">Hatalı</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">{dbStatus.summary.exceptionTables}</div>
                    <div className="text-sm text-gray-600">İstisna</div>
                  </div>
                </div>
              </div>

              {/* Tablo Detayları */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">Tablo Detayları</h2>
                <div className="space-y-3">
                  {dbStatus.tables.map((table: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{getStatusIcon(table.status)}</span>
                          <span className="font-medium text-gray-900">{table.table}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(table.status)}`}>
                          {table.status.toUpperCase()}
                        </span>
                      </div>
                      {table.error && (
                        <div className="mt-2 p-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded">
                          Hata: {table.error}
                        </div>
                      )}
                      {table.status === 'ok' && (
                        <div className="text-sm text-gray-600">
                          Tablo erişilebilir durumda
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tablo Şeması Bilgisi */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">Beklenen Tablolar</h2>
                <div className="text-sm text-gray-700">
                  <ul className="space-y-1">
                    <li><strong>user_profiles</strong> - Kullanıcı profil bilgileri</li>
                    <li><strong>subscriptions</strong> - Kullanıcı abonelikleri</li>
                    <li><strong>marketplaces</strong> - Pazaryeri entegrasyonları</li>
                    <li><strong>products</strong> - Ürün bilgileri</li>
                    <li><strong>marketplace_products</strong> - Pazaryeri ürün eşleştirmeleri</li>
                    <li><strong>payments</strong> - Ödeme kayıtları</li>
                    <li><strong>invoices</strong> - Fatura bilgileri</li>
                    <li><strong>contact_messages</strong> - İletişim mesajları</li>
                    <li><strong>notifications</strong> - Kullanıcı bildirimleri</li>
                  </ul>
                </div>
              </div>

              {/* Öneriler */}
              <div className="bg-yellow-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">Öneriler</h2>
                <div className="text-sm text-gray-700">
                  <ul className="space-y-1">
                    <li>• Eğer tablolar bulunamazsa, <code>sql/database-schema.sql</code> dosyasını Supabase'de çalıştırın</li>
                    <li>• RLS (Row Level Security) politikalarının aktif olduğundan emin olun</li>
                    <li>• Environment variables'ların doğru ayarlandığından emin olun</li>
                    <li>• Supabase proje URL'sinin ve API anahtarının doğru olduğunu kontrol edin</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 