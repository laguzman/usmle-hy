import Link from "next/link";
import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { programas } from "@/lib/data";

export function Programas() {
  return (
    <section className="relative bg-brand-50/60 pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Nuestros programas · Cupos limitados
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Un programa para cada etapa de tu camino.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Trabajamos por aplicación: no aceptamos a todos, porque cada lugar
            importa y cada acompañamiento debe ser real. Elige un programa
            para ver el detalle completo: pasos, formato y video.
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
                <Image
                  src={p.badge}
                  alt=""
                  width={112}
                  height={112}
                  className="h-14 w-14 rounded-full transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="font-display mt-5 text-lg font-bold leading-snug text-ink">
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
