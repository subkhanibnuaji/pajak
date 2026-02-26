import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = { title: "Pembayaran Pajak", description: "e-Billing, kode MAP & KJS, pembayaran melalui bank persepsi." };

export default function PembayaranPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "KUP", href: "/kup" }, { label: "Pembayaran" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Pembayaran Pajak</h1>
        <p className="mt-2 text-muted-foreground">Tata cara pembayaran pajak melalui e-Billing / Coretax, kode MAP & KJS, dan pemindahbukuan.</p>
        <DasarHukumBadge items={["UU KUP Pasal 9, 10", "PMK-81/2024"]} className="mt-4" />
      </div>
      <RingkasanBlock title="Ringkasan" points={["Pembayaran melalui e-Billing (kode billing dari DJP Online / Coretax)", "Bank Persepsi: bank yang ditunjuk untuk menerima pembayaran pajak", "MAP (Mata Anggaran Penerimaan): kode jenis pajak", "KJS (Kode Jenis Setoran): kode spesifik jenis pembayaran", "Pemindahbukuan (Pbk): memindahkan pembayaran yang salah"]} />
    </div>
  );
}
