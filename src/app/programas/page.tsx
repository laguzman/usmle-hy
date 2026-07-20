import type { Metadata } from "next";
import { Programas } from "@/components/Programas";

export const metadata: Metadata = {
  title: "Programas — USMLE HY Tutor",
  description: "Un programa para cada etapa de tu camino.",
};

export default function ProgramasPage() {
  return <Programas />;
}
