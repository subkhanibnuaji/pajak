"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { NavItem } from "@/data/navigation-tree";

interface SidebarNavProps {
  items: NavItem[];
  depth?: number;
}

export function SidebarNav({ items, depth = 0 }: SidebarNavProps) {
  return (
    <ul className={cn("space-y-1", depth > 0 && "ml-3 border-l pl-3")}>
      {items.map((item) => (
        <SidebarNavItem key={item.href} item={item} depth={depth} />
      ))}
    </ul>
  );
}

function SidebarNavItem({ item, depth }: { item: NavItem; depth: number }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const isParentActive = pathname.startsWith(item.href + "/");
  const [isOpen, setIsOpen] = useState(isActive || isParentActive);

  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;

  return (
    <li>
      <div className="flex items-center">
        <Link
          href={item.href}
          className={cn(
            "flex flex-1 items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent",
            isActive
              ? "bg-accent font-medium text-accent-foreground"
              : "text-muted-foreground",
            isParentActive && !isActive && "text-foreground"
          )}
        >
          {Icon && depth === 0 && <Icon className="h-4 w-4 shrink-0" />}
          <span className="truncate">{item.title}</span>
          {item.badge && (
            <Badge
              variant="secondary"
              className="ml-auto text-[10px] px-1.5 py-0"
            >
              {item.badge}
            </Badge>
          )}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-md hover:bg-accent transition-colors"
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            <ChevronRight
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform",
                isOpen && "rotate-90"
              )}
            />
          </button>
        )}
      </div>
      {hasChildren && isOpen && (
        <SidebarNav items={item.children!} depth={depth + 1} />
      )}
    </li>
  );
}
