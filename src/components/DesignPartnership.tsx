"use client";
import Image from "next/image";
import { useModal } from "./form/context/ModalContext";

const DesignPartnership = () => {
  const { onChangeModal } = useModal();

  return (
    <section id="empreendimento" className="py-4">
      <div className="container mx-auto px-4">
        {/*descrição*/}
        <div className="flex flex-col-reverse md:flex-row-reverse w-auto gap-2 md:gap-10 lg:gap-14 items-center justify-center secondaryText">
          <div className="space-y-4 md:w-2/4 max-w-[462px]">
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
            <h2 className="text-2xl font-bold uppercase tracking-wider">
              DESIGN DE <span className="primaryText">LUXO</span>
              <br />
              ASSINADO PELO <br /> ATELIER PORTUGUÊS <br />{" "}
              <span className="primaryText">BOCA DO LOBO</span>.
            </h2>

            <p className="text-base">
              A Lavvi traz com exclusividade para o Soleil uma curadoria de
              mobiliário feito à mão por artesãos às margens do Rio Douro, em
              Portugal. Cada criação da Boca do Lobo é mais do que um móvel ou
              uma peça de decoração
            </p>

            <p className="text-base">
              Fundada em 2005, a Boca do Lobo tem a missão de redefinir os
              conceitos de design por meio do inesperado, unindo técnicas
              ancestrais de fino artesanato manual, com tecnologia de ponta.
            </p>

            <div className="pt-4">
              <button className="btnSecondary" onClick={onChangeModal}>
                SAIBA MAIS
              </button>
            </div>
          </div>

          {/*Foto*/}
          <div className="relative">
            <div className="relative rounded-md overflow-hidden ">
              <Image
                src="/images/design/movel.jpg"
                alt="Fachada do Soleil"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={450}
                height={320}
                className="object-cover"
              />
            </div>
            <svg
              className="absolute -bottom-4 -right-4"
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
                DESIGN{" "}
                <tspan x="52" dy="12">
                  EXCLUSIVO
                </tspan>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPartnership;
