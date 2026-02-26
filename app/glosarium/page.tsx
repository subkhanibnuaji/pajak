"use client";

import { useState, useMemo } from "react";
import { Search, BookA } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { GLOSSARY } from "@/data/glossary";
import { Footer } from "@/components/layout/footer";

const KATEGORI_COLORS: Record<string, string> = {
  umum: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
  pph: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  ppn: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  kup: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  pbb: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  internasional:
    "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  digital:
    "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
};

const ALL_KATEGORI = Object.keys(KATEGORI_COLORS);

export default function GlosariumPage() {
  const [search, setSearch] = useState("");
  const [filterKategori, setFilterKategori] = useState<string>("");

  const filtered = useMemo(() => {
    let result = GLOSSARY;
    if (filterKategori) {
      result = result.filter((g) => g.kategori === filterKategori);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (g) =>
          g.istilah.toLowerCase().includes(q) ||
          g.definisi.toLowerCase().includes(q)
      );
    }
    return result;
  }, [search, filterKategori]);

  // Group by first letter for alphabetical sections
  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    filtered.forEach((entry) => {
      const letter = entry.istilah[0].toUpperCase();
      const existing = map.get(letter) || [];
      existing.push(entry);
      map.set(letter, existing);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
            <BookA className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Glosarium Perpajakan</h1>
            <p className="mt-2 text-muted-foreground">
              Daftar istilah perpajakan Indonesia yang sering digunakan dalam
              regulasi, praktik, dan administrasi pajak. Cari istilah yang ingin
              dipelajari.
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mt-6 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari istilah perpajakan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-1 items-center flex-wrap">
            <button
              onClick={() => setFilterKategori("")}
              className={`px-2 py-1 rounded-md text-xs font-medium border transition-colors ${
                filterKategori === ""
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-input hover:bg-accent"
              }`}
            >
              Semua
            </button>
            {ALL_KATEGORI.map((kat) => (
              <button
                key={kat}
                onClick={() =>
                  setFilterKategori(filterKategori === kat ? "" : kat)
                }
                className={`px-2 py-1 rounded-md text-xs font-medium border transition-colors capitalize ${
                  filterKategori === kat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-input hover:bg-accent"
                }`}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-2">
          Menampilkan {filtered.length} dari {GLOSSARY.length} istilah
        </p>

        {/* Grouped Results */}
        <div className="mt-4 space-y-6">
          {grouped.map(([letter, entries]) => (
            <div key={letter}>
              <div className="sticky top-0 bg-background/95 backdrop-blur-sm py-1 mb-2 z-10">
                <h2 className="text-lg font-bold text-primary">{letter}</h2>
              </div>
              <div className="space-y-3">
                {entries.map((entry, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-sm">{entry.istilah}</h3>
                      <Badge
                        variant="outline"
                        className={`text-[10px] shrink-0 capitalize ${
                          KATEGORI_COLORS[entry.kategori] || ""
                        }`}
                      >
                        {entry.kategori}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {entry.definisi}
                    </p>
                    {entry.dasarHukum && (
                      <p className="text-[10px] text-muted-foreground mt-1.5 italic">
                        Dasar Hukum: {entry.dasarHukum}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Tidak ada istilah yang cocok dengan pencarian Anda.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Coba kata kunci yang berbeda atau hapus filter kategori.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
