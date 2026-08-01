import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { features, programFeatures } from "@/lib/data";

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
          <p className="mt-6 text-lg leading-relaxed text-brand-100">
            USMLE HY TUTOR® es un programa que complementa los estudios
            individualizados que cada alumno debe llevar al momento de
            prepararse para los Steps. Cubrimos contenido de Step 1 y Step 2
            CK, fortaleciendo el pensamiento crítico y la resolución de
            problemas con enfoque en temas de alto rendimiento.
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

        <Reveal delay={0.1} className="mt-16 rounded-3xl bg-brand-800 px-8 py-12 sm:px-14">
          <p className="font-display max-w-2xl text-2xl font-bold leading-snug text-white sm:text-3xl">
            USMLE HY TUTOR® es un programa académico para lograr el objetivo
            final: hacer match en una residencia hospitalaria en Estados
            Unidos.
          </p>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
              Cómo trabajamos
            </p>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2">
            {programFeatures.map((item) => (
              <RevealItem key={item}>
                <div className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white px-5 py-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-sm font-medium text-ink">{item}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
