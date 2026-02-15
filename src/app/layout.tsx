import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout/navigation";

export const metadata: Metadata = {
  title: "Temple du Moine — Guide & Analyse WoW",
  description:
    "Le guide ultime pour les Moines Maître Brasseur, Tisse-Brume et Marche-Vent. Builds, stats, consommables et analyse IA.",
  keywords: [
    "WoW",
    "Monk",
    "Moine",
    "Brewmaster",
    "Mistweaver",
    "Windwalker",
    "Guide",
    "Build",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-[#020617] text-gray-200 antialiased selection:bg-monk-500/30">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
