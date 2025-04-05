"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ContactFormModal from "../ContactFormModal";

type ModalContextType = {
  onChangeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const onChangeModal = () => {
    setIsContactModalOpen((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ onChangeModal }}>
      {children}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onChangeModal={onChangeModal}
      />
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal deve ser usado dentro do ModalProvider");
  }
  return context;
};
