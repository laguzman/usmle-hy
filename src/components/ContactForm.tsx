"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { programas, countries } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ initialPrograma }: { initialPrograma?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = {
      nombre: String(form.get("nombre") ?? ""),
      email: String(form.get("email") ?? ""),
      telefono: String(form.get("telefono") ?? ""),
      pais: String(form.get("pais") ?? ""),
      programa: String(form.get("programa") ?? ""),
      mensaje: String(form.get("mensaje") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Algo salió mal. Intenta de nuevo.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Algo salió mal. Intenta de nuevo.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-brand-100 bg-brand-50 p-10 text-center"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h2 className="font-display mt-6 text-2xl font-bold text-ink">¡Mensaje enviado!</h2>
        <p className="mt-3 text-ink-muted">
          Gracias por escribirnos. Vamos a revisar tu mensaje y te contactaremos pronto.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="text-sm font-semibold text-ink">
            Nombre completo
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400"
            placeholder="tu@correo.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telefono" className="text-sm font-semibold text-ink">
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400"
            placeholder="+52 000 000 0000"
          />
        </div>
        <div>
          <label htmlFor="pais" className="text-sm font-semibold text-ink">
            País
          </label>
          <select
            id="pais"
            name="pais"
            required
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400"
          >
            <option value="" disabled>
              Selecciona tu país
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="programa" className="text-sm font-semibold text-ink">
          Programa de interés
        </label>
        <select
          id="programa"
          name="programa"
          defaultValue={initialPrograma ?? ""}
          className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400"
        >
          <option value="">No estoy seguro todavía</option>
          {programas.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="text-sm font-semibold text-ink">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400"
          placeholder="Cuéntanos un poco sobre tu situación y qué te gustaría lograr."
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brand-500/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
