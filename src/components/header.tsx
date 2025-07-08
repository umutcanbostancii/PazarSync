"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/auth-context";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, User, LogOut, Home } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  
  const isLoggedIn = !!user;
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  };

  // Navigation links optimized for responsive
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
      className={`sticky top-0 z-50 w-full border-b bg-white dark:bg-black text-gray-900 dark:text-white shadow-sm ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Responsive */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              {/* Light/Dark mode logo */}
              <span className="block dark:hidden">
                <img
                  src="/assets/light-mode-logo-name.svg"
                  alt="PazarSync Logo"
                  className="w-28 h-auto sm:w-36"
                  style={{ maxHeight: 40 }}
                />
              </span>
              <span className="hidden dark:block">
                <img
                  src="/assets/dark-mode-logo-name.svg"
                  alt="PazarSync Logo Dark"
                  className="w-28 h-auto sm:w-36"
                  style={{ maxHeight: 40 }}
                />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  `px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition font-medium
                  ${item.href === currentPath ? 'bg-gray-200 dark:bg-gray-800 text-primary dark:text-white font-bold' : ''}`
                }
                style={{ minWidth: 90 }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full text-gray-900 dark:text-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white dark:bg-black text-gray-900 dark:text-white border border-border shadow-lg" align="end" forceMount>
                  <DropdownMenuItem asChild>
                    <Link href="/panel" className="flex items-center">
                      <Home className="mr-2 h-4 w-4" />
                      <span>Panel</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="text-destructive dark:text-red-400 dark:hover:bg-gray-800">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Çıkış Yap</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                    Giriş Yap
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="sm" className="text-white bg-primary hover:bg-primary/90 dark:bg-primary dark:text-white dark:hover:bg-primary/80">
                    Ücretsiz Deneyin
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile/Tablet Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Dark Mode Toggle Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* User Menu Mobile (Tablet) */}
            {isLoggedIn && (
              <div className="hidden sm:block lg:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/panel">Panel</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut}>
                      Çıkış Yap
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="h-9 w-9 lg:hidden text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-black border-t">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    `block px-3 py-2 text-base font-medium rounded-md transition-colors
                    text-gray-900 dark:text-white hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70
                    ${item.href === currentPath ? 'bg-gray-200 dark:bg-gray-800 text-primary dark:text-white font-bold' : ''}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Auth Actions */}
              <div className="pt-4 space-y-2">
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/panel"
                      className={
                        `block w-full text-gray-900 dark:text-white hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button variant="outline" className="w-full justify-start">
                        <Home className="mr-2 h-4 w-4" />
                        Panel
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className={
                        `w-full justify-start text-destructive hover:text-destructive hover:bg-gray-100 dark:hover:bg-gray-800
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-destructive/70`
                      }
                      onClick={() => {
                        setIsMenuOpen(false);
                        handleSignOut();
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Çıkış Yap
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      className={
                        `block w-full text-gray-900 dark:text-white hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button variant="outline" className="w-full">
                        Giriş Yap
                      </Button>
                    </Link>
                    <Link
                      href="/demo"
                      className={
                        `block w-full text-gray-900 dark:text-white bg-primary hover:bg-primary/90 dark:bg-white dark:hover:bg-gray-200
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button className="w-full">
                        Ücretsiz Deneyin
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
