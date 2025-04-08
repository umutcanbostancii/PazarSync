// Bu dosya client-side'da kullanılabilir (plan bilgilerini içerir)

// Subscription plan IDs
export const SUBSCRIPTION_PLANS = {
  STARTER: 'starter_plan',
  PRO: 'pro_plan',
  ENTERPRISE: 'enterprise_plan',
};

// Plan ücretleri
export const PLAN_PRICES = {
  [SUBSCRIPTION_PLANS.STARTER]: 99.99,
  [SUBSCRIPTION_PLANS.PRO]: 199.99,
  [SUBSCRIPTION_PLANS.ENTERPRISE]: 499.99,
};

// Plan özellikleri
export const PLAN_FEATURES = {
  [SUBSCRIPTION_PLANS.STARTER]: {
    name: 'Başlangıç Paketi',
    description: 'Küçük işletmeler için ideal başlangıç paketi',
    maxProducts: 100,
    maxMarketplaces: 1,
    supportLevel: 'email',
    features: [
      'Temel pazaryeri entegrasyonu',
      '100 ürün senkronizasyonu',
      'E-posta desteği',
      'Günlük stok güncellemesi'
    ]
  },
  [SUBSCRIPTION_PLANS.PRO]: {
    name: 'Profesyonel Paket',
    description: 'Büyüyen işletmeler için profesyonel çözüm',
    maxProducts: 1000,
    maxMarketplaces: 3,
    supportLevel: 'priority',
    features: [
      'Gelişmiş pazaryeri entegrasyonu',
      '1,000 ürün senkronizasyonu',
      'Öncelikli destek',
      'Saatlik stok güncellemesi',
      'Gelişmiş raporlama'
    ]
  },
  [SUBSCRIPTION_PLANS.ENTERPRISE]: {
    name: 'Kurumsal Paket',
    description: 'Büyük işletmeler için tam kapsamlı çözüm',
    maxProducts: 10000,
    maxMarketplaces: 'Sınırsız',
    supportLevel: 'dedicated',
    features: [
      'Tam pazaryeri entegrasyonu',
      '10,000+ ürün senkronizasyonu',
      'Özel destek yöneticisi',
      'Gerçek zamanlı stok güncellemesi',
      'Özel API entegrasyonları',
      'Gelişmiş analitik'
    ]
  }
}; 