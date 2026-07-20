"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { programas } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

function StarRatingInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          aria-label={`${n} estrella${n > 1 ? "s" : ""}`}
          className="text-brand-500 transition-transform hover:scale-110"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill={(hover || value) >= n ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

export function ReviewForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [rating, setRating] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (rating < 1) {
      setError("Selecciona una calificación.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = {
      nombre: String(form.get("nombre") ?? ""),
      programa: String(form.get("programa") ?? ""),
      mensaje: String(form.get("mensaje") ?? ""),
      calificacion: rating,
    };

    try {
      const res = await fetch("/api/resenas", {
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
        <h2 className="font-display mt-6 text-2xl font-bold text-ink">¡Gracias por tu reseña!</h2>
        <p className="mt-3 text-ink-muted">
          La vamos a revisar antes de publicarla. Apreciamos mucho que compartas tu experiencia.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="text-sm font-semibold text-ink">Tu calificación</p>
        <div className="mt-2">
          <StarRatingInput value={rating} onChange={setRating} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="text-sm font-semibold text-ink">
            Nombre
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
          <label htmlFor="programa" className="text-sm font-semibold text-ink">
            Programa <span className="font-normal text-ink-muted">(opcional)</span>
          </label>
          <select
            id="programa"
            name="programa"
            className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400"
          >
            <option value="">Prefiero no decir</option>
            {programas.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="text-sm font-semibold text-ink">
          Tu reseña
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400"
          placeholder="Cuéntanos cómo fue tu experiencia."
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
        {status === "submitting" ? "Enviando..." : "Enviar reseña"}
      </button>
    </form>
  );
}
