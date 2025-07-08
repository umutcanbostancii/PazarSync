"use client";

import React from 'react';

export default function GizlilikPolitikasiPage() {
  return (
    <div className="container-wide py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="heading-lg mb-4">Gizlilik Politikası</h1>
          <p className="text-muted-foreground text-lg">
            PazarSync olarak, müşterilerimizin gizliliğine saygı duyuyor ve kişisel verilerinizi korumak için gereken tüm tedbirleri alıyoruz. 
            Bu gizlilik politikası, bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
          </p>
          <p className="text-sm text-muted-foreground mt-2">Son güncelleme: 15 Ekim 2023</p>
        </div>
        
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border mb-10">
          <div className="prose prose-lg max-w-none text-card-foreground">
            <h2>1. Giriş</h2>
            <p>
              PazarSync Yazılım ve Teknoloji A.Ş. ("PazarSync" veya "biz") olarak, gizliliğinize değer veriyor ve kişisel verilerinizi 
              Türkiye'nin 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ile uyumlu bir şekilde işlemeyi taahhüt ediyoruz. 
              Bu Gizlilik Politikası, web sitemizi ve hizmetlerimizi kullanırken kişisel verilerinizin nasıl toplandığını, 
              kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
            
            <h2>2. Toplanan Bilgiler</h2>
            <h3>2.1 Doğrudan Sağladığınız Bilgiler</h3>
            <p>
              Size hizmet sunabilmek için aşağıdaki türde bilgileri sizden doğrudan toplayabiliriz:
            </p>
            <ul>
              <li><strong>Hesap Bilgileri:</strong> Adınız, soyadınız, e-posta adresiniz, telefon numaranız, şirket adınız, pozisyonunuz.</li>
              <li><strong>Ödeme Bilgileri:</strong> Fatura adresi, vergi numarası, ödeme yöntemi bilgileri (doğrudan kredi kartı veya banka hesap numaralarını kaydetmiyoruz, bunun yerine güvenli ödeme sağlayıcıları kullanıyoruz).</li>
              <li><strong>İletişim Bilgileri:</strong> Destek talepleri, geri bildirimler veya sorular gönderdiğinizde sağladığınız bilgiler.</li>
              <li><strong>Pazaryeri Entegrasyon Bilgileri:</strong> Pazaryeri hesaplarınızı PazarSync'e bağlamak için kullandığınız API anahtarları, token'lar ve diğer entegrasyon verileri.</li>
            </ul>
            
            <h3>2.2 Otomatik Olarak Toplanan Bilgiler</h3>
            <p>
              Hizmetlerimizi kullandığınızda veya web sitemizi ziyaret ettiğinizde, bazı bilgileri otomatik olarak toplayabiliriz:
            </p>
            <ul>
              <li><strong>Cihaz Bilgileri:</strong> IP adresi, tarayıcı türü ve versiyonu, işletim sistemi.</li>
              <li><strong>Kullanım Verileri:</strong> Platformumuzda hangi özellikleri kullandığınız, erişim süreleri, tıklama davranışları.</li>
              <li><strong>Çerez Verileri:</strong> Çerezler ve benzer teknolojiler aracılığıyla toplanan bilgiler (daha fazla bilgi için Çerez Politikamıza bakınız).</li>
              <li><strong>Log Verileri:</strong> Sunucularımıza yapılan istekler, hata kayıtları ve platform performans verileri.</li>
            </ul>
            
            <h2>3. Bilgilerin Kullanımı</h2>
            <p>
              Topladığımız bilgileri aşağıdaki amaçlar için kullanırız:
            </p>
            <ul>
              <li>Sizin için PazarSync hizmetlerini sağlamak, yönetmek ve geliştirmek</li>
              <li>Hesabınızı oluşturmak ve yönetmek</li>
              <li>Müşteri desteği sunmak ve sorularınızı yanıtlamak</li>
              <li>Platformumuzun güvenliğini sağlamak ve dolandırıcılığı önlemek</li>
              <li>Size özelleştirilmiş içerik ve deneyimler sunmak</li>
              <li>Ürün ve hizmetlerimiz hakkında sizinle iletişim kurmak (onayınıza bağlı olarak)</li>
              <li>Ürün ve hizmetlerimizi iyileştirmek için analitik ve araştırma yürütmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>
            
            <h2>4. Bilgilerin Paylaşımı</h2>
            <p>
              Kişisel verilerinizi şu durumlarda üçüncü taraflarla paylaşabiliriz:
            </p>
            <ul>
              <li><strong>Hizmet Sağlayıcılar:</strong> Hizmetlerimizi sunmamıza yardımcı olan ödeme işlemcileri, hosting sağlayıcıları, e-posta hizmet sağlayıcıları gibi üçüncü taraf hizmet sağlayıcıları.</li>
              <li><strong>Pazaryeri Entegrasyonları:</strong> Platformumuz aracılığıyla bağladığınız pazaryerleri ve satış kanalları (Trendyol, Hepsiburada, Amazon vb.).</li>
              <li><strong>İş Ortakları:</strong> Hizmetlerimizi sunmak veya geliştirmek için iş birliği yaptığımız güvenilir iş ortakları.</li>
              <li><strong>Yasal Gereklilikler:</strong> Yasal bir yükümlülüğe uymak, yasal bir süreci yürütmek veya kamu yetkilileri tarafından yapılan geçerli taleplere yanıt vermek için.</li>
              <li><strong>İş Transferleri:</strong> Şirketimizin tamamının veya bir kısmının satışı, devri veya birleşmesi durumunda.</li>
              <li><strong>Rızanız İle:</strong> Bilgilerinizi paylaşmak için açık rızanızı aldığımız diğer durumlar.</li>
            </ul>
            
            <h2>5. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizi yetkisiz erişim, değişiklik, ifşa veya imhaya karşı korumak için uygun teknik ve organizasyonel önlemler alıyoruz. Bu önlemler arasında:
            </p>
            <ul>
              <li>Endüstri standardı SSL/TLS şifreleme</li>
              <li>Düzenli güvenlik değerlendirmeleri ve testleri</li>
              <li>Veri tabanı şifreleme ve güvenli yedekleme</li>
              <li>Personel için güvenlik eğitimi ve erişim kontrolü</li>
              <li>Fiziksel veri merkezi güvenliği</li>
            </ul>
            <p>
              Ancak, internet üzerinden aktarılan veya elektronik depolama yöntemleriyle saklanan hiçbir veri aktarımının veya güvenlik yönteminin %100 güvenli olmadığını unutmayın.
            </p>
            
            <h2>6. Veri Saklama</h2>
            <p>
              Kişisel verilerinizi, hizmetlerimizi sunmak için gereken süre boyunca veya yasalar tarafından daha uzun bir süre gerektirmedikçe saklarız. Belirli durumlarda, kişisel verilerinizi anonimleştirebilir veya yedekleme ve arşivleme amaçlarıyla sınırlı olarak saklayabiliriz.
            </p>
            
            <h2>7. Haklarınız</h2>
            <p>
              KVKK kapsamında aşağıdaki haklara sahipsiniz:
            </p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse, buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
              <li>Kişisel verilerinizin işlenmesini gerektiren sebeplerin ortadan kalkması halinde, verilerinizin silinmesini veya yok edilmesini isteme</li>
              <li>Kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerinizin düzeltilmesi, silinmesi ya da yok edilmesi halinde, bu işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde, zararın giderilmesini talep etme</li>
            </ul>
            <p>
              Bu haklarınızı kullanmak için privacy@pazarsync.com adresine e-posta gönderebilir veya veri sahibi başvuru formunu doldurabilirsiniz.
            </p>
            
            <h2>8. Çocukların Gizliliği</h2>
            <p>
              Hizmetlerimiz 18 yaşın altındaki kişilere yönelik değildir ve bilerek 18 yaşın altındaki çocuklardan kişisel veri toplamıyoruz. 18 yaşın altındaki bir çocuğun bize kişisel verilerini sağladığını öğrenirsek, bu bilgileri en kısa sürede silmek için adımlar atacağız.
            </p>
            
            <h2>9. Uluslararası Veri Transferleri</h2>
            <p>
              Topladığımız bilgiler, işleme amacına uygun olarak Türkiye dışındaki ülkelere aktarılabilir. Bu tür transferlerin yapıldığı durumlarda, kişisel verilerinizin uygun şekilde korunması için gerekli tüm adımları atıyoruz ve KVKK'nın uluslararası veri transferleri ile ilgili hükümlerine uyuyoruz.
            </p>
            
            <h2>10. Gizlilik Politikası Değişiklikleri</h2>
            <p>
              Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Politikanın güncellenmiş versiyonunu web sitemizde yayınlayacağız ve önemli değişiklikler olması durumunda, size e-posta göndererek veya hizmetlerimiz aracılığıyla bir bildirim göstererek sizi bilgilendireceğiz.
            </p>
            
            <h2>11. İletişim</h2>
            <p>
              Bu Gizlilik Politikası veya kişisel verilerinizin işlenmesi hakkında herhangi bir sorunuz veya endişeniz varsa, lütfen bizimle privacy@pazarsync.com adresinden iletişime geçin.
            </p>
          </div>
        </div>
        
        <div className="flex justify-between mt-10 p-6 bg-muted rounded-xl">
          <a href="/kullanim-sartlari" className="text-primary hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
            Kullanım Şartları
          </a>
          <a href="/kvkk" className="text-primary hover:underline flex items-center">
            KVKK Aydınlatma Metni
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
} 