import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/message/VJWZTJQUEW2TO1",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.44 1.27 4.89L2 22l5.25-1.28A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.84 14.24c-.25.7-1.24 1.28-1.99 1.44-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.24-5.05-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.78-.37.2 0 .39.002.56.01.18.008.42-.07.66.5.25.6.84 2.05.91 2.2.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.75-.17 1.45z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/usmle_hy_tutor",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1E2HmXYtCE/?mibextid=wwXIfr",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@usmle_hy_tutor?_r=1&_t=ZS-98sqh9ftNkF",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 5.82c-1.01-.87-1.63-2.15-1.63-3.57h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.65c.28 0 .55.04.8.12V8.94a5.7 5.7 0 0 0-.8-.06 5.84 5.84 0 1 0 5.84 5.84V9.12a8.16 8.16 0 0 0 4.65 1.4V7.44a4.85 4.85 0 0 1-3.18-1.62z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@usmlehytutor",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27z" />
      </svg>
    ),
  },
];

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

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-display text-sm font-bold text-ink">Explora</p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
                <li><Link href="/quienes-somos" className="transition-colors hover:text-brand-600">Quiénes Somos</Link></li>
                <li><Link href="/programas" className="transition-colors hover:text-brand-600">Programas</Link></li>
                <li><Link href="/resenas" className="transition-colors hover:text-brand-600">Reseñas</Link></li>
                <li><Link href="/faq" className="transition-colors hover:text-brand-600">FAQ</Link></li>
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
              <div className="mt-4 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink-muted transition-colors hover:border-brand-200 hover:text-brand-600"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink-muted">@usmle_hy_tutor</p>
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
