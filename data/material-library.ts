export interface MaterialDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  year: number;
  pages: number;
  fileSizeBytes: number;
  updatedAt: string;
  publisher: string;
  coverPath: string;
  filePath: string;
  tags: string[];
}

export const MATERIAL_LIBRARY: MaterialDocument[] = [
  {
    id: "spt-tahunan-pph-op-karyawan",
    title: "SPT Tahunan PPh OP Karyawan",
    description:
      "Panduan pelaporan SPT Tahunan Orang Pribadi untuk karyawan, termasuk alur pengisian, validasi data, dan checkpoint dokumen pendukung.",
    category: "Pelaporan SPT",
    year: 2026,
    pages: 40,
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
    fileSizeBytes: 5096770,
    updatedAt: "2026-02-26",
    publisher: "Dokumen User",
    coverPath: "/materials/covers/imbauan-aktivasi-akun-coretax.png",
    filePath: "/materials/imbauan-aktivasi-akun-coretax.pdf",
    tags: ["Coretax", "Aktivasi Akun", "Imbauan"],
  },
];

export function formatBytesToMB(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}
