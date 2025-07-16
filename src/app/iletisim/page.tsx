"use client";

import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

export default function IletisimPage() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSuccess(false);
    try {
      if (!formRef.current) return;
      await emailjs.sendForm(
        "service_70g2asm",
        "template_r5h0nlv",
        formRef.current,
        "vhoGl9gdEMpr1AQhN"
      );
      setSuccess(true);
      formRef.current.reset();
      setOpen(true);
    } catch (err) {
      setError('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
      console.error("EmailJS Hatası:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="container-wide py-20">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src="/assets/light-mode-logo-name.svg" 
                alt="PazarSync" 
                className="h-12 mx-auto dark:hidden"
              />
              <img 
                src="/assets/dark-mode-logo-name.svg" 
                alt="PazarSync" 
                className="h-12 mx-auto hidden dark:block"
              />
            </div>
            
            {/* Başarı İkonu */}
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            
            {/* Başlık */}
            <DialogTitle className="text-2xl font-semibold mb-4 text-green-600">
              Talebiniz Alındı
            </DialogTitle>
            
            {/* Açıklama */}
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Talebiniz başarıyla alındı. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
            
            {/* Ek Bilgi */}
            <div className="bg-secondary/50 dark:bg-secondary/20 p-4 rounded-lg mb-6">
              <p className="text-sm text-secondary-foreground dark:text-secondary-foreground/80">
                📧 Onay e-postası gönderildi<br/>
                ⏱️ Ortalama yanıt süresi: 2-4 saat
              </p>
            </div>
            
            {/* Kapatma Butonu */}
            <Button
              onClick={() => setOpen(false)}
              className="px-8 py-3 rounded-lg font-medium"
            >
              Tamam
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6 text-foreground">İletişim</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Sorularınız veya önerileriniz için bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl shadow-sm mb-8 border border-border">
              <h2 className="text-xl sm:text-2xl font-light mb-6 text-card-foreground">İletişim Formu</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-base"
                      placeholder="Adınız Soyadınız"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-base"
                      placeholder="ornek@sirket.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-base"
                      placeholder="Telefon numaranız"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-base"
                      placeholder="Mesajınızın konusu"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-base"
                    placeholder="Mesajınızı buraya yazabilirsiniz..."
                    required
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" className="clean-button" disabled={sending}>
                    {sending ? "Gönderiliyor..." : "Mesaj Gönder"}
                  </Button>
                </div>
                {success && (
                  <div className="p-3 bg-green-100 border border-green-300 text-green-800 rounded mt-2">Mesajınız başarıyla gönderildi!</div>
                )}
                {error && (
                  <div className="p-3 bg-red-100 border border-red-300 text-red-800 rounded mt-2">{error}</div>
                )}
              </form>
            </div>
          </div>

          <div>
            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl shadow-sm mb-8 border border-border">
              <h2 className="text-xl sm:text-2xl font-light mb-6 text-card-foreground">İletişim Bilgilerimiz</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Adres</h3>
                  <p className="text-muted-foreground">
                    Üniversiteler Mah. İhsan Doğramacı Blv.<br />
                    Teknokent Silikon Blok Kat:1 No:13<br />
                    06800 Çankaya, ANKARA
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Telefon</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+905348427282" className="hover:text-primary transition-colors">
                      +90 534 842 72 82
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">E-posta</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@pazarsync.com" className="hover:text-primary transition-colors">
                      info@pazarsync.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Çalışma Saatleri</h3>
                  <p className="text-muted-foreground">
                    Pazartesi - Cuma: 09:00 - 18:00<br />
                    Hafta Sonu: Kapalı
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl shadow-sm border border-border">
              <h2 className="text-xl sm:text-2xl font-light mb-6 text-card-foreground">Sosyal Medya</h2>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/50 hover:bg-secondary text-primary p-3 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/50 hover:bg-secondary text-primary p-3 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/50 hover:bg-secondary text-primary p-3 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/50 hover:bg-secondary text-primary p-3 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
