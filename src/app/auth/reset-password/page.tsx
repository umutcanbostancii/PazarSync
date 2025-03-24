"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/auth/auth-context";

export default function ResetPasswordPage() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      console.log("Şifre sıfırlama talebi:", { email });
      
      const { error } = await resetPassword(email);
      
      if (error) {
        throw error;
      }
      
      setSuccess(true);
    } catch (err) {
      console.error("Şifre sıfırlama hatası:", err);
      setError(err.message || "Şifre sıfırlama işlemi sırasında bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Şifrenizi Sıfırlayın
          </h1>
          <p className="text-sm text-muted-foreground">
            E-posta adresinize şifre sıfırlama bağlantısı göndereceğiz
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded">
              {error}
            </div>
          )}
          
          {success ? (
            <div className="space-y-4">
              <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded">
                Şifre sıfırlama bağlantısı e-posta adresinize gönderildi. 
                Lütfen gelen kutunuzu kontrol edin.
              </div>
              
              <Link 
                href="/auth/login"
                className="block w-full py-2 px-4 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors"
              >
                Giriş Sayfasına Dön
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">E-posta</label>
                <input
                  id="email"
                  type="email"
                  placeholder="ornek@sirket.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                disabled={loading}
              >
                {loading ? "Gönderiliyor..." : "Şifre Sıfırlama Bağlantısı Gönder"}
              </button>
              
              <div className="text-center">
                <Link href="/auth/login" className="text-sm text-blue-600 hover:underline">
                  Giriş sayfasına dön
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 