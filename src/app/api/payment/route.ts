import { NextRequest, NextResponse } from 'next/server';
import { createPayment, savePaymentToDatabase } from '@/lib/payment/iyzico-service';
import { PLAN_PRICES } from '@/lib/payment/plan-config';
import { supabase } from '@/lib/supabase';

// Ödeme oluşturma endpoint'i
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { userId, planId, paymentDetails } = data;

    // Gelen veriyi kontrol et
    console.log('Gelen ödeme verileri:', { userId, planId, paymentDetails });

    // Plan ID kontrolü
    if (!PLAN_PRICES[planId]) {
      return NextResponse.json(
        { error: 'Geçersiz plan' }, 
        { status: 400 }
      );
    }

    // Ödeme bilgileri kontrolü
    if (!paymentDetails || !paymentDetails.cardHolderName || !paymentDetails.cardNumber || 
        !paymentDetails.expireMonth || !paymentDetails.expireYear || !paymentDetails.cvc) {
      return NextResponse.json(
        { error: 'Eksik kart bilgileri' }, 
        { status: 400 }
      );
    }

    // Ödeme tutarını plan ID'den al
    const price = PLAN_PRICES[planId];

    // Ödeme isteği oluştur
    const paymentResult = await createPayment(
      userId,
      planId,
      price,
      'TRY',
      paymentDetails
    );

    console.log('İyzico ödeme sonucu:', paymentResult);

    // Ödeme sonucunu kontrol et
    const result = paymentResult as any;
    if (result && result.status === 'failure') {
      return NextResponse.json(
        { 
          status: 'error', 
          message: 'Ödeme işlemi başarısız', 
          errorCode: result.errorCode,
          errorMessage: result.errorMessage 
        }, 
        { status: 400 }
      );
    }

    // Ödeme başarılıysa veritabanına kaydet
    const dbResult = await savePaymentToDatabase(
      userId, 
      result, 
      planId
    );

    return NextResponse.json({
      status: 'success',
      message: 'Ödeme başarıyla tamamlandı',
      paymentId: result?.paymentId || null,
      dbRecord: dbResult
    });
  } catch (error) {
    console.error('Ödeme işlemi sırasında hata:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Ödeme işlemi sırasında bir hata oluştu',
        error: error instanceof Error ? error.message : 'Bilinmeyen hata'
      }, 
      { status: 500 }
    );
  }
}

// Ödeme durumu sorgulama endpoint'i
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const paymentId = url.searchParams.get('paymentId');
    const userId = url.searchParams.get('userId');

    if (!paymentId || !userId) {
      return NextResponse.json(
        { error: 'Eksik parametre' },
        { status: 400 }
      );
    }

    // Ödeme kaydını sorgula
    const { data, error } = await supabase
      .from('payments')
      .select('*, subscriptions(*)')
      .eq('payment_reference', paymentId)
      .eq('user_id', userId)
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Ödeme kaydı bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: 'success',
      payment: data
    });
  } catch (error) {
    console.error('Ödeme durumu sorgulanırken hata:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Ödeme durumu sorgulanırken bir hata oluştu',
        error: error instanceof Error ? error.message : 'Bilinmeyen hata'
      }, 
      { status: 500 }
    );
  }
} 