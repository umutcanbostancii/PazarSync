"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("login");

  useEffect(() => {
    // URL parametresiyle tab'ı değiştirme
    const tab = searchParams.get("tab");
    if (tab === "register") {
      setActiveTab("register");
    }
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simüle edilmiş API çağrısı
    setTimeout(() => {
      setIsLoading(false);
      // Başarılı giriş sonrası ana sayfaya yönlendirme
      window.location.href = "/";
    }, 1500);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simüle edilmiş API çağrısı
    setTimeout(() => {
      setIsLoading(false);
      // Başarılı kayıt sonrası giriş tabına geçme
      setActiveTab("login");
    }, 1500);
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 md:py-24">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[450px]">
        <div className="flex flex-col space-y-2 text-center mb-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            Hesabınıza Erişin
          </h1>
          <p className="text-sm text-muted-foreground">
            PazarSync ile e-ticaret deneyiminizi yönetin.
          </p>
        </div>

        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">Giriş Yap</TabsTrigger>
            <TabsTrigger value="register">Kayıt Ol</TabsTrigger>
          </TabsList>
          
          {/* Giriş Paneli */}
          <TabsContent value="login" className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  placeholder="ornek@sirket.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Şifre</Label>
                  <Link
                    href="/auth/reset-password"
                    className="text-xs text-primary hover:underline"
                  >
                    Şifremi Unuttum
                  </Link>
                </div>
                <Input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="current-password"
                  disabled={isLoading}
                  required
                />
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Giriş Yap
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Veya şununla devam et
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" disabled={isLoading}>
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" type="button" disabled={isLoading}>
                <Icons.apple className="mr-2 h-4 w-4" />
                Apple
              </Button>
            </div>
          </TabsContent>
          
          {/* Kayıt Paneli */}
          <TabsContent value="register" className="space-y-6">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ad</Label>
                  <Input
                    id="firstName"
                    placeholder="Adınız"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Soyad</Label>
                  <Input
                    id="lastName"
                    placeholder="Soyadınız"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Şirket Adı</Label>
                <Input
                  id="company"
                  placeholder="Şirketinizin adı"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email">E-posta</Label>
                <Input
                  id="register-email"
                  placeholder="ornek@sirket.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Şifre</Label>
                <Input
                  id="register-password"
                  placeholder="••••••••"
                  type="password"
                  autoCapitalize="none"
                  disabled={isLoading}
                  required
                />
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Kayıt Ol
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Veya şununla devam et
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" disabled={isLoading}>
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" type="button" disabled={isLoading}>
                <Icons.apple className="mr-2 h-4 w-4" />
                Apple
              </Button>
            </div>

            <div className="text-xs text-center text-muted-foreground">
              Kayıt olarak, 
              <Link href="/gizlilik" className="text-primary hover:underline ml-1">
                Gizlilik Politikası
              </Link>
              <span className="mx-1">ve</span>
              <Link href="/kullanim-kosullari" className="text-primary hover:underline">
                Kullanım Koşulları'nı
              </Link>
              <span className="ml-1">kabul etmiş olursunuz.</span>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 