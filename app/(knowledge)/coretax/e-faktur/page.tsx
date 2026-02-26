import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { QuickReference } from "@/components/pajak/quick-reference";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "e-Faktur Web Coretax — Panduan Lengkap Faktur Pajak",
  description:
    "Tutorial lengkap e-Faktur di Coretax DJP: buat faktur keluaran, kelola masukan, NSFP otomatis, upload massal, retur, dan pembatalan.",
};

export default function CoretaxEFakturPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Coretax DJP", href: "/coretax" },
          { label: "e-Faktur Web-Based" },
        ]}
      />

      <div className="mt-6">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl font-bold">e-Faktur di Coretax</h1>
          <Badge variant="secondary" className="text-xs">Web-Based</Badge>
        </div>
        <p className="mt-2 text-muted-foreground">
          Seluruh pembuatan dan pengelolaan Faktur Pajak kini dilakukan melalui
          Coretax berbasis web. e-Faktur Desktop (versi 3.x/4.0) dan e-Nofa
          sudah tidak digunakan sejak 1 Januari 2025.
        </p>
        <DasarHukumBadge
          items={[
            "PMK 81/2024 Bab IV",
            "PMK 136/2025",
            "PER-03/PJ/2022",
            "UU PPN Pasal 13",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="danger" title="e-Faktur Desktop Sudah Tidak Berlaku">
        <p>
          Mulai 1 Januari 2025, aplikasi e-Faktur Desktop (versi 3.2, 4.0)
          dan website e-Nofa Online <strong>sudah ditutup</strong>. Seluruh
          pembuatan faktur pajak wajib melalui Coretax. Data faktur lama sudah
          dimigrasi ke sistem Coretax.
        </p>
      </PerhatianBlock>

      {/* Perbandingan */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Perbandingan e-Faktur Lama vs Coretax</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-2 font-medium">Aspek</th>
                <th className="text-left p-2 font-medium">e-Faktur Desktop (Lama)</th>
                <th className="text-left p-2 font-medium">e-Faktur Coretax (Baru)</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {[
                { aspek: "Platform", lama: "Aplikasi desktop (Windows/Linux/Mac)", baru: "Web browser (online)" },
                { aspek: "NSFP", lama: "Request manual via e-Nofa", baru: "Otomatis saat buat faktur" },
                { aspek: "Database", lama: "Lokal di komputer WP", baru: "Cloud (server DJP)" },
                { aspek: "Backup", lama: "Manual oleh WP", baru: "Otomatis oleh sistem" },
                { aspek: "Update", lama: "Download versi baru", baru: "Otomatis (selalu versi terbaru)" },
                { aspek: "Sertifikat Elektronik", lama: "Install di komputer", baru: "Terintegrasi di akun Coretax" },
                { aspek: "Akses", lama: "Terikat 1 komputer", baru: "Bisa dari mana saja" },
                { aspek: "SPT Masa PPN", lama: "Upload CSV terpisah", baru: "Prepopulated otomatis" },
              ].map((row) => (
                <tr key={row.aspek} className="border-b">
                  <td className="p-2 font-medium">{row.aspek}</td>
                  <td className="p-2 text-muted-foreground">{row.lama}</td>
                  <td className="p-2 text-primary font-medium">{row.baru}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Buat Faktur Keluaran */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Cara Membuat Faktur Pajak Keluaran</h2>
        <div className="rounded-lg border p-4 bg-muted/20">
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
              <div>
                <p className="font-medium">Login Coretax → Menu e-Faktur</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Dari dashboard, klik menu &ldquo;e-Faktur&rdquo; di sidebar kiri.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
              <div>
                <p className="font-medium">Klik &ldquo;Buat Faktur Pajak&rdquo;</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Pilih jenis transaksi: penyerahan BKP, JKP, ekspor, atau
                  penyerahan kepada pemungut.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
              <div>
                <p className="font-medium">Isi data transaksi</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Input NPWP pembeli, nama, alamat, detail barang/jasa, harga,
                  PPN. Untuk pembeli yang sudah ada di sistem, data akan
                  auto-complete.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">4</span>
              <div>
                <p className="font-medium">Review & Submit</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Periksa kembali seluruh data. Klik &ldquo;Submit&rdquo; untuk
                  menerbitkan faktur. NSFP akan digenerate otomatis oleh sistem.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">5</span>
              <div>
                <p className="font-medium">Download/cetak faktur</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Faktur yang sudah terbit bisa diunduh dalam format PDF atau
                  XML. Faktur juga otomatis tersedia di dashboard pembeli.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* NSFP Otomatis */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">NSFP Otomatis</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Sistem Lama (e-Nofa)"
            items={[
              { label: "Proses", value: "Minta jatah NSFP secara manual" },
              { label: "Limit", value: "75 nomor per permintaan" },
              { label: "Sisa", value: "Harus dipantau manual" },
              { label: "Reset", value: "Setiap awal tahun" },
            ]}
          />
          <QuickReference
            title="Coretax (Baru)"
            items={[
              { label: "Proses", value: "Otomatis saat buat faktur" },
              { label: "Limit", value: "Tidak ada limit manual" },
              { label: "Format", value: "Nomor urut otomatis" },
              { label: "Manfaat", value: "Tidak perlu e-Nofa lagi" },
            ]}
          />
        </div>
        <PerhatianBlock type="tip" title="Tidak Perlu Khawatir NSFP Habis">
          <p>
            Di Coretax, NSFP digenerate otomatis setiap kali Anda membuat
            faktur pajak. Tidak ada lagi konsep &ldquo;jatah NSFP&rdquo; yang
            perlu diminta. Ini salah satu penyederhanaan signifikan dari
            Coretax.
          </p>
        </PerhatianBlock>
      </section>

      {/* Faktur Masukan */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Faktur Pajak Masukan</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Faktur pajak masukan di Coretax bersifat <strong>auto-populate</strong>.
          Saat lawan transaksi menerbitkan faktur keluaran atas nama Anda,
          faktur tersebut otomatis muncul di daftar faktur masukan Anda.
        </p>
        <div className="rounded-lg border p-4 bg-muted/20 text-sm space-y-2">
          <p><strong>Langkah:</strong></p>
          <p>1. Buka menu e-Faktur → Faktur Masukan</p>
          <p>2. Daftar faktur masukan akan muncul otomatis (prepopulated)</p>
          <p>3. Pilih faktur yang akan dikreditkan</p>
          <p>4. Centang &ldquo;Kreditkan&rdquo; untuk faktur yang memenuhi syarat</p>
          <p>5. Faktur yang dikreditkan akan masuk ke SPT Masa PPN otomatis</p>
        </div>
      </section>

      {/* Upload Massal */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Upload Faktur Massal (Bulk)</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Untuk PKP dengan volume faktur besar, Coretax mendukung upload
          massal menggunakan file CSV atau XML.
        </p>
        <div className="rounded-lg border p-4 bg-muted/20 text-sm space-y-2">
          <p><strong>Format CSV:</strong> Download template dari menu e-Faktur → Upload → Download Template</p>
          <p><strong>Kolom wajib:</strong> NPWP pembeli, nama, detail barang/jasa, harga, tarif PPN</p>
          <p><strong>Limit:</strong> Maksimal 1.000 faktur per file upload</p>
          <p><strong>Validasi:</strong> Sistem akan memvalidasi data sebelum diterbitkan</p>
        </div>
      </section>

      {/* Faktur Pengganti & Pembatalan */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Faktur Pengganti & Pembatalan</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h4 className="font-medium text-sm mb-2">Faktur Pengganti</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Digunakan jika ada kesalahan data pada faktur</li>
              <li>• Buka faktur asli → klik &ldquo;Buat Pengganti&rdquo;</li>
              <li>• Edit data yang salah → Submit</li>
              <li>• Faktur lama otomatis dibatalkan</li>
              <li>• Nomor faktur baru digenerate otomatis</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-medium text-sm mb-2">Pembatalan Faktur</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Digunakan jika transaksi batal/tidak jadi</li>
              <li>• Buka faktur → klik &ldquo;Batalkan&rdquo;</li>
              <li>• Input alasan pembatalan</li>
              <li>• Faktur status berubah &ldquo;Dibatalkan&rdquo;</li>
              <li>• Dampak ke SPT Masa PPN otomatis disesuaikan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Retur */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Retur Faktur Pajak</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Nota retur dibuat jika terjadi pengembalian BKP dari pembeli ke
          penjual. Di Coretax, retur dibuat oleh pembeli dan akan otomatis
          mengurangi PPN keluaran penjual.
        </p>
        <div className="rounded-lg border p-4 bg-muted/20 text-sm space-y-2">
          <p><strong>Pembeli:</strong> e-Faktur → Retur → Buat Nota Retur → Pilih faktur asal → Input detail retur → Submit</p>
          <p><strong>Penjual:</strong> Retur otomatis muncul di dashboard → Review dan approve</p>
          <p><strong>Dampak:</strong> Mengurangi PPN Keluaran penjual dan PPN Masukan pembeli</p>
        </div>
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            { title: "Faktur Pajak (Teori)", desc: "Ketentuan umum faktur pajak per UU PPN", href: "/ppn/faktur-pajak" },
            { title: "Pelaporan SPT Masa PPN", desc: "SPT prepopulated dari e-Faktur Coretax", href: "/coretax/spt" },
            { title: "Mekanisme PPN", desc: "Konsep PK-PM dan cara kerja PPN", href: "/ppn/mekanisme" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4 transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <RingkasanBlock
        title="Poin Penting e-Faktur Coretax"
        points={[
          "e-Faktur Desktop sudah tidak berlaku — semua via web Coretax",
          "NSFP otomatis digenerate sistem, tidak perlu e-Nofa",
          "Faktur masukan auto-populate dari lawan transaksi",
          "Upload massal CSV/XML hingga 1.000 faktur per file",
          "Faktur pengganti dan pembatalan langsung di Coretax",
          "Retur dibuat pembeli, otomatis mengurangi PK penjual",
          "SPT Masa PPN prepopulated dari data e-Faktur",
        ]}
      />
    </div>
  );
}
