import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alerts & Update Perpajakan — Berita Terbaru",
  description:
    "Update terbaru berita, kebijakan, dan regulasi perpajakan Indonesia. Dapatkan notifikasi perubahan PPN, PPh, KUP, dan peraturan pajak lainnya.",
};

export default function AlertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
