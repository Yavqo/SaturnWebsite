import { NextResponse } from "next/server";
import { emailFrom, resend } from "@/lib/email";

export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TOPICS = ["Help with Saturn", "Help with Zarah", "Privacy and my data", "Feedback", "Something else"];

// Best-effort limit per IP. In-memory, so it resets on deploy and is per server instance.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again in a few minutes." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend it worked.
  if (typeof body.company === "string" && body.company) return NextResponse.json({ ok: true });

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(body.name);
  const email = str(body.email).toLowerCase();
  const topic = str(body.topic);
  const message = str(body.message);

  const errors: Record<string, string> = {};
  if (!name || name.length > 100) errors.name = "Enter your name.";
  if (!EMAIL.test(email) || email.length > 254) errors.email = "Enter a valid email address.";
  if (!TOPICS.includes(topic)) errors.topic = "Choose a topic.";
  if (message.length < 10) errors.message = "Tell us a little more, at least 10 characters.";
  if (message.length > 5000) errors.message = "Keep your message under 5,000 characters.";
  if (Object.keys(errors).length) return NextResponse.json({ error: "Check the form and try again.", fields: errors }, { status: 400 });

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    console.error("[contact] CONTACT_TO_EMAIL is not set");
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }

  try {
    const { error } = await resend().emails.send({
      from: emailFrom,
      to,
      replyTo: email,
      subject: `[Saturn contact] ${topic} from ${name}`,
      text: `From: ${name} <${email}>\nTopic: ${topic}\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;<br><strong>Topic:</strong> ${escapeHtml(topic)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
