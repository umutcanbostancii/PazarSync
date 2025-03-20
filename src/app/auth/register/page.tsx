"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  useEffect(() => {
    // Yönlendirme: Tek bir sayfa kullanıyoruz, login sayfasına yönlendir
    router.push("/auth/login?tab=register");
  }, [router]);

  return null;
} 