import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { ProgramIcon, type ProgramIconKey } from "./ProgramIcon";
import { programas } from "@/lib/data";

const icons: Record<string, ProgramIconKey> = {
  "clases-grupales-step1-ck-step3": "group",
  "clases-grupales-step2-ck": "group",
  "test-taking-strategies-step1": "checklist",
  "tts-step2-ck-sapphire": "diamond",
  "stamina-drills": "run",
  "snap-drills": "bolt",
  "drills-privados": "lock",
  meteorito: "meteor",
};

export function ProgramasIconGrid() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Nuestros programas
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Un programa para cada etapa de tu camino.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {programas.map((p) => (
            <RevealItem key={p.slug}>
              <Link href={`/programas/${p.slug}`} className="group flex flex-col items-center text-center">
                <span
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24"
                  style={{ backgroundColor: p.color, boxShadow: `0 12px 24px -8px ${p.color}80` }}
                >
                  <ProgramIcon icon={icons[p.slug]} className="h-9 w-9 sm:h-10 sm:w-10" />
                </span>
                <span
                  className="mt-1.5 h-2 w-2 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
                <span
                  className="mt-1.5 h-6 border-l-2 border-dotted"
                  style={{ borderColor: p.color }}
                />
                <span
                  className="flex min-h-[3.25rem] w-full max-w-[11rem] items-center justify-center rounded-xl px-3 py-2 text-xs font-bold uppercase leading-tight tracking-wide text-white transition-transform duration-300 group-hover:scale-105 sm:text-sm"
                  style={{ backgroundColor: p.color }}
                >
                  {p.title}
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
