"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/auth-context';
import { PLAN_PRICES, PLAN_FEATURES, SUBSCRIPTION_PLANS } from '@/lib/payment/plan-config';
import { logger } from '@/lib/utils';

type PlanType = keyof typeof SUBSCRIPTION_PLANS;

interface PaymentFormProps {
  selectedPlan: PlanType;
}

export default function PaymentForm({ selectedPlan }: PaymentFormProps) {
  const router = useRouter();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const planInfo = PLAN_FEATURES[SUBSCRIPTION_PLANS[selectedPlan]];
  const planPrice = PLAN_PRICES[SUBSCRIPTION_PLANS[selectedPlan]];

  // Debug log'ları
  logger.debug('PaymentForm Debug', {
    selectedPlan,
    user: user ? { id: user.id, email: user.email } : null,
    planInfo,
    planPrice
  });

  // Form state
  const [formData, setFormData] = useState({
    cardHolderName: '',
    cardNumber: '',
    expireMonth: '',
    expireYear: '',
    cvc: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Kart numarası formatlaması: 1234 5678 9012 3456
    if (name === 'cardNumber') {
      const formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim()
        .slice(0, 19);
      
      setFormData({ ...formData, [name]: formattedValue });
      return;
    }
    
    // Ay formatlaması: max 12
    if (name === 'expireMonth') {
      const month = parseInt(value);
      if (month > 12) {
        setFormData({ ...formData, [name]: '12' });
        return;
      }
    }
    
    // Yıl formatlaması: min 2023
    if (name === 'expireYear') {
      const currentYear = new Date().getFullYear();
      const year = parseInt(value);
      if (year && year < currentYear) {
        setFormData({ ...formData, [name]: currentYear.toString() });
        return;
      }
    }
    
    setFormData({ ...formData, [name]: value });
  };

  // Form doğrulama
  const validateForm = () => {
    if (!formData.cardHolderName) {
      setError('Kart sahibinin adı gereklidir');
      return false;
    }

    if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length < 16) {
      setError('Geçerli bir kart numarası giriniz');
      return false;
    }

    if (!formData.expireMonth || parseInt(formData.expireMonth) < 1 || parseInt(formData.expireMonth) > 12) {
      setError('Geçerli bir son kullanma ayı giriniz (1-12)');
      return false;
    }

    const currentYear = new Date().getFullYear();
    if (!formData.expireYear || parseInt(formData.expireYear) < currentYear) {
      setError(`Geçerli bir son kullanma yılı giriniz (${currentYear} veya sonrası)`);
      return false;
    }

    if (!formData.cvc || formData.cvc.length < 3) {
      setError('Geçerli bir güvenlik kodu giriniz');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    logger.debug('Form Submit Başladı');
    setError(null);
    setSuccess(null);

    logger.debug('User Check', user ? 'User var' : 'User YOK');
    if (!user) {
      logger.warn('User yoksa hata mesajı gösteriliyor');
      setError('Ödeme yapmak için giriş yapmalısınız');
      return;
    }

    logger.debug('Validation başlıyor');
    if (!validateForm()) {
      logger.warn('Validation başarısız');
      return;
    }

    logger.debug('API çağrısı başlıyor');
    setIsLoading(true);

    try {
      // Kart numarasını düzelt
      const cleanCardNumber = formData.cardNumber.replace(/\s/g, '');

      // Ödeme isteği
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          planId: SUBSCRIPTION_PLANS[selectedPlan],
          paymentDetails: {
            cardHolderName: formData.cardHolderName,
            cardNumber: cleanCardNumber,
            expireMonth: formData.expireMonth,
            expireYear: formData.expireYear,
            cvc: formData.cvc,
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Ödeme işlemi sırasında bir hata oluştu');
      }

      setSuccess('Ödeme başarıyla tamamlandı! Yönlendiriliyorsunuz...');
      
      // Kullanıcıyı dashboard'a yönlendir
      setTimeout(() => {
        router.push('/panel');
      }, 2000);
      
    } catch (error) {
      logger.error('Ödeme hatası', error);
      setError(error instanceof Error ? error.message : 'Ödeme işlemi sırasında bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 my-8">
      <h2 className="text-2xl font-bold text-center mb-6">{planInfo.name} Ödemesi</h2>
      
      <div className="mb-6 p-4 bg-gray-50 rounded">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Plan:</span>
          <span>{planInfo.name}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium">Tutar:</span>
          <span>₺{planPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Süre:</span>
          <span>1 Ay</span>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="cardHolderName">
            Kart Sahibinin Adı
          </label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Kart Sahibinin Adı"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
            Kart Numarası
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            required
          />
        </div>

        <div className="flex mb-4 space-x-4">
          <div className="w-1/3">
            <label className="block text-gray-700 mb-2" htmlFor="expireMonth">
              Ay
            </label>
            <input
              type="text"
              id="expireMonth"
              name="expireMonth"
              value={formData.expireMonth}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM"
              maxLength={2}
              required
            />
          </div>
          <div className="w-1/3">
            <label className="block text-gray-700 mb-2" htmlFor="expireYear">
              Yıl
            </label>
            <input
              type="text"
              id="expireYear"
              name="expireYear"
              value={formData.expireYear}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="YYYY"
              maxLength={4}
              required
            />
          </div>
          <div className="w-1/3">
            <label className="block text-gray-700 mb-2" htmlFor="cvc">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123"
              maxLength={4}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded font-bold ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isLoading ? 'İşleniyor...' : 'Ödemeyi Tamamla'}
        </button>
      </form>

      <div className="mt-6 text-xs text-gray-500 text-center">
        <p>Ödemeler 256-bit SSL ile güvenle şifrelenir.</p>
        <p className="mt-1">Test modunda çalışıyor. Gerçek ödeme alınmayacaktır.</p>
      </div>
    </div>
  );
} 