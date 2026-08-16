import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { quienesSomosText, quienesSomosQuote, quienesSomosCeo } from "@/lib/data";

export function QuienesSomos() {
  return (
    <section className="relative pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Quiénes somos
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Conoce el examen.{" "}
            <span className="text-brand-300">Domina su estructura.</span>
          </h2>
        </Reveal>

        <RevealGroup className="mt-8 max-w-3xl space-y-6">
          {quienesSomosText.map((paragraph, i) => (
            <RevealItem key={i}>
              <p className="text-lg leading-relaxed text-brand-100">{paragraph}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-12 max-w-3xl rounded-3xl bg-brand-800 px-8 py-10 sm:px-12">
          <p className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
            {quienesSomosQuote}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 flex flex-col items-center text-center">
          <Image
            src="/brand/ceo_2.png"
            alt={quienesSomosCeo.name}
            width={1545}
            height={2000}
            priority
            className="h-64 w-auto sm:h-72 md:h-80"
          />
          <p className="font-display mt-6 text-xl font-bold text-white">{quienesSomosCeo.name}</p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-300">
            {quienesSomosCeo.role}
          </p>
        </Reveal>

        <RevealGroup className="mx-auto mt-10 max-w-3xl space-y-6">
          {quienesSomosCeo.bio.map((paragraph, i) => (
            <RevealItem key={i}>
              <p className="text-lg leading-relaxed text-brand-100">{paragraph}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl border-l-2 border-brand-300 pl-6">
          <p className="text-xl italic leading-snug text-white">“{quienesSomosCeo.quote}”</p>
          <a
            href={quienesSomosCeo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
          >
            Ver perfil de LinkedIn
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl">
          <Link
            href="/galeria/equipo"
            className="group flex flex-col rounded-3xl border border-ink/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 sm:p-10"
          >
            <h3 className="font-display text-xl font-bold text-ink">Descubre a nuestro equipo</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Conoce a las personas que forman parte de USMLE HY TUTOR® y acompañan a
              nuestros estudiantes en cada etapa de su preparación.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
              Conocer al equipo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
