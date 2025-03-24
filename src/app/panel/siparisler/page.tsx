"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronDown, Eye, FileText, TruckIcon, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Sipariş tipi tanımı
type OrderStatus = "pending" | "preparing" | "shipped" | "delivered" | "cancelled";

interface Order {
  id: string;
  customerName: string;
  date: string;
  total: number;
  items: number;
  marketplace: string;
  status: OrderStatus;
  address: string;
  paymentMethod: string;
}

export default function SiparislerPage() {
  // Örnek sipariş verileri
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "TRY12345678",
      customerName: "Ahmet Yılmaz",
      date: "2023-05-15",
      total: 349.99,
      items: 2,
      marketplace: "Trendyol",
      status: "delivered",
      address: "Kadıköy, İstanbul",
      paymentMethod: "Kredi Kartı"
    },
    {
      id: "HPS45678912",
      customerName: "Ayşe Kaya",
      date: "2023-05-16",
      total: 1299.50,
      items: 1,
      marketplace: "Hepsiburada",
      status: "shipped",
      address: "Çankaya, Ankara",
      paymentMethod: "Havale/EFT"
    },
    {
      id: "N11-78945612",
      customerName: "Mehmet Demir",
      date: "2023-05-17",
      total: 599.90,
      items: 3,
      marketplace: "N11",
      status: "preparing",
      address: "Karşıyaka, İzmir",
      paymentMethod: "Kapıda Ödeme"
    },
    {
      id: "TRY98745632",
      customerName: "Zeynep Arslan",
      date: "2023-05-18",
      total: 4599.00,
      items: 2,
      marketplace: "Trendyol",
      status: "pending",
      address: "Beyoğlu, İstanbul",
      paymentMethod: "Kredi Kartı"
    },
    {
      id: "HPS36925814",
      customerName: "Mustafa Öztürk",
      date: "2023-05-12",
      total: 129.99,
      items: 1,
      marketplace: "Hepsiburada",
      status: "cancelled",
      address: "Nilüfer, Bursa",
      paymentMethod: "Kapıda Ödeme"
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  
  // Durum filtreleri
  const statuses = ["Tümü", "Bekleyen", "Hazırlanıyor", "Kargoda", "Teslim Edildi", "İptal"];
  const [selectedStatus, setSelectedStatus] = useState("Tümü");

  // Pazaryeri filtreleri
  const marketplaces = ["Tümü", "Trendyol", "Hepsiburada", "N11", "Amazon"];
  const [selectedMarketplace, setSelectedMarketplace] = useState("Tümü");

  // Sipariş durumuna göre badge renklendirme
  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200"><Clock className="h-3 w-3 mr-1" /> Bekleyen</Badge>;
      case "preparing":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200"><AlertCircle className="h-3 w-3 mr-1" /> Hazırlanıyor</Badge>;
      case "shipped":
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200"><TruckIcon className="h-3 w-3 mr-1" /> Kargoda</Badge>;
      case "delivered":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200"><CheckCircle className="h-3 w-3 mr-1" /> Teslim Edildi</Badge>;
      case "cancelled":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200"><AlertCircle className="h-3 w-3 mr-1" /> İptal</Badge>;
      default:
        return <Badge variant="outline">Bilinmiyor</Badge>;
    }
  };

  // Filtreleme ve arama fonksiyonları
  const filteredOrders = orders.filter(order => {
    // Statüs filtreleri
    if (selectedStatus !== "Tümü") {
      const statusMap: Record<string, OrderStatus> = {
        "Bekleyen": "pending",
        "Hazırlanıyor": "preparing",
        "Kargoda": "shipped",
        "Teslim Edildi": "delivered",
        "İptal": "cancelled"
      };
      if (order.status !== statusMap[selectedStatus]) {
        return false;
      }
    }
    
    // Pazaryeri filtreleri
    if (selectedMarketplace !== "Tümü" && order.marketplace !== selectedMarketplace) {
      return false;
    }
    
    // Arama terimine göre filtrele
    if (searchTerm && 
        !order.id.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !order.customerName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Tarih formatını düzenleme
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR");
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Siparişler</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" /> Raporla
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Sipariş no veya müşteri adı ile ara..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex gap-2">
          <div className="w-1/2 relative">
            <select 
              className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statuses.map((status, index) => (
                <option key={index} value={status}>{status}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
          <div className="w-1/2 relative">
            <select 
              className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              value={selectedMarketplace}
              onChange={(e) => setSelectedMarketplace(e.target.value)}
            >
              {marketplaces.map((marketplace, index) => (
                <option key={index} value={marketplace}>{marketplace}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filtrele
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sipariş Listesi</CardTitle>
          <CardDescription>
            Toplam {filteredOrders.length} sipariş
            {selectedStatus !== "Tümü" ? ` - ${selectedStatus} durumunda` : ""}
            {selectedMarketplace !== "Tümü" ? ` - ${selectedMarketplace} pazaryerinde` : ""}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">Sipariş No</th>
                  <th className="px-4 py-3 text-left">Müşteri</th>
                  <th className="px-4 py-3 text-left">Tarih</th>
                  <th className="px-4 py-3 text-left">Ürünler</th>
                  <th className="px-4 py-3 text-left">Toplam</th>
                  <th className="px-4 py-3 text-left">Pazaryeri</th>
                  <th className="px-4 py-3 text-left">Durum</th>
                  <th className="px-4 py-3 text-right">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-muted/50">
                    <td className="px-4 py-3">
                      <span className="font-medium">{order.id}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span>{order.customerName}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-muted-foreground">{formatDate(order.date)}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span>{order.items} ürün</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-medium">₺{order.total.toFixed(2)}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm">{order.marketplace}</span>
                    </td>
                    <td className="px-4 py-3">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" /> Detay
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Sipariş bulunamadı. Farklı bir arama terimi veya filtre deneyin.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 