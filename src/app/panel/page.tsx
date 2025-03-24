"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/auth-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ShoppingBag, Package, CreditCard, Percent, Users } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function PanelPage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Profil bilgilerini çek
    const fetchProfile = async () => {
      if (user?.id) {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          if (data) {
            setProfile(data);
          }
        } catch (error) {
          console.error("Profil çekme hatası:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProfile();
  }, [user]);

  // Kullanıcı adını belirle
  const userName = profile?.full_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Kullanıcı';
  
  // Bugünün tarihini doğru formatta al
  const today = new Date();
  const formattedDate = today.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // Örnek satış verileri (gerçek veritabanı bağlantısı yerine geçici)
  const sampleData = [
    { month: 'Oca', sales: 1200 },
    { month: 'Şub', sales: 1900 },
    { month: 'Mar', sales: 1500 },
    { month: 'Nis', sales: 2100 },
    { month: 'May', sales: 2400 },
    { month: 'Haz', sales: 1800 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Merhaba, {userName}!</h1>
        <div className="text-sm text-muted-foreground">
          Son güncelleme: {formattedDate}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Toplam Satış</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺12,345</div>
            <p className="text-xs text-muted-foreground mt-1">
              +10% geçen aya göre
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bekleyen Siparişler</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground mt-1">
              15 adet 24 saat içinde
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktif Ürünler</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground mt-1">
              56 ürün stok az
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Satış İstatistikleri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-60 relative">
              {/* Basit satış grafiği */}
              <div className="absolute inset-0 flex items-end p-4">
                {sampleData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full mx-1 bg-blue-500 rounded-t-sm" 
                      style={{ 
                        height: `${(item.sales / 2500) * 100}%`,
                        maxHeight: '85%',
                        opacity: 0.7 + ((index + 1) / 10)
                      }}
                    ></div>
                    <span className="text-xs mt-1 text-muted-foreground">{item.month}</span>
                  </div>
                ))}
              </div>
              
              {/* Y-ekseni değerleri */}
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-muted-foreground p-4">
                <span>2.5K</span>
                <span>2.0K</span>
                <span>1.5K</span>
                <span>1.0K</span>
                <span>0.5K</span>
                <span>0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Pazaryeri Dağılımı</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-full flex items-center gap-2">
                  <span className="font-medium">Trendyol</span>
                  <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-red-400 w-[60%]" />
                  </div>
                  <span className="text-sm font-medium">60%</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full flex items-center gap-2">
                  <span className="font-medium">Hepsiburada</span>
                  <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-orange-400 w-[25%]" />
                  </div>
                  <span className="text-sm font-medium">25%</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full flex items-center gap-2">
                  <span className="font-medium">N11</span>
                  <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-green-400 w-[10%]" />
                  </div>
                  <span className="text-sm font-medium">10%</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full flex items-center gap-2">
                  <span className="font-medium">Amazon</span>
                  <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-blue-400 w-[5%]" />
                  </div>
                  <span className="text-sm font-medium">5%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 