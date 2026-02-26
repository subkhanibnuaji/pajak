import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-lg mb-2">PAJAKKU</h3>
            <p className="text-sm text-muted-foreground">
              Personal knowledge base perpajakan Indonesia. Dibangun oleh{" "}
              {SITE_CONFIG.author.name} sebagai alat belajar mendalam tentang
              regulasi dan praktik perpajakan.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm">Knowledge Base</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/pph" className="hover:text-foreground transition-colors">
                  Pajak Penghasilan
                </Link>
              </li>
              <li>
                <Link href="/ppn" className="hover:text-foreground transition-colors">
                  PPN & PPnBM
                </Link>
              </li>
              <li>
                <Link href="/kup" className="hover:text-foreground transition-colors">
                  Ketentuan Umum (KUP)
                </Link>
              </li>
              <li>
                <Link href="/kalkulator" className="hover:text-foreground transition-colors">
                  Kalkulator Pajak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm">Referensi</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/regulasi" className="hover:text-foreground transition-colors">
                  Database Regulasi
                </Link>
              </li>
              <li>
                <Link href="/glosarium" className="hover:text-foreground transition-colors">
                  Glosarium
                </Link>
              </li>
              <li>
                <Link href="/kalender" className="hover:text-foreground transition-colors">
                  Kalender Pajak
                </Link>
              </li>
              <li>
                <Link href="/kasus" className="hover:text-foreground transition-colors">
                  Studi Kasus
                </Link>
              </li>
              <li>
                <Link href="/materi" className="hover:text-foreground transition-colors">
                  Materi & Riset
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-xs text-muted-foreground">
          <p>
            PAJAKKU v2.0 &mdash; Personal Tax Knowledge Base &mdash;{" "}
            {SITE_CONFIG.author.name}
          </p>
          <p className="mt-1">
            Konten bersifat edukatif. Untuk kepastian hukum, verifikasi ke{" "}
            <a
              href="https://pajak.go.id"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              pajak.go.id
            </a>{" "}
            atau konsultan pajak.
          </p>
        </div>
      </div>
    </footer>
  );
}
