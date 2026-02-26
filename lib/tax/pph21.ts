/**
 * PPh 21 Calculator Engine
 * Dasar Hukum:
 * - UU No. 7/2021 (HPP) Pasal 17
 * - PP 58/2023 jo. PMK-168/2023 (TER)
 * - PMK-101/PMK.010/2016 (PTKP)
 */

import { TARIF_PPH_OP } from "@/data/tarif-pph";
import { PTKP } from "@/data/ptkp";
import { getTERKategori, getTERRate } from "@/data/ter-pph21";
import type { PPh21Input, PPh21Result, PPh21Step, StatusPTKP } from "./types";

const TARIF_BIAYA_JABATAN = 0.05;
const BATAS_BIAYA_JABATAN_BULANAN = 500_000;

function getPTKP(status: StatusPTKP): number {
  const entry = PTKP.find((p) => p.kode === status);
  return entry?.jumlah ?? 54_000_000;
}

function hitungPPhProgresif(pkp: number): { pajak: number; steps: PPh21Step[] } {
  if (pkp <= 0) return { pajak: 0, steps: [] };

  let remaining = pkp;
  let totalPajak = 0;
  const steps: PPh21Step[] = [];

  for (const layer of TARIF_PPH_OP) {
    if (remaining <= 0) break;

    const batasLayer = layer.batasAkhir
      ? layer.batasAkhir - layer.batasAwal
      : remaining;
    const taxable = Math.min(remaining, batasLayer);
    const pajak = Math.round(taxable * layer.tarif);

    steps.push({
      label: `Tarif ${(layer.tarif * 100).toFixed(0)}% × ${layer.label}`,
      formula: `${(layer.tarif * 100).toFixed(0)}% × Rp${taxable.toLocaleString("id-ID")}`,
      amount: pajak,
    });

    totalPajak += pajak;
    remaining -= taxable;
  }

  return { pajak: totalPajak, steps };
}

export function hitungPPh21(input: PPh21Input): PPh21Result {
  const steps: PPh21Step[] = [];
  const dasarHukum = [
    "UU No. 7 Tahun 2021 (HPP) Pasal 17",
    "PP 58 Tahun 2023",
    "PMK-168/PMK.03/2023",
    "PMK-101/PMK.010/2016 (PTKP)",
  ];

  // 1. Penghasilan Bruto Setahun
  const brutoSetahun = input.penghasilanBruto * 12;
  steps.push({
    label: "Penghasilan Bruto Setahun",
    formula: `Rp${input.penghasilanBruto.toLocaleString("id-ID")} × 12`,
    amount: brutoSetahun,
  });

  // 2. Biaya Jabatan (5% × bruto, max Rp6.000.000/tahun)
  const biayaJabatanBulan = Math.min(
    Math.round(input.penghasilanBruto * TARIF_BIAYA_JABATAN),
    BATAS_BIAYA_JABATAN_BULANAN
  );
  const biayaJabatan = biayaJabatanBulan * 12;
  steps.push({
    label: "Biaya Jabatan (5%, maks Rp6 juta/tahun)",
    formula: `5% × Rp${brutoSetahun.toLocaleString("id-ID")} = Rp${biayaJabatan.toLocaleString("id-ID")}`,
    amount: -biayaJabatan,
    note: "Pasal 21 ayat (3) UU PPh",
  });

  // 3. Iuran Pensiun
  const iuranPensiun = (input.iuranPensiun ?? 0) * 12;
  if (iuranPensiun > 0) {
    steps.push({
      label: "Iuran Pensiun",
      formula: `Rp${(input.iuranPensiun ?? 0).toLocaleString("id-ID")} × 12`,
      amount: -iuranPensiun,
    });
  }

  // 4. Penghasilan Neto Setahun
  const neto = brutoSetahun - biayaJabatan - iuranPensiun;
  steps.push({
    label: "Penghasilan Neto Setahun",
    amount: neto,
  });

  // 5. PTKP
  const ptkp = getPTKP(input.statusPTKP);
  steps.push({
    label: `PTKP (${input.statusPTKP})`,
    amount: -ptkp,
    note: "PMK-101/PMK.010/2016",
  });

  // 6. PKP
  const pkp = Math.max(0, neto - ptkp);
  // Pembulatan PKP ke bawah ribuan terdekat
  const pkpBulat = Math.floor(pkp / 1000) * 1000;
  steps.push({
    label: "Penghasilan Kena Pajak (PKP)",
    amount: pkpBulat,
    note: "Dibulatkan ke bawah ribuan terdekat",
  });

  // 7. PPh Terutang Setahun (Pasal 17)
  const { pajak: pphSetahun, steps: layerSteps } = hitungPPhProgresif(pkpBulat);
  steps.push({
    label: "PPh Terutang Setahun (Pasal 17)",
    amount: pphSetahun,
  });
  steps.push(...layerSteps);

  // 8. PPh Per Bulan
  const pphBulanan = Math.round(pphSetahun / 12);
  steps.push({
    label: "PPh 21 Per Bulan (Pasal 17)",
    formula: `Rp${pphSetahun.toLocaleString("id-ID")} ÷ 12`,
    amount: pphBulanan,
  });

  // 9. TER (untuk perbandingan)
  const terKategori = getTERKategori(input.statusPTKP);
  const terRate = getTERRate(input.penghasilanBruto, terKategori);
  const terPPhBulanan = Math.round(input.penghasilanBruto * terRate);

  steps.push({
    label: `PPh 21 Per Bulan (TER Kategori ${terKategori})`,
    formula: `${(terRate * 100).toFixed(2)}% × Rp${input.penghasilanBruto.toLocaleString("id-ID")}`,
    amount: terPPhBulanan,
    note: "PP 58/2023 jo. PMK-168/2023 — berlaku Masa Jan-Nov",
  });

  return {
    penghasilanBrutoSetahun: brutoSetahun,
    biayaJabatan,
    iuranPensiun,
    penghasilanNeto: neto,
    ptkp,
    pkp: pkpBulat,
    pphTerutangSetahun: pphSetahun,
    pphPerBulan: pphBulanan,
    terRate,
    terPPhBulanan,
    steps,
    dasarHukum,
  };
}
