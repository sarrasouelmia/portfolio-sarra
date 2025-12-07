import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarra Soualmia – Ingénieure Logiciel · IA · Full-Stack",
  description:
    "Portfolio de Sarra Soualmia, ingénieure logiciel Full-Stack spécialisée en développement web/mobile, IA et vision artificielle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
