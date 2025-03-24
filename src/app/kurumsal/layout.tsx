"use client";

export default function KurumsalLayout({ children }) {
  return (
    <div>
      {children}
      
      <div className="container-wide py-10 border-t mt-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-medium mb-4">Kurumsal Bilgiler</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <a href="/kurumsal/hakkimizda" className="text-sm text-muted-foreground hover:text-primary">
              Hakkımızda
            </a>
            <a href="/kurumsal/misyon-vizyon" className="text-sm text-muted-foreground hover:text-primary">
              Misyon & Vizyon
            </a>
            <a href="/kurumsal/ekibimiz" className="text-sm text-muted-foreground hover:text-primary">
              Ekibimiz
            </a>
            <a href="/kurumsal/kariyer" className="text-sm text-muted-foreground hover:text-primary">
              Kariyer
            </a>
            <a href="/kurumsal/sozlesmeler" className="text-sm text-muted-foreground hover:text-primary">
              Sözleşmeler
            </a>
            <a href="/kurumsal/kvkk" className="text-sm text-muted-foreground hover:text-primary">
              KVKK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 