import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = {
  title: "Faktur Pajak — e-Faktur & Kode Transaksi",
  description: "Panduan lengkap faktur pajak: jenis, kode transaksi, e-Faktur, pengkreditan PM.",
};

export default function FakturPajakPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "PPN", href: "/ppn" }, { label: "Faktur Pajak" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Faktur Pajak</h1>
        <p className="mt-2 text-muted-foreground">
          Faktur Pajak adalah bukti pungutan PPN yang dibuat oleh PKP. Sejak
          Coretax (Jan 2025), penerbitan faktur pajak melalui sistem baru.
        </p>
        <DasarHukumBadge items={["UU PPN Pasal 13", "PER-03/PJ/2022", "PMK-81/2024"]} className="mt-4" />
      </div>
      <RingkasanBlock
        title="Poin Penting Faktur Pajak"
        points={[
          "Wajib dibuat untuk setiap penyerahan BKP/JKP oleh PKP",
          "Kode Transaksi: 01 (normal), 02 (bendahara), 03 (pemungut lain), 04 (DPP Nilai Lain), 07 (tidak dipungut), 08 (dibebaskan)",
          "e-Faktur: wajib menggunakan aplikasi DJP / Coretax",
          "Faktur tidak lengkap = sanksi 1% dari DPP",
          "PM dapat dikreditkan max 3 bulan setelah masa pajak",
        ]}
      />
    </div>
  );
}
