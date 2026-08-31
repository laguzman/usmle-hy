import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programas } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

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
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-all hover:gap-2.5 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Todos los programas
          </Link>

          <h1 className="font-display mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {programa.title}
          </h1>

          {programa.videoId && (
            <div className="mt-8 max-w-2xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${programa.videoId}`}
                  title={programa.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            {programa.description}
          </p>

          {programa.note && (
            <p className="mt-4 max-w-2xl rounded-2xl border border-brand-300/30 bg-brand-800 px-5 py-4 text-sm leading-relaxed text-brand-100">
              <span className="font-semibold text-brand-300">Importante: </span>
              {programa.note}
            </p>
          )}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={`/contacto?programa=${programa.slug}`}
              className="rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brand-500/40"
            >
              Contáctanos sobre este programa
            </Link>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-4 sm:grid-cols-3">
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

        {programa.benefits && programa.benefits.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Qué incluye.
              </h2>
            </Reveal>

            <RevealGroup className="mt-10 grid gap-3 sm:grid-cols-2">
              {programa.benefits.map((benefit) => (
                <RevealItem key={benefit}>
                  <div className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white px-5 py-4">
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: programa.color }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-sm font-medium text-ink">{benefit}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        )}

        <Reveal
          delay={0.1}
          className="mt-20 flex flex-col items-start gap-6 rounded-3xl bg-brand-800 px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-14"
        >
          <div>
            <p className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              ¿Te interesa este programa?
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
