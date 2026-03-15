import { Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="rounded-lg bg-amber-100 dark:bg-amber-900/30 p-4 inline-flex mb-4">
          <Search className="h-8 w-8 text-amber-600 dark:text-amber-400" />
        </div>
        <h1 className="text-5xl font-bold mb-2">404</h1>
        <p className="text-xl font-semibold mb-2">Halaman Tidak Ditemukan</p>
        <p className="text-muted-foreground mb-6">
          Maaf, halaman yang Anda cari tidak ada. Silakan periksa URL atau kembali
          ke halaman utama.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium inline-flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Kembali ke Rumah
          </Link>
        </div>
      </div>
    </div>
  );
}
