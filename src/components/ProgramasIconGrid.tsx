import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { ProgramIcon, type ProgramIconKey } from "./ProgramIcon";
import { programas } from "@/lib/data";

const icons: Record<string, ProgramIconKey> = {
  "clases-grupales-step1-ck-step3": "group",
  "clases-grupales-step2-ck": "stethoscope",
  "test-taking-strategies-step1": "checklist",
  "tts-step2-ck-sapphire": "diamond",
  "stamina-drills": "run",
  "snap-drills": "bolt",
  "drills-privados": "target",
  meteorito: "meteor",
  "consultoria-1-1": "chat",
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

        <RevealGroup className="mt-16 grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
          {programas.map((p) => (
            <RevealItem key={p.slug}>
              <Link href={`/programas/${p.slug}`} className="group flex flex-col items-center text-center">
                <span
                  className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-36 sm:w-36"
                  style={{ backgroundColor: p.color, boxShadow: `0 16px 32px -10px ${p.color}90` }}
                >
                  <ProgramIcon icon={icons[p.slug]} className="h-12 w-12 sm:h-16 sm:w-16" />
                </span>
                <span
                  className="mt-2 h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
                <span
                  className="mt-2 h-7 border-l-2 border-dotted"
                  style={{ borderColor: p.color }}
                />
                <span
                  className="flex min-h-[3.75rem] w-full max-w-[13rem] items-center justify-center rounded-2xl px-4 py-3 text-sm font-bold uppercase leading-tight tracking-wide text-white transition-transform duration-300 group-hover:scale-105 sm:text-base"
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
