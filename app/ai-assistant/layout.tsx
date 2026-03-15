import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Assistant Perpajakan — Chatbot Konsultasi",
  description:
    "Asisten AI untuk konsultasi perpajakan Indonesia. Tanyakan pertanyaan tentang PPh, PPN, KUP, dan regulasi pajak lainnya kepada chatbot cerdas kami.",
};

export default function AiAssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
