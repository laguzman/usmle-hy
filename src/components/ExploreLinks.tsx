import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const links = [
  {
    href: "/quienes-somos",
    title: "Quiénes Somos",
    description:
      "Conoce el método detrás de los resultados: qué hacemos distinto y por qué funciona.",
  },
  {
    href: "/programas",
    title: "Programas",
    description:
      "Un programa para cada etapa de tu camino, con video, pasos y todo el detalle.",
  },
  {
    href: "/resenas",
    title: "Reseñas",
    description:
      "Historias reales de personas que encontraron estructura donde antes había ruido.",
  },
  {
    href: "/reacciones",
    title: "Videos",
    description:
      "Reacciones reales de estudiantes al enterarse de su score, directo de nuestro canal.",
  },
  {
    href: "/galeria",
    title: "Galeria",
    description:
      "Momentos de la comunidad: clases en vivo, simulacros y celebraciones.",
  },
  {
    href: "/faq",
    title: "FAQ",
    description:
      "Respuestas a las dudas más comunes sobre el programa.",
  },
];

export function ExploreLinks() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Explora
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Todo lo que necesitas saber.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <RevealItem key={l.href}>
              <Link
                href={l.href}
                className="group flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <h3 className="font-display text-xl font-bold text-ink">{l.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {l.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                  Ver más
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
