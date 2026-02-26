/**
 * Tarif PPh berdasarkan UU No. 7 Tahun 2021 (UU HPP)
 * Berlaku sejak Tahun Pajak 2022
 */

export interface TarifLayer {
  batasAwal: number;
  batasAkhir: number | null;
  tarif: number;
  label: string;
}

/** Tarif PPh Orang Pribadi Pasal 17 ayat (1) huruf a - UU HPP */
export const TARIF_PPH_OP: TarifLayer[] = [
  {
    batasAwal: 0,
    batasAkhir: 60_000_000,
    tarif: 0.05,
    label: "s.d. Rp60 juta",
  },
  {
    batasAwal: 60_000_000,
    batasAkhir: 250_000_000,
    tarif: 0.15,
    label: "Rp60 juta – Rp250 juta",
  },
  {
    batasAwal: 250_000_000,
    batasAkhir: 500_000_000,
    tarif: 0.25,
    label: "Rp250 juta – Rp500 juta",
  },
  {
    batasAwal: 500_000_000,
    batasAkhir: 5_000_000_000,
    tarif: 0.35,
    label: "Rp500 juta – Rp5 miliar",
  },
  {
    batasAwal: 5_000_000_000,
    batasAkhir: null,
    tarif: 0.35,
    label: "di atas Rp5 miliar",
  },
];

/** Tarif PPh Badan - UU HPP Pasal 17 ayat (1) huruf b */
export const TARIF_PPH_BADAN = 0.22;

/** Tarif PPh Badan Go Public - PP 30/2020 (diskon 3%) */
export const TARIF_PPH_BADAN_PUBLIK = 0.19;

/** Fasilitas Pasal 31E: tarif 50% untuk peredaran bruto s.d. Rp4,8 miliar */
export const BATAS_31E = 4_800_000_000;
export const BATAS_FASILITAS_31E = 50_000_000_000;

/** PPh Final UMKM - PP 55/2022 */
export const TARIF_PPH_FINAL_UMKM = 0.005;
export const BATAS_OMZET_UMKM = 4_800_000_000;
export const OMZET_TIDAK_KENA_PAJAK_UMKM = 500_000_000;

/** PPh Pasal 4 ayat 2 - Final */
export const TARIF_PPH_FINAL = {
  depositoTabungan: 0.20,
  pengalihanTanahBangunan: 0.025,
  sewaLahanBangunan: 0.10,
  jasaKonstruksiKecil: 0.019,
  jasaKonstruksiMenengah: 0.024,
  jasaKonstruksiBesar: 0.027,
  jasaKonstruksiKonsultanKecil: 0.031,
  jasaKonstruksiKonsultanBesar: 0.035,
  dividenOP: 0.10,
  hadiahUndian: 0.25,
  penjualanSahamBursa: 0.001,
  bungaObligasi: 0.10,
} as const;

/** PPh Pasal 22 */
export const TARIF_PPH_22 = {
  imporAPI: 0.025,
  imporNonAPI: 0.075,
  imporTidakPunyaNPWP: 0.075,
  bendaharaPemerintah: 0.015,
  industriSemenBajaKertasOtomotif: 0.003,
  industriFarmasiMakanan: 0.003,
  pembelianBahanAgrikultur: 0.0025,
  pembelianBatuBara: 0.015,
  penjualanEmas: 0.0025,
} as const;

/** PPh Pasal 23 */
export const TARIF_PPH_23 = {
  dividen: 0.15,
  bunga: 0.15,
  royalti: 0.15,
  hadiah: 0.15,
  sewaSelainTanahBangunan: 0.02,
  jasaTeknik: 0.02,
  jasaManajemen: 0.02,
  jasaKonsultan: 0.02,
  jasaLainnya: 0.02,
} as const;

/** PPh Pasal 26 - tarif default tanpa treaty */
export const TARIF_PPH_26_DEFAULT = 0.20;
