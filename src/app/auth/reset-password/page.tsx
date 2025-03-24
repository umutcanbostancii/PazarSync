"use client";

export default function ResetPasswordPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[450px]">
        <div className="flex flex-col space-y-2 text-center mb-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            Şifrenizi Sıfırlayın
          </h1>
          <p className="text-sm text-muted-foreground">
            E-posta adresinizi girin ve size şifre sıfırlama talimatlarını göndereceğiz.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">E-posta</label>
              <input
                id="email"
                placeholder="ornek@sirket.com"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sıfırlama Bağlantısı Gönder
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <a href="/auth/login" className="text-blue-600 hover:underline">
              Giriş Sayfasına Dön
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 