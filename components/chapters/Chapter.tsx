import type { ReactNode } from "react";

/**
 * A chapter is a tall section with a sticky, full-screen stage inside.
 * The extra height is the "hold" while the camera sits on the subject.
 * Default layout is portrait (text in the bottom 40%); `wide:` is landscape desktop.
 */
export function Chapter({
  id,
  index,
  height,
  children,
  label,
}: {
  id: string;
  index: number;
  height: number; // in svh
  children: ReactNode;
  label: string;
}) {
  return (
    <section
      id={id}
      data-chapter={index}
      aria-label={label}
      className="chapter relative"
      style={{ height: `${height}svh` }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">{children}</div>
    </section>
  );
}

export function ChapterText({
  id,
  title,
  body,
  align = "left",
  children,
  className = "",
}: {
  id: string;
  title: ReactNode;
  body?: string | readonly string[];
  align?: "left" | "right";
  children?: ReactNode;
  className?: string;
}) {
  const side = align === "left"
    ? "wide:left-0 wide:pl-[6vw] wide:pr-0 wide:bg-[linear-gradient(90deg,rgba(20,13,9,0.82)_0%,rgba(20,13,9,0.5)_65%,transparent_100%)]"
    : "wide:left-auto wide:right-0 wide:pl-0 wide:pr-[8vw] wide:bg-[linear-gradient(270deg,rgba(20,13,9,0.82)_0%,rgba(20,13,9,0.5)_65%,transparent_100%)]";
  const paragraphs = typeof body === "string" ? [body] : body;
  return (
    <div className={`pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(20,13,9,0.96)_0%,rgba(20,13,9,0.82)_65%,transparent_100%)] px-6 pb-[calc(32px+var(--safe-bottom))] pt-16 wide:inset-y-0 wide:flex wide:w-[46vw] wide:items-center wide:py-0 ${side} ${className}`}>
      <article className="mx-auto w-full max-w-[24rem] wide:mx-0 [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto" aria-labelledby={`${id}-title`} data-reveal-group>
        <h2 id={`${id}-title`} className="story-title text-milk" data-reveal>{title}</h2>
        {paragraphs && (
          <div className="story-prose mt-5 wide:mt-6">
            {paragraphs.map((paragraph) => <p key={paragraph} data-reveal>{paragraph}</p>)}
          </div>
        )}
        {children}
      </article>
    </div>
  );
}
