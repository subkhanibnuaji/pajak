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

export const metadata: Metadata = {
  title: "PBB & BPHTB — Pajak Bumi dan Bangunan",
  description:
    "Panduan lengkap PBB (Pajak Bumi dan Bangunan) dan BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan): PBB-P2, PBB-P3, NJOP, tarif, dan cara perhitungan.",
};

export default function PBBPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "PBB & BPHTB" }]} />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">PBB & BPHTB</h1>
        <p className="mt-2 text-muted-foreground">
          Pajak Bumi dan Bangunan (PBB) adalah pajak yang dikenakan atas
          kepemilikan, penguasaan, dan/atau pemanfaatan bumi dan bangunan. BPHTB
          (Bea Perolehan Hak atas Tanah dan Bangunan) adalah pajak atas
          perolehan hak atas tanah dan/atau bangunan.
        </p>

        <DasarHukumBadge
          items={[
            "UU No. 12/1985 (PBB)",
            "UU No. 12/1994",
            "UU No. 28/2009 (PDRD)",
            "UU No. 1/2022 (HKPD)",
            "PP 35/2023",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="PBB-P2 vs PBB-P3">
        <p>
          Sejak UU 28/2009 (dan dilanjutkan UU HKPD), PBB dibagi menjadi dua
          kelompok: <strong>PBB-P2</strong> (Perdesaan dan Perkotaan) yang
          dikelola oleh <strong>Pemda (pajak daerah)</strong>, dan{" "}
          <strong>PBB-P3</strong> (Perkebunan, Perhutanan, dan Pertambangan)
          yang tetap dikelola oleh <strong>Pemerintah Pusat (DJP)</strong>.
        </p>
      </PerhatianBlock>

      {/* PBB-P2 */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pbb-p2">
          1. PBB-P2 (Perdesaan & Perkotaan) — Pajak Daerah
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          PBB-P2 dikenakan atas bumi dan/atau bangunan di wilayah perdesaan dan
          perkotaan. Pengelolaannya sepenuhnya oleh Pemerintah Daerah
          (Kabupaten/Kota) berdasarkan UU HKPD.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Ketentuan Umum PBB-P2"
            items={[
              { label: "Tarif maksimal", value: "0,5%" },
              { label: "NJOPTKP minimal", value: "Rp10.000.000" },
              { label: "Pengelola", value: "Pemda (Kab/Kota)" },
              { label: "Jatuh tempo", value: "Ditetapkan Pemda" },
            ]}
            footer="UU No. 1/2022 (HKPD) Pasal 40-41"
          />
          <QuickReference
            title="Objek PBB-P2"
            items={[
              { label: "Rumah tinggal", value: "Objek PBB-P2" },
              { label: "Apartemen", value: "Objek PBB-P2" },
              { label: "Ruko / rukan", value: "Objek PBB-P2" },
              { label: "Tanah kosong", value: "Objek PBB-P2" },
            ]}
            footer="Kecuali: tempat ibadah, kuburan, hutan lindung, dll."
          />
        </div>

        <div className="rounded-lg border p-4 bg-muted/30 mt-4">
          <h4 className="font-semibold text-sm mb-2">Formula PBB-P2</h4>
          <div className="space-y-1 text-sm font-mono">
            <p>NJOP = NJOP Bumi + NJOP Bangunan</p>
            <p>NJOP untuk penghitungan = NJOP - NJOPTKP</p>
            <p>PBB-P2 = Tarif x NJOP untuk penghitungan</p>
          </div>
        </div>

        <PerhatianBlock type="tip" title="Tarif Progresif PBB-P2 (UU HKPD)" className="mt-3">
          <p>
            UU HKPD memungkinkan Pemda menerapkan tarif progresif PBB-P2 dengan
            batas maksimal 0,5%. Beberapa daerah menerapkan tarif lebih rendah
            untuk NJOP di bawah batas tertentu (misalnya DKI Jakarta: 0,01% -
            0,3% tergantung NJOP).
          </p>
        </PerhatianBlock>
      </section>

      {/* PBB-P3 */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pbb-p3">
          2. PBB-P3 (Perkebunan, Perhutanan, Pertambangan) — Pajak Pusat
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          PBB-P3 tetap dikelola oleh DJP dan merupakan pajak pusat. Sektor
          yang termasuk PBB-P3:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
          <li>Perkebunan (kelapa sawit, karet, teh, dll.)</li>
          <li>Perhutanan (HPH, IUPHHK)</li>
          <li>Pertambangan mineral dan batubara</li>
          <li>Pertambangan minyak dan gas bumi</li>
          <li>Pertambangan panas bumi</li>
        </ul>

        <QuickReference
          title="Ketentuan PBB-P3"
          items={[
            { label: "Tarif", value: "0,5%" },
            { label: "NJKP", value: "20% atau 40% x NJOP" },
            { label: "Formula", value: "0,5% x NJKP" },
            { label: "Pengelola", value: "DJP (pajak pusat)" },
          ]}
          footer="UU PBB jo. PMK terkait sektor"
        />
      </section>

      {/* BPHTB */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="bphtb">
          3. BPHTB (Bea Perolehan Hak atas Tanah & Bangunan)
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          BPHTB adalah pajak yang dikenakan atas perolehan hak atas tanah
          dan/atau bangunan, baik melalui jual beli, tukar-menukar, hibah,
          waris, maupun pemberian hak baru. Sejak UU 28/2009, BPHTB dikelola
          oleh Pemda.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Ketentuan BPHTB"
            items={[
              { label: "Tarif maksimal", value: "5%" },
              { label: "DPP", value: "NPOP - NPOPTKP" },
              { label: "NPOPTKP jual beli", value: "Min Rp80.000.000" },
              { label: "NPOPTKP waris/hibah", value: "Min Rp300.000.000" },
            ]}
            footer="UU HKPD Pasal 44-51"
          />
          <QuickReference
            title="Objek BPHTB"
            items={[
              { label: "Jual beli", value: "Objek BPHTB" },
              { label: "Tukar-menukar", value: "Objek BPHTB" },
              { label: "Hibah", value: "Objek BPHTB" },
              { label: "Waris", value: "Objek BPHTB" },
            ]}
            footer="Hak milik, HGB, HGU, hak pakai, hak pengelolaan"
          />
        </div>

        <div className="rounded-lg border p-4 bg-muted/30 mt-4">
          <h4 className="font-semibold text-sm mb-2">Formula BPHTB</h4>
          <div className="space-y-1 text-sm font-mono">
            <p>NPOP = Nilai Perolehan Objek Pajak (harga transaksi / NJOP)</p>
            <p>NPOPTKP = Nilai Perolehan Objek Pajak Tidak Kena Pajak</p>
            <p>BPHTB = Tarif x (NPOP - NPOPTKP)</p>
          </div>
        </div>

        <CaseStudyBlock
          title="Perhitungan BPHTB — Jual Beli"
          scenario="Budi membeli rumah seharga Rp1.500.000.000 di Jakarta. NJOP: Rp1.200.000.000. NPOPTKP Jakarta: Rp80.000.000. Tarif BPHTB: 5%."
          steps={[
            {
              label: "NPOP (nilai tertinggi: harga transaksi)",
              result: 1_500_000_000,
            },
            {
              label: "NPOPTKP",
              result: -80_000_000,
            },
            {
              label: "DPP BPHTB",
              formula: "Rp1.500.000.000 - Rp80.000.000",
              result: 1_420_000_000,
            },
            {
              label: "BPHTB terutang (5%)",
              formula: "5% x Rp1.420.000.000",
              result: 71_000_000,
            },
          ]}
          conclusion="Budi harus membayar BPHTB sebesar Rp71.000.000 sebelum akta jual beli ditandatangani di hadapan PPAT. Selain itu, penjual juga wajib membayar PPh Final 2,5% atas pengalihan hak."
          dasarHukum={["UU HKPD Pasal 44-51", "Perda DKI Jakarta"]}
        />
      </section>

      {/* NJOP */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="njop">
          4. NJOP (Nilai Jual Objek Pajak)
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          NJOP adalah harga rata-rata yang diperoleh dari transaksi jual beli
          yang terjadi secara wajar. NJOP ditetapkan oleh Kepala Daerah
          (untuk PBB-P2) atau Menteri Keuangan (untuk PBB-P3) setiap 3 tahun
          (dapat setiap tahun untuk daerah yang berkembang pesat).
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>
            <strong>NJOP Bumi:</strong> ditentukan berdasarkan harga pasar,
            perbandingan harga, biaya perolehan baru, atau kapitalisasi pendapatan
          </li>
          <li>
            <strong>NJOP Bangunan:</strong> ditentukan berdasarkan biaya pembangunan
            baru dikurangi penyusutan fisik
          </li>
          <li>
            <strong>NJOPTKP:</strong> batas NJOP yang tidak kena pajak, minimal
            Rp10 juta (ditetapkan per daerah)
          </li>
        </ul>
      </section>

      {/* Bea Meterai */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="meterai">
          5. Bea Meterai
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          Bea Meterai dikenakan atas dokumen tertentu yang menyatakan jumlah
          uang atau yang bersifat perdata. Sejak UU 10/2020, tarif bea meterai
          menggunakan tarif tunggal.
        </p>
        <QuickReference
          title="Bea Meterai (UU 10/2020)"
          items={[
            { label: "Tarif", value: "Rp10.000" },
            { label: "Berlaku sejak", value: "1 Januari 2021" },
            { label: "Batas nominal", value: "> Rp5.000.000" },
            { label: "e-Meterai", value: "Tersedia di pos.e-meterai.co.id" },
          ]}
          footer="UU No. 10/2020 tentang Bea Meterai"
        />
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            {
              title: "PPh Pasal 4(2) Final",
              description: "PPh final 2,5% atas pengalihan hak atas tanah/bangunan",
              href: "/pph/pasal-4-ayat-2",
            },
            {
              title: "Kalkulator BPHTB",
              description: "Hitung BPHTB untuk transaksi jual beli properti",
              href: "/kalkulator/bphtb",
            },
            {
              title: "Ketentuan Umum (KUP)",
              description: "Tata cara administrasi perpajakan",
              href: "/kup",
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
        title="Poin Penting PBB & BPHTB"
        points={[
          "PBB-P2 (perdesaan/perkotaan): pajak daerah, tarif maks 0,5%, dikelola Pemda",
          "PBB-P3 (perkebunan/perhutanan/pertambangan): pajak pusat, dikelola DJP",
          "NJOP: dasar pengenaan PBB, ditetapkan setiap 3 tahun",
          "BPHTB: tarif maks 5% x (NPOP - NPOPTKP), pajak daerah",
          "NPOP: nilai tertinggi antara harga transaksi dan NJOP",
          "Penjual properti wajib bayar PPh Final 2,5% atas pengalihan",
          "Bea Meterai: Rp10.000 per dokumen (UU 10/2020)",
          "UU HKPD (2022) menggantikan UU PDRD sebagai payung hukum pajak daerah",
        ]}
      />
    </div>
  );
}
