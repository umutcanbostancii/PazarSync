"use client";

import PaymentForm from '@/components/payment/PaymentForm';
import { SUBSCRIPTION_PLANS } from '@/lib/payment/plan-config';

type PlanKeys = keyof typeof SUBSCRIPTION_PLANS;

export default function PlanOdemePage({ params }: { params: { plan: string } }) {
  const planKey = params.plan?.toUpperCase() as PlanKeys;
  
  // Plan kontrolü
  if (!SUBSCRIPTION_PLANS[planKey]) {
    return (
      <div className="container-wide py-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Geçersiz Plan</h1>
          <p>Bu plan bulunamadı.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-wide py-20">
      <div className="max-w-4xl mx-auto">
        <PaymentForm selectedPlan={planKey} />
      </div>
    </div>
  );
} 