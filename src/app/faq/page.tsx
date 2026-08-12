import type { Metadata } from "next";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes — USMLE HY Tutor",
  description: "Respuestas a las dudas más comunes sobre el programa USMLE HY Tutor.",
};

export default function FaqPage() {
  return <Faq />;
}
