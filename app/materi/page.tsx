"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  BookOpen,
  CalendarClock,
  Download,
  ExternalLink,
  FileText,
  Filter,
  FolderOpen,
  LibraryBig,
  Search,
  Sparkles,
  Upload,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Input } from "@/components/ui/input";
import { MATERIAL_LIBRARY, formatBytesToMB, type MaterialDocument } from "@/data/material-library";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 8;

const SORT_OPTIONS = [
  { value: "latest", label: "Terbaru" },
  { value: "pages", label: "Konten" },
  { value: "size", label: "Ukuran" },
  { value: "title", label: "A-Z" },
] as const;

const TOTAL_CONTENT_UNITS = MATERIAL_LIBRARY.reduce((total, item) => total + item.pages, 0);
const TOTAL_SIZE_MB =
  MATERIAL_LIBRARY.reduce((total, item) => total + item.fileSizeBytes, 0) / (1024 * 1024);
const CATEGORIES = Array.from(new Set(MATERIAL_LIBRARY.map((item) => item.category)));

function parseDateValue(value: string): number {
  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}

function getTone(category: string) {
  if (category.toLowerCase().includes("riset")) {
    return {
      cover:
        "bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.38),transparent_45%),linear-gradient(180deg,#701a75_0%,#0f172a_70%)]",
      badge: "border-fuchsia-400/35 bg-fuchsia-400/12 text-fuchsia-100",
      tag: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-100/90",
      glow: "shadow-[0_24px_80px_-42px_rgba(217,70,239,0.55)]",
    };
  }
  if (category.toLowerCase().includes("panduan")) {
    return {
      cover:
        "bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.32),transparent_45%),linear-gradient(180deg,#78350f_0%,#111827_70%)]",
      badge: "border-amber-300/35 bg-amber-300/12 text-amber-50",
      tag: "border-amber-300/20 bg-amber-300/10 text-amber-50/90",
      glow: "shadow-[0_24px_80px_-42px_rgba(251,191,36,0.45)]",
    };
  }
  if (category.toLowerCase().includes("tool")) {
    return {
      cover:
        "bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.32),transparent_45%),linear-gradient(180deg,#134e4a_0%,#0f172a_70%)]",
      badge: "border-teal-300/35 bg-teal-300/12 text-teal-50",
      tag: "border-teal-300/20 bg-teal-300/10 text-teal-50/90",
      glow: "shadow-[0_24px_80px_-42px_rgba(45,212,191,0.45)]",
    };
  }
  if (category.toLowerCase().includes("coretax")) {
    return {
      cover:
        "bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.38),transparent_45%),linear-gradient(180deg,#312e81_0%,#0f172a_70%)]",
      badge: "border-indigo-300/35 bg-indigo-300/12 text-indigo-50",
      tag: "border-indigo-300/20 bg-indigo-300/10 text-indigo-50/90",
      glow: "shadow-[0_24px_80px_-42px_rgba(99,102,241,0.48)]",
    };
  }

  return {
    cover:
      "bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_45%),linear-gradient(180deg,#0f3d5e_0%,#0f172a_72%)]",
    badge: "border-sky-300/35 bg-sky-300/12 text-sky-50",
    tag: "border-sky-300/20 bg-sky-300/10 text-sky-50/90",
    glow: "shadow-[0_24px_80px_-42px_rgba(56,189,248,0.45)]",
  };
}

