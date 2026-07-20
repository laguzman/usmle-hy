import type { Metadata } from "next";
import { Resenas } from "@/components/Resenas";

export const metadata: Metadata = {
  title: "Reseñas — USMLE HY Tutor",
  description: "Historias reales de personas que encontraron estructura donde antes había ruido.",
};

export default function ResenasPage() {
  return <Resenas />;
}
