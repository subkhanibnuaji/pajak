import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Komunitas Perpajakan — Diskusi & Tanya Jawab",
  description:
    "Komunitas perpajakan Indonesia untuk diskusi, tanya jawab, dan berbagi pengalaman. Dapatkan solusi dari praktisi dan konsultan pajak profesional.",
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
