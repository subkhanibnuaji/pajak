import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = {
  title: "Mekanisme PPN — Pajak Masukan vs Keluaran",
  description: "Mekanisme Pajak Pertambahan Nilai: PPN Keluaran, PPN Masukan, pengkreditan, saat terutang.",
};

export default function MekanismePPNPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "PPN", href: "/ppn" }, { label: "Mekanisme" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Mekanisme PPN</h1>
        <p className="mt-2 text-muted-foreground">
          PPN menggunakan mekanisme <strong>Pajak Masukan (PM)</strong> dan{" "}
          <strong>Pajak Keluaran (PK)</strong>. PKP menyetorkan selisih PK - PM ke negara.
        </p>
        <DasarHukumBadge items={["UU 7/2021", "UU PPN Pasal 9"]} className="mt-4" />
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Konsep Dasar</h2>
        <div className="rounded-lg border p-4 bg-muted/30 space-y-2 text-sm font-mono">
          <p>PPN Keluaran (PK) = PPN yang dipungut saat menjual BKP/JKP</p>
          <p>PPN Masukan (PM) = PPN yang dibayar saat membeli BKP/JKP</p>
          <p>PPN yang disetor = PK − PM</p>
          <p className="text-muted-foreground">Jika PM &gt; PK → lebih bayar → restitusi/kompensasi</p>
        </div>
      </section>

      <RingkasanBlock
        title="Ringkasan Mekanisme PPN"
        points={[
          "PPN bersifat indirect tax — beban di konsumen akhir",
          "PKP memungut PPN Keluaran dan mengkreditkan PPN Masukan",
          "Selisih PK - PM = PPN yang disetor ke negara",
          "PM dapat dikreditkan paling lama 3 bulan setelah masa pajak",
          "Lebih bayar PPN: pilih restitusi atau kompensasi ke masa berikutnya",
        ]}
      />
    </div>
  );
}
