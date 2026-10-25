"use client";

import { site } from "@/content/site";
import { useStore } from "@/lib/store";

export const storyLinkClass =
  "story-link";

export function OriginActions() {
  const unlock = useStore((s) => s.unlock);
  const tooltip = useStore((s) => s.setTooltip);
  return (
    <div className="mt-6 flex flex-wrap gap-2" data-reveal>
      <button
        type="button"
        className={storyLinkClass}
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
