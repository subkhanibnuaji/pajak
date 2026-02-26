import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { QuickReference } from "@/components/pajak/quick-reference";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Coretax DJP — Sistem Inti Administrasi Perpajakan",
  description:
    "Panduan lengkap Coretax DJP (SIAP): tutorial login, e-Faktur web, pelaporan SPT, pembayaran pajak, dan troubleshooting.",
};

const CORETAX_SECTIONS = [
  {
    title: "Tutorial Login & Aktivasi",
    description: "Cara login pertama kali, aktivasi akun, reset password, dan navigasi dashboard",
    href: "/coretax/tutorial",
    difficulty: "dasar" as const,
    badge: "Mulai di sini",
  },
  {
    title: "Taxpayer Account",
    description: "Dashboard WP, profil, deposit pajak, kuasa/wakil, dan notifikasi",
    href: "/coretax/taxpayer-account",
    difficulty: "dasar" as const,
  },
  {
    title: "e-Faktur Web-Based",
    description: "Buat faktur pajak keluaran, kelola masukan, NSFP otomatis, upload massal",
    href: "/coretax/e-faktur",
    difficulty: "menengah" as const,
    badge: "Penting",
  },
  {
    title: "Pelaporan SPT",
    description: "SPT Masa PPN (prepopulated), SPT Masa PPh, SPT Tahunan melalui Coretax",
    href: "/coretax/spt",
    difficulty: "menengah" as const,
  },
  {
    title: "Pembayaran & Billing",
    description: "Buat kode billing, deposit pajak, pemindahbukuan, rekonsiliasi",
    href: "/coretax/pembayaran",
    difficulty: "dasar" as const,
  },
  {
    title: "Troubleshooting",
    description: "Solusi masalah umum: error login, gagal upload faktur, SPT tertolak",
    href: "/coretax/troubleshooting",
    difficulty: "dasar" as const,
  },
];

