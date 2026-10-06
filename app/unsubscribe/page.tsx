import type { Metadata } from "next";
import Link from "next/link";
import { UnsubscribeForm } from "@/components/UnsubscribeForm";
import { verifyUnsubscribeToken } from "@/lib/unsubscribe-token";

export const metadata: Metadata = {
  title: "Unsubscribe | Saturn Browser",
  robots: { index: false },
};

function mask(email: string) {
  const [name, domain] = email.split("@");
  return `${name.slice(0, 2)}${"*".repeat(Math.max(name.length - 2, 1))}@${domain}`;
}

export default async function UnsubscribePage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const { token } = await searchParams;
  const email = verifyUnsubscribeToken(token);

  return (
    <main id="main" className="page">
      <div className="page-head">
        <h1>Unsubscribe</h1>
      </div>
      {email && token ? (
        <UnsubscribeForm token={token} masked={mask(email)} />
      ) : (
        <div className="prose">
          <p>This unsubscribe link is not valid. Use the link in the latest email we sent you, or <Link href="/contact">contact us</Link>.</p>
          <p><Link href="/">Back to Saturn</Link></p>
        </div>
      )}
    </main>
  );
}
