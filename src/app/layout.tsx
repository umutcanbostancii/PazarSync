import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Global Swiper stilleri
import 'swiper/css';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

// Font yükleme
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PazarSync | Tüm Pazaryerlerini Tek Ekrandan Yönetin",
  description: "PazarSync ile e-ticaret pazaryerlerini (Trendyol, Hepsiburada, N11, Amazon ve daha fazlası) tek ekrandan yönetin. StokSync, FiyatSync, SiparişSync özellikleriyle işinizi kolaylaştırın.",
  keywords: "pazarsync, e-ticaret entegrasyonu, trendyol entegrasyonu, hepsiburada entegrasyonu, n11 entegrasyonu, amazon entegrasyonu, e-ticaret yönetimi, ürün verisi çıkarma, yapay zeka optimizasyonu"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            #main-header {
              display: flex !important;
              visibility: visible !important;
              position: sticky;
              top: 0;
              z-index: 9999;
              width: 100%;
            }
            #main-header .container-wide {
              display: flex !important;
              align-items: center;
              justify-content: space-between;
            }
            #main-header nav {
              display: flex !important;
              visibility: visible !important;
            }
            #main-header .header-buttons {
              display: flex !important;
              visibility: visible !important;
            }
            @media (max-width: 767px) {
              #main-header nav, 
              #main-header .header-buttons {
                display: none !important;
              }
              #main-header.menu-open nav {
                display: flex !important;
                position: absolute;
                top: 4rem;
                left: 0;
                right: 0;
                background: white;
                padding: 1rem;
                flex-direction: column;
              }
            }
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              console.log('DOM fully loaded - fixing header visibility');
              var header = document.getElementById('main-header');
              if (header) {
                header.style.display = 'flex';
                header.style.visibility = 'visible';
                
                var nav = header.querySelector('nav');
                if (nav && window.innerWidth >= 768) {
                  nav.style.display = 'flex';
                  nav.style.visibility = 'visible';
                }
                
                var buttons = header.querySelector('.header-buttons');
                if (buttons && window.innerWidth >= 768) {
                  buttons.style.display = 'flex';
                  buttons.style.visibility = 'visible';
                }
              } else {
                console.error('Header element not found!');
              }
            });

            // Backup mechanism in case DOMContentLoaded doesn't fire
            window.addEventListener('load', function() {
              console.log('Window loaded - fallback header visibility fix');
              var header = document.getElementById('main-header');
              if (header) {
                header.style.display = 'flex';
                header.style.visibility = 'visible';
                
                var nav = header.querySelector('nav');
                if (nav && window.innerWidth >= 768) {
                  nav.style.display = 'flex';
                  nav.style.visibility = 'visible';
                }
                
                var buttons = header.querySelector('.header-buttons');
                if (buttons && window.innerWidth >= 768) {
                  buttons.style.display = 'flex';
                  buttons.style.visibility = 'visible';
                }
              }
            });
          `
        }} />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
