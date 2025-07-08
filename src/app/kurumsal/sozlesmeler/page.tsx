"use client";

import React, { useState } from 'react';

export default function SozlesmelerPage() {
  const agreements = [
    {
      id: "membership",
      title: "Üyelik Sözleşmesi",
      subtitle: "Son güncelleme: 1 Eylül 2023",
      content: `
        <h3>1. Giriş</h3>
        <p>
          İşbu Üyelik Sözleşmesi ("Sözleşme"), PazarSync platformunu ("Platform") kullanmanız için gerekli şartları ve koşulları düzenlemektedir. 
          Bu Sözleşme, siz ("Kullanıcı" veya "Üye") ile PazarSync Yazılım ve Teknoloji A.Ş. ("PazarSync" veya "Şirket") arasında akdedilmiştir.
        </p>
        
        <h3>2. Hizmetlerin Tanımı</h3>
        <p>
          PazarSync, e-ticaret satıcılarına çeşitli pazaryerlerinde ürün yönetimi, stok takibi, sipariş yönetimi ve fiyatlandırma gibi 
          konularda çözümler sunan bir platformdur. Hizmetlerimiz, ödeme yapılan abonelik planına göre değişkenlik gösterebilir.
        </p>
        
        <h3>3. Kayıt ve Güvenlik</h3>
        <p>
          3.1 Platforma kayıt olmak için, doğru ve eksiksiz bilgiler sağlamayı kabul etmektesiniz.<br>
          3.2 Hesap bilgilerinizin gizliliğini korumak ve hesabınız altında gerçekleşen tüm etkinliklerden sorumlu olmak zorundasınız.<br>
          3.3 Hesabınızda yetkisiz bir kullanım veya güvenlik ihlali fark ettiğinizde, durumu derhal PazarSync'e bildirmelisiniz.
        </p>
        
        <h3>4. Kullanıcı Yükümlülükleri</h3>
        <p>
          4.1 Platformu kullanırken tüm geçerli yasalara ve düzenlemelere uymayı kabul edersiniz.<br>
          4.2 Platformu, üçüncü tarafların haklarını ihlal edecek veya kötüye kullanacak şekilde kullanmamayı kabul edersiniz.<br>
          4.3 Platforma zarar verebilecek virüsler veya diğer zararlı kodları kasıtlı olarak tanıtmamayı kabul edersiniz.
        </p>
        
        <h3>5. Ücretlendirme ve Ödeme</h3>
        <p>
          5.1 Kullanıcı, seçtiği abonelik planına göre belirlenen ücretleri ödemeyi kabul eder.<br>
          5.2 Ödemeler, seçilen plana göre aylık veya yıllık olarak peşin alınır.<br>
          5.3 Fiyatlar, önceden bildirimde bulunmak kaydıyla değiştirilebilir. Fiyat değişiklikleri, mevcut fatura dönemini etkilemez.
        </p>
        
        <h3>6. Fikri Mülkiyet</h3>
        <p>
          6.1 Platform ve içeriği, PazarSync'in veya lisans verenlerin mülkiyetindedir ve telif hakkı, ticari marka ve diğer fikri mülkiyet yasaları tarafından korunmaktadır.<br>
          6.2 Platformu kullanmak, bu fikri mülkiyet haklarının size devredildiği anlamına gelmez.
        </p>
        
        <h3>7. Gizlilik</h3>
        <p>
          Kullanıcı bilgilerinizin toplanması, kullanılması ve açıklanması, Gizlilik Politikamız tarafından yönetilir. 
          Platformu kullanarak, Gizlilik Politikamızı kabul etmiş olursunuz.
        </p>
        
        <h3>8. Sözleşmenin Feshi</h3>
        <p>
          8.1 Taraflar, bu Sözleşmeyi istediği zaman feshedebilir.<br>
          8.2 Sözleşme şartlarını ihlal etmeniz durumunda, PazarSync hesabınızı askıya alabilir veya feshedebilir.<br>
          8.3 Fesih durumunda, ödenmiş ücretler iade edilmez (özel durumlar hariç).
        </p>
        
        <h3>9. Sorumluluk Sınırlaması</h3>
        <p>
          9.1 PazarSync, Platform ile ilgili olarak zımni garantiler dahil olmak üzere hiçbir garanti vermez.<br>
          9.2 PazarSync, dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulamaz.
        </p>
        
        <h3>10. Genel Hükümler</h3>
        <p>
          10.1 Bu Sözleşme, taraflar arasındaki anlaşmanın tamamını teşkil eder ve önceki tüm anlaşmaların yerini alır.<br>
          10.2 Bu Sözleşmenin herhangi bir hükmünün geçersiz olması, kalan hükümlerin geçerliliğini etkilemez.<br>
          10.3 Bu Sözleşme, Türkiye Cumhuriyeti yasalarına tabidir ve bu yasalara göre yorumlanır.
        </p>
      `
    },
    {
      id: "privacy",
      title: "Gizlilik Politikası",
      subtitle: "Son güncelleme: 15 Ekim 2023",
      content: `
        <h3>1. Giriş</h3>
        <p>
          PazarSync olarak, gizliliğinize değer veriyoruz. Bu Gizlilik Politikası, hizmetlerimizi kullanırken bilgilerinizin nasıl toplandığını, 
          kullanıldığını ve korunduğunu açıklamaktadır.
        </p>
        
        <h3>2. Toplanan Bilgiler</h3>
        <p>
          2.1 <strong>Hesap Bilgileri:</strong> Kayıt olduğunuzda isim, e-posta adresi, şirket bilgileri ve ödeme bilgileri gibi kişisel bilgilerinizi toplayabiliriz.<br>
          2.2 <strong>Kullanım Verileri:</strong> Platform üzerindeki etkinlikleriniz, tercihleriniz ve etkileşimleriniz hakkında bilgi toplayabiliriz.<br>
          2.3 <strong>Teknik Veriler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri ve çerezler gibi teknik bilgileri toplayabiliriz.
        </p>
        
        <h3>3. Bilgilerin Kullanımı</h3>
        <p>
          Topladığımız bilgileri aşağıdaki amaçlar için kullanıyoruz:<br>
          - Hizmetlerimizi sağlamak ve yönetmek<br>
          - Hesabınızı oluşturmak ve sürdürmek<br>
          - Müşteri hizmetleri sunmak<br>
          - Hizmetlerimizi iyileştirmek ve kişiselleştirmek<br>
          - İletişim kurmak ve güncellemeler sağlamak<br>
          - Dolandırıcılığı önlemek ve güvenliği sağlamak
        </p>
        
        <h3>4. Bilgilerin Paylaşımı</h3>
        <p>
          4.1 Kişisel bilgilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmıyoruz:<br>
          - Yasal yükümlülüklerimizi yerine getirmek için<br>
          - Haklarımızı korumak için<br>
          - Sizin izninizle<br>
          - Hizmet sağlayıcılarımızla (sadece hizmetlerimizi sunmak için gerekli olduğunda)<br>
          4.2 Entegre pazaryerleri ve diğer servislerle hesap bağlantılarınız olduğunda, belirli veriler bu servislerle paylaşılabilir.
        </p>
        
        <h3>5. Veri Güvenliği</h3>
        <p>
          Bilgilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz, ancak internet üzerinden hiçbir aktarım yönteminin veya 
          elektronik depolama yönteminin %100 güvenli olmadığını unutmayın.
        </p>
        
        <h3>6. Verileriniz Üzerindeki Haklarınız</h3>
        <p>
          Kişisel verilerinize erişim, düzeltme, silme veya işlemeyi kısıtlama talep etme hakkına sahipsiniz. Ayrıca, verilerinizi başka bir 
          hizmet sağlayıcıya aktarma hakkınız da bulunmaktadır.
        </p>
        
        <h3>7. Çerezler</h3>
        <p>
          Platformumuz çerezleri ve benzer teknolojileri kullanmaktadır. Bu teknolojiler, deneyiminizi kişiselleştirmemize, trafik analizi yapmamıza 
          ve platformumuzun performansını iyileştirmemize yardımcı olur.
        </p>
        
        <h3>8. Çocukların Gizliliği</h3>
        <p>
          Hizmetlerimiz 18 yaş altındaki kişilere yönelik değildir ve 18 yaş altındaki kişilerden bilerek kişisel bilgi toplamıyoruz.
        </p>
        
        <h3>9. Değişiklikler</h3>
        <p>
          Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olması durumunda, değişikliklerin yürürlüğe girmesinden önce 
          size bildirimde bulunacağız.
        </p>
        
        <h3>10. İletişim</h3>
        <p>
          Bu Gizlilik Politikası ile ilgili sorularınız veya endişeleriniz varsa, lütfen privacy@pazarsync.com adresinden bizimle iletişime geçin.
        </p>
      `
    },
    {
      id: "terms",
      title: "Kullanım Koşulları",
      subtitle: "Son güncelleme: 1 Kasım 2023",
      content: `
        <h3>1. Kabul</h3>
        <p>
          PazarSync platformunu ("Platform") kullanarak, bu Kullanım Koşullarını kabul etmiş olursunuz. Bu koşulları kabul etmiyorsanız, 
          lütfen Platformu kullanmayın.
        </p>
        
        <h3>2. Değişiklikler</h3>
        <p>
          PazarSync, bu Kullanım Koşullarını herhangi bir zamanda değiştirme hakkını saklı tutar. Değişiklikler, Platform üzerinde yayınlandıktan 
          sonra geçerli olacaktır. Platformu kullanmaya devam etmeniz, değiştirilmiş koşulları kabul ettiğiniz anlamına gelir.
        </p>
        
        <h3>3. Hesap Kaydı</h3>
        <p>
          3.1 Platformu kullanmak için bir hesap oluşturmanız gerekebilir.<br>
          3.2 Kaydolurken doğru, güncel ve eksiksiz bilgiler vermeyi kabul edersiniz.<br>
          3.3 Hesap bilgilerinizin güvenliğinden siz sorumlusunuz.
        </p>
        
        <h3>4. Kullanım Lisansı</h3>
        <p>
          PazarSync, Platform'a ve hizmetlerine erişim için kişisel, münhasır olmayan, devredilemez ve sınırlı bir lisans vermektedir. 
          Bu lisans, Platform'u ticari amaçlarınız için kullanmanıza izin verir, ancak Platformun kendisini kopyalamanıza veya değiştirmenize izin vermez.
        </p>
        
        <h3>5. Kullanım Kısıtlamaları</h3>
        <p>
          Aşağıdakileri yapmamayı kabul edersiniz:<br>
          - Platformu yasa dışı amaçlar için kullanmak<br>
          - Platformun güvenliğini ihlal etmek<br>
          - Platformun normal işleyişini engellemek<br>
          - Platformu tersine mühendislik yapmak veya kaynak kodunu çıkarmaya çalışmak<br>
          - Platformdaki içerikleri izinsiz kopyalamak veya dağıtmak
        </p>
        
        <h3>6. Kullanıcı İçeriği</h3>
        <p>
          6.1 Platform üzerinde paylaştığınız tüm içerikten siz sorumlusunuz.<br>
          6.2 PazarSync'e, kullanıcı içeriğinizi Platform hizmetlerini sağlamak için kullanma, kopyalama ve dağıtma hakkı verirsiniz.<br>
          6.3 Yasalara aykırı, zararlı, tehdit edici, taciz edici, aşağılayıcı, müstehcen veya başka bir şekilde sakıncalı içerik paylaşmamayı kabul edersiniz.
        </p>
        
        <h3>7. Fikri Mülkiyet</h3>
        <p>
          7.1 Platform ve içeriği, PazarSync'in veya lisans verenlerin fikri mülkiyetidir.<br>
          7.2 PazarSync logoları, ticari markaları ve diğer mülkiyet hakları ilgili yasalarla korunmaktadır.
        </p>
        
        <h3>8. Üçüncü Taraf Bağlantıları</h3>
        <p>
          Platform, üçüncü taraf web sitelerine veya hizmetlerine bağlantılar içerebilir. Bu bağlantılar, kolaylık sağlamak amacıyla verilmiştir ve 
          PazarSync bu üçüncü taraf sitelerinin içeriği, gizlilik politikaları veya uygulamalarından sorumlu değildir.
        </p>
        
        <h3>9. Sorumluluk Reddi</h3>
        <p>
          Platform "olduğu gibi" ve "mevcut olduğu gibi" sunulmaktadır. PazarSync, zımni garantiler dahil olmak üzere hiçbir garanti vermemektedir. 
          PazarSync, Platformun kesintisiz veya hatasız çalışacağını garanti etmez.
        </p>
        
        <h3>10. Sorumluluk Sınırlaması</h3>
        <p>
          Yasaların izin verdiği azami ölçüde, PazarSync, Platform kullanımınızdan kaynaklanan doğrudan, dolaylı, arızi, özel veya sonuç olarak 
          ortaya çıkan zararlardan sorumlu tutulamaz.
        </p>
        
        <h3>11. Tazminat</h3>
        <p>
          Kullanım Koşullarını ihlal etmenizden veya Platform'u kullanmanızdan kaynaklanan her türlü talep, zarar, yükümlülük, maliyet ve giderden 
          PazarSync'i ve ortaklarını tazmin etmeyi kabul edersiniz.
        </p>
        
        <h3>12. Geçerli Yasa ve Yargı Yetkisi</h3>
        <p>
          Bu Kullanım Koşulları, Türkiye Cumhuriyeti yasalarına tabi olacak ve bu yasalara göre yorumlanacaktır. 
          Bu Kullanım Koşullarından doğan veya bunlarla ilgili her türlü anlaşmazlık, İstanbul mahkemelerinin münhasır yargı yetkisine tabi olacaktır.
        </p>
      `
    }
  ];

  const [selectedAgreement, setSelectedAgreement] = useState(agreements[0]);

  return (
    <div className="container-wide py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="sticky top-24">
              <h2 className="heading-sm mb-6">Yasal Dokümanlar</h2>
              <nav className="flex flex-col gap-2">
                {agreements.map((agreement) => (
                  <button
                    key={agreement.id}
                    onClick={() => setSelectedAgreement(agreement)}
                    className={`text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedAgreement.id === agreement.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-card-foreground"
                    }`}
                  >
                    {agreement.title}
                  </button>
                ))}
              </nav>
              
              <div className="mt-12 p-5 bg-muted rounded-xl">
                <h3 className="font-medium mb-3 text-card-foreground">Yardıma mı ihtiyacınız var?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Yasal dökümanlarımız hakkında sorularınız için bizimle iletişime geçebilirsiniz.
                </p>
                <a 
                  href="/iletisim" 
                  className="text-primary font-medium text-sm hover:underline inline-block"
                >
                  İletişime Geçin →
                </a>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-3/4">
            <div className="mb-8">
              <h1 className="heading-lg mb-2">{selectedAgreement.title}</h1>
              <p className="text-muted-foreground">{selectedAgreement.subtitle}</p>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <div 
                className="prose prose-lg max-w-none text-card-foreground"
                dangerouslySetInnerHTML={{ __html: selectedAgreement.content }}
              />
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-muted rounded-xl">
              <div>
                <p className="text-sm text-center sm:text-left text-card-foreground">
                  Bu dökümanın yazıcı dostu versiyonunu indirin veya paylaşın.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-card rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors">
                  PDF İndir
                </button>
                <button className="px-4 py-2 bg-card rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors">
                  Paylaş
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 