/**
 * Master Index Regulasi Perpajakan
 * Index utama peraturan perpajakan yang sering dirujuk
 */

export interface RegulasiEntry {
  nomor: string;
  judul: string;
  tipe: "UU" | "PP" | "PMK" | "PER" | "SE" | "KEP";
  tahun: number;
  topik: string[];
  status: "berlaku" | "dicabut" | "diubah";
  urlJDIH?: string;
  catatan?: string;
}

export const REGULASI_INDEX: RegulasiEntry[] = [
  // UU
  { nomor: "UU 7/2021", judul: "Harmonisasi Peraturan Perpajakan (HPP)", tipe: "UU", tahun: 2021, topik: ["PPh", "PPN", "KUP", "Cukai", "Pajak Karbon"], status: "berlaku" },
  { nomor: "UU 36/2008", judul: "Perubahan Keempat UU Pajak Penghasilan", tipe: "UU", tahun: 2008, topik: ["PPh"], status: "diubah", catatan: "Diubah oleh UU HPP 7/2021" },
  { nomor: "UU 42/2009", judul: "Perubahan Ketiga UU PPN dan PPnBM", tipe: "UU", tahun: 2009, topik: ["PPN", "PPnBM"], status: "diubah", catatan: "Diubah oleh UU HPP 7/2021" },
  { nomor: "UU 16/2009", judul: "Perubahan Keempat UU KUP", tipe: "UU", tahun: 2009, topik: ["KUP"], status: "diubah", catatan: "Diubah oleh UU HPP 7/2021" },
  { nomor: "UU 10/2020", judul: "Bea Meterai", tipe: "UU", tahun: 2020, topik: ["Bea Materai"], status: "berlaku" },
  { nomor: "UU 1/2022", judul: "Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah (HKPD)", tipe: "UU", tahun: 2022, topik: ["Pajak Daerah", "BPHTB", "PBB"], status: "berlaku" },

  // PP
  { nomor: "PP 55/2022", judul: "Penyesuaian Pengaturan di Bidang PPh", tipe: "PP", tahun: 2022, topik: ["PPh", "UMKM"], status: "berlaku", catatan: "PPh Final UMKM 0,5%, threshold Rp500 juta" },
  { nomor: "PP 58/2023", judul: "Tarif Pemotongan PPh Pasal 21 atas Penghasilan Sehubungan dengan Pekerjaan, Jasa, atau Kegiatan WP OP", tipe: "PP", tahun: 2023, topik: ["PPh 21", "TER"], status: "berlaku" },
  { nomor: "PP 44/2022", judul: "Penerapan terhadap PPN Barang dan Jasa serta PPnBM", tipe: "PP", tahun: 2022, topik: ["PPN", "PPnBM"], status: "berlaku" },
  { nomor: "PP 49/2022", judul: "PPN Dibebaskan dan PPN/PPnBM Tidak Dipungut atas Impor/Penyerahan BKP/JKP Tertentu", tipe: "PP", tahun: 2022, topik: ["PPN"], status: "berlaku" },
  { nomor: "PP 50/2022", judul: "Tata Cara Pelaksanaan Hak dan Pemenuhan Kewajiban Perpajakan", tipe: "PP", tahun: 2022, topik: ["KUP"], status: "berlaku" },
  { nomor: "PP 35/2023", judul: "Ketentuan Umum Pajak Daerah dan Retribusi Daerah", tipe: "PP", tahun: 2023, topik: ["Pajak Daerah"], status: "berlaku" },

  // PMK
  { nomor: "PMK-168/2023", judul: "Petunjuk Pelaksanaan Pemotongan Pajak atas Penghasilan Sehubungan dengan Pekerjaan, Jasa, atau Kegiatan OP", tipe: "PMK", tahun: 2023, topik: ["PPh 21", "TER"], status: "berlaku" },
  { nomor: "PMK-72/2023", judul: "Perlakuan PPh atas Penggantian atau Imbalan Sehubungan dengan Pekerjaan atau Jasa yang Diterima dalam Bentuk Natura dan/atau Kenikmatan", tipe: "PMK", tahun: 2023, topik: ["PPh 21", "Natura"], status: "berlaku" },
  { nomor: "PMK-131/2024", judul: "Perlakuan PPN atas Impor BKP, Penyerahan BKP, Penyerahan JKP, Pemanfaatan BKP TBW/JKP dari Luar Daerah Pabean", tipe: "PMK", tahun: 2024, topik: ["PPN"], status: "berlaku", catatan: "PPN 12% barang mewah" },
  { nomor: "PMK-81/2024", judul: "Ketentuan Perpajakan dalam rangka Pelaksanaan Sistem Inti Administrasi Perpajakan (Coretax)", tipe: "PMK", tahun: 2024, topik: ["Coretax", "KUP"], status: "berlaku" },
  { nomor: "PMK-172/2023", judul: "Penerapan Prinsip Kewajaran dan Kelaziman Usaha dalam Transaksi yang Dipengaruhi Hubungan Istimewa", tipe: "PMK", tahun: 2023, topik: ["Transfer Pricing"], status: "berlaku" },
  { nomor: "PMK-101/2016", judul: "Penyesuaian Besarnya PTKP", tipe: "PMK", tahun: 2016, topik: ["PPh", "PTKP"], status: "berlaku", catatan: "PTKP terakhir, masih berlaku" },
  { nomor: "PMK-136/2025", judul: "Perubahan atas PMK 81/2024 tentang Ketentuan Perpajakan dalam Pelaksanaan SIAP (Coretax)", tipe: "PMK", tahun: 2025, topik: ["Coretax", "KUP"], status: "berlaku", catatan: "Penyempurnaan PMK 81/2024" },
  { nomor: "PP 44/2024", judul: "Sistem Inti Administrasi Perpajakan (SIAP)", tipe: "PP", tahun: 2024, topik: ["Coretax"], status: "berlaku", catatan: "Payung hukum utama Coretax DJP" },

  // KEP
  { nomor: "KEP-54/PJ/2025", judul: "Penetapan PKP yang Dapat Menggunakan e-Faktur Client Desktop", tipe: "KEP", tahun: 2025, topik: ["Coretax", "e-Faktur", "PPN"], status: "berlaku", catatan: "Fallback e-Faktur Desktop selama transisi" },
  { nomor: "KEP-67/PJ/2025", judul: "Penetapan Relaksasi Sanksi Administrasi Masa Transisi Coretax", tipe: "KEP", tahun: 2025, topik: ["Coretax", "Sanksi"], status: "berlaku", catatan: "Relaksasi sanksi selama kendala Coretax" },

  // PER
  { nomor: "PER-11/PJ/2025", judul: "Tata Cara Pelaporan PPh, PPN, PPnBM, Bea Meterai dalam Coretax", tipe: "PER", tahun: 2025, topik: ["Coretax", "SPT", "e-Faktur", "e-Bupot"], status: "berlaku", catatan: "Mencabut 25 PER lama, format SPT baru" },
];
