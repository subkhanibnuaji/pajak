import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalkulator PPh 21 — Hitung Pajak Karyawan TER 2024",
  description:
    "Kalkulator PPh 21 karyawan dengan metode TER 2024 dan perbandingan Pasal 17. Hitung pajak penghasilan bulanan dan tahunan dengan dasar hukum PP 58/2023.",
};

export default function Pph21CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
