import type { Metadata } from "next";
import { Calendar, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DEADLINE_BULANAN, DEADLINE_TAHUNAN } from "@/data/kalender-pajak";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Kalender Pajak — Deadline Pelaporan & Pembayaran",
  description:
    "Kalender pajak lengkap: deadline pelaporan SPT, penyetoran pajak bulanan dan tahunan, termasuk sanksi keterlambatan.",
};

export default function KalenderPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Kalender Pajak</h1>
            <p className="mt-2 text-muted-foreground">
              Deadline pelaporan dan pembayaran pajak yang wajib diperhatikan
              setiap Wajib Pajak. Keterlambatan akan dikenakan sanksi
              administrasi berupa denda dan/atau bunga.
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-6 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm mb-1">Perhatikan Deadline</p>
              <p className="text-sm leading-relaxed">
                Jika batas waktu jatuh pada hari libur (Sabtu, Minggu, atau hari
                libur nasional), maka batas waktu mundur ke{" "}
                <strong>hari kerja berikutnya</strong>. Untuk SPT Tahunan,
                keterlambatan dikenakan denda Rp100.000 (OP) atau Rp1.000.000
                (Badan).
              </p>
            </div>
          </div>
        </div>

        {/* Deadline Tahunan */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-red-500" />
            Deadline Tahunan
          </h2>
          <div className="grid gap-3">
            {DEADLINE_TAHUNAN.map((d, i) => (
              <Card key={i}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="rounded-lg bg-red-100 dark:bg-red-900/30 p-2 shrink-0">
                    <Clock className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{d.deskripsi}</p>
                    <p className="text-xs text-muted-foreground">
                      {d.jenisPajak}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs font-mono shrink-0"
                  >
                    {d.tanggal}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sanksi */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Sanksi Keterlambatan</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold text-sm mb-2">
                Terlambat Lapor SPT
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  SPT Masa PPh: <strong>Rp100.000</strong>
                </li>
                <li>
                  SPT Masa PPN: <strong>Rp500.000</strong>
                </li>
                <li>
                  SPT Tahunan OP: <strong>Rp100.000</strong>
                </li>
                <li>
                  SPT Tahunan Badan: <strong>Rp1.000.000</strong>
                </li>
              </ul>
              <p className="text-[10px] text-muted-foreground mt-2 italic">
                Pasal 7 UU KUP
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold text-sm mb-2">
                Terlambat Setor Pajak
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  Bunga: <strong>tarif referensi BI + 5% / 12</strong>
                </li>
                <li>Per bulan, bagian dari bulan dihitung penuh</li>
                <li>Maksimal 24 bulan</li>
                <li>Tarif bunga berubah setiap bulan (KMK)</li>
              </ul>
              <p className="text-[10px] text-muted-foreground mt-2 italic">
                Pasal 9 ayat (2a) UU KUP jo. UU HPP
              </p>
            </div>
          </div>
        </section>

        {/* Deadline Bulanan */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Deadline Bulanan (Berulang Setiap Bulan)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="px-4 py-2 text-left font-medium">Tgl</th>
                  <th className="px-4 py-2 text-left font-medium">
                    Kewajiban
                  </th>
                  <th className="px-4 py-2 text-left font-medium">Jenis</th>
                  <th className="px-4 py-2 text-center font-medium">Tipe</th>
                </tr>
              </thead>
              <tbody>
                {DEADLINE_BULANAN.map((d, i) => (
                  <tr
                    key={i}
                    className={`border-b ${
                      i % 2 === 0 ? "" : "bg-muted/20"
                    }`}
                  >
                    <td className="px-4 py-2 font-mono font-medium">
                      {d.tanggal}
                    </td>
                    <td className="px-4 py-2">{d.deskripsi}</td>
                    <td className="px-4 py-2 text-muted-foreground">
                      {d.jenisPajak}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <Badge
                        variant={
                          d.tipe === "setor" ? "default" : "secondary"
                        }
                        className="text-[10px]"
                      >
                        {d.tipe}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            *Tanggal mengacu bulan berikutnya setelah masa pajak. Jika jatuh
            pada hari libur, mundur ke hari kerja berikutnya.
          </p>
        </section>

        {/* Tips */}
        <section className="mt-8">
          <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-5">
            <h4 className="font-semibold text-sm mb-3">
              Tips Mengelola Deadline Pajak
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">
                  &#10003;
                </span>
                <span>
                  Gunakan kalender digital dengan reminder H-3 dan H-1 sebelum
                  deadline
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">
                  &#10003;
                </span>
                <span>
                  Siapkan e-Billing lebih awal — jangan tunggu hari terakhir
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">
                  &#10003;
                </span>
                <span>
                  Simpan bukti setor (NTPN) dan bukti lapor (BPE) secara teratur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">
                  &#10003;
                </span>
                <span>
                  Perpanjangan SPT Tahunan: ajukan sebelum batas waktu dengan
                  menyetor estimasi kurang bayar
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
