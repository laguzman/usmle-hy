import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { features } from "@/lib/data";

export function QuienesSomos() {
  return (
    <section className="relative pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Quiénes somos
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Más no siempre es mejor.{" "}
            <span className="text-brand-500">El secreto está en la estructura.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            No necesitas mil recursos. Necesitas un plan de acción claro: saber
            qué hacer, cuándo y cómo — acompañado de gente que ya recorrió este
            camino antes que tú.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <RevealItem key={f.number}>
              <div className="group h-full rounded-3xl border border-ink/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5">
                <span className="font-display text-sm font-bold text-brand-300 transition-colors group-hover:text-brand-500">
                  {f.number}
                </span>
                <h3 className="font-display mt-4 text-xl font-bold text-ink">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {f.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-16 rounded-3xl bg-brand-900 px-8 py-12 sm:px-14">
          <p className="font-display max-w-2xl text-2xl font-bold leading-snug text-white sm:text-3xl">
            Acompañándote en cada paso desde 2018.
          </p>
          <p className="mt-4 max-w-xl text-brand-100">
            Sabemos lo difícil que es el camino. Hay buenos días y malos días.
            No podemos quitar esa presión por completo — pero sí podemos hacer
            el proceso más corto, más claro y un poco menos pesado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
