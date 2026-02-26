import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { TarifPPhOPTable } from "@/components/pajak/tarif-table";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { CaseStudyBlock } from "@/components/pajak/case-study-block";
import { QuickReference } from "@/components/pajak/quick-reference";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "PPh Pasal 21 — Pemotongan Pajak atas Penghasilan Kerja",
  description:
    "Panduan lengkap PPh Pasal 21: TER (Tarif Efektif Rata-Rata), perhitungan gross/net/gross-up, natura, dan studi kasus.",
};

export default function PPh21Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "Pasal 21" },
        ]}
      />

      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">PPh Pasal 21</h1>
            <p className="mt-2 text-muted-foreground">
              Pajak atas penghasilan sehubungan dengan pekerjaan, jasa, atau
              kegiatan yang diterima oleh Wajib Pajak orang pribadi dalam negeri.
            </p>
          </div>
          <Badge variant="secondary">Menengah</Badge>
        </div>

        <DasarHukumBadge
          items={[
            "UU No. 7/2021 (HPP) Pasal 21",
            "PP 58/2023",
            "PMK-168/2023",
            "PMK-72/2023 (Natura)",
          ]}
          className="mt-4"
        />
      </div>

      {/* Quick link to calculator */}
      <Link href="/kalkulator/pph-21">
        <Card className="mt-6 hover:border-primary/50 transition-all cursor-pointer group border-primary/20 bg-primary/5">
          <CardContent className="flex items-center gap-3 p-4">
            <Calculator className="h-5 w-5 text-primary" />
            <div className="flex-1">
              <p className="font-medium text-sm">Kalkulator PPh 21</p>
              <p className="text-xs text-muted-foreground">
                Hitung PPh 21 dengan TER & Pasal 17 — langsung coba
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
          </CardContent>
        </Card>
      </Link>

      <PerhatianBlock type="warning" title="Perubahan Besar: TER berlaku sejak 2024">
        <p>
          Sejak 1 Januari 2024, PPh 21 Masa Januari–November dihitung menggunakan
          <strong> Tarif Efektif Rata-Rata (TER)</strong> berdasarkan PP 58/2023
          jo. PMK-168/2023. Masa Desember tetap menggunakan tarif progresif
          Pasal 17 untuk rekonsiliasi tahunan.
        </p>
      </PerhatianBlock>

      {/* Content sections */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pengertian">
          1. Pengertian
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          PPh Pasal 21 adalah pajak atas penghasilan berupa gaji, upah,
          honorarium, tunjangan, dan pembayaran lain dengan nama dan dalam
          bentuk apapun sehubungan dengan pekerjaan atau jabatan, jasa, dan
          kegiatan yang dilakukan oleh orang pribadi Subjek Pajak dalam negeri.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pemotong">
          2. Pemotong PPh 21
        </h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Pemberi kerja (badan maupun orang pribadi)</li>
          <li>Bendahara pemerintah (pusat & daerah)</li>
          <li>Dana pensiun, BPJS, dan badan lain yang membayar pensiun</li>
          <li>Orang pribadi yang melakukan kegiatan usaha/pekerjaan bebas dan membayar honorarium</li>
          <li>Penyelenggara kegiatan yang membayar honorarium/imbalan</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="ter">
          3. Tarif Efektif Rata-Rata (TER)
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          TER digunakan untuk menghitung PPh 21 <strong>Masa Januari sampai November</strong>.
          Penghasilan bruto bulanan dikalikan langsung dengan tarif TER sesuai kategori PTKP.
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mb-4">
          <QuickReference
            title="Kategori A"
            items={[
              { label: "Status PTKP", value: "TK/0, TK/1" },
              { label: "Contoh: Rp10 juta", value: "TER 2,25%" },
            ]}
          />
          <QuickReference
            title="Kategori B"
            items={[
              { label: "Status PTKP", value: "TK/2, TK/3, K/0" },
              { label: "Contoh: Rp10 juta", value: "TER 1,5%" },
            ]}
          />
          <QuickReference
            title="Kategori C"
            items={[
              { label: "Status PTKP", value: "K/1, K/2, K/3" },
              { label: "Contoh: Rp10 juta", value: "TER 1,5%" },
            ]}
          />
        </div>

        <PerhatianBlock type="info" title="Cara Kerja TER">
          <p>
            <strong>Masa Jan–Nov:</strong> PPh 21 = Penghasilan Bruto × Tarif TER<br />
            <strong>Masa Desember:</strong> PPh 21 = PPh terutang setahun (Pasal 17) − PPh yang sudah dipotong Jan–Nov<br />
            Dengan demikian, total PPh 21 setahun tetap sama dengan perhitungan Pasal 17.
          </p>
        </PerhatianBlock>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="tarif-progresif">
          4. Tarif Progresif Pasal 17
        </h2>
        <TarifPPhOPTable />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="biaya-jabatan">
          5. Pengurang Penghasilan Bruto
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Biaya Jabatan"
            items={[
              { label: "Tarif", value: "5% × Bruto" },
              { label: "Maks/bulan", value: "Rp500.000" },
              { label: "Maks/tahun", value: "Rp6.000.000" },
            ]}
            footer="Berlaku untuk pegawai tetap"
          />
          <QuickReference
            title="Iuran Pensiun"
            items={[
              { label: "Iuran yang dibayar karyawan", value: "Pengurang" },
              { label: "JHT karyawan (2%)", value: "Pengurang" },
              { label: "JP karyawan (1%)", value: "Pengurang" },
            ]}
            footer="Sesuai bukti potong pemberi kerja"
          />
        </div>
      </section>

      {/* Case Study */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="contoh">
          6. Contoh Perhitungan
        </h2>

        <CaseStudyBlock
          title="PPh 21 Karyawan Tetap — Status TK/0"
          scenario="Andi, karyawan tetap PT ABC, gaji Rp15.000.000/bulan, status TK/0 (tidak kawin, tanpa tanggungan). Tidak ada iuran pensiun."
          steps={[
            {
              label: "Penghasilan Bruto per Bulan",
              result: 15_000_000,
            },
            {
              label: "Penghasilan Bruto Setahun",
              formula: "Rp15.000.000 × 12",
              result: 180_000_000,
            },
            {
              label: "Biaya Jabatan (5%, maks Rp6 juta/tahun)",
              formula: "5% × Rp180.000.000 = Rp9.000.000 → maks Rp6.000.000",
              result: -6_000_000,
            },
            {
              label: "Penghasilan Neto Setahun",
              formula: "Rp180.000.000 − Rp6.000.000",
              result: 174_000_000,
            },
            {
              label: "PTKP (TK/0)",
              result: -54_000_000,
            },
            {
              label: "PKP (Penghasilan Kena Pajak)",
              formula: "Rp174.000.000 − Rp54.000.000",
              result: 120_000_000,
            },
            {
              label: "PPh Pasal 17 — Layer 1 (5% × Rp60 juta)",
              formula: "5% × Rp60.000.000",
              result: 3_000_000,
            },
            {
              label: "PPh Pasal 17 — Layer 2 (15% × Rp60 juta)",
              formula: "15% × Rp60.000.000",
              result: 9_000_000,
            },
            {
              label: "PPh Terutang Setahun",
              formula: "Rp3.000.000 + Rp9.000.000",
              result: 12_000_000,
            },
            {
              label: "PPh 21 per Bulan (Pasal 17)",
              formula: "Rp12.000.000 ÷ 12",
              result: 1_000_000,
            },
          ]}
          conclusion="PPh 21 per bulan (Pasal 17): Rp1.000.000. Dengan TER Kategori A, tarif 6% → PPh 21 per bulan: Rp900.000 (Jan-Nov). Desember menyesuaikan agar total setahun = Rp12.000.000."
          dasarHukum={["UU 7/2021 Pasal 17", "PP 58/2023", "PMK-168/2023"]}
        />
      </section>

      {/* Sub-topics */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Lanjutan</h2>
        <div className="grid gap-3">
          {[
            {
              title: "Tarif Efektif Rata-Rata (TER)",
              description: "Detail lengkap tarif TER Kategori A, B, C beserta contoh penerapan",
              href: "/pph/pasal-21/ter",
              badge: "New",
            },
            {
              title: "Metode Gross-Up",
              description: "Perhitungan PPh 21 ditanggung pemberi kerja",
              href: "/pph/pasal-21/gross-up",
            },
            {
              title: "Natura & Kenikmatan",
              description: "Objek PPh 21 baru per PMK-72/2023",
              href: "/pph/pasal-21/natura",
              badge: "PMK-72/2023",
            },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-sm">{item.title}</h3>
                      {item.badge && (
                        <Badge variant="secondary" className="text-[10px]">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
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
        title="Poin Penting PPh 21"
        points={[
          "Sejak 2024, PPh 21 Masa Jan-Nov menggunakan TER (PP 58/2023 jo. PMK-168/2023)",
          "Masa Desember: rekonsiliasi dengan tarif progresif Pasal 17 UU HPP",
          "Biaya jabatan: 5% dari bruto, maks Rp6 juta/tahun (pegawai tetap)",
          "PTKP tetap sejak 2016: TK/0 = Rp54.000.000/tahun",
          "Natura & kenikmatan menjadi objek PPh 21 sejak PMK-72/2023",
          "Total PPh 21 setahun sama antara metode TER dan Pasal 17",
        ]}
      />
    </div>
  );
}
