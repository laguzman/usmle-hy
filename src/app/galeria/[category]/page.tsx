import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { gallerySections, teamMembers } from "@/lib/data";
import { getGalleryImages } from "@/lib/gallery";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { TeamGrid } from "@/components/TeamGrid";

export function generateStaticParams() {
  return gallerySections.map((s) => ({ category: s.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const section = gallerySections.find((s) => s.key === category);
  if (!section) return {};
  return {
    title: `${section.title} — Galería — USMLE HY Tutor`,
    description: section.description,
  };
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  );
}

const placeholderAspects = [
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
];

export default async function GaleriaCategoriaPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const section = gallerySections.find((s) => s.key === category);

  if (!section) notFound();

  const images = getGalleryImages(category);

  return (
    <section className="relative pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Link
            href="/galeria"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-all hover:gap-2.5 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Galería
          </Link>

          <h1 className="font-display mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {section.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-100">
            {section.description}
          </p>
        </Reveal>

        {category === "equipo" ? (
          teamMembers.length > 0 ? (
            <TeamGrid members={teamMembers} />
          ) : (
            <p className="mt-12 text-brand-100">Todavía no hay miembros del equipo agregados.</p>
          )
        ) : images.length === 1 ? (
          <Reveal delay={0.05} className="mt-12">
            <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl bg-brand-50">
              <Image
                src={images[0]}
                alt={section.title}
                width={1200}
                height={1200}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        ) : images.length > 0 ? (
          <RevealGroup className="mt-12 columns-2 gap-4 sm:columns-3" stagger={0.02}>
            {images.map((src) => (
              <RevealItem key={src} className="mb-4 break-inside-avoid">
                <div className="relative w-full overflow-hidden rounded-2xl bg-brand-50 transition-transform duration-300 hover:-translate-y-1">
                  <Image
                    src={src}
                    alt={section.title}
                    width={600}
                    height={600}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        ) : (
          <>
            <p className="mt-12 text-brand-100">Todavía no hay fotos en esta sección.</p>
            <RevealGroup className="mt-8 columns-2 gap-4 sm:columns-3">
              {placeholderAspects.map((aspect, i) => (
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
          </>
        )}
      </div>
    </section>
  );
}
