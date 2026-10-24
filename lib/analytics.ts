// Local prototype: retain existing event call sites without sending analytics.
type EventName = "achievement_unlocked" | "twin_message_sent" | "recruiter_mode_opened" | "resume_downloaded" | "caffeine_refilled";
export function track(name: EventName, props?: Record<string, string | number | boolean>) {
  void name;
  void props;
}
