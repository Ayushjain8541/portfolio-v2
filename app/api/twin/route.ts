import { fallbackAnswer } from "@/content/twin-fallback";

// This first visual version is a local scripted guide, with no model or credentials.
export async function POST(req: Request) {
  let payload: unknown;
  try { payload = await req.json(); }
  catch { return new Response("Please send a message.", { status: 400 }); }
  const messages = typeof payload === "object" && payload !== null && "messages" in payload ? payload.messages : null;
  if (!Array.isArray(messages) || messages.length > 10) return new Response("Please send a short conversation.", { status: 400 });
  const last = messages.at(-1);
  if (!last || last.role !== "user" || typeof last.content !== "string" || !last.content.trim() || last.content.length > 500) return new Response("Please send a message of up to 500 characters.", { status: 400 });
  return new Response(fallbackAnswer(last.content), { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store", "x-notebook-mode": "scripted" } });
}
