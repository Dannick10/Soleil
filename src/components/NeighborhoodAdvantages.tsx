"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { BiCar, BiShoppingBag } from "react-icons/bi";
import { BsTree } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { GiPawPrint } from "react-icons/gi";
import { LuBuilding2 } from "react-icons/lu";

type NeighborhoodAdvantage = {
  icon: ReactNode;
  title: string;
  description: string;
};

const NeighborhoodAdvantages = () => {
  const NeighborhoodItems: NeighborhoodAdvantage[] = [
    {
      icon: <BiCar />,
      title: "Fácil Acesso",
      description: "Localização estratégica para deslocamento por veículo",
    },
    {
      icon: <LuBuilding2 />,
      title: "Perto de Hospital",
      description: "Proximidade a centros médicos de excelência",
    },
    {
      icon: <GiPawPrint />,
      title: "Pet Friendly",
      description: "Ambiente acolhedor para seus animais de estimação",
    },
    {
      icon: <BsTree />,
      title: "Perto de Parque",
      description: "Ambiente acolhedor para seus animais de estimação",
    },
    {
      icon: <BiShoppingBag />,
      title: "Perto de Shopping",
      description: "Conveniência para compras e entretenimento",
    },
    {
      icon: <FaGraduationCap />,
      title: "Educação",
      description: "Próximo a instituições Liceu Pasteur, Colégio Marista...",
    },
  ];

  return (
    <section id="empreendimento" className="py-10">
      <div className="container mx-auto px-4">
        {/*descrição*/}
        <div className="text-center pt-8 pb-8">
          <div>
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
            <h1 className="secondaryText text-2xl md:text-4xl font-bold tracking-widest">
              Um Ícone do Luxo
            </h1>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row w-auto gap-2 lg:gap-10 items-center secondaryText">
          <div className="space-y-4 md:w-2/4 max-w-[515px]">
            <h2 className="text-2xl font-bold uppercase">
              PRAÇA KANT CHÁCARA KLABIN
            </h2>

            <p className="text-base">
              As vantagens de se morar na Chácara Klabin não são poucas. Um
              bairro nobre e residencial com infraestrutura de comércio
              essencial, transporte público e fácil acesso por veículo
              automotivo, lazer com praças pet e parques.
            </p>

            <p className="text-base">
              Próximo a instituições educacionais de prestígio como o Liceu
              Pasteur, Colégio Marista Arquidiocesano e a faculdade ESPM, o
              Soleil Klabin oferece o equilíbrio perfeito entre tranquilidade e
              conveniência.
            </p>

            <div className="pt-4">
              <Link href="https://relacionamento.lavvi.com.br/acesso?_gl=1%2aru8mrx%2a_gcl_aw%2aR0NMLjE3NDM1MzExMTEuQ2owS0NRanduYTZfQmhDYkFSSXNBTElkMlowcmloMHU2eTFIcEtJeUowWl93d1VTY0dHME05cy12OHdlVUVhSl9QYzU2QW5UOGg1Y0lGOGFBcjlNRUFMd193Y0I.%2a_gcl_au%2aMjAzMzcyOTAwLjE3NDMyNjY1MTc.">
                <button className="btnSecondary">SAIBA MAIS</button>
              </Link>
            </div>
          </div>
          {/*foto*/}
          <div className="w-full md:w-[500px] lg:1/2 h-[378px] relative rounded-md overflow-hidden">
            <Image
              src="/images/perspective/Detalhe_Fachada_EF.jpg"
              alt="Fachada do Soleil"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-4 mt-8">
          {NeighborhoodItems.map((item, index) => (
            <div
              className="p-4 duration-200 transition-transform rounded-lg border-b border-[#C9A96E] group sticky top-20 left-0 bg-[#f7f7f7]"
              key={index}
            >
              <div className="flex items-start mb-3 secondaryText">
                <div className="flex justify-center items-center gap-2">
                  <div className="w-10 h-10 bg-[#EFE5D3] primaryText flex items-center justify-center rounded-full text-xl relative group-hover:scale-110 duration-200">
                    <span>{item.icon}</span>
                    <div className="w-10 h-10 inset-2 top-0 left-0 border-b border-e rounded-full border-yellow-400 border-e-amber-300 group-hover:animate-spin absolute opacity-0 group-hover:opacity-100 duration-200"></div>
                  </div>
                  <h3 className="text-[20px] font-bold">{item.title}</h3>
                </div>
              </div>
              <p className="text-base secondaryText">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodAdvantages;
