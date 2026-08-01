"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute left-1/2 top-[-10%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-300/30 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300"
        >
          High-Yield Prep
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-6 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Tu camino a ser MD en EE. UU.{" "}
          <span className="italic text-brand-300">empieza aquí.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100"
        >
          Clases grupales, estrategia de examen y drills de alto rendimiento
          para Step 1, Step 2 CK y Step 3 — con acompañamiento real, en
          español.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contacto"
            className="rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brand-500/40"
          >
            Contáctanos
          </Link>
          <Link
            href="/quienes-somos"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-300"
          >
            Conoce el método
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/15 pt-10"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-brand-100">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
