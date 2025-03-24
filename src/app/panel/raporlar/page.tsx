"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BarChart, 
  LineChart, 
  PieChart, 
  Download, 
  Calendar, 
  Filter, 
  Printer, 
  ChevronDown, 
  Mail
} from "lucide-react";

export default function RaporlarPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("Bu Ay");
  const [selectedReportType, setSelectedReportType] = useState("Satış Raporları");

  // Örnek rapor verileri
  const reportTypes = [
    { id: "satis", name: "Satış Raporları", icon: <LineChart className="h-5 w-5" /> },
    { id: "urunler", name: "Ürün Performansı", icon: <BarChart className="h-5 w-5" /> },
    { id: "pazaryerleri", name: "Pazaryeri Analizi", icon: <PieChart className="h-5 w-5" /> },
    { id: "stok", name: "Stok Raporları", icon: <BarChart className="h-5 w-5" /> },
  ];

  // Zaman aralıkları
  const periods = ["Bugün", "Bu Hafta", "Bu Ay", "Son 3 Ay", "Bu Yıl", "Özel Aralık"];

  // Örnek satış verileri
  const salesData = [
    { date: "Ocak", amount: 12500, orders: 152 },
    { date: "Şubat", amount: 15800, orders: 189 },
    { date: "Mart", amount: 14200, orders: 175 },
    { date: "Nisan", amount: 18500, orders: 210 },
    { date: "Mayıs", amount: 21200, orders: 245 },
    { date: "Haziran", amount: 19800, orders: 230 },
  ];

  // Örnek ürün performans verileri
  const productPerformance = [
    { name: "A Ürünü", sales: 4200, profit: 1500, views: 2800 },
    { name: "B Ürünü", sales: 3800, profit: 1320, views: 2500 },
    { name: "C Ürünü", sales: 3200, profit: 1100, views: 2300 },
    { name: "D Ürünü", sales: 2900, profit: 950, views: 1800 },
    { name: "E Ürünü", sales: 2600, profit: 850, views: 1600 },
  ];

  // Formatla para birimini
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(amount);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Raporlar</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Dışa Aktar
          </Button>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" /> Yazdır
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> E-posta Gönder
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Rapor Türleri</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col">
                {reportTypes.map((report) => (
                  <button
                    key={report.id}
                    onClick={() => setSelectedReportType(report.name)}
                    className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 ${
                      selectedReportType === report.name 
                        ? "bg-primary/10 text-primary border-l-4 border-primary" 
                        : "border-l-4 border-transparent"
                    }`}
                  >
                    {report.icon}
                    <span>{report.name}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Zaman Aralığı</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                  >
                    {periods.map((period) => (
                      <option key={period} value={period}>{period}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>

                {selectedPeriod === "Özel Aralık" && (
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Başlangıç</span>
                    </div>
                    <Input type="date" />
                    
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Bitiş</span>
                    </div>
                    <Input type="date" />
                  </div>
                )}
              </div>

              <Button className="w-full mt-4">
                <Filter className="mr-2 h-4 w-4" /> Uygula
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1 md:col-span-3">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>{selectedReportType}</CardTitle>
              <CardDescription>
                {selectedPeriod} için rapor verileri gösteriliyor.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedReportType === "Satış Raporları" && (
                <div>
                  <div className="flex justify-between mb-6">
                    <div className="bg-primary/10 p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Toplam Satış</p>
                      <p className="text-2xl font-bold text-primary">{formatCurrency(102000)}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Toplam Sipariş</p>
                      <p className="text-2xl font-bold text-green-600">1,201</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Ortalama Sepet</p>
                      <p className="text-2xl font-bold text-blue-600">{formatCurrency(84.93)}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Aylık Satış Grafiği</h3>
                    <div className="h-60 relative border rounded-md p-4">
                      {/* Basit grafik gösterimi */}
                      <div className="absolute inset-0 flex items-end justify-around p-4">
                        {salesData.map((item, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div 
                              className="w-12 bg-primary rounded-t-sm" 
                              style={{ 
                                height: `${(item.amount / 22000) * 100}%`,
                                opacity: 0.7 + ((index + 1) / 10)
                              }}
                            ></div>
                            <span className="text-xs mt-2 text-muted-foreground">{item.date}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Satış Verileri</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="px-4 py-3 text-left">Tarih</th>
                            <th className="px-4 py-3 text-right">Satış Tutarı</th>
                            <th className="px-4 py-3 text-right">Sipariş Sayısı</th>
                          </tr>
                        </thead>
                        <tbody>
                          {salesData.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="px-4 py-3">{item.date}</td>
                              <td className="px-4 py-3 text-right">{formatCurrency(item.amount)}</td>
                              <td className="px-4 py-3 text-right">{item.orders}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {selectedReportType === "Ürün Performansı" && (
                <div>
                  <div className="mt-2 mb-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="px-4 py-3 text-left">Ürün</th>
                            <th className="px-4 py-3 text-right">Satış</th>
                            <th className="px-4 py-3 text-right">Kâr</th>
                            <th className="px-4 py-3 text-right">Görüntülenme</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productPerformance.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="px-4 py-3">{item.name}</td>
                              <td className="px-4 py-3 text-right">{formatCurrency(item.sales)}</td>
                              <td className="px-4 py-3 text-right">{formatCurrency(item.profit)}</td>
                              <td className="px-4 py-3 text-right">{item.views}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {selectedReportType === "Pazaryeri Analizi" && (
                <div>
                  <div className="mt-2 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Trendyol</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="text-2xl font-bold">{formatCurrency(42500)}</div>
                          <p className="text-sm text-muted-foreground">485 sipariş</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Hepsiburada</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="text-2xl font-bold">{formatCurrency(28300)}</div>
                          <p className="text-sm text-muted-foreground">310 sipariş</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">N11</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="text-2xl font-bold">{formatCurrency(16800)}</div>
                          <p className="text-sm text-muted-foreground">195 sipariş</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Pazaryeri Dağılımı Grafiği */}
                    <div className="mt-8">
                      <h3 className="text-lg font-medium mb-4">Pazaryeri Dağılımı</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-full flex items-center gap-2">
                            <span className="font-medium">Trendyol</span>
                            <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-red-400 w-[48%]" />
                            </div>
                            <span className="text-sm font-medium">48%</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full flex items-center gap-2">
                            <span className="font-medium">Hepsiburada</span>
                            <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-orange-400 w-[32%]" />
                            </div>
                            <span className="text-sm font-medium">32%</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full flex items-center gap-2">
                            <span className="font-medium">N11</span>
                            <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-green-400 w-[20%]" />
                            </div>
                            <span className="text-sm font-medium">20%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedReportType === "Stok Raporları" && (
                <div>
                  <div className="mt-2 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Toplam Ürün</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="text-2xl font-bold">486</div>
                          <p className="text-sm text-muted-foreground">12 kategori</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Stok Değeri</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="text-2xl font-bold">{formatCurrency(215680)}</div>
                          <p className="text-sm text-muted-foreground">8542 adet ürün</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Kritik Stok</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="text-2xl font-bold text-red-500">28</div>
                          <p className="text-sm text-muted-foreground">Stok güncellenmeli</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 