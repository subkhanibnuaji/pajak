/**
 * Tarif Efektif Rata-Rata (TER) PPh Pasal 21
 * Dasar Hukum: PP 58/2023 jo. PMK-168/2023 (menggantikan PMK-66/2023)
 * Berlaku sejak 1 Januari 2024
 *
 * TER digunakan untuk menghitung PPh 21 Masa Januari-November
 * Masa Desember tetap menggunakan tarif Pasal 17 (tarif progresif)
 */

export interface TEREntry {
  batasAwal: number;
  batasAkhir: number | null;
  tarif: number;
}

/**
 * Kategori A: TK/0 dan TK/1
 * PTKP: Rp54.000.000 (TK/0) atau Rp58.500.000 (TK/1)
 */
export const TER_KATEGORI_A: TEREntry[] = [
  { batasAwal: 0, batasAkhir: 5_400_000, tarif: 0 },
  { batasAwal: 5_400_000, batasAkhir: 5_650_000, tarif: 0.0025 },
  { batasAwal: 5_650_000, batasAkhir: 5_950_000, tarif: 0.005 },
  { batasAwal: 5_950_000, batasAkhir: 6_300_000, tarif: 0.0075 },
  { batasAwal: 6_300_000, batasAkhir: 6_750_000, tarif: 0.01 },
  { batasAwal: 6_750_000, batasAkhir: 7_500_000, tarif: 0.0125 },
  { batasAwal: 7_500_000, batasAkhir: 8_550_000, tarif: 0.015 },
  { batasAwal: 8_550_000, batasAkhir: 9_650_000, tarif: 0.0175 },
  { batasAwal: 9_650_000, batasAkhir: 10_050_000, tarif: 0.02 },
  { batasAwal: 10_050_000, batasAkhir: 10_350_000, tarif: 0.0225 },
  { batasAwal: 10_350_000, batasAkhir: 10_700_000, tarif: 0.025 },
  { batasAwal: 10_700_000, batasAkhir: 11_050_000, tarif: 0.03 },
  { batasAwal: 11_050_000, batasAkhir: 11_600_000, tarif: 0.035 },
  { batasAwal: 11_600_000, batasAkhir: 12_500_000, tarif: 0.04 },
  { batasAwal: 12_500_000, batasAkhir: 13_750_000, tarif: 0.05 },
  { batasAwal: 13_750_000, batasAkhir: 15_100_000, tarif: 0.06 },
  { batasAwal: 15_100_000, batasAkhir: 16_950_000, tarif: 0.07 },
  { batasAwal: 16_950_000, batasAkhir: 19_750_000, tarif: 0.08 },
  { batasAwal: 19_750_000, batasAkhir: 24_150_000, tarif: 0.09 },
  { batasAwal: 24_150_000, batasAkhir: 26_450_000, tarif: 0.10 },
  { batasAwal: 26_450_000, batasAkhir: 28_000_000, tarif: 0.11 },
  { batasAwal: 28_000_000, batasAkhir: 30_050_000, tarif: 0.12 },
  { batasAwal: 30_050_000, batasAkhir: 32_400_000, tarif: 0.13 },
  { batasAwal: 32_400_000, batasAkhir: 35_400_000, tarif: 0.14 },
  { batasAwal: 35_400_000, batasAkhir: 39_100_000, tarif: 0.15 },
  { batasAwal: 39_100_000, batasAkhir: 43_850_000, tarif: 0.16 },
  { batasAwal: 43_850_000, batasAkhir: 47_800_000, tarif: 0.17 },
  { batasAwal: 47_800_000, batasAkhir: 51_400_000, tarif: 0.18 },
  { batasAwal: 51_400_000, batasAkhir: 56_300_000, tarif: 0.19 },
  { batasAwal: 56_300_000, batasAkhir: 62_200_000, tarif: 0.20 },
  { batasAwal: 62_200_000, batasAkhir: 68_600_000, tarif: 0.21 },
  { batasAwal: 68_600_000, batasAkhir: 77_500_000, tarif: 0.22 },
  { batasAwal: 77_500_000, batasAkhir: 89_000_000, tarif: 0.23 },
  { batasAwal: 89_000_000, batasAkhir: 103_000_000, tarif: 0.24 },
  { batasAwal: 103_000_000, batasAkhir: 125_000_000, tarif: 0.25 },
  { batasAwal: 125_000_000, batasAkhir: 157_000_000, tarif: 0.26 },
  { batasAwal: 157_000_000, batasAkhir: 206_000_000, tarif: 0.27 },
  { batasAwal: 206_000_000, batasAkhir: 337_000_000, tarif: 0.28 },
  { batasAwal: 337_000_000, batasAkhir: 454_000_000, tarif: 0.30 },
  { batasAwal: 454_000_000, batasAkhir: 550_000_000, tarif: 0.32 },
  { batasAwal: 550_000_000, batasAkhir: 695_000_000, tarif: 0.33 },
  { batasAwal: 695_000_000, batasAkhir: 910_000_000, tarif: 0.34 },
  { batasAwal: 910_000_000, batasAkhir: null, tarif: 0.34 },
];

