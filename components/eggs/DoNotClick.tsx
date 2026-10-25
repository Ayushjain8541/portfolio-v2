"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { useStore } from "@/lib/store";

/** the reverse psychology button */
export function DoNotClick() {
  const [clicked, setClicked] = useState(false);
  const unlock = useStore((s) => s.unlock);
  return (
    <button
      type="button"
      onClick={() => {
        setClicked(true);
        unlock("reverse-psychologist");
      }}
      className="story-link text-cherry"
    >
      {clicked ? site.night.doNotClickAfter : site.night.doNotClick}
    </button>
  );
}
