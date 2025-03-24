"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  User,
  Building,
  CreditCard,
  Bell,
  Shield,
  Lock,
  Globe,
  Smartphone,
  Mail,
  Settings,
  ExternalLink,
  Save
} from "lucide-react";

export default function AyarlarPage() {
  // Sekme durumu
  const [activeTab, setActiveTab] = useState("hesap");

  // Form durumu
  const [profileForm, setProfileForm] = useState({
    fullName: "Ahmet Yılmaz",
    email: "ahmet.yilmaz@example.com",
    phone: "+90 555 123 4567",
    company: "ABC Ticaret Ltd. Şti.",
    title: "E-ticaret Yöneticisi"
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailOrder: true,
    emailStock: true,
    emailMarketing: false,
    pushOrder: true,
    pushStock: false,
    pushMarketing: false
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleNotification = (key: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Sekme içeriği
  const renderTabContent = () => {
    switch (activeTab) {
      case "hesap":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profil Bilgileri</CardTitle>
                <CardDescription>Kişisel ve işletme bilgilerinizi güncelleyin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Ad Soyad</Label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      value={profileForm.fullName} 
                      onChange={handleProfileChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={profileForm.email} 
                      onChange={handleProfileChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={profileForm.phone} 
                      onChange={handleProfileChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Şirket Adı</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      value={profileForm.company} 
                      onChange={handleProfileChange} 
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="h-4 w-4 mr-2" /> Değişiklikleri Kaydet
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Şifre Değiştir</CardTitle>
                <CardDescription>Hesabınızın şifresini güncelleyin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Mevcut Şifre</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Yeni Şifre</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Yeni Şifre (Tekrar)</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Şifreyi Güncelle</Button>
              </CardFooter>
            </Card>
          </div>
        );

      case "bildirimler":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Bildirim Ayarları</CardTitle>
              <CardDescription>Hangi bildirimleri almak istediğinizi seçin</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">E-posta Bildirimleri</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sipariş Bildirimleri</p>
                        <p className="text-sm text-muted-foreground">Yeni siparişler ve sipariş durumu değişiklikleri</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.emailOrder}
                        onCheckedChange={() => toggleNotification('emailOrder')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Stok Uyarıları</p>
                        <p className="text-sm text-muted-foreground">Stok azaldığında veya tükendiğinde</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.emailStock}
                        onCheckedChange={() => toggleNotification('emailStock')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Pazarlama Haberleri</p>
                        <p className="text-sm text-muted-foreground">Yeni özellikler ve kampanyalar hakkında bilgiler</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.emailMarketing}
                        onCheckedChange={() => toggleNotification('emailMarketing')}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Push Bildirimleri</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sipariş Bildirimleri</p>
                        <p className="text-sm text-muted-foreground">Yeni siparişler ve sipariş durumu değişiklikleri</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.pushOrder}
                        onCheckedChange={() => toggleNotification('pushOrder')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Stok Uyarıları</p>
                        <p className="text-sm text-muted-foreground">Stok azaldığında veya tükendiğinde</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.pushStock}
                        onCheckedChange={() => toggleNotification('pushStock')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Pazarlama Haberleri</p>
                        <p className="text-sm text-muted-foreground">Yeni özellikler ve kampanyalar hakkında bilgiler</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.pushMarketing}
                        onCheckedChange={() => toggleNotification('pushMarketing')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Bildirimleri Kaydet</Button>
            </CardFooter>
          </Card>
        );

      case "fatura":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fatura Bilgileri</CardTitle>
                <CardDescription>Fatura ve ödeme bilgilerinizi yönetin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="taxOffice">Vergi Dairesi</Label>
                    <Input id="taxOffice" placeholder="Örn: Kadıköy" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxNumber">Vergi / TC Kimlik No</Label>
                    <Input id="taxNumber" placeholder="Örn: 1234567890" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="billingAddress">Fatura Adresi</Label>
                    <Input id="billingAddress" placeholder="Tam adres" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Bilgileri Kaydet</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ödeme Yöntemleri</CardTitle>
                <CardDescription>Kayıtlı ödeme yöntemlerinizi yönetin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <CreditCard className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-medium">**** **** **** 4242</p>
                        <p className="text-sm text-muted-foreground">Son Kullanma: 12/24</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Düzenle</Button>
                      <Button variant="destructive" size="sm">Kaldır</Button>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <CreditCard className="h-4 w-4 mr-2" /> Yeni Kart Ekle
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Abonelik</CardTitle>
                <CardDescription>Mevcut abonelik planınızı görüntüleyin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Pro Plan</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Aktif</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Aylık ödeme: <span className="font-medium text-foreground">₺299,00</span>
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Bir sonraki ödeme: 15 Haziran 2023
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Planı Değiştir</Button>
                    <Button variant="destructive" size="sm">Aboneliği İptal Et</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "guvenlik":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>İki Faktörlü Kimlik Doğrulama</CardTitle>
                <CardDescription>Hesabınızı daha güvenli hale getirin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">İki Faktörlü Kimlik Doğrulama</p>
                    <p className="text-sm text-muted-foreground">Giriş yaparken ek güvenlik katmanı ekleyin</p>
                  </div>
                  <Switch />
                </div>
                <p className="text-sm bg-yellow-50 text-yellow-800 p-3 rounded-md">
                  İki faktörlü kimlik doğrulama etkinleştirildiğinde, her giriş yaptığınızda size bir doğrulama kodu gönderilecektir.
                </p>
              </CardContent>
              <CardFooter>
                <Button disabled>Kuruluma Başla</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Oturum Yönetimi</CardTitle>
                <CardDescription>Aktif oturumlarınızı yönetin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Shield className="h-8 w-8 text-green-600" />
                      <div>
                        <p className="font-medium">Bu Cihaz</p>
                        <p className="text-sm text-muted-foreground">Chrome / MacOS · İstanbul · Şimdi</p>
                      </div>
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Aktif</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Shield className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <p className="font-medium">iPhone 13</p>
                        <p className="text-sm text-muted-foreground">Safari / iOS · Ankara · 2 gün önce</p>
                      </div>
                    </div>
                    <Button variant="destructive" size="sm">Çıkış Yap</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">
                  Tüm Diğer Oturumlardan Çıkış Yap
                </Button>
              </CardFooter>
            </Card>
          </div>
        );

      case "api":
        return (
          <Card>
            <CardHeader>
              <CardTitle>API Anahtarları</CardTitle>
              <CardDescription>API entegrasyonu için erişim anahtarlarınızı yönetin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Canlı API Anahtarı</p>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="bg-muted px-2 py-1 rounded text-xs">••••••••••••••••••••••••</code>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    </Button>
                  </div>
                </div>
                <Button variant="outline" size="sm">Yenile</Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Test API Anahtarı</p>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="bg-muted px-2 py-1 rounded text-xs">••••••••••••••••••••••••</code>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    </Button>
                  </div>
                </div>
                <Button variant="outline" size="sm">Yenile</Button>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Webhook URL</h3>
                <div className="space-y-2">
                  <Input value="https://example.com/webhooks/pazarsync" readOnly />
                  <p className="text-sm text-muted-foreground">
                    Bu URL&apos;ye olaylar hakkında bildirimler gönderilecektir.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">API Dokümantasyonu</h3>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="/api-docs" target="_blank">
                    <ExternalLink className="h-4 w-4" /> Dokümantasyonu Görüntüle
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Ayarlar</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1">
          <Card>
            <CardContent className="p-0">
              <div className="flex flex-col">
                <button
                  onClick={() => setActiveTab("hesap")}
                  className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 ${
                    activeTab === "hesap" 
                      ? "bg-primary/10 text-primary border-l-4 border-primary" 
                      : "border-l-4 border-transparent"
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Hesap Bilgileri</span>
                </button>

                <button
                  onClick={() => setActiveTab("bildirimler")}
                  className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 ${
                    activeTab === "bildirimler" 
                      ? "bg-primary/10 text-primary border-l-4 border-primary" 
                      : "border-l-4 border-transparent"
                  }`}
                >
                  <Bell className="h-5 w-5" />
                  <span>Bildirimler</span>
                </button>

                <button
                  onClick={() => setActiveTab("fatura")}
                  className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 ${
                    activeTab === "fatura" 
                      ? "bg-primary/10 text-primary border-l-4 border-primary" 
                      : "border-l-4 border-transparent"
                  }`}
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Fatura ve Ödeme</span>
                </button>

                <button
                  onClick={() => setActiveTab("guvenlik")}
                  className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 ${
                    activeTab === "guvenlik" 
                      ? "bg-primary/10 text-primary border-l-4 border-primary" 
                      : "border-l-4 border-transparent"
                  }`}
                >
                  <Shield className="h-5 w-5" />
                  <span>Güvenlik</span>
                </button>

                <button
                  onClick={() => setActiveTab("api")}
                  className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 ${
                    activeTab === "api" 
                      ? "bg-primary/10 text-primary border-l-4 border-primary" 
                      : "border-l-4 border-transparent"
                  }`}
                >
                  <Globe className="h-5 w-5" />
                  <span>API Erişimi</span>
                </button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <div className="p-5 bg-gray-50 rounded-xl">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Settings className="h-4 w-4" /> Destek
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Yardıma mı ihtiyacınız var? Teknik destek ekibimizle iletişime geçin.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="/iletisim">İletişime Geçin</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-3">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
} 