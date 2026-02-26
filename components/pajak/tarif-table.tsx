"use client";

import { cn } from "@/lib/utils";

interface TarifRow {
  range: string;
  rate: string;
  note?: string;
}

interface TarifTableProps {
  title?: string;
  dasarHukum?: string;
  data: TarifRow[];
  highlightAmount?: number;
  className?: string;
}

export function TarifTable({
  title,
  dasarHukum,
  data,
  className,
}: TarifTableProps) {
  return (
    <div className={cn("my-4 rounded-lg border overflow-hidden", className)}>
      {(title || dasarHukum) && (
        <div className="bg-muted/50 px-4 py-2 border-b">
          {title && <h4 className="font-semibold text-sm">{title}</h4>}
          {dasarHukum && (
            <p className="text-xs text-muted-foreground">{dasarHukum}</p>
          )}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/30">
              <th className="px-4 py-2 text-left font-medium">
                Lapisan Penghasilan
              </th>
              <th className="px-4 py-2 text-right font-medium">Tarif</th>
              <th className="px-4 py-2 text-left font-medium hidden sm:table-cell">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  "border-b last:border-0",
                  i % 2 === 0 ? "bg-background" : "bg-muted/20"
                )}
              >
                <td className="px-4 py-2">{row.range}</td>
                <td className="px-4 py-2 text-right font-mono font-medium">
                  {row.rate}
                </td>
                <td className="px-4 py-2 text-muted-foreground text-xs hidden sm:table-cell">
                  {row.note ?? ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Pre-built: Tarif PPh OP Pasal 17 UU HPP */
export function TarifPPhOPTable() {
  return (
    <TarifTable
      title="Tarif PPh Orang Pribadi — Pasal 17 ayat (1) huruf a"
      dasarHukum="UU No. 7 Tahun 2021 (UU HPP)"
      data={[
        { range: "s.d. Rp60.000.000", rate: "5%", note: "Layer 1 (UU HPP: naik dari Rp50 juta)" },
        { range: "Rp60.000.000 – Rp250.000.000", rate: "15%", note: "Layer 2" },
        { range: "Rp250.000.000 – Rp500.000.000", rate: "25%", note: "Layer 3" },
        { range: "Rp500.000.000 – Rp5.000.000.000", rate: "30%", note: "Layer 4" },
        { range: "Di atas Rp5.000.000.000", rate: "35%", note: "Layer 5 (baru di UU HPP)" },
      ]}
    />
  );
}
