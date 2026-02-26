import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = { title: "Sanksi Perpajakan", description: "Jenis sanksi: bunga, denda, kenaikan, dan pidana pajak." };

export default function SanksiPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "KUP", href: "/kup" }, { label: "Sanksi" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Sanksi Perpajakan</h1>
        <p className="mt-2 text-muted-foreground">Sanksi administrasi (bunga, denda, kenaikan) dan sanksi pidana atas pelanggaran ketentuan perpajakan.</p>
        <DasarHukumBadge items={["UU KUP Pasal 7, 8, 9, 13, 14, 38, 39", "PMK-103/2021"]} className="mt-4" />
      </div>
      <PerhatianBlock type="warning" title="Tarif Bunga Berubah Tiap Bulan">
        <p>Sejak UU HPP, tarif bunga sanksi menggunakan <strong>suku bunga acuan + uplift</strong>, ditetapkan oleh KMK setiap bulan. Bukan lagi flat 2% per bulan.</p>
      </PerhatianBlock>
      <RingkasanBlock title="Ringkasan" points={["Bunga: tarif acuan BI per bulan (PMK-103/2021), bukan flat 2%", "Denda telat SPT: Rp100.000 (OP) / Rp1.000.000 (Badan) / Rp500.000 (Masa PPN)", "Kenaikan 50%: jika keberatan ditolak", "Kenaikan 100%: jika banding ditolak (atas jumlah yang diajukan banding)", "Pidana: Pasal 38 (alpa, max 1 tahun), Pasal 39 (sengaja, max 6 tahun)"]} />
    </div>
  );
}
