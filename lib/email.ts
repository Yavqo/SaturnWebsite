import { Resend } from "resend";
import { createUnsubscribeToken } from "./unsubscribe-token";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4173").replace(/\/$/, "");
export const emailFrom = process.env.EMAIL_FROM ?? "Saturn <noreply@emails.yavqo.com>";

let client: Resend | null = null;
export function resend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return (client ??= new Resend(key));
}

export function unsubscribeUrl(email: string) {
  return `${siteUrl}/unsubscribe?token=${encodeURIComponent(createUnsubscribeToken(email))}`;
}

/** Confirmation email sent right after someone subscribes. Includes an unsubscribe link and the List-Unsubscribe headers. */
export async function sendConfirmationEmail(email: string) {
  const unsubscribe = unsubscribeUrl(email);
  const token = new URL(unsubscribe).searchParams.get("token")!;
  const oneClick = `${siteUrl}/api/unsubscribe?token=${encodeURIComponent(token)}`;

  const text = [
    "You are subscribed to Saturn news",
    "",
    "Thanks for signing up. We will email you about Saturn and new things Zarah can do. We will not send you anything else.",
    "",
    "If this was not you, or you change your mind, you can unsubscribe at any time:",
    unsubscribe,
    "",
    "Saturn by Yavqo",
  ].join("\n");

  const html = `<!doctype html>
<html lang="en">
<body style="margin:0;padding:0;background:#F1F4F7;font-family:'Plus Jakarta Sans','Helvetica Neue',Helvetica,Arial,sans-serif;color:#1C2B33;">
  <div style="display:none;max-height:0;overflow:hidden;">You are on the list for Saturn news.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F1F4F7;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFFFF;border-radius:24px;">
        <tr><td style="padding:40px 40px 8px;font-size:20px;font-weight:700;">Saturn</td></tr>
        <tr><td style="padding:16px 40px 0;font-size:32px;line-height:38px;font-weight:500;">You are subscribed</td></tr>
        <tr><td style="padding:16px 40px 0;font-size:16px;line-height:24px;color:#5D6C7B;">
          Thanks for signing up. We will email you about Saturn and new things Zarah can do. We will not send you anything else.
        </td></tr>
        <tr><td style="padding:24px 40px 0;">
          <a href="${siteUrl}" style="display:inline-block;background:#0064E0;color:#FFFFFF;text-decoration:none;font-weight:700;font-size:14px;line-height:20px;padding:12px 24px;border-radius:100px;">Visit Saturn</a>
        </td></tr>
        <tr><td style="padding:40px 40px 40px;font-size:12px;line-height:16px;color:#5D6C7B;border-top:0;">
          If this was not you, or you change your mind, you can
          <a href="${unsubscribe}" style="color:#0064E0;">unsubscribe at any time</a>.
        </td></tr>
      </table>
      <p style="margin:16px 0 0;font-size:12px;line-height:16px;color:#5D6C7B;">Saturn by Yavqo</p>
    </td></tr>
  </table>
</body>
</html>`;

  const { error } = await resend().emails.send({
    from: emailFrom,
    to: email,
    subject: "You are subscribed to Saturn news",
    text,
    html,
    headers: {
      "List-Unsubscribe": `<${oneClick}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
  if (error) throw new Error(`Resend send failed: ${error.message}`);
}

/** Adds the address to Resend contacts, or re-subscribes it if it was unsubscribed earlier. */
export async function addSubscriber(email: string) {
  const { error } = await resend().contacts.create({ email, unsubscribed: false });
  if (!error) return;
  // Already a contact: make sure they are subscribed again.
  const update = await resend().contacts.update({ email, unsubscribed: false });
  if (update.error) throw new Error(`Resend contact failed: ${update.error.message}`);
}

export async function removeSubscriber(email: string) {
  const { error } = await resend().contacts.update({ email, unsubscribed: true });
  if (error && !/not.?found/i.test(error.message)) throw new Error(`Resend unsubscribe failed: ${error.message}`);
}
