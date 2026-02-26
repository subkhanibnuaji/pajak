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
  title: "PPh Pasal 4(2) — Pajak Penghasilan Final",
  description:
    "Panduan lengkap PPh Pasal 4 ayat 2 (PPh Final): deposito, sewa tanah/bangunan, jasa konstruksi, UMKM, dividen, pengalihan hak atas tanah/bangunan.",
};

export default function PPh4Ayat2Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "Pasal 4(2) — Final" },
        ]}
      />

      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">PPh Pasal 4(2) — Final</h1>
            <p className="mt-2 text-muted-foreground">
              PPh Pasal 4 ayat (2) adalah pajak penghasilan yang bersifat{" "}
              <strong>final</strong>: setelah dipotong atau disetor, kewajiban
              pajak atas penghasilan tersebut dianggap selesai. Penghasilan yang
              sudah dikenakan PPh final tidak digabung dengan penghasilan lain
              dalam SPT Tahunan dan PPh final tidak dapat dikreditkan.
            </p>
          </div>
          <Badge variant="secondary">Menengah</Badge>
        </div>

        <DasarHukumBadge
          items={[
            "UU No. 7/2021 (HPP) Pasal 4(2)",
            "PP 55/2022 (UMKM)",
            "PP 34/2017 (Jasa Konstruksi)",
            "PP 131/2000 (Bunga Deposito)",
            "PP 34/2016 (Pengalihan Hak Tanah/Bangunan)",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="Karakteristik PPh Final">
        <p>
          Penghasilan yang dikenakan PPh final memiliki tiga ciri utama:
          (1) tidak digabung dengan penghasilan lain saat menghitung PKP,
          (2) PPh yang telah dipotong/disetor tidak dapat dikreditkan,
          (3) biaya untuk mendapatkan penghasilan tersebut tidak dapat
          dikurangkan. Penghasilan ini dilaporkan tersendiri di SPT Tahunan.
        </p>
      </PerhatianBlock>

      {/* Bunga Deposito & Tabungan */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="deposito">
          1. Bunga Deposito, Tabungan & Diskonto SBI
        </h2>
        <QuickReference
          title="PPh Final — Bunga Deposito & Tabungan"
          items={[
            { label: "Tarif", value: "20%" },
            { label: "DPP", value: "Jumlah bruto bunga" },
            { label: "Pemotong", value: "Bank / kustodian" },
            { label: "Pengecualian", value: "Saldo ≤ Rp7,5 juta" },
          ]}
          footer="PP 131/2000 jo. KMK-51/KMK.04/2001"
        />
      </section>

      {/* Sewa Tanah/Bangunan */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="sewa">
          2. Sewa Tanah dan/atau Bangunan
        </h2>
        <QuickReference
          title="PPh Final — Sewa Tanah/Bangunan"
          items={[
            { label: "Tarif", value: "10%" },
            { label: "DPP", value: "Jumlah bruto sewa" },
            { label: "Pemotong", value: "Penyewa (jika pemotong)" },
            { label: "Setor sendiri", value: "Jika penyewa bukan pemotong" },
          ]}
          footer="PP 29/1996 jo. PP 5/2002"
        />
        <PerhatianBlock type="tip" title="Sewa Selain Tanah/Bangunan" className="mt-3">
          <p>
            Sewa harta selain tanah/bangunan (kendaraan, mesin, peralatan) bukan
            PPh final — dikenakan PPh 23 tarif 2% dari jumlah bruto.
          </p>
        </PerhatianBlock>
      </section>

      {/* Jasa Konstruksi */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="konstruksi">
          3. Jasa Konstruksi
        </h2>
        <TarifTable
          title="PPh Final Jasa Konstruksi"
          dasarHukum="PP 9/2022 (berlaku 21 Februari 2022)"
          data={[
            {
              range: "Pelaksanaan — usaha kecil (SBU kecil)",
              rate: "1,75%",
              note: "× nilai kontrak",
            },
            {
              range: "Pelaksanaan — usaha menengah & besar",
              rate: "2,65%",
              note: "× nilai kontrak",
            },
            {
              range: "Pelaksanaan — tidak memiliki SBU",
              rate: "4%",
              note: "× nilai kontrak",
            },
            {
              range: "Perencanaan/Pengawasan — dengan SBU",
              rate: "3,5%",
              note: "× nilai kontrak",
            },
            {
              range: "Perencanaan/Pengawasan — tanpa SBU",
              rate: "6%",
              note: "× nilai kontrak",
            },
            {
              range: "Konsultan konstruksi terintegrasi",
              rate: "2,65%",
              note: "× nilai kontrak",
            },
          ]}
        />

        <PerhatianBlock type="warning" title="Perubahan Tarif PP 9/2022">
          <p>
            PP 9/2022 menggantikan PP 51/2008. Tarif berubah signifikan —
            pastikan menggunakan tarif yang berlaku sesuai tanggal kontrak.
            Kontrak yang ditandatangani sebelum 21 Februari 2022 masih
            menggunakan tarif lama.
          </p>
        </PerhatianBlock>
      </section>

      {/* UMKM */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="umkm">
          4. PPh Final UMKM (PP 55/2022)
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Ketentuan Umum"
            items={[
              { label: "Tarif", value: "0,5%" },
              { label: "DPP", value: "Peredaran bruto/bulan" },
              { label: "Batas omzet", value: "≤ Rp4,8 miliar/tahun" },
              { label: "WP OP: omzet bebas PPh", value: "≤ Rp500 juta/tahun" },
            ]}
            footer="PP 55/2022 (menggantikan PP 23/2018)"
          />
          <QuickReference
            title="Jangka Waktu Penggunaan"
            items={[
              { label: "WP OP", value: "7 tahun pajak" },
              { label: "WP Badan (PT)", value: "4 tahun pajak" },
              { label: "WP Badan (CV, Koperasi)", value: "4 tahun pajak" },
              { label: "Dihitung sejak", value: "Terdaftar / 2018" },
            ]}
            footer="Setelah habis, wajib pindah ke tarif umum"
          />
        </div>

        <PerhatianBlock type="tip" title="Bebas PPh untuk WP OP" className="mt-3">
          <p>
            Sejak PP 55/2022, WP Orang Pribadi UMKM dengan peredaran bruto{" "}
            <strong>sampai dengan Rp500 juta per tahun</strong> tidak dikenakan
            PPh Final 0,5%. PPh final hanya dihitung dari omzet yang melebihi
            Rp500 juta.
          </p>
        </PerhatianBlock>
      </section>

      {/* Pengalihan Hak Tanah/Bangunan */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pengalihan">
          5. Pengalihan Hak atas Tanah dan/atau Bangunan
        </h2>
        <QuickReference
          title="PPh Final — Pengalihan Hak atas Tanah/Bangunan"
          items={[
            { label: "Tarif umum", value: "2,5%" },
            { label: "Rumah Sederhana / RSS", value: "1%" },
            { label: "DPP", value: "Nilai tertinggi (NJOP/harga jual)" },
            { label: "Pengecualian", value: "< Rp60 juta (hibah)" },
          ]}
          footer="PP 34/2016"
        />
      </section>

      {/* Dividen */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="dividen">
          6. Dividen yang Diterima WP Orang Pribadi
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          Dividen dari dalam negeri yang diterima WP OP dikenakan PPh final 10%
          (tarif Pasal 17 ayat 2c). Namun sejak UU HPP, dividen dari dalam
          negeri <strong>dikecualikan dari objek PPh</strong> sepanjang
          diinvestasikan kembali di Indonesia dalam jangka waktu tertentu
          (Pasal 4A UU HPP jo. PMK-18/PMK.03/2021).
        </p>
        <QuickReference
          title="PPh Final — Dividen WP OP"
          items={[
            { label: "Tarif (jika tidak diinvestasikan)", value: "10%" },
            { label: "Tarif (jika diinvestasikan)", value: "0% (dikecualikan)" },
            { label: "Jangka waktu investasi", value: "3 tahun" },
            { label: "Dasar hukum", value: "Pasal 4A UU HPP" },
          ]}
          footer="PMK-18/PMK.03/2021"
        />
      </section>

      {/* Hadiah Undian */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="undian">
          7. Hadiah Undian
        </h2>
        <QuickReference
          title="PPh Final — Hadiah Undian"
          items={[
            { label: "Tarif", value: "25%" },
            { label: "DPP", value: "Jumlah bruto hadiah" },
            { label: "Pemotong", value: "Penyelenggara undian" },
          ]}
          footer="PP 132/2000"
        />
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            {
              title: "PPh Pasal 23",
              description: "Pemotongan atas dividen, bunga, royalti, jasa (tidak final)",
              href: "/pph/pasal-23",
            },
            {
              title: "PPh Badan",
              description: "Tarif 22%, rekonsiliasi fiskal termasuk penghasilan final",
              href: "/pph/badan",
            },
            {
              title: "Kalkulator PPh Final UMKM",
              description: "Hitung PPh Final 0,5% untuk pelaku UMKM",
              href: "/kalkulator/pph-final-umkm",
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
        title="Poin Penting PPh Pasal 4(2) Final"
        points={[
          "PPh final: tidak digabung penghasilan lain, tidak bisa dikreditkan",
          "Bunga deposito/tabungan: 20% (dikecualikan jika saldo ≤ Rp7,5 juta)",
          "Sewa tanah/bangunan: 10% dari jumlah bruto sewa",
          "Jasa konstruksi: 1,75% - 6% tergantung kualifikasi (PP 9/2022)",
          "UMKM: 0,5% × omzet bulanan (WP OP bebas untuk omzet ≤ Rp500 juta/tahun)",
          "Pengalihan hak tanah/bangunan: 2,5% (1% untuk RSS)",
          "Dividen WP OP: 10%, atau 0% jika diinvestasikan kembali (UU HPP)",
        ]}
      />
    </div>
  );
}
