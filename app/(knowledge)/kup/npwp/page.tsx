import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { QuickReference } from "@/components/pajak/quick-reference";

export const metadata: Metadata = { title: "NPWP & PKP", description: "Pendaftaran NPWP, format NIK, pengukuhan PKP, dan Coretax." };

export default function NPWPPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "KUP", href: "/kup" }, { label: "NPWP & PKP" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">NPWP & PKP</h1>
        <p className="mt-2 text-muted-foreground">Nomor Pokok Wajib Pajak (NPWP) adalah identitas wajib pajak. Sejak UU HPP, NIK berfungsi sebagai NPWP untuk WP orang pribadi.</p>
        <DasarHukumBadge items={["UU 7/2021 Pasal 2", "PMK-81/2024", "PP 50/2022"]} className="mt-4" />
      </div>
      <PerhatianBlock type="info" title="NIK = NPWP">
        <p>Per Coretax (Jan 2025), WP OP menggunakan NIK 16 digit sebagai NPWP. Format lama 15 digit masih berlaku untuk masa transisi.</p>
      </PerhatianBlock>
      <QuickReference title="Threshold PKP" items={[{label:"Omzet wajib PKP", value: "> Rp4,8 miliar/tahun"}, {label: "Bisa pilih jadi PKP", value: "Sukarela (di bawah threshold)"}]} footer="UU PPN Pasal 3A" />
      <RingkasanBlock title="Ringkasan" points={["NIK = NPWP untuk WP OP (UU HPP)", "WP Badan tetap menggunakan NPWP 16 digit dari DJP", "PKP wajib jika omzet > Rp4,8 miliar/tahun", "Coretax: pendaftaran & perubahan data melalui sistem baru"]} />
    </div>
  );
}
