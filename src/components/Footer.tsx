import Link from "next/link";
import Image from "next/image";
import { programas } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Image
              src="/brand/logo-lockup.jpg"
              alt="USMLE HY TUTOR"
              width={1518}
              height={334}
              className="h-10 w-auto rounded-md"
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              High-yield prep. Your journey to becoming an MD in the U.S. starts here.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div>
              <p className="font-display text-sm font-bold text-ink">Programas</p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
                {programas.slice(0, 4).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/programas/${p.slug}`} className="transition-colors hover:text-brand-600">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-sm font-bold text-ink">Empresa</p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
                <li><Link href="/quienes-somos" className="transition-colors hover:text-brand-600">Quiénes Somos</Link></li>
                <li><Link href="/programas" className="transition-colors hover:text-brand-600">Programas</Link></li>
                <li><Link href="/resenas" className="transition-colors hover:text-brand-600">Reseñas</Link></li>
                <li><Link href="/galeria" className="transition-colors hover:text-brand-600">Galería</Link></li>
                <li><Link href="/contacto" className="transition-colors hover:text-brand-600">Contáctanos</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-display text-sm font-bold text-ink">Contacto</p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
                <li>
                  <a href="mailto:usmle.hy.tutor@gmail.com" className="transition-colors hover:text-brand-600">
                    usmle.hy.tutor@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+13053018052" className="transition-colors hover:text-brand-600">
                    +1 305 301 8052
                  </a>
                </li>
                <li>
                  <a href="tel:+17542607876" className="transition-colors hover:text-brand-600">
                    +1 754 260 7876
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-display text-sm font-bold text-ink">Síguenos</p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
                <li>
                  <a
                    href="https://instagram.com/usmle_hy_tutor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-600"
                  >
                    @usmle_hy_tutor
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.usmlehytutor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-600"
                  >
                    usmlehytutor.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ink/8 pt-6 text-xs text-ink-muted">
          © 2026 USMLE HY Tutor — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
