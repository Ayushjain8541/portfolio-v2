"use client";

import { site } from "@/content/site";
import { scrollToChapter } from "@/lib/scrollApi";

export function Wordmark() {
  return (
    <button
      type="button"
      onClick={() => scrollToChapter(0)}
      className="pointer-events-auto font-display text-[22px] sm:text-[26px] italic leading-none text-milk"
      aria-label={`${site.shortName}, back to the top`}
    >
      {site.shortName}
    </button>
  );
}
