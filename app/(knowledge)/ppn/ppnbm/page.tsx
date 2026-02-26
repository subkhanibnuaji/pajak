import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = { title: "PPnBM — Pajak Penjualan Barang Mewah", description: "Ketentuan PPnBM: barang mewah, tarif, kendaraan bermotor." };

export default function PPnBMPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "PPN", href: "/ppn" }, { label: "PPnBM" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">PPnBM</h1>
        <p className="mt-2 text-muted-foreground">
          Pajak Penjualan atas Barang Mewah dikenakan atas penyerahan atau impor BKP yang tergolong mewah dengan tarif 10%–200%.
        </p>
        <DasarHukumBadge items={["UU PPN Pasal 5, 8, 10", "PP 73/2019"]} className="mt-4" />
      </div>
      <RingkasanBlock title="Ringkasan" points={["Tarif 10% - 200% tergantung golongan barang", "PPnBM kendaraan bermotor: PP 73/2019 jo. perubahannya", "PPnBM hanya dipungut sekali (di tingkat produsen/importir)", "Insentif PPnBM DTP untuk kendaraan listrik"]} />
    </div>
  );
}