const DIFFICULTY_BADGE = {
  dasar: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  menengah: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  lanjutan: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

const SISTEM_LAMA = [
  { nama: "DJP Online", fungsi: "Portal layanan pajak", pengganti: "Coretax Portal" },
  { nama: "e-Faktur Desktop 3.x/4.0", fungsi: "Buat faktur pajak", pengganti: "e-Faktur Web Coretax" },
  { nama: "e-Nofa", fungsi: "Minta NSFP", pengganti: "NSFP otomatis di Coretax" },
  { nama: "e-SPT", fungsi: "Pelaporan SPT", pengganti: "e-Filing Coretax" },
  { nama: "e-Filing", fungsi: "Kirim SPT online", pengganti: "e-Filing Coretax" },
  { nama: "e-Billing (SSE3)", fungsi: "Buat kode billing", pengganti: "Billing Coretax" },
  { nama: "e-Registration", fungsi: "Daftar NPWP", pengganti: "Registration Coretax" },
];

export default function CoretaxPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Coretax DJP" }]} />

      <div className="mt-6">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl font-bold">Coretax DJP</h1>
          <Badge className="bg-primary text-primary-foreground">Aktif 2025</Badge>
        </div>
        <p className="mt-2 text-muted-foreground">
          <strong>Coretax DJP</strong> (Core Tax Administration System) atau{" "}
          <strong>SIAP</strong> (Sistem Inti Administrasi Perpajakan) adalah
          sistem administrasi perpajakan terpadu yang menggantikan seluruh
          sistem lama DJP. Berlaku secara nasional sejak{" "}
          <strong>1 Januari 2025</strong>.
        </p>

        <DasarHukumBadge
          items={[
            "PP 44/2024",
            "PMK 81/2024",
            "PMK 136/2025",
            "KEP-67/PJ/2025",
            "PER-1/PJ/2025",
          ]}
          className="mt-4"
        />

        <a
          href="https://coretaxdjp.pajak.go.id"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          Akses Coretax DJP →
          <span className="text-xs text-muted-foreground">coretaxdjp.pajak.go.id</span>
        </a>
      </div>

      <PerhatianBlock type="warning" title="Perubahan Besar Sistem Pajak">
        <p>
          Coretax menggantikan <strong>semua</strong> sistem lama DJP (DJP
          Online, e-Faktur Desktop, e-Nofa, e-Filing, e-Billing, dll). Wajib
          pajak <strong>wajib</strong> menggunakan Coretax untuk seluruh
          kewajiban perpajakan. Pastikan akun Anda sudah aktif dan terverifikasi.
        </p>
      </PerhatianBlock>

      {/* Apa itu Coretax */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Apa itu Coretax?</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          Coretax adalah reformasi total sistem administrasi perpajakan Indonesia.
          Proyek ini dimulai sejak 2018 dan resmi go-live pada 1 Januari 2025.
          Coretax mengintegrasikan seluruh layanan perpajakan dalam satu
          platform terpadu berbasis web — mulai dari pendaftaran NPWP, penerbitan
          faktur pajak, pelaporan SPT, hingga pembayaran.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Informasi Umum"
            items={[
              { label: "Nama resmi", value: "SIAP (Sistem Inti Administrasi Perpajakan)" },
              { label: "URL", value: "coretaxdjp.pajak.go.id" },
              { label: "Go-live", value: "1 Januari 2025" },
              { label: "Payung hukum", value: "PP 44/2024, PMK 81/2024" },
            ]}
          />
          <QuickReference
            title="Login"
            items={[
              { label: "WP OP", value: "NIK (16 digit)" },
              { label: "WP Badan", value: "NPWP 16 digit (0 + NPWP lama)" },
              { label: "Password", value: "Password DJP Online" },
              { label: "Bantuan", value: "Kring Pajak 1500200" },
            ]}
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Timeline Coretax</h2>
        <div className="relative border-l-2 border-primary/30 ml-3">
          {[
            { year: "2018", text: "Kontrak pengembangan SIAP ditandatangani" },
            { year: "2019–2023", text: "Pengembangan dan pengujian sistem" },
            { year: "Jul 2024", text: "Piloting terbatas dengan WP tertentu" },
            { year: "Okt 2024", text: "PMK 81/2024 diterbitkan sebagai payung hukum" },
            { year: "Nov 2024", text: "Sosialisasi intensif dan simulasi nasional" },
            { year: "Jan 2025", text: "Go-live Coretax DJP secara nasional" },
            { year: "Mar 2025", text: "PMK 136/2025 (penyempurnaan PMK 81/2024)" },
          ].map((item) => (
            <div key={item.year} className="relative pl-6 pb-4 last:pb-0">
              <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary" />
              <p className="text-xs font-semibold text-primary">{item.year}</p>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sistem yang Digantikan */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Sistem yang Digantikan</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-2 font-medium">Sistem Lama</th>
                <th className="text-left p-2 font-medium">Fungsi</th>
                <th className="text-left p-2 font-medium">Digantikan Oleh</th>
              </tr>
            </thead>
            <tbody>
              {SISTEM_LAMA.map((item) => (
                <tr key={item.nama} className="border-b">
                  <td className="p-2 font-mono text-xs">{item.nama}</td>
                  <td className="p-2 text-muted-foreground">{item.fungsi}</td>
                  <td className="p-2">
                    <Badge variant="outline" className="text-[10px]">
                      {item.pengganti}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Modul Utama */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Modul Utama Coretax</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { title: "Taxpayer Account", desc: "Dashboard, profil, deposit, notifikasi" },
            { title: "e-Registration", desc: "NPWP baru, aktivasi NIK, PKP" },
            { title: "e-Faktur Web", desc: "Faktur pajak keluaran/masukan berbasis web" },
            { title: "e-Bupot", desc: "Bukti potong PPh unifikasi" },
            { title: "e-Filing", desc: "Pelaporan SPT Masa & Tahunan" },
            { title: "e-Billing", desc: "Kode billing & pembayaran pajak" },
          ].map((m) => (
            <div key={m.title} className="rounded-lg border p-3 bg-muted/20">
              <h4 className="font-medium text-sm">{m.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Topik */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Panduan Coretax</h2>
      <div className="grid gap-3">
        {CORETAX_SECTIONS.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-medium text-sm">{section.title}</h3>
                    <Badge
                      variant="outline"
                      className={`text-[10px] ${DIFFICULTY_BADGE[section.difficulty]}`}
                    >
                      {section.difficulty}
                    </Badge>
                    {section.badge && (
                      <Badge variant="secondary" className="text-[10px]">
                        {section.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {section.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4 transition-transform group-hover:translate-x-1" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <RingkasanBlock
        title="Poin Penting Coretax"
        points={[
          "Coretax DJP berlaku sejak 1 Januari 2025, menggantikan SEMUA sistem lama DJP",
          "Login menggunakan NIK (WP OP) atau NPWP 16 digit (WP Badan)",
          "e-Faktur Desktop sudah tidak digunakan — semua faktur via web Coretax",
          "NSFP otomatis — tidak perlu lagi minta jatah melalui e-Nofa",
          "SPT Masa PPN bersifat prepopulated dari data faktur pajak",
          "Bukti potong PPh unifikasi melalui e-Bupot Coretax",
          "Payung hukum utama: PP 44/2024 dan PMK 81/2024",
          "Bantuan: Kring Pajak 1500200, pajak.go.id, atau KPP terdekat",
        ]}
      />
    </div>
  );
}
