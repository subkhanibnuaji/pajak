import {
  BookOpen,
  Calculator,
  FileText,
  BookMarked,
  Calendar,
  Scale,
  Building2,
  Globe,
  Laptop,
  Gift,
  Landmark,
  Monitor,
  LibraryBig,
  Bot,
  Bell,
  Users,
  File,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  children?: NavItem[];
  badge?: string;
}

export const KNOWLEDGE_NAV: NavItem[] = [
  {
    title: "Fondasi Perpajakan",
    href: "/fondasi",
    icon: Landmark,
    children: [
      { title: "Sejarah Perpajakan", href: "/fondasi/sejarah" },
      { title: "Asas Perpajakan", href: "/fondasi/asas-perpajakan" },
      { title: "Sistem Pemungutan", href: "/fondasi/sistem-pemungutan" },
      { title: "Lembaga Perpajakan", href: "/fondasi/lembaga" },
    ],
  },
  {
    title: "Pajak Penghasilan (PPh)",
    href: "/pph",
    icon: BookOpen,
    children: [
      { title: "Konsep Dasar PPh", href: "/pph/konsep-dasar" },
      {
        title: "PPh Pasal 21",
        href: "/pph/pasal-21",
        badge: "TER",
        children: [
          { title: "Tarif Efektif (TER)", href: "/pph/pasal-21/ter" },
          { title: "Gross-Up", href: "/pph/pasal-21/gross-up" },
          { title: "Natura & Kenikmatan", href: "/pph/pasal-21/natura" },
        ],
      },
      { title: "PPh Pasal 22", href: "/pph/pasal-22" },
      { title: "PPh Pasal 23", href: "/pph/pasal-23" },
      { title: "PPh Pasal 25", href: "/pph/pasal-25" },
      { title: "PPh Pasal 26", href: "/pph/pasal-26" },
      { title: "PPh Pasal 4(2) Final", href: "/pph/pasal-4-ayat-2" },
      {
        title: "PPh Badan",
        href: "/pph/badan",
        children: [
          { title: "Rekonsiliasi Fiskal", href: "/pph/badan/rekonsiliasi-fiskal" },
        ],
      },
      { title: "PPh Internasional", href: "/pph/internasional" },
    ],
  },
  {
    title: "PPN & PPnBM",
    href: "/ppn",
    icon: FileText,
    children: [
      { title: "Mekanisme PPN", href: "/ppn/mekanisme" },
      { title: "Faktur Pajak", href: "/ppn/faktur-pajak" },
      { title: "PPnBM", href: "/ppn/ppnbm" },
      { title: "PPN PMSE/Digital", href: "/ppn/pmse", badge: "New" },
      { title: "Fasilitas PPN", href: "/ppn/fasilitas" },
    ],
  },
  {
    title: "KUP",
    href: "/kup",
    icon: Scale,
    children: [
      { title: "NPWP & PKP", href: "/kup/npwp" },
      { title: "SPT", href: "/kup/spt" },
      { title: "Pembayaran Pajak", href: "/kup/pembayaran" },
      { title: "Pemeriksaan Pajak", href: "/kup/pemeriksaan" },
      { title: "Keberatan & Banding", href: "/kup/keberatan-banding" },
      { title: "Sanksi Perpajakan", href: "/kup/sanksi" },
    ],
  },
  {
    title: "PBB & BPHTB",
    href: "/pbb",
    icon: Building2,
    children: [
      { title: "BPHTB", href: "/pbb/bphtb" },
    ],
  },
  {
    title: "Coretax DJP",
    href: "/coretax",
    icon: Monitor,
    badge: "2025",
    children: [
      { title: "Tutorial Login & Aktivasi", href: "/coretax/tutorial" },
      { title: "Taxpayer Account", href: "/coretax/taxpayer-account" },
      { title: "e-Faktur Web-Based", href: "/coretax/e-faktur" },
      { title: "Pelaporan SPT", href: "/coretax/spt" },
      { title: "Pembayaran & Billing", href: "/coretax/pembayaran" },
      { title: "Troubleshooting", href: "/coretax/troubleshooting" },
    ],
  },
  {
    title: "Bea Materai",
    href: "/bea-materai",
    icon: BookMarked,
  },
  {
    title: "Pajak Daerah",
    href: "/pajak-daerah",
    icon: Building2,
    children: [
      { title: "Pajak Provinsi", href: "/pajak-daerah/provinsi" },
      { title: "Pajak Kab/Kota", href: "/pajak-daerah/kabkota" },
    ],
  },
  {
    title: "Transfer Pricing",
    href: "/transfer-pricing",
    icon: Globe,
  },
  {
    title: "Pajak Digital",
    href: "/pajak-digital",
    icon: Laptop,
  },
  {
    title: "Fasilitas & Insentif",
    href: "/fasilitas-insentif",
    icon: Gift,
  },
];

export const SUPER_APP_NAV: NavItem[] = [
  {
    title: "AI Tax Assistant",
    href: "/ai-assistant",
    icon: Bot,
    badge: "New",
  },
  {
    title: "Regulatory Alerts",
    href: "/alerts",
    icon: Bell,
    badge: "5 New",
  },
  {
    title: "ASEAN Tax Hub",
    href: "/asean",
    icon: Globe,
  },
  {
    title: "Template Library",
    href: "/templates",
    icon: File,
  },
  {
    title: "Community",
    href: "/community",
    icon: Users,
  },
];

export const TOOLS_NAV: NavItem[] = [
  {
    title: "Kalkulator",
    href: "/kalkulator",
    icon: Calculator,
    children: [
      { title: "PPh 21", href: "/kalkulator/pph-21" },
      { title: "PPh Badan", href: "/kalkulator/pph-badan" },
      { title: "PPN", href: "/kalkulator/ppn" },
      { title: "BPHTB", href: "/kalkulator/bphtb" },
      { title: "PPh Final UMKM", href: "/kalkulator/pph-final-umkm" },
      { title: "Angsuran PPh 25", href: "/kalkulator/pph-25" },
    ],
  },
  {
    title: "Studi Kasus",
    href: "/kasus",
    icon: FileText,
  },
  {
    title: "Regulasi",
    href: "/regulasi",
    icon: BookMarked,
  },
  {
    title: "Materi & Riset",
    href: "/materi",
    icon: LibraryBig,
    badge: "PDF",
  },
  {
    title: "Glosarium",
    href: "/glosarium",
    icon: BookOpen,
  },
  {
    title: "Kalender Pajak",
    href: "/kalender",
    icon: Calendar,
  },
];
