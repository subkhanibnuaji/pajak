import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = { title: "Fasilitas PPN", description: "PPN dibebaskan, tidak dipungut, 0%, dan DTP." };

export default function FasilitasPPNPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "PPN", href: "/ppn" }, { label: "Fasilitas PPN" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Fasilitas PPN</h1>
        <p className="mt-2 text-muted-foreground">Berbagai fasilitas PPN: dibebaskan, tidak dipungut, tarif 0% (ekspor), dan ditanggung pemerintah (DTP).</p>
        <DasarHukumBadge items={["PP 49/2022", "UU PPN Pasal 16B"]} className="mt-4" />
      </div>
      <RingkasanBlock title="Ringkasan" points={["PPN Dibebaskan: PM tidak dapat dikreditkan (PP 49/2022)", "PPN Tidak Dipungut: Kawasan Berikat, KEK, FTZ", "PPN 0%: ekspor BKP berwujud/tidak berwujud dan ekspor JKP", "PPN DTP: program pemerintah tertentu (PMK khusus)"]} />
    </div>
  );
}
