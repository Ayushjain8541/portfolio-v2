"use client";

import { site } from "@/content/site";
import { scrollToChapter } from "@/lib/scrollApi";
import { useStore } from "@/lib/store";
import { DoNotClick } from "@/components/eggs/DoNotClick";

const base = "story-link";
export function NightActions() {
  const l = site.links;
  const spinBike = useStore((s) => s.waveRobot);
  const contacts = [
    { label: "email", href: l.email ? `mailto:${l.email}?subject=coffee%3F` : "" },
    { label: "linkedin", href: l.linkedin }, { label: "github", href: l.github }, { label: "instagram", href: l.instagram },
  ].filter((item) => item.href);
  return (
    <div className="mt-7 flex flex-col gap-5 wide:items-center" data-reveal>
      <div className="flex flex-wrap gap-x-5 gap-y-0 wide:justify-center">
        {contacts.map((item) => <a key={item.label} href={item.href} className={`${base}`}>{item.label} ↗</a>)}
        {l.resume && <a href={l.resume} download="Ayush_Jain_Resume.pdf" className={`${base}`}>résumé ↓</a>}
        <button type="button" onClick={() => scrollToChapter(0)} className={`${base} text-amber`}>another lap ↑</button>
      </div>
      {contacts.length === 0 && <p className="max-w-[34ch] text-[12px] text-crema/75">your contact links will live here.</p>}
      <div className="flex items-center gap-5">
        <button type="button" onClick={spinBike} className="story-link">spin the bike ↗</button>
        <DoNotClick />
      </div>
    </div>
  );
}
