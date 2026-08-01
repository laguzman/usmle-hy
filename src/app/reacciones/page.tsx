import type { Metadata } from "next";
import { Reacciones } from "@/components/Reacciones";

export const metadata: Metadata = {
  title: "Reacciones — USMLE HY Tutor",
  description: "Testimonios en video, directo de quienes ya lo lograron.",
};

export default function ReaccionesPage() {
  return <Reacciones />;
}
