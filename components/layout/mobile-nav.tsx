"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  X, 
  ChevronRight, 
  ChevronDown,
  Bot,
  Bell,
  Globe,
  Users,
  File,
  Library,
  BookOpen,
  Calculator,
  Scale,
  Building2,
  Monitor,
  Calendar,
  Bookmark,
  TrendingUp,
  Landmark,
  Upload,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useUIStore } from "@/lib/stores/ui-store";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileNavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  children?: MobileNavItem[];
  color?: string;
}

const MOBILE_NAV_STRUCTURE: MobileNavItem[] = [
  {
    title: "Beranda",
    href: "/",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    title: "Super App Features",
    href: "#",
    icon: <Sparkles className="h-4 w-4 text-violet-500" />,
    color: "text-violet-600",
    children: [
      { 
        title: "AI Tax Assistant", 
        href: "/ai-assistant", 
        icon: <Bot className="h-4 w-4" />,
        badge: "New",
        color: "text-violet-600"
      },
      { 
        title: "Regulatory Alerts", 
        href: "/alerts", 
        icon: <Bell className="h-4 w-4" />,
        badge: "5",
        color: "text-amber-600"
      },
      { 
        title: "ASEAN Tax Hub", 
        href: "/asean", 
        icon: <Globe className="h-4 w-4" />,
        color: "text-blue-600"
      },
      { 
        title: "Community", 
        href: "/community", 
        icon: <Users className="h-4 w-4" />,
        color: "text-teal-600"
      },
    ]
  },
  {
    title: "Materi & Library",
    href: "#",
    icon: <Library className="h-4 w-4 text-emerald-500" />,
    color: "text-emerald-600",
    children: [
      { 
        title: "Library Dokumen", 
        href: "/materi", 
        icon: <Library className="h-4 w-4" />,
      },
      { 
        title: "Upload Materi", 
        href: "/materi/upload", 
        icon: <Upload className="h-4 w-4" />,
      },
      { 
        title: "Template Library", 
        href: "/templates", 
        icon: <File className="h-4 w-4" />,
      },
    ]
  },
  {
    title: "Knowledge Base",
    href: "#",
    icon: <BookOpen className="h-4 w-4 text-blue-500" />,
    color: "text-blue-600",
    children: [
      {
        title: "Pajak Penghasilan (PPh)",
        href: "/pph",
        icon: <BookOpen className="h-4 w-4" />,
        children: [
          { title: "PPh Pasal 21", href: "/pph/pasal-21" },
          { title: "PPh Pasal 22", href: "/pph/pasal-22" },
          { title: "PPh Pasal 23", href: "/pph/pasal-23" },
          { title: "PPh Pasal 25", href: "/pph/pasal-25" },
          { title: "PPh Pasal 26", href: "/pph/pasal-26" },
          { title: "PPh Badan", href: "/pph/badan" },
          { title: "PPh Internasional", href: "/pph/internasional" },
        ]
      },
      {
        title: "PPN & PPnBM",
        href: "/ppn",
        icon: <BookOpen className="h-4 w-4" />,
        children: [
          { title: "Mekanisme PPN", href: "/ppn/mekanisme" },
          { title: "Faktur Pajak", href: "/ppn/faktur-pajak" },
          { title: "PPN PMSE", href: "/ppn/pmse" },
          { title: "PPnBM", href: "/ppn/ppnbm" },
        ]
      },
      {
        title: "KUP",
        href: "/kup",
        icon: <Scale className="h-4 w-4" />,
        children: [
          { title: "NPWP & PKP", href: "/kup/npwp" },
          { title: "SPT", href: "/kup/spt" },
          { title: "Pembayaran", href: "/kup/pembayaran" },
          { title: "Pemeriksaan", href: "/kup/pemeriksaan" },
          { title: "Keberatan", href: "/kup/keberatan-banding" },
        ]
      },
      {
        title: "Coretax DJP 2025",
        href: "/coretax",
        icon: <Monitor className="h-4 w-4" />,
        badge: "2025",
        children: [
          { title: "Tutorial", href: "/coretax/tutorial" },
          { title: "e-Faktur", href: "/coretax/e-faktur" },
          { title: "SPT", href: "/coretax/spt" },
          { title: "Billing", href: "/coretax/pembayaran" },
        ]
      },
      {
        title: "Lainnya",
        href: "#",
        icon: <Building2 className="h-4 w-4" />,
        children: [
          { title: "PBB & BPHTB", href: "/pbb" },
          { title: "Transfer Pricing", href: "/transfer-pricing" },
          { title: "Pajak Digital", href: "/pajak-digital" },
          { title: "Fasilitas", href: "/fasilitas-insentif" },
        ]
      },
    ]
  },
  {
    title: "Tools",
    href: "#",
    icon: <Calculator className="h-4 w-4 text-amber-500" />,
    color: "text-amber-600",
    children: [
      { 
        title: "Kalkulator PPh 21", 
        href: "/kalkulator/pph-21", 
        icon: <Calculator className="h-4 w-4" />,
      },
      { 
        title: "Kalkulator PPN", 
        href: "/kalkulator/ppn", 
        icon: <Calculator className="h-4 w-4" />,
      },
      { 
        title: "Kalender Pajak", 
        href: "/kalender", 
        icon: <Calendar className="h-4 w-4" />,
      },
      { 
        title: "Glosarium", 
        href: "/glosarium", 
        icon: <BookOpen className="h-4 w-4" />,
      },
      { 
        title: "Studi Kasus", 
        href: "/kasus", 
        icon: <TrendingUp className="h-4 w-4" />,
      },
      { 
        title: "Regulasi", 
        href: "/regulasi", 
        icon: <Landmark className="h-4 w-4" />,
      },
    ]
  },
];