/**
 * Kategori B: TK/2, TK/3, K/0
 */
export const TER_KATEGORI_B: TEREntry[] = [
  { batasAwal: 0, batasAkhir: 6_200_000, tarif: 0 },
  { batasAwal: 6_200_000, batasAkhir: 6_500_000, tarif: 0.0025 },
  { batasAwal: 6_500_000, batasAkhir: 6_850_000, tarif: 0.005 },
  { batasAwal: 6_850_000, batasAkhir: 7_300_000, tarif: 0.0075 },
  { batasAwal: 7_300_000, batasAkhir: 9_200_000, tarif: 0.01 },
  { batasAwal: 9_200_000, batasAkhir: 10_750_000, tarif: 0.015 },
  { batasAwal: 10_750_000, batasAkhir: 11_250_000, tarif: 0.02 },
  { batasAwal: 11_250_000, batasAkhir: 11_600_000, tarif: 0.025 },
  { batasAwal: 11_600_000, batasAkhir: 12_600_000, tarif: 0.03 },
  { batasAwal: 12_600_000, batasAkhir: 13_600_000, tarif: 0.04 },
  { batasAwal: 13_600_000, batasAkhir: 14_950_000, tarif: 0.05 },
  { batasAwal: 14_950_000, batasAkhir: 16_400_000, tarif: 0.06 },
  { batasAwal: 16_400_000, batasAkhir: 18_450_000, tarif: 0.07 },
  { batasAwal: 18_450_000, batasAkhir: 21_850_000, tarif: 0.08 },
  { batasAwal: 21_850_000, batasAkhir: 26_000_000, tarif: 0.09 },
  { batasAwal: 26_000_000, batasAkhir: 27_700_000, tarif: 0.10 },
  { batasAwal: 27_700_000, batasAkhir: 29_350_000, tarif: 0.11 },
  { batasAwal: 29_350_000, batasAkhir: 31_450_000, tarif: 0.12 },
  { batasAwal: 31_450_000, batasAkhir: 33_950_000, tarif: 0.13 },
  { batasAwal: 33_950_000, batasAkhir: 37_100_000, tarif: 0.14 },
  { batasAwal: 37_100_000, batasAkhir: 41_100_000, tarif: 0.15 },
  { batasAwal: 41_100_000, batasAkhir: 45_800_000, tarif: 0.16 },
  { batasAwal: 45_800_000, batasAkhir: 49_500_000, tarif: 0.17 },
  { batasAwal: 49_500_000, batasAkhir: 53_800_000, tarif: 0.18 },
  { batasAwal: 53_800_000, batasAkhir: 58_500_000, tarif: 0.19 },
  { batasAwal: 58_500_000, batasAkhir: 64_000_000, tarif: 0.20 },
  { batasAwal: 64_000_000, batasAkhir: 71_000_000, tarif: 0.21 },
  { batasAwal: 71_000_000, batasAkhir: 80_000_000, tarif: 0.22 },
  { batasAwal: 80_000_000, batasAkhir: 93_000_000, tarif: 0.23 },
  { batasAwal: 93_000_000, batasAkhir: 109_000_000, tarif: 0.24 },
  { batasAwal: 109_000_000, batasAkhir: 129_000_000, tarif: 0.25 },
  { batasAwal: 129_000_000, batasAkhir: 163_000_000, tarif: 0.26 },
  { batasAwal: 163_000_000, batasAkhir: 211_000_000, tarif: 0.27 },
  { batasAwal: 211_000_000, batasAkhir: 374_000_000, tarif: 0.28 },
  { batasAwal: 374_000_000, batasAkhir: 459_000_000, tarif: 0.30 },
  { batasAwal: 459_000_000, batasAkhir: 555_000_000, tarif: 0.32 },
  { batasAwal: 555_000_000, batasAkhir: 704_000_000, tarif: 0.33 },
  { batasAwal: 704_000_000, batasAkhir: 957_000_000, tarif: 0.34 },
  { batasAwal: 957_000_000, batasAkhir: null, tarif: 0.34 },
];

/**
 * Kategori C: K/1, K/2, K/3
 */
