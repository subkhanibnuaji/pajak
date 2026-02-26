/**
 * Data Coretax DJP — Sistem Inti Administrasi Perpajakan
 * Berlaku sejak 1 Januari 2025
 */

export interface CoretaxModule {
  nama: string;
  deskripsi: string;
  fitur: string[];
  url?: string;
}

export const CORETAX_INFO = {
  nama: "Coretax DJP (Core Tax Administration System)",
  namaResmi: "Sistem Inti Administrasi Perpajakan (SIAP)",
  url: "https://coretaxdjp.pajak.go.id",
  tanggalLaunch: "1 Januari 2025",
  sistemLama: [
    "DJP Online (djponline.pajak.go.id)",
    "e-Faktur Desktop (3.x)",
    "e-Nofa",
    "e-SPT",
    "e-Filing",
    "e-Billing (sse3.pajak.go.id)",
    "e-Registration",
  ],
  dasarHukum: [
    "PP No. 44 Tahun 2024 tentang Sistem Inti Administrasi Perpajakan",
    "PMK No. 81 Tahun 2024 tentang Ketentuan Perpajakan dalam rangka Pelaksanaan SIAP",
    "KEP-67/PJ/2025 tentang Penetapan Implementasi Penuh Coretax DJP",
    "PER-1/PJ/2025 tentang Petunjuk Teknis Coretax DJP",
    "UU No. 7 Tahun 2021 tentang Harmonisasi Peraturan Perpajakan (UU HPP)",
    "PMK No. 136 Tahun 2025 tentang Perubahan PMK 81/2024",
  ],
} as const;

export const CORETAX_MODULES: CoretaxModule[] = [
  {
    nama: "Portal & Taxpayer Account",
    deskripsi: "Dashboard utama wajib pajak dengan informasi profil, saldo, riwayat, dan notifikasi.",
    fitur: [
      "Dashboard ringkasan kewajiban pajak",
      "Profil wajib pajak & update data",
      "Taxpayer Account Management (TAM)",
      "Deposit pajak (prepopulated)",
      "Notifikasi & inbox",
      "Riwayat transaksi lengkap",
    ],
  },
  {
    nama: "e-Registration",
    deskripsi: "Pendaftaran NPWP, aktivasi NIK sebagai NPWP, dan pengukuhan PKP secara online.",
    fitur: [
      "Pendaftaran NPWP baru (OP & Badan)",
      "Aktivasi NIK sebagai NPWP",
      "Pengukuhan PKP",
      "Pencabutan PKP",
      "Penghapusan NPWP",
      "Perubahan data wajib pajak",
    ],
  },
  {
    nama: "e-Faktur (Web-Based)",
    deskripsi: "Pembuatan Faktur Pajak berbasis web, menggantikan e-Faktur Desktop.",
    fitur: [
      "Input faktur pajak keluaran (web)",
      "Faktur pajak masukan (auto-populate)",
      "Upload CSV/XML faktur massal",
      "NSFP otomatis (tanpa e-Nofa terpisah)",
      "Faktur pengganti & pembatalan",
      "Retur faktur pajak",
      "Prepopulated SPT Masa PPN",
    ],
  },
  {
    nama: "e-Bupot (Bukti Potong)",
    deskripsi: "Pembuatan bukti potong PPh unifikasi dan pelaporan SPT Masa PPh.",
    fitur: [
      "Bukti potong PPh 21/26",
      "Bukti potong PPh 23/26",
      "Bukti potong PPh 22",
      "Bukti potong PPh 15",
      "Bukti potong PPh 4(2)",
      "Unifikasi bukti potong",
      "Prepopulated SPT Masa PPh",
    ],
  },
  {
    nama: "e-Filing (SPT)",
    deskripsi: "Pelaporan SPT Masa dan Tahunan secara elektronik melalui Coretax.",
    fitur: [
      "SPT Tahunan OP (1770, 1770S, 1770SS)",
      "SPT Tahunan Badan (1771)",
      "SPT Masa PPN (auto dari e-Faktur)",
      "SPT Masa PPh (auto dari e-Bupot)",
      "SPT Masa PPh 21/26",
      "Pembetulan SPT",
      "Lampiran & dokumen pendukung",
    ],
  },
  {
    nama: "e-Billing & Pembayaran",
    deskripsi: "Pembuatan kode billing dan pencatatan pembayaran pajak.",
    fitur: [
      "Generate kode billing (ID Billing)",
      "Deposit pajak",
      "Pemindahbukuan (Pbk)",
      "Pengembalian (restitusi)",
      "Rekonsiliasi pembayaran",
      "Integrasi MPN (Modul Penerimaan Negara)",
    ],
  },
];

export interface CoretaxFAQ {
  pertanyaan: string;
  jawaban: string;
  kategori: "login" | "efaktur" | "spt" | "billing" | "umum" | "teknis";
}

