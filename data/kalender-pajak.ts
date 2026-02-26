/**
 * Kalender Pajak — Deadline Pelaporan & Pembayaran
 * Deadline bulanan yang berulang setiap bulan/tahun
 */

export interface DeadlineItem {
  tanggal: number;
  bulanRelatif: "bulan-berjalan" | "bulan-berikutnya";
  deskripsi: string;
  jenisPajak: string;
  tipe: "setor" | "lapor";
}

/** Deadline bulanan (berulang setiap bulan) */
export const DEADLINE_BULANAN: DeadlineItem[] = [
  { tanggal: 10, bulanRelatif: "bulan-berikutnya", deskripsi: "Setor PPh 21/26 Masa", jenisPajak: "PPh 21/26", tipe: "setor" },
  { tanggal: 10, bulanRelatif: "bulan-berikutnya", deskripsi: "Setor PPh 23/26 Masa", jenisPajak: "PPh 23/26", tipe: "setor" },
  { tanggal: 15, bulanRelatif: "bulan-berikutnya", deskripsi: "Setor PPh 25 (Angsuran)", jenisPajak: "PPh 25", tipe: "setor" },
  { tanggal: 15, bulanRelatif: "bulan-berikutnya", deskripsi: "Setor PPh 22 Impor/Bendahara", jenisPajak: "PPh 22", tipe: "setor" },
  { tanggal: 15, bulanRelatif: "bulan-berikutnya", deskripsi: "Setor PPh 4(2) Final", jenisPajak: "PPh 4(2)", tipe: "setor" },
  { tanggal: 15, bulanRelatif: "bulan-berikutnya", deskripsi: "Setor PPh Final UMKM (0,5%)", jenisPajak: "PPh Final", tipe: "setor" },
  { tanggal: 20, bulanRelatif: "bulan-berikutnya", deskripsi: "Lapor SPT Masa PPh 21/26", jenisPajak: "PPh 21/26", tipe: "lapor" },
  { tanggal: 20, bulanRelatif: "bulan-berikutnya", deskripsi: "Lapor SPT Masa PPh 23/26", jenisPajak: "PPh 23/26", tipe: "lapor" },
  { tanggal: 20, bulanRelatif: "bulan-berikutnya", deskripsi: "Lapor SPT Masa PPh 22", jenisPajak: "PPh 22", tipe: "lapor" },
  { tanggal: 20, bulanRelatif: "bulan-berikutnya", deskripsi: "Lapor SPT Masa PPh 4(2)", jenisPajak: "PPh 4(2)", tipe: "lapor" },
  { tanggal: 20, bulanRelatif: "bulan-berikutnya", deskripsi: "Lapor SPT Masa PPh 25", jenisPajak: "PPh 25", tipe: "lapor" },
  { tanggal: 31, bulanRelatif: "bulan-berikutnya", deskripsi: "Setor PPN Masa (akhir bulan berikutnya)", jenisPajak: "PPN", tipe: "setor" },
  { tanggal: 31, bulanRelatif: "bulan-berikutnya", deskripsi: "Lapor SPT Masa PPN (akhir bulan berikutnya)", jenisPajak: "PPN", tipe: "lapor" },
];

/** Deadline tahunan */
export const DEADLINE_TAHUNAN = [
  { tanggal: "31 Maret", deskripsi: "Batas akhir penyampaian SPT Tahunan PPh Orang Pribadi", jenisPajak: "PPh OP" },
  { tanggal: "30 April", deskripsi: "Batas akhir penyampaian SPT Tahunan PPh Badan", jenisPajak: "PPh Badan" },
  { tanggal: "30 April", deskripsi: "Batas akhir pelunasan PPh Pasal 29 (kurang bayar) — PPh OP", jenisPajak: "PPh 29" },
  { tanggal: "30 April", deskripsi: "Batas akhir pelunasan PPh Pasal 29 — PPh Badan", jenisPajak: "PPh 29" },
] as const;
