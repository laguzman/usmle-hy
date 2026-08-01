import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { programas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contáctanos — USMLE HY Tutor",
  description: "Cuéntanos tu situación y el programa que te interesa. Te contactamos pronto.",
};

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const programaParam = typeof params.programa === "string" ? params.programa : undefined;
  const initialPrograma = programas.some((p) => p.slug === programaParam)
    ? programaParam
    : undefined;

  return (
    <section className="relative pt-40 pb-28">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Contáctanos
          </p>
          <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Hablemos de tu siguiente paso.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-100">
            Cuéntanos un poco sobre ti y el programa que te interesa. Revisamos
            cada mensaje y te contactamos para ver si encajas.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 rounded-3xl border border-ink/8 bg-white p-8 sm:p-10">
          <ContactForm initialPrograma={initialPrograma} />
        </Reveal>
      </div>
    </section>
  );
}