export const CORETAX_FAQ: CoretaxFAQ[] = [
  {
    pertanyaan: "Bagaimana cara login pertama kali ke Coretax?",
    jawaban: "Akses coretaxdjp.pajak.go.id, klik 'Login', gunakan NIK/NPWP 16 digit dan password DJP Online yang sudah ada. Jika belum pernah login, lakukan aktivasi akun terlebih dahulu melalui email terdaftar.",
    kategori: "login",
  },
  {
    pertanyaan: "Apakah NPWP 15 digit masih bisa digunakan?",
    jawaban: "NPWP 15 digit masih berlaku sebagai identitas pajak, namun untuk login Coretax gunakan NIK (WP OP) atau NPWP 16 digit (WP Badan). Format NPWP 16 digit: tambahkan '0' di depan NPWP 15 digit.",
    kategori: "login",
  },
  {
    pertanyaan: "e-Faktur Desktop masih bisa dipakai?",
    jawaban: "Tidak. Sejak 1 Januari 2025, e-Faktur Desktop (versi 3.x dan 4.0) sudah tidak digunakan. Seluruh pembuatan faktur pajak dilakukan melalui Coretax web-based. Data faktur lama sudah dimigrasi.",
    kategori: "efaktur",
  },
  {
    pertanyaan: "Bagaimana cara minta NSFP di Coretax?",
    jawaban: "NSFP di Coretax bersifat otomatis. Tidak perlu lagi meminta jatah NSFP melalui e-Nofa. Saat membuat faktur pajak di Coretax, nomor seri akan digenerate otomatis oleh sistem.",
    kategori: "efaktur",
  },
  {
    pertanyaan: "SPT Masa PPN bagaimana pelaporannya?",
    jawaban: "SPT Masa PPN di Coretax bersifat prepopulated — otomatis terisi dari data faktur pajak keluaran dan masukan. WP tinggal review, lengkapi jika ada item tambahan, lalu submit.",
    kategori: "spt",
  },
  {
    pertanyaan: "Apakah DJP Online masih bisa diakses?",
    jawaban: "DJP Online (djponline.pajak.go.id) sudah ditutup untuk layanan utama. Beberapa fitur mungkin masih tersedia dalam masa transisi, namun semua layanan resmi sudah dialihkan ke Coretax.",
    kategori: "umum",
  },
  {
    pertanyaan: "Coretax sering error, bagaimana solusinya?",
    jawaban: "Beberapa tips: (1) Gunakan browser Chrome/Edge terbaru, (2) Bersihkan cache & cookies, (3) Hindari jam sibuk (08.00-10.00 WIB), (4) Pastikan koneksi internet stabil, (5) Cek status layanan di pajak.go.id. Jika masih error, hubungi Kring Pajak 1500200.",
    kategori: "teknis",
  },
  {
    pertanyaan: "Bagaimana cara membuat billing di Coretax?",
    jawaban: "Login Coretax → Menu 'Pembayaran' → 'Buat Billing' → Pilih jenis pajak (MAP/KJS) → Input nominal → Generate. Kode billing bisa dibayar via bank persepsi, ATM, internet banking, atau e-wallet.",
    kategori: "billing",
  },
  {
    pertanyaan: "Apakah bisa menunjuk kuasa/wakil di Coretax?",
    jawaban: "Ya. Di Coretax tersedia fitur 'Impersonation' atau penunjukan kuasa. WP bisa menunjuk konsultan pajak atau pihak lain sebagai kuasa untuk mengakses dan mengelola kewajiban pajak melalui menu Taxpayer Account.",
    kategori: "umum",
  },
  {
    pertanyaan: "Data dari DJP Online / e-Faktur lama kemana?",
    jawaban: "Data historis dari DJP Online, e-Faktur Desktop, dan sistem lama sudah dimigrasi ke Coretax. WP bisa mengakses riwayat faktur, SPT, dan pembayaran melalui menu riwayat di Coretax.",
    kategori: "umum",
  },
];

export const CORETAX_TIMELINE = [
  { tahun: "2018", event: "Penandatanganan kontrak pengembangan SIAP/Coretax" },
  { tahun: "2019-2023", event: "Pengembangan dan pengujian sistem" },
  { tahun: "2024 Jul", event: "Piloting terbatas dengan WP tertentu" },
  { tahun: "2024 Okt", event: "PMK 81/2024 diterbitkan sebagai payung hukum" },
  { tahun: "2024 Nov", event: "Sosialisasi intensif dan simulasi" },
  { tahun: "2025 Jan", event: "Go-live Coretax DJP secara nasional" },
  { tahun: "2025 Feb", event: "Stabilisasi dan perbaikan berkelanjutan" },
  { tahun: "2025 Mar", event: "PMK 136/2025 perubahan PMK 81/2024 (penyempurnaan)" },
];
