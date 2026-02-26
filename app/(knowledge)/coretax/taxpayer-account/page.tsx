import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { QuickReference } from "@/components/pajak/quick-reference";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Taxpayer Account Management — Coretax DJP",
  description:
    "Panduan Taxpayer Account Management (TAM) di Coretax: profil wajib pajak, deposit pajak, buku besar, notifikasi, dan manajemen akses.",
};

export default function TaxpayerAccountPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Coretax DJP", href: "/coretax" },
          { label: "Taxpayer Account" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">Taxpayer Account Management</h1>
        <p className="mt-2 text-muted-foreground">
          Taxpayer Account Management (TAM) adalah fitur inti Coretax yang
          menyediakan <strong>dashboard lengkap</strong> untuk setiap wajib
          pajak — mulai dari profil, riwayat transaksi, saldo deposit,
          hingga buku besar pajak.
        </p>
        <DasarHukumBadge
          items={["PMK 81/2024", "PER-1/PJ/2025"]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="Ikhtisar Profil Wajib Pajak">
        <p>
          Saat login pertama kali ke Coretax, Anda akan diminta melengkapi
          <strong> Ikhtisar Profil Wajib Pajak</strong>. Ini mencakup data
          identitas, alamat, kegiatan usaha, dan informasi perpajakan.
          Pastikan data ini lengkap agar seluruh fitur Coretax bisa diakses.
        </p>
      </PerhatianBlock>

      {/* Menu Portal Saya */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Menu Portal Saya</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Portal Saya adalah dashboard utama yang berisi 12 sub-menu untuk
          mengelola akun dan informasi perpajakan.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { title: "Profil Saya", desc: "Data identitas, alamat, NPWP, status WP, KLU" },
            { title: "Dokumen Saya", desc: "Arsip semua dokumen pajak (SPT, billing, SKP, dll.)" },
            { title: "Notifikasi Saya", desc: "Peringatan deadline, status dokumen, info penting" },
            { title: "Kasus Saya", desc: "Daftar pemeriksaan, keberatan, atau permohonan" },
            { title: "Kasus Berjalan", desc: "Tracking status kasus yang sedang diproses" },
            { title: "Sertifikat Elektronik", desc: "Permintaan dan manajemen sertifikat/kode otorisasi" },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border p-3">
              <h4 className="font-medium text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Buku Besar WP */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Buku Besar Wajib Pajak (Taxpayer Ledger)</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Fitur baru yang sangat berguna — Coretax menyediakan{" "}
          <strong>buku besar (ledger)</strong> yang mencatat seluruh riwayat
          debit dan kredit pajak secara otomatis.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Apa yang Tercatat?"
            items={[
              { label: "Debit", value: "Pajak terutang dari SPT/SKP" },
              { label: "Kredit", value: "Pembayaran, deposit, Pbk masuk" },
              { label: "Saldo", value: "Otomatis dihitung real-time" },
              { label: "Riwayat", value: "Lengkap per jenis pajak & masa" },
            ]}
          />
          <QuickReference
            title="Manfaat Buku Besar"
            items={[
              { label: "Transparansi", value: "WP bisa lihat posisi pajak" },
              { label: "Rekonsiliasi", value: "Mudah cek kesesuaian data" },
              { label: "Monitoring", value: "Pantau tunggakan real-time" },
              { label: "Dispute", value: "Dasar verifikasi jika ada selisih" },
            ]}
          />
        </div>
      </section>

      {/* Manajemen Akses */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Manajemen Akses (Role-Based)</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Coretax menggunakan sistem role-based access control. Untuk WP
          Badan, akses dibedakan berdasarkan peran:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-2 font-medium">Role</th>
                <th className="text-left p-2 font-medium">Hak Akses</th>
                <th className="text-left p-2 font-medium">Contoh</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {[
                { role: "Penanggung Jawab", akses: "Full access — buat, edit, approve, submit", contoh: "Direktur utama" },
                { role: "Drafter", akses: "Buat draft faktur/bupot/SPT, tidak bisa submit", contoh: "Staff pajak" },
                { role: "Signer", akses: "Review dan approve/submit dokumen draft", contoh: "Finance manager" },
                { role: "Kuasa", akses: "Sesuai scope yang dikuasakan", contoh: "Konsultan pajak" },
              ].map((row) => (
                <tr key={row.role} className="border-b">
                  <td className="p-2 font-medium">{row.role}</td>
                  <td className="p-2 text-muted-foreground">{row.akses}</td>
                  <td className="p-2">{row.contoh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <PerhatianBlock type="tip" title="Drafter & Signer Terpisah" className="mt-3">
          <p>
            Di Coretax, role <strong>Drafter</strong> dan <strong>Signer</strong>{" "}
            diatur terpisah untuk e-Bupot PPh 21/26 dan e-Bupot Unifikasi.
            Pastikan kedua role sudah dikonfigurasi di menu Manajemen Akses.
          </p>
        </PerhatianBlock>
      </section>

      {/* Sertifikat Elektronik */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Sertifikat Elektronik & Kode Otorisasi</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Coretax menggunakan <strong>Kode Otorisasi DJP</strong> atau{" "}
          <strong>Sertifikat Elektronik</strong> sebagai tanda tangan digital
          untuk seluruh dokumen perpajakan.
        </p>
        <div className="rounded-lg border p-4 bg-muted/20">
          <h4 className="font-semibold text-sm mb-2">Cara Membuat Sertifikat Elektronik</h4>
          <div className="space-y-2 text-sm">
            <p><strong>1.</strong> Login Coretax → Portal Saya → Permintaan Kode Otorisasi/Sertifikat Elektronik</p>
            <p><strong>2.</strong> Pilih jenis sertifikat dan isi data yang diminta</p>
            <p><strong>3.</strong> Buat <strong>passphrase</strong> (berbeda dengan password login!)</p>
            <p><strong>4.</strong> Lakukan verifikasi wajah (face matching) melalui kamera</p>
            <p><strong>5.</strong> Sertifikat aktif dan siap digunakan untuk tanda tangan digital</p>
          </div>
        </div>

        <PerhatianBlock type="warning" title="Passphrase ≠ Password" className="mt-3">
          <p>
            <strong>Passphrase</strong> untuk sertifikat elektronik berbeda
            dengan <strong>password</strong> login Coretax. Simpan keduanya
            dengan aman. Passphrase digunakan saat submit SPT, approval faktur,
            dan penandatanganan dokumen pajak lainnya.
          </p>
        </PerhatianBlock>
      </section>

      {/* NIK sebagai NPWP */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">NIK sebagai NPWP</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Sesuai UU HPP, NIK (16 digit) berfungsi sebagai NPWP untuk WP
          Orang Pribadi. Coretax sepenuhnya mendukung hal ini.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="WP Orang Pribadi"
            items={[
              { label: "Login", value: "NIK (16 digit)" },
              { label: "NPWP", value: "NIK = NPWP" },
              { label: "Format lama", value: "15 digit (masih valid sebagai ID)" },
              { label: "Padanan", value: "NIK harus di-matching di Dukcapil" },
            ]}
          />
          <QuickReference
            title="WP Badan"
            items={[
              { label: "Login", value: "NIK pengurus/direktur" },
              { label: "NPWP Badan", value: "0 + NPWP 15 digit lama" },
              { label: "Impersonasi", value: "Switch ke akun Badan" },
              { label: "Syarat", value: "NIK pengurus sudah matching" },
            ]}
          />
        </div>
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            { title: "Tutorial Login & Aktivasi", desc: "Cara login, aktivasi akun, reset password", href: "/coretax/tutorial" },
            { title: "NPWP & PKP (KUP)", desc: "Ketentuan NPWP, NIK=NPWP, PKP per UU HPP", href: "/kup/npwp" },
            { title: "Troubleshooting Coretax", desc: "Solusi masalah umum face validation, impersonasi", href: "/coretax/troubleshooting" },
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
        title="Poin Penting Taxpayer Account"
        points={[
          "Portal Saya: dashboard lengkap dengan 12 sub-menu pengelolaan",
          "Buku Besar WP: catatan debit-kredit pajak real-time (transparansi)",
          "Role-based access: Drafter, Signer, Penanggung Jawab, Kuasa",
          "Sertifikat elektronik + passphrase untuk tanda tangan digital",
          "NIK = NPWP untuk WP OP (login dengan NIK 16 digit)",
          "WP Badan login via NIK pengurus + fitur impersonasi",
          "Ikhtisar Profil harus dilengkapi saat login pertama kali",
        ]}
      />
    </div>
  );
}
