"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/components/auth/auth-context';
import { PLAN_PRICES, PLAN_FEATURES, SUBSCRIPTION_PLANS } from '@/lib/payment/plan-config';

export default function PricingPage() {
  const { user } = useAuth();
  const [isAnnual, setIsAnnual] = useState(false);

  // Yıllık ödeme indirim oranı
  const annualDiscount = 0.20; // %20 indirim

  // İndirim hesaplama fonksiyonu
  const calculateDiscountedPrice = (price: number) => {
    if (isAnnual) {
      const annualPrice = price * 12;
      const discountedPrice = annualPrice * (1 - annualDiscount);
      return discountedPrice / 12; // Aylık eşdeğeri
    }
    return price;
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4 text-foreground">İşletmenize Uygun Planı Seçin</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Tüm planlarımız, temel özelliklerimize erişim sağlar. Daha fazla ürün, pazaryeri entegrasyonu ve öncelikli destek için üst seviye planları tercih edebilirsiniz.
        </p>

        {/* Periyot seçimi */}
        <div className="flex items-center justify-center mb-8">
          <span className={`mr-3 ${isAnnual ? 'text-gray-500' : 'font-semibold'}`}>Aylık</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-background transition ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`ml-3 ${isAnnual ? 'font-semibold' : 'text-gray-500'}`}>
            Yıllık <span className="text-green-600 text-sm">(%20 indirim)</span>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* STARTER PLAN */}
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold mb-2 text-card-foreground">
              {PLAN_FEATURES[SUBSCRIPTION_PLANS.STARTER].name}
            </h2>
            <p className="text-gray-600 mb-6">
              {PLAN_FEATURES[SUBSCRIPTION_PLANS.STARTER].description}
            </p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">
                ₺{calculateDiscountedPrice(PLAN_PRICES[SUBSCRIPTION_PLANS.STARTER]).toFixed(2)}
              </span>
              <span className="text-gray-600 ml-2">/ ay</span>
            </div>
            {isAnnual && (
              <div className="mt-2 text-sm text-green-600">
                Yıllık ödemede aylık ₺{(PLAN_PRICES[SUBSCRIPTION_PLANS.STARTER] * annualDiscount).toFixed(2)} tasarruf!
              </div>
            )}
          </div>

          <div className="p-6">
            <ul className="mb-6 space-y-3">
              {PLAN_FEATURES[SUBSCRIPTION_PLANS.STARTER].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>
                  <strong>{PLAN_FEATURES[SUBSCRIPTION_PLANS.STARTER].maxProducts}</strong> ürün senkronizasyonu
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>
                  <strong>{PLAN_FEATURES[SUBSCRIPTION_PLANS.STARTER].maxMarketplaces}</strong> pazaryeri entegrasyonu
                </span>
              </li>
            </ul>

            <Link
              href={user ? `/odeme/starter` : '/auth/login?redirect=/odeme/starter'}
              className="block w-full text-center py-3 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              {user ? 'Hemen Başla' : 'Giriş Yap ve Başla'}
            </Link>
          </div>
        </div>

        {/* PRO PLAN */}
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border-2 border-primary transform scale-105 z-10">
          <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
            EN ÇOK TERCİH EDİLEN
          </div>
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold mb-2 text-card-foreground">
              {PLAN_FEATURES[SUBSCRIPTION_PLANS.PRO].name}
            </h2>
            <p className="text-gray-600 mb-6">
              {PLAN_FEATURES[SUBSCRIPTION_PLANS.PRO].description}
            </p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">
                ₺{calculateDiscountedPrice(PLAN_PRICES[SUBSCRIPTION_PLANS.PRO]).toFixed(2)}
              </span>
              <span className="text-gray-600 ml-2">/ ay</span>
            </div>
            {isAnnual && (
              <div className="mt-2 text-sm text-green-600">
                Yıllık ödemede aylık ₺{(PLAN_PRICES[SUBSCRIPTION_PLANS.PRO] * annualDiscount).toFixed(2)} tasarruf!
              </div>
            )}
          </div>

          <div className="p-6">
            <ul className="mb-6 space-y-3">
              {PLAN_FEATURES[SUBSCRIPTION_PLANS.PRO].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>
                  <strong>{PLAN_FEATURES[SUBSCRIPTION_PLANS.PRO].maxProducts}</strong> ürün senkronizasyonu
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>
                  <strong>{PLAN_FEATURES[SUBSCRIPTION_PLANS.PRO].maxMarketplaces}</strong> pazaryeri entegrasyonu
                </span>
              </li>
            </ul>

            <Link
              href={user ? `/odeme/pro` : '/auth/login?redirect=/odeme/pro'}
              className="block w-full text-center py-3 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              {user ? 'Hemen Başla' : 'Giriş Yap ve Başla'}
            </Link>
          </div>
        </div>

        {/* ENTERPRISE PLAN */}
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold mb-2 text-card-foreground">
              {PLAN_FEATURES[SUBSCRIPTION_PLANS.ENTERPRISE].name}
            </h2>
            <p className="text-gray-600 mb-6">
              {PLAN_FEATURES[SUBSCRIPTION_PLANS.ENTERPRISE].description}
            </p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">
                ₺{calculateDiscountedPrice(PLAN_PRICES[SUBSCRIPTION_PLANS.ENTERPRISE]).toFixed(2)}
              </span>
              <span className="text-gray-600 ml-2">/ ay</span>
            </div>
            {isAnnual && (
              <div className="mt-2 text-sm text-green-600">
                Yıllık ödemede aylık ₺{(PLAN_PRICES[SUBSCRIPTION_PLANS.ENTERPRISE] * annualDiscount).toFixed(2)} tasarruf!
              </div>
            )}
          </div>

          <div className="p-6">
            <ul className="mb-6 space-y-3">
              {PLAN_FEATURES[SUBSCRIPTION_PLANS.ENTERPRISE].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>
                  <strong>{PLAN_FEATURES[SUBSCRIPTION_PLANS.ENTERPRISE].maxProducts}+</strong> ürün senkronizasyonu
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>
                  <strong>{PLAN_FEATURES[SUBSCRIPTION_PLANS.ENTERPRISE].maxMarketplaces}</strong> pazaryeri entegrasyonu
                </span>
              </li>
            </ul>

            <Link
              href={user ? `/odeme/enterprise` : '/auth/login?redirect=/odeme/enterprise'}
              className="block w-full text-center py-3 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              {user ? 'Hemen Başla' : 'Giriş Yap ve Başla'}
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sık Sorulan Sorular</h2>

        <div className="text-left space-y-6 mt-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Hangi ödeme yöntemlerini kabul ediyorsunuz?</h3>
            <p className="text-gray-600">Kredi ve banka kartları ile ödeme yapabilirsiniz. Tüm ödemeler SSL ile şifrelenir ve güvenli bir şekilde işlenir.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Aboneliğimi istediğim zaman iptal edebilir miyim?</h3>
            <p className="text-gray-600">Evet, herhangi bir zamanda aboneliğinizi iptal edebilirsiniz. İptal işlemi sonraki ödeme döneminden itibaren geçerli olur.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Üst pakete geçiş yapabilir miyim?</h3>
            <p className="text-gray-600">Evet, istediğiniz zaman daha üst bir pakete geçiş yapabilirsiniz. Geçiş yaptığınızda, kalan süre için orantılı olarak ücretlendirme yapılır.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Deneme sürümü var mı?</h3>
            <p className="text-gray-600">Şu anda 7 günlük ücretsiz deneme sürümümüz bulunmaktadır. Deneme süresi boyunca tüm özelliklere erişebilirsiniz.</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-600">
            Başka sorularınız varsa, <Link href="/iletisim" className="text-blue-600 hover:underline">iletişim sayfamız</Link> üzerinden bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
