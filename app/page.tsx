"use client";

import Link from "next/link";
import { 
  BookOpen,
  Calculator,
  FileText,
  Scale,
  Building2,
  Globe,
  Laptop,
  Gift,
  Landmark,
  Monitor,
  ArrowRight,
  Calendar,
  BookMarked,
  Download,
  ExternalLink,
  Sparkles,
  Bell,
  Users,
  File,
  TrendingUp,
  Zap,
  Target,
  Briefcase,
  MessageSquare,
  ChevronRight,
  Bot,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MATERIAL_LIBRARY, formatBytesToMB } from "@/data/material-library";
import { cn } from "@/lib/utils";

// Quick Actions untuk Super App
const QUICK_ACTIONS = [
  { 
    title: "AI Tax Assistant", 
    href: "/ai-assistant", 
    icon: Bot, 
    description: "Asisten AI untuk pertanyaan pajak",
    color: "bg-violet-500",
    badge: "New",
    featured: true,
  },
  { 
    title: "Regulatory Alerts", 
    href: "/alerts", 
    icon: Bell, 
    description: "Notifikasi regulasi real-time",
    color: "bg-amber-500",
    badge: "5 New",
    featured: true,
  },
  { 
    title: "ASEAN Tax Hub", 
    href: "/asean", 
    icon: Globe, 
    description: "Cross-jurisdiction tools",
    color: "bg-blue-500",
    featured: true,
  },
  { 
    title: "Template Library", 
    href: "/templates", 
    icon: File, 
    description: "Template client deliverables",
    color: "bg-emerald-500",
    featured: true,
  },
  { 
    title: "Community", 
    href: "/community", 
    icon: Users, 
    description: "Forum diskusi praktisi",
    color: "bg-teal-500",
    featured: true,
  },
];

const KNOWLEDGE_CATEGORIES = [
  {
    title: "Pajak Penghasilan (PPh)",
    description: "PPh 21, 22, 23, 25, 26, Pasal 4(2), PPh Badan, PPh Internasional",
    href: "/pph",
    icon: BookOpen,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    articles: 15,
  },
  {
    title: "PPN & PPnBM",
    description: "Mekanisme PPN, Faktur Pajak, PPN PMSE, Fasilitas PPN",
    href: "/ppn",
    icon: FileText,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    articles: 8,
  },
  {
    title: "Ketentuan Umum (KUP)",
    description: "NPWP, SPT, Pembayaran, Pemeriksaan, Keberatan, Sanksi",
    href: "/kup",
    icon: Scale,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    articles: 10,
  },
  {
    title: "Coretax DJP",
    description: "Tutorial login, e-Faktur web, SPT, billing, troubleshooting",
    href: "/coretax",
    icon: Monitor,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    articles: 7,
    badge: "2025",
  },
  {
    title: "PBB & BPHTB",
    description: "PBB Perdesaan/Perkotaan, PBB P3, BPHTB",
    href: "/pbb",
    icon: Building2,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    articles: 4,
  },
  {
    title: "Pajak Daerah",
    description: "PKB, BBNKB, PBJT, Pajak Reklame, Opsen (UU HKPD)",
    href: "/pajak-daerah",
    icon: Landmark,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    articles: 5,
  },
  {
    title: "Transfer Pricing",
    description: "Arm's Length, Dokumentasi TP, APA, MAP, BEPS",
    href: "/transfer-pricing",
    icon: Globe,
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    articles: 6,
  },
  {
    title: "Pajak Digital",
    description: "PPN PMSE, Pajak Kripto, Fintech, E-Commerce",
    href: "/pajak-digital",
    icon: Laptop,
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
    articles: 4,
    badge: "New",
  },
  {
    title: "Fasilitas & Insentif",
    description: "Tax Holiday, Tax Allowance, Super Deduction, KEK, IKN",
    href: "/fasilitas-insentif",
    icon: Gift,
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-50 dark:bg-pink-950/30",
    articles: 7,
  },
];

const QUICK_TOOLS = [
  { title: "Kalkulator PPh 21", href: "/kalkulator/pph-21", icon: Calculator, description: "Hitung PPh 21 dengan TER & Pasal 17" },
  { title: "Kalkulator PPN", href: "/kalkulator/ppn", icon: Calculator, description: "Hitung PPN include/exclude" },
  { title: "Kalender Pajak", href: "/kalender", icon: Calendar, description: "Deadline pelaporan & pembayaran" },
  { title: "Glosarium", href: "/glosarium", icon: BookMarked, description: "500+ istilah perpajakan" },
];

