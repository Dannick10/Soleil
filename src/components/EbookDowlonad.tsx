"use client";
import Image from "next/image";
import Link from "next/link";

const EbookDownload = () => {
  return (
    <section className="py-16 bg-gradient-to-t from-[#F8F5EF] to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="relative">
            <Image
              src="/images/design/ebookCapa.jpg"
              alt="Fachada do Soleil"
              width={650}
              height={420}
              className="object-cover rounded-md"
            />
            <svg
              className="absolute -bottom-4 -right-4 md:bottom-20 lg:-bottom-4"
              width="104"
              height="104"
              viewBox="0 0 104 104"
            >
              <circle cx="52" cy="52" r="52" fill="#182842" />
              <text
                x="55"
                y="48"
                fill="#f7f7f7"
                className="text-[10px]"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                BOOK{" "}
                <tspan x="52" dy="12">
                DIGITAL
                </tspan>
              </text>
            </svg>

            <div className="pt-4 flex-col gap-2 hidden md:flex lg:hidden">
              <a
                href="/book/Book_Soleil_Residences.pdf"
                download="Soleil-by-Boca-do-Lobo.pdf"
                className="btnPrimary text-center"
              >
                BAIXAR BOOK COMPLETO
              </a>

              <Link href="https://relacionamento.lavvi.com.br/acesso?_gl=1%2aru8mrx%2a_gcl_aw%2aR0NMLjE3NDM1MzExMTEuQ2owS0NRanduYTZfQmhDYkFSSXNBTElkMlowcmloMHU2eTFIcEtJeUowWl93d1VTY0dHME05cy12OHdlVUVhSl9QYzU2QW5UOGg1Y0lGOGFBcjlNRUFMd193Y0I.%2a_gcl_au%2aMjAzMzcyOTAwLjE3NDMyNjY1MTc.">
                <button className="btnSecondary secondaryText w-full">
                  SAIBA MAIS
                </button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <svg
              width="120"
              height="4"
              viewBox="0 0 160 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="my-4"
            >
              <rect width="120" height="4" fill="#B89355" />
            </svg>
            <h2 className="text-2xl font-bold uppercase tracking-widest secondaryText">
              SOLEIL BY BOCA DO LOBO <br />{" "}
              <span className="primaryText">BOOK</span>
            </h2>

            <p className="secondaryText max-w-[420px]">
              Descubra todos os detalhes do Soleil Klabin em nosso exclusivo
              book digital. Uma jornada visual pelo luxo, sofisticação e design
              único que definem este empreendimento extraordinário.
            </p>

            <p className="secondaryText max-w-[420px]">
              Explore as plantas, acabamentos premium e todos os diferenciais
              que fazem do Soleil by Boca do Lobo uma obra-prima da arquitetura
              contemporânea no coração da Chácara Klabin.
            </p>

            <div className="pt-4 flex flex-col lg:flex-row md:hidden lg:flex gap-2">
              <a
                href="/book/Book_Soleil_Residences.pdf"
                download="Soleil-by-Boca-do-Lobo.pdf"
                className="btnPrimary text-center "
              >
                BAIXAR BOOK COMPLETO
              </a>

              <Link href="https://relacionamento.lavvi.com.br/acesso?_gl=1%2aru8mrx%2a_gcl_aw%2aR0NMLjE3NDM1MzExMTEuQ2owS0NRanduYTZfQmhDYkFSSXNBTElkMlowcmloMHU2eTFIcEtJeUowWl93d1VTY0dHME05cy12OHdlVUVhSl9QYzU2QW5UOGg1Y0lGOGFBcjlNRUFMd193Y0I.%2a_gcl_au%2aMjAzMzcyOTAwLjE3NDMyNjY1MTc.">
                <button className="btnSecondary secondaryText w-full">
                  SAIBA MAIS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookDownload;
