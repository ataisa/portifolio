import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Archivo, Poppins } from "next/font/google";

import "./globals.css";

const archivoFont = Archivo({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isabela Miranda | Analista de dados",
  description:
    "me chamo Isabela tenho 21 anos e bem - vindo (a) ao meu site, nele tem meus projetos referente a profissão que quero seguir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivoFont.variable} ${poppins.variable}`}
    >
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
