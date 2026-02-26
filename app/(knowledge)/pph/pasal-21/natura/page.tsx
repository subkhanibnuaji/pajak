import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { QuickReference } from "@/components/pajak/quick-reference";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Natura & Kenikmatan — PPh 21",
  description: "Ketentuan PPh atas penggantian/imbalan dalam bentuk natura dan kenikmatan berdasarkan PMK-72/2023.",
};

export default function NaturaPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "Pasal 21", href: "/pph/pasal-21" },
          { label: "Natura & Kenikmatan" },
        ]}
      />
      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Natura & Kenikmatan</h1>
            <p className="mt-2 text-muted-foreground">
              Sejak UU HPP, penggantian atau imbalan dalam bentuk natura
              (barang) dan kenikmatan menjadi objek PPh. PMK-72/2023
              mengatur jenis, batasan, dan tata cara penilaiannya.
            </p>
          </div>
          <Badge variant="secondary">Menengah</Badge>
        </div>
        <DasarHukumBadge items={["UU 7/2021 Pasal 4(1)a", "PP 55/2022", "PMK-72/2023"]} className="mt-4" />
      </div>

      <PerhatianBlock type="warning" title="Perubahan Besar UU HPP">
        <p>
          Sebelum UU HPP, natura bukan objek PPh bagi penerima (Pasal 4(3)d
          lama). Sejak UU HPP, natura menjadi <strong>objek PPh</strong> bagi
          penerima DAN <strong>deductible expense</strong> bagi pemberi.
        </p>
      </PerhatianBlock>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Natura yang Dikecualikan</h2>
        <p className="text-sm text-muted-foreground mb-3">
          PMK-72/2023 mengatur natura/kenikmatan yang dikecualikan dari objek PPh:
        </p>
        <QuickReference
          title="Natura Dikecualikan (PMK-72/2023)"
          items={[
            { label: "Makanan/minuman di tempat kerja", value: "Seluruhnya" },
            { label: "Bingkisan hari raya/keagamaan", value: "Seluruhnya" },
            { label: "Peralatan kerja (laptop, HP)", value: "Untuk pekerjaan" },
            { label: "Fasilitas kesehatan darurat", value: "Seluruhnya" },
            { label: "Natura di daerah tertentu", value: "Seluruhnya" },
          ]}
          footer="PMK-72/PMK.03/2023 Pasal 3-7"
        />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Natura dengan Batasan (Threshold)</h2>
        <QuickReference
          title="Batasan Natura yang Bukan Objek PPh"
          items={[
            { label: "Bingkisan selain hari raya", value: "≤ Rp3.000.000/tahun" },
            { label: "Fasilitas olahraga (golf, balap, terbang, panjat, polo)", value: "Seluruhnya OBJEK" },
            { label: "Fasilitas olahraga lainnya (gym, renang, dll)", value: "≤ Rp1.500.000/tahun" },
            { label: "Fasilitas tempat tinggal (non-komunal)", value: "≤ Rp2.000.000/bulan" },
            { label: "Kendaraan dinas (boleh dibawa pulang)", value: "Penilaian khusus" },
          ]}
          footer="PMK-72/2023 — di atas batasan menjadi objek PPh"
        />
      </section>

      <RingkasanBlock
        title="Ringkasan Natura & Kenikmatan"
        points={[
          "Sejak UU HPP: natura = objek PPh bagi penerima + deductible bagi pemberi",
          "Makanan/minuman di kantor dan bingkisan hari raya: BUKAN objek",
          "Peralatan kerja (laptop, HP) untuk keperluan pekerjaan: BUKAN objek",
          "Natura di atas threshold batasan PMK-72/2023: menjadi OBJEK PPh",
          "Olahraga mewah (golf, balap, terbang): seluruhnya OBJEK PPh",
        ]}
      />
    </div>
  );
}
