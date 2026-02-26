export interface MaterialDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  year: number;
  pages: number;
  pagesLabel?: string;
  fileType: "PDF" | "XLSX" | "GUIDE";
  fileSizeBytes: number;
  updatedAt: string;
  publisher: string;
  coverPath: string;
  filePath: string;
  downloadPath?: string;
  isInternal?: boolean;
  tags: string[];
}

export const MATERIAL_LIBRARY: MaterialDocument[] = [
  {
    id: "panduan-total-lapor-spt-karyawan-coretax-2025",
    title: "Panduan Total Lapor SPT Tahunan Karyawan via Coretax DJP 2025",
    description:
      "Panduan end-to-end untuk profil karyawan TK/0: mulai aktivasi akun, posting SPT, validasi BPA1, sampai BPE berhasil terbit sebelum deadline.",
    category: "Panduan Lengkap",
    year: 2026,
    pages: 10,
    pagesLabel: "bagian",
    fileType: "GUIDE",
    fileSizeBytes: 0,
    updatedAt: "2026-02-26",
    publisher: "Dokumen User",
    coverPath: "/materials/covers/panduan-total-spt-karyawan-coretax-2025.svg",
    filePath: "/materi/panduan-total-lapor-spt-karyawan-coretax-2025",
    downloadPath: "/materials/spt-tahunan-2025-kit.xlsx",
    isInternal: true,
    tags: ["Coretax 2025", "SPT Tahunan", "TK/0", "Step by Step"],
  },
  {
    id: "spt-tahunan-2025-kit",
    title: "SPT Tahunan 2025 Kit (Workbook)",
    description:
      "Workbook praktis berisi dashboard, data registrasi, kalkulasi PTKP/PPh, prompt asistif, dan lembar harta-tanggungan untuk mempercepat pelaporan.",
    category: "Toolkit",
    year: 2026,
    pages: 6,
    pagesLabel: "sheet",
    fileType: "XLSX",
    fileSizeBytes: 26371,
    updatedAt: "2026-02-26",
    publisher: "Dokumen User",
    coverPath: "/materials/covers/spt-tahunan-2025-kit.svg",
    filePath: "https://docs.google.com/spreadsheets/d/1mKDN-rYCbvGk4wFas-09w7T9IlWfgUg7/edit?usp=sharing&ouid=115043369604568201298&rtpof=true&sd=true",
    downloadPath: "/materials/spt-tahunan-2025-kit.xlsx",
    tags: ["Workbook", "Template", "Checklist", "Coretax"],
  },
  {
    id: "spt-tahunan-pph-op-karyawan",
    title: "SPT Tahunan PPh OP Karyawan",
    description:
      "Panduan pelaporan SPT Tahunan Orang Pribadi untuk karyawan, termasuk alur pengisian, validasi data, dan checkpoint dokumen pendukung.",
    category: "Pelaporan SPT",
    year: 2026,
    pages: 40,
    pagesLabel: "halaman",
    fileType: "PDF",
    fileSizeBytes: 2207106,
    updatedAt: "2026-02-26",
    publisher: "Dokumen User",
    coverPath: "/materials/covers/spt-tahunan-pph-op-karyawan.png",
    filePath: "/materials/spt-tahunan-pph-op-karyawan.pdf",
    tags: ["SPT Tahunan", "PPh OP", "Karyawan"],
  },
  {
    id: "imbauan-aktivasi-akun-coretax",
    title: "Imbauan Aktivasi Akun Coretax",
    description:
      "Materi imbauan aktivasi akun Coretax sebagai persiapan administrasi perpajakan, termasuk tahapan aktivasi dan tindak lanjut yang perlu diperhatikan.",
    category: "Coretax",
    year: 2026,
    pages: 54,
    pagesLabel: "halaman",
    fileType: "PDF",
    fileSizeBytes: 5096770,
    updatedAt: "2026-02-26",
    publisher: "Dokumen User",
    coverPath: "/materials/covers/imbauan-aktivasi-akun-coretax.png",
    filePath: "/materials/imbauan-aktivasi-akun-coretax.pdf",
    tags: ["Coretax", "Aktivasi Akun", "Imbauan"],
  },
];

export function formatBytesToMB(bytes: number): string {
  if (bytes <= 0) {
    return "-";
  }
  const kb = bytes / 1024;
  if (kb < 1024) {
    return `${Math.max(1, Math.round(kb))} KB`;
  }
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}
