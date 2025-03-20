"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simüle edilmiş API çağrısı
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 md:py-24">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[450px]">
        <div className="flex flex-col space-y-2 text-center mb-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            Şifrenizi Sıfırlayın
          </h1>
          <p className="text-sm text-muted-foreground">
            E-posta adresinize sıfırlama bağlantısı göndereceğiz.
          </p>
        </div>

        {isSubmitted ? (
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-secondary/30 rounded-lg">
              <div className="rounded-full bg-primary/10 p-3">
                <Icons.check className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-xl font-medium">E-posta Gönderildi</h2>
                <p className="text-sm text-muted-foreground">
                  Şifre sıfırlama bağlantısı içeren bir e-posta gönderdik. Lütfen gelen kutunuzu kontrol edin.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/auth/login" className="w-full">
                <Button className="w-full">
                  Giriş Sayfasına Dön
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <form onSubmit={handleResetPassword} className="space-y-4">
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
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Sıfırlama Bağlantısı Gönder
              </Button>
            </form>
            <div className="text-center">
              <Link href="/auth/login" className="text-sm text-primary hover:underline">
                Giriş Sayfasına Dön
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 