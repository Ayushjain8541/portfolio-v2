"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { useStore } from "@/lib/store";

const MIN_MS = 1200;

function Grinder() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 animate-[spin_2.4s_linear_infinite]" aria-hidden>
      <circle cx="24" cy="24" r="20" fill="none" stroke="#4A3022" strokeWidth="3" />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x="23" y="6" width="2" height="7" rx="1" fill="#EFC17A" transform={`rotate(${i * 30} 24 24)`} opacity={0.35 + (i / 12) * 0.65} />
      ))}
      <circle cx="24" cy="24" r="5" fill="#E9C9A1" />
    </svg>
  );
}

export function Loader() {
  const loaded = useStore((s) => s.loaded);
  const progress = useStore((s) => Math.round(s.loadProgress * 100));
  const entered = useStore((s) => s.entered);
  const reel = useStore((s) => s.reel);
  const enter = useStore((s) => s.enter);
  const [typed, setTyped] = useState<string[]>([]);
  const [minDone, setMinDone] = useState(false);
  const [gone, setGone] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  // type the loader lines one after another
  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (let l = 0; l < site.loader.length; l++) {
        const line = site.loader[l];
        for (let c = 1; c <= line.length; c++) {
          if (cancelled) return;
          setTyped((t) => {
            const next = t.slice();
            next[l] = line.slice(0, c);
            return next;
          });
          await new Promise((r) => setTimeout(r, 14));
        }
        await new Promise((r) => setTimeout(r, 120));
      }
    })();
    const min = setTimeout(() => setMinDone(true), MIN_MS);
    const max = setTimeout(() => setTimedOut(true), 9000); // never trap anyone behind a slow GPU
    return () => {
      cancelled = true;
      clearTimeout(min);
      clearTimeout(max);
    };
  }, []);

  const doneTyping = typed.length === site.loader.length && typed[site.loader.length - 1] === site.loader[site.loader.length - 1];
  const ready = minDone && doneTyping && (loaded || timedOut);

  useEffect(() => {
    if (ready && reel && !entered) enter();
  }, [ready, reel, entered, enter]);

  useEffect(() => {
    if (!entered) return;
    const id = setTimeout(() => setGone(true), 900);
    return () => clearTimeout(id);
  }, [entered]);

  if (gone) return null;
  return (
    <div
      className={`js-only fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-6 transition-opacity duration-[900ms] ${
        entered ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="choose your route"
    >
      <Grinder />
      <ul className="mt-8 min-h-[104px] w-[min(88vw,360px)] space-y-1.5 font-mono text-[13px] text-crema/80">
        {typed.map((t, i) => (
          <li key={i}>
            <span className="text-agent">›</span> {t}
          </li>
        ))}
      </ul>
      <div className="mt-6 h-[2px] w-[min(88vw,360px)] overflow-hidden rounded-full bg-mocha/60" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="loading the scene">
        <div className="h-full bg-amber transition-[width] duration-500" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-2 font-mono text-[11px] text-crema/60">{progress}%</p>
      {!reel && (
        <div className="mt-8 flex w-[min(88vw,360px)] flex-col items-center gap-3 sm:flex-row sm:gap-7">
          <button
            type="button"
            onClick={enter}
            disabled={!ready}
            className="flex min-h-[76px] min-w-[210px] flex-col items-center justify-center gap-1.5 rounded-[5px] bg-amber px-6 py-3.5 text-espresso transition-colors duration-150 enabled:hover:bg-crema disabled:cursor-wait disabled:bg-mocha disabled:text-crema"
          >
            <span className="font-display text-[26px] leading-none">{site.entry.scenic}</span>
            <span className="font-display text-[16px] italic leading-tight opacity-80">{site.entry.scenicNote}</span>
          </button>
          <Link
            href="/recruiter"
            className="group flex min-h-[64px] shrink-0 flex-col items-center justify-center gap-1.5 px-1 text-milk transition-colors duration-150 hover:text-crema"
          >
            <span className="text-[15px] leading-none underline decoration-milk/40 underline-offset-[5px] transition-colors group-hover:decoration-crema">{site.entry.detour}</span>
            <span className="font-display text-[16px] italic leading-tight text-crema/85">{site.entry.detourNote}</span>
          </Link>
        </div>
      )}
    </div>
  );
}
