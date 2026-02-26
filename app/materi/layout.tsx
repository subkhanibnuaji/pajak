import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materi & Riset - PAJAKKU",
  description: "Library dokumen materi dan riset perpajakan yang bisa dibuka online dan diunduh. Upload dan bagikan materi pajak Anda.",
};

export default function MateriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
