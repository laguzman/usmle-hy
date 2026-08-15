import Link from "next/link";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand-500 py-24">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Tu preparación. Tu ritmo. Nuestro método.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-50">
            Cada estudiante vive un proceso diferente. Conoce nuestro programa y encuentra la
            preparación que mejor se adapte a tu etapa, tus objetivos y tu camino hacia los USMLE Steps.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Contáctanos
            </Link>
            <Link
              href="/programas"
              className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white"
            >
              Ver los programas
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
