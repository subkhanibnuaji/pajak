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
  title: "PPh Pasal 23 — Pemotongan atas Dividen, Bunga, Royalti & Jasa",
  description:
    "Panduan lengkap PPh Pasal 23: tarif pemotongan, jenis penghasilan yang dipotong, kewajiban pemotong, dan contoh perhitungan.",
};

export default function PPh23Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "Pasal 23" },
        ]}
      />

      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">PPh Pasal 23</h1>
            <p className="mt-2 text-muted-foreground">
              PPh Pasal 23 adalah pajak yang dipotong atas penghasilan berupa
              dividen, bunga, royalti, sewa, hadiah/penghargaan, dan imbalan
              jasa tertentu yang diterima oleh Wajib Pajak dalam negeri dan BUT.
            </p>
          </div>
          <Badge variant="secondary">Menengah</Badge>
        </div>

        <DasarHukumBadge
          items={[
            "UU No. 7/2021 (HPP) Pasal 23",
            "PMK-141/PMK.03/2015",
            "PP 94/2010",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="warning" title="PPh 23 vs PPh 4(2) vs PPh 26">
        <p>
          Jangan tertukar: PPh 23 dikenakan atas penghasilan WP <strong>dalam
          negeri</strong> dan bersifat <strong>tidak final</strong>. Untuk WP
          luar negeri, yang berlaku adalah <strong>PPh 26</strong>. Untuk
          penghasilan tertentu yang bersifat final (sewa tanah/bangunan,
          jasa konstruksi), yang berlaku adalah <strong>PPh 4(2)</strong>.
        </p>
      </PerhatianBlock>

      {/* Tarif */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="tarif">
          1. Tarif PPh Pasal 23
        </h2>
        <TarifTable
          title="Tarif PPh Pasal 23"
          dasarHukum="UU HPP Pasal 23 ayat (1)"
          data={[
            {
              range: "Dividen (kecuali dividen OP yang diinvestasikan)",
              rate: "15%",
              note: "× jumlah bruto",
            },
            {
              range: "Bunga (termasuk premium, diskonto, imbalan jaminan)",
              rate: "15%",
              note: "× jumlah bruto",
            },
            {
              range: "Royalti",
              rate: "15%",
              note: "× jumlah bruto",
            },
            {
              range: "Hadiah, penghargaan, bonus (selain yang dipotong PPh 21)",
              rate: "15%",
              note: "× jumlah bruto",
            },
            {
              range: "Sewa harta (selain tanah/bangunan)",
              rate: "2%",
              note: "× jumlah bruto",
            },
            {
              range: "Imbalan jasa tertentu (PMK-141/2015)",
              rate: "2%",
              note: "× jumlah bruto",
            },
          ]}
        />

        <PerhatianBlock type="danger" title="Tarif Lebih Tinggi Tanpa NPWP">
          <p>
            Apabila penerima penghasilan tidak memiliki NPWP, tarif pemotongan
            menjadi <strong>100% lebih tinggi</strong> dari tarif normal. Contoh:
            tarif 2% menjadi 4%, tarif 15% menjadi 30% (Pasal 23 ayat 1a UU PPh).
          </p>
        </PerhatianBlock>
      </section>

      {/* Jenis Jasa */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="jasa">
          2. Jenis Jasa yang Dipotong PPh 23 (2%)
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          PMK-141/PMK.03/2015 mengatur 62 jenis jasa yang dikenakan pemotongan
          PPh 23 dengan tarif 2%, antara lain:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Kelompok Jasa Teknik & Manajemen"
            items={[
              { label: "Jasa teknik", value: "2%" },
              { label: "Jasa manajemen", value: "2%" },
              { label: "Jasa konsultan", value: "2%" },
              { label: "Jasa akuntansi & pembukuan", value: "2%" },
            ]}
          />
          <QuickReference
            title="Kelompok Jasa Lainnya"
            items={[
              { label: "Jasa perawatan/perbaikan", value: "2%" },
              { label: "Jasa kebersihan (cleaning)", value: "2%" },
              { label: "Jasa catering", value: "2%" },
              { label: "Jasa freight forwarding", value: "2%" },
            ]}
          />
        </div>

        <PerhatianBlock type="tip" title="DPP PPh 23 Jasa" className="mt-4">
          <p>
            DPP PPh 23 atas jasa adalah <strong>jumlah bruto</strong>, yaitu
            seluruh jumlah penghasilan dengan nama dan dalam bentuk apapun yang
            dibayarkan. Jika dalam kontrak tidak dipisahkan antara jasa dan
            material, maka seluruh nilai kontrak menjadi DPP.
          </p>
        </PerhatianBlock>
      </section>

      {/* Pemotong */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pemotong">
          3. Pemotong PPh Pasal 23
        </h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Badan pemerintah</li>
          <li>Subjek pajak badan dalam negeri</li>
          <li>Penyelenggara kegiatan</li>
          <li>Bentuk Usaha Tetap (BUT)</li>
          <li>Perwakilan perusahaan luar negeri lainnya</li>
          <li>Orang pribadi yang ditunjuk sebagai pemotong PPh 23</li>
        </ul>
      </section>

      {/* Pengecualian */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pengecualian">
          4. Pengecualian Pemotongan
        </h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Penghasilan yang dibayar/terutang kepada bank</li>
          <li>Sewa yang dibayarkan/terutang sehubungan dengan sewa guna usaha dengan hak opsi (financial lease)</li>
          <li>Dividen yang diterima PT, koperasi, BUMN/BUMD (participation exemption)</li>
          <li>Dividen yang diterima WP OP yang diinvestasikan kembali (UU HPP)</li>
          <li>Bagian laba yang diterima anggota CV/persekutuan</li>
          <li>SHU koperasi yang dibayarkan kepada anggota</li>
          <li>Penghasilan yang dibayar/terutang kepada badan usaha atas jasa keuangan sebagai penyalur pinjaman/pembiayaan</li>
        </ul>
      </section>

      {/* Contoh Perhitungan */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="contoh">
          5. Contoh Perhitungan
        </h2>

        <CaseStudyBlock
          title="PPh 23 atas Jasa Konsultan"
          scenario="PT ABC membayar jasa konsultasi pajak kepada CV Mitra Sejahtera sebesar Rp50.000.000 (sudah termasuk PPN 11%)."
          steps={[
            {
              label: "Nilai kontrak (termasuk PPN)",
              result: 50_000_000,
            },
            {
              label: "DPP PPN (100/111 × Rp50.000.000)",
              formula: "100/111 × Rp50.000.000",
              result: 45_045_045,
            },
            {
              label: "PPN 11%",
              formula: "11% × Rp45.045.045",
              result: 4_954_955,
            },
            {
              label: "DPP PPh 23 = Jumlah bruto (excl. PPN)",
              result: 45_045_045,
            },
            {
              label: "PPh 23 (2%)",
              formula: "2% × Rp45.045.045",
              result: 900_901,
            },
          ]}
          conclusion="PT ABC wajib memotong PPh 23 sebesar Rp900.901 dan menyetorkan ke kas negara paling lambat tanggal 10 bulan berikutnya. CV Mitra Sejahtera menerima bukti potong yang dapat dikreditkan di SPT Tahunannya."
          dasarHukum={["UU HPP Pasal 23", "PMK-141/PMK.03/2015"]}
        />
      </section>

      {/* Kewajiban Pemotong */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="kewajiban">
          6. Kewajiban Pemotong
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Batas Waktu Setor"
            items={[
              { label: "Tanggal setor", value: "Tgl 10 bulan berikut" },
              { label: "Kode MAP", value: "411124" },
              { label: "Kode Jenis Setoran", value: "104 (Jasa)" },
            ]}
            footer="Menggunakan e-Billing / Coretax"
          />
          <QuickReference
            title="Batas Waktu Lapor"
            items={[
              { label: "SPT Masa PPh 23", value: "Tgl 20 bulan berikut" },
              { label: "Bukti Potong", value: "Wajib diberikan ke WP" },
              { label: "Pelaporan", value: "e-Bupot / Coretax" },
            ]}
            footer="Denda terlambat lapor: Rp100.000"
          />
        </div>
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            {
              title: "PPh Pasal 26",
              description: "Pemotongan atas penghasilan WP luar negeri (tarif 20% atau P3B)",
              href: "/pph/pasal-26",
            },
            {
              title: "PPh Pasal 4(2) Final",
              description: "PPh final: sewa tanah/bangunan, jasa konstruksi, UMKM",
              href: "/pph/pasal-4-ayat-2",
            },
            {
              title: "PPh Pasal 21",
              description: "Pemotongan PPh atas penghasilan sehubungan pekerjaan",
              href: "/pph/pasal-21",
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
        title="Poin Penting PPh Pasal 23"
        points={[
          "Tarif 15%: dividen, bunga, royalti, hadiah/penghargaan",
          "Tarif 2%: sewa harta (selain tanah/bangunan) dan 62 jenis jasa (PMK-141/2015)",
          "DPP = jumlah bruto (tidak termasuk PPN)",
          "Bersifat tidak final — dapat dikreditkan di SPT Tahunan",
          "Tanpa NPWP: tarif naik 100% lebih tinggi",
          "Setor paling lambat tanggal 10, lapor tanggal 20 bulan berikutnya",
          "Sewa tanah/bangunan & jasa konstruksi masuk PPh 4(2), bukan PPh 23",
        ]}
      />
    </div>
  );
}
