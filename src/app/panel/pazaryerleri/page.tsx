"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { PlusCircle, CheckCircle, AlertTriangle, XCircle, ArrowUpDown, Settings, RefreshCw, ExternalLink } from "lucide-react";

interface Marketplace {
  id: number;
  name: string;
  logo: string;
  status: "connected" | "disconnected" | "error" | "pending";
  lastSync: string;
  products: number;
  orders: number;
  enabled: boolean;
}

export default function PazaryerleriPage() {
  // Örnek pazaryerleri verileri
  const [marketplaces, setMarketplaces] = useState<Marketplace[]>([
    {
      id: 1,
      name: "Trendyol",
      logo: "/trendyol.png",
      status: "connected",
      lastSync: "2023-05-20T10:30:00",
      products: 156,
      orders: 23,
      enabled: true
    },
    {
      id: 2,
      name: "Hepsiburada",
      logo: "/hepsiburada.png",
      status: "connected",
      lastSync: "2023-05-19T14:45:00",
      products: 134,
      orders: 18,
      enabled: true
    },
    {
      id: 3,
      name: "N11",
      logo: "/n11.png",
      status: "error",
      lastSync: "2023-05-18T09:15:00",
      products: 98,
      orders: 5,
      enabled: false
    },
    {
      id: 4,
      name: "Amazon",
      logo: "/amazon.png",
      status: "disconnected",
      lastSync: "2023-05-01T16:20:00",
      products: 0,
      orders: 0,
      enabled: false
    },
    {
      id: 5,
      name: "GittiGidiyor",
      logo: "/gittigidiyor.png",
      status: "pending",
      lastSync: "",
      products: 0,
      orders: 0,
      enabled: false
    }
  ]);

  // Duruma göre badge renklendirme
  const getStatusBadge = (status: Marketplace["status"]) => {
    switch (status) {
      case "connected":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200"><CheckCircle className="h-3 w-3 mr-1" /> Bağlı</Badge>;
      case "disconnected":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200"><XCircle className="h-3 w-3 mr-1" /> Bağlantı Kesildi</Badge>;
      case "error":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200"><AlertTriangle className="h-3 w-3 mr-1" /> Hata</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"><RefreshCw className="h-3 w-3 mr-1" /> Beklemede</Badge>;
      default:
        return <Badge>Bilinmiyor</Badge>;
    }
  };

  // Tarih formatını düzenleme
  const formatDate = (dateString: string) => {
    if (!dateString) return "Henüz senkronize edilmedi";
    
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR") + " " + date.toLocaleTimeString("tr-TR", { hour: '2-digit', minute: '2-digit' });
  };

  // Pazaryeri açma/kapatma fonksiyonu
  const toggleMarketplace = (id: number) => {
    setMarketplaces(marketplaces.map(marketplace => {
      if (marketplace.id === id) {
        return { ...marketplace, enabled: !marketplace.enabled };
      }
      return marketplace;
    }));
  };

  // Yeni pazaryeri ekleme fonksiyonu
  const handleAddMarketplace = () => {
    alert("Yeni pazaryeri ekleme sayfasına yönlendiriliyorsunuz...");
    // Burada normalde yeni pazaryeri ekleme modalı açılacak veya sayfasına yönlendirilecek
  };

  // Senkronizasyon başlatma fonksiyonu
  const handleSync = (id: number) => {
    alert(`${marketplaces.find(m => m.id === id)?.name} pazaryeri için senkronizasyon başlatılıyor...`);
    // Burada normalde senkronizasyon işlemi başlatılacak
  };

  // Pazaryeri ayarları sayfasına yönlendirme
  const handleSettings = (id: number) => {
    alert(`${marketplaces.find(m => m.id === id)?.name} pazaryeri ayarları sayfasına yönlendiriliyorsunuz...`);
    // Burada normalde pazaryeri ayarları sayfasına yönlendirilecek
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Pazaryerleri</h1>
        <Button onClick={handleAddMarketplace}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Yeni Pazaryeri Ekle
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketplaces.map((marketplace) => (
          <Card key={marketplace.id} className={`overflow-hidden ${!marketplace.enabled ? 'opacity-75' : ''}`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    {/* Burada normalde pazaryeri logosu olacak */}
                    <span className="font-bold text-lg">{marketplace.name.charAt(0)}</span>
                  </div>
                  <div>
                    <CardTitle>{marketplace.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      {getStatusBadge(marketplace.status)}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch 
                    checked={marketplace.enabled} 
                    id={`switch-${marketplace.id}`} 
                    onCheckedChange={() => toggleMarketplace(marketplace.id)}
                    disabled={marketplace.status === "pending" || marketplace.status === "disconnected"}
                  />
                  <Label htmlFor={`switch-${marketplace.id}`} className="text-xs">
                    {marketplace.enabled ? "Aktif" : "Pasif"}
                  </Label>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-muted-foreground">Ürünler</p>
                  <p className="text-2xl font-bold">{marketplace.products}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-muted-foreground">Siparişler</p>
                  <p className="text-2xl font-bold">{marketplace.orders}</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground flex items-center mt-2">
                <RefreshCw className="h-3 w-3 mr-1" />
                <span>Son Senkronizasyon: {formatDate(marketplace.lastSync)}</span>
              </div>
            </CardContent>
            <CardFooter className="pt-2 flex justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleSettings(marketplace.id)}
                disabled={!marketplace.enabled}
              >
                <Settings className="h-4 w-4 mr-1" /> Ayarlar
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleSync(marketplace.id)}
                disabled={!marketplace.enabled || marketplace.status !== "connected"}
              >
                <ArrowUpDown className="h-4 w-4 mr-1" /> Senkronize Et
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-0 h-auto"
                onClick={() => window.open("https://www.trendyol.com", "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}

        {/* Yeni Pazaryeri Ekleme Kartı */}
        <Card className="border-dashed border-2 flex flex-col items-center justify-center h-[280px] cursor-pointer hover:bg-gray-50" onClick={handleAddMarketplace}>
          <CardContent className="flex flex-col items-center justify-center text-center pt-6">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <PlusCircle className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="font-medium mb-2">Yeni Pazaryeri Ekle</h3>
            <p className="text-sm text-muted-foreground max-w-[200px]">
              Yeni bir pazaryeri entegrasyonu ekleyerek satışlarınızı genişletin
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mt-10">
        <h2 className="text-xl font-bold mb-4">Pazaryeri Entegrasyonları Hakkında</h2>
        <p className="text-muted-foreground mb-4">
          PazarSync ile şu anda aşağıdaki pazaryerlerini entegre edebilirsiniz:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Trendyol</li>
          <li>Hepsiburada</li>
          <li>N11</li>
          <li>Amazon</li>
          <li>GittiGidiyor</li>
          <li>Çiçek Sepeti</li>
          <li>ePttAVM</li>
        </ul>
        <div className="mt-4">
          <Button variant="link" className="p-0 h-auto">
            Tüm entegrasyonlar hakkında daha fazla bilgi alın &rarr;
          </Button>
        </div>
      </div>
    </div>
  );
} 