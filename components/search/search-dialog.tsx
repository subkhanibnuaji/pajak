"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  BookOpen,
  Calculator,
  FileText,
  Scale,
  Building2,
  Monitor,
  Search,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchItem {
  title: string;
  href: string;
  category: string;
  icon: React.ElementType;
}

const SEARCH_ITEMS: SearchItem[] = [
  { title: "PPh Pasal 21 — Pemotongan Pajak Karyawan", href: "/pph/pasal-21", category: "PPh", icon: BookOpen },
  { title: "Tarif Efektif Rata-Rata (TER)", href: "/pph/pasal-21/ter", category: "PPh", icon: BookOpen },
  { title: "PPh Pasal 22 — Pemungutan Impor", href: "/pph/pasal-22", category: "PPh", icon: BookOpen },
  { title: "PPh Pasal 23 — Pemotongan Jasa", href: "/pph/pasal-23", category: "PPh", icon: BookOpen },
  { title: "PPh Pasal 25 — Angsuran Bulanan", href: "/pph/pasal-25", category: "PPh", icon: BookOpen },
  { title: "PPh Pasal 26 — WP Luar Negeri", href: "/pph/pasal-26", category: "PPh", icon: BookOpen },
  { title: "PPh Pasal 4(2) — Final", href: "/pph/pasal-4-ayat-2", category: "PPh", icon: BookOpen },
  { title: "PPh Badan", href: "/pph/badan", category: "PPh", icon: BookOpen },
  { title: "PPN — Mekanisme", href: "/ppn/mekanisme", category: "PPN", icon: FileText },
  { title: "Faktur Pajak", href: "/ppn/faktur-pajak", category: "PPN", icon: FileText },
  { title: "NPWP & PKP", href: "/kup/npwp", category: "KUP", icon: Scale },
  { title: "SPT", href: "/kup/spt", category: "KUP", icon: Scale },
  { title: "Sanksi Perpajakan", href: "/kup/sanksi", category: "KUP", icon: Scale },
  { title: "PBB & BPHTB", href: "/pbb", category: "PBB", icon: Building2 },
  { title: "Kalkulator PPh 21", href: "/kalkulator/pph-21", category: "Kalkulator", icon: Calculator },
  { title: "Kalkulator PPh Badan", href: "/kalkulator/pph-badan", category: "Kalkulator", icon: Calculator },
  { title: "Kalkulator PPN", href: "/kalkulator/ppn", category: "Kalkulator", icon: Calculator },
  { title: "Coretax DJP — Sistem Baru Pajak 2025", href: "/coretax", category: "Coretax", icon: Monitor },
  { title: "Tutorial Login & Aktivasi Coretax", href: "/coretax/tutorial", category: "Coretax", icon: Monitor },
  { title: "e-Faktur Web Coretax", href: "/coretax/e-faktur", category: "Coretax", icon: Monitor },
  { title: "Pelaporan SPT di Coretax", href: "/coretax/spt", category: "Coretax", icon: Monitor },
  { title: "Pembayaran & Billing Coretax", href: "/coretax/pembayaran", category: "Coretax", icon: Monitor },
  { title: "Troubleshooting Coretax", href: "/coretax/troubleshooting", category: "Coretax", icon: Monitor },
  { title: "Glosarium Istilah Pajak", href: "/glosarium", category: "Referensi", icon: BookOpen },
  { title: "Kalender Pajak", href: "/kalender", category: "Referensi", icon: BookOpen },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSelect = useCallback(
    (href: string) => {
      onOpenChange(false);
      setSearch("");
      router.push(href);
    },
    [router, onOpenChange]
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpenChange, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={() => onOpenChange(false)}
      />
      {/* Dialog */}
      <div className="fixed left-1/2 top-[15%] w-full max-w-lg -translate-x-1/2 px-4">
        <Command
          className="rounded-lg border shadow-2xl bg-popover text-popover-foreground overflow-hidden"
          shouldFilter={true}
        >
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input
              placeholder="Cari topik pajak, regulasi, kalkulator..."
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              value={search}
              onValueChange={setSearch}
            />
            <button
              onClick={() => onOpenChange(false)}
              className="p-1 rounded-md hover:bg-accent"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              Tidak ditemukan hasil untuk &quot;{search}&quot;
            </Command.Empty>
            {["PPh", "PPN", "KUP", "PBB", "Coretax", "Kalkulator", "Referensi"].map(
              (category) => {
                const items = SEARCH_ITEMS.filter(
                  (item) => item.category === category
                );
                if (items.length === 0) return null;
                return (
                  <Command.Group key={category} heading={category}>
                    {items.map((item) => (
                      <Command.Item
                        key={item.href}
                        value={`${item.title} ${item.category}`}
                        onSelect={() => handleSelect(item.href)}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-2 py-2 text-sm cursor-pointer",
                          "aria-selected:bg-accent"
                        )}
                      >
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                        <span>{item.title}</span>
                      </Command.Item>
                    ))}
                  </Command.Group>
                );
              }
            )}
          </Command.List>
          <div className="border-t p-2 text-xs text-muted-foreground flex items-center justify-between">
            <span>
              <kbd className="rounded border bg-muted px-1 py-0.5 font-mono text-[10px]">
                &#8593;&#8595;
              </kbd>{" "}
              navigasi{" "}
              <kbd className="rounded border bg-muted px-1 py-0.5 font-mono text-[10px]">
                Enter
              </kbd>{" "}
              pilih{" "}
              <kbd className="rounded border bg-muted px-1 py-0.5 font-mono text-[10px]">
                Esc
              </kbd>{" "}
              tutup
            </span>
          </div>
        </Command>
      </div>
    </div>
  );
}
