"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-[0_1px_0_0_rgba(15,34,98,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/logo-lockup.jpg"
            alt="USMLE HY TUTOR"
            width={1518}
            height={334}
            priority
            className="h-9 w-auto rounded-md sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) =>
            "dropdown" in item ? (
              <div key={item.label} ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-brand-600"
                  aria-expanded={dropdownOpen}
                >
                  {item.label}
                  <motion.svg
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 rounded-2xl border border-brand-100 bg-white p-2 shadow-xl shadow-brand-900/10"
                    >
                      {item.dropdown.map((d, i) => (
                        <motion.div
                          key={d.title}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                        >
                          <Link
                            href={d.href}
                            onClick={() => setDropdownOpen(false)}
                            className="group block rounded-xl px-4 py-3 transition-colors hover:bg-brand-50"
                          >
                            <p className="font-display text-sm font-semibold text-ink group-hover:text-brand-600">
                              {d.title}
                            </p>
                            <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                              {d.description}
                            </p>
                          </Link>
                        </motion.div>
                      ))}
                      <div className="mt-1 border-t border-brand-100 pt-1">
                        <Link
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-50"
                        >
                          Ver todos los programas
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-brand-600"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brand-500/40"
          >
            Contáctanos
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-label="Abrir menú"
        >
          <motion.div animate={mobileOpen ? "open" : "closed"} className="flex flex-col gap-1.5">
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } }}
              className="block h-0.5 w-6 bg-ink"
            />
            <motion.span
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              className="block h-0.5 w-6 bg-ink"
            />
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 } }}
              className="block h-0.5 w-6 bg-ink"
            />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-brand-100 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {nav.map((item) =>
                "dropdown" in item ? (
                  <div key={item.label}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-3 text-base font-medium text-ink"
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setMobileProgramsOpen((v) => !v)}
                        aria-label="Ver programas"
                        className="flex h-9 w-9 items-center justify-center"
                      >
                        <motion.svg
                          animate={{ rotate: mobileProgramsOpen ? 180 : 0 }}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </motion.svg>
                      </button>
                    </div>
                    <AnimatePresence>
                      {mobileProgramsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-2"
                        >
                          {item.dropdown.map((d) => (
                            <Link
                              key={d.title}
                              href={d.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-sm text-ink-muted"
                            >
                              {d.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-base font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-brand-500 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Contáctanos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
