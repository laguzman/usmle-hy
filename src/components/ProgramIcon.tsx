export type ProgramIconKey =
  | "group"
  | "stethoscope"
  | "checklist"
  | "diamond"
  | "run"
  | "bolt"
  | "target"
  | "meteor"
  | "chat";

const paths: Record<ProgramIconKey, React.ReactNode> = {
  group: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3 3-5 7-5s7 2 7 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17.5 12c2.5.3 4.5 2 4.5 5" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M7 3v4a4 4 0 0 0 8 0V3" />
      <path d="M11 11v4" />
      <circle cx="11" cy="18" r="3" />
      <circle cx="17.5" cy="14.5" r="1.5" />
    </>
  ),
  checklist: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12l1.5 1.5L13 10M8 16h5" />
    </>
  ),
  diamond: <path d="M6 3h12l4 6-10 12L2 9l4-6zM2 9h20M9 3l-2 6 5 12 5-12-2-6" />,
  run: (
    <>
      <circle cx="14" cy="4.5" r="1.75" fill="currentColor" stroke="none" />
      <path d="M6 20l3-5 3 2 1-4M9 15l-2-4 4-3 2 3 4 1M6 9l3-2" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
    </>
  ),
  meteor: (
    <>
      <circle cx="15" cy="15" r="5" />
      <path d="M4 4l6 2M3 10l5 1M9 4l1 5" />
    </>
  ),
  chat: (
    <>
      <path d="M3 4h12v9H9l-3.5 3.5V13H3z" />
      <path d="M13 9h8v7h-3l-2.5 2.5V16h-2.5z" />
    </>
  ),
};

export function ProgramIcon({ icon, className }: { icon: ProgramIconKey; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[icon]}
    </svg>
  );
}
