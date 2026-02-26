import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { TarifTable } from "@/components/pajak/tarif-table";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Tarif Efektif Rata-Rata (TER) PPh 21",
  description: "Detail lengkap TER PPh 21 Kategori A, B, C berdasarkan PP 58/2023 dan PMK-168/2023.",
};

export default function TERPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "Pasal 21", href: "/pph/pasal-21" },
          { label: "Tarif Efektif (TER)" },
        ]}
      />
      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Tarif Efektif Rata-Rata (TER)</h1>
            <p className="mt-2 text-muted-foreground">
              TER adalah tarif pemotongan PPh 21 yang berlaku untuk Masa
              Januari sampai November. Dihitung dengan mengalikan penghasilan
              bruto bulanan dengan tarif TER sesuai kategori PTKP.
            </p>
          </div>
          <Badge variant="secondary">Menengah</Badge>
        </div>
        <DasarHukumBadge items={["PP 58/2023", "PMK-168/2023"]} className="mt-4" />
      </div>

      <PerhatianBlock type="warning" title="Berlaku sejak 1 Januari 2024">
        <p>
          TER menggantikan mekanisme lama (perhitungan bulanan dengan tarif
          Pasal 17 prorata). Masa Desember tetap menggunakan tarif progresif
          Pasal 17 untuk rekonsiliasi tahunan.
        </p>
      </PerhatianBlock>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Kategori TER</h2>
        <TarifTable
          title="Kategori A — TK/0 dan TK/1"
          dasarHukum="PP 58/2023 Lampiran"
          data={[
            { range: "s.d. Rp5.400.000", rate: "0%", note: "Tidak dipotong" },
            { range: "Rp5.400.000 – Rp5.650.000", rate: "0,25%" },
            { range: "Rp5.650.000 – Rp5.950.000", rate: "0,50%" },
            { range: "Rp5.950.000 – Rp6.300.000", rate: "0,75%" },
            { range: "Rp6.300.000 – Rp6.750.000", rate: "1,00%" },
            { range: "Rp6.750.000 – Rp7.500.000", rate: "1,25%" },
            { range: "Rp7.500.000 – Rp8.550.000", rate: "1,50%" },
            { range: "Rp8.550.000 – Rp9.650.000", rate: "1,75%" },
            { range: "Rp9.650.000 – Rp10.050.000", rate: "2,00%" },
            { range: "Rp10.050.000 – Rp10.350.000", rate: "2,25%" },
            { range: "Rp10.350.000 – Rp10.700.000", rate: "2,50%" },
            { range: "Rp10.700.000 – Rp11.050.000", rate: "3,00%" },
            { range: "Rp11.050.000 – Rp11.600.000", rate: "3,50%" },
            { range: "Rp12.500.000 – Rp13.750.000", rate: "5,00%" },
            { range: "Rp15.100.000 – Rp16.950.000", rate: "7,00%" },
            { range: "Di atas Rp910.000.000", rate: "34,00%", note: "Tarif maksimal" },
          ]}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Cara Kerja TER</h2>
        <div className="rounded-lg border p-4 bg-muted/30 space-y-3">
          <div>
            <h4 className="font-semibold text-sm">Masa Januari – November</h4>
            <p className="text-sm text-muted-foreground font-mono mt-1">
              PPh 21 = Penghasilan Bruto × Tarif TER
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Tidak perlu menghitung biaya jabatan, PTKP, atau PKP secara bulanan.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm">Masa Desember (Rekonsiliasi)</h4>
            <p className="text-sm text-muted-foreground font-mono mt-1">
              PPh 21 Desember = PPh Terutang Setahun (Pasal 17) − Total PPh dipotong Jan-Nov
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Total setahun tetap sama dengan perhitungan tarif progresif Pasal 17.
            </p>
          </div>
        </div>
      </section>

      <RingkasanBlock
        title="Poin Penting TER"
        points={[
          "TER berlaku untuk PPh 21 Masa Januari-November (PP 58/2023)",
          "Kategori A: TK/0, TK/1 | Kategori B: TK/2, TK/3, K/0 | Kategori C: K/1, K/2, K/3",
          "PPh 21 bulanan = Bruto × TER (lebih sederhana dari metode lama)",
          "Masa Desember: rekonsiliasi dengan Pasal 17 agar total setahun akurat",
          "Total PPh setahun = sama antara TER dan Pasal 17",
        ]}
      />
    </div>
  );
}
