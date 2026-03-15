import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perpustakaan Buku Perpajakan — Koleksi Referensi",
  description:
    "Perpustakaan digital buku perpajakan Indonesia. Akses ribuan referensi dan panduan pajak dari penerbit terpercaya dan praktisi pajak profesional.",
};

export default function BooksLibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
