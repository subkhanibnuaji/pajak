import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarClock, Download, ExternalLink, ShieldAlert } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Panduan Total Lapor SPT Tahunan Karyawan via Coretax DJP 2025",
  description:
    "Panduan end-to-end untuk karyawan TK/0 melaporkan SPT Tahunan PPh 2025 melalui Coretax DJP, dari aktivasi akun hingga BPE.",
};

const KIT_DOWNLOAD_PATH = "/materials/spt-tahunan-2025-kit.xlsx";

const TARIF_PROGRESIF = [
  { lapisan: "1", rentang: "Rp 0 - Rp 60.000.000", tarif: "5%" },
  { lapisan: "2", rentang: "Di atas Rp 60 juta - Rp 250.000.000", tarif: "15%" },
  { lapisan: "3", rentang: "Di atas Rp 250 juta - Rp 500.000.000", tarif: "25%" },
  { lapisan: "4", rentang: "Di atas Rp 500 juta - Rp 5.000.000.000", tarif: "30%" },
  { lapisan: "5", rentang: "Di atas Rp 5.000.000.000", tarif: "35%" },
];

const PTKP_ROWS = [
  { status: "TK/0", nilai: "Rp 54.000.000" },
  { status: "TK/1", nilai: "Rp 58.500.000" },
  { status: "TK/2", nilai: "Rp 63.000.000" },
  { status: "TK/3", nilai: "Rp 67.500.000" },
  { status: "K/0", nilai: "Rp 58.500.000" },
  { status: "K/1", nilai: "Rp 63.000.000" },
  { status: "K/2", nilai: "Rp 67.500.000" },
  { status: "K/3", nilai: "Rp 72.000.000" },
  { status: "K/I/0", nilai: "Rp 112.500.000" },
  { status: "K/I/1", nilai: "Rp 117.000.000" },
  { status: "K/I/2", nilai: "Rp 121.500.000" },
  { status: "K/I/3", nilai: "Rp 126.000.000" },
];

const TIMELINE = [
  { tanggal: "31 Januari 2026", kegiatan: "Deadline pemberi kerja terbitkan BPA1" },
  { tanggal: "Januari - Februari 2026", kegiatan: "Window terbaik untuk lapor SPT (server relatif stabil)" },
  { tanggal: "Sebelum submit SPT", kegiatan: "Lunasi kurang bayar (jika status tidak nihil)" },
  { tanggal: "31 Maret 2026", kegiatan: "Batas akhir lapor SPT Tahunan OP Tahun Pajak 2025" },
];

const TROUBLESHOOTING = [
  {
    masalah: "BPA1 tidak muncul",
    penyebab: "Belum diposting dari pihak pemotong atau sinkronisasi belum masuk.",
    solusi: "Klik Posting SPT, refresh Portal Saya > Dokumen Saya, lalu konfirmasi ke HR.",
  },
  {
    masalah: "OTP tidak diterima",
    penyebab: "Nomor tidak cocok, operator tidak didukung, atau pesan tertahan.",
    solusi: "Pastikan nomor sesuai data DJP, cek spam email, coba kirim ulang OTP.",
  },
  {
    masalah: "SPT jadi kurang bayar padahal seharusnya nihil",
    penyebab: "Status PTKP tidak sama dengan BPA1 atau data bupot belum lengkap.",
    solusi: "Cocokkan PTKP persis dengan BPA1, posting ulang SPT, dan review data kredit pajak.",
  },
  {
    masalah: "BPE belum masuk email",
    penyebab: "Delay notifikasi atau email filter.",
    solusi: "Ambil dari Portal Saya > Dokumen Saya dan simpan salinannya langsung.",
  },
];

const KESALAHAN_UMUM = [
  "Tidak lapor karena merasa pajak sudah dipotong perusahaan.",
  "Lupa klik tombol Posting SPT sebelum mengisi.",
  "Salah pilih status PTKP pada induk SPT.",
  "Lampiran harta tidak diisi sama sekali.",
  "Lapor pada minggu terakhir Maret saat trafik sistem tinggi.",
  "Tidak validasi data prepopulated dengan BPA1 final.",
  "Belum membuat Kode Otorisasi DJP sebelum submit.",
  "Tidak menyimpan BPE dan bukti pembayaran/NTPN.",
  "Tidak update harta dan utang per 31 Desember 2025.",
  "Tidak melaporkan penghasilan tambahan di luar gaji utama.",
];

