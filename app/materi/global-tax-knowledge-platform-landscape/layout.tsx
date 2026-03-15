import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Global Tax Knowledge Platform Landscape — Panduan Sistem Perpajakan Global",
  description:
    "Panduan lengkap tentang Global Tax Knowledge Platform. Pelajari sistem, tools, dan best practice untuk administrasi pajak global dari berbagai negara.",
};

export default function GlobalTaxLandscapeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
