export type AchievementId = "first-sip" | "barista" | "prompt-engineer" | "reverse-psychologist" | "et-tu" | "night-owl" | "recruiter" | "twin";
export type Achievement = { id: AchievementId; title: string; line: string; icon: string };
export const achievements: Achievement[] = [
  { id: "first-sip", title: "a seat at the table", line: "you made it. make yourself at home.", icon: "☕" },
  { id: "barista", title: "the usual", line: "fresh espresso. ready for another lap.", icon: "☕" },
  { id: "prompt-engineer", title: "quick fix", line: "a little tinkering keeps things moving.", icon: "⌨" },
  { id: "reverse-psychologist", title: "one last detour", line: "the long way is sometimes the best way.", icon: "↝" },
  { id: "et-tu", title: "slow down", line: "a reminder to enjoy the ride.", icon: "↗" },
  { id: "night-owl", title: "after hours", line: "you stayed for the last cup.", icon: "☾" },
  { id: "recruiter", title: "the short version", line: "all the essentials, in one place.", icon: "▤" },
  { id: "twin", title: "a page in the notebook", line: "there’s always room for a conversation.", icon: "✎" },
];
export const dialedIn = { title: "the full journey", line: "all eight discoveries. thanks for taking the scenic route.", icon: "✦" };
