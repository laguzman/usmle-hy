import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import type { YoutubeVideo } from "@/lib/youtube";

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export function Reacciones({ videos }: { videos: YoutubeVideo[] }) {
  return (
    <section className="relative pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Videos
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            El momento que lo cambia todo.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-100">
            Conoce las experiencias, resultados y reacciones reales de estudiantes de
            USMLE HY TUTOR®️ durante su camino por los USMLE Steps.
          </p>
        </Reveal>

        {videos.length === 0 ? (
          <p className="mt-16 text-brand-100">
            No pudimos cargar los videos en este momento. Intenta de nuevo más tarde.
          </p>
        ) : (
          <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <RevealItem key={video.id}>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-brand-800">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="font-display mt-4 text-sm font-bold text-white group-hover:text-brand-300">
                    {video.title}
                  </p>
                  {video.description && (
                    <p className="mt-2 text-sm leading-relaxed text-brand-100">
                      {truncate(video.description, 160)}
                    </p>
                  )}
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </div>
    </section>
  );
}
