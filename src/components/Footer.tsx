import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#182842] px-10 py-8 md:py-4 ">
      <div className="container flex flex-col-reverse gap-4 md:flex-row justify-between items-center mx-auto">
        <p className="text-sm text-[#f7f7f7]">
        © 2025 - Lavvi Empreendimentos Imobiliários S/A.
        </p>
        <button className="bg-[#f7f7f7] hover:bg-[#182842] hover:border-[#f7f7f7] hover:text-[#f7f7f7] secondaryText border border-[#182842] py-1 px-7 cursor-pointer tracking-wider font-semibold">
          FALE COM CORRETOR
        </button>
      </div>
    </footer>
  );
};

export default Footer;
