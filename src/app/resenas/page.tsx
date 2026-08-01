import type { Metadata } from "next";
import { Resenas } from "@/components/Resenas";
import { ReviewForm } from "@/components/ReviewForm";
import { Reveal } from "@/components/Reveal";
import { resenas } from "@/lib/data";
import { getApprovedResenas } from "@/lib/resenasStore";

export const runtime = "nodejs";
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Reseñas — USMLE HY Tutor",
  description: "Historias reales de personas que encontraron estructura donde antes había ruido.",
};

export default async function ResenasPage() {
  const approved = await getApprovedResenas();
  const reviews = [...resenas, ...approved];
  const reviewsApproved = [...approved];


  return (
    <>
      <Resenas reviews={reviewsApproved} />

      <section className="relative pb-28">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
              Comparte tu experiencia
            </p>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Deja tu reseña.
            </h2>
            <p className="mt-4 text-brand-100">
              ¿Ya tomaste uno de nuestros programas? Nos encantaría conocer tu experiencia.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 rounded-3xl border border-ink/8 bg-white p-8 sm:p-10">
            <ReviewForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
