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
  title: "PPh Pasal 26 — Pemotongan Pajak atas WP Luar Negeri",
  description:
    "Panduan lengkap PPh Pasal 26: tarif pemotongan atas penghasilan WP luar negeri, tax treaty (P3B), branch profit tax, dan contoh penerapan.",
};

export default function PPh26Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "Pasal 26" },
        ]}
      />

      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">PPh Pasal 26</h1>
            <p className="mt-2 text-muted-foreground">
              PPh Pasal 26 adalah pajak yang dipotong atas penghasilan yang
              diterima atau diperoleh Wajib Pajak luar negeri (WPLN) dari
              Indonesia, selain Bentuk Usaha Tetap (BUT). PPh 26 bersifat{" "}
              <strong>final</strong> bagi penerima penghasilan.
            </p>
          </div>
          <Badge variant="secondary">Lanjutan</Badge>
        </div>

        <DasarHukumBadge
          items={[
            "UU No. 7/2021 (HPP) Pasal 26",
            "PER-25/PJ/2018 (DGT Form)",
            "P3B/Tax Treaty (71+ negara)",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="warning" title="PPh 26 vs PPh 23">
        <p>
          PPh 26 berlaku untuk penerima penghasilan yang berstatus <strong>WPLN
          (Subjek Pajak Luar Negeri)</strong>. Jika penerima adalah WPDN (Subjek
          Pajak Dalam Negeri), yang berlaku adalah PPh 23 (tarif 15%/2%).
          Penentuan status SPDN/SPLN sangat krusial karena memengaruhi tarif
          dan mekanisme pemotongan.
        </p>
      </PerhatianBlock>

      {/* Tarif Umum */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="tarif">
          1. Tarif PPh Pasal 26
        </h2>
        <TarifTable
          title="Tarif PPh Pasal 26 (Tarif Domestik)"
          dasarHukum="UU HPP Pasal 26 ayat (1) dan (2)"
          data={[
            {
              range: "Dividen",
              rate: "20%",
              note: "× jumlah bruto",
            },
            {
              range: "Bunga (termasuk premium, diskonto)",
              rate: "20%",
              note: "× jumlah bruto",
            },
            {
              range: "Royalti",
              rate: "20%",
              note: "× jumlah bruto",
            },
            {
              range: "Sewa & penghasilan lain sehubungan penggunaan harta",
              rate: "20%",
              note: "× jumlah bruto",
            },
            {
              range: "Imbalan jasa, pekerjaan, dan kegiatan",
              rate: "20%",
              note: "× jumlah bruto",
            },
            {
              range: "Hadiah dan penghargaan",
              rate: "20%",
              note: "× jumlah bruto",
            },
            {
              range: "Pensiun dan pembayaran berkala lainnya",
              rate: "20%",
              note: "× jumlah bruto",
            },
            {
              range: "Premi swap dan transaksi lindung nilai lainnya",
              rate: "20%",
              note: "× jumlah bruto",
            },
            {
              range: "Laba setelah pajak BUT (Branch Profit Tax)",
              rate: "20%",
              note: "× PKP setelah PPh Badan",
            },
            {
              range: "Penjualan/pengalihan saham (Pasal 26 ayat 2)",
              rate: "20%",
              note: "× perkiraan neto (25% × harga jual)",
            },
          ]}
        />
      </section>

      {/* Tax Treaty */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="tax-treaty">
          2. Tax Treaty (Persetujuan Penghindaran Pajak Berganda/P3B)
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          Indonesia memiliki P3B dengan lebih dari 71 negara. Tax treaty dapat
          memberikan tarif yang lebih rendah dari 20% atau bahkan membebaskan
          pemotongan PPh 26 atas jenis penghasilan tertentu. Untuk memanfaatkan
          fasilitas P3B, WPLN wajib menyampaikan <strong>DGT Form</strong>.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Contoh Tarif P3B — Dividen"
            items={[
              { label: "Singapura", value: "10% / 15%" },
              { label: "Jepang", value: "10% / 15%" },
              { label: "Belanda", value: "10% / 15%" },
              { label: "Malaysia", value: "10%" },
            ]}
            footer="Tarif lebih rendah untuk kepemilikan saham ≥ 25%"
          />
          <QuickReference
            title="Contoh Tarif P3B — Royalti"
            items={[
              { label: "Singapura", value: "15%" },
              { label: "Jepang", value: "10%" },
              { label: "Amerika Serikat", value: "10%" },
              { label: "Korea Selatan", value: "15%" },
            ]}
            footer="Tarif bervariasi per jenis royalti & treaty"
          />
        </div>

        <PerhatianBlock type="danger" title="DGT Form Wajib" className="mt-4">
          <p>
            Untuk menerapkan tarif P3B, WPLN <strong>wajib</strong> menyampaikan
            <strong> Form DGT-1</strong> (atau DGT-2 untuk bank dan tertentu)
            kepada pemotong pajak <strong>sebelum</strong> pemotongan dilakukan.
            Tanpa DGT Form yang valid, tarif domestik 20% tetap berlaku
            (PER-25/PJ/2018).
          </p>
        </PerhatianBlock>
      </section>

      {/* Branch Profit Tax */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="branch-profit-tax">
          3. Branch Profit Tax (PPh 26 ayat 4)
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          BUT (Bentuk Usaha Tetap) yang beroperasi di Indonesia dikenakan PPh
          Badan atas laba usahanya. Setelah itu, laba setelah pajak yang tidak
          ditanamkan kembali di Indonesia dikenakan tambahan PPh 26 sebesar 20%
          (atau tarif P3B yang lebih rendah).
        </p>

        <CaseStudyBlock
          title="Branch Profit Tax — BUT Jepang"
          scenario="ABC Corp Japan memiliki BUT di Indonesia. Laba BUT sebelum pajak Rp10 miliar, tarif PPh Badan 22%. P3B Indonesia-Jepang: tarif branch profit tax 10%."
          steps={[
            {
              label: "Laba BUT sebelum pajak",
              result: 10_000_000_000,
            },
            {
              label: "PPh Badan (22%)",
              formula: "22% × Rp10.000.000.000",
              result: -2_200_000_000,
            },
            {
              label: "Laba setelah pajak",
              formula: "Rp10.000.000.000 − Rp2.200.000.000",
              result: 7_800_000_000,
            },
            {
              label: "Branch Profit Tax (10% P3B)",
              formula: "10% × Rp7.800.000.000",
              result: -780_000_000,
            },
            {
              label: "Laba bersih yang diterima kantor pusat",
              formula: "Rp7.800.000.000 − Rp780.000.000",
              result: 7_020_000_000,
            },
          ]}
          conclusion="Total beban pajak efektif BUT: Rp2.200.000.000 (PPh Badan) + Rp780.000.000 (Branch Profit Tax) = Rp2.980.000.000 atau sekitar 29,8% dari laba sebelum pajak."
          dasarHukum={["UU HPP Pasal 26 ayat (4)", "P3B Indonesia-Jepang"]}
        />
      </section>

      {/* Penjualan Saham */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="saham">
          4. Penjualan Saham oleh WPLN
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          Atas penghasilan dari penjualan atau pengalihan saham perusahaan
          Indonesia oleh WPLN, dikenakan PPh 26 dengan mekanisme khusus:
        </p>
        <div className="rounded-lg border p-4 bg-muted/30">
          <h4 className="font-semibold text-sm mb-2">Formula PPh 26 Penjualan Saham</h4>
          <div className="space-y-1 text-sm font-mono">
            <p>Perkiraan Penghasilan Neto = 25% × Harga Jual</p>
            <p>PPh 26 = 20% × Perkiraan Penghasilan Neto</p>
            <p>= 20% × 25% × Harga Jual</p>
            <p>= <strong>5% × Harga Jual (tarif efektif)</strong></p>
          </div>
        </div>

        <PerhatianBlock type="info" title="Saham Conduit Company" className="mt-4">
          <p>
            Untuk penjualan saham perusahaan antara (<em>conduit company</em>)
            yang didirikan di negara tax haven dan memiliki penyertaan pada
            perusahaan Indonesia, tarif efektif tetap 5% (Pasal 26 ayat 2 UU
            PPh jo. KMK-434/KMK.04/1999).
          </p>
        </PerhatianBlock>
      </section>

      {/* Kewajiban */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="kewajiban">
          5. Kewajiban Pemotong
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Batas Waktu"
            items={[
              { label: "Setor", value: "Tgl 10 bulan berikut" },
              { label: "Lapor SPT Masa", value: "Tgl 20 bulan berikut" },
              { label: "Kode MAP", value: "411127" },
            ]}
            footer="Melalui e-Billing / Coretax"
          />
          <QuickReference
            title="Dokumen Penting"
            items={[
              { label: "Bukti Potong", value: "Wajib diberikan" },
              { label: "DGT Form", value: "Untuk tarif P3B" },
              { label: "SKD (COD)", value: "Dari otoritas negara asal" },
            ]}
            footer="PER-25/PJ/2018"
          />
        </div>
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            {
              title: "PPh Pasal 23",
              description: "Pemotongan atas dividen, bunga, royalti, jasa (WP dalam negeri)",
              href: "/pph/pasal-23",
            },
            {
              title: "PPh Badan",
              description: "Tarif 22%, termasuk perhitungan PPh BUT",
              href: "/pph/badan",
            },
            {
              title: "Konsep Dasar PPh",
              description: "Subjek pajak: SPDN vs SPLN, worldwide income",
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
        title="Poin Penting PPh Pasal 26"
        points={[
          "Tarif domestik: 20% × jumlah bruto (dividen, bunga, royalti, sewa, jasa, dll.)",
          "Tarif P3B bisa lebih rendah — wajib DGT Form untuk memanfaatkannya",
          "Branch Profit Tax: 20% (atau tarif P3B) × laba BUT setelah PPh Badan",
          "Penjualan saham oleh WPLN: tarif efektif 5% × harga jual",
          "PPh 26 bersifat final bagi WPLN",
          "Indonesia memiliki P3B dengan 71+ negara",
          "Tanpa DGT Form yang valid, tarif domestik 20% tetap berlaku",
        ]}
      />
    </div>
  );
}
