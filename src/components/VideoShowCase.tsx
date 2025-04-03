"use client";
import { BiStar } from "react-icons/bi";
import YouTubePlayer from "./VideoPlayer";

const VideoShowcase = () => {
  return (
    <section className="mt-10 bg-[#0F1E45] text-white relative">
      <div className="container max-w-[1100px] mx-auto py-4 px-4">
        {/*fundo do titulo*/}
        <div className="bg-[#f7f7f7] rounded-br-md w-[85%] md:w-1/2 h-20 absolute top-0 left-0">
          <div className="bg-[#f7f7f7] w-2 h-1/2 absolute top-0 -right-2"></div>
          <div className="bg-[#0F1E45] rounded-tl-lg w-2 h-1/2 absolute top-0 -right-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8">
          <div className="relative space-y-4">
            {/*titulo*/}
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
            <h2 className="text-xl font-light secondaryText pb-6 tracking-[2px]">
              SOLEIL BY BOCA DO LOBO
            </h2>

            {/*descrição*/}
            <div className="space-y-3 text-xs leading-relaxed text-[#f7f7f7]">
              <div className="text-base leading-relaxed primaryText pb-4 relative">
                <p className="drop-shadow-[0_0_3px_rgba(255,215,0,0.3)]">
                  COMO UM FENÔMENO QUE SE REVELA EM MOMENTOS RAROS, NASCE UMA
                  NOVA ESTRELA NA CHÁCARA KLABIN
                </p>
                <p className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse transition-all duration-500">
                  COMO UM FENÔMENO QUE SE REVELA EM MOMENTOS RAROS, NASCE UMA
                  NOVA ESTRELA NA CHÁCARA KLABIN
                </p>
              </div>
              <p>
                O Sol é o símbolo de luz, calor e energia, marcando presença nos
                momentos mais felizes e significativos de nossas vidas.
              </p>
              <p>
                Inspirada por essa força vital, que irradia bem-estar e ilumina
                o cotidiano, a Lavvi apresenta Soleil by Boca do Lobo.
              </p>
              <p>
                Um projeto que une de forma perfeita o luxo, a segurança e o
                lazer para que você possa desfrutar cada instante do seu dia com
                tranquilidade.
              </p>
            </div>

            <div className="py-4">
              <button className="btnSecondary border-white hover:bg-white hover:text-[#182842]">
                SAIBA MAIS
              </button>
            </div>
          </div>

          {/*VIDEO PLAYER*/}
          <YouTubePlayer videoId="0A_kmaI0Aas" />
        </div>
      </div>
    </section>
  );
}

export default VideoShowcase
