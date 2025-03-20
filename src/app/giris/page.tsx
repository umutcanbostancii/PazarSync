import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GirisPage() {
  return (
    <div className="container-wide py-20">
      <div className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light mb-2">Giriş Yap</h1>
          <p className="text-muted-foreground">
            PazarSync hesabınıza giriş yapın
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-posta Adresiniz
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              placeholder="ornek@sirket.com"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="text-sm font-medium">
                Şifreniz
              </label>
              <Link href="/sifremi-unuttum" className="text-xs text-primary hover:underline">
                Şifremi Unuttum
              </Link>
            </div>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-muted-foreground">
              Beni Hatırla
            </label>
          </div>

          <div>
            <Button type="submit" className="clean-button w-full">
              Giriş Yap
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Hesabınız yok mu? {" "}
            <Link href="/kayit" className="text-primary hover:underline font-medium">
              Hemen Kaydolun
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
