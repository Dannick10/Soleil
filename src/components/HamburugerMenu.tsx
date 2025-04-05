"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MdClose as X } from "react-icons/md";

type navITems = {
  name: string;
  url: string;
};

const HamburgerMenu = () => {
  const navItems: navITems[] = [
    { name: "Empreendimento", url: "https://www.lavvi.com.br/empreendimentos" },
    {
      name: "imobiliárias e corretores",
      url: "https://www.lavvi.com.br/imobiliarias-e-corretores",
    },
    { name: "quem somos", url: "https://www.lavvi.com.br/quem-somos" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="flex md:hidden flex-col justify-center items-center gap-1.5 w-12 h-12 rounded-md focus:outline-none cursor-pointer"
        onClick={handleToggleMenu}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-1 bg-[#182842] rounded-full"
        ></motion.span>
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-1 bg-[#182842] rounded-full"
        ></motion.span>
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-1 bg-[#182842] rounded-full"
        ></motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={handleToggleMenu}
            ></motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-50 shadow-xl border-l-2 border-[#C9A96E]"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between p-6 border-b border-gray-100">
                  <Image
                    src="/images/logo.svg"
                    alt="Lavvi"
                    width={80}
                    height={30}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={handleToggleMenu}
                    className=" secondaryText cursor-pointer"
                    aria-label="Fechar"
                  >
                    <X className="h-10 w-10" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-6">
                  <ul className="flex flex-col space-y-2">
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.url}
                          className="flex items-center px-8 py-4 text-xl font-medium secondaryText hover:bg-gray-50 hover:text-[#C9A96E] transition-colors duration-300"
                          onClick={handleToggleMenu}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="p-6 border-t border-gray-100">
                  <Link href={"#contato"}>
                    <button className="btnPrimary w-full text-sm">
                      FALE COM CORRETOR
                    </button>
                  </Link>
                </div>

                <p className="text-center text-gray-600 text-sm mb-6">
                  © 2025 - Lavvi Empreendimentos Imobiliários S/A.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
