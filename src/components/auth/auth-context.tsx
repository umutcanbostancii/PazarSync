"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';

// Auth Context tipi
interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any; data: any }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: any }>;
}

// Auth Context'i oluşturma
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider componenti
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // Mevcut session'ı kontrol etme
    const setSessionFromSupabase = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Session alma hatası:", error);
          return;
        }

        if (isMounted) {
          setSession(session);
          setUser(session?.user || null);
        }
      } catch (error) {
        console.error('Session kurma hatası:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // Auth durumunu dinleme
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session);
        
        if (isMounted) {
          setSession(session);
          setUser(session?.user || null);
          setLoading(false);
        }
      }
    );

    setSessionFromSupabase();

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // Giriş yapma
  const signIn = async (email: string, password: string): Promise<{ error: any }> => {
    try {
      const sanitizedEmail = email.trim().toLowerCase();
      const sanitizedPassword = password.trim();
      
      if (!sanitizedEmail || !sanitizedPassword) {
        return { error: new Error('E-posta ve şifre gereklidir') };
      }
      
      console.log('Giriş denemesi:', { email: sanitizedEmail });
      
      const { data, error } = await supabase.auth.signInWithPassword({ 
        email: sanitizedEmail, 
        password: sanitizedPassword 
      });
      
      if (error) {
        console.error('Login hatası:', error);
        
        if (error.message.includes('Invalid login credentials')) {
          return { error: new Error('Geçersiz e-posta veya şifre') };
        }
        
        return { error: new Error(error.message) };
      }
      
      console.log('Login başarılı:', data);
      return { error: null };
    } catch (outerError) {
      console.error("SignIn genel hatası:", outerError);
      return { error: new Error('Giriş yapılırken beklenmeyen bir hata oluştu') };
    }
  };

  // Kayıt olma
  const signUp = async (email: string, password: string): Promise<{ error: any; data: any }> => {
    try {
      const sanitizedEmail = email.trim().toLowerCase();
      const sanitizedPassword = password.trim();
      
      if (!sanitizedEmail || !sanitizedPassword) {
        return { data: null, error: new Error('E-posta ve şifre gereklidir') };
      }
      
      if (sanitizedPassword.length < 8) {
        return { data: null, error: new Error('Şifre en az 8 karakter olmalıdır') };
      }
      
      console.log('Kayıt denemesi:', { email: sanitizedEmail });
      
      const { data, error } = await supabase.auth.signUp({
        email: sanitizedEmail,
        password: sanitizedPassword,
        options: {
          data: {
            full_name: "",
          }
        }
      });
      
      if (error) {
        console.error('Kayıt hatası:', error);
        
        if (error.message.includes('already registered')) {
          return { data: null, error: new Error('Bu e-posta adresi zaten kayıtlı') };
        }
        
        return { data: null, error: new Error(error.message) };
      }
      
      console.log('Kayıt başarılı:', data);
      return { data, error: null };
    } catch (outerError) {
      console.error("SignUp genel hatası:", outerError);
      return { data: null, error: new Error('Kayıt olurken beklenmeyen bir hata oluştu') };
    }
  };

  // Çıkış yapma
  const signOut = async (): Promise<void> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Çıkış hatası:", error);
      }
    } catch (error) {
      console.error("SignOut hatası:", error);
    }
  };

  // Şifre sıfırlama
  const resetPassword = async (email: string): Promise<{ error: any }> => {
    try {
      const sanitizedEmail = email.trim().toLowerCase();
      
      if (!sanitizedEmail) {
        return { error: new Error('E-posta adresi gereklidir') };
      }
      
      const { error } = await supabase.auth.resetPasswordForEmail(sanitizedEmail, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/update-password`,
      });
      
      if (error) {
        console.error('Şifre sıfırlama hatası:', error);
        return { error: new Error(error.message) };
      }
      
      return { error: null };
    } catch (err) {
      console.error("Reset password hatası:", err);
      return { error: new Error('Şifre sıfırlama işlemi başarısız') };
    }
  };

  const value: AuthContextType = {
    session,
    user,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Auth context kullanımı için hook
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 