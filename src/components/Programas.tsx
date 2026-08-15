import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { programas } from "@/lib/data";

export function Programas() {
  return (
    <section className="relative pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Nuestros programas
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Una preparación para cada etapa de tu camino
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-100">
            Cada estudiante tiene necesidades y objetivos diferentes. Explora nuestros
            programas y encuentra la modalidad de preparación que mejor se adapte a tu
            etapa, tu ritmo y tus objetivos para los USMLE Steps.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programas.map((p) => (
            <RevealItem key={p.slug}>
              <Link
                href={`/programas/${p.slug}`}
                className="group relative flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
              >
                {p.highlight && (
                  <span className="absolute right-6 top-6 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-600">
                    Premium
                  </span>
                )}
                <h3 className="font-display text-lg font-bold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {p.tagline}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                  Ver programa
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
