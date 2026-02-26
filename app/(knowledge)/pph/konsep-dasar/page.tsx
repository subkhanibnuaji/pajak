import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { RingkasanBlock } from "@/components/pajak/ringkasan-block";
import { QuickReference } from "@/components/pajak/quick-reference";
import { TarifPPhOPTable } from "@/components/pajak/tarif-table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Konsep Dasar PPh — Subjek, Objek, PTKP & Tarif",
  description:
    "Pelajari konsep dasar Pajak Penghasilan: subjek pajak, objek pajak, non-objek pajak, Penghasilan Kena Pajak (PKP), PTKP, dan tarif progresif Pasal 17.",
};

export default function KonsepDasarPPhPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "PPh", href: "/pph" },
          { label: "Konsep Dasar" },
        ]}
      />

      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Konsep Dasar PPh</h1>
            <p className="mt-2 text-muted-foreground">
              Pajak Penghasilan (PPh) adalah pajak yang dikenakan atas
              penghasilan yang diterima atau diperoleh Wajib Pajak dalam satu
              tahun pajak. Memahami konsep dasar PPh adalah fondasi untuk
              menguasai seluruh jenis PPh.
            </p>
          </div>
          <Badge variant="secondary">Dasar</Badge>
        </div>

        <DasarHukumBadge
          items={[
            "UU No. 7/1983",
            "UU No. 36/2008",
            "UU No. 7/2021 (HPP)",
            "PMK-101/PMK.010/2016",
          ]}
          className="mt-4"
        />
      </div>

      <PerhatianBlock type="info" title="Prinsip Dasar PPh">
        <p>
          PPh menganut prinsip <strong>worldwide income</strong> untuk Subjek
          Pajak Dalam Negeri (SPDN): seluruh penghasilan dari dalam maupun luar
          negeri dikenakan pajak di Indonesia. Sedangkan Subjek Pajak Luar
          Negeri (SPLN) hanya dikenakan pajak atas penghasilan yang bersumber
          dari Indonesia.
        </p>
      </PerhatianBlock>

      {/* Subjek Pajak */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="subjek-pajak">
          1. Subjek Pajak Penghasilan
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          Subjek pajak adalah pihak yang dikenakan kewajiban membayar pajak
          penghasilan sesuai ketentuan perundang-undangan perpajakan.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <QuickReference
            title="Subjek Pajak Dalam Negeri (SPDN)"
            items={[
              { label: "Orang Pribadi", value: "WNI / WNA > 183 hari" },
              { label: "Badan", value: "Didirikan di Indonesia" },
              { label: "Warisan belum dibagi", value: "Sebagai subjek pajak" },
            ]}
            footer="Pasal 2 ayat (3) UU PPh"
          />
          <QuickReference
            title="Subjek Pajak Luar Negeri (SPLN)"
            items={[
              { label: "Orang Pribadi", value: "Tinggal < 183 hari" },
              { label: "Badan", value: "Tidak didirikan di Indonesia" },
              { label: "BUT", value: "Bentuk Usaha Tetap" },
            ]}
            footer="Pasal 2 ayat (4) UU PPh"
          />
        </div>
      </section>

      {/* Objek Pajak */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="objek-pajak">
          2. Objek Pajak Penghasilan
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          Objek PPh adalah setiap tambahan kemampuan ekonomis yang diterima atau
          diperoleh Wajib Pajak, baik yang berasal dari Indonesia maupun dari
          luar Indonesia, yang dapat dipakai untuk konsumsi atau menambah
          kekayaan (Pasal 4 ayat 1 UU PPh).
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Penggantian/imbalan sehubungan pekerjaan atau jasa (gaji, honorarium, bonus)</li>
          <li>Hadiah dari undian, pekerjaan, atau kegiatan dan penghargaan</li>
          <li>Laba usaha</li>
          <li>Keuntungan karena penjualan/pengalihan harta (capital gain)</li>
          <li>Penerimaan kembali pembayaran pajak yang telah dibebankan</li>
          <li>Bunga termasuk premium, diskonto, dan imbalan jaminan pengembalian utang</li>
          <li>Dividen dengan nama dan dalam bentuk apapun</li>
          <li>Royalti atau imbalan atas penggunaan hak</li>
          <li>Sewa dan penghasilan lain sehubungan penggunaan harta</li>
          <li>Keuntungan karena pembebasan utang</li>
          <li>Keuntungan selisih kurs mata uang asing</li>
          <li>Premi asuransi dan reasuransi</li>
        </ul>
      </section>

      {/* Non-Objek Pajak */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="non-objek">
          3. Penghasilan yang Dikecualikan (Non-Objek)
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          Pasal 4 ayat (3) UU PPh mengatur penghasilan yang tidak termasuk objek
          pajak, antara lain:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Bantuan, sumbangan, dan hibah (dengan syarat tertentu)</li>
          <li>Warisan</li>
          <li>Penggantian/imbalan sehubungan pekerjaan dalam bentuk natura yang ditetapkan PMK</li>
          <li>Pembayaran dari perusahaan asuransi karena kecelakaan, sakit, atau kematian</li>
          <li>Dividen yang diterima PT, koperasi, BUMN/BUMD dari badan usaha di Indonesia (participation exemption)</li>
          <li>Iuran yang diterima dana pensiun yang pendiriannya disahkan Menkeu</li>
          <li>Bagian laba yang diterima anggota CV/persekutuan yang tidak terbagi atas saham</li>
          <li>Penghasilan yang diterima perusahaan modal ventura (dengan syarat)</li>
          <li>Beasiswa yang memenuhi persyaratan tertentu</li>
          <li>Bantuan/santunan dari BPJS</li>
        </ul>

        <PerhatianBlock type="tip" title="Perubahan UU HPP">
          <p>
            Sejak UU HPP, dividen dari dalam negeri yang diterima WP OP tidak
            dikenakan PPh <strong>sepanjang diinvestasikan kembali</strong> di
            Indonesia dalam jangka waktu tertentu (Pasal 4A UU HPP). Ini dikenal
            sebagai <em>participation exemption</em> untuk orang pribadi.
          </p>
        </PerhatianBlock>
      </section>

      {/* Penghasilan Kena Pajak */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="pkp">
          4. Penghasilan Kena Pajak (PKP)
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          PKP adalah dasar pengenaan pajak yang dihitung dari penghasilan neto
          dikurangi PTKP untuk Wajib Pajak Orang Pribadi, atau penghasilan neto
          (laba fiskal) untuk Wajib Pajak Badan.
        </p>

        <div className="rounded-lg border p-4 bg-muted/30">
          <h4 className="font-semibold text-sm mb-2">Formula PKP — Orang Pribadi</h4>
          <div className="space-y-1 text-sm font-mono">
            <p>Penghasilan Bruto</p>
            <p>(-) Biaya untuk mendapatkan, menagih, dan memelihara penghasilan</p>
            <p>(=) <strong>Penghasilan Neto</strong></p>
            <p>(-) PTKP</p>
            <p>(=) <strong>Penghasilan Kena Pajak (PKP)</strong></p>
          </div>
        </div>

        <div className="rounded-lg border p-4 bg-muted/30 mt-3">
          <h4 className="font-semibold text-sm mb-2">Formula PKP — Badan</h4>
          <div className="space-y-1 text-sm font-mono">
            <p>Penghasilan Bruto</p>
            <p>(-) Biaya yang diperkenankan (deductible expenses)</p>
            <p>(+) Koreksi Fiskal Positif</p>
            <p>(-) Koreksi Fiskal Negatif</p>
            <p>(=) <strong>Penghasilan Kena Pajak (PKP)</strong></p>
          </div>
        </div>
      </section>

      {/* PTKP */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="ptkp">
          5. Penghasilan Tidak Kena Pajak (PTKP)
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          PTKP adalah jumlah penghasilan yang tidak dikenakan pajak, berfungsi
          sebagai pengurang penghasilan neto untuk menghitung PKP bagi WP Orang
          Pribadi. Besaran PTKP berlaku sejak PMK-101/PMK.010/2016 dan belum
          berubah hingga saat ini.
        </p>

        <QuickReference
          title="Besaran PTKP per Tahun"
          items={[
            { label: "Wajib Pajak sendiri (TK/0)", value: "Rp54.000.000" },
            { label: "Tambahan WP kawin (K)", value: "Rp4.500.000" },
            { label: "Tambahan per tanggungan (maks 3)", value: "Rp4.500.000" },
            { label: "Tambahan istri bekerja (digabung)", value: "Rp54.000.000" },
          ]}
          footer="PMK-101/PMK.010/2016 (masih berlaku)"
        />

        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          <QuickReference
            title="PTKP Umum"
            items={[
              { label: "TK/0", value: "Rp54.000.000" },
              { label: "TK/1", value: "Rp58.500.000" },
              { label: "TK/2", value: "Rp63.000.000" },
              { label: "TK/3", value: "Rp67.500.000" },
            ]}
          />
          <QuickReference
            title="PTKP Kawin"
            items={[
              { label: "K/0", value: "Rp58.500.000" },
              { label: "K/1", value: "Rp63.000.000" },
              { label: "K/2", value: "Rp67.500.000" },
              { label: "K/3", value: "Rp72.000.000" },
            ]}
          />
        </div>
      </section>

      {/* Tarif */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3" id="tarif">
          6. Tarif PPh Orang Pribadi (Pasal 17)
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          UU HPP mengubah lapisan tarif menjadi 5 layer. Perubahan utama adalah
          perluasan layer pertama (5%) dari Rp50 juta menjadi Rp60 juta, dan
          penambahan layer kelima (35%) untuk PKP di atas Rp5 miliar.
        </p>
        <TarifPPhOPTable />
      </section>

      {/* Topik Terkait */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Topik Terkait</h2>
        <div className="grid gap-3">
          {[
            {
              title: "PPh Pasal 21",
              description: "Pemotongan PPh atas penghasilan sehubungan pekerjaan",
              href: "/pph/pasal-21",
            },
            {
              title: "PPh Badan",
              description: "Tarif 22%, fasilitas Pasal 31E, rekonsiliasi fiskal",
              href: "/pph/badan",
            },
            {
              title: "Kalkulator PPh 21",
              description: "Hitung PPh 21 dengan TER & Pasal 17",
              href: "/kalkulator/pph-21",
            },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4 transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <RingkasanBlock
        title="Poin Penting Konsep Dasar PPh"
        points={[
          "Subjek pajak: orang pribadi, badan, warisan belum dibagi, dan BUT",
          "Objek pajak: setiap tambahan kemampuan ekonomis (Pasal 4 ayat 1 UU PPh)",
          "Non-objek: bantuan, hibah, warisan, dividen participation exemption (dengan syarat)",
          "PKP = Penghasilan Neto - PTKP (untuk WP OP)",
          "PTKP TK/0: Rp54.000.000/tahun (sejak 2016, belum berubah)",
          "Tarif progresif OP: 5 layer (5% s.d. 35%) berdasarkan UU HPP",
          "WP SPDN dikenakan pajak atas worldwide income",
        ]}
      />
    </div>
  );
}
