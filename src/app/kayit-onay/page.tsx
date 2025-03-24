"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterConfirmPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-200px)] py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Kayıt Başarılı</CardTitle>
          <CardDescription>
            E-posta adresinize onay bağlantısı gönderdik
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 mx-auto text-green-500 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            
            <p className="mb-4">
              Kaydınızı tamamlamak için lütfen e-posta adresinize gönderdiğimiz onay bağlantısına tıklayın.
              Bağlantı 24 saat geçerlidir.
            </p>
            
            <p className="text-sm text-gray-500">
              E-posta onayından sonra giriş yapabilir ve PazarSync'in tüm özelliklerinden yararlanabilirsiniz.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/giris">Giriş Sayfasına Git</Link>
          </Button>
          <p className="text-xs text-center text-gray-500 mt-2">
            E-posta almadıysanız, lütfen spam klasörünüzü kontrol edin veya{" "}
            <Link href="/iletisim" className="text-primary hover:underline">
              bizimle iletişime geçin
            </Link>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
} 