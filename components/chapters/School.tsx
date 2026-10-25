import { site, chapterIndex } from "@/content/site";
import { Chapter, ChapterText } from "./Chapter";

export function School() {
  const s = site.school;
  return (
    <Chapter id="school" index={chapterIndex.school} height={145} label="school and Building BloCS">
      <ChapterText id="school" title={s.title} body={s.paragraphs} align="right" />
    </Chapter>
  );
}
