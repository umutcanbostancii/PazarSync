import { Button } from "@/components/ui/button";

export default function IletisimPage() {
  return (
    <div className="container-wide py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg mb-6 text-foreground">İletişim</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Sorularınız veya önerileriniz için bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-card p-8 rounded-xl shadow-sm mb-8 border border-border">
              <h2 className="text-2xl font-light mb-6 text-card-foreground">İletişim Formu</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="ornek@sirket.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Mesajınızı buraya yazabilirsiniz..."
                  ></textarea>
                </div>

                <div>
                  <Button type="submit" className="clean-button">
                    Mesaj Gönder
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-card p-8 rounded-xl shadow-sm mb-8 border border-border">
              <h2 className="text-2xl font-light mb-6 text-card-foreground">İletişim Bilgilerimiz</h2>
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
                    <a href="tel:+908508407777" className="hover:text-primary transition-colors">
                      +90 850 840 77 77
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">E-posta</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:bilgi@pazarsync.com" className="hover:text-primary transition-colors">
                      bilgi@pazarsync.com
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

            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <h2 className="text-2xl font-light mb-6 text-card-foreground">Sosyal Medya</h2>
              <div className="flex space-x-4">
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
