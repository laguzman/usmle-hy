import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

          <Image
            src={programa.badge}
            alt=""
            width={224}
            height={224}
            className="mt-8 h-24 w-24 rounded-full"
          />
          <h1 className="font-display mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {programa.title}
          </h1>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={`/contacto?programa=${programa.slug}`}
              className="rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brand-500/40"
            >
              Contáctanos sobre este programa
            </Link>
          </div>
        </Reveal>

        {programa.slides.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
                Detalles del programa
              </p>

            </Reveal>

            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
              {programa.slides.map((src, i) => (
                <RevealItem key={src}>
                  <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
                    <Image
                      src={src}
                      alt={`${programa.title} — detalle ${i + 1}`}
                      width={1688}
                      height={1688}
                      className="h-auto w-full"
                    />
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
