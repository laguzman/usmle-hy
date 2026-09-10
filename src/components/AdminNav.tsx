"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const tabs = [
  { href: "/admin", label: "Reseñas" },
  { href: "/admin/fotos", label: "Fotos" },
];

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div className="mx-auto mb-10 flex max-w-5xl items-center justify-between">
      <div className="flex gap-2">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? "bg-brand-500 text-white"
                  : "border border-white/20 text-white hover:border-brand-300"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
      <button
        onClick={logout}
        className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-brand-300"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
