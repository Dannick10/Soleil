import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhone } from "react-icons/fi";
import HamburgerMenu from "./HamburugerMenu";

const Header = () => {

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f7f7f7]`}
    >
      <div className="container px-4 mx-auto max-w-[1600px] lg:px-[160px]">
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

            <div
              className={`hidden md:flex items-center mr-4 gap-4 secondaryText text-xl`}
            >
              <FiPhone />
              <span className="secondaryText text-sm tracking-[3px] font-semibold">
                Atendimento (SAC) 11 5242-1410
              </span>
            </div>

            <button className="hidden md:block bg-[#182842] text-white hover:bg-[#f7f7f7] border border-[#182842] hover:text-[#182842] py-1 px-7 cursor-pointer tracking-wider">
              FALE COM CORRETOR
            </button>
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
