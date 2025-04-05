import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome deve ter pelo menos 3 caracteres" })
    .max(100, { message: "Nome não pode exceder 100 caracteres" }),
  email: z
    .string()
    .email({ message: "Email inválido" })
    .min(5, { message: "Email deve ter pelo menos 5 caracteres" })
    .max(100, { message: "Email não pode exceder 100 caracteres" }),
  phone: z
    .string()
    .min(10, { message: "Telefone deve ter pelo menos 10 dígitos" })
    .max(15, { message: "Telefone não pode exceder 15 dígitos" })
    .regex(/^[0-9()-\s+]+$/, { message: "Telefone deve conter apenas números, parênteses, traços e espaços" }),
  message: z.string().max(500, { message: "Mensagem não pode exceder 500 caracteres" }).optional(),
})


export type ContactFormData = z.infer<typeof contactFormSchema>

