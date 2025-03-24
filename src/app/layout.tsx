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
        <script dangerouslySetInnerHTML={{
          __html: `
            // Navigasyon menüsü görünürlüğünü garantilemek için sayfa yüklendiğinde çalışır
            document.addEventListener('DOMContentLoaded', function() {
              // Header görünürlüğünü kontrol et
              var header = document.getElementById('main-header');
              if (header) {
                header.style.display = 'block';
                
                // Navigasyon menüsü ve butonlar
                var navItems = header.querySelectorAll('nav, nav a, .md\\\\:flex');
                navItems.forEach(function(item) {
                  item.style.display = 'flex';
                  item.style.visibility = 'visible';
                });
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
