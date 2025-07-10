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
    google: process.env.GOOGLE_SITE_VERIFICATION_CODE || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head />
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
