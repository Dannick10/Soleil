"use client";
import Image from "next/image";

const EbookDownload = () => {
  return (
    <section className="py-16 bg-[#F8F5EF]">
      <div className="container max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="md:w-1/2">
            <Image
              src="/images/design/ebookCapa.jpg"
              alt="Fachada do Soleil"
              width={450}
              height={320}
              className="object-cover rounded-md"
            />
          </div>

          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-light secondaryText uppercase">
              SOLEIL BY <span className="primaryText">BOCA DO LOBO</span>
            </h2>

            <p className="text-sm secondaryText">
              Descubra todos os detalhes do Soleil Klabin em nosso exclusivo
              book digital. Uma jornada visual pelo luxo, sofisticação e design
              único que definem este empreendimento extraordinário.
            </p>

            <p className="text-sm secondaryText">
              Explore as plantas, acabamentos premium e todos os diferenciais
              que fazem do Soleil by Boca do Lobo uma obra-prima da arquitetura
              contemporânea no coração da Chácara Klabin.
            </p>

            <div className="pt-4">
              <a
                href="/book/Book_Soleil_Residences.pdf"
                download="Soleil-by-Boca-do-Lobo.pdf"
                className="btnPrimary py-2"
              >
                BAIXAR BOOK COMPLETO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookDownload;
