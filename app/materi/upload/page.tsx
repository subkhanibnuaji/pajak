"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Upload,
  FileText,
  X,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  FileType,
  Image as ImageIcon,
  Code,
  File,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface UploadedFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  category: "pdf" | "code" | "image" | "document" | "other";
  progress: number;
  status: "uploading" | "success" | "error";
  errorMessage?: string;
}

const ACCEPTED_FILE_TYPES = {
  "application/pdf": { ext: ".pdf", label: "PDF Document" },
  "text/plain": { ext: ".txt", label: "Text File" },
  "text/html": { ext: ".html", label: "HTML Document" },
  "text/css": { ext: ".css", label: "CSS File" },
  "text/javascript": { ext: ".js", label: "JavaScript" },
  "application/javascript": { ext: ".js", label: "JavaScript" },
  "application/typescript": { ext: ".ts", label: "TypeScript" },
  "application/json": { ext: ".json", label: "JSON File" },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { ext: ".xlsx", label: "Excel" },
  "application/vnd.ms-excel": { ext: ".xls", label: "Excel" },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { ext: ".docx", label: "Word" },
  "application/msword": { ext: ".doc", label: "Word" },
  "image/png": { ext: ".png", label: "PNG Image" },
  "image/jpeg": { ext: ".jpg", label: "JPEG Image" },
  "image/svg+xml": { ext: ".svg", label: "SVG Image" },
};

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

