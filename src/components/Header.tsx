import { philosopher, playfair } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className={ `fixed top-0 left-0 right-0 z-50 bg-[#f7f7f7] ${playfair.className}`}>
      <div className="container max-w-[1100px] px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Lavvi"
                width={80}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="flex items-center">
            <div className={`hidden md:flex items-center mr-6 gap-4`}>
              <Image
                src={"/icones/phone.svg"}
                alt="telefone"
                width={18}
                height={18}
                className="h-8 w-auto"
              />
              <span className="secondaryText text-sm tracking-widest font-semibold">
                Atendimento (SAC) 11 5242-1410
              </span>
            </div>

            <button className="hidden md:block bg-[#182842] text-white hover:bg-[#f7f7f7] border border-[#182842] hover:text-[#182842] py-1 px-7 cursor-pointer tracking-wider">
              FALE COM CORRETOR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
