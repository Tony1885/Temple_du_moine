import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WoWAnalyzer — Analyse IA de tes performances WoW",
  description:
    "Upload ton log de combat WoW et reçois une analyse prédictive et pédagogique propulsée par l'IA. DPS, dégâts évitables, uptime, plan d'action — tout pour progresser.",
  keywords: [
    "WoW",
    "World of Warcraft",
    "analyse",
    "IA",
    "DPS",
    "logs",
    "combat",
    "raid",
    "mythic+",
    "performance",
    "AI",
  ],
  openGraph: {
    title: "WoWAnalyzer — L'IA au service de ton DPS",
    description:
      "Analyse prédictive de tes performances WoW via l'intelligence artificielle. Gratuit, sans inscription.",
    type: "website",
  },
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
      <body className="min-h-screen bg-void-900 text-gray-200 antialiased">
        {children}
      </body>
    </html>
  );
}
