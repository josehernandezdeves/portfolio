import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "José Hernández — Full-Stack Product Engineer",
  description:
    "Portfolio de José Hernández, desarrollador full-stack. Construyo software que resuelve problemas reales con Next.js, TypeScript y PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-zinc-950 font-sans text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
