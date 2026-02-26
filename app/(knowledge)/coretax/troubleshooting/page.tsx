import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { QuickReference } from "@/components/pajak/quick-reference";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Troubleshooting Coretax DJP — Solusi Masalah Umum",
  description:
    "Solusi masalah umum Coretax DJP: error login, gagal upload faktur, SPT tertolak, blank page, sertifikat elektronik, dan tips troubleshooting.",
};

export default function CoretaxTroubleshootingPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Coretax DJP", href: "/coretax" },
          { label: "Troubleshooting" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">Troubleshooting Coretax</h1>
        <p className="mt-2 text-muted-foreground">
          Kumpulan solusi untuk masalah umum yang sering ditemui saat
          menggunakan Coretax DJP. DJP telah mengidentifikasi setidaknya{" "}
          <strong>22 kendala umum</strong> dan terus melakukan perbaikan.
        </p>
      </div>

      <PerhatianBlock type="tip" title="Relaksasi Sanksi (KEP-67/PJ/2025)">
        <p>
          DJP menerbitkan KEP-67/PJ/2025 yang memberikan <strong>relaksasi
          sanksi administrasi</strong> untuk keterlambatan akibat kendala
          Coretax selama masa transisi. STP tidak akan diterbitkan untuk
          keterlambatan yang disebabkan masalah teknis Coretax.
        </p>
      </PerhatianBlock>

      {/* Masalah Login */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="login">
          1. Masalah Login
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive" className="text-[10px]">Error</Badge>
              <h4 className="font-medium text-sm">Tidak bisa login / password salah</h4>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Penyebab:</strong> Password DJP Online tidak cocok, akun terkunci karena salah password berkali-kali, atau data belum migrasi.</p>
              <p><strong>Solusi:</strong></p>
              <ul className="list-disc list-inside ml-2 space-y-0.5">
                <li>Gunakan fitur &ldquo;Lupa Kata Sandi&rdquo; untuk reset password</li>
                <li>Pastikan menggunakan NIK (16 digit) bukan NPWP 15 digit</li>
                <li>Coba mode Incognito/Private Browsing</li>
                <li>Bersihkan cache dan cookies browser</li>
                <li>Tunggu 30 menit jika akun terkunci</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive" className="text-[10px]">Error</Badge>
              <h4 className="font-medium text-sm">Error 500 / Internal Server Error</h4>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Penyebab:</strong> Server overload, terutama saat jam sibuk (08.00–10.00 WIB).</p>
              <p><strong>Solusi:</strong></p>
              <ul className="list-disc list-inside ml-2 space-y-0.5">
                <li>Coba di luar jam sibuk (pagi sebelum 07.00 atau malam setelah 20.00 WIB)</li>
                <li>Gunakan Chrome atau Edge versi terbaru</li>
                <li>Refresh halaman (Ctrl + Shift + R untuk hard refresh)</li>
                <li>Cek status layanan di pajak.go.id</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive" className="text-[10px]">Error</Badge>
              <h4 className="font-medium text-sm">OTP tidak diterima</h4>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Penyebab:</strong> Email/HP yang terdaftar di DJP sudah tidak aktif atau berbeda.</p>
              <p><strong>Solusi:</strong></p>
              <ul className="list-disc list-inside ml-2 space-y-0.5">
                <li>Cek folder spam/junk email</li>
                <li>Pastikan nomor HP aktif dan bisa menerima SMS</li>
                <li>Kunjungi KPP terdekat untuk update email/HP</li>
                <li>Hubungi Kring Pajak 1500200</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Masalah Sertifikat Elektronik */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="sertifikat">
          2. Sertifikat Elektronik & Face Validation
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive" className="text-[10px]">Error</Badge>
              <h4 className="font-medium text-sm">Verifikasi wajah gagal</h4>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Penyebab:</strong> Wajah tidak cocok dengan data e-KTP di Dukcapil, pencahayaan buruk, kamera tidak berfungsi.</p>
              <p><strong>Solusi:</strong></p>
              <ul className="list-disc list-inside ml-2 space-y-0.5">
                <li>Pastikan pencahayaan ruangan cukup terang</li>
                <li>Lepas kacamata/masker/topi</li>
                <li>Gunakan kamera depan laptop (bukan HP)</li>
                <li>Pastikan izin kamera di browser sudah aktif</li>
                <li>Jika tetap gagal, kunjungi KPP untuk verifikasi manual</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive" className="text-[10px]">Error</Badge>
              <h4 className="font-medium text-sm">Menu sertifikat elektronik tidak muncul</h4>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Penyebab:</strong> Profil belum lengkap atau browser tidak kompatibel.</p>
              <p><strong>Solusi:</strong></p>
              <ul className="list-disc list-inside ml-2 space-y-0.5">
                <li>Lengkapi Ikhtisar Profil Wajib Pajak terlebih dahulu</li>
                <li>Gunakan Chrome versi terbaru</li>
                <li>Coba akses via Portal Saya → Permintaan Kode Otorisasi/Sertifikat Elektronik</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Masalah e-Faktur */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="efaktur">
          3. Masalah e-Faktur
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive" className="text-[10px]">Error</Badge>
              <h4 className="font-medium text-sm">Gagal membuat/upload faktur pajak</h4>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Penyebab:</strong> NPWP pembeli tidak valid, sertifikat elektronik belum aktif, server overload.</p>
              <p><strong>Solusi:</strong></p>
              <ul className="list-disc list-inside ml-2 space-y-0.5">
                <li>Pastikan NPWP pembeli valid (16 digit)</li>
                <li>Periksa sertifikat elektronik sudah aktif</li>
                <li>Untuk upload massal, pastikan format CSV/XML sesuai template</li>
                <li>Coba di luar jam sibuk</li>
                <li>Gunakan e-Faktur Desktop sebagai fallback (KEP-54/PJ/2025)</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive" className="text-[10px]">Error</Badge>
              <h4 className="font-medium text-sm">PDF faktur tidak bisa di-download</h4>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Penyebab:</strong> Browser memblokir popup, atau server sedang sibuk.</p>
              <p><strong>Solusi:</strong></p>
              <ul className="list-disc list-inside ml-2 space-y-0.5">
                <li>Izinkan popup di browser untuk domain coretaxdjp.pajak.go.id</li>
                <li>Gunakan Chrome/Edge</li>
                <li>Coba kembali beberapa saat kemudian</li>
              </ul>
            </div>
          </div>
        </div>

        <PerhatianBlock type="info" title="Fallback e-Faktur Desktop" className="mt-3">
          <p>
            Per KEP-54/PJ/2025, seluruh PKP masih boleh menggunakan e-Faktur
            Desktop untuk membuat faktur dan faktur pengganti. Namun retur,
            pembatalan, dan pelaporan SPT Masa PPN tetap wajib melalui Coretax.
          </p>
        </PerhatianBlock>
      </section>

      {/* Masalah Impersonasi */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="impersonasi">
          4. Masalah Impersonasi (WP Badan)
        </h2>
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="destructive" className="text-[10px]">Error</Badge>
            <h4 className="font-medium text-sm">Tidak bisa impersonasi ke WP Badan</h4>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <p><strong>Penyebab:</strong> Data pengurus (direksi) belum ter-update, NIK pengurus belum di-padankan dengan NPWP, atau pengurus baru belum didaftarkan.</p>
            <p><strong>Solusi:</strong></p>
            <ul className="list-disc list-inside ml-2 space-y-0.5">
              <li>Pastikan NIK pengurus sudah dipadankan (matching) dengan NPWP</li>
              <li>Update data pengurus melalui perubahan data WP Badan di KPP</li>
              <li>Pastikan akta perubahan susunan pengurus sudah dilaporkan ke DJP</li>
              <li>Kunjungi KPP dengan membawa akta perusahaan dan KTP pengurus</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Masalah SPT */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="spt">
          5. Masalah SPT
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive" className="text-[10px]">Error</Badge>
              <h4 className="font-medium text-sm">Halaman SPT blank / tidak loading</h4>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Solusi:</strong> Hard refresh (Ctrl+Shift+R), bersihkan cache, coba Incognito mode, atau akses di luar jam sibuk.</p>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive" className="text-[10px]">Error</Badge>
              <h4 className="font-medium text-sm">Data prepopulated tidak muncul</h4>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Penyebab:</strong> Bukti potong/faktur belum di-approve, atau ada delay sinkronisasi data.</p>
              <p><strong>Solusi:</strong> Klik tombol &ldquo;Posting&rdquo; untuk memuat ulang data prepopulated. Pastikan semua bukti potong dan faktur sudah berstatus &ldquo;Approved&rdquo;.</p>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive" className="text-[10px]">Error</Badge>
              <h4 className="font-medium text-sm">Gagal submit SPT / tanda tangan digital error</h4>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Solusi:</strong> Pastikan sertifikat elektronik/kode otorisasi masih berlaku. Buat ulang jika expired. Periksa passphrase sudah benar (berbeda dengan password).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Masalah Billing/Pembayaran */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="billing">
          6. Masalah Billing & Pembayaran
        </h2>
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="destructive" className="text-[10px]">Error</Badge>
            <h4 className="font-medium text-sm">Tombol buat billing tidak muncul / error</h4>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <p><strong>Penyebab:</strong> Bug yang sudah diidentifikasi DJP dan diperbaiki secara bertahap.</p>
            <p><strong>Solusi:</strong></p>
            <ul className="list-disc list-inside ml-2 space-y-0.5">
              <li>Refresh halaman dan coba kembali</li>
              <li>Pastikan semua kolom wajib sudah diisi</li>
              <li>Coba gunakan browser berbeda</li>
              <li>Hubungi Kring Pajak 1500200 jika masih gagal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips Umum */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Tips Umum Troubleshooting</h2>
        <QuickReference
          title="Langkah Pertama Saat Error"
          items={[
            { label: "Browser", value: "Chrome/Edge versi terbaru" },
            { label: "Cache", value: "Bersihkan cache & cookies" },
            { label: "Mode", value: "Coba Incognito/Private" },
            { label: "Waktu", value: "Hindari jam 08.00-10.00 WIB" },
          ]}
          footer="Jika tetap gagal: Kring Pajak 1500200 atau KPP terdekat"
        />

        <div className="rounded-lg border p-4 mt-3">
          <h4 className="font-medium text-sm mb-2">Kontak Bantuan</h4>
          <div className="grid gap-2 sm:grid-cols-3 text-xs text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">Kring Pajak</p>
              <p>1500200</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Live Chat</p>
              <p>pajak.go.id (jam kerja)</p>
            </div>
            <div>
              <p className="font-medium text-foreground">KPP</p>
              <p>Kunjungi loket TPT terdekat</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPT Simulator */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">SPT Simulator (Latihan)</h2>
        <div className="rounded-lg border p-4 bg-primary/5 border-primary/20">
          <p className="text-sm">
            DJP menyediakan <strong>simulator SPT</strong> untuk berlatih
            mengisi SPT tanpa mempengaruhi data asli. Cocok untuk WP yang
            baru pertama kali menggunakan Coretax.
          </p>
          <a
            href="https://spt-simulasi.pajak.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
          >
            spt-simulasi.pajak.go.id →
          </a>
        </div>
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            { title: "Tutorial Login & Aktivasi", desc: "Langkah login dan aktivasi akun Coretax", href: "/coretax/tutorial" },
            { title: "e-Faktur Coretax", desc: "Panduan lengkap e-Faktur web-based", href: "/coretax/e-faktur" },
            { title: "Pelaporan SPT di Coretax", desc: "SPT Masa & Tahunan prepopulated", href: "/coretax/spt" },
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
        title="Ringkasan Troubleshooting"
        points={[
          "Selalu gunakan Chrome/Edge terbaru, bersihkan cache secara berkala",
          "Hindari jam sibuk 08.00-10.00 WIB untuk akses Coretax",
          "KEP-67/PJ/2025: relaksasi sanksi selama masa transisi Coretax",
          "e-Faktur Desktop masih bisa dipakai (fallback) per KEP-54/PJ/2025",
          "Masalah impersonasi biasanya karena data pengurus belum di-update",
          "Kring Pajak 1500200 dan KPP terdekat untuk bantuan langsung",
          "Gunakan spt-simulasi.pajak.go.id untuk berlatih isi SPT",
        ]}
      />
    </div>
  );
}
