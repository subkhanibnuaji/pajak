import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tutorial Login & Aktivasi Coretax DJP",
  description:
    "Panduan langkah demi langkah login, aktivasi akun, reset password, dan navigasi dashboard Coretax DJP.",
};

export default function CoretaxTutorialPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Coretax DJP", href: "/coretax" },
          { label: "Tutorial Login & Aktivasi" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">Tutorial Login & Aktivasi Coretax</h1>
        <p className="mt-2 text-muted-foreground">
          Panduan lengkap untuk masuk ke Coretax DJP pertama kali, aktivasi
          akun, reset password, dan memahami navigasi dashboard.
        </p>
        <DasarHukumBadge
          items={["PMK 81/2024", "PER-1/PJ/2025"]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="Sebelum Memulai">
        <p>
          Pastikan Anda memiliki: (1) NIK/KTP yang valid dan terdaftar di
          Dukcapil, (2) NPWP yang sudah terdaftar di DJP, (3) Email aktif
          yang terdaftar di data DJP, (4) Nomor HP aktif yang terdaftar.
        </p>
      </PerhatianBlock>

      {/* Login WP OP */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">1. Login Wajib Pajak Orang Pribadi</h2>
        <div className="rounded-lg border p-4 bg-muted/20">
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
              <div>
                <p className="font-medium">Buka coretaxdjp.pajak.go.id</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Gunakan browser Chrome atau Edge versi terbaru untuk pengalaman terbaik.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
              <div>
                <p className="font-medium">Klik tombol &ldquo;Login&rdquo;</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Pilih &ldquo;Wajib Pajak&rdquo; (bukan &ldquo;Wakil/Kuasa&rdquo;).
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
              <div>
                <p className="font-medium">Masukkan NIK (16 digit)</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Untuk WP Orang Pribadi, gunakan NIK KTP sebagai username.
                  NIK berfungsi sebagai NPWP sesuai UU HPP.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">4</span>
              <div>
                <p className="font-medium">Masukkan password</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Gunakan password yang sama dengan DJP Online. Jika lupa, klik
                  &ldquo;Lupa Password&rdquo; untuk reset melalui email.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">5</span>
              <div>
                <p className="font-medium">Selesaikan CAPTCHA & klik Login</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Setelah berhasil login, Anda akan masuk ke Dashboard Coretax.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Login WP Badan */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">2. Login Wajib Pajak Badan</h2>
        <div className="rounded-lg border p-4 bg-muted/20">
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
              <div>
                <p className="font-medium">Login menggunakan NIK Pengurus/Direktur</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  WP Badan login menggunakan NIK pengurus (direktur/komisaris)
                  yang terdaftar sebagai penanggung jawab di data DJP.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
              <div>
                <p className="font-medium">Pilih &ldquo;Impersonasi&rdquo; ke WP Badan</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Setelah login, pilih menu impersonasi lalu pilih entitas
                  badan yang ingin dikelola. Satu pengurus bisa mengelola
                  beberapa entitas badan.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
              <div>
                <p className="font-medium">Akses dashboard WP Badan</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Setelah impersonasi berhasil, Anda bisa mengakses seluruh
                  layanan atas nama WP Badan tersebut.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <PerhatianBlock type="warning" title="NPWP 16 Digit untuk Badan" className="mt-3">
          <p>
            NPWP 16 digit WP Badan = <strong>0 + NPWP 15 digit lama</strong>.
            Contoh: NPWP lama 01.234.567.8-901.000 → NPWP 16 digit:
            0012345678901000.
          </p>
        </PerhatianBlock>
      </section>

      {/* Aktivasi Akun */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">3. Aktivasi Akun Baru</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Jika Anda belum pernah login ke DJP Online atau Coretax, perlu
          melakukan aktivasi akun terlebih dahulu.
        </p>
        <div className="rounded-lg border p-4 bg-muted/20">
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
              <div>
                <p className="font-medium">Klik &ldquo;Belum Punya Akun?&rdquo;</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Di halaman login Coretax, klik tautan aktivasi akun.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
              <div>
                <p className="font-medium">Masukkan NIK dan data verifikasi</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Input NIK, email, dan nomor HP yang terdaftar di DJP.
                  Sistem akan mengirim OTP ke email/HP.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
              <div>
                <p className="font-medium">Verifikasi OTP</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Masukkan kode OTP yang dikirim. OTP berlaku 5 menit.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">4</span>
              <div>
                <p className="font-medium">Buat password baru</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Password minimal 8 karakter, kombinasi huruf besar, kecil,
                  angka, dan karakter spesial.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">5</span>
              <div>
                <p className="font-medium">Verifikasi identitas (face matching)</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Coretax menggunakan verifikasi biometrik wajah yang
                  dicocokkan dengan data Dukcapil. Pastikan pencahayaan cukup.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Reset Password */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">4. Reset Password</h2>
        <div className="rounded-lg border p-4 bg-muted/20 space-y-2 text-sm">
          <p>
            <strong>Langkah 1:</strong> Klik &ldquo;Lupa Password&rdquo; di
            halaman login Coretax.
          </p>
          <p>
            <strong>Langkah 2:</strong> Masukkan NIK/NPWP 16 digit dan email
            terdaftar.
          </p>
          <p>
            <strong>Langkah 3:</strong> Cek email untuk link reset password
            (berlaku 24 jam).
          </p>
          <p>
            <strong>Langkah 4:</strong> Buat password baru dan login kembali.
          </p>
        </div>

        <PerhatianBlock type="tip" title="Email Tidak Terdaftar?" className="mt-3">
          <p>
            Jika email tidak terdaftar atau tidak bisa diakses, kunjungi KPP
            terdekat dengan membawa KTP asli dan NPWP untuk update data email.
            Proses dapat dilakukan di loket TPT (Tempat Pelayanan Terpadu).
          </p>
        </PerhatianBlock>
      </section>

      {/* Navigasi Dashboard */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">5. Navigasi Dashboard</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Setelah berhasil login, Anda akan melihat dashboard utama dengan
          beberapa menu penting:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { title: "Portal Saya", desc: "Ringkasan profil, NPWP, alamat, dan status WP" },
            { title: "e-Faktur", desc: "Buat/kelola faktur pajak keluaran dan masukan" },
            { title: "e-Bupot", desc: "Buat bukti potong PPh (21, 23, 26, 4(2))" },
            { title: "SPT", desc: "Pelaporan SPT Masa dan Tahunan" },
            { title: "Pembayaran", desc: "Buat billing, deposit, pemindahbukuan" },
            { title: "Layanan", desc: "Permohonan, surat keterangan, konfirmasi status" },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border p-3">
              <h4 className="font-medium text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Penunjukan Kuasa */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">6. Penunjukan Kuasa/Wakil</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Coretax mendukung fitur penunjukan kuasa (konsultan pajak) atau
          wakil untuk mengelola kewajiban pajak atas nama WP.
        </p>
        <div className="rounded-lg border p-4 bg-muted/20 space-y-2 text-sm">
          <p>
            <strong>Menu:</strong> Portal Saya → Manajemen Akses → Tambah
            Kuasa/Wakil
          </p>
          <p>
            <strong>Data yang dibutuhkan:</strong> NPWP/NIK kuasa, jenis
            kewajiban yang dikuasakan, periode kuasa.
          </p>
          <p>
            <strong>Persetujuan:</strong> Kuasa harus menyetujui penunjukan
            melalui akun Coretax-nya sendiri.
          </p>
        </div>
      </section>

      {/* Link ke halaman lain */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Lanjut Belajar</h2>
        <div className="grid gap-3">
          {[
            { title: "e-Faktur Web-Based", desc: "Cara membuat faktur pajak di Coretax", href: "/coretax/e-faktur" },
            { title: "Pelaporan SPT di Coretax", desc: "SPT Masa & Tahunan prepopulated", href: "/coretax/spt" },
            { title: "Troubleshooting", desc: "Solusi masalah umum Coretax", href: "/coretax/troubleshooting" },
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
        title="Ringkasan Login Coretax"
        points={[
          "WP OP login dengan NIK (16 digit), WP Badan via NIK pengurus + impersonasi",
          "Password = password DJP Online yang sudah ada",
          "NPWP 16 digit Badan = 0 + NPWP 15 digit lama",
          "Aktivasi akun baru memerlukan verifikasi face matching",
          "Reset password melalui email terdaftar di DJP",
          "Fitur kuasa/wakil tersedia untuk konsultan pajak",
          "Gunakan Chrome/Edge terbaru untuk kompatibilitas terbaik",
        ]}
      />
    </div>
  );
}
