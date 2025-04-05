import emailjs from "@emailjs/browser"

type ContactFormData = {
  name: string
  phone: string
  email: string
  message?: string
}

export async function sendContactEmail(formData: ContactFormData): Promise<void> {
  try {
    const now = new Date()
    const formattedTime = now.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      time: formattedTime,
      message: formData.message || "Solicitação de contato via site - Soleil by Boca do Lobo",
    }


    const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams, 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )

    if (response.status !== 200) {
      throw new Error("Failed to send email")
    }

    console.log("Email sent successfully!", response)
    return
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

