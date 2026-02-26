"use client";

import { useState } from "react";
import { 
  FileText, 
  Download, 
  FileSpreadsheet,
  File,
  Search,
  Filter,
  Copy,
  Check,
  Eye,
  Star,
  Briefcase,
  Calculator,
  FileCheck,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "excel" | "word" | "pdf" | "checklist";
  downloads: number;
  rating: number;
  tags: string[];
  preview?: string;
}

const TEMPLATES: Template[] = [
  {
    id: "1",
    title: "SPT Tahunan OP Excel Template 2025",
    description: "Template Excel lengkap untuk perhitungan SPT Tahunan Orang Pribadi dengan form 1770, 1770S, dan 1770SS. Sudah include kalkulasi otomatis.",
    category: "SPT",
    type: "excel",
    downloads: 3420,
    rating: 4.8,
    tags: ["SPT Tahunan", "OP", "Excel", "2025"],
  },
  {
    id: "2",
    title: "Rekonsiliasi Fiskal PPh Badan",
    description: "Format rekonsiliasi fiskal lengkap dari laba komersial ke laba fiskal sesuai PSAK dan UU PPh. Include penjelasan setiap penyesuaian.",
    category: "PPh Badan",
    type: "excel",
    downloads: 2156,
    rating: 4.9,
    tags: ["Rekonsiliasi", "Fiskal", "PPh Badan", "PSAK"],
  },
  {
    id: "3",
    title: "Template e-Faktur Keluaran Format CSV",
    description: "Template CSV standar DJP untuk import faktur pajak keluaran ke e-Faktur. Sudah sesuai format PER-03/PJ/2022.",
    category: "PPN",
    type: "excel",
    downloads: 5689,
    rating: 4.7,
    tags: ["e-Faktur", "CSV", "Import", "PPN"],
  },
  {
    id: "4",
    title: "Dokumentasi Transfer Pricing Lokal",
    description: "Template lengkap untuk penyusunan Dokumen Lokal Transfer Pricing sesuai PER-22/PJ/2020. Include analisis comparable.",
    category: "Transfer Pricing",
    type: "word",
    downloads: 892,
    rating: 4.6,
    tags: ["TP", "Dokumentasi", "Local File", "PER-22"],
  },
  {
    id: "5",
    title: "Kalkulator PPh 21 TER 2025",
    description: "Kalkulator PPh 21 dengan metode TER (Tarif Efektif Rata-rata) sesuai PMK 168/2023. Auto-calculation untuk semua kategori.",
    category: "PPh 21",
    type: "excel",
    downloads: 4521,
    rating: 4.9,
    tags: ["PPh 21", "TER", "Kalkulator", "2025"],
  },
  {
    id: "6",
    title: "Checklist Pemeriksaan Pajak",
    description: "Checklist lengkap persiapan pemeriksaan pajak. Include daftar dokumen yang harus disiapkan dan tips menghadapi pemeriksa.",
    category: "Pemeriksaan",
    type: "checklist",
    downloads: 1834,
    rating: 4.8,
    tags: ["Pemeriksaan", "Checklist", "SP2", "Dokumen"],
  },
  {
    id: "7",
    title: "Template Surat Keberatan Pajak",
    description: "Format surat pengajuan keberatan pajak (SKPKB/STP) sesuai PMK 202/2015. Include petunjuk pengisian.",
    category: "KUP",
    type: "word",
    downloads: 1234,
    rating: 4.5,
    tags: ["Keberatan", "Surat", "SKPKB", "KUP"],
  },
  {
    id: "8",
    title: "Laporan Penyusutan Fiskal (Depresiasi)",
    description: "Template perhitungan penyusutan fiskal untuk berbagai kelompok harta sesuai UU PPh Pasal 11.",
    category: "PPh Badan",
    type: "excel",
    downloads: 2103,
    rating: 4.7,
    tags: ["Penyusutan", "Depresiasi", "Harta", "Fiskal"],
  },
];

const CATEGORIES = [
  { name: "Semua", icon: FileText },
  { name: "SPT", icon: FileCheck },
  { name: "PPh 21", icon: Calculator },
  { name: "PPh Badan", icon: Briefcase },
  { name: "PPN", icon: FileSpreadsheet },
  { name: "Transfer Pricing", icon: TrendingUp },
];

const TYPE_ICONS = {
  excel: <FileSpreadsheet className="h-5 w-5 text-green-600" />,
  word: <FileText className="h-5 w-5 text-blue-600" />,
  pdf: <File className="h-5 w-5 text-red-600" />,
  checklist: <FileCheck className="h-5 w-5 text-amber-600" />,
};

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTemplates = TEMPLATES.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "Semua" || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopy = (id: string) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Template Library</h1>
            <p className="text-sm text-muted-foreground">
              Kumpulan template siap pakai untuk kebutuhan perpajakan dan client deliverables
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-amber-600">{TEMPLATES.length}</p>
              <p className="text-xs text-muted-foreground">Template Tersedia</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-green-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-green-600">
                {TEMPLATES.reduce((acc, t) => acc + t.downloads, 0).toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">Total Download</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-blue-600">
                {(TEMPLATES.reduce((acc, t) => acc + t.rating, 0) / TEMPLATES.length).toFixed(1)}
              </p>
              <p className="text-xs text-muted-foreground">Rating Rata-rata</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-purple-600">100%</p>
              <p className="text-xs text-muted-foreground">Gratis</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari template..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.name}
              variant={selectedCategory === cat.name ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat.name)}
            >
              <cat.icon className="h-4 w-4 mr-1" />
              {cat.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTemplates.map((template) => (
          <Card 
            key={template.id}
            className="group hover:shadow-lg transition-all cursor-pointer"
            onClick={() => setPreviewTemplate(template)}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted rounded-lg shrink-0 group-hover:bg-primary/10 transition-colors">
                  {TYPE_ICONS[template.type]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-[10px]">
                      {template.category}
                    </Badge>
                    <div className="flex items-center text-amber-500">
                      <Star className="h-3 w-3 fill-current" />
                      <span className="text-xs ml-0.5">{template.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm mb-1 line-clamp-1 group-hover:text-primary">
                    {template.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {template.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {template.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] px-2 py-0.5 bg-muted rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {template.downloads.toLocaleString()}
                    </span>
                    <div className="flex gap-1">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(template.id);
                        }}
                      >
                        {copiedId === template.id ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Preview Dialog */}
      <Dialog open={!!previewTemplate} onOpenChange={() => setPreviewTemplate(null)}>
        <DialogContent className="max-w-2xl">
          {previewTemplate && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    {TYPE_ICONS[previewTemplate.type]}
                  </div>
                  <div>
                    <DialogTitle className="text-lg">{previewTemplate.title}</DialogTitle>
                    <DialogDescription>
                      <Badge variant="secondary" className="text-[10px] mr-2">
                        {previewTemplate.category}
                      </Badge>
                      <span className="text-amber-500">★ {previewTemplate.rating}</span>
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {previewTemplate.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {previewTemplate.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Fitur Template:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      Format standar DJP terbaru
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      Formula kalkulasi otomatis (Excel)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      Petunjuk pengisian lengkap
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      Contoh pengisian included
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    <Download className="h-4 w-4 inline mr-1" />
                    {previewTemplate.downloads.toLocaleString()} downloads
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
