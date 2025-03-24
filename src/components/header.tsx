"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/auth-context";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  
  const isLoggedIn = !!user;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  };

  // Navigation links to match screenshot
  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Kurumsal", href: "/kurumsal" },
    { name: "Entegrasyonlar", href: "/entegrasyonlar" },
    { name: "Kaynaklar", href: "/kaynaklar" },
    { name: "Blog", href: "/blog" },
    { name: "Fiyatlar", href: "/fiyatlar" },
    { name: "İletişim", href: "/iletisim" }
  ];

  return (
    <header 
      id="main-header" 
      className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              stroke="#0066cc"
              strokeWidth="2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5" />
              <path d="M18 2v20" />
              <path d="M9 11.5v-4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v4" />
              <path d="M9 9h2" />
              <path d="M11 13a2 2 0 0 1 4 0v4" />
              <path d="M15 15h-2" />
            </svg>
            <span className="text-xl font-medium">PazarSync</span>
          </Link>
        </div>

        {/* Navigasyon menüsü */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Butonlar */}
        <div className="header-buttons hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/panel">
                <Button variant="outline" size="sm" className="no-borders">
                  Panel
                </Button>
              </Link>
              <Button 
                size="sm" 
                variant="outline" 
                className="no-borders text-red-500 hover:text-red-600"
                onClick={handleSignOut}
              >
                Çıkış Yap
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline" size="sm" className="no-borders">
                  Giriş Yap / Kayıt Ol
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="sm" className="clean-button">
                  Ücretsiz Deneyin
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu - Açılınca gösterilecek */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container-wide py-4 space-y-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            {isLoggedIn ? (
              <>
                <Link href="/panel" className="w-full">
                  <Button variant="outline" className="w-full no-borders" onClick={() => setIsMenuOpen(false)}>
                    Panel
                  </Button>
                </Link>
                <Button 
                  className="w-full no-borders text-red-500 hover:text-red-600"
                  variant="outline"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleSignOut();
                  }}
                >
                  Çıkış Yap
                </Button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="w-full">
                  <Button variant="outline" className="w-full no-borders" onClick={() => setIsMenuOpen(false)}>
                    Giriş Yap / Kayıt Ol
                  </Button>
                </Link>
                <Link href="/demo" className="w-full">
                  <Button className="w-full clean-button" onClick={() => setIsMenuOpen(false)}>
                    Ücretsiz Deneyin
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
