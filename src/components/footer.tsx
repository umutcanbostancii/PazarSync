"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Hizmetlerimiz",
      links: [
        { name: "Ürün Çekme & Yükleme", href: "/urun-cekme-yukleme" },
        { name: "E-Ticaret Kurulumu", href: "/eticaret-kurulumu" },
        { name: "Yapay Zeka ile Kreatif", href: "/ai-kreatif" },
        { name: "Entegrasyonlar", href: "/entegrasyonlar" },
      ],
    },
    {
      title: "Kurumsal",
      links: [
        { name: "Hakkımızda", href: "/kurumsal/hakkimizda" },
        { name: "Ekibimiz", href: "/kurumsal/ekibimiz" },
        { name: "Kariyer", href: "/kurumsal/kariyer" },
        { name: "İletişim", href: "/iletisim" },
      ],
    },
    {
      title: "Kaynaklar",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "SSS", href: "/sss" },
        { name: "Yardım Merkezi", href: "/yardim" },
      ],
    },
    {
      title: "Yasal",
      links: [
        { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
        { name: "Kullanım Şartları", href: "/kullanim-sartlari" },
        { name: "KVKK", href: "/kurumsal/kvkk" },
        { name: "Çerez Politikası", href: "/cerez-politikasi" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              {/* Light/Dark mode logo */}
              <span className="block dark:hidden">
                <img
                  src="/assets/light-mode-logo-name.svg"
                  alt="PazarSync Logo"
                  className="w-24 h-auto"
                  style={{ maxHeight: 36 }}
                />
              </span>
              <span className="hidden dark:block">
                <img
                  src="/assets/dark-mode-logo-name.svg"
                  alt="PazarSync Logo Dark"
                  className="w-24 h-auto"
                  style={{ maxHeight: 36 }}
                />
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Tüm pazaryerlerini tek ekrandan yönetin. Zaman kazanın, satışlarınızı artırın.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://facebook.com"
                className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary transition-colors p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary transition-colors p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary transition-colors p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary transition-colors p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="font-semibold text-sm tracking-wide uppercase text-foreground">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
            <p className="text-xs sm:text-sm text-muted-foreground">
              &copy; {currentYear} PazarSync. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
              <Link 
                href="/gizlilik-politikasi" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link 
                href="/kullanim-sartlari" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Kullanım Şartları
              </Link>
              <Link 
                href="/kurumsal/kvkk" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                KVKK
              </Link>
              <Link 
                href="/cerez-politikasi" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
