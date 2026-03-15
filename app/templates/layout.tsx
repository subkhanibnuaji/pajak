import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Template Dokumen Perpajakan — Siap Pakai",
  description:
    "Template dokumen perpajakan siap pakai untuk SPT, laporan pajak, notulen, dan dokumen perpajakan lainnya. Download dan gunakan untuk kebutuhan administrasi pajak.",
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
