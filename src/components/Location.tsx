"use client";

import { useState } from "react";
import { BiPin, BiShoppingBag } from "react-icons/bi";
import { LuBuilding2 } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import { BsTree } from "react-icons/bs";
import Link from "next/link";

const Location = () => {
  const [activeTab, setActiveTab] = useState("map");

  const locationFeatures = [
    {
      icon: <BiPin />,
      text: "Localização privilegiada na Chácara Klabin",
    },
    {
      icon: <BsTree />,
      text: "Em frente à Praça Kant",
    },
    {
      icon: <FaGraduationCap />,
      text: "Próximo a escolas e universidades de ponta",
    },
    {
      icon: <LuBuilding2 />,
      text: "Perto de hospitais e centros médicos",
    },
    {
      icon: <BiShoppingBag />,
      text: "Centros comerciais ao alcance",
    },
  ];

  return (
    <section id="localizacao" className="py-4">
      <div className="container mx-auto px-4">
        {/*titulo*/}
        <div className="text-center mb-12">
          <p className="text-sm secondaryText font-bold tracking-[3px] mb-1">
            Localização
          </p>
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
          <h2 className="text-2xl font-light secondaryText mb-2">
            Rua Garapeba, 75 – Chácara Klabin
          </h2>
        </div>
        {/*Controles*/}
        <div className="flex justify-center gap-4 mb-6 md:w-[500px]">
          <button
            onClick={() => setActiveTab("map")}
            className={`py-1 px-7 cursor-pointer tracking-wider transition-all duration-200 text-sm border ${
              activeTab === "map"
                ? "bg-[#182842] text-[#f7f7f7]  border-[#182842]"
                : "bg-[#f7f7f7] text-[#182842]  border-[#182842]"
            } `}
          >
            MAPA
          </button>
          <button
            onClick={() => setActiveTab("aerial")}
            className={`y-1 px-7 cursor-pointer tracking-wider transition-all duration-200 text-sm border ${
              activeTab === "aerial"
                ? "bg-[#182842] text-[#f7f7f7] border-[#182842]"
                : "bg-[#f7f7f7] text-[#182842] border-[#182842]"
            }`}
          >
            Vista Aérea
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/*Mapa e visão aerea*/}
          <div className="relative aspect-[4/3] overflow-hidden">
            {activeTab === "map" ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3309870154094!2d-46.623350599999995!3d-23.592459700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bcfe60e28cb%3A0x16c0cb1c85040574!2sR.%20Garapeba%2C%2074%20-%20Jardim%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004116-210!5e0!3m2!1sen!2sbr!4v1743699691246!5m2!1sen!2sbr"
                className="w-full h-full"
                title="Rua Garapeba, 75 - Chácara Klabin"
                loading="lazy"
              ></iframe>
            ) : (
              <iframe
                src="https://aeroimagens.com.br/lavvisoleil/tour.html"
                className="w-full h-full"
                loading="lazy"
                title="Tour Virtual"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/*Descrição*/}
          <div className="space-y-2 secondaryText md:max-w-[400px] flex flex-col justify-end">
            <h4 className="text-xl font-bold uppercase">
              LOCALIZAÇÃO PRIVILEGIADA
            </h4>

            <div className="space-y-3">
              <p className="leading-relaxed">
                O Soleil by Boca do Lobo está em frente à Praça Kant, na Rua
                Garapeba, um grande espaço arborizado e verde que se abre em
                meio à cidade. Uma localização privilegiada, onde é possível
                desfrutar da tranquilidade de um bairro residencial com acesso
                fácil às principais regiões de São Paulo.
              </p>

              <div className="space-y-2 pt-2">
                {locationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#EFE5D3] primaryText flex items-center justify-center rounded-full">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-semibold">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <button className="btnPrimary text-sm">VEJA O CAMINHO</button>
              <Link href="https://relacionamento.lavvi.com.br/acesso?_gl=1%2aru8mrx%2a_gcl_aw%2aR0NMLjE3NDM1MzExMTEuQ2owS0NRanduYTZfQmhDYkFSSXNBTElkMlowcmloMHU2eTFIcEtJeUowWl93d1VTY0dHME05cy12OHdlVUVhSl9QYzU2QW5UOGg1Y0lGOGFBcjlNRUFMd193Y0I.%2a_gcl_au%2aMjAzMzcyOTAwLjE3NDMyNjY1MTc.">
              <button className="btnSecondary text-sm">SAIBA MAIS</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
