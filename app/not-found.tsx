import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-start justify-center gap-5 px-6 wide:px-[8vw]">
      <p className="text-[14px] text-amber">404 · a little off route</p>
      <h1 className="story-title">
        this page
        <br />
        <em className="text-amber">went cold.</em>
      </h1>
      <p className="story-prose max-w-[34ch]">nothing here but an empty mug 😭</p>
      <div className="flex flex-wrap gap-x-6">
        <Link href="/" className="story-link">
          back to the café ☕
        </Link>
        <Link href="/recruiter" className="story-link">
          short version
        </Link>
      </div>
    </main>
  );
}
