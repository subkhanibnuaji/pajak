"use client";

import Link from "next/link";
import { Menu, Search, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useUIStore } from "@/lib/stores/ui-store";

interface SiteHeaderProps {
  onSearchOpen?: () => void;
}

export function SiteHeader({ onSearchOpen }: SiteHeaderProps) {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            PK
          </div>
          <span className="font-bold text-lg hidden sm:inline-block">
            PAJAKKU
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <Link
            href="/pph"
            className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
          >
            PPh
          </Link>
          <Link
            href="/ppn"
            className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
          >
            PPN
          </Link>
          <Link
            href="/kup"
            className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
          >
            KUP
          </Link>
          <Link
            href="/coretax"
            className="px-3 py-2 rounded-md hover:bg-accent transition-colors font-medium text-primary"
          >
            Coretax
          </Link>
          <Link
            href="/kalkulator"
            className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
          >
            Kalkulator
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={onSearchOpen}
            aria-label="Search"
            className="hidden sm:inline-flex"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onSearchOpen}
            className="hidden lg:inline-flex text-muted-foreground text-sm gap-2 border border-input px-3"
          >
            <Search className="h-4 w-4" />
            <span>Cari...</span>
            <kbd className="pointer-events-none ml-2 inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">&#8984;</span>K
            </kbd>
          </Button>
          <Link href="/glosarium">
            <Button variant="ghost" size="icon" aria-label="Bookmarks">
              <Bookmark className="h-5 w-5" />
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
