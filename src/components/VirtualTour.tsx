"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { BiPlay, BiX } from "react-icons/bi";

const VirtualTour = () => {
  const [iframeActive, setIframeActive] = useState(false);

  const activateTour = () => {
    setIframeActive(true);
  };

  const deactivateTour = () => {
    setIframeActive(false);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/*titulo*/}
        <div className="text-center mb-6">
          <p className="text-sm text-[#182842] font-bold tracking-[5px] mb-1">
            Navegar em 360º
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
          <h2 className="secondaryText text-2xl md:text-4xl font-bold tracking-widest">
            Faça um Tour
          </h2>
        </div>

        <div className="relative aspect-video md:aspect-[16/7] overflow-hidden bg-[#bc9456] rounded-md">
          {!iframeActive ? (
            <>
              <div className="absolute inset-0">
                <Image
                  src="/images/design/foot.webp"
                  alt="Tour Virtual Preview"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={activateTour}
                  className="flex items-center gap-2 border border-[#182842] bg-[#182842] cursor-pointer text-white py-3 px-8 rounded-md hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-200 shadow-lg"
                >
                  <BiPlay className="h-5 w-5" />
                  <span>INICIAR TOUR</span>
                </button>
              </div>
            </>
          ) : (
            <motion.div 
            key={"tour"}
            initial={{opacity: 0, }}
            transition={{ease: "linear", type: "spring"}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-60">
              <div className="w-[80%] h-[80%]">
                <iframe
                  src="https://tour.lavvi.com.br/soleil/?_gl=1*2aa1uy*_gcl_aw*R0NMLjE3NDMyOTU0ODEuQ2owS0NRand0SjZfQmhEV0FSSXNBR2FubUtjLTZaNFhvTTFyM1o3aTJ4cG14OFRzb1htTXNyb0lVLUlDVVBqbnk4cTdvQThuTjRYNnlob2FBbktXRUFMd193Y0I.*_gcl_au*MjAzMzcyOTAwLjE3NDMyNjY1MTc."
                  className="w-full h-full"
                  allowFullScreen
                  ></iframe>
                <button
                  onClick={deactivateTour}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[#182842] p-2 rounded-full shadow-md transition-colors duration-200 hover:scale-110 cursor-pointer"
                  aria-label="Fechar tour virtual"
                  >
                  <BiX className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 text-[#182842] py-2 px-4 rounded-md text-sm shadow-md w-full md:w-auto">
                  Tour ativo - clique no X para continuar navegando no site
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      </section>
    );
};

export default VirtualTour;
