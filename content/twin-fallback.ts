// An explicitly scripted café guide while the owner's personal story is pending.
import { site } from "./site";
export function fallbackAnswer(message: string) {
  const q = message.toLowerCase();
  if (/project|work|built|make/.test(q)) return "the laptop holds selected work. café & cadence is the first real project here; the other files are marked spaces for your projects. click ‘the work’ on the chapter rail to explore.";
  if (/cycl|bike|ride|coffee|café|cafe|espresso/.test(q)) return "coffee and cycling are the starting point for this space. a pause, a little momentum, and an excuse to take the long way. try spinning the bicycle wheels or refilling the espresso machine.";
  if (/explore|secret|achievement|click/.test(q)) return "eight chapters, eight small discoveries. spin the bike, refill your coffee, open a polaroid, and follow the light from afternoon to night. there’s a little detour at the end, too.";
  if (/place|space|website|who|hello|^hi\b|^hey\b/.test(q)) return "welcome to café & cadence. this is a portfolio taking shape around coffee, cycling, and a personal journey. the scene is here; the owner’s real stories, photos, and work come next.";
  if (/contact|email|resume|hire/.test(q)) return "personal details and contact links haven’t been added yet. the short version shows what’s ready and what still needs your story.";
  return site.twin.unknown;
}
