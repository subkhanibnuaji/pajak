import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

interface RingkasanBlockProps {
  title?: string;
  points?: string[];
  children?: ReactNode;
  className?: string;
}

export function RingkasanBlock({
  title = "Ringkasan",
  points,
  children,
  className,
}: RingkasanBlockProps) {
  return (
    <div
      className={cn(
        "my-6 rounded-lg border-2 border-primary/20 bg-primary/5 p-5",
        className
      )}
    >
      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-primary" />
        {title}
      </h4>
      {points && (
        <ul className="space-y-2">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="text-primary font-bold mt-0.5">&#10003;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      {children && (
        <div className="text-sm leading-relaxed">{children}</div>
      )}
    </div>
  );
}