function matchesQuery(doc: MaterialDocument, query: string) {
  const haystack = [
    doc.title,
    doc.description,
    doc.category,
    doc.publisher,
    doc.fileType,
    doc.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function sortDocuments(items: MaterialDocument[], sort: string) {
  return [...items].sort((left, right) => {
    if (sort === "title") {
      return left.title.localeCompare(right.title, "id");
    }

    if (sort === "pages") {
      return right.pages - left.pages || parseDateValue(right.updatedAt) - parseDateValue(left.updatedAt);
    }

    if (sort === "size") {
      return (
        right.fileSizeBytes - left.fileSizeBytes ||
        parseDateValue(right.updatedAt) - parseDateValue(left.updatedAt)
      );
    }

    return parseDateValue(right.updatedAt) - parseDateValue(left.updatedAt);
  });
}

function buildMateriHref(
  current: { q: string; category: string; sort: string; page: number },
  updates: Partial<{ q: string; category: string; sort: string; page: number }>
) {
  const params = new URLSearchParams();
  const next = { ...current, ...updates };

  if (next.q) params.set("q", next.q);
  if (next.category !== "all") params.set("category", next.category);
  if (next.sort !== "latest") params.set("sort", next.sort);
  if (next.page > 1) params.set("page", String(next.page));

  const query = params.toString();
  return query ? `/materi?${query}` : "/materi";
}

function renderAccessButton(doc: MaterialDocument) {
  const className =
    "inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-800";

  if (doc.isInternal) {
    return (
      <Link href={doc.filePath} className={className}>
        <ExternalLink className="h-4 w-4" />
        Buka
      </Link>
    );
  }

  return (
    <a href={doc.filePath} target="_blank" rel="noopener noreferrer" className={className}>
      <ExternalLink className="h-4 w-4" />
      Buka
    </a>
  );
}

function renderDownloadButton(doc: MaterialDocument) {
  const href = doc.downloadPath ?? doc.filePath;
  const label = doc.fileType === "GUIDE" ? "Unduh Kit" : "Download";

  return (
    <a
      href={href}
      download
      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-sky-500 px-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
    >
      <Download className="h-4 w-4" />
      {label}
    </a>
  );
}

export default function MateriPage() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q")?.trim() ?? "";
  const requestedCategory = searchParams.get("category") ?? "all";
  const selectedCategory = CATEGORIES.includes(requestedCategory) ? requestedCategory : "all";
  const requestedSort = searchParams.get("sort") ?? "latest";
  const sort = SORT_OPTIONS.some((option) => option.value === requestedSort) ? requestedSort : "latest";

  const currentState = {
    q: query,
    category: selectedCategory,
    sort,
    page: 1,
  };

  let filtered = MATERIAL_LIBRARY.filter((doc) =>
    selectedCategory === "all" ? true : doc.category === selectedCategory
  );

  if (query) {
    filtered = filtered.filter((doc) => matchesQuery(doc, query));
  }

  const sorted = sortDocuments(filtered, sort);
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const requestedPage = Number.parseInt(searchParams.get("page") ?? "1", 10);
  const currentPage = Number.isNaN(requestedPage)
    ? 1
    : Math.min(Math.max(requestedPage, 1), totalPages);
  const visibleDocs = sorted.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const showingFrom = sorted.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(currentPage * PAGE_SIZE, sorted.length);
  const latestDocument = sortDocuments(MATERIAL_LIBRARY, "latest")[0] ?? MATERIAL_LIBRARY[0];
  const spotlight = sortDocuments(MATERIAL_LIBRARY, "pages")[0] ?? MATERIAL_LIBRARY[0];
  const hasActiveFilters = Boolean(query) || selectedCategory !== "all" || sort !== "latest";

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1).filter((page) => {
    if (totalPages <= 5) return true;
    return Math.abs(page - currentPage) <= 1 || page === 1 || page === totalPages;
  });

  return (
    <div className="bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_28%),linear-gradient(180deg,#020617_0%,#03111f_28%,transparent_70%)]">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <section className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_right,rgba(244,114,182,0.12),transparent_28%),linear-gradient(180deg,#07111f_0%,#020617_100%)] p-6 text-slate-100 shadow-[0_40px_120px_-60px_rgba(15,23,42,1)] md:p-8">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-fuchsia-400/10 blur-3xl" />

          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium tracking-[0.18em] text-sky-100 uppercase">
                <LibraryBig className="h-3.5 w-3.5" />
                Library Materi User
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Library buku, materi, dan toolkit yang dikirim user.
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                Layout library saya rapikan mengikuti pola referensi: ada spotlight, pencarian,
                filter kategori, metadata ringkas, dan kartu dokumen yang terasa seperti katalog
                curated, bukan daftar file biasa.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href="/materi/upload"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
                >
                  <Upload className="h-4 w-4" />
                  Upload Materi
                </Link>
                <a
                  href="#library-grid"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/50 px-4 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                >
                  <BookOpen className="h-4 w-4" />
                  Jelajahi Library
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Dokumen</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{MATERIAL_LIBRARY.length}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Unit Konten</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{TOTAL_CONTENT_UNITS}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Ukuran</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{TOTAL_SIZE_MB.toFixed(1)} MB</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Kategori</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{CATEGORIES.length}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-5 backdrop-blur">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-100">
                <Sparkles className="h-3.5 w-3.5" />
                Update terbaru
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">{latestDocument.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{latestDocument.description}</p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Publisher</p>
                  <p className="mt-1 font-medium text-slate-100">{latestDocument.publisher}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Tanggal update</p>
                  <p className="mt-1 font-medium text-slate-100">{latestDocument.updatedAt}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Aksi</p>
                  <Link
                    href="/materi/upload"
                    className="mt-1 inline-flex items-center gap-2 font-medium text-sky-300 transition hover:text-sky-200"
                  >
                    Tambah materi baru
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-[28px] border border-slate-800 bg-slate-950/75 p-4 text-slate-100 shadow-[0_20px_80px_-50px_rgba(15,23,42,1)] md:p-5">
          <div className="grid gap-4 lg:grid-cols-[180px_minmax(0,1fr)_240px] lg:items-center">
            <div className="relative hidden h-28 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 md:block">
              <Image
                src={spotlight.coverPath}
                alt={`Cover ${spotlight.title}`}
                fill
                className="object-cover object-top"
                sizes="180px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
                <FolderOpen className="h-3.5 w-3.5" />
                Spotlight Material
              </div>
              <h2 className="mt-3 text-xl font-semibold text-white">{spotlight.title}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{spotlight.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1">
                  {spotlight.category}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1">
                  {spotlight.pages} {spotlight.pagesLabel ?? "halaman"}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1">
                  {formatBytesToMB(spotlight.fileSizeBytes)}
                </span>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {renderAccessButton(spotlight)}
              {renderDownloadButton(spotlight)}
            </div>
          </div>
        </section>

        <section id="library-grid" className="mt-5 rounded-[28px] border border-slate-800 bg-slate-950/80 p-4 text-slate-100 shadow-[0_24px_90px_-60px_rgba(15,23,42,1)] md:p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Library Dokumen</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Menampilkan {showingFrom}-{showingTo} dari {sorted.length} materi
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                {SORT_OPTIONS.map((option) => {
                  const isActive = option.value === sort;
                  return (
                    <Link
                      key={option.value}
                      href={buildMateriHref(
                        { ...currentState, page: currentPage },
                        { sort: option.value, page: 1 }
                      )}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-medium transition",
                        isActive
                          ? "border-sky-400/35 bg-sky-400/12 text-sky-100"
                          : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-slate-100"
                      )}
                    >
                      {option.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto]">
              <form action="/materi" className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                  key={query}
                  name="q"
                  defaultValue={query}
                  placeholder="Cari materi berdasarkan judul, keyword, atau shorthand..."
                  className="h-11 rounded-2xl border-slate-800 bg-slate-900 pl-10 text-slate-100 placeholder:text-slate-500"
                />
                {selectedCategory !== "all" && <input type="hidden" name="category" value={selectedCategory} />}
                {sort !== "latest" && <input type="hidden" name="sort" value={sort} />}
              </form>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-4 text-sm text-slate-400">
                <Filter className="h-4 w-4" />
                Filter aktif: {selectedCategory === "all" ? "Semua kategori" : selectedCategory}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href={buildMateriHref({ ...currentState, page: currentPage }, { category: "all", page: 1 })}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                  selectedCategory === "all"
                    ? "border-sky-400/35 bg-sky-400/12 text-sky-100"
                    : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-slate-100"
                )}
              >
                Semua
              </Link>
              {CATEGORIES.map((category) => {
                const isActive = category === selectedCategory;
                return (
                  <Link
                    key={category}
                    href={buildMateriHref(
                      { ...currentState, page: currentPage },
                      { category, page: 1 }
                    )}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                      isActive
                        ? "border-sky-400/35 bg-sky-400/12 text-sky-100"
                        : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-slate-100"
                    )}
                  >
                    {category}
                  </Link>
                );
              })}
              {hasActiveFilters && (
                <Link
                  href="/materi"
                  className="rounded-full border border-slate-700 bg-transparent px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:border-slate-500 hover:text-slate-100"
                >
                  Reset filter
                </Link>
              )}
            </div>
          </div>

          {visibleDocs.length === 0 ? (
            <div className="mt-5 rounded-[24px] border border-dashed border-slate-700 bg-slate-900/70 px-6 py-16 text-center">
              <h3 className="text-lg font-semibold text-white">Materi tidak ditemukan</h3>
              <p className="mt-2 text-sm text-slate-400">
                Ubah kata kunci pencarian atau pilih kategori lain untuk melihat dokumen yang tersedia.
              </p>
              <Link
                href="/materi"
                className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-sky-500 px-4 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
              >
                Lihat semua materi
              </Link>
            </div>
          ) : (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {visibleDocs.map((doc) => {
                const tone = getTone(doc.category);

                return (
                  <article
                    key={doc.id}
                    className={cn(
                      "group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-800 bg-slate-950 text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-slate-600",
                      tone.glow
                    )}
                  >
                    <div className={cn("relative h-48 overflow-hidden border-b border-slate-800", tone.cover)}>
                      <Image
                        src={doc.coverPath}
                        alt={`Cover ${doc.title}`}
                        fill
                        className="object-cover object-top opacity-85 transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        <span className={cn("rounded-full border px-2.5 py-1 text-[11px] font-medium", tone.badge)}>
                          {doc.fileType}
                        </span>
                        <span className="rounded-full border border-slate-600 bg-slate-950/70 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                          {doc.year}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-slate-200">
                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-600 bg-slate-950/70 px-2.5 py-1">
                          <FileText className="h-3 w-3" />
                          {doc.pages} {doc.pagesLabel ?? "halaman"}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-600 bg-slate-950/70 px-2.5 py-1">
                          <CalendarClock className="h-3 w-3" />
                          {doc.updatedAt}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-center justify-between gap-3 text-[11px] text-slate-500">
                        <span className="truncate">{doc.publisher}</span>
                        <span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-0.5 text-slate-400">
                          {doc.category}
                        </span>
                      </div>

                      <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-tight text-white">
                        {doc.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">
                        {doc.description}
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Ukuran</p>
                          <p className="mt-1 font-medium text-slate-100">{formatBytesToMB(doc.fileSizeBytes)}</p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Akses</p>
                          <p className="mt-1 font-medium text-slate-100">
                            {doc.isInternal ? "Internal page" : "External file"}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {doc.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className={cn(
                              "rounded-full border px-2.5 py-1 text-[11px] font-medium",
                              tone.tag
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                        {doc.tags.length > 3 && (
                          <span className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                            +{doc.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
                        {renderAccessButton(doc)}
                        {renderDownloadButton(doc)}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              <Link
                href={buildMateriHref({ ...currentState, page: currentPage }, { page: Math.max(1, currentPage - 1) })}
                aria-disabled={currentPage === 1}
                className={cn(
                  "inline-flex h-9 min-w-9 items-center justify-center rounded-lg border px-3 text-sm font-medium transition",
                  currentPage === 1
                    ? "pointer-events-none border-slate-800 bg-slate-900 text-slate-600"
                    : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-slate-100"
                )}
              >
                Prev
              </Link>

              {pageNumbers.map((page, index) => {
                const previous = pageNumbers[index - 1];
                const shouldShowDots = previous && page - previous > 1;

                return (
                  <div key={page} className="flex items-center gap-2">
                    {shouldShowDots && <span className="text-sm text-slate-500">...</span>}
                    <Link
                      href={buildMateriHref({ ...currentState, page: currentPage }, { page })}
                      className={cn(
                        "inline-flex h-9 min-w-9 items-center justify-center rounded-lg border px-3 text-sm font-medium transition",
                        page === currentPage
                          ? "border-sky-400/35 bg-sky-400/12 text-sky-100"
                          : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-slate-100"
                      )}
                    >
                      {page}
                    </Link>
                  </div>
                );
              })}

              <Link
                href={buildMateriHref(
                  { ...currentState, page: currentPage },
                  { page: Math.min(totalPages, currentPage + 1) }
                )}
                aria-disabled={currentPage === totalPages}
                className={cn(
                  "inline-flex h-9 min-w-9 items-center justify-center rounded-lg border px-3 text-sm font-medium transition",
                  currentPage === totalPages
                    ? "pointer-events-none border-slate-800 bg-slate-900 text-slate-600"
                    : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-slate-100"
                )}
              >
                Next
              </Link>
            </div>
          )}
        </section>

        <section className="mt-5 rounded-[28px] border border-slate-800 bg-[linear-gradient(135deg,rgba(14,116,144,0.18),rgba(15,23,42,0.92))] p-6 text-slate-100 md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300">
                <Upload className="h-3.5 w-3.5" />
                Kontribusi user
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">Punya buku atau materi baru?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
                Upload tetap jadi entry point utama, lalu dokumen masuk ke library dengan tampilan yang
                lebih terkurasi. Cocok untuk buku, riset, workbook, PDF guidance, atau materi internal.
              </p>
            </div>

            <Link
              href="/materi/upload"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              <Upload className="h-4 w-4" />
              Upload Materi Baru
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
