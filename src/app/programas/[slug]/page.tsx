import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programas } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { ProgramIcon } from "@/components/ProgramIcon";

export function generateStaticParams() {
  return programas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const programa = programas.find((p) => p.slug === slug);
  if (!programa) return {};
  return {
    title: `${programa.title} — USMLE HY Tutor`,
    description: programa.tagline,
  };
}

export default async function ProgramaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programa = programas.find((p) => p.slug === slug);

  if (!programa) notFound();

  return (
    <section className="relative pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Link
            href="/programas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all hover:gap-2.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Todos los programas
          </Link>

          <span
            className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: programa.color }}
          >
            <ProgramIcon icon={programa.icon} className="h-6 w-6" />
          </span>
          <h1 className="font-display mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {programa.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {programa.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={`/contacto?programa=${programa.slug}`}
              className="rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brand-500/40"
            >
              Contáctanos sobre este programa
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <VideoPlaceholder title={programa.title} color={programa.color} />
        </Reveal>

        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-3">
          {programa.details.map((d) => (
            <RevealItem key={d.label}>
              <div className="h-full rounded-2xl border border-ink/8 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {d.label}
                </p>
                <p className="font-display mt-2 text-lg font-bold text-ink">{d.value}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              Cómo funciona
            </p>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Paso a paso.
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 space-y-4">
            {programa.steps.map((step, i) => (
              <RevealItem key={step.title}>
                <div className="flex gap-6 rounded-3xl border border-ink/8 bg-white p-8">
                  <span className="font-display shrink-0 text-2xl font-extrabold text-brand-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal
          delay={0.1}
          className="mt-20 flex flex-col items-start gap-6 rounded-3xl bg-brand-900 px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-14"
        >
          <div>
            <p className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              ¿Te interesa este programa?
            </p>
            <p className="mt-3 max-w-lg text-brand-100">
              Cuéntanos tu situación y te contactamos para ver si encajas en este programa.
            </p>
          </div>
          <Link
            href={`/contacto?programa=${programa.slug}`}
            className="shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Contáctanos
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
