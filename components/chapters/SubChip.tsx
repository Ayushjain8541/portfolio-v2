"use client";

import { site } from "@/content/site";
import { useStore } from "@/lib/store";
import { chipClass } from "./OriginActions";
export function SubChip() {
  const tooltip=useStore(s=>s.setTooltip);
  return <div className="mt-5" data-reveal><button type="button" className={chipClass} onClick={()=>tooltip({id:"sub",text:site.ticket.subTooltip})}>a note from Saigon ↗</button></div>;
}
