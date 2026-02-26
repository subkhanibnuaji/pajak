import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Ketentuan Umum & Tata Cara Perpajakan (KUP)",
  description: "Panduan lengkap KUP: NPWP, SPT, pembayaran, pemeriksaan, keberatan, banding, dan sanksi perpajakan.",
};

const KUP_SECTIONS = [
  { title: "NPWP & PKP", description: "Pendaftaran, format baru NIK=NPWP, NPPKP, Coretax", href: "/kup/npwp", difficulty: "dasar" as const },
  { title: "Surat Pemberitahuan (SPT)", description: "Jenis SPT, batas waktu, e-Filing, pembetulan", href: "/kup/spt", difficulty: "dasar" as const },
  { title: "Pembayaran Pajak", description: "e-Billing, Kode MAP & KJS, pemindahbukuan", href: "/kup/pembayaran", difficulty: "dasar" as const },
  { title: "Pemeriksaan Pajak", description: "Jenis, kriteria, prosedur, hak WP, SKP", href: "/kup/pemeriksaan", difficulty: "lanjutan" as const },
  { title: "Keberatan & Banding", description: "Proses keberatan, banding, gugatan, PK", href: "/kup/keberatan-banding", difficulty: "lanjutan" as const },
  { title: "Sanksi Perpajakan", description: "Bunga, denda, kenaikan, pidana pajak", href: "/kup/sanksi", difficulty: "menengah" as const },
];

const DIFFICULTY_BADGE = {
  dasar: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  menengah: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  lanjutan: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export default function KUPPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Ketentuan Umum (KUP)" }]} />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">Ketentuan Umum & Tata Cara Perpajakan</h1>
        <p className="mt-2 text-muted-foreground">
          KUP mengatur tata cara pelaksanaan hak dan kewajiban perpajakan:
          pendaftaran, pelaporan, pembayaran, pemeriksaan, penagihan, hingga
          upaya hukum.
        </p>
        <DasarHukumBadge
          items={["UU No. 6/1983", "UU No. 16/2009", "UU No. 7/2021 (HPP)", "PP 50/2022"]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="Coretax DJP — Aktif Januari 2025">
        <p>
          Coretax Administration System (CTAS) menggantikan sebagian besar sistem
          administrasi DJP. Registrasi NPWP, pelaporan SPT, dan penerbitan Faktur
          Pajak kini melalui Coretax. NIK berfungsi sebagai NPWP untuk WP OP.
        </p>
      </PerhatianBlock>

      <h2 className="text-xl font-semibold mt-8 mb-4">Topik KUP</h2>
      <div className="grid gap-3">
        {KUP_SECTIONS.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-medium text-sm">{section.title}</h3>
                    <Badge variant="outline" className={`text-[10px] ${DIFFICULTY_BADGE[section.difficulty]}`}>
                      {section.difficulty}
                    </Badge>
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
        title="Poin Penting KUP"
        points={[
          "NIK = NPWP untuk WP Orang Pribadi (UU HPP)",
          "SPT Tahunan OP: batas 31 Maret, Badan: 30 April",
          "Coretax DJP aktif sejak Januari 2025 — sistem baru administrasi pajak",
          "Pemeriksaan: WP berhak minta SPHP dan pembahasan akhir",
          "Sanksi bunga menggunakan tarif referensi BI (berubah tiap bulan, PMK-103/2021)",
          "Keberatan: 3 bulan sejak SKP, bayar minimal porsi yang disetujui",
        ]}
      />
    </div>
  );
}
