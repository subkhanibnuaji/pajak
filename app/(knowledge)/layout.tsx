import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 mx-auto w-full max-w-4xl px-4 py-6 md:px-8 md:py-8">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
