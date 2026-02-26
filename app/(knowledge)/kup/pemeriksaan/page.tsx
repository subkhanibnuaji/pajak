import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = { title: "Pemeriksaan Pajak", description: "Jenis, kriteria, prosedur, dan hak WP dalam pemeriksaan pajak." };

export default function PemeriksaanPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "KUP", href: "/kup" }, { label: "Pemeriksaan" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Pemeriksaan Pajak</h1>
        <p className="mt-2 text-muted-foreground">Pemeriksaan pajak adalah kegiatan menghimpun dan mengolah data/keterangan untuk menguji kepatuhan WP dan/atau tujuan lain.</p>
        <DasarHukumBadge items={["UU KUP Pasal 29", "PMK-18/2021"]} className="mt-4" />
      </div>
      <RingkasanBlock title="Ringkasan" points={["Jenis: Pemeriksaan Lapangan, Kantor, Tujuan Lain", "Kriteria: rutin, khusus, lebih bayar, risiko", "Prosedur: SP2 → Peminjaman Dokumen → SPHP → Pembahasan Akhir → SKP", "WP berhak hadir dalam pembahasan akhir dan meminta SPHP", "Hasil: SKPKB, SKPKBT, SKPLB, atau SKPN"]} />
    </div>
  );
}
