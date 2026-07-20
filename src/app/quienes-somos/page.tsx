import type { Metadata } from "next";
import { QuienesSomos } from "@/components/QuienesSomos";

export const metadata: Metadata = {
  title: "Quiénes Somos — USMLE HY Tutor",
  description:
    "Conoce el método detrás de los resultados: qué hacemos distinto y por qué funciona.",
};

export default function QuienesSomosPage() {
  return <QuienesSomos />;
}
