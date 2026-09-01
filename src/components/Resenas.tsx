import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import type { ResenaItem } from "@/lib/resenasStore";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-brand-500">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Resenas({ reviews }: { reviews: ResenaItem[] }) {
  return (
    <section className="relative pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Reseñas
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Historias reales. Resultados reales
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-100">
            Conoce la experiencia de estudiantes que confiaron en USMLE HY TUTOR para
            acompañarlos durante su preparación para los USMLE Steps.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <RevealItem key={`${r.name}-${i}`}>
              <div className="group flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5">
                <Stars count={r.rating} />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-muted">
                  “{r.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-ink/8 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-display text-sm font-bold text-brand-600">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">{r.name}</p>
                    {r.role && <p className="text-xs text-ink-muted">{r.role}</p>}
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
