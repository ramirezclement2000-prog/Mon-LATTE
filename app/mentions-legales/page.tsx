import type { Metadata } from "next";
import Link from "next/link";
import { LegalFooter } from "@/components/LegalFooter";

export const metadata: Metadata = {
  title: "Mentions légales | MON latte",
  description: "Mentions légales du site MON latte."
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-cream bg-paper-grain px-4 py-5 text-text sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100dvh-2.5rem)] max-w-4xl flex-col">
        <header className="flex items-center justify-between gap-4 rounded-full border border-gold/22 bg-[linear-gradient(100deg,rgba(250,247,242,0.94),rgba(246,238,227,0.88))] px-4 py-3 shadow-2xl shadow-text/5 backdrop-blur-2xl">
          <Link href="/" className="font-serif text-2xl font-semibold text-green">
            MON latte
          </Link>
          <Link
            href="/politique-confidentialite"
            className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-text/55 hover:text-green"
          >
            Confidentialité
          </Link>
        </header>

        <article className="my-10 border border-white/65 bg-white/52 p-5 shadow-2xl shadow-green/5 sm:my-14 sm:p-8 lg:p-10">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
            <span className="h-px w-10 bg-gold" />
            Informations légales
          </p>
          <h1 className="font-serif text-[3rem] font-semibold leading-[0.9] text-text sm:text-[4.6rem]">
            Mentions <span className="italic text-green">légales</span>.
          </h1>

          <div className="mt-8 grid gap-7 text-sm leading-7 text-text/68 sm:text-base sm:leading-8">
            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Éditeur du site</h2>
              <p className="mt-3">
                Le site est édité par MON latte, projet de coffee shop de spécialité situé au
                Port de Leucate, France.
              </p>
              <p className="mt-3">
                Contact :{" "}
                <a href="mailto:contact@monlatte.fr" className="font-semibold text-green underline">
                  contact@monlatte.fr
                </a>
              </p>
              <p className="mt-3">
                Les informations administratives définitives de l&apos;éditeur, notamment la forme
                juridique, le numéro d&apos;immatriculation et l&apos;adresse du siège social, seront
                complétées dès l&apos;immatriculation effective de l&apos;activité.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Directeur de publication</h2>
              <p className="mt-3">MON latte, représenté par le porteur du projet.</p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Hébergement</h2>
              <p className="mt-3">
                Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
                États-Unis.
              </p>
              <p className="mt-3">
                Site de l&apos;hébergeur :{" "}
                <a
                  href="https://vercel.com"
                  rel="noreferrer"
                  target="_blank"
                  className="font-semibold text-green underline"
                >
                  vercel.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Propriété intellectuelle</h2>
              <p className="mt-3">
                Les textes, visuels, photographies, éléments graphiques, logo et identité MON latte
                présents sur ce site sont protégés. Toute reproduction, adaptation ou diffusion sans
                autorisation préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Données personnelles</h2>
              <p className="mt-3">
                Les modalités de collecte et de traitement des données personnelles sont détaillées
                dans la{" "}
                <Link href="/politique-confidentialite" className="font-semibold text-green underline">
                  politique de confidentialité
                </Link>
                .
              </p>
            </section>
          </div>
        </article>

        <LegalFooter />
      </div>
    </main>
  );
}
