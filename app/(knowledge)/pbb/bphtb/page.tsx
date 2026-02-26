import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = { title: "BPHTB", description: "Bea Perolehan Hak atas Tanah dan Bangunan." };

export default function BPHTBPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "PBB", href: "/pbb" }, { label: "BPHTB" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">BPHTB</h1>
        <p className="mt-2 text-muted-foreground">Bea Perolehan Hak atas Tanah dan Bangunan dikenakan atas perolehan hak atas tanah dan/atau bangunan.</p>
        <DasarHukumBadge items={["UU 1/2022 (HKPD)", "PP 35/2023"]} className="mt-4" />
      </div>
      <RingkasanBlock title="Ringkasan" points={["BPHTB = 5% × (NJOP - NPOPTKP)", "Kini menjadi pajak daerah (UU HKPD)", "NPOPTKP ditetapkan oleh masing-masing Pemda", "Perolehan: jual beli, tukar menukar, hibah, warisan, pemasukan modal, dll", "Wajib dibayar sebelum akta ditandatangani notaris/PPAT"]} />
    </div>
  );
}
