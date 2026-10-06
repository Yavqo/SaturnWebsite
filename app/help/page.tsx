import type { Metadata } from "next";
import { HelpCentre } from "@/components/HelpCentre";

export const metadata: Metadata = {
  title: "Help Centre | Saturn Browser",
  description: "Answers about installing Saturn, using Zarah, privacy and news emails.",
};

export default function HelpPage() {
  return (
    <main id="main" className="page page-wide">
      <HelpCentre />
    </main>
  );
}
