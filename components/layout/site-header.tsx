"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Menu, 
  Search, 
  Bookmark, 
  Bot, 
  Bell, 
  ChevronDown,
  Library,
  FileText,
  BookOpen,
  Calculator,
  Calendar,
  Globe,
  Users,
  File,
  Scale,
  Building2,
  Landmark,
  Laptop,
  Gift,
  Monitor,
  Briefcase,
  TrendingUp,
  Download,
  Upload,
  Sparkles,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { UserMenu } from "@/components/auth/user-menu";
import { useUIStore } from "@/lib/stores/ui-store";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  onSearchOpen?: () => void;
}

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  description?: string;
  children?: NavItem[];
  featured?: boolean;
  external?: boolean;
}

// MEGA MENU STRUCTURE
const MEGA_MENU_ITEMS: NavItem[] = [
  {
    title: "Materi & Library",
    href: "/materi",
    icon: <Library className="h-4 w-4" />,
    badge: "New",
    featured: true,
    children: [
      {
        title: "Library Dokumen",
        href: "/materi",
        icon: <FileText className="h-4 w-4" />,
        description: "Koleksi dokumen, riset, dan panduan",
        children: [
          { title: "Semua Dokumen", href: "/materi" },
          { title: "Panduan Coretax", href: "/materi/panduan-total-lapor-spt-karyawan-coretax-2025" },
          { title: "Global Tax Research", href: "/materi/global-tax-knowledge-platform-landscape" },
          { title: "Template SPT", href: "/materi", description: "XLSX, PDF templates" },
        ]
      },
      {
        title: "Upload Materi",
        href: "/materi/upload",
        icon: <Upload className="h-4 w-4" />,
        description: "Bagikan dokumen & riset Anda",
        badge: "Contribute"
      },
      {
        title: "Template Library",
        href: "/templates",
        icon: <File className="h-4 w-4" />,
        description: "Template siap pakai untuk client",
        children: [
          { title: "SPT Templates", href: "/templates" },
          { title: "Rekonsiliasi Fiskal", href: "/templates" },
          { title: "e-Faktur CSV", href: "/templates" },
          { title: "Dokumentasi TP", href: "/templates" },
        ]
      },
    ]
  },
  {
    title: "Super App",
    href: "#",
    icon: <Sparkles className="h-4 w-4" />,
    badge: "Featured",
    featured: true,
    children: [
      {
        title: "AI Tax Assistant",
        href: "/ai-assistant",
        icon: <Bot className="h-4 w-4" />,
        description: "Asisten AI untuk pertanyaan pajak 24/7",
        badge: "AI Powered",
        featured: true,
      },
      {
        title: "Regulatory Alerts",
        href: "/alerts",
        icon: <Bell className="h-4 w-4" />,
        description: "Notifikasi regulasi real-time",
        badge: "5 New",
      },
      {
        title: "ASEAN Tax Hub",
        href: "/asean",
        icon: <Globe className="h-4 w-4" />,
        description: "Cross-jurisdiction tools & comparison",
      },
      {
        title: "Community",
        href: "/community",
        icon: <Users className="h-4 w-4" />,
        description: "Forum diskusi praktisi pajak",
        badge: "2.4k Users",
      },
    ]
  },
  {
    title: "Knowledge Base",
    href: "#",
    icon: <BookOpen className="h-4 w-4" />,
    children: [
      {
        title: "Pajak Penghasilan",
        href: "/pph",
        icon: <Briefcase className="h-4 w-4" />,
        description: "PPh 21, 22, 23, 25, 26, Badan",
        children: [
          { 
            title: "PPh Pasal 21", 
            href: "/pph/pasal-21",
            children: [
              { title: "Tarif Efektif (TER)", href: "/pph/pasal-21/ter" },
              { title: "Gross-Up Calculation", href: "/pph/pasal-21/gross-up" },
              { title: "Natura & Kenikmatan", href: "/pph/pasal-21/natura" },
            ]
          },
          { title: "PPh Pasal 22", href: "/pph/pasal-22" },
          { title: "PPh Pasal 23", href: "/pph/pasal-23" },
          { title: "PPh Pasal 25", href: "/pph/pasal-25" },
          { title: "PPh Pasal 26", href: "/pph/pasal-26" },
          { 
            title: "PPh Badan", 
            href: "/pph/badan",
            children: [
              { title: "Rekonsiliasi Fiskal", href: "/pph/badan/rekonsiliasi-fiskal" },
              { title: "Penyusutan & Amortisasi", href: "/pph/badan" },
              { title: "Kompensasi Kerugian", href: "/pph/badan" },
            ]
          },
          { title: "PPh Internasional", href: "/pph/internasional" },
        ]
      },
      {
        title: "PPN & PPnBM",
        href: "/ppn",
        icon: <FileText className="h-4 w-4" />,
        description: "Mekanisme, Faktur, PMSE",
        children: [
          { title: "Mekanisme PPN", href: "/ppn/mekanisme" },
          { title: "Faktur Pajak", href: "/ppn/faktur-pajak" },
          { title: "PPN PMSE", href: "/ppn/pmse", badge: "Digital" },
          { title: "PPnBM", href: "/ppn/ppnbm" },
          { title: "Fasilitas PPN", href: "/ppn/fasilitas" },
        ]
      },
      {
        title: "Ketentuan Umum (KUP)",
        href: "/kup",
        icon: <Scale className="h-4 w-4" />,
        description: "NPWP, SPT, Pembayaran, Pemeriksaan",
        children: [
          { title: "NPWP & PKP", href: "/kup/npwp" },
          { title: "SPT Masa & Tahunan", href: "/kup/spt" },
          { title: "Pembayaran Pajak", href: "/kup/pembayaran" },
          { title: "Pemeriksaan", href: "/kup/pemeriksaan" },
          { title: "Keberatan & Banding", href: "/kup/keberatan-banding" },
          { title: "Sanksi Administrasi", href: "/kup/sanksi" },
        ]
      },
      {
        title: "Coretax DJP 2025",
        href: "/coretax",
        icon: <Monitor className="h-4 w-4" />,
        badge: "2025",
        description: "Tutorial, e-Faktur, SPT Online",
        children: [
          { title: "Tutorial & Aktivasi", href: "/coretax/tutorial" },
          { title: "Taxpayer Account", href: "/coretax/taxpayer-account" },
          { title: "e-Faktur Web", href: "/coretax/e-faktur" },
          { title: "Pelaporan SPT", href: "/coretax/spt" },
          { title: "Pembayaran & Billing", href: "/coretax/pembayaran" },
          { title: "Troubleshooting", href: "/coretax/troubleshooting" },
        ]
      },
      {
        title: "Pajak Daerah & Lainnya",
        href: "#",
        icon: <Building2 className="h-4 w-4" />,
        children: [
          { title: "PBB & BPHTB", href: "/pbb" },
          { title: "Pajak Daerah (HKPD)", href: "/pajak-daerah" },
          { title: "Transfer Pricing", href: "/transfer-pricing" },
          { title: "Pajak Digital", href: "/pajak-digital", badge: "New" },
          { title: "Fasilitas & Insentif", href: "/fasilitas-insentif" },
        ]
      },
    ]
  },
  {
    title: "Tools",
    href: "#",
    icon: <Calculator className="h-4 w-4" />,
    children: [
      {
        title: "Kalkulator Pajak",
        href: "/kalkulator",
        icon: <Calculator className="h-4 w-4" />,
        description: "Hitung PPh, PPN, BPHTB",
        children: [
          { title: "PPh 21 (TER)", href: "/kalkulator/pph-21" },
          { title: "PPh Badan", href: "/kalkulator/pph-badan" },
          { title: "PPN", href: "/kalkulator/ppn" },
          { title: "BPHTB", href: "/kalkulator/bphtb" },
          { title: "PPh Final UMKM", href: "/kalkulator/pph-final-umkm" },
          { title: "Angsuran PPh 25", href: "/kalkulator/pph-25" },
        ]
      },
      {
        title: "Kalender Pajak",
        href: "/kalender",
        icon: <Calendar className="h-4 w-4" />,
        description: "Deadline & jadwal penting",
      },
      {
        title: "Glosarium",
        href: "/glosarium",
        icon: <BookOpen className="h-4 w-4" />,
        description: "500+ istilah perpajakan",
      },
      {
        title: "Studi Kasus",
        href: "/kasus",
        icon: <TrendingUp className="h-4 w-4" />,
        description: "Contoh kasus & solusi",
      },
      {
        title: "Regulasi",
        href: "/regulasi",
        icon: <Landmark className="h-4 w-4" />,
        description: "UU, PMK, PER, SE",
      },
    ]
  },
];

