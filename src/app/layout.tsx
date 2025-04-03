import type { Metadata } from "next";
import { philosopher } from "./lib/fonts"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Soleil by boca do lobo",
  description: "Soleil by boca do lobo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${philosopher.className}`}>
        <Header />
        <div className={`flex min-h-screen flex-col bg-[#f7f7f7] pt-10`}>
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
