import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Global Swiper stilleri
import 'swiper/css';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth/auth-context";
import { ClientBody } from "./ClientBody";

// Font yükleme
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PazarSync | Tüm Pazaryerlerini Tek Ekrandan Yönetin",
  description: "PazarSync ile e-ticaret pazaryerlerini (Trendyol, Hepsiburada, N11, Amazon ve daha fazlası) tek ekrandan yönetin. StokSync, FiyatSync, SiparişSync özellikleriyle işinizi kolaylaştırın.",
  keywords: "pazarsync, e-ticaret entegrasyonu, trendyol entegrasyonu, hepsiburada entegrasyonu, n11 entegrasyonu, amazon entegrasyonu, e-ticaret yönetimi, ürün verisi çıkarma, yapay zeka optimizasyonu",
  openGraph: {
    title: "PazarSync - E-ticaret Pazaryeri Yönetim Platformu",
    description: "Tüm pazaryerlerini tek ekrandan yönetin. Ürün senkronizasyonu, stok yönetimi ve otomatik fiyat güncellemeleri.",
    url: "https://pazarsync.com",
    siteName: "PazarSync",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PazarSync - E-ticaret Pazaryeri Yönetimi",
    description: "Tüm pazaryerlerini tek platformdan yönetin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
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

      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ClientBody>{children}</ClientBody>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
