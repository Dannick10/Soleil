"use client";
import { BiStar } from "react-icons/bi";
import YouTubePlayer from "./VideoPlayer";
import Link from "next/link";

const VideoShowcase = () => {
  return (
    <section className="mt-10 bg-[#0F1E45] text-white relative">
      <div className="container mx-auto py-4 px-4  max-w-[1600px] lg:px-[160px]">
        {/*fundo do titulo*/}
        <div className="bg-[#f7f7f7] rounded-br-md w-[95%] md:w-1/2 h-20 absolute top-0 left-0">
          <div className="bg-[#f7f7f7] w-2 h-1/2 absolute top-0 -right-2"></div>
          <div className="bg-[#0F1E45] rounded-tl-lg w-2 h-1/2 absolute top-0 -right-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8">
          <div className="relative space-y-4">
              {/*titulo*/}
            <div className="relative xl:-top-2">
              <div className="absolute flex justify-center items-center gap-4 -top-8 left-0">
                <BiStar className="primaryText" />
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
              <h2 className="text-2xl font-bold secondaryText pb-6 tracking-[2px]">
                SOLEIL BY BOCA DO LOBO
              </h2>
            </div>

            {/*descrição*/}
            <div className="text-[#EFE5D3] text-base lg:max-w-[500px]">
              <div className="text-base primaryText pb-4 relative drop-shadow-md space-y-3">
                <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] text-[#C9A96E]">
                  COMO UM FENÔMENO QUE SE REVELA EM MOMENTOS RAROS, NASCE UMA
                  NOVA ESTRELA NA CHÁCARA KLABIN
                </p>
                <p className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96E] to-[#d1b88a] animate-pulse transition-all duration-500">
                  COMO UM FENÔMENO QUE SE REVELA EM MOMENTOS RAROS, NASCE UMA
                  NOVA ESTRELA NA CHÁCARA KLABIN
                </p>
              </div>
              <div
                className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)]
 space-y-3 "
              >
                <p>
                  O Sol é o símbolo de luz, calor e energia, marcando presença
                  nos momentos mais felizes e significativos de nossas vidas.
                </p>
                <p>
                  Inspirada por essa força vital, que irradia bem-estar e
                  ilumina o cotidiano, a Lavvi apresenta Soleil by Boca do Lobo.
                </p>
                <p>
                  Um projeto que une de forma perfeita o luxo, a segurança e o
                  lazer para que você possa desfrutar cada instante do seu dia
                  com tranquilidade.
                </p>
              </div>
            </div>

            <div className="py-4">
              <Link href="https://relacionamento.lavvi.com.br/acesso?_gl=1%2aru8mrx%2a_gcl_aw%2aR0NMLjE3NDM1MzExMTEuQ2owS0NRanduYTZfQmhDYkFSSXNBTElkMlowcmloMHU2eTFIcEtJeUowWl93d1VTY0dHME05cy12OHdlVUVhSl9QYzU2QW5UOGg1Y0lGOGFBcjlNRUFMd193Y0I.%2a_gcl_au%2aMjAzMzcyOTAwLjE3NDMyNjY1MTc.">
                <button
                  className={
                    "btnSecondary border-white hover:bg-white hover:text-[#182842]"
                  }
                >
                  SAIBA MAIS
                </button>
              </Link>
            </div>
          </div>

          {/*VIDEO PLAYER*/}
          <YouTubePlayer videoId="0A_kmaI0Aas" />
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
