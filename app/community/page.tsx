"use client";

import { useState } from "react";
import { 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  Eye,
  Clock,
  Tag,
  Search,
  Filter,
  Plus,
  TrendingUp,
  MessageCircle,
  CheckCircle2,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Discussion {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    initials: string;
    badge?: string;
  };
  category: string;
  tags: string[];
  replies: number;
  views: number;
  likes: number;
  isSolved: boolean;
  lastActivity: string;
  trending?: boolean;
}

const DISCUSSIONS: Discussion[] = [
  {
    id: "1",
    title: "Cara input e-Faktur untuk transaksi dengan WP yang pemusatan di KPP BKM",
    excerpt: "Saya ada kendala saat membuat faktur pajak untuk customer yang pemusatan di KPP BKM. Alamat yang muncul tidak sesuai...",
    author: { name: "Andi Wijaya", initials: "AW", badge: "Tax Consultant" },
    category: "PPN",
    tags: ["e-Faktur", "KPP BKM", "Pemusatan"],
    replies: 23,
    views: 456,
    likes: 15,
    isSolved: true,
    lastActivity: "2 jam yang lalu",
    trending: true,
  },
  {
    id: "2",
    title: "Perhitungan PPh 21 untuk karyawan yang resign di tengah tahun dengan TER",
    excerpt: "Bagaimana cara menghitung PPh 21 untuk karyawan yang resign di bulan Juni? Apakah pakai TER sampai Juni lalu...",
    author: { name: "Siti Rahayu", initials: "SR" },
    category: "PPh 21",
    tags: ["TER", "Resign", "Karyawan"],
    replies: 18,
    views: 342,
    likes: 12,
    isSolved: true,
    lastActivity: "4 jam yang lalu",
    trending: true,
  },
  {
    id: "3",
    title: "Error ETAX-API-10001 saat upload e-Faktur di Coretax",
    excerpt: "Sudah coba berkali-kali upload e-Faktur tapi selalu muncul error ETAX-API-10001. Ada yang pernah mengalami...",
    author: { name: "Budi Santoso", initials: "BS" },
    category: "Coretax",
    tags: ["Error", "e-Faktur", "Coretax"],
    replies: 8,
    views: 189,
    likes: 5,
    isSolved: false,
    lastActivity: "6 jam yang lalu",
  },
  {
    id: "4",
    title: "Pembetulan SPT Tahunan 2023 setelah pemeriksaan",
    excerpt: "WP saya sudah diperiksa untuk tahun 2023 dan SKPKB sudah terbit. Tapi ternyata ada kesalahan data harta...",
    author: { name: "Dewi Kusuma", initials: "DK", badge: "Senior Tax" },
    category: "Pemeriksaan",
    tags: ["SKPKB", "Pembetulan", "Pemeriksaan"],
    replies: 12,
    views: 278,
    likes: 8,
    isSolved: false,
    lastActivity: "8 jam yang lalu",
  },
  {
    id: "5",
    title: "Pengurangan PPh Badan untuk WP dengan omzet dibawah 4,8 M",
    excerpt: "Apakah masih berlaku insentif pengurangan PPh Badan 50% untuk WP dengan omzet dibawah 4,8 M di tahun 2025?",
    author: { name: "Eko Prasetyo", initials: "EP" },
    category: "PPh Badan",
    tags: ["Insentif", "UMKM", "PPh Badan"],
    replies: 31,
    views: 892,
    likes: 28,
    isSolved: true,
    lastActivity: "12 jam yang lalu",
    trending: true,
  },
];

const CATEGORIES = [
  { name: "Semua", count: 156 },
  { name: "PPh 21", count: 42 },
  { name: "PPN", count: 38 },
  { name: "PPh Badan", count: 29 },
  { name: "Coretax", count: 24 },
  { name: "Pemeriksaan", count: 15 },
  { name: "KUP", count: 8 },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredDiscussions = DISCUSSIONS.filter(d => {
    const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         d.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || d.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Komunitas Pajak</h1>
            <p className="text-sm text-muted-foreground">
              Forum diskusi untuk praktisi pajak, konsultan, dan WP
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-emerald-600">2.4k</p>
              <p className="text-xs text-muted-foreground">Anggota Aktif</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-blue-600">156</p>
              <p className="text-xs text-muted-foreground">Diskusi</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-amber-600">89%</p>
              <p className="text-xs text-muted-foreground">Tingkat Solusi</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-purple-600">12</p>
              <p className="text-xs text-muted-foreground">Expert Online</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* New Discussion Button */}
          <Button className="w-full gap-2">
            <Plus className="h-4 w-4" />
            Diskusi Baru
          </Button>

          {/* Categories */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Kategori</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors",
                      selectedCategory === cat.name
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    )}
                  >
                    <span>{cat.name}</span>
                    <Badge variant={selectedCategory === cat.name ? "secondary" : "outline"} className="text-[10px]">
                      {cat.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Contributors */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {[
                  { name: "Dr. Ahmad Tax", initials: "AT", points: 2450, badge: "Expert" },
                  { name: "Maria Consultant", initials: "MC", points: 1890, badge: "Pro" },
                  { name: "Budi Senior", initials: "BS", points: 1560 },
                ].map((user, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.points} pts</p>
                    </div>
                    {user.badge && (
                      <Badge variant="outline" className="text-[10px]">
                        <Award className="h-3 w-3 mr-1" />
                        {user.badge}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-4">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari diskusi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="latest">Terbaru</TabsTrigger>
                <TabsTrigger value="trending">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trending
                </TabsTrigger>
                <TabsTrigger value="unanswered">Belum Terjawab</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Discussions List */}
          <div className="space-y-3">
            {filteredDiscussions.map((discussion) => (
              <Card 
                key={discussion.id}
                className={cn(
                  "hover:shadow-md transition-all cursor-pointer",
                  discussion.trending && "border-l-4 border-l-orange-500"
                )}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    {/* Author Avatar */}
                    <Avatar className="h-10 w-10 shrink-0">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                        {discussion.author.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-[10px]">
                          {discussion.category}
                        </Badge>
                        {discussion.isSolved && (
                          <Badge className="bg-green-100 text-green-800 text-[10px]">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Terselesaikan
                          </Badge>
                        )}
                        {discussion.trending && (
                          <Badge className="bg-orange-100 text-orange-800 text-[10px]">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-base mb-1 hover:text-primary">
                        {discussion.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {discussion.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {discussion.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-[10px]">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{discussion.author.name}</span>
                          {discussion.author.badge && (
                            <Badge variant="outline" className="text-[10px]">
                              {discussion.author.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            {discussion.replies}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {discussion.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="h-3 w-3" />
                            {discussion.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {discussion.lastActivity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline">Muat Lebih Banyak</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
