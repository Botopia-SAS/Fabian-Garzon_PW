"use client"; // Hace que el layout sea un Client Component

import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import { Inconsolata } from "next/font/google";
import "./globals.css";

// Configuración de Inconsolata
const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200"], // ExtraLight
  variable: "--font-inconsolata",
});

// Importa el Header deshabilitando SSR para evitar errores de hidratación
const Header = dynamic(() => import("@/components/header"), { ssr: false });

// Configuración de otras fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inconsolata.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
