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
  title: "Pelaporan SPT di Coretax DJP",
  description:
    "Panduan pelaporan SPT Masa PPN, SPT Masa PPh, dan SPT Tahunan melalui Coretax DJP. Fitur prepopulated dan langkah-langkah pelaporan.",
};

export default function CoretaxSPTPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Coretax DJP", href: "/coretax" },
          { label: "Pelaporan SPT" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">Pelaporan SPT di Coretax</h1>
        <p className="mt-2 text-muted-foreground">
          Coretax mengintegrasikan seluruh pelaporan SPT dalam satu platform.
          SPT Masa PPN dan PPh bersifat <strong>prepopulated</strong> —
          otomatis terisi dari data faktur pajak dan bukti potong.
        </p>
        <DasarHukumBadge
          items={[
            "PMK 81/2024 Bab V",
            "PMK 136/2025",
            "UU KUP Pasal 3-8",
            "UU HPP",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="Prepopulated SPT = Lebih Mudah">
        <p>
          Di Coretax, SPT Masa PPN otomatis terisi dari data e-Faktur, dan
          SPT Masa PPh otomatis terisi dari data e-Bupot. Anda tinggal
          <strong> review, lengkapi jika ada tambahan, lalu submit</strong>.
          Tidak perlu lagi input ulang data secara manual.
        </p>
      </PerhatianBlock>

      {/* Jenis SPT */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Jenis SPT di Coretax</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-2 font-medium">Jenis SPT</th>
                <th className="text-left p-2 font-medium">Sumber Data</th>
                <th className="text-left p-2 font-medium">Batas Waktu</th>
                <th className="text-left p-2 font-medium">Prepopulated?</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {[
                { jenis: "SPT Masa PPN", sumber: "e-Faktur Coretax", batas: "Akhir bulan berikutnya", prepop: "Ya" },
                { jenis: "SPT Masa PPh 21/26", sumber: "e-Bupot 21/26", batas: "Tgl 20 bulan berikutnya", prepop: "Ya" },
                { jenis: "SPT Masa PPh Unifikasi", sumber: "e-Bupot Unifikasi", batas: "Tgl 20 bulan berikutnya", prepop: "Ya" },
                { jenis: "SPT Tahunan OP (1770/S/SS)", sumber: "Data bukti potong + manual", batas: "31 Maret", prepop: "Sebagian" },
                { jenis: "SPT Tahunan Badan (1771)", sumber: "Laporan keuangan + manual", batas: "30 April", prepop: "Sebagian" },
              ].map((row) => (
                <tr key={row.jenis} className="border-b">
                  <td className="p-2 font-medium">{row.jenis}</td>
                  <td className="p-2 text-muted-foreground">{row.sumber}</td>
                  <td className="p-2">{row.batas}</td>
                  <td className="p-2">
                    <Badge variant={row.prepop === "Ya" ? "default" : "outline"} className="text-[10px]">
                      {row.prepop}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SPT Masa PPN */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">SPT Masa PPN (Prepopulated)</h2>
        <p className="text-sm text-muted-foreground mb-3">
          SPT Masa PPN di Coretax merupakan salah satu fitur paling
          revolusioner — seluruh data faktur pajak keluaran dan masukan
          otomatis terisi.
        </p>
        <div className="rounded-lg border p-4 bg-muted/20">
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
              <div>
                <p className="font-medium">Buka menu SPT → SPT Masa PPN</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Pilih masa pajak yang akan dilaporkan.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
              <div>
                <p className="font-medium">Review data prepopulated</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Data PK (Pajak Keluaran) dari faktur keluaran dan PM (Pajak
                  Masukan) dari faktur masukan yang dikreditkan sudah terisi
                  otomatis. Periksa kelengkapan dan kebenaran.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
              <div>
                <p className="font-medium">Tambahkan data lain (jika ada)</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Kompensasi kelebihan PM bulan lalu, PPN disetor sendiri, dll.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">4</span>
              <div>
                <p className="font-medium">Submit SPT</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Jika ada PPN Kurang Bayar (KB), sistem akan otomatis
                  mengarahkan ke pembuatan billing. Jika Nihil atau Lebih
                  Bayar, langsung submit.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">5</span>
              <div>
                <p className="font-medium">Unduh BPE (Bukti Penerimaan Elektronik)</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Setelah berhasil submit, BPE bisa diunduh sebagai bukti
                  pelaporan yang sah.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* SPT Masa PPh */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">SPT Masa PPh 21/26</h2>
        <p className="text-sm text-muted-foreground mb-3">
          SPT Masa PPh 21/26 juga prepopulated dari data bukti potong (e-Bupot)
          yang telah dibuat di Coretax.
        </p>
        <div className="rounded-lg border p-4 bg-muted/20 text-sm space-y-2">
          <p><strong>1.</strong> Pastikan semua bukti potong PPh 21/26 sudah dibuat melalui e-Bupot</p>
          <p><strong>2.</strong> Buka SPT → SPT Masa PPh 21/26 → Pilih masa pajak</p>
          <p><strong>3.</strong> Data dari e-Bupot otomatis mengisi induk SPT</p>
          <p><strong>4.</strong> Review, pastikan sudah lengkap dan benar</p>
          <p><strong>5.</strong> Bayar PPh terutang (jika ada) → Submit SPT → Unduh BPE</p>
        </div>

        <PerhatianBlock type="warning" title="TER PPh 21 di Coretax" className="mt-3">
          <p>
            Sejak 2024, pemotongan PPh 21 Masa Januari–November menggunakan
            Tarif Efektif Rata-Rata (TER) per PP 58/2023. Bukti potong di
            Coretax sudah mengakomodasi perhitungan TER. Pada Masa Desember,
            dilakukan penghitungan ulang dengan tarif Pasal 17 progresif.
          </p>
        </PerhatianBlock>
      </section>

      {/* SPT Masa PPh Unifikasi */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">SPT Masa PPh Unifikasi</h2>
        <p className="text-sm text-muted-foreground mb-3">
          PPh Pasal 22, 23, 26, 15, dan 4(2) dilaporkan secara unifikasi
          (gabungan) dalam satu SPT Masa melalui e-Bupot Unifikasi di
          Coretax.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="PPh yang Diunifikasi"
            items={[
              { label: "PPh 22", value: "Pemungutan impor/bendaharawan" },
              { label: "PPh 23", value: "Pemotongan jasa, sewa, royalti" },
              { label: "PPh 26", value: "Pemotongan WP luar negeri" },
              { label: "PPh 4(2) Final", value: "Sewa tanah/bangunan, jasa konstruksi" },
            ]}
          />
          <QuickReference
            title="Proses Pelaporan"
            items={[
              { label: "Buat bupot", value: "e-Bupot Unifikasi" },
              { label: "SPT Masa", value: "Prepopulated otomatis" },
              { label: "Batas waktu", value: "Tgl 20 bulan berikutnya" },
              { label: "Pembayaran", value: "Tgl 10 bulan berikutnya" },
            ]}
          />
        </div>
      </section>

      {/* SPT Tahunan */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">SPT Tahunan</h2>
        <p className="text-sm text-muted-foreground mb-3">
          SPT Tahunan di Coretax sudah sebagian prepopulated dari data bukti
          potong yang diterima WP sepanjang tahun.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h4 className="font-medium text-sm mb-2">SPT Tahunan OP (1770/S/SS)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Data bukti potong (A1, A2) prepopulated</li>
              <li>• Penghasilan lain input manual</li>
              <li>• Harta & kewajiban update manual</li>
              <li>• PTKP otomatis sesuai status</li>
              <li>• Kredit pajak dari bupot otomatis</li>
              <li>• Batas waktu: <strong>31 Maret</strong></li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-medium text-sm mb-2">SPT Tahunan Badan (1771)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Lampirkan laporan keuangan (PDF)</li>
              <li>• Rekonsiliasi fiskal input manual</li>
              <li>• Kredit pajak prepopulated</li>
              <li>• Angsuran PPh 25 otomatis dihitung</li>
              <li>• Transkrip kutipan elemen (TKE) tersedia</li>
              <li>• Batas waktu: <strong>30 April</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pembetulan SPT */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Pembetulan SPT</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Jika ditemukan kesalahan pada SPT yang sudah dilaporkan, WP bisa
          membuat SPT pembetulan melalui Coretax.
        </p>
        <div className="rounded-lg border p-4 bg-muted/20 text-sm space-y-2">
          <p><strong>Langkah:</strong> SPT → Pilih SPT yang ingin dibetulkan → Klik &ldquo;Pembetulan&rdquo; → Edit data → Submit</p>
          <p><strong>Syarat:</strong> Belum dilakukan pemeriksaan atas masa/tahun pajak tersebut</p>
          <p><strong>Dampak:</strong> Jika ada kurang bayar, wajib bayar selisih + sanksi bunga</p>
          <p><strong>Batas:</strong> Pembetulan bisa dilakukan berkali-kali selama belum diperiksa</p>
        </div>
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            { title: "SPT — Ketentuan Umum", desc: "Jenis SPT, batas waktu, pembetulan per KUP", href: "/kup/spt" },
            { title: "e-Faktur Coretax", desc: "Buat faktur pajak yang jadi dasar SPT Masa PPN", href: "/coretax/e-faktur" },
            { title: "Pembayaran & Billing", desc: "Cara bayar kekurangan pajak dari SPT", href: "/coretax/pembayaran" },
            { title: "Panduan Total SPT Karyawan 2025", desc: "Playbook lengkap dari aktivasi akun sampai BPE", href: "/materi/panduan-total-lapor-spt-karyawan-coretax-2025" },
            { title: "PPh Pasal 21", desc: "Perhitungan PPh 21 dengan TER", href: "/pph/pasal-21" },
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
        title="Poin Penting SPT di Coretax"
        points={[
          "SPT Masa PPN prepopulated dari e-Faktur — tinggal review dan submit",
          "SPT Masa PPh prepopulated dari e-Bupot — data otomatis terisi",
          "PPh 21 menggunakan TER (Jan-Nov), penghitungan ulang Pasal 17 (Des)",
          "PPh Unifikasi: PPh 22, 23, 26, 4(2) dalam satu SPT",
          "SPT Tahunan OP batas 31 Maret, Badan batas 30 April",
          "Pembetulan SPT bisa dilakukan selama belum diperiksa",
          "BPE (Bukti Penerimaan Elektronik) otomatis setelah submit",
        ]}
      />
    </div>
  );
}
