"use client";

import { useState, useMemo } from "react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { hitungPPh21 } from "@/lib/tax/pph21";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import type { StatusPTKP } from "@/lib/tax/types";
import { Calculator, RotateCcw, Info } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const STATUS_PTKP_OPTIONS: { value: StatusPTKP; label: string }[] = [
  { value: "TK/0", label: "TK/0 — Tidak Kawin, 0 tanggungan" },
  { value: "TK/1", label: "TK/1 — Tidak Kawin, 1 tanggungan" },
  { value: "TK/2", label: "TK/2 — Tidak Kawin, 2 tanggungan" },
  { value: "TK/3", label: "TK/3 — Tidak Kawin, 3 tanggungan" },
  { value: "K/0", label: "K/0 — Kawin, 0 tanggungan" },
  { value: "K/1", label: "K/1 — Kawin, 1 tanggungan" },
  { value: "K/2", label: "K/2 — Kawin, 2 tanggungan" },
  { value: "K/3", label: "K/3 — Kawin, 3 tanggungan" },
];

export default function KalkulatorPPh21Page() {
  const [gajiInput, setGajiInput] = useState("15000000");
  const [statusPTKP, setStatusPTKP] = useState<StatusPTKP>("TK/0");
  const [iuranPensiun, setIuranPensiun] = useState("0");
  const [calculated, setCalculated] = useState(false);

  const gaji = parseInt(gajiInput.replace(/\D/g, ""), 10) || 0;
  const pensiun = parseInt(iuranPensiun.replace(/\D/g, ""), 10) || 0;

  const result = useMemo(() => {
    if (!calculated || gaji <= 0) return null;
    return hitungPPh21({
      penghasilanBruto: gaji,
      statusPTKP,
      metode: "gross",
      iuranPensiun: pensiun,
    });
  }, [calculated, gaji, statusPTKP, pensiun]);

  const handleCalculate = () => setCalculated(true);
  const handleReset = () => {
    setGajiInput("15000000");
    setStatusPTKP("TK/0");
    setIuranPensiun("0");
    setCalculated(false);
  };

  const formatInputCurrency = (value: string) => {
    const num = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(num)) return "";
    return num.toLocaleString("id-ID");
  };

  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        <Breadcrumb
          items={[
            { label: "Kalkulator", href: "/kalkulator" },
            { label: "PPh 21" },
          ]}
        />

        <div className="mt-6">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Calculator className="h-8 w-8 text-primary" />
            Kalkulator PPh 21
          </h1>
          <p className="mt-2 text-muted-foreground">
            Hitung PPh 21 karyawan dengan perbandingan metode TER (2024) dan
            tarif progresif Pasal 17.
          </p>
          <DasarHukumBadge
            items={["PP 58/2023", "PMK-168/2023", "UU 7/2021 Pasal 17"]}
            className="mt-3"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-5 mt-6">
          {/* Input Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-base">Data Penghasilan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Gaji Bruto per Bulan (Rp)
                  </label>
                  <Input
                    type="text"
                    inputMode="numeric"
                    value={formatInputCurrency(gajiInput)}
                    onChange={(e) =>
                      setGajiInput(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="15.000.000"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Status PTKP
                  </label>
                  <select
                    value={statusPTKP}
                    onChange={(e) =>
                      setStatusPTKP(e.target.value as StatusPTKP)
                    }
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    {STATUS_PTKP_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Iuran Pensiun per Bulan (Rp)
                  </label>
                  <Input
                    type="text"
                    inputMode="numeric"
                    value={formatInputCurrency(iuranPensiun)}
                    onChange={(e) =>
                      setIuranPensiun(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="0"
                  />
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Iuran JHT/JP yang dibayar karyawan
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button onClick={handleCalculate} className="flex-1">
                    <Calculator className="h-4 w-4 mr-1" />
                    Hitung
                  </Button>
                  <Button variant="outline" onClick={handleReset}>
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Result */}
          <div className="lg:col-span-3">
            {result ? (
              <div className="space-y-4">
                {/* Summary cards */}
                <div className="grid gap-3 grid-cols-2">
                  <Card className="border-primary/30 bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">
                        PPh 21/bulan (TER)
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {formatCurrency(result.terPPhBulanan ?? 0)}
                      </p>
                      <Badge variant="outline" className="mt-1 text-[10px]">
                        TER {formatPercentage((result.terRate ?? 0) * 100, 2)}
                      </Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">
                        PPh 21/bulan (Pasal 17)
                      </p>
                      <p className="text-2xl font-bold">
                        {formatCurrency(result.pphPerBulan)}
                      </p>
                      <Badge variant="outline" className="mt-1 text-[10px]">
                        Setahun: {formatCurrency(result.pphTerutangSetahun)}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* Step-by-step */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Langkah Perhitungan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {result.steps.map((step, i) => (
                        <div
                          key={i}
                          className="flex items-start justify-between text-sm gap-2 py-1 border-b last:border-0"
                        >
                          <div className="flex-1 min-w-0">
                            <span
                              className={
                                step.label.startsWith("PPh") || step.label.startsWith("Tarif")
                                  ? "font-medium"
                                  : ""
                              }
                            >
                              {step.label}
                            </span>
                            {step.formula && (
                              <p className="text-[11px] text-muted-foreground font-mono">
                                {step.formula}
                              </p>
                            )}
                            {step.note && (
                              <p className="text-[10px] text-muted-foreground italic">
                                {step.note}
                              </p>
                            )}
                          </div>
                          <span className="font-mono text-sm font-medium shrink-0 tabular-nums">
                            {step.amount < 0 ? "(" : ""}
                            {formatCurrency(Math.abs(step.amount))}
                            {step.amount < 0 ? ")" : ""}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <PerhatianBlock type="info" title="Catatan TER vs Pasal 17">
                  <p>
                    TER digunakan untuk pemotongan PPh 21 <strong>Masa Januari-November</strong>.
                    Pada Masa Desember, pemberi kerja menghitung ulang PPh 21
                    setahun menggunakan tarif Pasal 17, lalu mengurangkan PPh
                    yang sudah dipotong Jan-Nov. Total PPh 21 setahun sama
                    untuk kedua metode.
                  </p>
                </PerhatianBlock>

                <div className="text-xs text-muted-foreground italic">
                  Dasar Hukum: {result.dasarHukum.join(" | ")}
                  <br />
                  Disclaimer: Perhitungan ini bersifat simulasi. Verifikasi ke
                  konsultan pajak atau DJP untuk kepastian hukum.
                </div>
              </div>
            ) : (
              <Card className="h-full flex items-center justify-center min-h-[300px]">
                <CardContent className="text-center text-muted-foreground p-8">
                  <Calculator className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p className="font-medium">Masukkan data penghasilan</p>
                  <p className="text-sm mt-1">
                    Isi form di samping dan klik &ldquo;Hitung&rdquo; untuk melihat
                    hasil perhitungan PPh 21
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
