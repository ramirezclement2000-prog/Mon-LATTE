import Image from "next/image";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const previewImages = [
  {
    src: "/images/hero-gallery/hero-cosy-corner.jpg",
    alt: "Ambiance lumineuse et cosy de l'univers MON latte",
    className: "col-span-2 min-h-[230px] sm:min-h-[300px]"
  },
  {
    src: "/images/latte-art-mug-hero.jpg",
    alt: "Latte art MON latte en préparation",
    className: "min-h-[180px] sm:min-h-[220px]"
  },
  {
    src: "/images/matcha-fraise.jpg",
    alt: "Boisson signature colorée en préparation",
    className: "min-h-[180px] sm:min-h-[220px]"
  }
] as const;

const signals = [
  "coffee shop de spécialité",
  "lumière du sud",
  "recettes en coulisses",
  "ouverture prochaine"
];

export function ComingSoonPage() {
  return (
    <main className="min-h-screen max-w-[100vw] overflow-x-hidden bg-cream bg-paper-grain px-4 pb-6 pt-4 text-text sm:px-6 sm:pb-8 sm:pt-5 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100dvh-2.5rem)] w-full max-w-[calc(100vw_-_4rem)] flex-col sm:max-w-7xl">
        <header className="flex items-center justify-between gap-4 rounded-full border border-gold/22 bg-[linear-gradient(100deg,rgba(250,247,242,0.94),rgba(246,238,227,0.88))] px-3 py-2 shadow-2xl shadow-text/5 backdrop-blur-2xl sm:px-4">
          <div className="flex min-w-0 items-center gap-3">
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
          </div>
          <span className="hidden rounded-full border border-gold/24 bg-white/48 px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-green shadow-xl shadow-green/5 sm:inline-flex">
            Soon, but worth it
          </span>
        </header>

        <section className="grid w-full min-w-0 flex-1 items-center gap-9 overflow-hidden py-10 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-14">
          <div className="w-full min-w-0 max-w-[calc(100vw_-_4rem)] sm:max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
              <span className="h-px w-10 bg-gold" />
              Ouverture en préparation
            </p>

            <h1 className="font-serif text-[2.86rem] font-semibold leading-[0.9] text-text sm:text-[5rem] lg:text-[6.45rem]">
              Silence, ça <span className="block italic text-green sm:inline">torrifie.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[1rem] leading-7 text-text/66 sm:text-[1.08rem] sm:leading-8">
              MON latte prépare son premier coffee shop avec la douceur du sud, des recettes
              signature en coulisses et ce petit supplément d&apos;âme qui donne envie de rester.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 text-[0.66rem] font-bold uppercase tracking-[0.04em] text-green sm:text-[0.7rem]">
              {signals.map((signal) => (
                <span key={signal} className="rounded-full border border-green/18 bg-green/8 px-3 py-2">
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
              <NewsletterSignup />
              <a
                href="mailto:contact@monlatte.fr"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-text/10 bg-white/45 px-6 text-xs font-bold uppercase tracking-[0.08em] text-text backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-gold/40 hover:text-green sm:w-auto"
              >
                Nous écrire
              </a>
            </div>
          </div>

          <div className="relative w-full min-w-0 max-w-[calc(100vw_-_4rem)] sm:max-w-full">
            <figure className="relative max-w-full overflow-hidden border border-white/55 bg-white/30 p-2 shadow-2xl shadow-green/10 sm:p-3">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {previewImages.map((image, index) => (
                  <div key={image.src} className={`relative overflow-hidden bg-[#efe8de] ${image.className}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      quality={78}
                      sizes={
                        index === 0
                          ? "(min-width: 1024px) 48vw, 92vw"
                          : "(min-width: 1024px) 24vw, 46vw"
                      }
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-text/20 via-transparent to-white/10" />
                  </div>
                ))}
              </div>
            </figure>

            <div className="absolute -bottom-5 left-4 right-4 overflow-hidden border border-white/70 bg-[linear-gradient(135deg,rgba(255,253,248,0.96),rgba(248,239,226,0.9))] p-4 shadow-2xl shadow-green/12 backdrop-blur-2xl sm:left-auto sm:right-8 sm:w-[330px] sm:p-5">
              <div className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-gold/18 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-14 -left-10 h-28 w-28 rounded-full bg-green/10 blur-2xl" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/22 bg-white/70 text-[1.05rem] font-serif italic text-green shadow-xl shadow-gold/10">
                    m
                  </span>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold">
                    Note du comptoir
                  </p>
                </div>
                <p className="font-serif text-[1.72rem] font-semibold leading-[0.95] text-text sm:text-[1.9rem]">
                  La machine <span className="italic text-green">chauffe.</span>
                </p>
                <p className="mt-3 max-w-[16rem] text-[0.86rem] leading-6 text-text/62">
                  Les premières nouvelles arrivent bientôt. Promis, rien ne refroidit ici.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="grid gap-3 border-t border-gold/18 py-4 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-text/45 sm:flex sm:items-center sm:justify-between">
          <span>MON latte · Coffee shop en préparation</span>
          <span>Ouverture prochaine</span>
        </footer>
      </div>
    </main>
  );
}
