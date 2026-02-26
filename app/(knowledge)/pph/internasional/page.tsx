import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = {
  title: "PPh Internasional — Tax Treaty, PPh 24, BUT",
  description: "Aspek perpajakan internasional: P3B/tax treaty, kredit pajak luar negeri (PPh 24), BUT, dan CFC rules.",
};

export default function PPHInternasionalPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "Internasional" },
        ]}
      />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">PPh Internasional</h1>
        <p className="mt-2 text-muted-foreground">
          Aspek perpajakan yang melibatkan transaksi lintas negara: tax
          treaty (P3B), kredit pajak luar negeri (PPh 24), Bentuk Usaha
          Tetap (BUT), dan aturan CFC.
        </p>
        <DasarHukumBadge items={["UU 7/2021", "UU PPh Pasal 24", "PER-25/PJ/2018"]} className="mt-4" />
      </div>

      <PerhatianBlock type="info" title="Indonesia memiliki 70+ Tax Treaty">
        <p>
          P3B (Persetujuan Penghindaran Pajak Berganda) dengan 70+ negara
          mengatur pembagian hak pemajakan dan tarif khusus yang lebih
          rendah dari tarif domestik.
        </p>
      </PerhatianBlock>

      <RingkasanBlock
        title="Topik PPh Internasional"
        points={[
          "PPh 26: pemotongan 20% (atau treaty rate) atas penghasilan WPLN dari Indonesia",
          "PPh 24: kredit pajak atas pajak yang sudah dibayar di luar negeri",
          "P3B/Tax Treaty: mengurangi tarif PPh 26 berdasarkan perjanjian bilateral",
          "BUT (Bentuk Usaha Tetap): cabang/kegiatan usaha SPLN di Indonesia",
          "CFC Rules: anti-avoidance untuk investasi di negara tax haven",
          "BEPS: Base Erosion and Profit Shifting (OECD/G20)",
        ]}
      />
    </div>
  );
}
