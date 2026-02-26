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
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "PPh Pasal 25 — Angsuran Pajak Penghasilan Bulanan",
  description:
    "Panduan lengkap PPh Pasal 25: cara menghitung angsuran bulanan, kasus tertentu, pengurangan angsuran, dan batas waktu penyetoran.",
};

export default function PPh25Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "Pasal 25" },
        ]}
      />

      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">PPh Pasal 25</h1>
            <p className="mt-2 text-muted-foreground">
              PPh Pasal 25 adalah angsuran pajak penghasilan yang harus dibayar
              sendiri oleh Wajib Pajak setiap bulan dalam tahun pajak berjalan.
              Angsuran ini merupakan pembayaran di muka (kredit pajak) yang
              diperhitungkan terhadap PPh terutang pada akhir tahun.
            </p>
          </div>
          <Badge variant="secondary">Dasar</Badge>
        </div>

        <DasarHukumBadge
          items={[
            "UU No. 7/2021 (HPP) Pasal 25",
            "PMK-215/PMK.03/2018",
            "KEP-537/PJ./2000",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="Tujuan PPh 25">
        <p>
          Sistem angsuran bulanan PPh 25 bertujuan untuk meringankan beban Wajib
          Pajak agar tidak harus membayar pajak sekaligus pada akhir tahun.
          Dengan angsuran, penerimaan negara juga lebih merata sepanjang tahun.
        </p>
      </PerhatianBlock>

      {/* Perhitungan Umum */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="perhitungan">
          1. Cara Perhitungan Umum
        </h2>
        <div className="rounded-lg border p-4 bg-muted/30 mb-4">
          <h4 className="font-semibold text-sm mb-2">Formula Angsuran PPh 25</h4>
          <div className="space-y-1 text-sm font-mono">
            <p>PPh terutang tahun lalu (SPT Tahunan)</p>
            <p>(-) Kredit Pajak: PPh 21, 22, 23, 24</p>
            <p>(=) <strong>Dasar penghitungan angsuran</strong></p>
            <p>(÷) 12 bulan</p>
            <p>(=) <strong>Angsuran PPh 25 per bulan</strong></p>
          </div>
        </div>

        <PerhatianBlock type="tip" title="Kredit Pajak yang Dikurangkan">
          <p>
            Kredit pajak yang diperhitungkan adalah PPh yang telah dipotong/
            dipungut oleh pihak lain (PPh 21, 22, 23) dan PPh yang dibayar di
            luar negeri yang boleh dikreditkan (PPh 24). PPh 25 tahun sebelumnya{" "}
            <strong>tidak</strong> termasuk pengurang dalam formula ini.
          </p>
        </PerhatianBlock>
      </section>

      {/* Contoh */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="contoh">
          2. Contoh Perhitungan
        </h2>

        <CaseStudyBlock
          title="Angsuran PPh 25 — WP Badan"
          scenario="PT XYZ melaporkan SPT Tahunan 2024 dengan PPh terutang Rp600.000.000. Kredit pajak: PPh 22 Impor Rp120.000.000, PPh 23 Rp60.000.000."
          steps={[
            {
              label: "PPh terutang (SPT Tahunan 2024)",
              result: 600_000_000,
            },
            {
              label: "Kredit PPh 22 Impor",
              result: -120_000_000,
            },
            {
              label: "Kredit PPh 23",
              result: -60_000_000,
            },
            {
              label: "Dasar penghitungan angsuran",
              formula: "Rp600.000.000 − Rp120.000.000 − Rp60.000.000",
              result: 420_000_000,
            },
            {
              label: "Angsuran PPh 25 per bulan",
              formula: "Rp420.000.000 ÷ 12",
              result: 35_000_000,
            },
          ]}
          conclusion="PT XYZ wajib menyetor PPh 25 sebesar Rp35.000.000 per bulan, berlaku sejak masa pajak setelah batas waktu penyampaian SPT Tahunan 2024 (mulai Mei 2025) sampai dengan masa pajak yang sama tahun berikutnya."
          dasarHukum={["UU HPP Pasal 25", "PMK-215/PMK.03/2018"]}
        />
      </section>

      {/* Kasus Tertentu */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="kasus-tertentu">
          3. Penghitungan untuk Kasus Tertentu
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          Beberapa kondisi memerlukan penghitungan angsuran PPh 25 yang berbeda
          dari formula umum (KEP-537/PJ./2000):
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            <strong>WP baru:</strong> angsuran dihitung berdasarkan perkiraan
            penghasilan neto yang disetahunkan, dikurangi PTKP (untuk WP OP),
            dikalikan tarif Pasal 17, dibagi 12
          </li>
          <li>
            <strong>WP Bank/Sewa Guna Usaha/BUMN/BUMD:</strong> angsuran berdasarkan
            laporan keuangan triwulanan terakhir yang disetahunkan
          </li>
          <li>
            <strong>WP yang memperoleh penghasilan tidak teratur:</strong> penghasilan
            tidak teratur dikurangkan terlebih dahulu dari PPh terutang sebelum
            menghitung angsuran
          </li>
          <li>
            <strong>SPT Tahunan disampaikan lewat batas waktu:</strong> angsuran
            PPh 25 bulan-bulan sebelum SPT disampaikan tetap sama dengan angsuran
            bulan terakhir tahun sebelumnya
          </li>
        </ul>
      </section>

      {/* Quick Reference */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="penyetoran">
          4. Penyetoran & Pelaporan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Batas Waktu"
            items={[
              { label: "Setor", value: "Tgl 15 bulan berikut" },
              { label: "Lapor", value: "Tgl 20 bulan berikut" },
              { label: "Kode MAP", value: "411125 / 411126" },
              { label: "Kode Jenis Setoran", value: "100" },
            ]}
            footer="Melalui e-Billing / Coretax"
          />
          <QuickReference
            title="Sanksi Keterlambatan"
            items={[
              { label: "Telat setor", value: "Bunga 0,5-2,2%/bln" },
              { label: "Telat lapor", value: "Rp100.000 (OP)" },
              { label: "Telat lapor", value: "Rp1.000.000 (Badan)" },
              { label: "Dasar bunga", value: "Tarif referensi BI" },
            ]}
            footer="Pasal 9 ayat (2a) & Pasal 7 UU KUP"
          />
        </div>
      </section>

      {/* Pengurangan Angsuran */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pengurangan">
          5. Pengurangan Angsuran PPh 25
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          Wajib Pajak dapat mengajukan pengurangan besarnya angsuran PPh 25
          apabila dapat menunjukkan bahwa PPh yang akan terutang untuk tahun
          pajak berjalan kurang dari 75% PPh terutang tahun sebelumnya
          (PMK-215/PMK.03/2018).
        </p>

        <PerhatianBlock type="warning" title="Syarat Pengurangan Angsuran">
          <p>
            Permohonan diajukan secara tertulis kepada Kepala KPP paling lambat{" "}
            <strong>3 bulan setelah masa pajak</strong> yang diminta pengurangan.
            Harus dilampiri proyeksi laba rugi tahun berjalan. DJP dapat
            menolak jika syarat tidak terpenuhi.
          </p>
        </PerhatianBlock>
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            {
              title: "PPh Badan",
              description: "Tarif 22%, rekonsiliasi fiskal, dan kredit pajak",
              href: "/pph/badan",
            },
            {
              title: "Konsep Dasar PPh",
              description: "Subjek, objek, PKP, PTKP, dan tarif",
              href: "/pph/konsep-dasar",
            },
            {
              title: "Kalkulator PPh 25",
              description: "Hitung angsuran PPh 25 bulanan",
              href: "/kalkulator/pph-25",
            },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4 transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <RingkasanBlock
        title="Poin Penting PPh Pasal 25"
        points={[
          "Angsuran = (PPh terutang - kredit PPh 21/22/23/24) ÷ 12",
          "Berlaku sejak bulan setelah batas waktu penyampaian SPT Tahunan",
          "Setor paling lambat tanggal 15, lapor tanggal 20 bulan berikutnya",
          "WP baru: angsuran berdasarkan penghasilan neto disetahunkan",
          "Pengurangan angsuran bisa diajukan jika proyeksi PPh < 75% tahun lalu",
          "PPh 25 bersifat pembayaran di muka (kredit pajak) di SPT Tahunan",
          "Sanksi keterlambatan setor: bunga berdasarkan tarif referensi BI",
        ]}
      />
    </div>
  );
}