export const TER_KATEGORI_C: TEREntry[] = [
  { batasAwal: 0, batasAkhir: 6_600_000, tarif: 0 },
  { batasAwal: 6_600_000, batasAkhir: 6_950_000, tarif: 0.0025 },
  { batasAwal: 6_950_000, batasAkhir: 7_350_000, tarif: 0.005 },
  { batasAwal: 7_350_000, batasAkhir: 7_800_000, tarif: 0.0075 },
  { batasAwal: 7_800_000, batasAkhir: 8_850_000, tarif: 0.01 },
  { batasAwal: 8_850_000, batasAkhir: 9_800_000, tarif: 0.0125 },
  { batasAwal: 9_800_000, batasAkhir: 10_950_000, tarif: 0.015 },
  { batasAwal: 10_950_000, batasAkhir: 11_200_000, tarif: 0.02 },
  { batasAwal: 11_200_000, batasAkhir: 12_050_000, tarif: 0.025 },
  { batasAwal: 12_050_000, batasAkhir: 12_950_000, tarif: 0.03 },
  { batasAwal: 12_950_000, batasAkhir: 14_150_000, tarif: 0.04 },
  { batasAwal: 14_150_000, batasAkhir: 15_550_000, tarif: 0.05 },
  { batasAwal: 15_550_000, batasAkhir: 17_050_000, tarif: 0.06 },
  { batasAwal: 17_050_000, batasAkhir: 19_500_000, tarif: 0.07 },
  { batasAwal: 19_500_000, batasAkhir: 22_700_000, tarif: 0.08 },
  { batasAwal: 22_700_000, batasAkhir: 26_600_000, tarif: 0.09 },
  { batasAwal: 26_600_000, batasAkhir: 28_100_000, tarif: 0.10 },
  { batasAwal: 28_100_000, batasAkhir: 30_100_000, tarif: 0.11 },
  { batasAwal: 30_100_000, batasAkhir: 32_600_000, tarif: 0.12 },
  { batasAwal: 32_600_000, batasAkhir: 35_400_000, tarif: 0.13 },
  { batasAwal: 35_400_000, batasAkhir: 38_900_000, tarif: 0.14 },
  { batasAwal: 38_900_000, batasAkhir: 43_000_000, tarif: 0.15 },
  { batasAwal: 43_000_000, batasAkhir: 47_400_000, tarif: 0.16 },
  { batasAwal: 47_400_000, batasAkhir: 51_200_000, tarif: 0.17 },
  { batasAwal: 51_200_000, batasAkhir: 55_800_000, tarif: 0.18 },
  { batasAwal: 55_800_000, batasAkhir: 60_400_000, tarif: 0.19 },
  { batasAwal: 60_400_000, batasAkhir: 66_700_000, tarif: 0.20 },
  { batasAwal: 66_700_000, batasAkhir: 74_500_000, tarif: 0.21 },
  { batasAwal: 74_500_000, batasAkhir: 83_200_000, tarif: 0.22 },
  { batasAwal: 83_200_000, batasAkhir: 95_000_000, tarif: 0.23 },
  { batasAwal: 95_000_000, batasAkhir: 110_000_000, tarif: 0.24 },
  { batasAwal: 110_000_000, batasAkhir: 134_000_000, tarif: 0.25 },
  { batasAwal: 134_000_000, batasAkhir: 169_000_000, tarif: 0.26 },
  { batasAwal: 169_000_000, batasAkhir: 221_000_000, tarif: 0.27 },
  { batasAwal: 221_000_000, batasAkhir: 390_000_000, tarif: 0.28 },
  { batasAwal: 390_000_000, batasAkhir: 463_000_000, tarif: 0.30 },
  { batasAwal: 463_000_000, batasAkhir: 561_000_000, tarif: 0.32 },
  { batasAwal: 561_000_000, batasAkhir: 709_000_000, tarif: 0.33 },
  { batasAwal: 709_000_000, batasAkhir: 965_000_000, tarif: 0.34 },
  { batasAwal: 965_000_000, batasAkhir: null, tarif: 0.34 },
];

export type TERKategori = "A" | "B" | "C";

export function getTERKategori(statusPTKP: string): TERKategori {
  const upper = statusPTKP.toUpperCase().replace(/\s/g, "");
  if (upper === "TK/0" || upper === "TK/1") return "A";
  if (upper === "TK/2" || upper === "TK/3" || upper === "K/0") return "B";
  if (upper === "K/1" || upper === "K/2" || upper === "K/3") return "C";
  return "A";
}

export function getTERTable(kategori: TERKategori): TEREntry[] {
  switch (kategori) {
    case "A": return TER_KATEGORI_A;
    case "B": return TER_KATEGORI_B;
    case "C": return TER_KATEGORI_C;
  }
}

export function getTERRate(penghasilanBrutoBulanan: number, kategori: TERKategori): number {
  const table = getTERTable(kategori);
  for (const entry of table) {
    if (entry.batasAkhir === null) return entry.tarif;
    if (penghasilanBrutoBulanan >= entry.batasAwal && penghasilanBrutoBulanan < entry.batasAkhir) {
      return entry.tarif;
    }
  }
  return table[table.length - 1].tarif;
}
