"use client";

import { site } from "@/content/site";
import { useStore } from "@/lib/store";

export const chipClass =
  "inline-flex min-h-[44px] items-center gap-2 rounded-full border border-milk/25 bg-espresso/40 px-3.5 py-2 font-mono text-[12px] text-milk/85 backdrop-blur-sm transition-colors hover:border-agent hover:text-agent";

export function OriginActions() {
  const unlock = useStore((s) => s.unlock);
  const tooltip = useStore((s) => s.setTooltip);
  return (
    <div className="mt-6 flex flex-wrap gap-2" data-reveal>
      <button
        type="button"
        className={chipClass}
        onClick={() => {
          tooltip({ id: "chess", text: site.origin.chessTooltip });
          unlock("et-tu");
        }}
      >
        the first chess project ↗
      </button>
    </div>
  );
}
