"use client";

import { playfair } from "@/app/layout";
import Image from "next/image";

const DesignPartnership = () => {
  return (
    <section id="empreendimento" className="py-4">
      <div className="container max-w-[1100px] mx-auto px-4">
        {/*descrição*/}
        <div className="flex flex-col-reverse md:flex-row-reverse w-auto gap-2 md:gap-10 lg:gap-14 items-center secondaryText leading-relaxed">
          <div className="space-y-4 md:w-2/4 ">
            <div className="w-24 h-0.5 bg-[#B89355] my-4"></div>
            <h2 className="text-xl font-bold uppercase tracking-wider">
              DESIGN DE <span className="primaryText">LUXO</span>
              <br />
              ASSINADO PELO <br /> ATELIER PORTUGUÊS <br />{" "}
              <span className="primaryText">BOCA DO LOBO</span>.
            </h2>

            <p className="text-sm leading-relaxed">
              A Lavvi traz com exclusividade para o Soleil uma curadoria de
              mobiliário feito à mão por artesãos às margens do Rio Douro, em
              Portugal. Cada criação da Boca do Lobo é mais do que um móvel ou
              uma peça de decoração
            </p>

            <p className="text-sm leading-relaxed">
              Fundada em 2005, a Boca do Lobo tem a missão de redefinir os
              conceitos de design por meio do inesperado, unindo técnicas
              ancestrais de fino artesanato manual, com tecnologia de ponta.
            </p>

            <div className="pt-4">
              <button className="btnSecondary">SAIBA MAIS</button>
            </div>
          </div>

          {/*Foto*/}
          <div className="relative">
            <div className="relative rounded-md overflow-hidden">
              <Image
                src="/images/design/movel.jpg"
                alt="Fachada do Soleil"
                width={450}
                height={320}
              />
            </div>
            <div className="bg-[#182842] w-[104px] h-[104px] absolute -bottom-4 -right-4 rounded-full flex flex-col justify-center items-center text-center">
              <p className="tracking-[4px] text-[#f7f7f7] text-[10px]">DESIGN <br /> EXCLUSIVO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPartnership;
