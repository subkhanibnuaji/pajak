"use client";

import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface CaseStep {
  label: string;
  formula?: string;
  result: number;
  explanation?: string;
}

interface CaseStudyBlockProps {
  title: string;
  scenario: string;
  steps: CaseStep[];
  conclusion?: string;
  dasarHukum?: string[];
  className?: string;
}

export function CaseStudyBlock({
  title,
  scenario,
  steps,
  conclusion,
  dasarHukum,
  className,
}: CaseStudyBlockProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={cn("my-6 rounded-lg border overflow-hidden", className)}>
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between bg-muted/50 px-4 py-3 text-left hover:bg-muted/70 transition-colors"
      >
        <div>
          <h4 className="font-semibold text-sm">{title}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">{scenario}</p>
        </div>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
        )}
      </button>

      {/* Steps */}
      {expanded && (
        <div className="p-4">
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-sm"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium">{step.label}</span>
                    <span className="font-mono font-semibold text-right shrink-0">
                      {formatCurrency(step.result)}
                    </span>
                  </div>
                  {step.formula && (
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">
                      {step.formula}
                    </p>
                  )}
                  {step.explanation && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {step.explanation}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {conclusion && (
            <div className="mt-4 rounded-md bg-primary/5 border border-primary/20 p-3">
              <p className="text-sm font-medium">{conclusion}</p>
            </div>
          )}

          {dasarHukum && dasarHukum.length > 0 && (
            <div className="mt-3 text-xs text-muted-foreground">
              <span className="font-medium">Dasar Hukum:</span>{" "}
              {dasarHukum.join(", ")}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
