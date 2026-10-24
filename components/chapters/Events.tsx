import { site, chapterIndex } from "@/content/site";
import { Chapter, ChapterText } from "./Chapter";
import { PolaroidChips, Polaroids } from "./Polaroids";

export function Events() {
  const e = site.events;
  return (
    <Chapter
      id="events"
      index={chapterIndex.events}
      height={155}
      label="AABW hackathon win"
    >
      <div className="pointer-events-none absolute inset-x-0 top-[calc(96px+var(--safe-top))]">
        <Polaroids />
      </div>
      <ChapterText
        id="events"
        label={e.label}
        title={e.title}
        body={e.body}
        align="left"
      >
        <p
          className="mt-4 max-w-[37ch] text-[15px] leading-relaxed text-crema wide:text-[16px]"
          data-reveal
        >
          {e.takeaway}
        </p>
        <a
          href={e.post}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex min-h-[44px] items-center rounded-full border border-agent/60 px-4 py-2 font-mono text-[12px] text-agent hover:bg-agent hover:text-espresso"
          data-reveal
        >
          the story, from the team ↗
        </a>
        <PolaroidChips />
      </ChapterText>
    </Chapter>
  );
}
