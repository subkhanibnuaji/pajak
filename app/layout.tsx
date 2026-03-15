import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/layout/app-shell";
import { ProtectedRoute } from "@/components/providers/protected-route";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  keywords: [
    "pajak",
    "perpajakan",
    "Indonesia",
    "PPh",
    "PPN",
    "KUP",
    "PBB",
    "regulasi",
    "kalkulator",
  ],
  authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.github }],
  creator: SITE_CONFIG.author.name,
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <ProtectedRoute>
            <AppShell>{children}</AppShell>
          </ProtectedRoute>
        </ThemeProvider>
      </body>
    </html>
  );
}
