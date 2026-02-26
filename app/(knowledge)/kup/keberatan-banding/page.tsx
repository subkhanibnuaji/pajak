import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = { title: "Keberatan & Banding", description: "Upaya hukum perpajakan: keberatan, banding, gugatan, peninjauan kembali." };

export default function KeberatanBandingPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "KUP", href: "/kup" }, { label: "Keberatan & Banding" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Keberatan & Banding</h1>
        <p className="mt-2 text-muted-foreground">Upaya hukum yang dapat ditempuh WP jika tidak setuju dengan ketetapan pajak (SKP) atau tindakan DJP.</p>
        <DasarHukumBadge items={["UU KUP Pasal 25, 26, 27", "UU 14/2002 (Pengadilan Pajak)"]} className="mt-4" />
      </div>
      <RingkasanBlock title="Ringkasan" points={["Keberatan: 3 bulan sejak SKP, bayar minimal porsi yang disetujui", "Banding ke Pengadilan Pajak: 3 bulan sejak SK Keberatan", "Gugatan: atas penagihan, sanksi formal, atau Surat Paksa", "PK (Peninjauan Kembali) ke MA: 3 bulan sejak putusan banding", "Pasal 36 KUP: pengurangan/penghapusan sanksi administrasi"]} />
    </div>
  );
}
