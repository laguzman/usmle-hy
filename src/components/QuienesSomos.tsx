import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { quienesSomosText, quienesSomosQuote, programFeatures } from "@/lib/data";

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

        <RevealGroup className="mt-10 max-w-3xl space-y-6">
          {quienesSomosText.slice(0, 3).map((paragraph, i) => (
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

        <RevealGroup className="mt-12 max-w-3xl space-y-6">
          {quienesSomosText.slice(3).map((paragraph, i) => (
            <RevealItem key={i}>
              <p className="text-lg leading-relaxed text-brand-100">{paragraph}</p>
            </RevealItem>
          ))}
        </RevealGroup>

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
