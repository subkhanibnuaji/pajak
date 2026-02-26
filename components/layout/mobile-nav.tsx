"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./sidebar-nav";
import { KNOWLEDGE_NAV, SUPER_APP_NAV, TOOLS_NAV } from "@/data/navigation-tree";
import { useUIStore } from "@/lib/stores/ui-store";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
          "fixed inset-y-0 left-0 z-50 w-72 bg-sidebar-background border-r transition-transform duration-300 lg:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-14 items-center justify-between px-4 border-b">
          <span className="font-bold text-lg">PAJAKKU</span>
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
          <div className="mb-4">
            <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Super App Features
            </h4>
            <SidebarNav items={SUPER_APP_NAV} />
          </div>
          <Separator className="my-4" />
          <div className="mb-4">
            <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Knowledge Base
            </h4>
            <SidebarNav items={KNOWLEDGE_NAV} />
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Tools & Referensi
            </h4>
            <SidebarNav items={TOOLS_NAV} />
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
