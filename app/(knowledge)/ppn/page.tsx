import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { QuickReference } from "@/components/pajak/quick-reference";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "PPN & PPnBM",
  description: "Panduan lengkap Pajak Pertambahan Nilai (PPN) dan PPnBM: mekanisme, faktur pajak, fasilitas, dan PPN digital.",
};

const PPN_SECTIONS = [
  { title: "Mekanisme PPN", description: "Pajak Masukan vs Keluaran, saat & tempat terutang", href: "/ppn/mekanisme", difficulty: "dasar" as const },
  { title: "Faktur Pajak", description: "e-Faktur, kode transaksi, pengkreditan PM", href: "/ppn/faktur-pajak", difficulty: "menengah" as const },
  { title: "PPnBM", description: "Barang mewah, tarif 10%-200%, kendaraan bermotor", href: "/ppn/ppnbm", difficulty: "menengah" as const },
  { title: "PPN PMSE / Digital", description: "PPN atas perdagangan melalui sistem elektronik", href: "/ppn/pmse", difficulty: "menengah" as const, badge: "New" },
  { title: "Fasilitas PPN", description: "PPN dibebaskan, tidak dipungut, 0%, DTP", href: "/ppn/fasilitas", difficulty: "lanjutan" as const },
];

const DIFFICULTY_BADGE = {
  dasar: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  menengah: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  lanjutan: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export default function PPNPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "PPN & PPnBM" }]} />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">PPN & PPnBM</h1>
        <p className="mt-2 text-muted-foreground">
          Pajak Pertambahan Nilai (PPN) adalah pajak tidak langsung yang
          dikenakan atas penyerahan Barang Kena Pajak (BKP) dan/atau Jasa Kena
          Pajak (JKP) di dalam Daerah Pabean.
        </p>
        <DasarHukumBadge
          items={[
            "UU No. 8/1983",
            "UU No. 42/2009",
            "UU No. 7/2021 (HPP)",
            "PP 44/2022",
            "PMK-131/2024",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="warning" title="Tarif PPN 2025">
        <p>
          Per 1 Januari 2025, tarif PPN <strong>tetap 11%</strong> untuk barang
          umum. Tarif <strong>12% hanya berlaku untuk barang mewah</strong> yang
          sebelumnya sudah dikenai PPnBM (PMK-131/2024). DPP menggunakan{" "}
          <strong>Nilai Lain = 11/12 × harga jual</strong> sehingga beban
          efektif tetap 11%.
        </p>
      </PerhatianBlock>

      <div className="grid gap-4 sm:grid-cols-2 mt-6">
        <QuickReference
          title="Tarif PPN"
          items={[
            { label: "Umum (2022-sekarang)", value: "11%" },
            { label: "Barang Mewah (2025)", value: "12%" },
            { label: "Ekspor BKP/JKP", value: "0%" },
            { label: "Threshold PKP", value: "Rp4,8 miliar/th" },
          ]}
          footer="UU HPP Pasal 7"
        />
        <QuickReference
          title="Mekanisme Kredit"
          items={[
            { label: "PPN Keluaran (PK)", value: "Dipungut saat jual" },
            { label: "PPN Masukan (PM)", value: "Dibayar saat beli" },
            { label: "Setor ke negara", value: "PK − PM" },
            { label: "Batas kredit PM", value: "3 bulan" },
          ]}
          footer="Pasal 9 UU PPN"
        />
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Topik PPN</h2>
      <div className="grid gap-3">
        {PPN_SECTIONS.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-medium text-sm">{section.title}</h3>
                    <Badge variant="outline" className={`text-[10px] ${DIFFICULTY_BADGE[section.difficulty]}`}>
                      {section.difficulty}
                    </Badge>
                    {section.badge && (
                      <Badge variant="secondary" className="text-[10px]">{section.badge}</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{section.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4 transition-transform group-hover:translate-x-1" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <RingkasanBlock
        title="Poin Penting PPN"
        points={[
          "PPN adalah pajak tidak langsung — beban ekonomi ada di konsumen akhir",
          "Tarif umum 11% (2022), 12% hanya barang mewah (2025, PMK-131/2024)",
          "Mekanisme kredit: PPN Keluaran dikurangi PPN Masukan",
          "Pengusaha wajib PKP jika omzet > Rp4,8 miliar/tahun",
          "Faktur Pajak wajib dibuat untuk setiap penyerahan BKP/JKP",
        ]}
      />
    </div>
  );
}
