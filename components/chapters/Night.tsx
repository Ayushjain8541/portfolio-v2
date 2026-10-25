import { site, chapterIndex } from "@/content/site";
import { Chapter } from "./Chapter";
import { NightActions } from "./NightActions";

export function Night() {
  const n = site.night;
  return (
    <Chapter id="night" index={chapterIndex.night} height={125} label="night">
      <div className="absolute inset-x-0 bottom-0 flex min-h-[52svh] flex-col justify-end bg-[linear-gradient(0deg,rgba(20,13,9,0.95)_0%,rgba(20,13,9,0.75)_60%,transparent_100%)] px-6 pb-[calc(22px+var(--safe-bottom))] pt-16 wide:inset-0 wide:min-h-0 wide:items-center wide:justify-center wide:bg-[radial-gradient(ellipse_at_center,rgba(20,13,9,0.82)_0%,rgba(20,13,9,0.5)_45%,transparent_75%)] wide:pb-0 wide:text-center">
        <div className="pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto wide:flex wide:flex-col wide:items-center" data-reveal-group>
          <h2 id="night-title" className="story-title" data-reveal>
            {n.title}
          </h2>
          <p className="story-prose mt-5 max-w-[34ch]" data-reveal>
            {n.body}
          </p>
          <NightActions />
          <p className="mt-8 text-[12px] leading-relaxed text-milk/60" data-reveal>
            {n.footer}
          </p>
        </div>
      </div>
    </Chapter>
  );
}
