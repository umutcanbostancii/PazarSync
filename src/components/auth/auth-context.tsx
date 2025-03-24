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
    // Mevcut session'ı kontrol etme
    const setSessionFromSupabase = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Error fetching session:", error);
          return;
        }

        setSession(session);
        setUser(session?.user || null);
      } catch (error) {
        console.error('Error setting session:', error);
      } finally {
        setLoading(false);
      }
    };

    // Auth durumunu dinleme
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    setSessionFromSupabase();

    // Cleanup
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Giriş yapma
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ 
        email: email.trim(), 
        password: password.trim() 
      });
      return { error };
    } catch (err) {
      console.error("SignIn error:", err);
      return { error: err };
    }
  };

  // Kayıt olma
  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
        options: {
          data: {
            full_name: "",
          },
          emailRedirectTo: `${window.location.origin}/auth/login`
        },
      });
      
      return { data, error };
    } catch (error) {
      console.error("Supabase signUp hatası:", error);
      return { data: null, error };
    }
  };

  // Çıkış yapma
  const signOut = async () => {
    await supabase.auth.signOut();
  };

  // Şifre sıfırlama
  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      return { error };
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