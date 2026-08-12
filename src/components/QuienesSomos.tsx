import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { quienesSomosText, quienesSomosQuote, programFeatures } from "@/lib/data";

export function QuienesSomos() {
  return (
    <section className="relative pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
          <Reveal className="order-1 lg:order-none lg:col-start-1 lg:row-start-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
              Quiénes somos
            </p>
            <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Conoce el examen.{" "}
              <span className="text-brand-300">Domina su estructura.</span>
            </h2>
          </Reveal>

          <Reveal
            delay={0.05}
            className="order-2 flex flex-col items-center lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:items-center lg:self-center xl:items-end xl:self-center "
          >
            {/* Circular photo — mobile/tablet only */}
            <Image
              src="/brand/ceo.png"
              alt="Kevin Salazar Rikeros"
              width={936}
              height={936}
              priority
              className="h-32 w-32 rounded-full object-cover ring-2 ring-white/15 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:hidden"
            />
            {/* Full cutout photo — large screens only */}
            <Image
              src="/brand/ceo_2.png"
              alt="Kevin Salazar Rikeros"
              width={1545}
              height={2000}
              priority
              className="hidden lg:block lg:h-[26rem] lg:w-auto xl:h-[32rem]"
            />
            <div className="mt-4 text-center lg:text-right">
              <p className="font-display text-lg font-bold text-white">Kevin Salazar Rikeros</p>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">CEO</p>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="order-3 lg:order-none lg:col-start-1 lg:row-start-2 lg:self-start"
          >
            <p className="text-lg leading-relaxed text-brand-100">{quienesSomosText[0]}</p>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 max-w-3xl space-y-6">
          {quienesSomosText.slice(1, 3).map((paragraph, i) => (
            <RevealItem key={i}>
              <p className="text-lg leading-relaxed text-brand-100">{paragraph}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-12 max-w-3xl rounded-3xl bg-brand-800 px-8 py-10 sm:px-12">
          <p className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
            {quienesSomosQuote}
          </p>
        </Reveal>

        <RevealGroup className="mt-12 max-w-3xl space-y-6">
          {quienesSomosText.slice(3).map((paragraph, i) => (
            <RevealItem key={i}>
              <p className="text-lg leading-relaxed text-brand-100">{paragraph}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
              Cómo trabajamos
            </p>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2">
            {programFeatures.map((item) => (
              <RevealItem key={item}>
                <div className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white px-5 py-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-sm font-medium text-ink">{item}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
