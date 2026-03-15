import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Database Regulasi Perpajakan — Peraturan Indonesia",
  description:
    "Database lengkap regulasi perpajakan Indonesia. Cari peraturan berdasarkan nomor, judul, atau topik. Akses UU, PP, PMK, PER, SE, dan KEP perpajakan.",
};

export default function RegulasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