function MobileNavItem({ item, depth = 0 }: { item: MobileNavItem; depth?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  if (hasChildren) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors",
            isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted",
            item.color && !isActive && item.color
          )}
          style={{ paddingLeft: `${12 + depth * 12}px` }}
        >
          <div className="flex items-center gap-2">
            {item.icon}
            <span>{item.title}</span>
            {item.badge && (
              <Badge className="text-[10px] px-1.5 py-0 h-5">
                {item.badge}
              </Badge>
            )}
          </div>
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-180"
          )} />
        </button>
        
        {isOpen && (
          <div className="space-y-1">
            {item.children?.map((child, idx) => (
              <MobileNavItem key={idx} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors",
        isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted",
        item.color && !isActive && item.color
      )}
      style={{ paddingLeft: `${12 + depth * 12}px` }}
    >
      {item.icon}
      <span>{item.title}</span>
      {item.badge && (
        <Badge className="text-[10px] px-1.5 py-0 h-5 ml-auto">
          {item.badge}
        </Badge>
      )}
    </Link>
  );
}

export function MobileNav() {
  const { sidebarOpen, setSidebarOpen } = useUIStore();
  const pathname = usePathname();

  // Close on navigation
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname, setSidebarOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-80 bg-background border-r transition-transform duration-300 lg:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-14 items-center justify-between px-4 border-b">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-bold text-sm">
              PK
            </div>
            <div>
              <span className="font-bold">PAJAKKU</span>
              <Badge className="ml-2 text-[8px] bg-violet-100 text-violet-700 border-violet-200">
                Super App
              </Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-3.5rem)] py-4 px-3 overflow-y-auto">
          <div className="space-y-4">
            {MOBILE_NAV_STRUCTURE.map((section, idx) => (
              <div key={idx}>
                {idx > 0 && <Separator className="my-4" />}
                <MobileNavItem item={section} />
              </div>
            ))}
          </div>
          
          {/* Footer */}
          <div className="mt-8 pt-4 border-t">
            <div className="px-3">
              <p className="text-xs text-muted-foreground mb-3">Quick Links</p>
              <div className="space-y-2">
                <Link href="/glosarium" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <Bookmark className="h-4 w-4" />
                  Glosarium
                </Link>
                <div className="text-xs text-muted-foreground pt-2">
                  <p>PPN 12% Berlaku</p>
                  <p>Coretax 2025 Active</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
