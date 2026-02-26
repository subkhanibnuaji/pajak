"use client";

import { useState } from "react";
import { 
  Bell, 
  Filter, 
  Search, 
  Calendar, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink,
  Bookmark,
  Share2,
  TrendingUp,
  Building2,
  User,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  title: string;
  description: string;
  category: "regulasi" | "pengumuman" | "coretax" | "deadline";
  priority: "high" | "medium" | "low";
  date: string;
  source: string;
  read: boolean;
  bookmarked: boolean;
  impact?: string[];
}

const MOCK_ALERTS: Alert[] = [
  {
    id: "1",
    title: "PMK 243 Tahun 2024 - Perubahan Ketentuan e-Faktur",
    description: "Direktorat Jenderal Pajak menerbitkan PMK 243/2024 yang mengubah beberapa ketentuan terkait pembuatan dan pelaporan e-Faktur. Perubahan ini berlaku efektif per 1 Januari 2025.",
    category: "regulasi",
    priority: "high",
    date: "2024-12-15",
    source: "DJP Official",
    read: false,
    bookmarked: true,
    impact: ["PKP Wajib e-Faktur", "Sistem Coretax", "Pelaporan PPN"],
  },
  {
    id: "2",
    title: "Coretax DJP 2025 - Pemeliharaan Sistem 25-26 Februari",
    description: "Sistem Coretax DJP akan dilakukan pemeliharaan rutin pada tanggal 25-26 Februari 2025 pukul 22:00 - 04:00 WIB. Selama pemeliharaan, akses ke beberapa layanan mungkin terbatas.",
    category: "coretax",
    priority: "medium",
    date: "2024-12-14",
    source: "Coretax DJP",
    read: false,
    bookmarked: false,
    impact: ["Akses Login", "e-Filing", "e-Faktur"],
  },
  {
    id: "3",
    title: "Deadline SPT Tahunan OP: 31 Maret 2025",
    description: "Jangan lupa! Batas akhir pelaporan SPT Tahunan untuk Wajib Pajak Orang Pribadi adalah 31 Maret 2025. Gunakan sistem Coretax untuk pelaporan yang lebih mudah.",
    category: "deadline",
    priority: "high",
    date: "2024-12-13",
    source: "DJP Official",
    read: true,
    bookmarked: true,
    impact: ["Seluruh WP OP", "Denda Administrasi", "Coretax"],
  },
  {
    id: "4",
    title: "SE-46/PJ/2024 - Penegasan Ketentuan PPh Pasal 21",
    description: "Surat Edaran Dirjen Pajak Nomor SE-46/PJ/2024 memberikan penegasan terkait pemotongan PPh Pasal 21 atas penghasilan dalam bentuk natura dan/atau kenikmatan.",
    category: "regulasi",
    priority: "medium",
    date: "2024-12-12",
    source: "DJP Official",
    read: true,
    bookmarked: false,
    impact: ["HR/Payroll", "PPh 21", "Natura"],
  },
  {
    id: "5",
    title: "PPN 12% Berlaku Efektif 1 Januari 2025",
    description: "Sesuai UU HPP, tarif PPN naik dari 11% menjadi 12% mulai 1 Januari 2025. Seluruh PKP wajib menyesuaikan sistem penagihan dan e-Faktur.",
    category: "regulasi",
    priority: "high",
    date: "2024-12-10",
    source: "Kemenkeu",
    read: true,
    bookmarked: true,
    impact: ["Seluruh PKP", "e-Faktur", "Penagihan"],
  },
  {
    id: "6",
    title: "Program Pengungkapan Sukarela (PPS) Periode II Diperpanjang",
    description: "Pemerintah memperpanjang Program Pengungkapan Sukarela (PPS) periode II hingga 30 Juni 2025. Manfaatkan kesempatan ini untuk melaporkan harta yang belum dilaporkan.",
    category: "pengumuman",
    priority: "medium",
    date: "2024-12-08",
    source: "Kemenkeu",
    read: false,
    bookmarked: false,
    impact: ["WP dengan Harta Luar Negeri", "Tax Amnesty"],
  },
];

