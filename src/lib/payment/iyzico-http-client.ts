import crypto from 'crypto';

// İyzico HTTP API Client
export class IyzicoHttpClient {
  private apiKey: string;
  private secretKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.IYZICO_API_KEY || '';
    this.secretKey = process.env.IYZICO_SECRET_KEY || '';
    this.baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://api.iyzipay.com' 
      : 'https://sandbox-api.iyzipay.com';

    if (!this.apiKey || !this.secretKey) {
      throw new Error('İyzico API anahtarları eksik!');
    }
  }

  /**
   * HMAC SHA256 ile authorization header oluştur
   */
  private generateAuthHeader(requestBody: string, randomString: string): string {
    const dataToSign = [
      this.apiKey,
      randomString,
      this.secretKey,
      requestBody
    ].join('');

    const hash = crypto
      .createHmac('sha256', this.secretKey)
      .update(dataToSign, 'utf8')
      .digest('base64');

    return `IYZWS ${this.apiKey}:${hash}`;
  }

  /**
   * Random string oluştur (İyzico gereksinimi)
   */
  private generateRandomString(): string {
    return crypto.randomBytes(16).toString('hex');
  }

  /**
   * HTTP istek wrapper'ı
   */
  private async makeRequest(
    endpoint: string, 
    requestBody: any, 
    method: string = 'POST'
  ): Promise<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const bodyString = JSON.stringify(requestBody);
    const randomString = this.generateRandomString();
    const authorization = this.generateAuthHeader(bodyString, randomString);

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authorization,
      'x-iyzi-rnd': randomString,
      'x-iyzi-client-version': 'iyzipay-node-2.0.64'
    };

    console.log('🔗 İyzico HTTP Request:', {
      url,
      method,
      headers: { ...headers, Authorization: '[HIDDEN]' },
      body: { ...requestBody, paymentCard: '[HIDDEN]' }
    });

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: bodyString
      });

      const responseData = await response.json();
      
      console.log('📥 İyzico HTTP Response:', {
        status: response.status,
        data: { ...responseData, paymentCard: '[HIDDEN]' }
      });

      return responseData;
    } catch (error) {
      console.error('❌ İyzico HTTP Request Error:', error);
      throw new Error(`İyzico API isteği başarısız: ${error}`);
    }
  }

  /**
   * Ödeme oluştur (Non-3DS)
   */
  async createPayment(request: IyzicoPaymentRequest): Promise<IyzicoPaymentResponse> {
    const endpoint = '/payment/auth';
    
    // Request validation
    if (!request.paymentCard || !request.buyer || !request.basketItems) {
      throw new Error('Eksik ödeme bilgileri');
    }

    const response = await this.makeRequest(endpoint, request);
    return response as IyzicoPaymentResponse;
  }

  /**
   * Ödeme sorgula
   */
  async retrievePayment(request: { 
    conversationId: string;
    paymentId?: string;
  }): Promise<any> {
    const endpoint = '/payment/detail';
    return await this.makeRequest(endpoint, request);
  }

  /**
   * En basit API key test - sadece credentials doğrulama
   */
  async testCredentials(): Promise<{ valid: boolean; error?: string }> {
    try {
      // En minimal request - sadece locale ve conversationId
      const testRequest = {
        locale: 'tr',
        conversationId: `test_credentials_${Date.now()}`
      };

      console.log('🔑 API Credentials Test başlatılıyor...');
      console.log('📍 API Key:', this.apiKey);
      console.log('🔐 Secret Key (ilk 10 karakter):', this.secretKey.substring(0, 10) + '...');

      const response = await this.makeRequest('/payment/bin/check', testRequest);
      
      // Error 1001 = API keys geçersiz
      if (response && response.errorCode === '1001') {
        return {
          valid: false,
          error: 'API keys geçersiz (Error 1001)'
        };
      }
      
      // Herhangi bir başka response = API keys çalışıyor
      return {
        valid: true
      };
      
    } catch (error) {
      return {
        valid: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  }

  /**
   * Test bağlantısı
   */
  async testConnection(): Promise<boolean> {
    try {
      // En basit test - bin number check
      const testRequest = {
        locale: 'tr',
        conversationId: `test_${Date.now()}`,
        binNumber: '552879'
      };

      const response = await this.makeRequest('/payment/bin/check', testRequest);
      
      console.log('🔍 İyzico BIN test response:', response);
      
      // Herhangi bir response aldıysak (error 1001 dışında) API keys çalışıyor demektir
      if (response) {
        if (response.status === 'failure' && response.errorCode === '1001') {
          console.error('❌ API keys geçersiz (Error 1001)');
          return false;
        }
        console.log('✅ API keys çalışıyor');
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('İyzico bağlantı testi başarısız:', error);
      return false;
    }
  }
}

// TypeScript türleri
export interface IyzicoPaymentRequest {
  locale: string;
  conversationId: string;
  price: string;
  paidPrice: string;
  currency: string;
  installment: string;
  basketId: string;
  paymentChannel: string;
  paymentGroup: string;
  paymentCard: {
    cardHolderName: string;
    cardNumber: string;
    expireMonth: string;
    expireYear: string;
    cvc: string;
    registerCard: string;
  };
  buyer: {
    id: string;
    name: string;
    surname: string;
    gsmNumber: string;
    email: string;
    identityNumber: string;
    registrationAddress: string;
    ip: string;
    city: string;
    country: string;
  };
  shippingAddress: {
    contactName: string;
    city: string;
    country: string;
    address: string;
  };
  billingAddress: {
    contactName: string;
    city: string;
    country: string;
    address: string;
  };
  basketItems: Array<{
    id: string;
    name: string;
    category1: string;
    category2: string;
    itemType: string;
    price: string;
  }>;
}

export interface IyzicoPaymentResponse {
  status: 'success' | 'failure';
  errorCode?: string;
  errorMessage?: string;
  systemTime?: number;
  locale?: string;
  conversationId?: string;
  paymentId?: string;
  paymentTransactionId?: string;
  fraudStatus?: number;
  merchantCommissionRate?: string;
  merchantCommissionRateAmount?: string;
  iyziCommissionRateAmount?: string;
  iyziCommissionFee?: string;
  cardType?: string;
  cardAssociation?: string;
  cardFamily?: string;
  binNumber?: string;
  basketId?: string;
  currency?: string;
  paidPrice?: string;
  price?: string;
}

// Singleton instance
let iyzicoHttpClient: IyzicoHttpClient | null = null;

export const getIyzicoHttpClient = (): IyzicoHttpClient => {
  if (!iyzicoHttpClient) {
    iyzicoHttpClient = new IyzicoHttpClient();
  }
  return iyzicoHttpClient;
}; 