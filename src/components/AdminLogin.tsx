"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Algo salió mal.");
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Algo salió mal.");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Admin</p>
      <h1 className="font-display mt-3 text-3xl font-extrabold text-white">Acceso restringido</h1>
      <p className="mt-3 text-sm text-brand-100">Ingresa la contraseña para administrar las reseñas.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoFocus
          placeholder="Contraseña"
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-400"
        />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
