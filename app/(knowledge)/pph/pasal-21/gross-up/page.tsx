import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = {
  title: "PPh 21 Gross-Up — Pajak Ditanggung Pemberi Kerja",
  description: "Metode perhitungan PPh 21 Gross-Up dimana pajak ditanggung pemberi kerja dan diberikan sebagai tunjangan pajak.",
};

export default function GrossUpPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "Pasal 21", href: "/pph/pasal-21" },
          { label: "Gross-Up" },
        ]}
      />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Metode Gross-Up PPh 21</h1>
        <p className="mt-2 text-muted-foreground">
          Gross-up adalah metode perhitungan PPh 21 dimana pemberi kerja
          memberikan tunjangan pajak sehingga pajak yang dipotong sama
          dengan tunjangan yang diberikan. Take-home pay karyawan tidak
          berkurang karena pajak.
        </p>
        <DasarHukumBadge items={["UU 7/2021 Pasal 21", "SE-02/PJ/2006"]} className="mt-4" />
      </div>

      <PerhatianBlock type="info" title="3 Metode PPh 21">
        <p>
          <strong>Gross</strong>: Pajak dipotong dari gaji karyawan<br />
          <strong>Net</strong>: Pajak ditanggung perusahaan (non-deductible expense)<br />
          <strong>Gross-Up</strong>: Pajak diberikan sebagai tunjangan (deductible expense)
        </p>
      </PerhatianBlock>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Keuntungan Gross-Up</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            <strong>Bagi karyawan</strong>: Take-home pay tidak berkurang
          </li>
          <li>
            <strong>Bagi perusahaan</strong>: Tunjangan pajak bersifat deductible
            (mengurangi penghasilan kena pajak badan), berbeda dengan metode net
            yang non-deductible
          </li>
          <li>
            <strong>Aspek kepatuhan</strong>: PPh 21 tetap dilaporkan dan
            bukti potong tetap diterbitkan atas nama karyawan
          </li>
        </ul>
      </section>

      <RingkasanBlock
        title="Ringkasan"
        points={[
          "Gross-Up: tunjangan pajak = PPh 21 yang dipotong",
          "Manfaat: take-home pay utuh + biaya deductible bagi perusahaan",
          "Metode Net: PPh ditanggung perusahaan tapi non-deductible (Pasal 9 ayat 1 huruf e)",
          "Perhitungan gross-up memerlukan iterasi/formula khusus per layer tarif",
        ]}
      />
    </div>
  );
}
