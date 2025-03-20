"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Ürün",
      links: [
        { name: "Özellikler", href: "/ozellikler" },
        { name: "Entegrasyonlar", href: "/entegrasyonlar" },
        { name: "Fiyatlar", href: "/fiyatlar" },
        { name: "Güncellemeler", href: "/guncellemeler" },
      ],
    },
    {
      title: "Şirket",
      links: [
        { name: "Hakkımızda", href: "/kurumsal/hakkimizda" },
        { name: "Kariyer", href: "/kurumsal/kariyer" },
        { name: "Blog", href: "/blog" },
        { name: "İletişim", href: "/iletisim" },
      ],
    },
    {
      title: "Kaynaklar",
      links: [
        { name: "SSS", href: "/sss" },
        { name: "Yardım Merkezi", href: "/yardim" },
        { name: "API Dokümantasyonu", href: "/api-docs" },
        { name: "Bilgi Bankası", href: "/bilgi-bankasi" },
      ],
    },
    {
      title: "Yasal",
      links: [
        { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
        { name: "Kullanım Şartları", href: "/kullanim-sartlari" },
        { name: "KVKK", href: "/kvkk" },
        { name: "Çerez Politikası", href: "/cerez-politikasi" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block font-medium text-xl mb-4">
              PazarSync
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Tüm pazaryerlerini tek ekrandan yönetin. Zaman kazanın, satışlarınızı artırın.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://facebook.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-medium text-sm mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {currentYear} PazarSync. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <Link href="/gizlilik-politikasi" className="hover:text-foreground transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-sartlari" className="hover:text-foreground transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="/kvkk" className="hover:text-foreground transition-colors">
                KVKK
              </Link>
              <Link href="/cerez-politikasi" className="hover:text-foreground transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
