import { NextResponse } from "next/server";
import { removeSubscriber } from "@/lib/email";
import { verifyUnsubscribeToken } from "@/lib/unsubscribe-token";

export const runtime = "nodejs";

/**
 * Unsubscribes the address in a signed token. POST only: the page asks for a click first,
 * and mail apps use the same endpoint for one-click unsubscribe (RFC 8058).
 */
export async function POST(request: Request) {
  const url = new URL(request.url);
  let token = url.searchParams.get("token");
  if (!token) {
    token = await request
      .json()
      .then((b: { token?: unknown }) => (typeof b.token === "string" ? b.token : null))
      .catch(() => null);
  }

  const email = verifyUnsubscribeToken(token);
  if (!email) return NextResponse.json({ error: "This unsubscribe link is not valid." }, { status: 400 });

  try {
    await removeSubscriber(email);
  } catch (err) {
    console.error("[unsubscribe]", err);
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
