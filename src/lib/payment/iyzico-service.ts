import { getIyzicoHttpClient, IyzicoPaymentRequest } from './iyzico-http-client';
import { getIyzipay } from './iyzico-config';
import { supabase } from '@/lib/supabase';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

// Kullanıcı bilgilerini getir - fallback ile
const getUserInfo = async (userId: string) => {
  try {
    // Önce user_profiles tablosundan dene
    const { data: profileData, error: profileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle(); // single() yerine maybeSingle() kullan

    if (profileData) {
      return profileData;
    }

    // Eğer profile yoksa auth.users'dan dene
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (user && user.id === userId) {
      return {
        id: user.id,
        full_name: user.user_metadata?.full_name || 'Test Kullanıcı',
        email: user.email || 'test@example.com',
        phone: user.user_metadata?.phone || '+905350000000',
        address: 'Istanbul, Turkey'
      };
    }

    // Son çare: test verileri
    return {
      id: userId,
      full_name: 'Test Kullanıcı',
      email: 'test@example.com',
      phone: '+905350000000',
      address: 'Istanbul, Turkey'
    };
  } catch (error) {
    console.warn('Kullanıcı bilgileri alınamadı, test verileri kullanılıyor:', error);
    
    // Hata durumunda test verileri döndür
    return {
      id: userId,
      full_name: 'Test Kullanıcı',
      email: 'test@example.com',
      phone: '+905350000000',
      address: 'Istanbul, Turkey'
    };
  }
};

// Ödeme oluştur - HTTP API ve Mock arasında geçiş
export const createPayment = async (
  userId: string,
  planId: string,
  price: number,
  currency: string = 'TRY',
  paymentDetails?: any
) => {
  try {
    // Kullanıcı bilgilerini al
    const userInfo = await getUserInfo(userId);

    // Environment variable ile Real/Mock mode kontrolü
    const useRealIyzico = process.env.IYZICO_USE_REAL_API === 'true';

    if (useRealIyzico) {
      // 🔥 REAL İYZİCO HTTP API
      console.log('🚀 Real İyzico HTTP API kullanılıyor');
      
      const httpClient = getIyzicoHttpClient();
      
      const request: IyzicoPaymentRequest = {
        locale: 'tr',
        conversationId: `conv_${userId}_${Date.now()}`,
        price: price.toString(),
        paidPrice: price.toString(),
        currency: currency,
        installment: '1',
        basketId: `basket_${planId}_${Date.now()}`,
        paymentChannel: 'WEB',
        paymentGroup: 'SUBSCRIPTION',
        
        paymentCard: {
          cardHolderName: paymentDetails?.cardHolderName || 'John Doe',
          cardNumber: paymentDetails?.cardNumber || '5528790000000008',
          expireMonth: paymentDetails?.expireMonth || '12',
          expireYear: paymentDetails?.expireYear || '2030',
          cvc: paymentDetails?.cvc || '123',
          registerCard: '0'
        },
        
        buyer: {
          id: userId,
          name: userInfo.full_name?.split(' ')[0] || 'Test', 
          surname: userInfo.full_name?.split(' ').slice(1).join(' ') || 'Kullanici',
          gsmNumber: userInfo.phone || '+905350000000', 
          email: userInfo.email || 'test@example.com',
          identityNumber: '11111111111',
          registrationAddress: userInfo.address || 'Istanbul, Turkey',
          ip: '85.34.78.112',
          city: 'Istanbul',
          country: 'Turkey',
        },
        
        shippingAddress: {
          contactName: userInfo.full_name || 'Test Kullanici',
          city: 'Istanbul',
          country: 'Turkey',
          address: userInfo.address || 'Istanbul, Turkey',
        },
        
        billingAddress: {
          contactName: userInfo.full_name || 'Test Kullanici',
          city: 'Istanbul',
          country: 'Turkey',
          address: userInfo.address || 'Istanbul, Turkey',
        },
        
        basketItems: [
          {
            id: planId,
            name: `PazarSync ${planId} Aboneliği`,
            category1: 'Abonelik',
            category2: 'SaaS',
            itemType: 'VIRTUAL',
            price: price.toString()
          }
        ]
      };

      const result = await httpClient.createPayment(request);
      console.log('✅ Real İyzico ödeme sonucu:', result);
      return result;
      
    } else {
      // 🧪 MOCK İYZİCO SİSTEMİ (Mevcut)
      console.log('🧪 Mock İyzico sistemi kullanılıyor');
      
      const request: any = {
        locale: 'tr',
        conversationId: `conv_${userId}_${Date.now()}`,
        price: price.toString(),
        paidPrice: price.toString(),
        currency: currency,
        installment: '1',
        basketId: `basket_${planId}_${Date.now()}`,
        paymentChannel: 'WEB',
        paymentGroup: 'SUBSCRIPTION',
        
        paymentCard: {
          cardHolderName: paymentDetails?.cardHolderName || 'John Doe',
          cardNumber: paymentDetails?.cardNumber || '5528790000000008',
          expireMonth: paymentDetails?.expireMonth || '12',
          expireYear: paymentDetails?.expireYear || '2030',
          cvc: paymentDetails?.cvc || '123',
          registerCard: '0'
        },
        
        buyer: {
          id: userId,
          name: userInfo.full_name?.split(' ')[0] || 'Test', 
          surname: userInfo.full_name?.split(' ').slice(1).join(' ') || 'Kullanici',
          gsmNumber: userInfo.phone || '+905350000000', 
          email: userInfo.email || 'test@example.com',
          identityNumber: '11111111111',
          registrationAddress: userInfo.address || 'Istanbul, Turkey',
          ip: '85.34.78.112',
          city: 'Istanbul',
          country: 'Turkey',
        },
        
        shippingAddress: {
          contactName: userInfo.full_name || 'Test Kullanici',
          city: 'Istanbul',
          country: 'Turkey',
          address: userInfo.address || 'Istanbul, Turkey',
        },
        
        billingAddress: {
          contactName: userInfo.full_name || 'Test Kullanici',
          city: 'Istanbul',
          country: 'Turkey',
          address: userInfo.address || 'Istanbul, Turkey',
        },
        
        basketItems: [
          {
            id: planId,
            name: `PazarSync ${planId} Aboneliği`,
            category1: 'Abonelik',
            category2: 'SaaS',
            itemType: 'VIRTUAL',
            price: price.toString()
          }
        ]
      };

      // Mock sistem kullan (mevcut kod)
      return new Promise(async (resolve, reject) => {
        try {
          const iyzipay = await getIyzipay();
          iyzipay.payment.create(request, (err: any, result: any) => {
            if (err) {
              console.error('İyzico ödeme hatası:', err);
              reject(err);
            } else {
              console.log('İyzico ödeme sonucu:', result);
              resolve(result);
            }
          });
        } catch (error) {
          console.error('İyzico instance alma hatası:', error);
          reject(error);
        }
      });
    }
  } catch (error) {
    console.error('Ödeme işlemi başarısız:', error);
    throw error;
  }
};

// Abonelik oluştur
export const createSubscription = async (
  userId: string, 
  planId: string, 
  cardToken: string
) => {
  try {
    // Kullanıcı bilgilerini al
    const userInfo = await getUserInfo(userId);

    // Abonelik isteği oluştur
    const request: any = {
      locale: 'tr',
      conversationId: `subscription_${userId}_${Date.now()}`,
      pricingPlanReferenceCode: planId,
      subscriptionInitialStatus: 'ACTIVE',
      paymentCard: {
        cardToken: cardToken,
        cardUserKey: userId,
      },
      customer: {
        name: userInfo.full_name?.split(' ')[0] || 'Kullanıcı',
        surname: userInfo.full_name?.split(' ').slice(1).join(' ') || 'Adı',
        identityNumber: '11111111111',
        email: userInfo.email || 'email@domain.com',
        gsmNumber: userInfo.phone || '+905350000000',
        billingAddress: {
          contactName: userInfo.full_name || 'Kullanıcı Adı',
          city: 'Istanbul',
          country: 'Turkey',
          address: userInfo.address || 'Istanbul, Turkey',
        },
        shippingAddress: {
          contactName: userInfo.full_name || 'Kullanıcı Adı',
          city: 'Istanbul',
          country: 'Turkey',
          address: userInfo.address || 'Istanbul, Turkey',
        }
      }
    };

    // Abonelik isteği gönder - Şimdilik basit cevap döndür
    return new Promise(async (resolve, reject) => {
      try {
        // TODO: İyzico subscription API'sini düzelt
        // const iyzipay = await getIyzipay();
        resolve({
          status: 'success', 
          subscriptionReferenceCode: `sub_${userId}_${Date.now()}`
        });
      } catch (error) {
        console.error('İyzico subscription hatası:', error);
        reject(error);
      }
    });
  } catch (error) {
    console.error('Abonelik oluşturma başarısız:', error);
    throw error;
  }
};

// Abonelik iptal etme
export const cancelSubscription = async (subscriptionReferenceCode: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const iyzipay = await getIyzipay();
      iyzipay.subscription.cancel({
        subscriptionReferenceCode: subscriptionReferenceCode,
      }, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

// Abonelik detaylarını getirme
export const getSubscriptionDetails = async (subscriptionReferenceCode: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const iyzipay = await getIyzipay();
      iyzipay.subscription.retrieve({
        subscriptionReferenceCode: subscriptionReferenceCode
      }, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

// Ödeme bilgilerini veritabanına kaydet
export const savePaymentToDatabase = async (
  userId: string,
  paymentResult: any,
  planId: string
) => {
  try {
    // Ödeme kaydını oluştur - supabaseAdmin kullanarak RLS bypass
    const { data: paymentData, error: paymentError } = await supabaseAdmin
      .from('payments')
      .insert({
        user_id: userId,
        amount: parseFloat(paymentResult.paidPrice),
        currency: paymentResult.currency,
        payment_method: 'credit_card',
        payment_reference: paymentResult.paymentId,
        status: paymentResult.status === 'success' ? 'completed' : 'failed',
        payment_details: paymentResult,
      })
      .select()
      .single();

    if (paymentError) {
      throw new Error(`Ödeme kaydedilemedi: ${paymentError.message}`);
    }

    // Ödeme başarılıysa abonelik oluştur/güncelle
    if (paymentResult.status === 'success') {
      // Eski aboneliği kontrol et ve iptal et
      const { data: oldSubscriptions } = await supabaseAdmin
        .from('subscriptions')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'active');

      // Eski abonelikleri iptal et
      if (oldSubscriptions && oldSubscriptions.length > 0) {
        for (const subscription of oldSubscriptions) {
          await supabaseAdmin
            .from('subscriptions')
            .update({ status: 'cancelled', end_date: new Date().toISOString() })
            .eq('id', subscription.id);
        }
      }

      // Yeni abonelik oluştur
      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 1); // 1 aylık abonelik

      const { data: subscriptionData, error: subscriptionError } = await supabaseAdmin
        .from('subscriptions')
        .insert({
          user_id: userId,
          plan_type: planId,
          start_date: startDate.toISOString(),
          end_date: endDate.toISOString(),
          status: 'active',
        })
        .select()
        .single();

      if (subscriptionError) {
        throw new Error(`Abonelik oluşturulamadı: ${subscriptionError.message}`);
      }

      // Ödeme ve abonelik ilişkisini kur
      await supabaseAdmin
        .from('payments')
        .update({ subscription_id: subscriptionData.id })
        .eq('id', paymentData.id);

      // Fatura oluştur
      const invoiceNumber = `INV-${Date.now()}-${userId.substring(0, 5)}`;
      
      const { error: invoiceError } = await supabaseAdmin
        .from('invoices')
        .insert({
          payment_id: paymentData.id,
          user_id: userId,
          invoice_number: invoiceNumber,
          invoice_details: {
            plan: planId,
            amount: parseFloat(paymentResult.paidPrice),
            currency: paymentResult.currency,
            date: new Date().toISOString(),
          },
        });

      if (invoiceError) {
        throw new Error(`Fatura oluşturulamadı: ${invoiceError.message}`);
      }
    }

    return paymentData;
  } catch (error) {
    console.error('Ödeme veritabanına kaydedilemedi:', error);
    throw error;
  }
}; 