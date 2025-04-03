"use client";

import Image from "next/image";

import { RxRulerSquare } from "react-icons/rx";
import { IoCarSportOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { ReactNode } from "react";

type itemsHero = {
  image: ReactNode;
  title: string;
  description: string;
};

const Hero = () => {
  const itemsHero: itemsHero[] = [
    {
      image: <RxRulerSquare />,
      title: "246 m²",
      description: "Área privativa",
    },
    {
      image: <IoBedOutline />,
      title: "4 suítes",
      description: "com hall privativo",
    },
    {
      image: <IoCarSportOutline />,
      title: "3 vagas",
      description: "Garagem privativa",
    },
  ];

  return (
    <section className="relative w-full pt-4 px-4">
      <div className="container mx-auto">
        {/*Titulo*/}

        <div className="text-center pt-8 pb-4">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#182842] font-bold tracking-[5px] mb-1">
              Lançamento | Chácara Klabin
            </p>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-[#0F1E45] tracking-widest">
                SOLEIL BY <span className="primaryText">BOCA DO LOBO</span>
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

        {/*imagem*/}

        <div className="relative flex justify-center">
          <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-lg">
            <Image
              src="/images/perspective/JantarDecorado.jpg"
              alt="Soleil by Boca do Lobo"
              fill
              className="object-cover"
              
            />
          </div>

          {/*cards*/}
          <div className="absolute -bottom-10 md:bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 rounded-t-lg md:rounded-none md:rounded-tl-lg bg-[#f7f7f7] py-2 md:py-4 w-[310px] md:w-[350px] flex items-center justify-center">
            <div className="flex items-center divide-x divide-[#8a641e]">
              {itemsHero.map((items, index) => (
                <div className="flex flex-col items-center px-2" key={index}>
                  <div className="flex flex-col md:flex-row justify-center items-center md:gap-2 relative">
                    <p className="primaryText text-base">{items.image}</p>
                    <p className="text-xl primaryText">{items.title}</p>
                  </div>
                  <p className="text-xs text-black">{items.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
