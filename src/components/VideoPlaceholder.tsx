export function VideoPlaceholder({ title, color }: { title: string; color?: string }) {
  return (
    <div className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl bg-brand-900">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div
        className="absolute inset-0 opacity-70"
        style={
          color
            ? { background: `radial-gradient(ellipse 80% 80% at 30% 20%, ${color}, transparent)` }
            : undefined
        }
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-brand-900/70 to-brand-900" />
      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:scale-110">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <p className="font-display text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-brand-100">Video próximamente</p>
      </div>
    </div>
  );
}
