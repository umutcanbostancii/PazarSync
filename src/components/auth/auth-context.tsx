"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';

// Auth Context tipi
type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any; data: any }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: any }>;
};

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
        // Session bilgisini alma
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Error fetching session:", error);
          return;
        }

        // Component hala mount edilmişse state güncelle
        if (isMounted) {
          setSession(session);
          setUser(session?.user || null);
        }
      } catch (error) {
        console.error('Error setting session:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // Auth durumunu dinleme
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (isMounted) {
          setSession(session);
          setUser(session?.user || null);
          setLoading(false);
        }
      }
    );

    setSessionFromSupabase();

    // Cleanup
    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // Giriş yapma - geliştirilmiş hata yakalama
  const signIn = async (email: string, password: string) => {
    try {
      // Email ve password temizleme
      const sanitizedEmail = email.trim();
      const sanitizedPassword = password.trim();
      
      // Boş alan kontrolü
      if (!sanitizedEmail || !sanitizedPassword) {
        return { error: new Error('E-posta ve şifre gereklidir') };
      }
      
      // ASCII kontrolü - bu kontrol hem frontend hem de API hatalarını önler
      if (!/^[\x00-\x7F]*$/.test(sanitizedPassword)) {
        return { error: new Error('Şifre sadece ASCII karakterler içermelidir (Türkçe karakter kullanmayın)') };
      }
      
      console.log('Giriş denemesi:', { email: sanitizedEmail });
      
      // Özel error handling ile login
      try {
        const { data, error } = await supabase.auth.signInWithPassword({ 
          email: sanitizedEmail, 
          password: sanitizedPassword 
        });
        
        if (error) {
          console.error('Login error:', error);
          
          // Spesifik hata mesajları
          if (error.message.includes('Invalid login credentials')) {
            return { error: new Error('Geçersiz e-posta veya şifre') };
          }
          
          return { error };
        }
        
        console.log('Login başarılı:', data);
        return { error: null };
      } catch (innerError) {
        console.error('Login exception:', innerError);
        return { error: innerError };
      }
    } catch (outerError) {
      console.error("SignIn genel hata:", outerError);
      return { error: outerError };
    }
  };

  // Kayıt olma - geliştirilmiş implementasyon
  const signUp = async (email: string, password: string) => {
    try {
      // Email ve password temizleme
      const sanitizedEmail = email.trim();
      const sanitizedPassword = password.trim();
      
      // Boş alan kontrolü  
      if (!sanitizedEmail || !sanitizedPassword) {
        return { data: null, error: new Error('E-posta ve şifre gereklidir') };
      }
      
      // ASCII kontrolü
      if (!/^[\x00-\x7F]*$/.test(sanitizedPassword)) {
        return { data: null, error: new Error('Şifre sadece ASCII karakterler içermelidir (Türkçe karakter kullanmayın)') };
      }
      
      console.log('Kayıt denemesi:', { email: sanitizedEmail });
      
      // Daha güvenilir error handling ile signup
      try {
        // Kayıt işlemi
        const { data, error } = await supabase.auth.signUp({
          email: sanitizedEmail,
          password: sanitizedPassword,
          options: {
            data: {
              full_name: "",
            },
            emailRedirectTo: `${window.location.origin}/auth/login`
          },
        });
        
        if (error) {
          console.error('Signup error:', error);
          
          // Spesifik hata mesajları
          if (error.message.includes('already registered')) {
            return { data: null, error: new Error('Bu e-posta adresi zaten kayıtlı') };
          }
          
          return { data: null, error };
        }
        
        console.log('Kayıt başarılı:', data);
        return { data, error: null };
      } catch (innerError) {
        console.error('Signup exception:', innerError);
        return { data: null, error: innerError };
      }
    } catch (outerError) {
      console.error("SignUp genel hata:", outerError);
      return { data: null, error: outerError };
    }
  };

  // Çıkış yapma
  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("SignOut error:", error);
    }
  };

  // Şifre sıfırlama - geliştirilmiş implementasyon
  const resetPassword = async (email: string) => {
    try {
      const sanitizedEmail = email.trim();
      
      if (!sanitizedEmail) {
        return { error: new Error('E-posta adresi gereklidir') };
      }
      
      // Şifre sıfırlama isteği
      const { error } = await supabase.auth.resetPasswordForEmail(sanitizedEmail, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      
      if (error) {
        console.error('Password reset error:', error);
        return { error };
      }
      
      return { error: null };
    } catch (err) {
      console.error("Reset password error:", err);
      return { error: err };
    }
  };

  const value = {
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
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 