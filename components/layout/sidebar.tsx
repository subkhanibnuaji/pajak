"use client";

import { KNOWLEDGE_NAV, TOOLS_NAV } from "@/data/navigation-tree";
import { SidebarNav } from "./sidebar-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-72 lg:border-r lg:bg-sidebar-background">
      <ScrollArea className="flex-1 py-4 px-3 overflow-y-auto h-[calc(100vh-3.5rem)]">
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
    </aside>
  );
}
