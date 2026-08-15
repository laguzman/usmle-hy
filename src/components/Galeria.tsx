import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { gallerySections } from "@/lib/data";

export function Galeria() {
  return (
    <section className="relative pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Galería
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Momentos de la comunidad.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-100">
            Clases en vivo, simulacros y celebraciones de quienes ya lo lograron.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2">
          {gallerySections.map((section) => (
            <RevealItem key={section.key}>
              <Link
                href={`/galeria/${section.key}`}
                className="group flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <h3 className="font-display text-xl font-bold text-ink">{section.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {section.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                  {section.cta}
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
