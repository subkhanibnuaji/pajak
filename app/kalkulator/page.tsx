import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Kalkulator Pajak",
  description: "Kalkulator pajak interaktif: PPh 21 (TER & Pasal 17), PPN, PPh Badan, BPHTB, PPh Final UMKM, dan angsuran PPh 25.",
};

const CALCULATORS = [
  {
    title: "Kalkulator PPh 21",
    description: "Hitung PPh 21 karyawan dengan metode TER (2024) dan perbandingan Pasal 17",
    href: "/kalkulator/pph-21",
    badge: "TER 2024",
    dasarHukum: "PP 58/2023, PMK-168/2023",
  },
  {
    title: "Kalkulator PPN",
    description: "Hitung PPN include/exclude dengan tarif 11% atau 12%",
    href: "/kalkulator/ppn",
    dasarHukum: "UU HPP, PMK-131/2024",
  },
  {
    title: "Kalkulator PPh Badan",
    description: "Simulasi PPh Badan 22% dengan fasilitas Pasal 31E",
    href: "/kalkulator/pph-badan",
    dasarHukum: "UU HPP Pasal 17(1)b, Pasal 31E",
  },
  {
    title: "Kalkulator BPHTB",
    description: "Hitung Bea Perolehan Hak atas Tanah dan Bangunan",
    href: "/kalkulator/bphtb",
    dasarHukum: "UU HKPD",
  },
  {
    title: "Kalkulator PPh Final UMKM",
    description: "PPh Final 0.5% untuk UMKM (omzet ≤ Rp4,8 miliar)",
    href: "/kalkulator/pph-final-umkm",
    dasarHukum: "PP 55/2022",
  },
  {
    title: "Kalkulator Angsuran PPh 25",
    description: "Hitung angsuran PPh 25 bulanan",
    href: "/kalkulator/pph-25",
    dasarHukum: "Pasal 25 UU PPh",
  },
];

export default function KalkulatorPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        <h1 className="text-3xl font-bold">Kalkulator Pajak</h1>
        <p className="mt-2 text-muted-foreground">
          Kalkulator interaktif untuk berbagai jenis pajak. Setiap perhitungan
          menampilkan langkah-langkah detail beserta dasar hukum.
        </p>

        <div className="grid gap-4 mt-6 sm:grid-cols-2">
          {CALCULATORS.map((calc) => (
            <Link key={calc.href} href={calc.href}>
              <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    {calc.badge && (
                      <Badge variant="secondary" className="text-[10px]">
                        {calc.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-base mt-2">{calc.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {calc.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">
                      {calc.dasarHukum}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
