// Bu dosya sadece server-side'da kullanılmalıdır
'use server';

import Iyzipay from 'iyzipay';

// Iyzico konfigürasyonu
const iyzipayConfig = {
  apiKey: process.env.IYZICO_API_KEY || '',
  secretKey: process.env.IYZICO_SECRET_KEY || '',
  uri: process.env.NODE_ENV === 'production' 
    ? 'https://api.iyzipay.com' 
    : 'https://sandbox-api.iyzipay.com'
};

// Iyzico instance'ı oluştur
const iyzipay = new Iyzipay(iyzipayConfig);

export { iyzipay };