// Mock data untuk alerts
const LATEST_ALERTS = [
  { title: "PPN 12% Berlaku 1 Januari 2025", priority: "high", time: "2 jam lalu" },
  { title: "Coretax Maintenance 25-26 Feb", priority: "medium", time: "4 jam lalu" },
  { title: "PMK 243/2024 - e-Faktur Update", priority: "high", time: "6 jam lalu" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      {/* Hero - Super App Banner */}
      <section className="mb-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 text-white p-8 md:p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  <Sparkles className="h-3 w-3 mr-1" />
                  PAJAKKU Super App v2.0
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                  Tax Knowledge Platform
                  <span className="block text-violet-200">for Modern Practitioners</span>
                </h1>
                <p className="text-lg text-indigo-100 max-w-xl mb-6">
                  Knowledge base terlengkap + AI Assistant + ASEAN Tools + Community. 
                  Semua yang Anda butuhkan untuk praktik perpajakan modern.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/ai-assistant">
                    <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                      <Bot className="h-5 w-5 mr-2" />
                      Coba AI Assistant
                    </Button>
                  </Link>
                  <Link href="/materi">
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Jelajahi Library
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <Bot className="h-8 w-8 mb-2" />
                    <p className="font-semibold">AI Assistant</p>
                    <p className="text-xs text-indigo-200">Tanya pajak 24/7</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <Bell className="h-8 w-8 mb-2" />
                    <p className="font-semibold">Real-time Alerts</p>
                    <p className="text-xs text-indigo-200">Update regulasi</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <Globe className="h-8 w-8 mb-2" />
                    <p className="font-semibold">ASEAN Hub</p>
                    <p className="text-xs text-indigo-200">Cross-border tax</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <Users className="h-8 w-8 mb-2" />
                    <p className="font-semibold">Community</p>
                    <p className="text-xs text-indigo-200">2.4k praktisi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quick Actions */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-amber-500" />
          Featured Tools
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {QUICK_ACTIONS.map((action) => (
            <Link key={action.href} href={action.href}>
              <Card className={cn(
                "h-full hover:shadow-lg transition-all group overflow-hidden border-2 border-transparent hover:border-primary/20",
                action.featured && "relative"
              )}>
                {action.featured && action.badge && (
                  <Badge className="absolute top-2 right-2 text-[10px] bg-primary text-white">
                    {action.badge}
                  </Badge>
                )}
                <CardContent className="p-4">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-white",
                    action.color
                  )}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {action.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {action.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Dashboard Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Knowledge Base */}
        <div className="lg:col-span-2 space-y-8">
          {/* Knowledge Categories */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Knowledge Base</h2>
              <Link href="/pph" className="text-sm text-primary hover:underline flex items-center">
                Lihat Semua
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {KNOWLEDGE_CATEGORIES.map((cat) => (
                <Link key={cat.href} href={cat.href}>
                  <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`rounded-lg p-2.5 ${cat.bgColor}`}>
                          <cat.icon className={`h-5 w-5 ${cat.color}`} />
                        </div>
                        {cat.badge && (
                          <Badge variant="secondary" className="text-[10px]">
                            {cat.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-sm mt-3">{cat.title}</CardTitle>
                      <CardDescription className="text-xs">
                        {cat.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{cat.articles} topik</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Recent Materials */}
          <section>
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">Materi & Riset Terbaru</h2>
                <p className="text-sm text-muted-foreground">
                  Dokumen dari user, disusun sebagai library
                </p>
              </div>
              <Link
                href="/materi"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Buka Semua
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {MATERIAL_LIBRARY.slice(0, 4).map((doc) => (
                <Card
                  key={doc.id}
                  className="h-full border-border/80 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-medium text-sm line-clamp-1">{doc.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                          {doc.description}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-[10px] shrink-0">
                        {doc.category}
                      </Badge>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5 text-xs text-muted-foreground">
                      <span className="rounded-full bg-muted px-2 py-0.5">
                        {doc.pages} {doc.pagesLabel ?? "halaman"}
                      </span>
                      <span className="rounded-full bg-muted px-2 py-0.5">
                        {formatBytesToMB(doc.fileSizeBytes)}
                      </span>
                      <span className="rounded-full bg-muted px-2 py-0.5">
                        {doc.fileType}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {doc.isInternal ? (
                        <Link
                          href={doc.filePath}
                          className="inline-flex items-center gap-1 rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-accent"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Buka
                        </Link>
                      ) : (
                        <a
                          href={doc.filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-accent"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Buka File
                        </a>
                      )}
                      {(doc.downloadPath || !doc.isInternal) && (
                        <a
                          href={doc.downloadPath ?? doc.filePath}
                          download
                          className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
                        >
                          <Download className="h-3.5 w-3.5" />
                          Download
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Quick Tools */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Tools Cepat</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-2">
              {QUICK_TOOLS.map((tool) => (
                <Link key={tool.href} href={tool.href}>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <tool.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{tool.title}</p>
                      <p className="text-xs text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Latest Alerts */}
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Bell className="h-4 w-4 text-amber-500" />
                  Regulatory Alerts
                </CardTitle>
                <Badge variant="secondary" className="text-[10px]">5 New</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              {LATEST_ALERTS.map((alert, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-1.5 shrink-0",
                    alert.priority === "high" ? "bg-red-500" : "bg-amber-500"
                  )} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-1">{alert.title}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
              ))}
              <Link href="/alerts">
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  Lihat Semua Alert
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Community Preview */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-teal-500" />
                  Diskusi Terbaru
                </CardTitle>
                <Badge variant="secondary" className="text-[10px]">89% Solved</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              {[
                { title: "Cara input e-Faktur untuk WP BKM", replies: 23, solved: true },
                { title: "Perhitungan PPh 21 dengan TER", replies: 18, solved: true },
                { title: "Error ETAX-API-10001 di Coretax", replies: 8, solved: false },
              ].map((disc, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-1.5 shrink-0",
                    disc.solved ? "bg-green-500" : "bg-amber-500"
                  )} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm line-clamp-1">{disc.title}</p>
                    <p className="text-xs text-muted-foreground">{disc.replies} balasan</p>
                  </div>
                </div>
              ))}
              <Link href="/community">
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  Lihat Forum
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* About */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-2">Tentang PAJAKKU</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Super App perpajakan Indonesia dengan knowledge base komprehensif, 
                AI Assistant, ASEAN Tools, dan Community Forum.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="outline" className="text-[10px]">UU HPP</Badge>
                <Badge variant="outline" className="text-[10px]">Coretax 2025</Badge>
                <Badge variant="outline" className="text-[10px]">AI Powered</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
