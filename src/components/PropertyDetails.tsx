"use client";

import { playfair } from "@/app/layout";
import Image from "next/image";

const PropertyDetails = () => {
  return (
    <section id="empreendimento" className="py-4">
      <div className="container max-w-[1100px] mx-auto px-4">
        <div className="text-center pt-8 pb-4">
          <div className="flex flex-col gap-4">
            <p className="text-sm secondaryText font-bold tracking-[5px] mb-2">
            SOLEIL BY <span className="primaryText">BOCA DO LOBO</span>
            </p>
            <div>
              <h1 className="secondaryText text-2xl md:text-4xl font-bold tracking-widest">
              Empreendimento
              </h1>
              <div className="w-40 h-0.5 bg-[#B89355] mx-auto my-4"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row w-auto gap-2 lg:gap-10 items-center secondaryText">
          <div className="space-y-4 md:w-2/4 ">
            <h2 className="text-xl font-bold uppercase">
              LOCALIZAÇÃO PRIVILEGIADA 
              NA CHÁCARA KLABIN
            </h2>

            <p className="text-sm leading-relaxed">
              O Soleil by Boca do Lobo está em frente à Praça Kant, na Rua
              Garapeba, um grande espaço arborizado e verde que se abre em meio
              à cidade. Uma localização privilegiada, onde é possível desfrutar
              da tranquilidade de um bairro residencial com acesso fácil às
              principais regiões de São Paulo.
            </p>

            <p className="text-sm">
            Um projeto onde cada detalhe é contornado por um brilho único e um calor que acolhe tudo à sua volta. Revelando uma beleza incomparável que se renova todas as manhãs.
            </p>

            <div className="pt-4">
              <button className="btnSecondary">SAIBA MAIS</button>
            </div>
          </div>

          <div className="w-full h-[378px] relative rounded-md overflow-hidden">
            <Image
              src="/images/perspective/Embasamento_EF.jpg"
              alt="Fachada do Soleil"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails
