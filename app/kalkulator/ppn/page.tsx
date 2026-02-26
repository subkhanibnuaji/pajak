"use client";

import { useState, useMemo } from "react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DasarHukumBadge } from "@/components/pajak/dasar-hukum-badge";
import { PerhatianBlock } from "@/components/pajak/perhatian-block";
import { hitungPPN } from "@/lib/tax/ppn";
import { formatCurrency } from "@/lib/utils";
import { Calculator, RotateCcw, Info } from "lucide-react";
import { Footer } from "@/components/layout/footer";

export default function KalkulatorPPNPage() {
  const [hargaInput, setHargaInput] = useState("100000000");
  const [includesPPN, setIncludesPPN] = useState(false);
  const [tarifPPN, setTarifPPN] = useState("0.11");
  const [calculated, setCalculated] = useState(false);

  const harga = parseInt(hargaInput.replace(/\D/g, ""), 10) || 0;

  const result = useMemo(() => {
    if (!calculated || harga <= 0) return null;
    return hitungPPN({
      harga,
      includesPPN,
      tarifPPN: parseFloat(tarifPPN),
    });
  }, [calculated, harga, includesPPN, tarifPPN]);

  const handleReset = () => {
    setHargaInput("100000000");
    setIncludesPPN(false);
    setTarifPPN("0.11");
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
            { label: "PPN" },
          ]}
        />

        <div className="mt-6">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Calculator className="h-8 w-8 text-primary" />
            Kalkulator PPN
          </h1>
          <p className="mt-2 text-muted-foreground">
            Hitung PPN dari harga yang sudah termasuk atau belum termasuk PPN.
          </p>
          <DasarHukumBadge
            items={["UU 7/2021 (HPP) Pasal 7", "PMK-131/2024"]}
            className="mt-3"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-5 mt-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-base">Data Transaksi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Harga (Rp)
                  </label>
                  <Input
                    type="text"
                    inputMode="numeric"
                    value={formatInputCurrency(hargaInput)}
                    onChange={(e) =>
                      setHargaInput(e.target.value.replace(/\D/g, ""))
                    }
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Harga sudah termasuk PPN?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        checked={!includesPPN}
                        onChange={() => setIncludesPPN(false)}
                        className="accent-primary"
                      />
                      Belum termasuk PPN
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        checked={includesPPN}
                        onChange={() => setIncludesPPN(true)}
                        className="accent-primary"
                      />
                      Sudah termasuk PPN
                    </label>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Tarif PPN
                  </label>
                  <select
                    value={tarifPPN}
                    onChange={(e) => setTarifPPN(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="0.11">11% (umum)</option>
                    <option value="0.12">12% (barang mewah)</option>
                  </select>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button onClick={() => setCalculated(true)} className="flex-1">
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

          <div className="lg:col-span-3">
            {result ? (
              <div className="space-y-4">
                <div className="grid gap-3 grid-cols-2">
                  <Card className="border-primary/30 bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">PPN</p>
                      <p className="text-2xl font-bold text-primary">
                        {formatCurrency(result.ppn)}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">DPP</p>
                      <p className="text-2xl font-bold">
                        {formatCurrency(result.dpp)}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Detail Perhitungan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {result.steps.map((step, i) => (
                        <div
                          key={i}
                          className="flex items-start justify-between text-sm gap-2 py-1 border-b last:border-0"
                        >
                          <div className="flex-1">
                            <span className="font-medium">{step.label}</span>
                            {step.formula && (
                              <p className="text-[11px] text-muted-foreground font-mono">
                                {step.formula}
                              </p>
                            )}
                          </div>
                          <span className="font-mono font-medium shrink-0">
                            {formatCurrency(Math.abs(step.amount))}
                          </span>
                        </div>
                      ))}

                      <div className="pt-2 border-t mt-2">
                        <div className="flex justify-between text-sm font-semibold">
                          <span>Harga Sebelum PPN</span>
                          <span className="font-mono">
                            {formatCurrency(result.hargaSebelumPPN)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm font-semibold text-primary">
                          <span>Harga Setelah PPN</span>
                          <span className="font-mono">
                            {formatCurrency(result.hargaSetelahPPN)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-full flex items-center justify-center min-h-[300px]">
                <CardContent className="text-center text-muted-foreground p-8">
                  <Calculator className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p className="font-medium">Masukkan data transaksi</p>
                  <p className="text-sm mt-1">
                    Isi form dan klik &ldquo;Hitung&rdquo; untuk melihat perhitungan PPN
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <PerhatianBlock type="info" title="Tarif PPN 2025" className="mt-6">
          <p>
            Per 1 Januari 2025, tarif PPN <strong>tetap 11%</strong> untuk
            barang/jasa umum. Tarif <strong>12% hanya</strong> untuk barang
            mewah yang sebelumnya sudah dikenai PPnBM (PMK-131/2024).
          </p>
        </PerhatianBlock>
      </div>
      <Footer />
    </div>
  );
}
