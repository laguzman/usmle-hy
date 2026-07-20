import type { Metadata } from "next";
import { Galeria } from "@/components/Galeria";

export const metadata: Metadata = {
  title: "Galería — USMLE HY Tutor",
  description: "Momentos de la comunidad: clases en vivo, simulacros y celebraciones.",
};

export default function GaleriaPage() {
  return <Galeria />;
}
