import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KULT Barber & Atelier | Precision Haircuts & Grooming Senopati",
  description: "Redefining precision haircuts & modern grooming in Senopati. Heritage barbering meets contemporary atelier precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className={`${geistSans.variable} antialiased bg-zinc-950 text-zinc-100 min-h-screen selection:bg-amber-500 selection:text-zinc-950`}>
        {children}
      </body>
    </html>
  );
}
