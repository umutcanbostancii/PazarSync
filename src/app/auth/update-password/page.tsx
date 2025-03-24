"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [hashError, setHashError] = useState(false);

  useEffect(() => {
    // Sayfaya geldiğinde hash kontrolü yap
    const checkHash = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (error || !data.session) {
        console.error("Oturum doğrulama hatası:", error);
        setHashError(true);
      }
    };
    
    checkHash();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Şifreler eşleşmiyor");
      return;
    }
    
    if (password.length < 8) {
      setError("Şifre en az 8 karakter uzunluğunda olmalıdır");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });
      
      if (error) {
        throw error;
      }
      
      setSuccess(true);
      setTimeout(() => {
        router.push("/auth/login");
      }, 3000);
    } catch (err) {
      console.error("Şifre güncelleme hatası:", err);
      setError(err.message || "Şifre güncellenirken bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  if (hashError) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-screen py-12">
        <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Geçersiz veya Süresi Dolmuş Bağlantı</h1>
            <p className="text-gray-600 mb-6">
              Şifre sıfırlama bağlantınızın süresi dolmuş veya geçersiz. 
              Lütfen yeni bir şifre sıfırlama bağlantısı talep edin.
            </p>
            <a 
              href="/auth/reset-password" 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Şifre Sıfırlamayı Yeniden Dene
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Yeni Şifre Oluştur</h1>
          <p className="text-gray-600 mt-2">
            Güvenli bir şifre oluşturmak için lütfen yeni şifrenizi girin.
          </p>
        </div>
        
        {success ? (
          <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded mb-4">
            Şifreniz başarıyla güncellendi! Giriş sayfasına yönlendiriliyorsunuz...
          </div>
        ) : (
          <>
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded mb-4">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Yeni Şifre
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="••••••••"
                  required
                />
                <p className="text-xs text-gray-500">Şifreniz en az 8 karakter uzunluğunda olmalıdır</p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Şifreyi Doğrula
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                disabled={loading}
              >
                {loading ? "Güncelleniyor..." : "Şifreyi Güncelle"}
              </button>
            </form>
          </>
        )}
        
        <div className="mt-6 text-center text-sm">
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Giriş sayfasına dön
          </a>
        </div>
      </div>
    </div>
  );
} 