const categoryConfig = {
  regulasi: { label: "Regulasi", color: "bg-blue-100 text-blue-800 border-blue-200", icon: FileText },
  pengumuman: { label: "Pengumuman", color: "bg-purple-100 text-purple-800 border-purple-200", icon: Building2 },
  coretax: { label: "Coretax", color: "bg-indigo-100 text-indigo-800 border-indigo-200", icon: TrendingUp },
  deadline: { label: "Deadline", color: "bg-red-100 text-red-800 border-red-200", icon: Clock },
};

const priorityConfig = {
  high: { label: "Tinggi", color: "bg-red-500", icon: AlertTriangle },
  medium: { label: "Sedang", color: "bg-amber-500", icon: Clock },
  low: { label: "Rendah", color: "bg-green-500", icon: CheckCircle },
};

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>(MOCK_ALERTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredAlerts = alerts.filter((alert) => {
    const matchesSearch = alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alert.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || alert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const unreadCount = alerts.filter(a => !a.read).length;
  const bookmarkedCount = alerts.filter(a => a.bookmarked).length;

  const toggleRead = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, read: !a.read } : a));
  };

  const toggleBookmark = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, bookmarked: !a.bookmarked } : a));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
            <Bell className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Regulatory Alert Center</h1>
            <p className="text-sm text-muted-foreground">
              Pantau perubahan regulasi dan pengumuman penting DJP secara real-time
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-red-50 to-red-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-red-600">{unreadCount}</p>
              <p className="text-xs text-muted-foreground">Notifikasi Baru</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-amber-600">{alerts.filter(a => a.priority === "high").length}</p>
              <p className="text-xs text-muted-foreground">Prioritas Tinggi</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-blue-600">{bookmarkedCount}</p>
              <p className="text-xs text-muted-foreground">Tersimpan</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-green-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-green-600">{alerts.length}</p>
              <p className="text-xs text-muted-foreground">Total Alert</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari alert..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            Semua
          </Button>
          {Object.entries(categoryConfig).map(([key, config]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(key)}
            >
              <config.icon className="h-3 w-3 mr-1" />
              {config.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => {
          const catConfig = categoryConfig[alert.category];
          const priConfig = priorityConfig[alert.priority];
          
          return (
            <Card 
              key={alert.id} 
              className={cn(
                "transition-all hover:shadow-md",
                !alert.read && "border-l-4 border-l-primary bg-primary/5"
              )}
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  {/* Priority Indicator */}
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-2 shrink-0",
                    priConfig.color
                  )} />
                  
                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className={cn("text-[10px]", catConfig.color)}>
                        <catConfig.icon className="h-3 w-3 mr-1" />
                        {catConfig.label}
                      </Badge>
                      <Badge variant="outline" className="text-[10px]">
                        <priConfig.icon className="h-3 w-3 mr-1" />
                        Prioritas {priConfig.label}
                      </Badge>
                      {!alert.read && (
                        <Badge className="bg-primary text-[10px]">Baru</Badge>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={cn(
                      "font-semibold mb-1",
                      !alert.read && "text-primary"
                    )}>
                      {alert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-3">
                      {alert.description}
                    </p>

                    {/* Impact Tags */}
                    {alert.impact && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="text-xs text-muted-foreground mr-1">Dampak:</span>
                        {alert.impact.map((imp) => (
                          <Badge key={imp} variant="secondary" className="text-[10px]">
                            {imp}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(alert.date).toLocaleDateString("id-ID")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {alert.source}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => toggleBookmark(alert.id)}
                        >
                          <Bookmark 
                            className={cn(
                              "h-4 w-4",
                              alert.bookmarked && "fill-primary text-primary"
                            )} 
                          />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleRead(alert.id)}
                        >
                          {alert.read ? "Tandai Belum Baca" : "Tandai Sudah Baca"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredAlerts.length === 0 && (
        <div className="text-center py-12">
          <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Tidak ada alert</h3>
          <p className="text-sm text-muted-foreground">
            Tidak ditemukan alert yang sesuai dengan filter Anda
          </p>
        </div>
      )}
    </div>
  );
}
