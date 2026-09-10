"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { StorageImage } from "@/lib/galleryStorage";

type Section = { key: string; title: string };

export function AdminGalleryUpload({
  sections,
  imagesByCategory,
}: {
  sections: Section[];
  imagesByCategory: Record<string, StorageImage[]>;
}) {
  const router = useRouter();
  const [category, setCategory] = useState(sections[0]?.key ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [busyName, setBusyName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const files = fileInputRef.current?.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.set("category", category);
    Array.from(files).forEach((f) => formData.append("files", f));

    try {
      const res = await fetch("/api/admin/gallery/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Algo salió mal.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Algo salió mal.");
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(cat: string, filename: string) {
    if (!confirm("¿Eliminar esta foto permanentemente?")) return;
    setBusyName(filename);
    try {
      await fetch("/api/admin/gallery/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: cat, filename }),
      });
      router.refresh();
    } finally {
      setBusyName(null);
    }
  }

  const currentImages = imagesByCategory[category] ?? [];

  return (
    <div className="mx-auto max-w-5xl px-6">
      <form onSubmit={handleUpload} className="rounded-2xl border border-ink/8 bg-white p-6">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <label className="text-sm font-semibold text-ink">Categoría</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brand-400"
            >
              {sections.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              ref={fileInputRef}
              type="file"
              name="files"
              accept="image/*"
              multiple
              required
              className="block w-full text-sm text-ink file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-600"
            />
          </div>
        </div>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={uploading}
          className="mt-4 rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
        >
          {uploading ? "Subiendo..." : "Subir fotos"}
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
          {sections.find((s) => s.key === category)?.title} ({currentImages.length})
        </h2>

        {currentImages.length === 0 ? (
          <p className="mt-4 text-sm text-brand-100">Todavía no hay fotos en esta categoría.</p>
        ) : (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {currentImages.map((img) => (
              <div key={img.name} className="group relative aspect-square overflow-hidden rounded-xl bg-brand-50">
                <Image src={img.url} alt={img.name} fill className="object-cover" />
                <button
                  onClick={() => handleDelete(category, img.name)}
                  disabled={busyName === img.name}
                  className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100 disabled:opacity-60"
                  aria-label="Eliminar foto"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
