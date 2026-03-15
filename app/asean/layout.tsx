import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perbandingan Pajak ASEAN — Regulasi Negara-negara",
  description:
    "Perbandingan sistem perpajakan negara-negara ASEAN. Pelajari tarif pajak, regulasi, dan peraturan perpajakan di Indonesia, Singapura, Malaysia, Thailand, Vietnam, dan Filipina.",
};

export default function AseanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
