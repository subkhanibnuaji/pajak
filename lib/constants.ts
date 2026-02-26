export const SITE_CONFIG = {
  name: "PAJAKKU",
  title: "PAJAKKU — Knowledge Base Perpajakan Indonesia",
  description:
    "Knowledge base perpajakan Indonesia yang komprehensif. Panduan lengkap PPh, PPN, KUP, PBB, dan regulasi pajak lainnya dengan kalkulator interaktif dan studi kasus.",
  url: "https://pajakku.vercel.app",
  author: {
    name: "Ibnu Subkhani",
    title: "PNS Kementerian PKP",
    education: ["S1 Teknik Informatika — Telkom University", "MBA — UGM"],
  },
  github: "https://github.com/subkhanibnuaji/pajak",
} as const;

export const DIFFICULTY_LABELS = {
  dasar: { label: "Dasar", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400" },
  menengah: { label: "Menengah", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" },
  lanjutan: { label: "Lanjutan", color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" },
} as const;

export const REGULASI_COLORS = {
  UU: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
  PP: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800",
  PMK: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  PER: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
  SE: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200 dark:border-gray-800",
  KEP: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
} as const;

export type RegulasiType = keyof typeof REGULASI_COLORS;

export function getRegulasiType(regulasi: string): RegulasiType {
  const upper = regulasi.toUpperCase();
  if (upper.startsWith("UU")) return "UU";
  if (upper.startsWith("PP ") || upper.startsWith("PP.")) return "PP";
  if (upper.startsWith("PMK")) return "PMK";
  if (upper.startsWith("PER")) return "PER";
  if (upper.startsWith("SE")) return "SE";
  if (upper.startsWith("KEP")) return "KEP";
  return "SE";
}