function getFileCategory(type: string): UploadedFile["category"] {
  if (type === "application/pdf") return "pdf";
  if (type.startsWith("image/")) return "image";
  if (type.includes("javascript") || type.includes("typescript") || type.includes("json") || type.includes("html") || type.includes("css")) return "code";
  if (type.includes("word") || type.includes("excel") || type.includes("text")) return "document";
  return "other";
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

function getFileIcon(category: UploadedFile["category"]) {
  switch (category) {
    case "pdf":
      return <FileText className="h-5 w-5 text-red-500" />;
    case "code":
      return <Code className="h-5 w-5 text-blue-500" />;
    case "image":
      return <ImageIcon className="h-5 w-5 text-green-500" />;
    case "document":
      return <FileType className="h-5 w-5 text-amber-500" />;
    default:
      return <File className="h-5 w-5 text-gray-500" />;
  }
}

export default function UploadPage() {
  const router = useRouter();
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Riset",
    tags: "",
  });

  const validateFile = (file: File): string | null => {
    if (file.size > MAX_FILE_SIZE) {
      return `File terlalu besar. Maksimal ${formatFileSize(MAX_FILE_SIZE)}`;
    }
    if (!Object.keys(ACCEPTED_FILE_TYPES).includes(file.type)) {
      return "Tipe file tidak didukung. Gunakan: PDF, Office, Gambar, atau Code files";
    }
    return null;
  };

  const addFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles) return;

    const filesArray = Array.from(newFiles);
    const newUploadedFiles: UploadedFile[] = [];

    filesArray.forEach((file) => {
      const error = validateFile(file);
      newUploadedFiles.push({
        id: Math.random().toString(36).substring(7),
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        category: getFileCategory(file.type),
        progress: error ? 0 : 0,
        status: error ? "error" : "uploading",
        errorMessage: error || undefined,
      });
    });

    setFiles((prev) => [...prev, ...newUploadedFiles]);

    // Simulate upload progress
    newUploadedFiles.forEach((uploadedFile, index) => {
      if (uploadedFile.status === "error") return;

      const interval = setInterval(() => {
        setFiles((prev) => {
          const fileIndex = prev.findIndex((f) => f.id === uploadedFile.id);
          if (fileIndex === -1) return prev;

          const newFiles = [...prev];
          const currentFile = newFiles[fileIndex];

          if (currentFile.progress >= 100) {
            clearInterval(interval);
            newFiles[fileIndex] = { ...currentFile, status: "success", progress: 100 };
            return newFiles;
          }

          newFiles[fileIndex] = { ...currentFile, progress: currentFile.progress + 10 };
          return newFiles;
        });
      }, 200);
    });
  }, []);

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) return;

    setIsUploading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In a real implementation, you would:
    // 1. Upload files to server/storage
    // 2. Save metadata to database
    // 3. Redirect to the new material page

    setIsUploading(false);
    router.push("/materi?uploaded=true");
  };

  const categories = [
    "Riset",
    "Panduan",
    "Toolkit",
    "Pelaporan SPT",
    "Coretax",
    "PPh",
    "PPN",
    "KUP",
    "Transfer Pricing",
    "Peraturan",
    "Lainnya",
  ];

  const hasErrors = files.some((f) => f.status === "error");
  const allSuccess = files.length > 0 && files.every((f) => f.status === "success");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/materi"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Materi
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Upload Materi Baru</h1>
        <p className="mt-2 text-muted-foreground">
          Bagikan dokumen, riset, atau panduan pajak Anda ke library PAJAKKU.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* File Upload Area */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">File Upload</CardTitle>
            <CardDescription>
              Drag & drop file atau klik untuk memilih. Maksimal 50MB per file.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("file-input")?.click()}
              className={cn(
                "relative cursor-pointer rounded-lg border-2 border-dashed p-8 transition-all",
                isDragging
                  ? "border-primary bg-primary/5"
                  : "border-muted-foreground/25 hover:border-muted-foreground/50"
              )}
            >
              <input
                id="file-input"
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.html,.css,.js,.ts,.json,.png,.jpg,.jpeg,.svg"
                onChange={(e) => addFiles(e.target.files)}
                className="hidden"
              />
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Klik atau drag file ke sini</p>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF, Word, Excel, Images, atau Code files
                </p>
              </div>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg border",
                      file.status === "error"
                        ? "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30"
                        : file.status === "success"
                        ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/30"
                        : "border-border bg-muted/30"
                    )}
                  >
                    {getFileIcon(file.category)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{formatFileSize(file.size)}</span>
                        {file.status === "uploading" && (
                          <span className="text-primary">{file.progress}%</span>
                        )}
                      </div>
                      {file.status === "uploading" && (
                        <div className="mt-1 h-1 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all"
                            style={{ width: `${file.progress}%` }}
                          />
                        </div>
                      )}
                      {file.errorMessage && (
                        <p className="text-xs text-red-600 mt-1">{file.errorMessage}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {file.status === "success" && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                      {file.status === "error" && (
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      )}
                      <button
                        type="button"
                        onClick={() => removeFile(file.id)}
                        className="p-1 hover:bg-muted rounded"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* File Type Hints */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                <FileText className="h-3 w-3 mr-1" />
                PDF
              </Badge>
              <Badge variant="outline" className="text-xs">
                <FileType className="h-3 w-3 mr-1" />
                Word/Excel
              </Badge>
              <Badge variant="outline" className="text-xs">
                <ImageIcon className="h-3 w-3 mr-1" />
                Images
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Code className="h-3 w-3 mr-1" />
                Code
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Metadata Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Informasi Materi</CardTitle>
            <CardDescription>Berikan detail tentang materi yang Anda upload.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Judul Materi</label>
              <Input
                placeholder="Contoh: Panduan Lengkap PPh 21 Tahun 2025"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Deskripsi</label>
              <textarea
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Jelaskan isi dan manfaat materi ini..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Kategori</label>
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Tags</label>
                <Input
                  placeholder="Pisahkan dengan koma: SPT, Coretax, PPh"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Actions */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {files.length > 0 ? (
              <span>
                {files.filter((f) => f.status === "success").length} dari {files.length} file siap
                diupload
              </span>
            ) : (
              <span>Belum ada file yang dipilih</span>
            )}
          </div>
          <div className="flex gap-3">
            <Link href="/materi">
              <Button type="button" variant="outline">
                Batal
              </Button>
            </Link>
            <Button
              type="submit"
              disabled={!allSuccess || isUploading || !formData.title || !formData.description}
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Mengupload...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Materi
                </>
              )}
            </Button>
          </div>
        </div>

        {hasErrors && (
          <div className="p-4 rounded-lg border border-red-200 bg-red-50 text-red-800 text-sm">
            Beberapa file memiliki error. Periksa dan hapus file yang bermasalah sebelum upload.
          </div>
        )}
      </form>
    </div>
  );
}
