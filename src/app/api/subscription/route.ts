import { NextRequest, NextResponse } from 'next/server';
import { 
  createSubscription, 
  cancelSubscription, 
  getSubscriptionDetails 
} from '@/lib/payment/iyzico-service';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

// Abonelik oluşturma endpoint'i
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { userId, planId, cardToken } = data;

    // Kullanıcı doğrulama - Server-side admin client kullan
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('id', userId)
      .single();

    if (userError || !user) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' }, 
        { status: 401 }
      );
    }

    // Gerekli parametreleri kontrol et
    if (!userId || !planId || !cardToken) {
      return NextResponse.json(
        { error: 'Eksik parametreler' },
        { status: 400 }
      );
    }

    // Abonelik oluştur
    const subscriptionResult = await createSubscription(userId, planId, cardToken);

    // Abonelik sonucunu kontrol et
    if (!subscriptionResult || (subscriptionResult as any).status === 'failure') {
      return NextResponse.json(
        { 
          status: 'error', 
          message: 'Abonelik oluşturulamadı', 
          errorDetails: subscriptionResult 
        }, 
        { status: 400 }
      );
    }

    // Abonelik bilgilerini veritabanına kaydet
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1); // 1 aylık abonelik

    const { data: dbSubscription, error: dbError } = await supabaseAdmin
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

    if (dbError) {
      console.error('Abonelik veritabanına kaydedilemedi:', dbError);
      return NextResponse.json(
        { 
          status: 'error', 
          message: 'Abonelik oluşturuldu ancak veritabanına kaydedilemedi',
          subscriptionResult: subscriptionResult,
          dbError: dbError.message
        }, 
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: 'success',
      message: 'Abonelik başarıyla oluşturuldu',
      subscription: dbSubscription,
      iyzicoResult: subscriptionResult
    });
  } catch (error) {
    console.error('Abonelik oluşturulurken hata:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Abonelik oluşturulurken bir hata oluştu',
        error: error instanceof Error ? error.message : 'Bilinmeyen hata'
      }, 
      { status: 500 }
    );
  }
}

// Aboneliği iptal etme endpoint'i
export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const subscriptionId = url.searchParams.get('subscriptionId');
    const userId = url.searchParams.get('userId');

    // Parametreleri kontrol et
    if (!subscriptionId || !userId) {
      return NextResponse.json(
        { error: 'Eksik parametreler' },
        { status: 400 }
      );
    }

    // Kullanıcı doğrulama - Server-side admin client kullan
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('id', userId)
      .single();

    if (userError || !user) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' }, 
        { status: 401 }
      );
    }

    // Aboneliği veritabanında kontrol et
    const { data: subscription, error: subError } = await supabaseAdmin
      .from('subscriptions')
      .select('*')
      .eq('id', subscriptionId)
      .eq('user_id', userId)
      .single();

    if (subError || !subscription) {
      return NextResponse.json(
        { error: 'Abonelik bulunamadı' },
        { status: 404 }
      );
    }

    // Aboneliği iptal et
    const cancelResult = await cancelSubscription(subscriptionId);

    // Aboneliği veritabanında güncelle
    const { error: updateError } = await supabaseAdmin
      .from('subscriptions')
      .update({ 
        status: 'cancelled',
        end_date: new Date().toISOString()
      })
      .eq('id', subscriptionId);

    if (updateError) {
      console.error('Abonelik veritabanında güncellenemedi:', updateError);
      return NextResponse.json(
        { 
          status: 'warning', 
          message: 'Abonelik iptal edildi ancak veritabanı güncellenemedi',
          cancelResult: cancelResult,
          updateError: updateError.message
        }, 
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: 'success',
      message: 'Abonelik başarıyla iptal edildi',
      cancelResult: cancelResult
    });
  } catch (error) {
    console.error('Abonelik iptal edilirken hata:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Abonelik iptal edilirken bir hata oluştu',
        error: error instanceof Error ? error.message : 'Bilinmeyen hata'
      }, 
      { status: 500 }
    );
  }
}

// Abonelik detaylarını getirme endpoint'i
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    // Parametreleri kontrol et
    if (!userId) {
      return NextResponse.json(
        { error: 'Eksik parametreler' },
        { status: 400 }
      );
    }

    // Kullanıcı doğrulama - Server-side admin client kullan
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('id', userId)
      .single();

    if (userError || !user) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' }, 
        { status: 401 }
      );
    }

    // Aktif abonelikleri getir
    const { data: subscriptions, error: subError } = await supabaseAdmin
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'active')
      .order('created_at', { ascending: false });

    if (subError) {
      return NextResponse.json(
        { error: 'Abonelik bilgileri alınamadı' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: 'success',
      subscriptions: subscriptions
    });
  } catch (error) {
    console.error('Abonelik bilgileri alınırken hata:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Abonelik bilgileri alınırken bir hata oluştu',
        error: error instanceof Error ? error.message : 'Bilinmeyen hata'
      }, 
      { status: 500 }
    );
  }
} 