"use client";

import { useState } from "react";
import { SiteHeader } from "./site-header";
import { MobileNav } from "./mobile-nav";
import { SearchDialog } from "@/components/search/search-dialog";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      <SiteHeader onSearchOpen={() => setSearchOpen(true)} />
      <MobileNav />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
