"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, Filter, Edit, Trash2, Copy, Eye, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function UrunlerPage() {
  // Örnek ürün verileri
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: "Erkek Siyah T-Shirt", 
      sku: "ERK-TSH-001", 
      price: 149.99, 
      stock: 120, 
      variant: "S/M/L/XL", 
      category: "Giyim",
      status: "active", 
      image: "/images/products/tshirt.jpg" 
    },
    { 
      id: 2, 
      name: "Kadın Yazlık Elbise", 
      sku: "KDN-ELB-032", 
      price: 299.50, 
      stock: 45, 
      variant: "S/M/L", 
      category: "Giyim",
      status: "active", 
      image: "/images/products/dress.jpg" 
    },
    { 
      id: 3, 
      name: "Unisex Spor Ayakkabı", 
      sku: "AYK-SPR-092", 
      price: 499.90, 
      stock: 18, 
      variant: "38/39/40/41/42/43", 
      category: "Ayakkabı",
      status: "low_stock", 
      image: "/images/products/shoes.jpg" 
    },
    { 
      id: 4, 
      name: "Bluetooth Kulaklık", 
      sku: "ELK-KLK-152", 
      price: 899.00, 
      stock: 32, 
      variant: "Siyah/Beyaz", 
      category: "Elektronik",
      status: "active", 
      image: "/images/products/headphones.jpg" 
    },
    { 
      id: 5, 
      name: "Akıllı Saat", 
      sku: "ELK-SAT-089", 
      price: 1299.99, 
      stock: 7, 
      variant: "Siyah/Gümüş", 
      category: "Elektronik",
      status: "low_stock", 
      image: "/images/products/smartwatch.jpg" 
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  
  // Kategoriler
  const categories = ["Tümü", "Giyim", "Ayakkabı", "Elektronik", "Ev & Yaşam", "Kozmetik"];
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  // Filtreleme ve arama fonksiyonları
  const filteredProducts = products.filter(product => {
    // Kategoriye göre filtrele
    if (selectedCategory !== "Tümü" && product.category !== selectedCategory) {
      return false;
    }
    
    // Arama terimine göre filtrele
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !product.sku.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Ürünler</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Yeni Ürün Ekle
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Ürün adı veya SKU ile ara..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 flex gap-2">
          <div className="w-full relative">
            <select 
              className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
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
          <CardTitle>Ürün Listesi</CardTitle>
          <CardDescription>
            Toplam {filteredProducts.length} ürün {selectedCategory !== "Tümü" ? selectedCategory + " kategorisinde" : ""}
            {searchTerm ? ` "${searchTerm}" araması için` : ""}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">Ürün</th>
                  <th className="px-4 py-3 text-left">SKU</th>
                  <th className="px-4 py-3 text-left">Fiyat</th>
                  <th className="px-4 py-3 text-left">Stok</th>
                  <th className="px-4 py-3 text-left">Varyantlar</th>
                  <th className="px-4 py-3 text-left">Durum</th>
                  <th className="px-4 py-3 text-right">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-muted/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 mr-2 bg-gray-200 rounded overflow-hidden">
                          {product.image ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-10 h-10 bg-gray-200"></div>
                          )}
                        </div>
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-muted-foreground">{product.sku}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-medium">₺{product.price.toFixed(2)}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`${product.stock < 10 ? 'text-red-600 font-medium' : ''}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-muted-foreground">{product.variant}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                          product.status === 'active' ? 'bg-green-500' : 
                          product.status === 'low_stock' ? 'bg-orange-500' : 'bg-gray-500'
                        }`}></span>
                        <span className="text-sm">
                          {product.status === 'active' ? 'Aktif' : 
                          product.status === 'low_stock' ? 'Stok Az' : 'Pasif'}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <button className="p-1 hover:bg-muted rounded">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <button className="p-1 hover:bg-muted rounded">
                          <Edit className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <button className="p-1 hover:bg-muted rounded">
                          <Copy className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <button className="p-1 hover:bg-muted rounded">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Ürün bulunamadı. Farklı bir arama terimi veya filtre deneyin.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 