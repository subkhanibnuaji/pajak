import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, 
  CalendarClock, 
  Download, 
  ExternalLink, 
  FileText, 
  LibraryBig, 
  Upload, 
  Plus,
  Search,
  Filter
} from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MATERIAL_LIBRARY, formatBytesToMB } from "@/data/material-library";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Materi & Riset",
  description: "Library dokumen materi dan riset perpajakan yang bisa dibuka online dan diunduh.",
};

const TOTAL_CONTENT_UNITS = MATERIAL_LIBRARY.reduce((total, item) => total + item.pages, 0);
const TOTAL_SIZE_MB = MATERIAL_LIBRARY
  .reduce((total, item) => total + item.fileSizeBytes, 0) /
  (1024 * 1024);

// Get unique categories
const categories = Array.from(new Set(MATERIAL_LIBRARY.map(item => item.category)));

export default function MateriPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-6 md:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 -bottom-16 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            <div className="rounded-xl bg-primary/15 p-3 shrink-0">
              <LibraryBig className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                Materi & Riset
              </h1>
              <p className="mt-2 text-muted-foreground max-w-2xl">
                Kumpulan dokumen yang dikirim user, disusun dalam format library agar mudah
                dibuka, dipelajari, dan diunduh ulang kapan pun dibutuhkan.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/materi/upload">
                  <Button size="sm" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload Materi
                  </Button>
                </Link>
                <a 
                  href="#library"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2")}
                >
                  <BookOpen className="h-4 w-4" />
                  Jelajahi Library
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid gap-3 sm:grid-cols-3">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20">
            <CardContent className="p-4">
              <p className="text-3xl font-bold text-blue-600">{MATERIAL_LIBRARY.length}</p>
              <p className="text-xs text-muted-foreground">Total Dokumen</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20">
            <CardContent className="p-4">
              <p className="text-3xl font-bold text-green-600">{TOTAL_CONTENT_UNITS}</p>
              <p className="text-xs text-muted-foreground">Total Unit Konten</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20">
            <CardContent className="p-4">
              <p className="text-3xl font-bold text-purple-600">{TOTAL_SIZE_MB.toFixed(1)} MB</p>
              <p className="text-xs text-muted-foreground">Total Ukuran File</p>
            </CardContent>
          </Card>
        </section>

        {/* Category Filter */}
        <section className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Kategori</h2>
              <p className="text-sm text-muted-foreground">Filter materi berdasarkan kategori</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" className="cursor-pointer">Semua</Badge>
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-muted">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Library Grid */}
        <section id="library" className="mt-8">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Library Dokumen</h2>
              <p className="text-sm text-muted-foreground">
                Dokumen terbaru dan terpopuler dari komunitas
              </p>
            </div>
            <Badge variant="outline" className="text-xs shrink-0">
              Diperbarui otomatis
            </Badge>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {MATERIAL_LIBRARY.map((doc) => (
              <Card
                key={doc.id}
                className="group flex h-full flex-col overflow-hidden border-border/70 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden border-b bg-muted/20">
                  <Image
                    src={doc.coverPath}
                    alt={`Cover ${doc.title}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/95">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 backdrop-blur-sm">
                      <FileText className="h-3 w-3" />
                      {doc.pages} {doc.pagesLabel ?? "halaman"}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 backdrop-blur-sm">
                      <BookOpen className="h-3 w-3" />
                      {doc.fileType}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="text-[10px]">
                      {doc.category}
                    </Badge>
                    <Badge variant="outline" className="text-[10px]">
                      {doc.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-base leading-tight line-clamp-2">{doc.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed line-clamp-2">
                    {doc.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="mb-2 text-xs text-muted-foreground">
                    Sumber: <span className="font-medium text-foreground">{doc.publisher}</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div className="rounded-md border bg-muted/20 px-2.5 py-2">
                      <p className="font-medium text-foreground">{formatBytesToMB(doc.fileSizeBytes)}</p>
                      <p>Ukuran</p>
                    </div>
                    <div className="rounded-md border bg-muted/20 px-2.5 py-2">
                      <p className="font-medium text-foreground">{doc.updatedAt}</p>
                      <p className="inline-flex items-center gap-1">
                        <CalendarClock className="h-3 w-3" />
                        Update
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {doc.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border bg-background px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {doc.tags.length > 3 && (
                      <span className="rounded-full border bg-background px-2 py-0.5 text-[10px] text-muted-foreground">
                        +{doc.tags.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="mt-auto grid grid-cols-2 gap-2">
                  {doc.isInternal ? (
                    <Link
                      href={doc.filePath}
                      className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Buka
                    </Link>
                  ) : (
                    <a
                      href={doc.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Buka
                    </a>
                  )}
                  {(doc.downloadPath || !doc.isInternal) ? (
                    <a
                      href={doc.downloadPath ?? doc.filePath}
                      download
                      className={cn(buttonVariants({ size: "sm" }), "w-full")}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      {doc.fileType === "GUIDE" ? "Unduh Kit" : "Download"}
                    </a>
                  ) : (
                    <Link
                      href={doc.filePath}
                      className={cn(buttonVariants({ size: "sm" }), "w-full")}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Detail
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Upload CTA */}
        <section className="mt-12">
          <Card className="bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/20 border-violet-200">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-violet-100 dark:bg-violet-900/50 rounded-xl shrink-0">
                    <Upload className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Punya Materi Pajak?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Bagikan dokumen, riset, atau panduan pajak Anda ke library PAJAKKU. 
                      Bantu komunitas dengan berbagi pengetahuan.
                    </p>
                  </div>
                </div>
                <Link href="/materi/upload">
                  <Button className="gap-2 shrink-0">
                    <Plus className="h-4 w-4" />
                    Upload Materi
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
}
