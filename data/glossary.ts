/**
 * Glosarium Istilah Perpajakan Indonesia
 * Sumber: UU KUP, UU PPh, UU PPN, UU HPP
 */

export interface GlossaryEntry {
  istilah: string;
  definisi: string;
  kategori: "umum" | "pph" | "ppn" | "kup" | "pbb" | "internasional" | "digital";
  dasarHukum?: string;
}

export const GLOSSARY: GlossaryEntry[] = [
  { istilah: "NPWP", definisi: "Nomor Pokok Wajib Pajak — identitas wajib pajak yang diterbitkan DJP. Sejak UU HPP, NIK berfungsi sebagai NPWP untuk WP orang pribadi.", kategori: "kup", dasarHukum: "UU 7/2021 Pasal 2" },
  { istilah: "PKP", definisi: "Pengusaha Kena Pajak — pengusaha yang melakukan penyerahan BKP/JKP dan wajib memungut PPN jika omzet melebihi Rp4,8 miliar/tahun.", kategori: "ppn", dasarHukum: "UU PPN Pasal 3A" },
  { istilah: "PTKP", definisi: "Penghasilan Tidak Kena Pajak — batas penghasilan yang tidak dikenai PPh. TK/0 = Rp54.000.000/tahun.", kategori: "pph", dasarHukum: "PMK-101/2016" },
  { istilah: "PKP (Penghasilan)", definisi: "Penghasilan Kena Pajak — penghasilan neto dikurangi PTKP, yang menjadi dasar penghitungan PPh terutang.", kategori: "pph", dasarHukum: "UU PPh Pasal 6" },
  { istilah: "SPT", definisi: "Surat Pemberitahuan — surat yang digunakan WP untuk melaporkan perhitungan dan pembayaran pajak.", kategori: "kup", dasarHukum: "UU KUP Pasal 1" },
  { istilah: "SKP", definisi: "Surat Ketetapan Pajak — surat ketetapan yang diterbitkan setelah pemeriksaan pajak (SKPKB, SKPKBT, SKPLB, SKPN).", kategori: "kup" },
  { istilah: "STP", definisi: "Surat Tagihan Pajak — surat untuk menagih pajak dan/atau sanksi administrasi.", kategori: "kup" },
  { istilah: "DPP", definisi: "Dasar Pengenaan Pajak — jumlah yang menjadi dasar perhitungan pajak terutang.", kategori: "umum" },
  { istilah: "Faktur Pajak", definisi: "Bukti pungutan pajak yang dibuat oleh PKP saat melakukan penyerahan BKP/JKP.", kategori: "ppn", dasarHukum: "UU PPN Pasal 13" },
  { istilah: "e-Faktur", definisi: "Faktur Pajak elektronik yang dibuat melalui aplikasi DJP atau Coretax.", kategori: "ppn" },
  { istilah: "TER", definisi: "Tarif Efektif Rata-Rata — tarif yang digunakan untuk menghitung PPh 21 Masa Jan-Nov sejak 2024.", kategori: "pph", dasarHukum: "PP 58/2023" },
  { istilah: "Withholding Tax", definisi: "Pajak yang dipotong/dipungut oleh pihak lain. Contoh: PPh 21 dipotong pemberi kerja.", kategori: "umum" },
  { istilah: "Self Assessment", definisi: "Sistem pemungutan pajak dimana WP menghitung, memperhitungkan, menyetor, dan melaporkan pajaknya sendiri.", kategori: "kup" },
  { istilah: "Pemeriksaan Pajak", definisi: "Kegiatan menghimpun dan mengolah data/keterangan untuk menguji kepatuhan WP.", kategori: "kup", dasarHukum: "UU KUP Pasal 29" },
  { istilah: "Restitusi", definisi: "Pengembalian kelebihan pembayaran pajak kepada WP.", kategori: "kup" },
  { istilah: "Kompensasi", definisi: "Kelebihan pembayaran pajak yang diperhitungkan dengan utang pajak periode berikutnya.", kategori: "kup" },
  { istilah: "NJOP", definisi: "Nilai Jual Objek Pajak — dasar pengenaan PBB dan BPHTB.", kategori: "pbb" },
  { istilah: "BPHTB", definisi: "Bea Perolehan Hak atas Tanah dan Bangunan — pajak atas perolehan hak (jual beli, warisan, hibah, dll).", kategori: "pbb" },
  { istilah: "Coretax", definisi: "Core Tax Administration System — sistem administrasi pajak baru DJP yang berlaku sejak Januari 2025.", kategori: "kup" },
  { istilah: "BKP", definisi: "Barang Kena Pajak — barang berwujud/tidak berwujud yang dikenai PPN.", kategori: "ppn" },
  { istilah: "JKP", definisi: "Jasa Kena Pajak — jasa yang dikenai PPN.", kategori: "ppn" },
  { istilah: "PPh Final", definisi: "Pajak penghasilan yang bersifat final — tidak dapat dikreditkan dan penghasilannya tidak digabung dalam SPT Tahunan.", kategori: "pph" },
  { istilah: "Rekonsiliasi Fiskal", definisi: "Proses penyesuaian laba komersial menjadi laba fiskal melalui koreksi positif dan negatif.", kategori: "pph" },
  { istilah: "Transfer Pricing", definisi: "Penentuan harga transaksi antar pihak yang memiliki hubungan istimewa, harus sesuai arm's length principle.", kategori: "internasional" },
  { istilah: "P3B (Tax Treaty)", definisi: "Persetujuan Penghindaran Pajak Berganda — perjanjian bilateral untuk menghindari pemajakan ganda.", kategori: "internasional" },
  { istilah: "BUT", definisi: "Bentuk Usaha Tetap — bentuk usaha yang digunakan subjek pajak luar negeri untuk menjalankan usaha di Indonesia.", kategori: "pph", dasarHukum: "UU PPh Pasal 2(5)" },
  { istilah: "PMSE", definisi: "Perdagangan Melalui Sistem Elektronik — e-commerce yang dikenai PPN.", kategori: "digital" },
  { istilah: "Natura", definisi: "Penggantian/imbalan dalam bentuk barang/kenikmatan selain uang, kini merupakan objek PPh 21 (PMK-72/2023).", kategori: "pph" },
  { istilah: "Kredit Pajak", definisi: "Pajak yang telah dipotong/dipungut/dibayar yang dapat dikurangkan dari PPh terutang akhir tahun.", kategori: "pph" },
  { istilah: "MAP", definisi: "Kode Mata Anggaran Penerimaan — kode yang menentukan jenis pajak pada saat penyetoran.", kategori: "kup" },
  { istilah: "KJS", definisi: "Kode Jenis Setoran — kode yang menentukan jenis setoran pajak dalam billing.", kategori: "kup" },
  { istilah: "SIAP", definisi: "Sistem Inti Administrasi Perpajakan — nama resmi Coretax DJP, sistem administrasi pajak terpadu yang berlaku sejak Januari 2025.", kategori: "kup", dasarHukum: "PP 44/2024" },
  { istilah: "Deposit Pajak", definisi: "Dana yang disetor ke akun wajib pajak di Coretax tanpa terikat jenis pajak tertentu, bisa digunakan untuk membayar pajak apa saja.", kategori: "kup", dasarHukum: "PMK 81/2024 Pasal 1 angka 112" },
  { istilah: "Impersonasi", definisi: "Fitur di Coretax untuk beralih dari akun pribadi (NIK pengurus) ke akun WP Badan yang dikelola.", kategori: "kup" },
  { istilah: "NSFP", definisi: "Nomor Seri Faktur Pajak — nomor identitas faktur pajak. Di Coretax, NSFP digenerate otomatis (17 digit).", kategori: "ppn" },
  { istilah: "e-Bupot", definisi: "Bukti Potong Elektronik — aplikasi di Coretax untuk membuat bukti potong PPh (21, 23, 26, 4(2)) secara unifikasi.", kategori: "pph" },
  { istilah: "BPE", definisi: "Bukti Penerimaan Elektronik — bukti resmi bahwa SPT telah diterima oleh DJP melalui Coretax.", kategori: "kup" },
  { istilah: "Kode Otorisasi DJP", definisi: "Tanda tangan digital yang digunakan di Coretax untuk menandatangani faktur pajak, bukti potong, dan SPT.", kategori: "kup" },
  { istilah: "PMK 81/2024", definisi: "Peraturan Menteri Keuangan tentang ketentuan perpajakan dalam pelaksanaan Coretax (SIAP). Mencabut 42 regulasi lama.", kategori: "kup", dasarHukum: "PMK 81/2024" },
];
