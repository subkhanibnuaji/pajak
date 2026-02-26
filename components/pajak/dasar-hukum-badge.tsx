"use client";

import { cn } from "@/lib/utils";
import { REGULASI_COLORS, getRegulasiType } from "@/lib/constants";

interface DasarHukumBadgeProps {
  items: string[];
  className?: string;
}

export function DasarHukumBadge({ items, className }: DasarHukumBadgeProps) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item, i) => {
        const type = getRegulasiType(item);
        return (
          <span
            key={i}
            className={cn(
              "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium",
              REGULASI_COLORS[type]
            )}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
