"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { RevealGroup, RevealItem } from "./Reveal";
import type { TeamMember } from "@/lib/data";

export function TeamGrid({ members }: { members: TeamMember[] }) {
  const [openName, setOpenName] = useState<string | null>(null);

  return (
    <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => {
        const isOpen = openName === member.name;
        return (
          <RevealItem key={member.name}>
            <div className="overflow-hidden rounded-3xl bg-brand-50">
              <div className="relative aspect-square w-full">
                <Image src={member.photo} alt={member.name} fill className="object-cover" />
              </div>
            </div>

            <button
              onClick={() => setOpenName(isOpen ? null : member.name)}
              className="mt-4 flex w-full items-center justify-between gap-3 text-left"
              aria-expanded={isOpen}
            >
              <span>
                <span className="font-display block text-lg font-bold text-white">
                  {member.name}
                </span>
                <span className="block text-sm text-brand-300">{member.role}</span>
              </span>
              <motion.svg
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="mt-1 shrink-0 text-brand-300"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m6 9 6 6 6-6" />
              </motion.svg>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-brand-100">
                    {member.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
