"use client";

export default function SSSPage() {
  const faqCategories = [
    {
      title: "Genel Sorular",
      items: [
        {
          question: "PazarSync nedir?",
          answer: "PazarSync, e-ticaret satıcılarının çoklu pazaryerlerini (Trendyol, Hepsiburada, N11, Amazon vb.) tek bir panelden yönetmelerini sağlayan entegrasyon platformudur. Ürün, stok, fiyat ve sipariş yönetimini merkezi hale getirerek operasyonel verimliliği artırır."
        },
        {
          question: "PazarSync hangi pazaryerleriyle entegre çalışır?",
          answer: "PazarSync şu anda Trendyol, Hepsiburada, N11, Amazon, Çiçeksepeti, GittiGidiyor, Epttavm ve daha birçok yerel ve global pazaryeri ile entegre çalışmaktadır. Sürekli olarak yeni pazaryeri entegrasyonları eklemekteyiz."
        },
        {
          question: "PazarSync'i kullanmak için teknik bilgiye ihtiyacım var mı?",
          answer: "Hayır, PazarSync kullanıcı dostu bir arayüze sahiptir ve teknik bilgi gerektirmez. Basit ve sezgisel arayüzü sayesinde, e-ticaret konusunda temel bilgisi olan herkes kolayca kullanabilir."
        }
      ]
    },
    {
      title: "Ücretlendirme",
      items: [
        {
          question: "PazarSync'in fiyatlandırma modeli nasıldır?",
          answer: "PazarSync, farklı büyüklükteki işletmelere uygun çeşitli paketler sunmaktadır. Aylık veya yıllık abonelik modeliyle çalışıyoruz. Yıllık ödemelerde indirim sunuyoruz. Detaylı fiyatlandırma için Fiyatlar sayfamızı ziyaret edebilir veya bizimle iletişime geçebilirsiniz."
        },
        {
          question: "Ücretsiz deneme süresi var mı?",
          answer: "Evet, PazarSync'i 14 gün boyunca ücretsiz olarak deneyebilirsiniz. Deneme süresi boyunca tüm özelliklere erişim sağlayarak platformun işletmeniz için uygun olup olmadığını test edebilirsiniz."
        },
        {
          question: "Aboneliğimi istediğim zaman iptal edebilir miyim?",
          answer: "Evet, aboneliğinizi istediğiniz zaman iptal edebilirsiniz. İptal işlemi için müşteri temsilcimizle iletişime geçmeniz yeterlidir. Yıllık abonelik durumunda, kalan süre için kısmi geri ödeme politikamız bulunmaktadır."
        }
      ]
    },
    {
      title: "Ürün ve Stok Yönetimi",
      items: [
        {
          question: "Farklı pazaryerlerindeki ürünlerimi nasıl senkronize edebilirim?",
          answer: "PazarSync, ürün bilgilerinizi merkezi bir veritabanında tutar ve tüm pazaryerlerinize otomatik olarak senkronize eder. Ana panelden yaptığınız değişiklikler, entegre olduğunuz tüm kanallara anında yansıtılır."
        },
        {
          question: "Stok yönetimini nasıl kolaylaştırıyor?",
          answer: "PazarSync, tüm satış kanallarındaki stok seviyelerinizi gerçek zamanlı olarak takip eder ve günceller. Bir kanaldan satış yapıldığında, diğer tüm kanallardaki stok seviyeleri otomatik olarak güncellenir. Bu sayede stok tükenmesi veya aşırı stok sorunlarını önlersiniz."
        },
        {
          question: "Toplu ürün güncellemesi yapabilir miyim?",
          answer: "Evet, PazarSync ile yüzlerce veya binlerce ürünü aynı anda güncelleyebilirsiniz. Toplu fiyat değişikliği, stok güncellemesi veya ürün bilgisi düzenleme gibi işlemleri tek seferde gerçekleştirebilirsiniz."
        }
      ]
    },
    {
      title: "Sipariş Yönetimi",
      items: [
        {
          question: "Siparişleri nasıl yönetebilirim?",
          answer: "PazarSync, tüm pazaryerlerinden gelen siparişleri tek bir panelde toplar. Sipariş durumunu güncelleyebilir, fatura oluşturabilir ve kargo takibi yapabilirsiniz. Ayrıca otomatik sipariş işleme özellikleri ile süreci daha da hızlandırabilirsiniz."
        },
        {
          question: "Kargo entegrasyonu var mı?",
          answer: "Evet, PazarSync birçok kargo firmasıyla entegre çalışır. Siparişleriniz için otomatik olarak kargo etiketleri oluşturabilir ve takip numaralarını müşterilerinizle paylaşabilirsiniz."
        },
        {
          question: "İade ve iptal süreçlerini nasıl yönetirim?",
          answer: "PazarSync, iade ve iptal taleplerini tek bir panelden yönetmenize olanak tanır. Talepleri onaylayabilir, reddedebilir veya özel durumlar için notlar ekleyebilirsiniz. Tüm süreç, ilgili pazaryeriyle otomatik olarak senkronize edilir."
        }
      ]
    },
    {
      title: "Teknik Destek",
      items: [
        {
          question: "Teknik destek almanın yolları nelerdir?",
          answer: "PazarSync, müşterilerine e-posta, canlı sohbet ve telefon üzerinden teknik destek sunmaktadır. Ayrıca, bilgi bankamızda detaylı kullanım kılavuzları ve video eğitimleri bulabilirsiniz."
        },
        {
          question: "Eğitim ve kurulum desteği sağlıyor musunuz?",
          answer: "Evet, tüm müşterilerimize başlangıç eğitimi ve kurulum desteği sunuyoruz. İhtiyacınıza göre özel eğitim paketleri de oluşturabiliyoruz."
        },
        {
          question: "Sistemde bir sorun olduğunda ne kadar sürede çözüm sunuyorsunuz?",
          answer: "Destek ekibimiz, iş saatleri içinde genellikle 2 saat içinde, kritik sorunlara ise 30 dakika içinde yanıt vermektedir. 7/24 acil destek hattımız, kritik sorunlar için her zaman hizmetinizdedir."
        }
      ]
    }
  ];

  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6">Sıkça Sorulan Sorular</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            PazarSync hakkında en çok sorulan soruların cevaplarını burada bulabilirsiniz. Aradığınız cevabı bulamazsanız, lütfen bizimle iletişime geçin.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {faqCategories.map((category, idx) => (
              <a key={idx} href={`#category-${idx}`} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100">
                <h2 className="text-xl font-medium">{category.title}</h2>
                <p className="text-sm text-muted-foreground mt-2">{category.items.length} soru</p>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={`category-${categoryIndex}`} className="scroll-mt-24">
              <h2 className="text-2xl font-light mb-8 border-b pb-4">{category.title}</h2>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-medium mb-4">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-light mb-4">Başka sorularınız mı var?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aradığınız bilgiyi bulamadıysanız, destek ekibimiz yardımcı olmaktan mutluluk duyacaktır. 
            Bize e-posta gönderin veya canlı destek hattımızdan ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/iletisim" className="inline-block">
              <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors w-full">
                İletişime Geçin
              </button>
            </a>
            <a href="/bilgi-bankasi" className="inline-block">
              <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full hover:bg-secondary/80 transition-colors w-full">
                Bilgi Bankası
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 