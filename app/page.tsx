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
  ArrowRight,
  Calendar,
  BookMarked,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      {/* Hero */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          <span className="text-primary">PAJAKKU</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Knowledge base perpajakan Indonesia yang komprehensif. Panduan lengkap
          regulasi, perhitungan, dan studi kasus — dari dasar hingga lanjutan.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <Badge variant="outline" className="text-xs">
            UU HPP (7/2021)
          </Badge>
          <Badge variant="outline" className="text-xs">
            Coretax 2025
          </Badge>
          <Badge variant="outline" className="text-xs">
            TER PPh 21
          </Badge>
          <Badge variant="outline" className="text-xs">
            PPN 11%/12%
          </Badge>
        </div>
      </section>

      {/* Quick Tools */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Tools Cepat</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_TOOLS.map((tool) => (
            <Link key={tool.href} href={tool.href}>
              <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <tool.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{tool.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {tool.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Knowledge Categories */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Knowledge Base</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                  <CardTitle className="text-base mt-3">{cat.title}</CardTitle>
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

      {/* Quick Info */}
      <section className="mb-12">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Tentang PAJAKKU</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              PAJAKKU adalah <em>personal knowledge base</em> perpajakan
              Indonesia yang dibangun sebagai &ldquo;second brain&rdquo; untuk memahami
              regulasi pajak secara mendalam. Semua konten mengacu pada regulasi
              terbaru termasuk UU No. 7 Tahun 2021 (UU HPP), PP 58/2023 (TER
              PPh 21), dan implementasi Coretax DJP per Januari 2025.
            </p>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Disclaimer: Konten bersifat edukatif. Untuk kepastian hukum,
              verifikasi ke pajak.go.id atau konsultan pajak.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
