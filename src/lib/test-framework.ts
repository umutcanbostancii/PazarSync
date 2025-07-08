// Test Framework - Otomatik İyzico Ödeme Testi
export interface TestResult {
  step: string;
  status: 'success' | 'error' | 'warning';
  message: string;
  data?: any;
  timestamp: number;
}

export interface PaymentTestConfig {
  testCardNumber: string;
  testCVC: string;
  testMonth: string;
  testYear: string;
  testName: string;
  planId: string;
}

import { getIyzicoHttpClient } from './payment/iyzico-http-client';
import { logger } from './utils';

export class PaymentTestFramework {
  private results: TestResult[] = [];
  private config: PaymentTestConfig;
  private userId: string | null = null;

  constructor(config: PaymentTestConfig) {
    this.config = config;
  }

  private log(step: string, status: 'success' | 'error' | 'warning', message: string, data?: any) {
    const result: TestResult = {
      step,
      status,
      message,
      data,
      timestamp: Date.now()
    };
    this.results.push(result);
    logger.info(`🧪 [${status.toUpperCase()}] ${step}: ${message}`, data);
  }

  // Test 1: Auth Durumu Kontrolü
  async testAuthStatus(): Promise<boolean> {
    try {
      this.log('AUTH_CHECK', 'success', 'Auth durumu kontrol ediliyor...');
      
      // Supabase session kontrolü
      const { supabase } = await import('@/lib/supabase');
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        this.log('AUTH_CHECK', 'error', 'Auth session error', error);
        return false;
      }

      if (!session || !session.user) {
        this.log('AUTH_CHECK', 'warning', 'Kullanıcı giriş yapmamış');
        return false;
      }

      this.log('AUTH_CHECK', 'success', 'Kullanıcı giriş yapmış', {
        userId: session.user.id,
        email: session.user.email
      });
      
      // User ID'yi kaydet
      this.userId = session.user.id;
      return true;
    } catch (error) {
      this.log('AUTH_CHECK', 'error', 'Auth kontrol hatası', error);
      return false;
    }
  }

  // Test 2: Plan Konfigürasyonu Kontrolü
  async testPlanConfig(): Promise<boolean> {
    try {
      this.log('PLAN_CONFIG', 'success', 'Plan konfigürasyonu kontrol ediliyor...');
      
      const { PLAN_PRICES, PLAN_FEATURES } = await import('@/lib/payment/plan-config');
      
      // Direkt plan ID'yi kontrol et
      const planPrice = PLAN_PRICES[this.config.planId];
      const planFeatures = PLAN_FEATURES[this.config.planId];

      if (!planPrice) {
        this.log('PLAN_CONFIG', 'error', `Plan bulunamadı: ${this.config.planId}`);
        return false;
      }

      this.log('PLAN_CONFIG', 'success', 'Plan konfigürasyonu geçerli', {
        planId: this.config.planId,
        price: planPrice,
        features: planFeatures?.name
      });
      return true;
    } catch (error) {
      this.log('PLAN_CONFIG', 'error', 'Plan config hatası', error);
      return false;
    }
  }

  // Test 3: İyzico API Testi
  async testPaymentAPI(): Promise<boolean> {
    try {
      this.log('PAYMENT_API', 'success', 'İyzico API testi başlıyor...');

      // Gerçek user ID'yi kullan
      const testPayload = {
        userId: this.userId || '123e4567-e89b-12d3-a456-426614174000',
        planId: this.config.planId,
        paymentDetails: {
          cardHolderName: this.config.testName,
          cardNumber: this.config.testCardNumber,
          expireMonth: this.config.testMonth,
          expireYear: this.config.testYear,
          cvc: this.config.testCVC,
        }
      };

      this.log('PAYMENT_API', 'success', 'API çağrısı yapılıyor...', testPayload);

      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testPayload),
      });

      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        result = responseText;
      }

      if (!response.ok) {
        this.log('PAYMENT_API', 'error', 'API çağrısı başarısız', {
          status: response.status,
          error: result
        });
        return false;
      }

      this.log('PAYMENT_API', 'success', 'İyzico API başarılı', result);
      return true;
    } catch (error) {
      this.log('PAYMENT_API', 'error', 'API test hatası', error);
      return false;
    }
  }

  // Test 4: Form Validation Testi
  testFormValidation(): boolean {
    try {
      this.log('FORM_VALIDATION', 'success', 'Form validation testi başlıyor...');

      const validations = [
        {
          field: 'cardHolderName',
          value: this.config.testName,
          valid: this.config.testName.length > 0,
          message: 'Kart sahibi adı kontrolü'
        },
        {
          field: 'cardNumber',
          value: this.config.testCardNumber,
          valid: this.config.testCardNumber.replace(/\s/g, '').length === 16,
          message: 'Kart numarası kontrolü'
        },
        {
          field: 'expireMonth',
          value: this.config.testMonth,
          valid: parseInt(this.config.testMonth) >= 1 && parseInt(this.config.testMonth) <= 12,
          message: 'Ay kontrolü'
        },
        {
          field: 'expireYear',
          value: this.config.testYear,
          valid: parseInt(this.config.testYear) >= new Date().getFullYear(),
          message: 'Yıl kontrolü'
        },
        {
          field: 'cvc',
          value: this.config.testCVC,
          valid: this.config.testCVC.length >= 3,
          message: 'CVC kontrolü'
        }
      ];

      let allValid = true;
      validations.forEach(validation => {
        if (validation.valid) {
          this.log('FORM_VALIDATION', 'success', validation.message, {
            field: validation.field,
            value: validation.value
          });
        } else {
          this.log('FORM_VALIDATION', 'error', validation.message, {
            field: validation.field,
            value: validation.value
          });
          allValid = false;
        }
      });

      return allValid;
    } catch (error) {
      this.log('FORM_VALIDATION', 'error', 'Form validation hatası', error);
      return false;
    }
  }

  /**
   * İyzico HTTP Client test
   */
  async testHttpClient(): Promise<TestResult> {
    const startTime = Date.now();
    
    try {
      this.log('HTTP_CLIENT', 'success', 'İyzico HTTP Client testi başlatılıyor...');

      // Environment variable kontrolü
      const useRealApi = process.env.IYZICO_USE_REAL_API === 'true';
      
      if (!useRealApi) {
        this.log('HTTP_CLIENT', 'warning', 'Mock mode - HTTP Client test atlanıyor');
        return {
          step: 'HTTP_CLIENT',
          status: 'warning',
          message: 'Mock mode aktif',
          data: { mode: 'mock', reason: 'IYZICO_USE_REAL_API=false' },
          timestamp: Date.now()
        };
      }

      // Real API mode - HTTP client test
      this.log('HTTP_CLIENT', 'success', 'Real API mode - BIN endpoint test yapılıyor...');
      
      const { getIyzicoHttpClient } = await import('./payment/iyzico-http-client');
      const httpClient = getIyzicoHttpClient();
      
      const connectionTest = await httpClient.testConnection();
      
      if (connectionTest) {
        this.log('HTTP_CLIENT', 'success', '✅ HTTP Client test başarılı');
        return {
          step: 'HTTP_CLIENT',
          status: 'success',
          message: 'HTTP Client test başarılı',
          data: { 
            endpoint: '/payment/bin/check',
            method: 'Real API test',
            result: 'success'
          },
          timestamp: Date.now()
        };
      } else {
        this.log('HTTP_CLIENT', 'error', '❌ HTTP Client test başarısız');
        return {
          step: 'HTTP_CLIENT',
          status: 'error',
          message: 'HTTP Client test başarısız',
          data: { 
            endpoint: '/payment/bin/check',
            method: 'Real API test',
            result: 'failed'
          },
          timestamp: Date.now()
        };
      }
      
    } catch (error) {
      this.log('HTTP_CLIENT', 'error', `❌ HTTP Client test hatası: ${error}`);
      return {
        step: 'HTTP_CLIENT',
        status: 'error',
        message: 'HTTP Client test hatası',
        data: { error: error instanceof Error ? error.message : String(error) },
        timestamp: Date.now()
      };
    }
  }

  /**
   * Tüm testleri çalıştır - HTTP Client testi dahil
   */
  async runAllTests(): Promise<{ success: boolean; results: TestResult[] }> {
    try {
      this.log('TEST_START', 'success', '🚀 Otomatik test süreci başlıyor...');

      const authOk = await this.testAuthStatus();
      const planOk = await this.testPlanConfig();
      const formOk = this.testFormValidation();
      const apiOk = await this.testPaymentAPI();
      const httpClientOk = await this.testHttpClient();

      const allSuccess = authOk && planOk && formOk && apiOk && httpClientOk.status === 'success';

      this.log('TEST_COMPLETE', allSuccess ? 'success' : 'error', 
        `Test tamamlandı. Sonuç: ${allSuccess ? 'BAŞARILI' : 'BAŞARISIZ'}`, {
        auth: authOk,
        plan: planOk,
        form: formOk,
        api: apiOk,
        httpClient: httpClientOk.status === 'success'
      });

      return {
        success: allSuccess,
        results: this.results
      };
    } catch (error) {
      this.log('TEST_ERROR', 'error', 'Test framework hatası', error);
      return {
        success: false,
        results: this.results
      };
    }
  }

  // Sonuç Analizi
  analyzeResults(): string {
    const errors = this.results.filter(r => r.status === 'error');
    const warnings = this.results.filter(r => r.status === 'warning');
    const successes = this.results.filter(r => r.status === 'success');

    let analysis = `
📊 TEST ANALİZİ
=================
✅ Başarılı: ${successes.length}
⚠️  Uyarı: ${warnings.length}
❌ Hata: ${errors.length}

`;

    if (errors.length > 0) {
      analysis += `🔍 HATALAR:\n`;
      errors.forEach(error => {
        analysis += `- ${error.step}: ${error.message}\n`;
      });
    }

    if (warnings.length > 0) {
      analysis += `\n⚠️ UYARILAR:\n`;
      warnings.forEach(warning => {
        analysis += `- ${warning.step}: ${warning.message}\n`;
      });
    }

    return analysis;
  }
}

// TypeScript interface güncelleme
export interface TestResults {
  auth: TestResult;
  plan: TestResult;
  form: TestResult;
  api: TestResult;
  httpClient: TestResult; // Yeni test sonucu
  summary: {
    total: number;
    passed: number;
    failed: number;
  };
} 