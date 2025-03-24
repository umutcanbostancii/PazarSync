"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/auth-context";
import { PanelSidebar } from "@/components/panel/sidebar";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/giris");
    }
  }, [loading, user, router]);

  // Kullanıcı yükleniyorsa veya kullanıcı yoksa boş sayfa göster
  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <PanelSidebar />
      
      <div className="flex-1 p-8">
        <main>{children}</main>
      </div>
    </div>
  );
} 