"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/auth/auth-context";
import {
  Home,
  LayoutDashboard,
  ShoppingBag,
  Package,
  Settings,
  LogOut,
  MessageSquare,
  BarChart,
} from "lucide-react";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ href, icon, label }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export function PanelSidebar() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="bg-card border-r h-screen w-64 p-4 space-y-6 flex flex-col">
      <div className="p-2">
        <h2 className="text-2xl font-semibold tracking-tight">PazarSync</h2>
        <p className="text-sm text-muted-foreground">Yönetim Paneli</p>
      </div>

      <div className="flex-1 space-y-1">
        <NavItem href="/panel" icon={<LayoutDashboard size={18} />} label="Kontrol Paneli" />
        <NavItem href="/panel/pazaryerleri" icon={<Home size={18} />} label="Pazaryerleri" />
        <NavItem href="/panel/urunler" icon={<Package size={18} />} label="Ürünler" />
        <NavItem href="/panel/siparisler" icon={<ShoppingBag size={18} />} label="Siparişler" />
        <NavItem href="/panel/raporlar" icon={<BarChart size={18} />} label="Raporlar" />
        <NavItem href="/panel/mesajlar" icon={<MessageSquare size={18} />} label="Mesajlar" />
        <NavItem href="/panel/ayarlar" icon={<Settings size={18} />} label="Ayarlar" />
      </div>

      <button 
        onClick={handleSignOut}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-all w-full"
      >
        <LogOut size={18} />
        <span>Çıkış Yap</span>
      </button>
    </div>
  );
} 