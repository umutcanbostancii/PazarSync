import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeCTA() {
  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-28">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6">Şimdi Başlayın</h2>
          <p className="text-primary-foreground/90 text-lg mb-10">
            Hemen üye olun, 14 gün boyunca herhangi bir ücret ödemeden deneyin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fiyatlar">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto clean-button bg-white text-primary">
                Ücretsiz Deneyin
              </Button>
            </Link>
            <Link href="/iletisim">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10 no-borders">
                İletişime Geçin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
