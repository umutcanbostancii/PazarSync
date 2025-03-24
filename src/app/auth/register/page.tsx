"use client";

export default function RegisterPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[450px]">
        <div className="flex flex-col space-y-2 text-center mb-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            Hesap Oluşturun
          </h1>
          <p className="text-sm text-muted-foreground">
            PazarSync'e kaydolun ve e-ticaret deneyiminizi geliştirin.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium">Ad</label>
                <input
                  id="firstName"
                  placeholder="Ahmet"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium">Soyad</label>
                <input
                  id="lastName"
                  placeholder="Yılmaz"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            
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
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">Şifre</label>
              <input
                id="password"
                placeholder="••••••••"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <p className="text-xs text-gray-500">En az 8 karakter, bir büyük harf ve bir rakam içermeli</p>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="passwordConfirm" className="block text-sm font-medium">Şifre Tekrarı</label>
              <input
                id="passwordConfirm"
                placeholder="••••••••"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                <a href="/kullanim-sartlari" className="text-blue-600 hover:underline">Kullanım Şartları</a> ve 
                <a href="/gizlilik-politikasi" className="text-blue-600 hover:underline"> Gizlilik Politikası</a>'nı kabul ediyorum
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Kayıt Ol
            </button>
          </form>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-center text-sm mb-2">Veya şununla devam edin</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                GitHub
              </button>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm">
            Zaten hesabınız var mı?{" "}
            <a href="/auth/login" className="text-blue-600 hover:underline">
              Giriş Yapın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 