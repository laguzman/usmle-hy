import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const tiles = [
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
];

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  );
}

export function Galeria() {
  return (
    <section className="relative pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Galería
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Momentos de la comunidad.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Clases en vivo, simulacros y celebraciones de quienes ya lo lograron.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 columns-2 gap-4 sm:columns-3">
          {tiles.map((aspect, i) => (
            <RevealItem key={i} className="mb-4 break-inside-avoid">
              <div
                className={`group relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-2xl bg-brand-50 transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="bg-grid absolute inset-0 opacity-40" />
                <CameraIcon className="relative h-8 w-8 text-brand-300 transition-colors group-hover:text-brand-400" />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
