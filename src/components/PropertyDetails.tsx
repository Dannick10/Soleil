"use client";
import { playfair } from "@/app/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const PropertyDetails = () => {
  return (
    <section id="empreendimento" className="py-14 md:py-10">
      <div className="mx-auto px-4">
        <div className="text-center pt-8 pb-2">
          <div className="flex flex-col gap-2">
            <p className="text-sm secondaryText font-bold tracking-[5px] mb-1">
              SOLEIL BY <span className="primaryText">BOCA DO LOBO</span>
            </p>
            <div>
              <h1 className="secondaryText text-2xl md:text-4xl font-bold tracking-widest">
                Empreendimento
              </h1>
              <svg
                width="160"
                height="4"
                viewBox="0 0 160 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto my-4"
              >
                <rect width="160" height="4" fill="#B89355" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 lg:gap-10 items-center secondaryText">
          <div className="space-y-4 w-full md:w-[515px]">
            <h2 className="text-2xl font-bold uppercase">
              LOCALIZAÇÃO PRIVILEGIADA NA CHÁCARA KLABIN
            </h2>
            <p className="text-base">
              O Soleil by Boca do Lobo está em frente à Praça Kant, na Rua
              Garapeba, um grande espaço arborizado e verde que se abre em meio
              à cidade. Uma localização privilegiada, onde é possível desfrutar
              da tranquilidade de um bairro residencial com acesso fácil às
              principais regiões de São Paulo.
            </p>
            <p className="text-base">
              Um projeto onde cada detalhe é contornado por um brilho único e um calor que acolhe tudo à sua volta. Revelando uma beleza incomparável que se renova todas as manhãs.
            </p>
            <div className="pt-4">
              <Link href="https://relacionamento.lavvi.com.br/acesso?_gl=1%2aru8mrx%2a_gcl_aw%2aR0NMLjE3NDM1MzExMTEuQ2owS0NRanduYTZfQmhDYkFSSXNBTElkMlowcmloMHU2eTFIcEtJeUowWl93d1VTY0dHME05cy12OHdlVUVhSl9QYzU2QW5UOGg1Y0lGOGFBcjlNRUFMd193Y0I.%2a_gcl_au%2aMjAzMzcyOTAwLjE3NDMyNjY1MTc.">
                <button className={`btnSecondary ${playfair.className}`}>
                  SAIBA MAIS
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[378px] relative rounded-md overflow-hidden">
            <Image
              src="/images/perspective/Embasamento_EF.jpg"
              alt="Fachada do Soleil"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;