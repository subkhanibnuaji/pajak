import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glosarium Perpajakan — Istilah & Definisi",
  description:
    "Glosarium lengkap istilah perpajakan Indonesia. Cari definisi istilah pajak yang sering digunakan dalam regulasi, praktik, dan administrasi perpajakan.",
};

export default function GlosariumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
