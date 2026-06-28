import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS server secrets missing");
      throw new Error("Email service not configured");
    }

    const body: Record<string, unknown> = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: "vajrapuraghavendra2006@gmail.com",
        reply_to: data.email,
      },
    };
    if (privateKey) body.accessToken = privateKey;

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("EmailJS send failed:", res.status, text);
      throw new Error("Could not send message");
    }

    return { ok: true };
  });
