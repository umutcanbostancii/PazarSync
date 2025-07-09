"use client";

export default function APIDocsPage() {
  const endpoints = [
    {
      name: "Authentication",
      methods: [
        {
          method: "POST",
          endpoint: "/api/auth/token",
          description: "API erişim tokenı alır",
          params: [
            { name: "client_id", type: "string", required: true, description: "API istemci kimliği" },
            { name: "client_secret", type: "string", required: true, description: "API istemci sırrı" },
            { name: "grant_type", type: "string", required: true, description: "Authorization tipi (client_credentials)" }
          ],
          response: {
            code: 200,
            body: `{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 3600
}`
          }
        }
      ]
    },
    {
      name: "Ürünler",
      methods: [
        {
          method: "GET",
          endpoint: "/api/v1/products",
          description: "Tüm ürünleri listeler",
          params: [
            { name: "page", type: "integer", required: false, description: "Sayfa numarası (varsayılan: 1)" },
            { name: "limit", type: "integer", required: false, description: "Sayfa başına öğe sayısı (varsayılan: 20, max: 100)" },
            { name: "sort", type: "string", required: false, description: "Sıralama alanı (örn: created_at)" },
            { name: "direction", type: "string", required: false, description: "Sıralama yönü (asc veya desc)" },
            { name: "search", type: "string", required: false, description: "Ürün adı veya SKU ile arama" }
          ],
          response: {
            code: 200,
            body: `{
  "data": [
    {
      "id": "prod_123456",
      "sku": "ABC-123",
      "name": "Örnek Ürün",
      "description": "Bu bir örnek ürün açıklamasıdır",
      "stock": 150,
      "price": 149.99,
      "status": "active",
      "created_at": "2023-09-15T14:30:00Z",
      "updated_at": "2023-09-15T14:30:00Z"
    },
    {...}
  ],
  "meta": {
    "current_page": 1,
    "total_pages": 10,
    "total_items": 200,
    "items_per_page": 20
  }
}`
          }
        },
        {
          method: "GET",
          endpoint: "/api/v1/products/{id}",
          description: "Belirli bir ürünün detaylarını getirir",
          params: [
            { name: "id", type: "string", required: true, description: "Ürün kimliği" }
          ],
          response: {
            code: 200,
            body: `{
  "id": "prod_123456",
  "sku": "ABC-123",
  "name": "Örnek Ürün",
  "description": "Bu bir örnek ürün açıklamasıdır",
  "stock": 150,
  "price": 149.99,
  "status": "active",
  "images": [
    {
      "id": "img_1",
      "url": "https://example.com/images/product1.webp",
      "alt_text": "A front view of the product"
    }
  ],
  "categories": [
    {
      "id": "cat_456",
      "name": "Elektronik"
    },
    {...}
  ],
  "variants": [...],
  "attributes": {...},
  "created_at": "2023-09-15T14:30:00Z",
  "updated_at": "2023-09-15T14:30:00Z"
}`
          }
        },
        {
          method: "POST",
          endpoint: "/api/v1/products",
          description: "Yeni bir ürün oluşturur",
          params: [
            { name: "sku", type: "string", required: true, description: "Ürün stok kodu" },
            { name: "name", type: "string", required: true, description: "Ürün adı" },
            { name: "description", type: "string", required: false, description: "Ürün açıklaması" },
            { name: "stock", type: "integer", required: true, description: "Stok miktarı" },
            { name: "price", type: "number", required: true, description: "Ürün fiyatı" },
            { name: "status", type: "string", required: false, description: "Ürün durumu (aktif, taslak, pasif)" },
            { name: "categories", type: "array", required: false, description: "Kategori kimlikleri" },
            { name: "images", type: "array", required: false, description: "Ürün görselleri" },
            { name: "attributes", type: "object", required: false, description: "Ürün özellikleri" }
          ],
          response: {
            code: 201,
            body: `{
  "id": "prod_123456",
  "sku": "ABC-123",
  "name": "Örnek Ürün",
  "description": "Bu bir örnek ürün açıklamasıdır",
  "stock": 150,
  "price": 149.99,
  "status": "active",
  "created_at": "2023-09-15T14:30:00Z",
  "updated_at": "2023-09-15T14:30:00Z"
}`
          }
        }
      ]
    },
    {
      name: "Siparişler",
      methods: [
        {
          method: "GET",
          endpoint: "/api/v1/orders",
          description: "Tüm siparişleri listeler",
          params: [
            { name: "page", type: "integer", required: false, description: "Sayfa numarası (varsayılan: 1)" },
            { name: "limit", type: "integer", required: false, description: "Sayfa başına öğe sayısı (varsayılan: 20, max: 100)" },
            { name: "status", type: "string", required: false, description: "Sipariş durumu ile filtreleme" },
            { name: "from_date", type: "string", required: false, description: "Başlangıç tarihi (ISO 8601)" },
            { name: "to_date", type: "string", required: false, description: "Bitiş tarihi (ISO 8601)" }
          ],
          response: {
            code: 200,
            body: `{
  "data": [
    {
      "id": "ord_789012",
      "order_number": "ORD123456",
      "marketplace": "trendyol",
      "status": "processing",
      "total_amount": 349.98,
      "items_count": 2,
      "created_at": "2023-09-16T10:15:00Z",
      "updated_at": "2023-09-16T10:15:00Z"
    },
    {...}
  ],
  "meta": {
    "current_page": 1,
    "total_pages": 5,
    "total_items": 87,
    "items_per_page": 20
  }
}`
          }
        },
        {
          method: "GET",
          endpoint: "/api/v1/orders/{id}",
          description: "Belirli bir siparişin detaylarını getirir",
          params: [
            { name: "id", type: "string", required: true, description: "Sipariş kimliği" }
          ],
          response: {
            code: 200,
            body: `{
  "id": "ord_789012",
  "order_number": "ORD123456",
  "marketplace": "trendyol",
  "status": "processing",
  "customer": {
    "name": "Ahmet Yılmaz",
    "email": "ahmet@example.com",
    "phone": "+905551234567"
  },
  "shipping_address": {
    "address_line1": "Örnek Mahallesi, 123 Sokak No:45",
    "address_line2": "Daire 5",
    "city": "İstanbul",
    "state": "Kadıköy",
    "postal_code": "34000",
    "country": "TR"
  },
  "items": [
    {
      "id": "item_123",
      "product_id": "prod_123456",
      "sku": "ABC-123",
      "name": "Örnek Ürün",
      "quantity": 2,
      "unit_price": 149.99,
      "total_price": 299.98
    },
    {...}
  ],
  "total_amount": 349.98,
  "shipping_fee": 50.00,
  "tax_amount": 62.99,
  "discount_amount": 0,
  "created_at": "2023-09-16T10:15:00Z",
  "updated_at": "2023-09-16T10:15:00Z"
}`
          }
        }
      ]
    },
    {
      name: "Stok",
      methods: [
        {
          method: "PUT",
          endpoint: "/api/v1/products/{id}/stock",
          description: "Ürün stok miktarını günceller",
          params: [
            { name: "id", type: "string", required: true, description: "Ürün kimliği" },
            { name: "stock", type: "integer", required: true, description: "Yeni stok miktarı" }
          ],
          response: {
            code: 200,
            body: `{
  "id": "prod_123456",
  "sku": "ABC-123",
  "stock": 150,
  "updated_at": "2023-09-17T09:45:00Z"
}`
          }
        },
        {
          method: "POST",
          endpoint: "/api/v1/stocks/batch",
          description: "Toplu stok güncellemesi yapar",
          params: [
            { name: "items", type: "array", required: true, description: "Güncellenecek ürünler ve stok bilgileri" }
          ],
          request_body: `{
  "items": [
    {
      "product_id": "prod_123456",
      "stock": 150
    },
    {
      "sku": "DEF-456",
      "stock": 75
    }
  ]
}`,
          response: {
            code: 200,
            body: `{
  "updated": 2,
  "failed": 0,
  "errors": []
}`
          }
        }
      ]
    }
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="heading-lg mb-6">API Dokümantasyonu</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            PazarSync API&apos;si, tüm e-ticaret operasyonlarınızı programatik olarak yönetmenize olanak tanır. 
            Bu dokümantasyon, API&apos;mizin nasıl kullanılacağı hakkında detaylı bilgiler içermektedir.
          </p>
        </div>

        {/* Getting Started */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-6">Başlarken</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Kimlik Doğrulama</h3>
            <p className="text-muted-foreground mb-4">
              PazarSync API&apos;si, OAuth 2.0 protokolünü kullanır. API isteklerinde kullanmak üzere bir erişim tokenı almak için 
              öncelikle API istemci kimliği ve sırrı almanız gerekiyor.
            </p>
            <div className="mb-4">
              <h4 className="font-medium mb-2">1. API Kimlik Bilgilerini Edinin</h4>
              <p className="text-muted-foreground">
                PazarSync hesabınızda, &quot;Ayarlar → API&quot; bölümünden API istemci kimliği ve sırrı edinebilirsiniz.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-medium mb-2">2. Erişim Tokenı Alın</h4>
              <p className="text-muted-foreground mb-2">
                Kimlik bilgilerinizi kullanarak bir Bearer token alın. Bu token, diğer API çağrılarında kimlik doğrulama için kullanılacaktır.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                <code>{`curl -X POST https://api.pazarsync.com/api/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "your_client_id",
    "client_secret": "your_client_secret",
    "grant_type": "client_credentials"
  }'`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. API İsteklerinde Tokenı Kullanın</h4>
              <p className="text-muted-foreground mb-2">
                Alınan erişim tokenını diğer API isteklerinin Authorization başlığında kullanın.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                <code>{`curl -X GET https://api.pazarsync.com/api/v1/products \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Rate Limiting */}
        <div className="mb-16">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Hız Sınırlaması</h3>
            <p className="text-muted-foreground mb-4">
              API isteklerinizin sayısı, abonelik planınıza göre sınırlandırılmıştır. Hız sınırları şu şekildedir:
            </p>
            <table className="min-w-full mb-4">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left font-medium">Plan</th>
                  <th className="py-2 px-4 text-left font-medium">Dakika Başına İstek</th>
                  <th className="py-2 px-4 text-left font-medium">Gün Başına İstek</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Temel</td>
                  <td className="py-2 px-4">60</td>
                  <td className="py-2 px-4">10,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">İşletme</td>
                  <td className="py-2 px-4">300</td>
                  <td className="py-2 px-4">50,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Kurumsal</td>
                  <td className="py-2 px-4">1,000</td>
                  <td className="py-2 px-4">Sınırsız</td>
                </tr>
              </tbody>
            </table>
            <p className="text-muted-foreground mb-2">
              Her API yanıtı, kalan istek limitinizi belirten aşağıdaki başlıkları içerir:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
              <code>{`X-RateLimit-Limit: 60
X-RateLimit-Remaining: 58
X-RateLimit-Reset: 1631789945`}</code>
            </pre>
          </div>
        </div>

        {/* Endpoints */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-6">API Referansı</h2>
          
          {endpoints.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-xl font-medium mb-4 border-b pb-2">{category.name}</h3>
              
              {category.methods.map((method, methodIndex) => (
                <div key={methodIndex} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      method.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                      method.method === 'POST' ? 'bg-green-100 text-green-800' :
                      method.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                      method.method === 'DELETE' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {method.method}
                    </span>
                    <code className="text-lg">{method.endpoint}</code>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{method.description}</p>
                  
                  {method.params && method.params.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Parametreler</h4>
                      <table className="min-w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="py-2 px-4 text-left font-medium">İsim</th>
                            <th className="py-2 px-4 text-left font-medium">Tip</th>
                            <th className="py-2 px-4 text-left font-medium">Gerekli</th>
                            <th className="py-2 px-4 text-left font-medium">Açıklama</th>
                          </tr>
                        </thead>
                        <tbody>
                          {method.params.map((param, paramIndex) => (
                            <tr key={paramIndex} className="border-b">
                              <td className="py-2 px-4 font-mono text-sm">{param.name}</td>
                              <td className="py-2 px-4 text-sm">{param.type}</td>
                              <td className="py-2 px-4 text-sm">{param.required ? "Evet" : "Hayır"}</td>
                              <td className="py-2 px-4 text-sm">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  
                  {method.request_body && (
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">İstek Gövdesi</h4>
                      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{method.request_body}</code>
                      </pre>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-medium mb-2">Yanıt ({method.response.code})</h4>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                      <code>{method.response.body}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Support */}
        <div className="bg-primary/5 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-light mb-4">API Desteği</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            API entegrasyonuyla ilgili sorularınız veya sorunlarınız mı var? Teknik destek ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:api-support@pazarsync.com" className="inline-block">
              <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors w-full">
                E-posta Gönder
              </button>
            </a>
            <a href="/iletisim" className="inline-block">
              <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full hover:bg-secondary/80 transition-colors w-full">
                İletişim Formu
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 