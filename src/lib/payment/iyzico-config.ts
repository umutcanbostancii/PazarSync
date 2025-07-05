// Bu dosya sadece server-side'da kullanılmalıdır

// Iyzico konfigürasyonu
export const iyzipayConfig = {
  apiKey: process.env.IYZICO_API_KEY || '',
  secretKey: process.env.IYZICO_SECRET_KEY || '',
  uri: process.env.NODE_ENV === 'production' 
    ? 'https://api.iyzipay.com' 
    : 'https://sandbox-api.iyzipay.com'
};

// Mock İyzico sınıfı - test için
class MockIyzipay {
  config: any;
  
  constructor(config: any) {
    this.config = config;
  }

  payment = {
    create: (request: any, callback: (err: any, result: any) => void) => {
      // Test kartı kontrolü
      const testCards = ['5528790000000008', '4766620000000001'];
      const isTestCard = testCards.includes(request.paymentCard?.cardNumber);
      
      setTimeout(() => {
        if (isTestCard) {
          // Test kartı için başarılı yanıt
          callback(null, {
            status: 'success',
            paymentId: `test_payment_${Date.now()}`,
            paidPrice: request.paidPrice,
            currency: request.currency,
            conversationId: request.conversationId,
            fraudStatus: 1,
            merchantCommissionRate: '0.00',
            merchantCommissionRateAmount: '0.00',
            iyziCommissionRateAmount: '0.00',
            iyziCommissionFee: '0.00',
            cardType: 'CREDIT_CARD',
            cardAssociation: 'MASTER_CARD',
            cardFamily: 'Bonus',
            binNumber: '552879'
          });
        } else {
          // Geçersiz kart için hata
          callback({
            status: 'failure',
            errorCode: 'BKM_12345',
            errorMessage: 'Geçersiz kart bilgileri'
          }, null);
        }
      }, 500); // 500ms gecikme ile gerçek API'yi simüle et
    }
  };

  subscription = {
    cancel: (request: any, callback: (err: any, result: any) => void) => {
      setTimeout(() => {
        callback(null, {
          status: 'success',
          subscriptionReferenceCode: request.subscriptionReferenceCode
        });
      }, 300);
    },
    
    retrieve: (request: any, callback: (err: any, result: any) => void) => {
      setTimeout(() => {
        callback(null, {
          status: 'success',
          subscriptionReferenceCode: request.subscriptionReferenceCode,
          state: 'ACTIVE'
        });
      }, 300);
    }
  };
}

// İyzico instance'ı - test/production ayırımı
let iyzipayInstance: any = null;

export const getIyzipay = async (): Promise<any> => {
  if (!iyzipayInstance) {
    try {
      // Test/development ortamında mock kullan
      if (process.env.NODE_ENV !== 'production') {
        console.log('🧪 Test ortamında Mock İyzico kullanılıyor');
        iyzipayInstance = new MockIyzipay(iyzipayConfig);
      } else {
        // Production'da gerçek İyzico'yu dene
        const Iyzipay = (await import('iyzipay')).default;
        iyzipayInstance = new Iyzipay(iyzipayConfig);
      }
    } catch (error) {
      console.error('İyzico yükleme hatası:', error);
      
      // Hata durumunda da mock kullan
      console.log('⚠️ Hata nedeniyle Mock İyzico kullanılıyor');
      iyzipayInstance = new MockIyzipay(iyzipayConfig);
    }
  }
  return iyzipayInstance;
};