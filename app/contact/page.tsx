import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact us | Saturn Browser",
  description: "Get in touch with the Saturn team.",
};

export default function ContactPage() {
  return (
    <main id="main" className="page page-wide">
      <div className="page-head center">
        <h1>Contact us</h1>
        <p className="page-sub">Questions, problems or ideas? Send us a message and we will reply by email.</p>
      </div>

      <div className="contact-grid">
        <ContactForm />
        <aside className="contact-side">
          <h2>Quick answers</h2>
          <p>Many questions are already covered in the <Link href="/help">Help Centre</Link>.</p>
          <h2>Your privacy</h2>
          <p>We use your details only to reply to you. Read our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
        </aside>
      </div>
    </main>
  );
}
