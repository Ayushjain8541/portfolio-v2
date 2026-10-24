import { site, chapterIndex } from "@/content/site";
import { Chapter, ChapterText } from "./Chapter";

export function School() {
  const s = site.school;
  return (
    <Chapter
      id="school"
      index={chapterIndex.school}
      height={145}
      label="school and Building BloCS"
    >
      <ChapterText
        id="school"
        label={s.label}
        title={s.title}
        body={s.body}
        align="right"
      >
        <p
          className="mt-4 max-w-[38ch] text-[15px] leading-relaxed text-crema wide:text-[16px]"
          data-reveal
        >
          {s.footnote}
        </p>
        <p
          className="mt-5 max-w-[42ch] font-mono text-[11px] leading-relaxed text-crema/75"
          data-reveal
        >
          {s.credential}
        </p>
      </ChapterText>
    </Chapter>
  );
}
