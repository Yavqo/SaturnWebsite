import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Saturn Browser",
  description: "What information Saturn and the Saturn website collect, why, and the choices you have.",
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main" className="page">
      <div className="page-head">
        <h1>Privacy Policy</h1>
        <p className="page-sub">What we collect, why we collect it, and the choices you have.</p>
        <p className="page-date">Last updated 6 October 2026</p>
      </div>

      <div className="prose">
        <p>Saturn is made by Yavqo. This policy covers the Saturn website and the Saturn browser, including its assistant, Zarah. For a shorter overview of how we think about privacy, read <Link href="/approach">our approach</Link>.</p>

        <h2>Information we collect</h2>

        <h3>On this website</h3>
        <ul>
          <li><strong>Your email address,</strong> if you subscribe to Saturn news. We use it to send you a confirmation email and news about Saturn.</li>
          <li><strong>Technical data</strong> that our hosting provider receives when you load a page, such as your IP address, browser type and the page requested. We use it to keep the site running and protect it from abuse.</li>
        </ul>
        <p>We do not use advertising or analytics cookies. See <Link href="/cookies">Cookies</Link>.</p>

        <h3>In the Saturn browser</h3>
        <ul>
          <li><strong>Your browsing data,</strong> such as history, bookmarks and passwords, stays on your device unless you choose to sync it.</li>
          <li><strong>Zarah requests.</strong> When you ask Zarah a question, your question and the content of the page you are on are processed to write the answer. Zarah does not read pages in the background.</li>
        </ul>

        <h2>How we use information</h2>
        <ul>
          <li>To send the emails you asked for, and nothing else.</li>
          <li>To provide, secure and improve Saturn and Zarah.</li>
          <li>To answer questions you send us.</li>
          <li>To meet our legal obligations.</li>
        </ul>
        <p>We do not sell your personal information, and we do not use your browsing history to show you ads.</p>

        <h2>Who we share it with</h2>
        <p>We use a small number of service providers to run Saturn. They may only use your information to provide their service to us.</p>
        <ul>
          <li><strong>Resend,</strong> which stores subscriber email addresses and sends our emails.</li>
          <li><strong>Our hosting provider,</strong> which serves this website.</li>
        </ul>
        <p>We may also share information if the law requires it.</p>

        <h2>Email</h2>
        <p>Every email we send includes a link to unsubscribe. When you unsubscribe, we stop sending news to that address. You can also ask us to delete your email address entirely.</p>

        <h2>How long we keep it</h2>
        <p>We keep your email address until you unsubscribe or ask us to delete it. Technical logs are kept for a short period, then deleted.</p>

        <h2>Your rights</h2>
        <p>Depending on where you live, you may have the right to access the personal information we hold about you, correct it, delete it, object to how we use it, or ask for a copy. To use any of these rights, <Link href="/contact">contact us</Link>. If you are unhappy with how we handle your request, you can complain to your local data protection authority.</p>

        <h2>Children</h2>
        <p>Saturn is not aimed at children under 13, and we do not knowingly collect their information.</p>

        <h2>International transfers</h2>
        <p>Our providers may process information in countries other than your own. Where this happens, we take steps to make sure your information stays protected.</p>

        <h2>Changes to this policy</h2>
        <p>If we change this policy in a way that matters, we will update the date at the top of this page and tell you in the browser or by email.</p>

        <h2>Contact us</h2>
        <p>Questions about this policy? <Link href="/contact">Contact us</Link>.</p>
      </div>
    </main>
  );
}
