import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { TarifPPhOPTable } from "@/components/pajak/tarif-table";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { QuickReference } from "@/components/pajak/quick-reference";

export const metadata: Metadata = {
  title: "Pajak Penghasilan (PPh)",
  description: "Panduan lengkap Pajak Penghasilan Indonesia: PPh 21, 22, 23, 25, 26, Pasal 4(2), PPh Badan, dan PPh Internasional.",
};

const PPH_SECTIONS = [
  {
    title: "Konsep Dasar PPh",
    description: "Subjek, objek, non-objek, PKP, PTKP, dan tarif PPh OP",
    href: "/pph/konsep-dasar",
    difficulty: "dasar" as const,
  },
  {
    title: "PPh Pasal 21",
    description: "Pemotongan pajak atas penghasilan sehubungan pekerjaan, jasa, dan kegiatan",
    href: "/pph/pasal-21",
    difficulty: "menengah" as const,
    badge: "TER 2024",
  },
  {
    title: "PPh Pasal 22",
    description: "Pemungutan pajak atas impor dan penyerahan oleh badan tertentu",
    href: "/pph/pasal-22",
    difficulty: "menengah" as const,
  },
  {
    title: "PPh Pasal 23",
    description: "Pemotongan atas dividen, bunga, royalti, sewa, dan jasa",
    href: "/pph/pasal-23",
    difficulty: "menengah" as const,
  },
  {
    title: "PPh Pasal 25",
    description: "Angsuran pajak penghasilan bulanan",
    href: "/pph/pasal-25",
    difficulty: "dasar" as const,
  },
  {
    title: "PPh Pasal 26",
    description: "Pemotongan atas penghasilan WP luar negeri, termasuk tax treaty",
    href: "/pph/pasal-26",
    difficulty: "lanjutan" as const,
  },
  {
    title: "PPh Pasal 4(2) — Final",
    description: "PPh final atas deposito, sewa, konstruksi, UMKM, dividen, dan lainnya",
    href: "/pph/pasal-4-ayat-2",
    difficulty: "menengah" as const,
  },
  {
    title: "PPh Badan",
    description: "Tarif 22%, fasilitas Pasal 31E, rekonsiliasi fiskal, kredit pajak",
    href: "/pph/badan",
    difficulty: "lanjutan" as const,
  },
  {
    title: "PPh Internasional",
    description: "Tax treaty, PPh 24 (kredit pajak LN), BUT, CFC Rules",
    href: "/pph/internasional",
    difficulty: "lanjutan" as const,
  },
];

const DIFFICULTY_BADGE = {
  dasar: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  menengah: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  lanjutan: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export default function PPhPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Pajak Penghasilan (PPh)" }]} />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">Pajak Penghasilan (PPh)</h1>
        <p className="mt-2 text-muted-foreground">
          Panduan komprehensif seluruh jenis Pajak Penghasilan di Indonesia
          berdasarkan UU No. 7 Tahun 2021 tentang Harmonisasi Peraturan
          Perpajakan (UU HPP).
        </p>

        <DasarHukumBadge
          items={[
            "UU No. 7/1983",
            "UU No. 36/2008",
            "UU No. 7/2021 (HPP)",
            "PP 55/2022",
            "PMK-168/2023",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="Perubahan Penting UU HPP" className="mt-6">
        <p>
          UU HPP (berlaku 2022) mengubah beberapa ketentuan penting PPh: tarif
          OP menjadi 5 layer (tambahan 35% di atas Rp5 miliar), tarif badan
          tetap 22%, dan PTKP tetap sama sejak 2016.
        </p>
      </PerhatianBlock>

      {/* Quick reference */}
      <div className="grid gap-4 sm:grid-cols-2 mt-6">
        <QuickReference
          title="Tarif PPh Badan"
          items={[
            { label: "Umum", value: "22%" },
            { label: "Go Public (diskon 3%)", value: "19%" },
            { label: "UMKM (omzet ≤ Rp4,8M)", value: "0,5% final" },
            { label: "Fasilitas Pasal 31E", value: "50% × 22% = 11%" },
          ]}
          footer="UU HPP Pasal 17 ayat (1) huruf b"
        />
        <QuickReference
          title="PTKP (per tahun)"
          items={[
            { label: "TK/0", value: "Rp54.000.000" },
            { label: "K/0", value: "Rp58.500.000" },
            { label: "K/1", value: "Rp63.000.000" },
            { label: "K/3", value: "Rp72.000.000" },
          ]}
          footer="PMK-101/PMK.010/2016 (masih berlaku)"
        />
      </div>

      {/* Tarif PPh OP */}
      <div className="mt-6">
        <TarifPPhOPTable />
      </div>

      {/* Section cards */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Topik PPh</h2>
      <div className="grid gap-3">
        {PPH_SECTIONS.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-medium text-sm">{section.title}</h3>
                    <Badge
                      variant="outline"
                      className={`text-[10px] ${DIFFICULTY_BADGE[section.difficulty]}`}
                    >
                      {section.difficulty}
                    </Badge>
                    {section.badge && (
                      <Badge variant="secondary" className="text-[10px]">
                        {section.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {section.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4 transition-transform group-hover:translate-x-1" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
