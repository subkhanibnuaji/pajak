import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materi Perpajakan — Koleksi Dokumen & Panduan",
  description:
    "Koleksi lengkap materi perpajakan Indonesia. Download panduan, slide presentasi, dan dokumen referensi perpajakan dari para ahli. Upload dan bagikan materi Anda.",
};

export default function MateriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
