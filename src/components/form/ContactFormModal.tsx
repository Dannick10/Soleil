"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdClose as X,
  MdSend as Send,
} from "react-icons/md";
import { sendContactEmail } from "@/services/email-services";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/components/form/schema/schema";

type contactFormModalProps = {
    isOpen: boolean,
    onChangeModal: () => void
}

const ContactFormModal = ({isOpen, onChangeModal}: contactFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      reset();
      setSubmitStatus("idle");
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await sendContactEmail(data);
      setSubmitStatus("success");
      reset();
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={onChangeModal}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg shadow-xl z-50 overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative px-6 py-4 border-b border-gray-100">
                <button
                  onClick={onChangeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  aria-label="Fechar"
                >
                  <X className="h-6 w-6" />
                </button>
                <h2 className="text-2xl font-light text-[#182842]">
                  Entre em contato
                </h2>
              </div>

              {/* Content */}
              <div className="p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label
                      htmlFor="modal-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nome
                    </label>
                    <input
                      id="modal-name"
                      {...register("name")}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A96E] focus:border-transparent ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="modal-phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Telefone
                    </label>
                    <input
                      id="modal-phone"
                      {...register("phone")}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A96E] focus:border-transparent ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      E-mail
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      {...register("email")}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A96E] focus:border-transparent ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="modal-message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensagem (opcional)
                    </label>
                    <textarea
                      id="modal-message"
                      {...register("message")}
                      rows={4}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A96E] focus:border-transparent resize-none ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Digite sua mensagem aqui..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-3 bg-green-50 text-green-700 rounded-md">
                      Mensagem enviada com sucesso! Entraremos em contato em
                      breve.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-md">
                      Ocorreu um erro ao enviar sua mensagem. Por favor, tente
                      novamente.
                    </div>
                  )}

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btnPrimary flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="inline-block h-4 w-4 border-2 border-white/20 border-t-white/80 rounded-full animate-spin"></span>
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactFormModal;
