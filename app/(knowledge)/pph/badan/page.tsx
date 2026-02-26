import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { QuickReference } from "@/components/pajak/quick-reference";
import { TarifTable } from "@/components/pajak/tarif-table";
import { CaseStudyBlock } from "@/components/pajak/case-study-block";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "PPh Badan — Tarif, Fasilitas & Rekonsiliasi Fiskal",
  description:
    "Panduan lengkap PPh Badan: tarif 22%, fasilitas Pasal 31E, rekonsiliasi fiskal (koreksi positif & negatif), kredit pajak, dan contoh perhitungan.",
};

export default function PPhBadanPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "PPh Badan" },
        ]}
      />

      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">PPh Badan</h1>
            <p className="mt-2 text-muted-foreground">
              PPh Badan adalah pajak penghasilan yang dikenakan atas penghasilan
              neto (laba fiskal) badan usaha yang didirikan atau berkedudukan di
              Indonesia. Tarif umum PPh Badan berdasarkan UU HPP adalah{" "}
              <strong>22%</strong>.
            </p>
          </div>
          <Badge variant="secondary">Lanjutan</Badge>
        </div>

        <DasarHukumBadge
          items={[
            "UU No. 7/2021 (HPP) Pasal 17(1)b",
            "UU No. 7/2021 (HPP) Pasal 31E",
            "PP 55/2022",
            "PP 30/2020",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="Tarif PPh Badan Tetap 22%">
        <p>
          UU HPP menetapkan tarif PPh Badan sebesar <strong>22%</strong> mulai
          tahun pajak 2022 dan seterusnya. Rencana penurunan tarif menjadi 20%
          yang semula diatur dalam UU Cipta Kerja <strong>dibatalkan</strong>.
        </p>
      </PerhatianBlock>

      {/* Tarif */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="tarif">
          1. Tarif PPh Badan
        </h2>
        <TarifTable
          title="Tarif PPh Badan"
          dasarHukum="UU No. 7 Tahun 2021 (UU HPP)"
          data={[
            {
              range: "Badan usaha umum",
              rate: "22%",
              note: "Tarif tetap sejak 2022",
            },
            {
              range: "Go Public (saham diperdagangkan ≥ 40% di BEI)",
              rate: "19%",
              note: "Diskon 3% (PP 30/2020)",
            },
            {
              range: "UMKM (omzet ≤ Rp4,8M)",
              rate: "0,5%",
              note: "Final, maks 4 tahun (PP 55/2022)",
            },
            {
              range: "Fasilitas Pasal 31E (omzet ≤ Rp50M)",
              rate: "11%",
              note: "50% × 22% untuk PKP ≤ Rp4,8M",
            },
          ]}
        />
      </section>

      {/* Fasilitas Pasal 31E */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pasal-31e">
          2. Fasilitas Pasal 31E
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          WP Badan dengan peredaran bruto sampai dengan Rp50 miliar mendapat
          fasilitas pengurangan tarif sebesar 50% dari tarif normal (22%) atas
          bagian PKP yang sebanding dengan peredaran bruto sampai Rp4,8 miliar.
          Fasilitas ini berlaku otomatis tanpa perlu pengajuan.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <QuickReference
            title="Syarat Pasal 31E"
            items={[
              { label: "Batas omzet", value: "≤ Rp50 miliar" },
              { label: "Bagian mendapat fasilitas", value: "Rp4,8M / Omzet × PKP" },
              { label: "Tarif fasilitas", value: "50% × 22% = 11%" },
              { label: "Sisanya", value: "Tarif normal 22%" },
            ]}
            footer="Berlaku otomatis tanpa permohonan"
          />
          <QuickReference
            title="Jika Omzet ≤ Rp4,8 Miliar"
            items={[
              { label: "Seluruh PKP", value: "Mendapat fasilitas" },
              { label: "Tarif efektif", value: "11%" },
              { label: "Atau pilih", value: "PPh Final 0,5%" },
              { label: "Mana lebih hemat?", value: "Tergantung margin" },
            ]}
            footer="Perlu simulasi untuk membandingkan"
          />
        </div>

        <CaseStudyBlock
          title="Perhitungan Pasal 31E"
          scenario="PT Maju Terus memiliki peredaran bruto Rp30 miliar dan PKP (laba fiskal) Rp3 miliar."
          steps={[
            {
              label: "PKP mendapat fasilitas",
              formula: "(Rp4,8M ÷ Rp30M) × Rp3M",
              result: 480_000_000,
            },
            {
              label: "PKP tidak mendapat fasilitas",
              formula: "Rp3M − Rp480.000.000",
              result: 2_520_000_000,
            },
            {
              label: "PPh atas PKP fasilitas (50% × 22%)",
              formula: "11% × Rp480.000.000",
              result: 52_800_000,
            },
            {
              label: "PPh atas PKP non-fasilitas (22%)",
              formula: "22% × Rp2.520.000.000",
              result: 554_400_000,
            },
            {
              label: "Total PPh Badan terutang",
              formula: "Rp52.800.000 + Rp554.400.000",
              result: 607_200_000,
            },
          ]}
          conclusion="Tarif efektif PPh Badan PT Maju Terus: Rp607.200.000 ÷ Rp3.000.000.000 = 20,24%. Fasilitas Pasal 31E menghemat pajak dibandingkan tarif penuh 22%."
          dasarHukum={["UU HPP Pasal 31E", "SE-66/PJ/2010"]}
        />
      </section>

      {/* UMKM */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="umkm">
          3. PPh Final UMKM (PP 55/2022)
        </h2>
        <PerhatianBlock type="tip" title="Batas Waktu Penggunaan PPh Final 0,5%">
          <p>
            WP Badan UMKM dengan omzet ≤ Rp4,8 miliar/tahun dapat menggunakan
            PPh Final 0,5% dengan batasan waktu: <strong>PT</strong> maksimal{" "}
            <strong>3 tahun</strong>, <strong>CV/Firma/Koperasi</strong>{" "}
            maksimal <strong>4 tahun</strong> pajak. Setelah habis, wajib
            menggunakan tarif umum Pasal 17 (dengan/tanpa fasilitas 31E).
            WP OP UMKM: omzet s.d. Rp500 juta/tahun tidak dikenai pajak.
          </p>
        </PerhatianBlock>
      </section>

      {/* Rekonsiliasi Fiskal */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="rekonsiliasi">
          4. Rekonsiliasi Fiskal
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          Rekonsiliasi fiskal adalah proses penyesuaian dari laba komersial
          (akuntansi) menjadi laba fiskal (perpajakan). Perbedaan antara
          ketentuan akuntansi dan perpajakan memerlukan koreksi positif dan
          negatif.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Koreksi Fiskal Positif"
            items={[
              { label: "Biaya entertainment tanpa daftar", value: "Ditambahkan" },
              { label: "Sumbangan (kecuali yg diperkenankan)", value: "Ditambahkan" },
              { label: "PPh yang ditanggung perusahaan", value: "Ditambahkan" },
              { label: "Penyusutan lebih besar dari fiskal", value: "Ditambahkan" },
              { label: "Biaya pribadi pemegang saham", value: "Ditambahkan" },
            ]}
            footer="Menambah PKP → menambah PPh terutang"
          />
          <QuickReference
            title="Koreksi Fiskal Negatif"
            items={[
              { label: "Penghasilan final (PPh 4(2))", value: "Dikurangkan" },
              { label: "Penghasilan non-objek", value: "Dikurangkan" },
              { label: "Penyusutan lebih kecil dari fiskal", value: "Dikurangkan" },
              { label: "Pendapatan diakui fiskal < komersial", value: "Dikurangkan" },
            ]}
            footer="Mengurangi PKP → mengurangi PPh terutang"
          />
        </div>

        <Link href="/pph/badan/rekonsiliasi-fiskal">
          <Card className="mt-4 hover:border-primary/50 transition-all cursor-pointer group">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-medium text-sm">
                  Rekonsiliasi Fiskal — Detail Lengkap
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Koreksi positif, negatif, beda tetap, beda waktu, dan contoh
                  kertas kerja
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </CardContent>
          </Card>
        </Link>
      </section>

      {/* Biaya Deductible vs Non-Deductible */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="biaya">
          5. Biaya Deductible & Non-Deductible
        </h2>

        <PerhatianBlock type="warning" title="Pasal 6 vs Pasal 9 UU PPh">
          <p>
            <strong>Pasal 6</strong> mengatur biaya yang boleh dikurangkan
            (<em>deductible expenses</em>): biaya untuk mendapatkan, menagih,
            dan memelihara penghasilan. <strong>Pasal 9</strong> mengatur biaya
            yang tidak boleh dikurangkan (<em>non-deductible expenses</em>).
          </p>
        </PerhatianBlock>

        <div className="mt-4">
          <h4 className="font-semibold text-sm mb-2">Biaya Non-Deductible (Pasal 9):</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Pembagian laba (dividen)</li>
            <li>Biaya untuk kepentingan pribadi pemegang saham</li>
            <li>Pembentukan cadangan (kecuali bank, asuransi, pertambangan)</li>
            <li>Natura dan kenikmatan (kecuali yang diatur PMK-72/2023)</li>
            <li>Sanksi administrasi (bunga, denda, kenaikan pajak)</li>
            <li>Biaya yang tidak berhubungan dengan kegiatan usaha</li>
            <li>PPh yang ditanggung pemberi kerja (kecuali PPh 26 di-gross up)</li>
            <li>Gaji anggota persekutuan/firma/CV yang modalnya tidak terbagi atas saham</li>
          </ul>
        </div>
      </section>

      {/* Kredit Pajak */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="kredit-pajak">
          6. Kredit Pajak & Batas Waktu
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Kredit Pajak"
            items={[
              { label: "PPh 22 (impor, bendahara)", value: "Dikreditkan" },
              { label: "PPh 23 (jasa, bunga, royalti)", value: "Dikreditkan" },
              { label: "PPh 24 (pajak LN)", value: "Dikreditkan" },
              { label: "PPh 25 (angsuran bulanan)", value: "Dikreditkan" },
            ]}
            footer="Kredit > PPh terutang → lebih bayar → restitusi"
          />
          <QuickReference
            title="Batas Waktu SPT"
            items={[
              { label: "SPT Tahunan Badan", value: "30 April" },
              { label: "Perpanjangan", value: "Maks 2 bulan" },
              { label: "Denda terlambat", value: "Rp1.000.000" },
              { label: "Tahun buku", value: "Bisa ≠ Jan-Des" },
            ]}
            footer="Pasal 3 ayat (3) UU KUP"
          />
        </div>
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            {
              title: "PPh Pasal 25",
              description: "Angsuran bulanan PPh yang dibayar sendiri",
              href: "/pph/pasal-25",
            },
            {
              title: "PPh Pasal 4(2) Final",
              description: "Penghasilan final yang tidak digabung di PPh Badan",
              href: "/pph/pasal-4-ayat-2",
            },
            {
              title: "Kalkulator PPh Badan",
              description: "Simulasi PPh Badan 22% dengan fasilitas Pasal 31E",
              href: "/kalkulator/pph-badan",
            },
            {
              title: "Konsep Dasar PPh",
              description: "Subjek, objek, dan prinsip dasar PPh",
              href: "/pph/konsep-dasar",
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
        title="Poin Penting PPh Badan"
        points={[
          "Tarif PPh Badan: 22% (tetap sejak UU HPP 2022)",
          "Go Public (≥ 40% saham di BEI): diskon 3% → tarif 19%",
          "Fasilitas Pasal 31E: 50% × 22% = 11% untuk PKP sebanding omzet ≤ Rp4,8M (maks omzet Rp50M)",
          "UMKM (omzet ≤ Rp4,8M): PPh Final 0,5% maks 3-4 tahun (PP 55/2022)",
          "Rekonsiliasi fiskal: sesuaikan laba komersial → laba fiskal",
          "Kredit pajak: PPh 22, 23, 24, dan 25 dikurangkan dari PPh terutang",
          "SPT Tahunan Badan: batas 30 April (atau 4 bulan setelah tutup buku)",
        ]}
      />
    </div>
  );
}
