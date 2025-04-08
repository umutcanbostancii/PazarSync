import { iyzipay } from './iyzico-config';
import type { CreatePaymentRequest, CreateSubscriptionRequest } from 'iyzipay';
import { supabase } from '@/lib/supabase';

// Kullanıcı bilgilerini getir
const getUserInfo = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    throw new Error(`Kullanıcı bilgileri alınamadı: ${error.message}`);
  }

  return data;
};

// Ödeme oluştur
export const createPayment = async (
  userId: string,
  planId: string,
  price: number,
  currency: string = 'TRY'
) => {
  try {
    // Kullanıcı bilgilerini al
    const userInfo = await getUserInfo(userId);

    // Ödeme isteği oluştur
    const request: CreatePaymentRequest = {
      locale: 'tr',
      conversationId: `conv_${userId}_${Date.now()}`,
      price: price.toString(),
      paidPrice: price.toString(),
      currency: currency,
      installment: '1',
      basketId: `basket_${planId}_${Date.now()}`,
      paymentChannel: 'WEB',
      paymentGroup: 'SUBSCRIPTION',
      
      // Ödeme bilgileri - bunlar frontend'den gelecek
      paymentCard: {
        cardHolderName: 'John Doe', // Frontend'den gelecek
        cardNumber: '5528790000000008', // Test kart numarası, frontend'den gelecek
        expireMonth: '12', // Frontend'den gelecek
        expireYear: '2030', // Frontend'den gelecek
        cvc: '123', // Frontend'den gelecek
        registerCard: '0'
      },
      
      buyer: {
        id: userId,
        name: userInfo.full_name?.split(' ')[0] || 'Kullanıcı', 
        surname: userInfo.full_name?.split(' ').slice(1).join(' ') || 'Adı',
        gsmNumber: userInfo.phone || '+905350000000', 
        email: userInfo.email || 'email@domain.com',
        identityNumber: '11111111111', // TC Kimlik numarası
        registrationAddress: userInfo.address || 'Istanbul, Turkey',
        ip: '85.34.78.112', // İstemci IP adresi, frontend'den gelecek
        city: 'Istanbul',
        country: 'Turkey',
      },
      
      shippingAddress: {
        contactName: userInfo.full_name || 'Kullanıcı Adı',
        city: 'Istanbul',
        country: 'Turkey',
        address: userInfo.address || 'Istanbul, Turkey',
      },
      
      billingAddress: {
        contactName: userInfo.full_name || 'Kullanıcı Adı',
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

    // Ödeme isteği gönder
    return new Promise((resolve, reject) => {
      iyzipay.payment.create(request, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
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
    const request: CreateSubscriptionRequest = {
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

    // Abonelik isteği gönder
    return new Promise((resolve, reject) => {
      iyzipay.subscription.create(request, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  } catch (error) {
    console.error('Abonelik oluşturma başarısız:', error);
    throw error;
  }
};

// Abonelik iptal etme
export const cancelSubscription = async (subscriptionReferenceCode: string) => {
  return new Promise((resolve, reject) => {
    iyzipay.subscription.cancel({
      subscriptionReferenceCode: subscriptionReferenceCode,
    }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// Abonelik detaylarını getirme
export const getSubscriptionDetails = async (subscriptionReferenceCode: string) => {
  return new Promise((resolve, reject) => {
    iyzipay.subscription.retrieve({
      subscriptionReferenceCode: subscriptionReferenceCode
    }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// Ödeme bilgilerini veritabanına kaydet
export const savePaymentToDatabase = async (
  userId: string,
  paymentResult: any,
  planId: string
) => {
  try {
    // Ödeme kaydını oluştur
    const { data: paymentData, error: paymentError } = await supabase
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
      const { data: oldSubscriptions } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'active');

      // Eski abonelikleri iptal et
      if (oldSubscriptions && oldSubscriptions.length > 0) {
        for (const subscription of oldSubscriptions) {
          await supabase
            .from('subscriptions')
            .update({ status: 'cancelled', end_date: new Date().toISOString() })
            .eq('id', subscription.id);
        }
      }

      // Yeni abonelik oluştur
      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 1); // 1 aylık abonelik

      const { data: subscriptionData, error: subscriptionError } = await supabase
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
      await supabase
        .from('payments')
        .update({ subscription_id: subscriptionData.id })
        .eq('id', paymentData.id);

      // Fatura oluştur
      const invoiceNumber = `INV-${Date.now()}-${userId.substring(0, 5)}`;
      
      const { error: invoiceError } = await supabase
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