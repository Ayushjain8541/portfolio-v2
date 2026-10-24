import { site, chapterIndex } from "@/content/site";
import { Chapter, ChapterText } from "./Chapter";
import { OriginActions } from "./OriginActions";

export function Origin() {
  const o = site.origin;
  return (
    <Chapter id="origin" index={chapterIndex.origin} height={130} label="origin">
      <ChapterText id="origin" label={o.label} title={o.title} body={o.body} align="right">
        <OriginActions />
      </ChapterText>
    </Chapter>
  );
}
