/**
 * Penghasilan Tidak Kena Pajak (PTKP)
 * Dasar Hukum: PMK-101/PMK.010/2016 (berlaku sejak 2016, masih berlaku)
 * Diperbarui konteks: UU HPP tidak mengubah PTKP
 */

export interface PTKPEntry {
  status: string;
  kode: string;
  jumlah: number;
  keterangan: string;
}

/** PTKP per tahun (berlaku sejak 2016) */
export const PTKP: PTKPEntry[] = [
  { status: "TK/0", kode: "TK/0", jumlah: 54_000_000, keterangan: "Tidak Kawin, tanpa tanggungan" },
  { status: "TK/1", kode: "TK/1", jumlah: 58_500_000, keterangan: "Tidak Kawin, 1 tanggungan" },
  { status: "TK/2", kode: "TK/2", jumlah: 63_000_000, keterangan: "Tidak Kawin, 2 tanggungan" },
  { status: "TK/3", kode: "TK/3", jumlah: 67_500_000, keterangan: "Tidak Kawin, 3 tanggungan" },
  { status: "K/0", kode: "K/0", jumlah: 58_500_000, keterangan: "Kawin, tanpa tanggungan" },
  { status: "K/1", kode: "K/1", jumlah: 63_000_000, keterangan: "Kawin, 1 tanggungan" },
  { status: "K/2", kode: "K/2", jumlah: 67_500_000, keterangan: "Kawin, 2 tanggungan" },
  { status: "K/3", kode: "K/3", jumlah: 72_000_000, keterangan: "Kawin, 3 tanggungan" },
  { status: "K/I/0", kode: "K/I/0", jumlah: 112_500_000, keterangan: "Kawin, penghasilan istri digabung, tanpa tanggungan" },
  { status: "K/I/1", kode: "K/I/1", jumlah: 117_000_000, keterangan: "Kawin, penghasilan istri digabung, 1 tanggungan" },
  { status: "K/I/2", kode: "K/I/2", jumlah: 121_500_000, keterangan: "Kawin, penghasilan istri digabung, 2 tanggungan" },
  { status: "K/I/3", kode: "K/I/3", jumlah: 126_000_000, keterangan: "Kawin, penghasilan istri digabung, 3 tanggungan" },
];

/** PTKP per bulan */
export const PTKP_BULANAN: Record<string, number> = Object.fromEntries(
  PTKP.map((p) => [p.kode, Math.round(p.jumlah / 12)])
);

/** Komponen PTKP */
export const PTKP_COMPONENTS = {
  wajibPajakSendiri: 54_000_000,
  statusKawin: 4_500_000,
  tanggunganPerOrang: 4_500_000,
  maxTanggungan: 3,
  penghasilanIstriDigabung: 54_000_000,
} as const;

export function hitungPTKP(
  statusKawin: boolean,
  tanggungan: number,
  istriGabung: boolean = false
): number {
  let ptkp = PTKP_COMPONENTS.wajibPajakSendiri;
  if (statusKawin) {
    ptkp += PTKP_COMPONENTS.statusKawin;
  }
  const tg = Math.min(tanggungan, PTKP_COMPONENTS.maxTanggungan);
  ptkp += tg * PTKP_COMPONENTS.tanggunganPerOrang;
  if (istriGabung) {
    ptkp += PTKP_COMPONENTS.penghasilanIstriDigabung;
  }
  return ptkp;
}
