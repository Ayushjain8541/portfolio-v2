"use client";

import { site } from "@/content/site";
import { scrollToChapter } from "@/lib/scrollApi";
import { DoNotClick } from "@/components/eggs/DoNotClick";

const base = "inline-flex min-h-[44px] items-center rounded-full border px-4 py-2 font-mono text-[13px] transition-colors";
export function NightActions() {
  const l = site.links;
  const contacts = [
    { label: "email", href: l.email ? `mailto:${l.email}?subject=coffee%3F` : "" },
    { label: "linkedin", href: l.linkedin }, { label: "github", href: l.github }, { label: "instagram", href: l.instagram },
  ].filter((item) => item.href);
  return (
    <div className="mt-7 flex flex-col gap-5 wide:items-center" data-reveal>
      <div className="flex flex-wrap gap-2 wide:justify-center">
        {contacts.map((item) => <a key={item.label} href={item.href} className={`${base} border-milk/25 text-milk hover:border-agent hover:text-agent`}>{item.label} ↗</a>)}
        <button type="button" onClick={() => scrollToChapter(0)} className={`${base} border-agent bg-agent text-espresso hover:bg-milk`}>another lap ↑</button>
      </div>
      {contacts.length === 0 && <p className="max-w-[34ch] text-[12px] text-crema/75">your contact links will live here.</p>}
      <DoNotClick />
    </div>
  );
}
