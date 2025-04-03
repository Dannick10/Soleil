"use client";

import { useState, useRef, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Perspectives() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [memoryIndex, setMemoryIndex] = useState(0);
  const ref = useRef(null);

  const perspectives = useMemo(
    () => [
      { title: "Perspectiva ilustrada da Fachada", image: `/images/perspective/Fachada_EF.jpg` },
      { title: "Perspectiva ilustrada do Acesso", image: `/images/perspective/Detalhe_Fachada_EF.jpg` },
      { title: "Perspectiva ilustrada do Lobby", image: `/images/perspective/Lobby_EF.jpg` },
      { title: "Perspectiva ilustrada do Salão de Festas", image: `/images/perspective/JantarDecorado.jpg` },
      { title: "Perspectiva ilustrada do Salão de Festas", image: `/images/perspective/Salao_de_festas.jpg` },
      { title: "Perspectiva ilustrada do Lounge Externo", image: `/images/perspective/Lounge_Externo.jpg` },
      { title: "Perspectiva ilustrada da Piscina Coberta com Raia de 25 m", image: `/images/perspective/Piscina_Coberta_EF.jpg` },
      { title: "Perspectiva ilustrada da Piscina Coberta com Raia de 25 m", image: `/images/perspective/Piscina_Coberta_Spa.jpg` },
      { title: "Perspectiva ilustrada da Brinquedoteca", image: `/images/perspective/Brinquedoteca.jpg` },
      { title: "Perspectiva ilustrada da Piscina Descoberta", image: `/images/perspective/Piscina_Descoberta.jpg` },
      { title: "Perspectiva ilustrada da Piscina Descoberta", image: `/images/perspective/Piscina_Descoberta.jpg` },
      { title: "Perspectiva ilustrada da Quadra de Tênis", image: `/images/perspective/Quadra_Tenis_EF.jpg` },
      { title: "Perspectiva ilustrada do Fitness", image: `/images/perspective/Fitness.jpg` },
      { title: "Perspectiva ilustrada do Fitness", image: `/images/perspective/Fitness02_EF2.jpg` },
      { title: "Perspectiva ilustrada do Living", image: `/images/perspective/Living_Decorado_EF2_v2.jpg` },
    ],
    []
  );

  const nextSlide = () => {
    setMemoryIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === perspectives.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setMemoryIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? perspectives.length - 1 : prevIndex - 1
    );
  };

  const prevIndex = currentIndex === 0 ? perspectives.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === perspectives.length - 1 ? 0 : currentIndex + 1;



  return (
    <section id="perspectivas" className="py-16">
      <div className="container mx-auto">
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
          <h2 className="text-2xl font-light text-gray-900 mb-2">
            Perspectivas
          </h2>
        </div>

        <div ref={ref} className="relative overflow-hidden">
          <div className="flex items-center justify-center">
            {/* Imagem anterior */}
            <div
              className="hidden md:block relative h-80 w-24 overflow-hidden rounded-md opacity-70"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw))",
              }}
            >
              <Image
                src={perspectives[prevIndex].image}
                alt={perspectives[prevIndex].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Imagem principal */}
            <motion.div
              key={currentIndex}
              initial={{
                opacity: 0.7,
                x: currentIndex > memoryIndex ? 100 : -100,
                rotateY: currentIndex > memoryIndex ? 30 : -30,
              }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ type: "keyframes", ease: "easeInOut" }}
              className="relative h-80 md:h-96 w-full md:w-3/4 mx-2 md:mx-4 overflow-hidden rounded-lg z-10 shadow-xl"
            >
              <Image
                src={perspectives[currentIndex].image}
                alt={perspectives[currentIndex].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority // Prioriza o carregamento
              />
            </motion.div>

            {/* Controles */}
            <div className="absolute h-80 md:h-96 w-full md:w-3/4 mx-2 md:mx-4 z-10 secondaryText">
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#f7f7f7] hover:scale-125 transition-all duration-200 p-2 rounded-full shadow-md z-10 cursor-pointer"
                aria-label="Previous slide"
              >
                <BiChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#f7f7f7] hover:scale-125 transition-all duration-200 p-2 rounded-full shadow-md z-10 cursor-pointer"
                aria-label="Next slide"
              >
                <BiChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Próxima Imagem */}
            <div
              className="hidden md:block relative h-80 w-24 overflow-hidden rounded-md opacity-70"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%)",
              }}
            >
              <Image
                src={perspectives[nextIndex].image}
                alt={perspectives[nextIndex].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm secondaryText tracking-wide">
              {perspectives[currentIndex].title}
            </p>

            <div className="flex justify-center mt-3">
              <div className="flex justify-center items-center space-x-2">
                {perspectives.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all border border-[#C9A96E] cursor-pointer duration-200 hover:scale-125 ${
                      index === currentIndex
                        ? "bg-[#C9A96E] w-4"
                        : "bg-[#EFE5D3]"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}