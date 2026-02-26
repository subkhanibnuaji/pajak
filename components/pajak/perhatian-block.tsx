import { cn } from "@/lib/utils";
import { AlertTriangle, Info, AlertCircle, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

type PerhatianType = "info" | "warning" | "danger" | "tip";

interface PerhatianBlockProps {
  type?: PerhatianType;
  title?: string;
  children: ReactNode;
  className?: string;
}

const CONFIG: Record<
  PerhatianType,
  { icon: React.ElementType; bg: string; border: string; iconColor: string }
> = {
  info: {
    icon: Info,
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  danger: {
    icon: AlertCircle,
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-800",
    iconColor: "text-red-600 dark:text-red-400",
  },
  tip: {
    icon: Lightbulb,
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
};

export function PerhatianBlock({
  type = "info",
  title,
  children,
  className,
}: PerhatianBlockProps) {
  const config = CONFIG[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "my-4 rounded-lg border p-4",
        config.bg,
        config.border,
        className
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn("h-5 w-5 mt-0.5 shrink-0", config.iconColor)} />
        <div className="flex-1 min-w-0">
          {title && (
            <p className="font-semibold text-sm mb-1">{title}</p>
          )}
          <div className="text-sm leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
