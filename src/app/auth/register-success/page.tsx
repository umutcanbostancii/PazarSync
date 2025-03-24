"use client";

import Link from "next/link";

export default function RegisterSuccessPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 mx-auto rounded-full flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-8 w-8 text-green-600"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Kayıt Başarılı!</h1>
          
          <p className="mt-2 text-gray-600">
            E-posta adresinize bir onay bağlantısı gönderdik. 
            Hesabınızı aktifleştirmek için lütfen e-postanızı kontrol edin.
          </p>
          
          <div className="mt-8 space-y-3">
            <p className="text-sm text-gray-500">
              Eğer e-posta almadıysanız, lütfen spam klasörünü kontrol edin.
            </p>
            
            <div className="flex flex-col space-y-2">
              <Link 
                href="/auth/login" 
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Giriş Sayfasına Dön
              </Link>
              
              <button 
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Onay E-postasını Tekrar Gönder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 