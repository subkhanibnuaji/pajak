import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { QuickReference } from "@/components/pajak/quick-reference";
import { CaseStudyBlock } from "@/components/pajak/case-study-block";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pembayaran & Billing di Coretax DJP",
  description:
    "Panduan lengkap pembayaran pajak melalui Coretax DJP: buat kode billing, deposit pajak, pemindahbukuan, dan rekonsiliasi pembayaran.",
};

export default function CoretaxPembayaranPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Coretax DJP", href: "/coretax" },
          { label: "Pembayaran & Billing" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">Pembayaran & Billing di Coretax</h1>
        <p className="mt-2 text-muted-foreground">
          Coretax menggantikan e-Billing (SSE3) dengan sistem pembayaran
          terintegrasi. Fitur baru termasuk <strong>multi-account billing</strong>{" "}
          dan <strong>deposit pajak</strong> yang mempermudah manajemen
          pembayaran.
        </p>
        <DasarHukumBadge
          items={["PMK 81/2024 Pasal 94-121", "PMK 136/2025"]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="Fitur Baru: Deposit Pajak">
        <p>
          Coretax memperkenalkan <strong>Deposit Pajak</strong> — fitur untuk
          menyetor dana terlebih dahulu ke akun pajak tanpa terikat jenis pajak
          tertentu. Dana bisa digunakan untuk membayar pajak apa saja kapan saja.
          Tanggal pembayaran dihitung sejak tanggal deposit (menghindari telat bayar).
        </p>
      </PerhatianBlock>

      {/* Cara Buat Billing */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Cara Membuat Kode Billing</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Kode billing di Coretax berformat <strong>15 digit</strong> (1 digit
          kode penerbit + 14 digit acak). Ada dua cara membuatnya:
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div className="rounded-lg border p-4">
            <h4 className="font-medium text-sm mb-2">Otomatis (dari SPT)</h4>
            <p className="text-xs text-muted-foreground">
              Saat SPT menunjukkan kurang bayar, sistem otomatis membuat kode
              billing. Status SPT berubah ke &ldquo;Menunggu Pembayaran&rdquo;.
              Setelah bayar, otomatis menjadi &ldquo;Dilaporkan&rdquo;.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-medium text-sm mb-2">Manual (Key-in)</h4>
            <p className="text-xs text-muted-foreground">
              Buat billing secara manual melalui menu Pembayaran →
              Layanan Mandiri Kode Billing. Pilih jenis pajak, isi detail,
              dan generate.
            </p>
          </div>
        </div>

        <div className="rounded-lg border p-4 bg-muted/20">
          <h4 className="font-semibold text-sm mb-2">Langkah Membuat Billing Manual</h4>
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
              <div>
                <p className="font-medium">Login Coretax → Menu Pembayaran</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Pilih &ldquo;Layanan Mandiri Kode Billing&rdquo;
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
              <div>
                <p className="font-medium">Pilih jenis pajak (MAP & KJS)</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Contoh: 411121-100 (PPh 21), 411211-100 (PPN Dalam Negeri),
                  411126-100 (PPh 25 OP)
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
              <div>
                <p className="font-medium">Isi masa/tahun pajak dan jumlah</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Input nominal pembayaran dan periode pajak yang dibayar.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">4</span>
              <div>
                <p className="font-medium">Generate kode billing</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Kode billing 15 digit akan muncul. Catat atau screenshot.
                  Kode berlaku hingga tanggal tertentu.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">5</span>
              <div>
                <p className="font-medium">Bayar via bank / internet banking / mobile banking</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Masukkan kode billing di kanal pembayaran (bank persepsi, ATM,
                  mobile banking, atau platform PJAP seperti OnlinePajak/Klikpajak).
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Multi-Account Billing */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Multi-Account Billing</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Fitur baru di Coretax: satu kode billing bisa mencakup{" "}
          <strong>beberapa jenis pajak</strong> sekaligus. Misalnya PPh 21 +
          PPh 23 + PPN dalam satu pembayaran.
        </p>
        <QuickReference
          title="Multi-Account Billing"
          items={[
            { label: "Sebelumnya", value: "1 billing = 1 jenis pajak" },
            { label: "Di Coretax", value: "1 billing = bisa multi jenis" },
            { label: "Contoh", value: "PPh 21 + PPh 23 + PPN" },
            { label: "Manfaat", value: "Efisiensi pembayaran" },
          ]}
        />
      </section>

      {/* Deposit Pajak */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Deposit Pajak (Fitur Baru)</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Deposit Pajak adalah dana yang disetor ke akun wajib pajak di
          Coretax <strong>tanpa terikat jenis pajak tertentu</strong>. Dana
          ini bisa digunakan untuk membayar kewajiban pajak apa saja
          (PPh, PPN, PPnBM, Bea Meterai, PBB, dll).
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <QuickReference
            title="Keuntungan Deposit Pajak"
            items={[
              { label: "Fleksibel", value: "Bayar pajak apa saja" },
              { label: "Tanggal bayar", value: "= tanggal deposit" },
              { label: "Tidak perlu billing", value: "Cukup pemindahbukuan" },
              { label: "Hindari denda", value: "Deposit di awal, alokasi nanti" },
            ]}
            footer="PMK 81/2024 Pasal 1 angka 112"
          />
          <QuickReference
            title="Batasan Deposit"
            items={[
              { label: "Tarik tunai", value: "Tidak bisa" },
              { label: "Campuran", value: "Tidak bisa campur billing + deposit" },
              { label: "Saldo kurang", value: "Transaksi ditolak" },
              { label: "Penggunaan", value: "Hanya untuk pajak" },
            ]}
          />
        </div>

        <div className="rounded-lg border p-4 bg-muted/20">
          <h4 className="font-semibold text-sm mb-2">Cara Top Up Deposit Pajak</h4>
          <div className="space-y-2 text-sm">
            <p><strong>1.</strong> Login Coretax → Menu Pembayaran → Layanan Mandiri Kode Billing</p>
            <p><strong>2.</strong> Pilih kode <code className="text-xs bg-muted rounded px-1 py-0.5">411618-100</code> (Setoran untuk Deposit Pajak)</p>
            <p><strong>3.</strong> Input jumlah deposit dan masa pajak</p>
            <p><strong>4.</strong> Generate kode billing → Bayar via bank/e-banking</p>
          </div>
        </div>

        <div className="rounded-lg border p-4 bg-muted/20 mt-3">
          <h4 className="font-semibold text-sm mb-2">Cara Gunakan Deposit untuk Bayar Pajak</h4>
          <div className="space-y-2 text-sm">
            <p><strong>1.</strong> Menu Pembayaran → Permohonan Pemindahbukuan</p>
            <p><strong>2.</strong> Klik &ldquo;Buat Permohonan Pemindahbukuan Baru&rdquo;</p>
            <p><strong>3.</strong> Pilih saldo deposit yang akan dipindahbukukan</p>
            <p><strong>4.</strong> Tentukan tujuan: jenis pajak (MAP), kode setoran (KJS), masa/tahun, jumlah</p>
            <p><strong>5.</strong> Lampirkan dokumen pendukung jika diperlukan → Submit</p>
          </div>
        </div>
      </section>

      {/* Contoh Kasus */}
      <CaseStudyBlock
        title="Contoh: Deposit Pajak untuk Bayar PPh 21"
        scenario="PT Maju Jaya menyetor deposit pajak Rp100.000.000 pada 5 Januari 2025. Pada 10 Februari 2025, perusahaan mengalokasikan Rp25.000.000 dari deposit untuk bayar PPh 21 masa Januari."
        steps={[
          { label: "Top up deposit (5 Jan 2025)", result: 100_000_000 },
          { label: "Alokasi PPh 21 Masa Jan via Pbk", result: -25_000_000 },
          { label: "Sisa deposit", result: 75_000_000 },
        ]}
        conclusion="Tanggal pembayaran PPh 21 dihitung sejak 5 Januari 2025 (tanggal deposit), bukan tanggal pemindahbukuan. Ini membantu menghindari keterlambatan pembayaran."
        dasarHukum={["PMK 81/2024 Pasal 1 angka 112"]}
      />

      {/* Pemindahbukuan */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Pemindahbukuan (Pbk)</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Pemindahbukuan di Coretax digunakan untuk mengalokasikan pembayaran
          yang sudah masuk ke pos pajak yang benar.
        </p>
        <div className="rounded-lg border p-4 bg-muted/20 text-sm space-y-2">
          <p><strong>Kapan dibutuhkan:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Salah input MAP/KJS saat bayar</li>
            <li>Salah masa/tahun pajak</li>
            <li>Kelebihan bayar di satu jenis pajak</li>
            <li>Alokasi deposit pajak ke kewajiban tertentu</li>
          </ul>
          <p className="mt-2"><strong>Langkah:</strong> Pembayaran → Permohonan Pemindahbukuan → Isi detail → Submit</p>
        </div>
      </section>

      {/* Channel Pembayaran */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Channel Pembayaran</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { title: "Bank Persepsi", desc: "BRI, BNI, Mandiri, BCA, dan bank lainnya" },
            { title: "Internet/Mobile Banking", desc: "Transfer via kode billing di app bank" },
            { title: "PJAP", desc: "OnlinePajak, Klikpajak, Pajakku, dll." },
          ].map((ch) => (
            <div key={ch.title} className="rounded-lg border p-3">
              <h4 className="font-medium text-sm">{ch.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{ch.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            { title: "Pembayaran Pajak (KUP)", desc: "Ketentuan umum pembayaran dan penyetoran pajak", href: "/kup/pembayaran" },
            { title: "Pelaporan SPT di Coretax", desc: "SPT Masa & Tahunan prepopulated", href: "/coretax/spt" },
            { title: "Kalender Pajak", desc: "Deadline bayar dan lapor tiap bulan", href: "/kalender" },
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
        title="Poin Penting Pembayaran di Coretax"
        points={[
          "Kode billing format 15 digit (1 + 14 acak), menggantikan SSE/e-Billing lama",
          "Multi-account billing: 1 kode bisa untuk beberapa jenis pajak",
          "Billing otomatis dari SPT kurang bayar (tanpa key-in manual)",
          "Deposit pajak: dana di-top up dulu, dialokasikan kemudian",
          "Tanggal bayar = tanggal deposit (aman dari denda keterlambatan)",
          "Pemindahbukuan untuk koreksi kesalahan MAP/KJS/masa pajak",
          "Bayar via bank persepsi, internet/mobile banking, atau PJAP",
        ]}
      />
    </div>
  );
}
