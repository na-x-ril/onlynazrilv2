"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function transmitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();

  if (website) {
    return { status: "error", message: "Transmission blocked." };
  }

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "All fields required. Fill every input before transmitting.",
    };
  }

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Invalid comms link. Check the email." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!apiKey || !to) {
    return {
      status: "error",
      message: "Mail relay not configured. Try again later.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Onlynazril Portfolio <onboarding@resend.dev>",
      to: [to],
      subject: `[PORTFOLIO] Transmission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      return { status: "error", message: "Transmission failed on the relay." };
    }

    return { status: "success", message: "Transmission received. Talk soon." };
  } catch {
    return { status: "error", message: "Transmission failed on the relay." };
  }
}
