// Scripted replies, grounded in Ayush's supplied story and resume.
import { site } from "./site";
export function fallbackAnswer(message: string) {
  const q = message.toLowerCase();
  if (/hackathon|aabw|goopers|win|brainsquared/.test(q))
    return "We built BrainSquared with the Goopers and won the Founder Track at Agentic AI Build Week in Vietnam. It turns scattered prompts, workflows, and decisions into company knowledge that AI tools can reuse. We pivoted late and shipped through the night. Meeting founders building useful stuff was the part that really stayed with me.";
  if (/vietnam|noc|saigon|overseas/.test(q))
    return "I went to Ho Chi Minh City for NUS Overseas Colleges from May to July 2026 and interned at Momos. I arrived knowing no one. It became three months of startup work, hackathons, cafés, travelling, and friends who kept pushing each other to build. Very hacker-house energy.";
  if (/momos|internship|experience/.test(q))
    return "At Momos I owned a backend integration from discovery and design through testing and production. TypeScript, Node.js, AWS, and React. I learned a lot from having my design reworked before shipping it. Before that, I interned at Welyft, building chatbot automation and automating compliance workflows.";
  if (/coursera|chess|start|coding|brother|python/.test(q))
    return "My brother gave me access to his uni's Coursera account. I took an intro to Python course, then tried making a chess AI because I liked chess and wasn't particularly good at it. Later came H2 Computing, Building BloCS, and CS at NUS. A playable version of the bot can come later.";
  if (/school|nus|jc|computing|blocs|education/.test(q))
    return "I took H2 Computing at Temasek Junior College and helped organise Building BloCS, which introduced 100+ students to computing. I realised I really liked coding and went on to study Computer Science at NUS in August 2025.";
  if (/learngraph|learning/.test(q))
    return "LearnGraph turns Obsidian notes into a concept graph and checks what a student understands through flashcards. I led the backend work at OpenAI Build Week: FastAPI, Postgres, pgvector, hybrid retrieval, and RAG-based grading, with learner state available through MCP.";
  if (/project|built|build|work|make/.test(q))
    return "Selected work is on the laptop: BrainSquared, LearnGraph, my Momos backend work, and Second Brain. The on-the-side folder has early chess code, a URL shortener, CS Project Helper, and an AI resume analyser. Pick a file to read more.";
  if (/cycl|bike|ride|coffee|café|cafe|espresso/.test(q))
    return "The bike and coffee are staying in the room. There are more stories to add there later. In the meantime, the espresso machine does refill the caffeine meter, and the bike wheels do spin.";
  if (/contact|email|resume|hire/.test(q))
    return `You can reach me at ${site.links.email}, or find me on LinkedIn at linkedin.com/in/ayushjainz. The short version has my experience, projects, and a resume download.`;
  if (/who|hello|^hi\b|^hey\b|room|website/.test(q))
    return "Hey, I'm Ayush. I study CS at NUS and usually have something I'm trying to build. This room follows the journey from a borrowed Coursera login to NOC Vietnam and a hackathon win. Ask about any of those.";
  return site.twin.unknown;
}
