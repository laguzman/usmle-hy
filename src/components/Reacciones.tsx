import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { programas } from "@/lib/data";

export function Reacciones() {
  return (
    <section className="relative pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Reacciones
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Testimonios en video, directo de quienes ya lo lograron.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-100">
            Reacciones reales de estudiantes al enterarse de su score o al
            terminar cada programa. Un video por programa — elige uno para
            ver el detalle completo.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programas.map((p) => (
            <RevealItem key={p.slug}>
              <Link href={`/programas/${p.slug}`} className="group block">
                <VideoPlaceholder title={p.title} color={p.color} />
                <p className="font-display mt-4 text-sm font-bold text-white group-hover:text-brand-300">
                  {p.title}
                </p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
