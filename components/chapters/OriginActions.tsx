"use client";

import { site } from "@/content/site";
import { useStore } from "@/lib/store";

export const chipClass = "inline-flex min-h-[44px] items-center gap-2 rounded-full border border-milk/25 bg-espresso/40 px-3.5 py-2 font-mono text-[12px] text-milk/85 backdrop-blur-sm transition-colors hover:border-agent hover:text-agent";

export function OriginActions() {
  const spin = useStore((s) => s.waveRobot);
  const unlock = useStore((s) => s.unlock);
  const tooltip = useStore((s) => s.setTooltip);
  return (
    <div className="mt-6 flex flex-wrap gap-2" data-reveal>
      <button type="button" className={chipClass} onClick={spin} aria-label="spin the bicycle wheels">
        <svg width="23" height="18" viewBox="0 0 28 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><circle cx="6" cy="14" r="4.5" /><circle cx="22" cy="14" r="4.5" /><path d="m6 14 6-10 4 10H6l5-8h8l3 8M10 4h5m3-3h3l-2 5" /></svg>
        take a spin
      </button>
      <button type="button" className={chipClass} onClick={() => { tooltip({ id: "laurel", text: site.origin.laurelTooltip }); unlock("et-tu"); }}>
        enjoy the detour ↗
      </button>
    </div>
  );
}
