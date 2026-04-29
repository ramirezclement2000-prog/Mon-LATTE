import Image from "next/image";
import Link from "next/link";
import { LegalFooter } from "@/components/LegalFooter";

export default function Contact() {
  return (
    <main className="min-h-screen bg-cream bg-paper-grain px-4 py-5 text-text sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100dvh-2.5rem)] max-w-5xl flex-col">
        <header className="flex items-center justify-between gap-4 rounded-full border border-gold/22 bg-[linear-gradient(100deg,rgba(250,247,242,0.94),rgba(246,238,227,0.88))] px-3 py-2 shadow-2xl shadow-text/5 backdrop-blur-2xl sm:px-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-[10px] bg-transparent">
              <Image
                src="/images/mon-latte-logo.png"
                alt=""
                fill
                priority
                sizes="48px"
                className="object-contain mix-blend-multiply contrast-110 saturate-90"
              />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block font-serif text-2xl font-semibold text-green">MON latte</span>
              <span className="block text-[0.64rem] font-semibold uppercase text-text/48">
                Coffee shop
              </span>
            </span>
          </Link>
        </header>

        <section className="grid flex-1 items-center gap-8 py-12 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
              <span className="h-px w-10 bg-gold" />
              Contact
            </p>
            <h1 className="font-serif text-[3.1rem] font-semibold leading-[0.9] text-text sm:text-[5rem]">
              Parlons <span className="italic text-green">café</span>.
            </h1>
            <p className="mt-5 max-w-xl text-[1rem] leading-7 text-text/66 sm:text-[1.08rem] sm:leading-8">
              Une question, une collaboration, un événement ou juste une envie de dire bonjour :
              l&apos;équipe MON latte vous répondra avec plaisir.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:contact@monlatte.fr"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-green px-6 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-2xl shadow-green/10 transition hover:-translate-y-0.5 hover:bg-text"
              >
                contact@monlatte.fr
              </a>
              <Link
                href="/preview#events"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-text/10 bg-white/45 px-6 text-xs font-bold uppercase tracking-[0.08em] text-text backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-gold/40 hover:text-green"
              >
                Voir l&apos;événementiel
              </Link>
            </div>
          </div>

          <figure className="relative min-h-[360px] overflow-hidden border border-white/55 bg-white/30 p-2 shadow-2xl shadow-green/10 sm:min-h-[520px] sm:p-3">
            <div className="relative h-full min-h-[340px] overflow-hidden">
              <Image
                src="/images/hero-gallery/hero-cosy-corner.jpg"
                alt="Ambiance lumineuse MON latte au Port de Leucate"
                fill
                quality={78}
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text/20 via-transparent to-white/10" />
            </div>
          </figure>
        </section>

        <LegalFooter />
      </div>
    </main>
  );
}
