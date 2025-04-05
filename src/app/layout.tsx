import type { Metadata } from "next";
import { philosopher, playfair } from "./lib/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/form/context/ModalContext";

export const metadata: Metadata = {
  title: "Soleil by Boca do Lobo | Lançamento na Chácara Klabin",
  description:
    "Conheça o Soleil by Boca do Lobo, lançamento exclusivo na Chácara Klabin com apartamentos de 246m², 4 suítes, hall privativo e lazer completo.",
  keywords: [
    "Soleil by Boca do Lobo",
    "Apartamento Chácara Klabin",
    "Lançamento imobiliário",
    "Apartamento de alto padrão",
    "Imóveis Lavvi",
    "Apartamento 4 suítes",
    "Imóvel de luxo SP",
    "Apartamento com hall privativo",
  ],
  openGraph: {
    title: "Soleil by Boca do Lobo | Alto padrão na Chácara Klabin",
    description:
      "Lançamento de alto padrão com 246m², 4 suítes e 3 vagas na Chácara Klabin. Assinado pela Boca do Lobo. Confira as plantas e registre seu interesse.",
    url: "https://soleilbybocadolobo.vercel.app/",
    siteName: "Lavvi",
    images: [
      {
        url: "/images/design/ebookCapa.jpg",
        width: 1200,
        height: 630,
        alt: "Soleil by Boca do Lobo - Fachada",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${philosopher.className} ${playfair.variable}`}>
        <ModalProvider>
          <Header />
          <div className={`flex min-h-screen flex-col bg-[#f7f7f7] pt-10`}>
            {children}
          </div>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