export default function PanduanSPTKaryawanCoretax2025Page() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <Link
          href="/materi"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Materi & Riset
        </Link>

        <section className="mt-4 rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Panduan Lengkap</Badge>
            <Badge variant="outline">Tahun Pajak 2025</Badge>
            <Badge variant="secondary">Profil TK/0</Badge>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Panduan Total Lapor SPT Tahunan Karyawan via Coretax DJP 2025
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Panduan ini dirancang untuk satu skenario paling umum: karyawan swasta berstatus TK/0
            yang melaporkan SPT Tahunan PPh Tahun Pajak 2025 melalui Coretax DJP, dari aktivasi akun
            hingga BPE diterima. Fokus utama: minim error, minim revisi, dan selesai dalam satu sesi.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={KIT_DOWNLOAD_PATH}
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              <Download className="h-4 w-4" />
              Download SPT_Tahunan_2025_Kit.xlsx
            </a>
            <a
              href="https://coretaxdjp.pajak.go.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              <ExternalLink className="h-4 w-4" />
              Buka Portal Coretax
            </a>
          </div>
        </section>

        <section className="mt-6 grid gap-3 sm:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-primary">31 Maret 2026</p>
              <p className="text-xs text-muted-foreground">Deadline lapor SPT OP</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-primary">1 Formulir</p>
              <p className="text-xs text-muted-foreground">Form SPT universal di Coretax</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-primary">KO DJP</p>
              <p className="text-xs text-muted-foreground">Tanda tangan digital wajib</p>
            </CardContent>
          </Card>
        </section>

        <PerhatianBlock type="warning" title="Catatan Kritis Sebelum Mulai">
          <p>
            Jangan isi SPT sebelum BPA1 tersedia dan jangan lupa klik <strong>Posting SPT</strong>.
            Dua hal ini paling sering menyebabkan data kredit pajak tidak tertarik otomatis.
          </p>
          <p>
            Jika status SPT tidak nihil padahal Anda karyawan satu pemberi kerja, cek ulang PTKP
            dan kecocokan data pada BPA1.
          </p>
        </PerhatianBlock>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">1) Dasar Hukum Inti yang Dipakai</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>UU No. 7 Tahun 2021 (UU HPP) - tarif progresif Pasal 17.</li>
            <li>PMK No. 101/PMK.010/2016 - besaran PTKP (masih berlaku).</li>
            <li>PMK 81/2024 - ketentuan pelaksanaan administrasi perpajakan di Coretax.</li>
            <li>UU KUP Pasal 7 dan Pasal 9 - denda keterlambatan lapor dan bunga kurang bayar.</li>
          </ul>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-base font-semibold">Tarif Progresif PPh Pasal 17</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full min-w-[340px] text-left text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                      <th className="p-2">Lapisan</th>
                      <th className="p-2">PKP/Tahun</th>
                      <th className="p-2">Tarif</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TARIF_PROGRESIF.map((item) => (
                      <tr key={item.lapisan} className="border-b last:border-0">
                        <td className="p-2 font-medium">{item.lapisan}</td>
                        <td className="p-2 text-muted-foreground">{item.rentang}</td>
                        <td className="p-2 font-semibold">{item.tarif}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-base font-semibold">PTKP Referensi (PMK 101/2016)</h3>
              <div className="mt-3 max-h-72 overflow-auto">
                <table className="w-full min-w-[260px] text-left text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                      <th className="p-2">Status</th>
                      <th className="p-2">PTKP/Tahun</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PTKP_ROWS.map((row) => (
                      <tr key={row.status} className="border-b last:border-0">
                        <td className="p-2 font-medium">{row.status}</td>
                        <td className="p-2 text-muted-foreground">{row.nilai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">2) Checklist Persiapan Sebelum Login</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-semibold">Data Identitas & Akun</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  <li>1. NIK/NPWP valid dan sinkron.</li>
                  <li>2. Email aktif yang terdaftar di DJP.</li>
                  <li>3. Nomor HP aktif yang valid untuk OTP.</li>
                  <li>4. Perangkat dengan kamera untuk verifikasi wajah.</li>
                  <li>5. Kode Otorisasi DJP sudah berstatus VALID.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-semibold">Dokumen Pajak</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  <li>1. Bukti Potong A1 (BPA1) final dari pemberi kerja.</li>
                  <li>2. Daftar harta per 31 Desember 2025.</li>
                  <li>3. Daftar utang per 31 Desember 2025 (jika ada).</li>
                  <li>4. Bukti bayar/NTPN jika ada kurang bayar.</li>
                  <li>5. File kit XLSX untuk kontrol validasi input.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">3) Aktivasi Akun dan KO DJP</h2>
          <div className="mt-3 rounded-lg border bg-muted/20 p-4">
            <ol className="space-y-3 text-sm">
              <li>
                <strong>Langkah 1:</strong> Buka coretaxdjp.pajak.go.id, pilih Aktivasi Akun Wajib Pajak,
                masukkan NPWP, lalu verifikasi email/HP dan wajah.
              </li>
              <li>
                <strong>Langkah 2:</strong> Login dengan kredensial sementara dari email, ganti password,
                lalu login ulang untuk memastikan akun aktif.
              </li>
              <li>
                <strong>Langkah 3:</strong> Buat Kode Otorisasi DJP di Portal Saya dan pastikan status
                sertifikat digital berubah menjadi VALID.
              </li>
              <li>
                <strong>Langkah 4:</strong> Aktifkan 2FA agar akses akun lebih aman selama musim pelaporan.
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">4) Alur Isi SPT Karyawan di Coretax</h2>
          <div className="mt-3 grid gap-3">
            {[
              "Buat Konsep SPT Tahunan OP periode Januari - Desember 2025 dengan model Normal.",
              "Isi header: sumber penghasilan pekerjaan, metode pencatatan.",
              "Klik Posting SPT untuk menarik data bupot/BPA1 otomatis.",
              "Di induk SPT, pilih PTKP sesuai BPA1 (untuk contoh ini: TK/0).",
              "Isi lampiran harta minimal 1 item dan utang jika ada.",
              "Klik Bayar dan Lapor, tanda tangan menggunakan passphrase KO DJP, lalu simpan BPE.",
            ].map((step, index) => (
              <Card key={step}>
                <CardContent className="flex items-start gap-3 p-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {index + 1}
                  </div>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">5) Timeline Pelaporan Tahun Pajak 2025</h2>
          <div className="mt-3 overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="p-3">Tenggat</th>
                  <th className="p-3">Aktivitas</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE.map((row) => (
                  <tr key={row.tanggal} className="border-b last:border-0">
                    <td className="p-3 font-medium">{row.tanggal}</td>
                    <td className="p-3 text-muted-foreground">{row.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="border-amber-200 bg-amber-50/40 dark:border-amber-900 dark:bg-amber-950/20">
            <CardContent className="p-4">
              <h3 className="flex items-center gap-2 text-base font-semibold">
                <CalendarClock className="h-4 w-4 text-amber-600" />
                Sanksi Keterlambatan
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Denda terlambat lapor SPT OP: Rp 100.000.</li>
                <li>Bunga kurang bayar mengikuti KMK bulanan (tidak flat 2%).</li>
                <li>Kurang bayar wajib dilunasi sebelum submit final.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/40 dark:border-red-900 dark:bg-red-950/20">
            <CardContent className="p-4">
              <h3 className="flex items-center gap-2 text-base font-semibold">
                <ShieldAlert className="h-4 w-4 text-red-600" />
                Red Flags yang Harus Dicek
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Status PTKP berbeda antara BPA1 dan induk SPT.</li>
                <li>Data harta nol padahal memiliki saldo tabungan akhir tahun.</li>
                <li>SPT tetap menunggu pembayaran padahal NTPN sudah ada.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">6) Troubleshooting Paling Umum</h2>
          <div className="mt-3 overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="p-3">Masalah</th>
                  <th className="p-3">Penyebab</th>
                  <th className="p-3">Solusi cepat</th>
                </tr>
              </thead>
              <tbody>
                {TROUBLESHOOTING.map((row) => (
                  <tr key={row.masalah} className="border-b align-top last:border-0">
                    <td className="p-3 font-medium">{row.masalah}</td>
                    <td className="p-3 text-muted-foreground">{row.penyebab}</td>
                    <td className="p-3 text-muted-foreground">{row.solusi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">7) Sepuluh Kesalahan yang Paling Sering Terjadi</h2>
          <ol className="mt-3 grid gap-2 rounded-lg border bg-muted/20 p-4 text-sm text-muted-foreground">
            {KESALAHAN_UMUM.map((item) => (
              <li key={item} className="list-decimal list-inside">
                {item}
              </li>
            ))}
          </ol>
        </section>

        <RingkasanBlock
          title="Ringkasan Eksekusi Cepat"
          points={[
            "Aktivasi akun Coretax dan KO DJP secepat mungkin, jangan menunggu akhir Maret.",
            "Pastikan BPA1 final tersedia, lalu klik Posting SPT sebelum isi detail lain.",
            "Untuk profil TK/0 satu pemberi kerja, target normal adalah status SPT nihil.",
            "Isi lampiran harta minimal satu item agar SPT tidak dianggap tidak lengkap.",
            "Jika kurang bayar, lunasi dulu dan simpan NTPN sebelum submit final.",
            "Unduh BPE dan simpan minimal di dua lokasi penyimpanan.",
            "Gunakan workbook kit XLSX untuk kontrol checklist agar tidak ada langkah terlewat.",
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}
