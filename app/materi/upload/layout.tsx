import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload Materi — Bagikan Dokumen Perpajakan",
  description:
    "Upload dan bagikan materi perpajakan Anda dengan komunitas PAJAKKU. Kontribusi pengetahuan untuk membantu praktisi pajak lainnya.",
};

export default function MateriUploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
