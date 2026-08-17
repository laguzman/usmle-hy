"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { AdminResenaItem } from "@/lib/resenasStore";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-brand-500">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill={rating >= n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ResenaCard({ resena }: { resena: AdminResenaItem }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function setApproved(approved: boolean) {
    setBusy(true);
    try {
      await fetch(`/api/admin/resenas/${resena.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ approved }),
      });
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  async function remove() {
    if (!confirm("¿Eliminar esta reseña permanentemente?")) return;
    setBusy(true);
    try {
      await fetch(`/api/admin/resenas/${resena.id}`, { method: "DELETE" });
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-2xl border border-ink/8 bg-white p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-display text-base font-bold text-ink">{resena.nombre}</p>
          <p className="text-xs text-ink-muted">
            {resena.programaTitle || "Sin programa"}
            {resena.createdAt && ` · ${new Date(resena.createdAt).toLocaleDateString("es")}`}
          </p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            resena.approved ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
          }`}
        >
          {resena.approved ? "Aprobada" : "Pendiente"}
        </span>
      </div>

      <div className="mt-2">
        <StarRow rating={resena.calificacion} />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{resena.mensaje}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {!resena.approved && (
          <button
            onClick={() => setApproved(true)}
            disabled={busy}
            className="rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
          >
            Aprobar
          </button>
        )}
        {resena.approved && (
          <button
            onClick={() => setApproved(false)}
            disabled={busy}
            className="rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-ink/5 disabled:opacity-60"
          >
            Ocultar
          </button>
        )}
        <button
          onClick={remove}
          disabled={busy}
          className="rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50 disabled:opacity-60"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export function AdminResenas({ resenas }: { resenas: AdminResenaItem[] }) {
  const router = useRouter();
  const pending = resenas.filter((r) => !r.approved);
  const approved = resenas.filter((r) => r.approved);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Admin</p>
          <h1 className="font-display mt-2 text-3xl font-extrabold text-white">Reseñas</h1>
        </div>
        <button
          onClick={logout}
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-brand-300"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
          Pendientes ({pending.length})
        </h2>
        <div className="mt-4 space-y-4">
          {pending.length === 0 ? (
            <p className="text-sm text-brand-100">No hay reseñas pendientes.</p>
          ) : (
            pending.map((r) => <ResenaCard key={r.id} resena={r} />)
          )}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
          Aprobadas ({approved.length})
        </h2>
        <div className="mt-4 space-y-4">
          {approved.length === 0 ? (
            <p className="text-sm text-brand-100">Todavía no hay reseñas aprobadas.</p>
          ) : (
            approved.map((r) => <ResenaCard key={r.id} resena={r} />)
          )}
        </div>
      </div>
    </div>
  );
}
