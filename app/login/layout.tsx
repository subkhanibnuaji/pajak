import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login — PAJAKKU",
  description: "Login ke akun PAJAKKU untuk mengakses fitur eksklusif dan personalisasi konten perpajakan.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
