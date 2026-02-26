"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Scale, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { REGULASI_INDEX } from "@/data/regulasi-index";
import { REGULASI_COLORS, getRegulasiType } from "@/lib/constants";
import { Footer } from "@/components/layout/footer";

const TIPE_OPTIONS = ["UU", "PP", "PMK", "PER", "SE"];

export default function RegulasiPage() {
  const [search, setSearch] = useState("");
  const [filterTipe, setFilterTipe] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");

  const filtered = useMemo(() => {
    let result = REGULASI_INDEX;
    if (filterTipe)
      result = result.filter((r) => r.tipe === filterTipe);
    if (filterStatus)
      result = result.filter((r) => r.status === filterStatus);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.nomor.toLowerCase().includes(q) ||
          r.judul.toLowerCase().includes(q) ||
          r.topik.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [search, filterTipe, filterStatus]);

  const statusOptions = useMemo(() => {
    const set = new Set(REGULASI_INDEX.map((r) => r.status));
    return Array.from(set);
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
            <Scale className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Database Regulasi</h1>
            <p className="mt-2 text-muted-foreground">
              Index peraturan perpajakan Indonesia yang sering dirujuk. Cari
              berdasarkan nomor, judul, atau topik. Filter berdasarkan jenis
              peraturan atau status keberlakuan.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="rounded-lg border p-3 text-center">
            <p className="text-2xl font-bold text-primary">
              {REGULASI_INDEX.length}
            </p>
            <p className="text-xs text-muted-foreground">Total Regulasi</p>
          </div>
          <div className="rounded-lg border p-3 text-center">
            <p className="text-2xl font-bold text-primary">
              {REGULASI_INDEX.filter((r) => r.status === "berlaku").length}
            </p>
            <p className="text-xs text-muted-foreground">Masih Berlaku</p>
          </div>
          <div className="rounded-lg border p-3 text-center">
            <p className="text-2xl font-bold text-primary">
              {TIPE_OPTIONS.length}
            </p>
            <p className="text-xs text-muted-foreground">Jenis Peraturan</p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex gap-3 mt-6 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari regulasi (nomor, judul, topik)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-3 flex-wrap items-center">
          <div className="flex gap-1 items-center">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground mr-1">Jenis:</span>
            {TIPE_OPTIONS.map((tipe) => (
              <button
                key={tipe}
                onClick={() =>
                  setFilterTipe(filterTipe === tipe ? "" : tipe)
                }
                className={`px-2 py-1 rounded-md text-xs font-medium border transition-colors ${
                  filterTipe === tipe
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-input hover:bg-accent"
                }`}
              >
                {tipe}
              </button>
            ))}
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-xs text-muted-foreground mr-1">Status:</span>
            {statusOptions.map((status) => (
              <button
                key={status}
                onClick={() =>
                  setFilterStatus(filterStatus === status ? "" : status)
                }
                className={`px-2 py-1 rounded-md text-xs font-medium border transition-colors capitalize ${
                  filterStatus === status
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-input hover:bg-accent"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-2">
          {filtered.length} regulasi ditemukan
          {(filterTipe || filterStatus || search) && (
            <button
              onClick={() => {
                setSearch("");
                setFilterTipe("");
                setFilterStatus("");
              }}
              className="ml-2 text-primary hover:underline"
            >
              Reset filter
            </button>
          )}
        </p>

        {/* Results */}
        <div className="mt-4 space-y-3">
          {filtered.map((reg, i) => (
            <div key={i} className="rounded-lg border p-4 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${
                        REGULASI_COLORS[getRegulasiType(reg.nomor)]
                      }`}
                    >
                      {reg.nomor}
                    </span>
                    <Badge
                      variant={
                        reg.status === "berlaku" ? "default" : "secondary"
                      }
                      className="text-[10px]"
                    >
                      {reg.status}
                    </Badge>
                  </div>
                  <p className="text-sm mt-1.5 leading-relaxed">
                    {reg.judul}
                  </p>
                  <div className="flex gap-1 mt-1.5 flex-wrap">
                    {reg.topik.map((t, j) => (
                      <span
                        key={j}
                        className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {reg.catatan && (
                    <p className="text-[10px] text-muted-foreground mt-1.5 italic">
                      {reg.catatan}
                    </p>
                  )}
                </div>
                <span className="text-xs text-muted-foreground font-mono shrink-0">
                  {reg.tahun}
                </span>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Tidak ada regulasi yang cocok dengan pencarian Anda.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Coba kata kunci yang berbeda atau hapus filter.
              </p>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-4 mt-6">
          <p className="text-xs text-muted-foreground text-center">
            Database ini bersifat referensi edukatif. Untuk teks resmi peraturan
            perundang-undangan, kunjungi{" "}
            <a
              href="https://jdih.kemenkeu.go.id"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground inline-flex items-center gap-0.5"
            >
              JDIH Kemenkeu <ExternalLink className="h-3 w-3" />
            </a>{" "}
            atau{" "}
            <a
              href="https://pajak.go.id"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground inline-flex items-center gap-0.5"
            >
              pajak.go.id <ExternalLink className="h-3 w-3" />
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
