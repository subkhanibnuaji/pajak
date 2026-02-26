"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  History, 
  Trash2, 
  Download,
  Copy,
  Check,
  FileText,
  Calculator,
  BookOpen,
  Lightbulb,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  sources?: string[];
}

interface SuggestedQuestion {
  icon: React.ReactNode;
  text: string;
}

const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  { icon: <Calculator className="h-4 w-4" />, text: "Hitung PPh 21 untuk gaji 10 juta dengan status TK/0" },
  { icon: <FileText className="h-4 w-4" />, text: "Bagaimana cara lapor SPT Tahunan di Coretax 2025?" },
  { icon: <BookOpen className="h-4 w-4" />, text: "Apa perbedaan PPh Pasal 21 dan Pasal 26?" },
  { icon: <Lightbulb className="h-4 w-4" />, text: "Berikan tips mengoptimalkan pajak untuk freelancer" },
];

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: "Selamat datang di **AI Tax Assistant PAJAKKU**! 🧠\n\nSaya adalah asisten AI yang dilatih khusus untuk perpajakan Indonesia. Saya dapat membantu Anda dengan:\n\n• **Kalkulasi pajak** (PPh 21, PPh Badan, PPN, dll)\n• **Panduan pelaporan** SPT & e-Filing\n• **Penjelasan regulasi** terbaru (UU HPP, Coretax 2025)\n• **Optimasi perpajakan** untuk individu & bisnis\n• **Analisis perbandingan** ketentuan pajak\n\nBagaimana saya bisa membantu Anda hari ini?",
  timestamp: new Date(),
};

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase();
    
    // Smart response logic based on keywords
    if (lowerInput.includes("pph 21") || lowerInput.includes("gaji")) {
      return {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `**Perhitungan PPh 21 (TER - Tarif Efektif Rata-rata)**

Berdasarkan PMK 168/2023 tentang TER:

**Untuk penghasilan Rp 10.000.000/bulan dengan status TK/0:**

1. **Penentuan Kategori TER:**
   - TK/0 termasuk Kategori A (PTKP: Rp 54.000.000/tahun)

2. **Tarif TER Kategori A:**
   - Rp 0 - 5.400.000: 0%
   - Rp 5.400.001 - 5.650.000: 0.25%
   - Rp 5.650.001 - 5.950.000: 0.5%
   - ... (dst sesuai tabel TER)
   - Rp 10.000.000: **0.75%** (dari tabel TER)

3. **Perhitungan:**
   - PPh 21 = Rp 10.000.000 × 0.75% = **Rp 75.000/bulan**

**Catatan:** TER adalah pemotongan bulanan. Pada akhir tahun, PPh 21 terutang dihitung menggunakan tarif Pasal 17 (progresif 5%-35%) dan dilakukan pemungutan/pemberian kembali.

Apakah Anda ingin saya jelaskan lebih detail atau hitung dengan skenario lain?`,
        timestamp: new Date(),
        sources: ["PMK 168/2023", "UU PPh No. 36/2008"],
      };
    }

    if (lowerInput.includes("spt") || lowerInput.includes("coretax")) {
      return {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `**Panduan Lapor SPT Tahunan via Coretax DJP 2025**

**Langkah-langkah:**

1. **Aktivasi Akun Coretax**
   - Kunjungi coretaxdjp.id
   - Login menggunakan NPWP dan password
   - Verifikasi dengan OTP yang dikirim ke email/SMS

2. **Persiapan Dokumen**
   - Bukti potong PPh 21 (A1) dari perusahaan
   - Bukti pembayaran (jika ada kurang bayar tahun lalu)
   - Data harta dan kewajiban (jika ada perubahan)

3. **Proses Pelaporan:**
   - Pilih menu "e-Filing" → "SPT Tahunan"
   - Pilih tahun pajak
   - Sistem akan menampilkan pre-filled data dari employer
   - Verifikasi dan lengkapi data jika diperlukan
   - Submit dan dapatkan BPE (Bukti Penerimaan Elektronik)

**Deadline SPT Tahunan 2025:**
- OP: 31 Maret 2025
- Badan: 30 April 2025

⚠️ **Tips:** Pastikan data di Coretax sudah sesuai dengan bukti potong dari perusahaan. Jika ada selisih, segera koordinasi dengan HR/finance perusahaan.

Ada yang ingin ditanyakan lebih lanjut?`,
        timestamp: new Date(),
        sources: ["PMK 243/2014", "SE-02/PJ/2017", "Coretax DJP 2025"],
      };
    }

    if (lowerInput.includes("ppn") || lowerInput.includes("faktur")) {
      return {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `**Ketentuan PPN 12% (Berlaku 1 Januari 2025)**

Berdasarkan UU No. 7 Tahun 2021 (UU HPP):

**Tarif PPN:**
- Semula: 11%
- Sekarang: **12%** (efektif 1 Januari 2025)

**Barang/Jasa yang Dikenai PPN:**
- Penyerahan BKP (Barang Kena Pajak) di dalam Daerah Pabean
- Impor BKP
- Penyerahan JKP (Jasa Kena Pajak) di dalam Daerah Pabean
- Pemanfaatan BKP tidak berwujud/JKP dari luar Daerah Pabean

**Faktur Pajak (e-Faktur):**
- Wajib dibuat secara elektronik (e-Faktur)
- Harus dilaporkan paling lambat tanggal 15 bulan berikutnya
- Format sesuai PER-03/PJ/2022

**Pengecualian (Tidak Dipungut/Dibebaskan):**
- Penyerahan ke Kawasan Berikat (tidak dipungut)
- Barang kebutuhan pokok (dibebaskan)
- Jasa pendidikan dan kesehatan (dibebaskan)

Apakah Anda ingin menghitung PPN atau mengetahui ketentuan khusus lainnya?`,
        timestamp: new Date(),
        sources: ["UU HPP No. 7/2021", "PP 49/2022", "PER-03/PJ/2022"],
      };
    }

    // Default response
    return {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: `Terima kasih atas pertanyaan Anda tentang **"${userInput}"**.

Untuk memberikan jawaban yang paling akurat, saya perlu informasi lebih detail:

1. **Status pajak Anda:**
   - Orang Pribadi (OP) atau Badan?
   - Jika OP: status perkawinan dan jumlah tanggungan?

2. **Jenis penghasilan:**
   - Gaji/Penghasilan tetap?
   - Freelance/Usaha?
   - Campuran?

3. **Konteks pertanyaan:**
   - Untuk perhitungan pajak?
   - Pelaporan SPT?
   - Pemotongan/pemungutan?

Anda juga bisa mencoba pertanyaan seperti:
- "Hitung PPh 21 untuk gaji 15 juta K/2"
- "Bagaimana cara rekam e-Faktur?"
- "Apa itu PER-23 dan kapan digunakan?"

Silakan berikan detail tambahan agar saya bisa membantu dengan lebih optimal! 🎯`,
      timestamp: new Date(),
    };
  };

  const copyToClipboard = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    setMessages([WELCOME_MESSAGE]);
  };

  const formatMessage = (content: string) => {
    // Simple markdown-like formatting
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />');
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      {/* Header */}
      <div className="border-b bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">AI Tax Assistant</h1>
                <p className="text-sm text-muted-foreground">
                  Asisten AI khusus perpajakan Indonesia
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Online
              </Badge>
              <Button variant="ghost" size="sm" onClick={clearChat}>
                <Trash2 className="h-4 w-4 mr-1" />
                Hapus Chat
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  message.role === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-gradient-to-br from-violet-500 to-indigo-600 text-white"
                )}>
                  {message.role === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <div className={cn(
                  "max-w-[80%] group",
                  message.role === "user" ? "items-end" : "items-start"
                )}>
                  <Card className={cn(
                    "border-0 shadow-sm",
                    message.role === "user" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted/50"
                  )}>
                    <CardContent className="p-3">
                      <div 
                        className="text-sm leading-relaxed prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                      />
                      
                      {/* Sources */}
                      {message.sources && (
                        <div className="mt-3 pt-2 border-t border-border/50">
                          <p className="text-xs text-muted-foreground mb-1">Referensi:</p>
                          <div className="flex flex-wrap gap-1">
                            {message.sources.map((source) => (
                              <Badge key={source} variant="outline" className="text-[10px]">
                                {source}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  {/* Actions */}
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => copyToClipboard(message.content, message.id)}
                      >
                        {copiedId === message.id ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                  
                  <span className="text-[10px] text-muted-foreground mt-1">
                    {message.timestamp.toLocaleTimeString("id-ID", { 
                      hour: "2-digit", 
                      minute: "2-digit" 
                    })}
                  </span>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <Card className="border-0 shadow-sm bg-muted/50">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm text-muted-foreground">AI sedang berpikir...</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-background">
            {/* Suggested Questions */}
            {messages.length <= 2 && (
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2">Pertanyaan yang sering diajukan:</p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      className="text-xs h-auto py-1.5"
                      onClick={() => {
                        setInput(q.text);
                        inputRef.current?.focus();
                      }}
                    >
                      {q.icon}
                      <span className="ml-1 truncate max-w-[200px]">{q.text}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                placeholder="Tanyakan tentang pajak Indonesia..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button 
                onClick={handleSend} 
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-r from-violet-500 to-indigo-600"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-[10px] text-muted-foreground text-center mt-2">
              AI Tax Assistant memberikan informasi berdasarkan regulasi perpajakan Indonesia terbaru. 
              Untuk kepastian hukum, verifikasi ke konsultan pajak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
