import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { QuickReference } from "@/components/pajak/quick-reference";
import { TarifTable } from "@/components/pajak/tarif-table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "PPh Pasal 22 — Pemungutan Pajak atas Impor & Penyerahan Tertentu",
  description:
    "Panduan lengkap PPh Pasal 22: pemungutan atas impor barang, penyerahan oleh badan tertentu, penjualan barang mewah, dan tarif pemungutan.",
};

export default function PPh22Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "Pasal 22" },
        ]}
      />

      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">PPh Pasal 22</h1>
            <p className="mt-2 text-muted-foreground">
              PPh Pasal 22 adalah pajak yang dipungut oleh bendahara pemerintah,
              badan-badan tertentu, dan Wajib Pajak badan tertentu sehubungan
              dengan kegiatan impor, pembayaran atas penyerahan barang, serta
              kegiatan usaha di bidang tertentu.
            </p>
          </div>
          <Badge variant="secondary">Menengah</Badge>
        </div>

        <DasarHukumBadge
          items={[
            "UU No. 7/2021 (HPP) Pasal 22",
            "PMK-34/PMK.010/2017",
            "PMK-110/PMK.010/2018",
            "PMK-41/PMK.010/2022",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="Sifat Pemungutan">
        <p>
          PPh Pasal 22 umumnya bersifat <strong>tidak final</strong> dan dapat
          dikreditkan terhadap PPh terutang pada akhir tahun pajak. Namun
          beberapa jenis PPh 22 (seperti atas penjualan BBM, gas, dan pelumas
          oleh produsen/importir) bersifat final bagi penyalur/agen.
        </p>
      </PerhatianBlock>

      {/* Pemungut */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pemungut">
          1. Pemungut PPh Pasal 22
        </h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>
            <strong>Bank Devisa & DJBC</strong> — atas impor barang
          </li>
          <li>
            <strong>Bendahara Pemerintah & KPA</strong> — atas pembayaran dengan
            APBN/APBD
          </li>
          <li>
            <strong>BUMN/BUMD tertentu</strong> — atas penyerahan barang oleh
            rekanan
          </li>
          <li>
            <strong>Badan usaha industri tertentu</strong> — semen, kertas,
            baja, otomotif, farmasi
          </li>
          <li>
            <strong>Eksportir komoditas</strong> — batubara, mineral, CPO (crude
            palm oil)
          </li>
          <li>
            <strong>Pedagang besar/produsen BBM, gas, pelumas</strong>
          </li>
        </ul>
      </section>

      {/* Tarif Impor */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="tarif-impor">
          2. Tarif PPh 22 Impor
        </h2>
        <TarifTable
          title="Tarif PPh Pasal 22 Impor"
          dasarHukum="PMK-34/PMK.010/2017 jo. PMK-110/PMK.010/2018"
          data={[
            {
              range: "Importir dengan API (Angka Pengenal Importir)",
              rate: "2,5%",
              note: "× nilai impor",
            },
            {
              range: "Importir tanpa API",
              rate: "7,5%",
              note: "× nilai impor",
            },
            {
              range: "Impor kedelai, gandum, tepung terigu (ber-API)",
              rate: "0,5%",
              note: "× nilai impor",
            },
            {
              range: "Barang tidak dikuasai (Pasal 22 DJBC)",
              rate: "7,5%",
              note: "× harga jual lelang",
            },
          ]}
        />

        <PerhatianBlock type="warning" title="Nilai Impor">
          <p>
            <strong>Nilai Impor</strong> = CIF (Cost, Insurance, Freight) + Bea
            Masuk + pungutan pabean lainnya. Untuk barang impor yang dikenakan
            tarif Bea Masuk Anti-Dumping (BMAD), BMAD ikut menambah nilai impor
            sebagai dasar penghitungan PPh 22.
          </p>
        </PerhatianBlock>
      </section>

      {/* Tarif Domestik */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="tarif-domestik">
          3. Tarif PPh 22 Domestik
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Pembayaran APBN/APBD"
            items={[
              { label: "Tarif umum", value: "1,5%" },
              { label: "DPP", value: "Harga jual (excl. PPN)" },
              { label: "Sifat", value: "Tidak final" },
            ]}
            footer="Dikecualikan: pembayaran ≤ Rp2 juta, BBM, listrik, air"
          />
          <QuickReference
            title="Industri Tertentu"
            items={[
              { label: "Semen", value: "0,25% × DPP PPN" },
              { label: "Kertas", value: "0,1% × DPP PPN" },
              { label: "Baja", value: "0,3% × DPP PPN" },
              { label: "Otomotif", value: "0,45% × DPP PPN" },
            ]}
            footer="PMK-34/PMK.010/2017"
          />
        </div>
      </section>

      {/* Ekspor Komoditas */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="ekspor">
          4. PPh 22 Ekspor Komoditas
        </h2>
        <TarifTable
          title="PPh 22 Ekspor"
          dasarHukum="PMK-41/PMK.010/2022"
          data={[
            {
              range: "Batubara",
              rate: "1,5%",
              note: "× nilai ekspor",
            },
            {
              range: "Mineral logam",
              rate: "1,5%",
              note: "× nilai ekspor",
            },
            {
              range: "CPO & turunannya",
              rate: "0,25%",
              note: "× nilai ekspor",
            },
            {
              range: "Komoditas perkebunan/kehutanan/perikanan lain",
              rate: "0,25%",
              note: "× nilai ekspor",
            },
          ]}
        />
      </section>

      {/* Barang Mewah */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="barang-mewah">
          5. PPh 22 Barang Sangat Mewah
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          Pemungutan PPh 22 sebesar <strong>5%</strong> atas pembelian barang
          sangat mewah:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Pesawat terbang pribadi dan helikopter pribadi</li>
          <li>Kapal pesiar dan yacht</li>
          <li>Kendaraan bermotor roda empat dengan harga jual &gt; Rp2 miliar</li>
          <li>Apartemen, kondominium, dan sejenisnya dengan harga &gt; Rp30 miliar</li>
        </ul>
      </section>

      {/* Pengecualian */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pengecualian">
          6. Pengecualian Pemungutan
        </h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Impor barang yang dibebaskan dari Bea Masuk dan/atau PPN</li>
          <li>Impor sementara (jika nyata-nyata dimaksudkan untuk diekspor kembali)</li>
          <li>Pembayaran atas pembelian BBM, listrik, gas, air minum/PDAM, dan benda pos</li>
          <li>Pembayaran untuk pembelian barang sehubungan dengan penggunaan dana BOS</li>
          <li>Impor emas batangan oleh Bank Indonesia</li>
          <li>Wajib Pajak yang memiliki SKB (Surat Keterangan Bebas)</li>
        </ul>
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            {
              title: "Konsep Dasar PPh",
              description: "Subjek, objek, PKP, PTKP, dan tarif PPh",
              href: "/pph/konsep-dasar",
            },
            {
              title: "PPh Pasal 23",
              description: "Pemotongan atas dividen, bunga, royalti, sewa, dan jasa",
              href: "/pph/pasal-23",
            },
            {
              title: "PPh Pasal 4(2) Final",
              description: "PPh final atas deposito, sewa, konstruksi, UMKM",
              href: "/pph/pasal-4-ayat-2",
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
        title="Poin Penting PPh Pasal 22"
        points={[
          "PPh 22 adalah pajak yang dipungut (bukan dipotong) oleh pihak tertentu",
          "Impor: 2,5% (ber-API) atau 7,5% (tanpa API) × Nilai Impor",
          "Bendahara pemerintah: 1,5% × harga pembelian (excl. PPN)",
          "Ekspor komoditas: 1,5% (batubara, mineral) atau 0,25% (CPO, perkebunan)",
          "Barang sangat mewah: 5% × harga jual",
          "Umumnya bersifat tidak final — dapat dikreditkan di SPT Tahunan",
          "WP dengan SKB dapat dikecualikan dari pemungutan",
        ]}
      />
    </div>
  );
}
