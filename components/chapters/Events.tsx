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
        title={e.title}
        body={[e.body, e.takeaway]}
        align="left"
      >
        <a
          href={e.post}
          target="_blank"
          rel="noreferrer"
          className="story-link mt-5"
          data-reveal
        >
          the story, from the team ↗
        </a>
        <PolaroidChips />
      </ChapterText>
    </Chapter>
  );
}
