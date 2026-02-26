/**
 * PPN Calculator Engine
 * Dasar Hukum: UU No. 7/2021 (HPP), PMK-131/2024
 * Tarif PPN: 11% (umum) / 12% (barang mewah, berlaku 2025)
 */

import type { PPnInput, PPnResult, PPh21Step } from "./types";

const TARIF_PPN_DEFAULT = 0.11;

export function hitungPPN(input: PPnInput): PPnResult {
  const tarif = input.tarifPPN ?? TARIF_PPN_DEFAULT;
  const steps: PPh21Step[] = [];

  let dpp: number;
  let ppn: number;
  let hargaSebelum: number;
  let hargaSetelah: number;

  if (input.includesPPN) {
    // Harga sudah termasuk PPN
    dpp = Math.round(input.harga / (1 + tarif));
    ppn = input.harga - dpp;
    hargaSebelum = dpp;
    hargaSetelah = input.harga;

    steps.push({
      label: "Harga Termasuk PPN",
      amount: input.harga,
    });
    steps.push({
      label: `DPP (Harga ÷ ${(1 + tarif).toFixed(2)})`,
      formula: `Rp${input.harga.toLocaleString("id-ID")} ÷ ${(1 + tarif).toFixed(2)}`,
      amount: dpp,
    });
    steps.push({
      label: `PPN ${(tarif * 100).toFixed(0)}%`,
      formula: `Rp${input.harga.toLocaleString("id-ID")} - Rp${dpp.toLocaleString("id-ID")}`,
      amount: ppn,
    });
  } else {
    // Harga belum termasuk PPN
    dpp = input.harga;
    ppn = Math.round(dpp * tarif);
    hargaSebelum = dpp;
    hargaSetelah = dpp + ppn;

    steps.push({
      label: "DPP (Harga Sebelum PPN)",
      amount: dpp,
    });
    steps.push({
      label: `PPN ${(tarif * 100).toFixed(0)}%`,
      formula: `${(tarif * 100).toFixed(0)}% × Rp${dpp.toLocaleString("id-ID")}`,
      amount: ppn,
    });
    steps.push({
      label: "Harga Setelah PPN",
      formula: `Rp${dpp.toLocaleString("id-ID")} + Rp${ppn.toLocaleString("id-ID")}`,
      amount: hargaSetelah,
    });
  }

  return {
    dpp,
    ppn,
    hargaSebelumPPN: hargaSebelum,
    hargaSetelahPPN: hargaSetelah,
    tarifPPN: tarif,
    steps,
  };
}
