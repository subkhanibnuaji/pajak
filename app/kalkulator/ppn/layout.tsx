import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalkulator PPN — Hitung Pajak Pertambahan Nilai",
  description:
    "Kalkulator PPN interaktif untuk menghitung pajak pertambahan nilai. Hitung PPN include/exclude dengan tarif 11% atau 12% sesuai UU HPP 2021.",
};

export default function PpnCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
