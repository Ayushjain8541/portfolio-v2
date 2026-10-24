import { chapterIndex } from "@/content/site";
import { Chapter } from "./Chapter";
import { ProjectsWindow } from "./ProjectsWindow";

export function Work() {
  return (
    <Chapter id="work" index={chapterIndex.work} height={170} label="work">
      <h2 id="work-title" className="sr-only">
        projects
      </h2>
      <ProjectsWindow />
    </Chapter>
  );
}
