"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronDown, Clock, Mail, MailOpen, AlertCircle, Reply, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type MessageStatus = "unread" | "read" | "replied" | "archived";
type MessagePriority = "normal" | "high" | "low";

interface Message {
  id: number;
  senderName: string;
  senderEmail: string;
  subject: string;
  content: string;
  receivedDate: string;
  status: MessageStatus;
  priority: MessagePriority;
  marketplace?: string;
}

export default function MesajlarPage() {
  // Örnek mesaj verileri
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      senderName: "Ayşe Demir",
      senderEmail: "ayse.demir@gmail.com",
      subject: "Sipariş Hakkında Bilgi",
      content: "Merhaba, geçen hafta verdiğim siparişin durumu nedir? Kargoya verildi mi?",
      receivedDate: "2023-05-20T10:30:00",
      status: "unread",
      priority: "normal"
    },
    {
      id: 2,
      senderName: "Mehmet Yılmaz",
      senderEmail: "mehmet.yilmaz@example.com",
      subject: "İade Talebi",
      content: "Aldığım ürünün rengi katalogdakinden farklı. İade etmek istiyorum, prosedür nedir?",
      receivedDate: "2023-05-19T14:45:00",
      status: "read",
      priority: "high",
      marketplace: "Trendyol"
    },
    {
      id: 3,
      senderName: "Zeynep Kaya",
      senderEmail: "zeynep.k@hotmail.com",
      subject: "Teşekkür Mesajı",
      content: "Siparişim çok hızlı geldi, ürünün kalitesi de harika. Teşekkür ederim!",
      receivedDate: "2023-05-18T09:15:00",
      status: "replied",
      priority: "normal"
    },
    {
      id: 4,
      senderName: "Ali Öztürk",
      senderEmail: "ali.ozturk@gmail.com",
      subject: "Stok Sorgusu",
      content: "Merhaba, X model ürününüzün ne zaman stokta olacağını öğrenebilir miyim?",
      receivedDate: "2023-05-17T16:20:00",
      status: "archived",
      priority: "low"
    },
    {
      id: 5,
      senderName: "Hepsiburada Destek",
      senderEmail: "destek@hepsiburada.com",
      subject: "Yeni Kampanya Bildirimi",
      content: "Yaz indirimleri kapsamında komisyon oranlarımızı düşürdük. Detaylı bilgi için lütfen paneli kontrol edin.",
      receivedDate: "2023-05-16T11:05:00",
      status: "unread",
      priority: "high",
      marketplace: "Hepsiburada"
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Tümü");
  const [selectedPriority, setSelectedPriority] = useState("Tümü");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // Statü filtreleri
  const statuses = ["Tümü", "Okunmamış", "Okunmuş", "Yanıtlanmış", "Arşivlenmiş"];
  
  // Öncelik filtreleri
  const priorities = ["Tümü", "Yüksek", "Normal", "Düşük"];

  // Mesaj durumuna göre badge renklendirme
  const getStatusBadge = (status: MessageStatus) => {
    switch (status) {
      case "unread":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Mail className="h-3 w-3 mr-1" /> Okunmamış
          </Badge>
        );
      case "read":
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            <MailOpen className="h-3 w-3 mr-1" /> Okunmuş
          </Badge>
        );
      case "replied":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Reply className="h-3 w-3 mr-1" /> Yanıtlanmış
          </Badge>
        );
      case "archived":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            <Trash2 className="h-3 w-3 mr-1" /> Arşivlenmiş
          </Badge>
        );
      default:
        return <Badge variant="outline">Bilinmiyor</Badge>;
    }
  };

  // Öncelik durumuna göre gösterge
  const getPriorityIndicator = (priority: MessagePriority) => {
    switch (priority) {
      case "high":
        return <span className="flex items-center text-red-500 text-xs"><AlertCircle className="h-3 w-3 mr-1" /> Yüksek</span>;
      case "normal":
        return <span className="flex items-center text-gray-500 text-xs">Normal</span>;
      case "low":
        return <span className="flex items-center text-blue-500 text-xs">Düşük</span>;
      default:
        return null;
    }
  };

  // Filtreleme ve arama fonksiyonları
  const filteredMessages = messages.filter((message: Message) => {
    // Statüs filtreleri
    if (selectedStatus !== "Tümü") {
      const statusMap: Record<string, MessageStatus> = {
        "Okunmamış": "unread",
        "Okunmuş": "read",
        "Yanıtlanmış": "replied",
        "Arşivlenmiş": "archived"
      };
      if (message.status !== statusMap[selectedStatus]) {
        return false;
      }
    }
    
    // Öncelik filtreleri
    if (selectedPriority !== "Tümü") {
      const priorityMap: Record<string, MessagePriority> = {
        "Yüksek": "high",
        "Normal": "normal",
        "Düşük": "low"
      };
      if (message.priority !== priorityMap[selectedPriority]) {
        return false;
      }
    }
    
    // Arama terimine göre filtrele
    if (searchTerm && 
        !message.subject.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !message.senderName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !message.content.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Mesaj açma fonksiyonu
  const handleOpenMessage = (message: Message) => {
    // Eğer okunmamış bir mesaj açılıyorsa, durumunu okunmuş olarak değiştir
    if (message.status === "unread") {
      const updatedMessages = messages.map((m: Message) => 
        m.id === message.id ? { ...m, status: "read" as MessageStatus } : m
      );
      setMessages(updatedMessages);
      message = { ...message, status: "read" };
    }
    setSelectedMessage(message);
  };

  // Yanıtlama fonksiyonu
  const handleReplyMessage = (message: Message) => {
    const updatedMessages = messages.map((m: Message) => 
      m.id === message.id ? { ...m, status: "replied" as MessageStatus } : m
    );
    setMessages(updatedMessages);
    setSelectedMessage({ ...message, status: "replied" });
    // Burada normalde yanıtlama formu açılacak
    alert(`"${message.subject}" konulu mesaja yanıt veriliyor...`);
  };

  // Arşivleme fonksiyonu
  const handleArchiveMessage = (message: Message) => {
    const updatedMessages = messages.map((m: Message) => 
      m.id === message.id ? { ...m, status: "archived" as MessageStatus } : m
    );
    setMessages(updatedMessages);
    setSelectedMessage(null);
  };

  // Tarih formatını düzenleme
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR") + " " + date.toLocaleTimeString("tr-TR", { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Mesajlar</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Mesaj içeriğinde ara..."
              className="pl-10"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex gap-2">
          <div className="w-1/2 relative">
            <select 
              className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              value={selectedStatus}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedStatus(e.target.value)}
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
              value={selectedPriority}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPriority(e.target.value)}
            >
              {priorities.map((priority, index) => (
                <option key={index} value={priority}>{priority}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card className="h-[calc(100vh-220px)] flex flex-col">
            <CardHeader>
              <CardTitle>Gelen Kutusu</CardTitle>
              <CardDescription>
                {filteredMessages.length} mesaj gösteriliyor
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow overflow-auto p-0">
              <div className="divide-y">
                {filteredMessages.map((message: Message) => (
                  <div 
                    key={message.id} 
                    className={`p-4 cursor-pointer hover:bg-muted/50 ${selectedMessage?.id === message.id ? 'bg-muted/50' : ''} ${message.status === 'unread' ? 'border-l-4 border-blue-500' : ''}`}
                    onClick={() => handleOpenMessage(message)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium">{message.senderName}</span>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatDate(message.receivedDate).split(' ')[0]}
                      </span>
                    </div>
                    <div className="text-sm font-medium mb-1">{message.subject}</div>
                    <div className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {message.content}
                    </div>
                    <div className="flex justify-between items-center">
                      {getStatusBadge(message.status)}
                      {message.marketplace && (
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                          {message.marketplace}
                        </span>
                      )}
                      {getPriorityIndicator(message.priority)}
                    </div>
                  </div>
                ))}

                {filteredMessages.length === 0 && (
                  <div className="p-8 text-center">
                    <p className="text-muted-foreground">Mesaj bulunamadı. Farklı bir arama terimi veya filtre deneyin.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          {selectedMessage ? (
            <Card className="h-[calc(100vh-220px)] flex flex-col">
              <CardHeader className="pb-2 flex flex-row justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{selectedMessage.subject}</CardTitle>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="text-sm">
                      <span className="font-medium">{selectedMessage.senderName}</span>
                      <span className="text-muted-foreground"> &lt;{selectedMessage.senderEmail}&gt;</span>
                    </span>
                    {selectedMessage.marketplace && (
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                        {selectedMessage.marketplace}
                      </span>
                    )}
                    {getPriorityIndicator(selectedMessage.priority)}
                  </div>
                  <CardDescription className="mt-1">
                    {formatDate(selectedMessage.receivedDate)}
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleReplyMessage(selectedMessage)}
                  >
                    <Reply className="h-4 w-4 mr-1" /> Yanıtla
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleArchiveMessage(selectedMessage)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Arşivle
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto pt-4 border-t">
                <div className="prose max-w-none">
                  <p>{selectedMessage.content}</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-[calc(100vh-220px)] flex flex-col items-center justify-center">
              <div className="text-center p-8">
                <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Mesaj seçilmedi</h3>
                <p className="text-muted-foreground">Detayını görmek için soldaki listeden bir mesaj seçin.</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
} 