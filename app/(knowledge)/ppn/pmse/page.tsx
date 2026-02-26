import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "PPN PMSE / Digital", description: "PPN atas Perdagangan Melalui Sistem Elektronik: Netflix, Spotify, Google, dll." };

export default function PMSEPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "PPN", href: "/ppn" }, { label: "PPN PMSE" }]} />
      <div className="mt-6">
        <div className="flex items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold">PPN PMSE / Digital</h1>
            <p className="mt-2 text-muted-foreground">PPN atas Perdagangan Melalui Sistem Elektronik — dikenakan pada platform digital luar negeri yang menjual barang/jasa digital ke konsumen Indonesia.</p>
          </div>
          <Badge variant="secondary">New</Badge>
        </div>
        <DasarHukumBadge items={["UU 7/2021", "PMK-48/2023", "PMK-60/2022"]} className="mt-4" />
      </div>
      <RingkasanBlock title="Ringkasan" points={["Tarif 11% atas barang/jasa digital dari luar negeri", "Ditunjuk oleh DJP: Netflix, Spotify, Google, Amazon, dll", "PMSE memungut PPN dari konsumen dan menyetorkan ke DJP", "Daftar pemungut PMSE diperbarui berkala oleh DJP"]} />
    </div>
  );
}
