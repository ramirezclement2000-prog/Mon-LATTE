import Link from "next/link";

type LegalFooterProps = {
  tone?: "light" | "dark";
};

export function LegalFooter({ tone = "light" }: LegalFooterProps) {
  const className =
    tone === "dark"
      ? "border-white/10 text-cream/55 [&_a:hover]:text-gold"
      : "border-gold/18 text-text/45 [&_a:hover]:text-green";

  return (
    <footer
      className={`flex flex-col gap-3 border-t py-4 text-[0.68rem] font-bold uppercase tracking-[0.12em] sm:flex-row sm:items-center sm:justify-between ${className}`}
    >
      <span>MON latte · Coffee shop en préparation</span>
      <nav className="flex flex-wrap gap-x-4 gap-y-2">
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/politique-confidentialite">Confidentialité</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  );
}
