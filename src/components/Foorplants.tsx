"use client";

import { useState } from "react";
import Image from "next/image";

type foorPlans = {
  title: string;
  image: string;
};

const FloorPlans = () => {
  const patch = "/images/plantas";

  const floorPlans: foorPlans[] = [
    {
      title: "PLANTA-TIPO 4 SUÍTES 246 M²",
      image: `${patch}/PLANTA-TIPO4SUÍTES246M2.jpg`,
    },
    {
      title: "PLANTA DECORADO 3 SUÍTES 246 M²",
      image: `${patch}/PLANTADECORADO3SUÍTES246M2.jpg`,
    },
    {
      title: "DUPLEX 4 SUÍTES 487 M² - PISO INFERIOR",
      image: `${patch}/DUPLEX4SUÍTES487M2-PISOINFERIOR.jpg`,
    },
    {
      title: "DUPLEX 4 SUÍTES 487 M² - PISO SUPERIOR",
      image: `${patch}/DUPLEX4SUÍTES487M2-PISOSUPERIOR.jpg`,
    },
    {
      title: "IMPLANTAÇÃO TÉRREO",
      image: `${patch}/IMPLANTAÇÃOTÉRREO.jpg`,
    },
    {
      title: "IMPLANTAÇÃO 2º PAVIMENTO",
      image: `${patch}/IMPLANTAÇÃO2ºPAVIMENTO.jpg`,
    },
  ];
  const [activePlan, setActivePlan] = useState(0);

  return (
    <section id="plantas" className="py-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
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
          <h2 className="secondaryText text-2xl md:text-4xl font-bold tracking-widest">
            Plantas
          </h2>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:gap-4 lg:gap-6">
          <div className="md:w-[480px] lg:w-[439px] mb-4 md:mb-0">
            <div className="space-y-4">
              {floorPlans.map((plan, index) => (
                <button
                  key={index}
                  onClick={() => setActivePlan(index)}
                  className={`w-full text-left px-3 py-2 border text-sm transition-all duration-200 cursor-pointer ${
                    activePlan === index
                      ? "border-[#B89355] text-[#B89355] "
                      : "border-[#1E1E1E] hover:border-[#B89355] hover:text-[#B89355] text-[#1E1E1E]"
                  }`}
                >
                  {plan.title}
                </button>
              ))}
            </div>
          </div>

          <div className="w-[350px] md:w-[600px]">
            <div className="relative aspect-[4/3] md:w-full md:h-full overflow-hidden">
              <Image
                src={floorPlans[activePlan].image}
                alt={floorPlans[activePlan].title}
                fill
                className="object-contain bg-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
