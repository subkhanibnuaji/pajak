/** Shared types for all tax calculators */

export type StatusPTKP =
  | "TK/0"
  | "TK/1"
  | "TK/2"
  | "TK/3"
  | "K/0"
  | "K/1"
  | "K/2"
  | "K/3"
  | "K/I/0"
  | "K/I/1"
  | "K/I/2"
  | "K/I/3";

export type MetodePPh21 = "gross" | "net" | "gross-up";

export interface PPh21Input {
  penghasilanBruto: number;
  statusPTKP: StatusPTKP;
  metode: MetodePPh21;
  biayaJabatan?: boolean;
  iuranPensiun?: number;
  tunjanganLainnya?: number;
  isDesember?: boolean;
  penghasilanSetahun?: number;
  pphSudahDipotong?: number;
}

export interface PPh21Step {
  label: string;
  formula?: string;
  amount: number;
  note?: string;
}

export interface PPh21Result {
  penghasilanBrutoSetahun: number;
  biayaJabatan: number;
  iuranPensiun: number;
  penghasilanNeto: number;
  ptkp: number;
  pkp: number;
  pphTerutangSetahun: number;
  pphPerBulan: number;
  terRate?: number;
  terPPhBulanan?: number;
  steps: PPh21Step[];
  dasarHukum: string[];
}

export interface PPnInput {
  harga: number;
  includesPPN: boolean;
  tarifPPN?: number;
}

export interface PPnResult {
  dpp: number;
  ppn: number;
  hargaSebelumPPN: number;
  hargaSetelahPPN: number;
  tarifPPN: number;
  steps: PPh21Step[];
}

export interface BPHTBInput {
  njop: number;
  npoptkp: number;
}

export interface BPHTBResult {
  njop: number;
  npoptkp: number;
  npopkp: number;
  bphtb: number;
  steps: PPh21Step[];
}
