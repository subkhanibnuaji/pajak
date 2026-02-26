import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface QuickRefItem {
  label: string;
  value: string;
}

interface QuickReferenceProps {
  title: string;
  items: QuickRefItem[];
  footer?: ReactNode;
  className?: string;
}

export function QuickReference({
  title,
  items,
  footer,
  className,
}: QuickReferenceProps) {
  return (
    <div className={cn("rounded-lg border overflow-hidden", className)}>
      <div className="bg-muted/50 px-4 py-2 border-b">
        <h4 className="font-semibold text-sm">{title}</h4>
      </div>
      <div className="divide-y">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-2 text-sm">
            <span className="text-muted-foreground">{item.label}</span>
            <span className="font-mono font-medium">{item.value}</span>
          </div>
        ))}
      </div>
      {footer && (
        <div className="bg-muted/30 px-4 py-2 border-t text-xs text-muted-foreground">
          {footer}
        </div>
      )}
    </div>
  );
}