// Simple nav items for mobile drawer
const MOBILE_NAV_ITEMS = [
  { title: "Beranda", href: "/" },
  { title: "AI Assistant", href: "/ai-assistant", badge: "New" },
  { title: "Materi & Library", href: "/materi" },
  { title: "Regulatory Alerts", href: "/alerts", badge: "5" },
  { title: "ASEAN Tax Hub", href: "/asean" },
  { title: "Community", href: "/community" },
  { title: "Templates", href: "/templates" },
];

function MegaMenuItem({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (depth === 0 && hasChildren) {
    // Top level with mega menu
    return (
      <div 
        className="group relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className={cn(
          "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors",
          item.featured ? "text-violet-600" : "text-foreground",
          "hover:bg-accent"
        )}>
          {item.icon}
          <span>{item.title}</span>
          {item.badge && (
            <Badge className={cn(
              "ml-1 text-[8px] px-1 py-0 h-4",
              item.featured 
                ? "bg-violet-100 text-violet-700 border-violet-200" 
                : "bg-primary/10 text-primary"
            )}>
              {item.badge}
            </Badge>
          )}
          <ChevronDown className={cn(
            "h-3 w-3 transition-transform",
            isOpen && "rotate-180"
          )} />
        </button>

        {/* Mega Menu Dropdown */}
        <div className={cn(
          "absolute top-full left-0 pt-2 z-50",
          "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
          "transition-all duration-200"
        )}>
          <div className="bg-popover border rounded-lg shadow-lg p-4 min-w-[600px]">
            <div className="grid grid-cols-2 gap-4">
              {item.children?.map((child, idx) => (
                <div key={idx} className="space-y-2">
                  <Link 
                    href={child.href}
                    className="block p-2 rounded-lg hover:bg-accent group/item"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                        {child.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{child.title}</span>
                          {child.badge && (
                            <Badge className="text-[8px] px-1 py-0 h-4">
                              {child.badge}
                            </Badge>
                          )}
                        </div>
                        {child.description && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {child.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                  
                  {/* Level 3 children */}
                  {child.children && (
                    <div className="pl-9 space-y-1">
                      {child.children.map((grandChild, gIdx) => (
                        <Link
                          key={gIdx}
                          href={grandChild.href}
                          className="flex items-center gap-2 py-1 text-xs text-muted-foreground hover:text-foreground"
                        >
                          <ChevronRight className="h-3 w-3" />
                          <span>{grandChild.title}</span>
                          {grandChild.badge && (
                            <Badge variant="outline" className="text-[8px] px-1 py-0 h-3">
                              {grandChild.badge}
                            </Badge>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Simple link for items without children
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors",
        item.featured ? "text-violet-600" : "text-foreground",
        "hover:bg-accent"
      )}
    >
      {item.icon}
      <span>{item.title}</span>
      {item.badge && (
        <Badge className={cn(
          "ml-1 text-[8px] px-1 py-0 h-4",
          item.featured 
            ? "bg-violet-100 text-violet-700 border-violet-200" 
            : "bg-primary/10 text-primary"
        )}>
          {item.badge}
        </Badge>
      )}
    </Link>
  );
}

export function SiteHeader({ onSearchOpen }: SiteHeaderProps) {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Main Header */}
      <div className="flex h-14 items-center px-4 md:px-6">
        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 lg:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-bold text-sm">
            PK
          </div>
          <span className="font-bold text-lg hidden sm:inline-block">
            PAJAKKU
          </span>
          <Badge className="hidden sm:inline-flex text-[10px] bg-violet-100 text-violet-700 border-violet-200 ml-1">
            Super App
          </Badge>
        </Link>

        {/* Desktop Mega Menu Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {MEGA_MENU_ITEMS.map((item, idx) => (
            <MegaMenuItem key={idx} item={item} />
          ))}
        </nav>

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSearchOpen}
            className="hidden md:inline-flex text-muted-foreground text-sm gap-2 border border-input px-3"
          >
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline">Cari...</span>
            <kbd className="pointer-events-none hidden xl:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
          
          <Link href="/glosarium">
            <Button variant="ghost" size="icon" aria-label="Bookmarks" className="hidden sm:flex">
              <Bookmark className="h-5 w-5" />
            </Button>
          </Link>
          
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>

      {/* Sub Header - Quick Access Bar */}
      <div className="hidden lg:block border-t bg-muted/30">
        <div className="flex items-center px-4 md:px-6 h-9 gap-6 overflow-x-auto">
          <span className="text-xs font-medium text-muted-foreground shrink-0">Quick Access:</span>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/ai-assistant" className="flex items-center gap-1.5 text-violet-600 hover:underline shrink-0">
              <Bot className="h-3 w-3" />
              Tanya AI
            </Link>
            <Link href="/alerts" className="flex items-center gap-1.5 text-amber-600 hover:underline shrink-0">
              <Bell className="h-3 w-3" />
              Alerts
              <span className="bg-amber-500 text-white text-[8px] px-1 rounded-full">5</span>
            </Link>
            <Link href="/kalkulator/pph-21" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground shrink-0">
              <Calculator className="h-3 w-3" />
              Kalkulator PPh 21
            </Link>
            <Link href="/coretax" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground shrink-0">
              <Monitor className="h-3 w-3" />
              Coretax DJP
            </Link>
            <Link href="/templates" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground shrink-0">
              <Download className="h-3 w-3" />
              Download Template
            </Link>
          </div>
          
          <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground shrink-0">
            <span className="hidden xl:inline">Update:</span>
            <span className="text-green-600 font-medium">PPN 12% Berlaku</span>
            <span className="hidden xl:inline">|</span>
            <span className="hidden xl:inline">Coretax 2025 Active</span>
          </div>
        </div>
      </div>
    </header>
  );
}
