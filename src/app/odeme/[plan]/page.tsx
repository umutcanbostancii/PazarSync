"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/auth-context';
import PaymentForm from '@/components/payment/PaymentForm';
import { SUBSCRIPTION_PLANS } from '@/lib/payment/plan-config';

type PlanType = keyof typeof SUBSCRIPTION_PLANS;

export default function CheckoutPage({ params }: { params: { plan: string } }) {
  const router = useRouter();
  const { user, loading } = useAuth();

  // Plan parametresi kontrolü
  const plan = params.plan.toUpperCase() as PlanType;
  const isValidPlan = Object.keys(SUBSCRIPTION_PLANS).includes(plan);

  useEffect(() => {
    // Eğer kullanıcı giriş yapmamışsa veya geçersiz plan seçilmişse
    if (!loading && !user) {
      router.push('/auth/login?redirect=' + encodeURIComponent(`/odeme/${params.plan}`));
    } else if (!isValidPlan) {
      router.push('/fiyatlar');
    }
  }, [user, loading, router, params.plan, isValidPlan]);

  if (loading) {
    return (
      <div className="container mx-auto p-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!user || !isValidPlan) {
    return null; // useEffect içinde yönlendirme yapılacak
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Ödeme Sayfası</h1>
        
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Ödeme Bilgileri</h2>
            <PaymentForm selectedPlan={plan} />
          </div>
        </div>
      </div>
    </div>
  );
} 