"use client";

import { useEffect } from "react";
import { AlertTriangle, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="rounded-lg bg-red-100 dark:bg-red-900/30 p-4 inline-flex mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Terjadi Kesalahan</h1>
        <p className="text-muted-foreground mb-6">
          Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi atau
          kembali ke halaman utama.
        </p>
        {error.digest && (
          <p className="text-xs text-muted-foreground mb-4 font-mono">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Coba Lagi
          </button>
          <Link
            href="/"
            className="px-4 py-2 rounded-md border border-input hover:bg-accent transition-colors text-sm font-medium inline-flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Kembali ke Rumah
          </Link>
        </div>
      </div>
    </div>
  );
}
