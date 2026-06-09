import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Geist_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Centre d'accueil Chez Biati — Service traiteur et organisation d'événements sur mesure",
  description:
    "Centre d'accueil Chez Biati organise des réceptions inoubliables, des dîners intimes au bord de la piscine aux grandes fêtes. Des menus de saison, un service raffiné, une organisation sans faille.",
  generator: "skilly hub",
  icons: {
    icon: [
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${geistMono.variable} bg-background`}
      data-lt-installed="true"
      suppressHydrationWarning="true"
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
