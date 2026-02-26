import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { QuickReference } from "@/components/pajak/quick-reference";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = { title: "SPT — Surat Pemberitahuan", description: "Jenis SPT, batas waktu, e-Filing, pembetulan SPT." };

export default function SPTPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "KUP", href: "/kup" }, { label: "SPT" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Surat Pemberitahuan (SPT)</h1>
        <p className="mt-2 text-muted-foreground">SPT adalah surat untuk melaporkan perhitungan dan/atau pembayaran pajak, objek pajak dan/atau bukan objek pajak, dan/atau harta dan kewajiban sesuai ketentuan peraturan perundang-undangan perpajakan.</p>
        <DasarHukumBadge items={["UU KUP Pasal 1, 3, 4", "UU 7/2021"]} className="mt-4" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 mt-6">
        <QuickReference title="Batas Waktu SPT Tahunan" items={[{label:"OP (1770/1770S/1770SS)", value: "31 Maret"}, {label:"Badan (1771)", value: "30 April"}]} footer="Keterlambatan: denda Rp100.000 (OP) / Rp1.000.000 (Badan)" />
        <QuickReference title="Jenis SPT Tahunan OP" items={[{label:"1770SS", value: "Penghasilan ≤ Rp60 juta"}, {label:"1770S", value: "Penghasilan > Rp60 juta (1 pemberi kerja)"}, {label:"1770", value: "Usaha/pekerjaan bebas"}]} />
      </div>
      <RingkasanBlock title="Ringkasan" points={["SPT Tahunan OP: batas 31 Maret", "SPT Tahunan Badan: batas 30 April", "e-Filing wajib untuk WP tertentu", "Pembetulan SPT: sebelum pemeriksaan (Pasal 8 KUP)", "Denda telat lapor: Rp100.000 (OP) / Rp1.000.000 (Badan)"]} />
    </div>
  );
}
