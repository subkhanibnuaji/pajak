import type { Metadata } from "next";
import { FileText, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Studi Kasus Perpajakan",
  description:
    "Studi kasus perpajakan komprehensif: PPh 21, PPh 23, PPh Badan, PPN, BPHTB, dan simulasi pemeriksaan.",
};

const CASE_STUDIES = [
  {
    title: "PPh 21 Karyawan Tetap",
    description:
      "Perhitungan PPh 21 dengan TER & Pasal 17, berbagai status PTKP, perbandingan beban pajak Jan-Nov vs Desember",
    jenis: "PPh 21",
    difficulty: "dasar",
    tags: ["TER 2024", "PTKP", "Pasal 17"],
  },
  {
    title: "PPh 21 Tenaga Ahli",
    description:
      "Dokter, konsultan, pengacara — pemotongan 50% x penghasilan bruto sebagai DPP, termasuk kasus dokter praktik di RS",
    jenis: "PPh 21",
    difficulty: "menengah",
    tags: ["Tenaga Ahli", "50% Bruto"],
  },
  {
    title: "PPh 23 Jasa Konsultan",
    description:
      "Pemotongan PPh 23 atas jasa konsultan IT — penentuan DPP, pemisahan material & jasa, bukti potong",
    jenis: "PPh 23",
    difficulty: "menengah",
    tags: ["Jasa", "Bukti Potong"],
  },
  {
    title: "PPh Badan Rekonsiliasi Fiskal",
    description:
      "Rekonsiliasi fiskal lengkap PT Manufaktur: koreksi positif & negatif, beda tetap vs beda waktu, fasilitas Pasal 31E",
    jenis: "PPh Badan",
    difficulty: "lanjutan",
    tags: ["Rekonsiliasi", "Pasal 31E"],
  },
  {
    title: "PPN Rantai Distribusi",
    description:
      "Mekanisme PPN dari produsen ke distributor ke end-user: Pajak Masukan vs Keluaran, kredit pajak, dan faktur",
    jenis: "PPN",
    difficulty: "menengah",
    tags: ["Faktur Pajak", "Kredit PM"],
  },
  {
    title: "BPHTB Jual Beli Tanah",
    description:
      "Perhitungan BPHTB atas transaksi jual beli properti: penentuan NPOP, NPOPTKP, dan kewajiban penjual (PPh Final 2,5%)",
    jenis: "BPHTB",
    difficulty: "dasar",
    tags: ["Properti", "PPh Final"],
  },
  {
    title: "UMKM: Kapan PPh Final Berakhir",
    description:
      "Simulasi batas waktu PPh Final 0,5% untuk CV dan PT — kapan harus beralih ke tarif umum dan perbandingan beban pajak",
    jenis: "PPh Final",
    difficulty: "dasar",
    tags: ["PP 55/2022", "UMKM"],
  },
  {
    title: "PPh 26 Royalti ke Singapura",
    description:
      "Penerapan tax treaty P3B Indonesia-Singapura untuk pembayaran royalti: DGT Form, tarif treaty, withholding procedure",
    jenis: "PPh 26",
    difficulty: "lanjutan",
    tags: ["Tax Treaty", "DGT Form"],
  },
];

const DIFFICULTY_BADGE: Record<string, string> = {
  dasar:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  menengah:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  lanjutan:
    "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export default function KasusPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Studi Kasus Perpajakan</h1>
            <p className="mt-2 text-muted-foreground">
              Kumpulan studi kasus komprehensif dengan perhitungan step-by-step,
              angka konkret, dan dasar hukum untuk setiap langkah. Setiap kasus
              dirancang untuk memperdalam pemahaman praktis perpajakan Indonesia.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="rounded-lg border p-3 text-center">
            <p className="text-2xl font-bold text-primary">
              {CASE_STUDIES.length}
            </p>
            <p className="text-xs text-muted-foreground">Studi Kasus</p>
          </div>
          <div className="rounded-lg border p-3 text-center">
            <p className="text-2xl font-bold text-primary">
              {new Set(CASE_STUDIES.map((cs) => cs.jenis)).size}
            </p>
            <p className="text-xs text-muted-foreground">Kategori Pajak</p>
          </div>
          <div className="rounded-lg border p-3 text-center">
            <p className="text-2xl font-bold text-primary">3</p>
            <p className="text-xs text-muted-foreground">Level Kesulitan</p>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid gap-3 mt-6">
          {CASE_STUDIES.map((cs, i) => (
            <Card
              key={i}
              className="hover:border-primary/50 hover:shadow-sm transition-all group"
            >
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="rounded-lg bg-primary/10 p-2 shrink-0">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-medium text-sm">{cs.title}</h3>
                      <Badge
                        variant="outline"
                        className={`text-[10px] ${DIFFICULTY_BADGE[cs.difficulty]}`}
                      >
                        {cs.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="text-[10px]">
                        {cs.jenis}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {cs.description}
                    </p>
                    <div className="flex gap-1 mt-1.5 flex-wrap">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info */}
        <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-6 mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Studi kasus akan terus ditambahkan secara berkala. Setiap kasus
            dilengkapi perhitungan numerik step-by-step, skenario nyata, dan
            dasar hukum yang relevan.
          </p>
          <p className="text-xs text-muted-foreground mt-2 italic">
            Konten bersifat edukatif. Untuk kepastian hukum, konsultasikan
            dengan konsultan pajak atau DJP.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
