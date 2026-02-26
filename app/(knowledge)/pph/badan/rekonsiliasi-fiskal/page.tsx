import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";

export const metadata: Metadata = { title: "Rekonsiliasi Fiskal", description: "Proses koreksi positif dan negatif dari laba komersial menjadi laba fiskal." };

export default function RekonsiliasiFiskalPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "PPh", href: "/pph" }, { label: "Badan", href: "/pph/badan" }, { label: "Rekonsiliasi Fiskal" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Rekonsiliasi Fiskal</h1>
        <p className="mt-2 text-muted-foreground">Proses penyesuaian laba komersial menjadi laba fiskal melalui koreksi fiskal positif dan negatif.</p>
        <DasarHukumBadge items={["UU PPh Pasal 6 (deductible)", "UU PPh Pasal 9 (non-deductible)"]} className="mt-4" />
      </div>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Koreksi Fiskal Positif</h2>
        <p className="text-sm text-muted-foreground mb-2">Menambah laba fiskal (biaya komersial yang tidak boleh dikurangkan):</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Biaya yang tidak terkait kegiatan usaha (Pasal 9 ayat 1)</li>
          <li>Sumbangan (kecuali yang diperkenankan PP)</li>
          <li>Pembentukan cadangan (kecuali bank, asuransi, pertambangan)</li>
          <li>Premi asuransi yang dibayar WP OP (kecuali pemberi kerja)</li>
          <li>PPh yang ditanggung pemberi kerja (metode net)</li>
          <li>Gaji yang dibayar ke anggota persekutuan/firma/CV</li>
          <li>Sanksi administrasi pajak</li>
          <li>Penyusutan/amortisasi yang melebihi ketentuan fiskal</li>
          <li>Biaya entertainment tanpa daftar nominatif</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Koreksi Fiskal Negatif</h2>
        <p className="text-sm text-muted-foreground mb-2">Mengurangi laba fiskal:</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Penghasilan yang dikenakan PPh Final (sudah dipotong final)</li>
          <li>Penghasilan bukan objek pajak</li>
          <li>Penyesuaian penyusutan/amortisasi fiskal lebih besar dari komersial</li>
        </ul>
      </section>
      <RingkasanBlock title="Ringkasan" points={["Koreksi positif: menambah laba fiskal (biaya non-deductible)", "Koreksi negatif: mengurangi laba fiskal", "Beda tetap: perbedaan permanen (mis. sumbangan, PPh ditanggung)", "Beda waktu: perbedaan pengakuan timing (mis. penyusutan)", "PKP = Laba Komersial + Koreksi Positif - Koreksi Negatif"]} />
    </div>
  );
}
