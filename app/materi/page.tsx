import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, CalendarClock, Download, ExternalLink, FileText, LibraryBig } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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

export default function MateriPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-6 md:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 -bottom-16 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="relative flex items-start gap-3">
            <div className="rounded-xl bg-primary/15 p-2.5">
              <LibraryBig className="h-6 w-6 text-primary" />
            </div>
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Materi & Riset
              </h1>
              <p className="mt-2 text-muted-foreground">
                Kumpulan dokumen yang dikirim user, disusun dalam format library agar mudah
                dibuka, dipelajari, dan diunduh ulang kapan pun dibutuhkan.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="text-2xl font-bold text-primary">{MATERIAL_LIBRARY.length}</p>
            <p className="text-xs text-muted-foreground">Dokumen</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-2xl font-bold text-primary">{TOTAL_CONTENT_UNITS}</p>
            <p className="text-xs text-muted-foreground">Total Unit Konten</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-2xl font-bold text-primary">{TOTAL_SIZE_MB.toFixed(1)} MB</p>
            <p className="text-xs text-muted-foreground">Total Ukuran File</p>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold">Library Dokumen</h2>
            <Badge variant="outline" className="text-xs">
              Diperbarui otomatis saat ada materi baru
            </Badge>
          </div>

          <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {MATERIAL_LIBRARY.map((doc) => (
              <Card
                key={doc.id}
                className="group flex h-full flex-col overflow-hidden border-border/70 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden border-b bg-muted/20">
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
                  <CardTitle className="text-lg leading-tight">{doc.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
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
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border bg-background px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="mt-auto grid grid-cols-2 gap-2">
                  {doc.isInternal ? (
                    <Link
                      href={doc.filePath}
                      className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Buka
                    </Link>
                  ) : (
                    <a
                      href={doc.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Buka
                    </a>
                  )}
                  {(doc.downloadPath || !doc.isInternal) ? (
                    <a
                      href={doc.downloadPath ?? doc.filePath}
                      download
                      className={cn(buttonVariants({ size: "sm" }), "w-full")}
                    >
                      <Download className="h-4 w-4" />
                      {doc.fileType === "GUIDE" ? "Unduh Kit" : "Download"}
                    </a>
                  ) : (
                    <Link
                      href={doc.filePath}
                      className={cn(buttonVariants({ size: "sm" }), "w-full")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Detail
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
