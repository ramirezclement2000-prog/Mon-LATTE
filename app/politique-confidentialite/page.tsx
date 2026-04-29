import type { Metadata } from "next";
import Link from "next/link";
import { LegalFooter } from "@/components/LegalFooter";

export const metadata: Metadata = {
  title: "Politique de confidentialité | MON latte",
  description: "Politique de confidentialité et informations RGPD du site MON latte."
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-cream bg-paper-grain px-4 py-5 text-text sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100dvh-2.5rem)] max-w-4xl flex-col">
        <header className="flex items-center justify-between gap-4 rounded-full border border-gold/22 bg-[linear-gradient(100deg,rgba(250,247,242,0.94),rgba(246,238,227,0.88))] px-4 py-3 shadow-2xl shadow-text/5 backdrop-blur-2xl">
          <Link href="/" className="font-serif text-2xl font-semibold text-green">
            MON latte
          </Link>
          <Link
            href="/mentions-legales"
            className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-text/55 hover:text-green"
          >
            Mentions légales
          </Link>
        </header>

        <article className="my-10 border border-white/65 bg-white/52 p-5 shadow-2xl shadow-green/5 sm:my-14 sm:p-8 lg:p-10">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
            <span className="h-px w-10 bg-gold" />
            RGPD
          </p>
          <h1 className="font-serif text-[3rem] font-semibold leading-[0.9] text-text sm:text-[4.6rem]">
            Politique de <span className="italic text-green">confidentialité</span>.
          </h1>

          <div className="mt-8 grid gap-7 text-sm leading-7 text-text/68 sm:text-base sm:leading-8">
            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Responsable du traitement</h2>
              <p className="mt-3">
                Le responsable du traitement est MON latte, projet de coffee shop de spécialité au
                Port de Leucate. Pour toute question relative aux données personnelles :{" "}
                <a href="mailto:contact@monlatte.fr" className="font-semibold text-green underline">
                  contact@monlatte.fr
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Données collectées</h2>
              <p className="mt-3">
                Via le formulaire « Être prévenu », MON latte collecte les données que vous
                renseignez : prénom et e-mail, ainsi que, de manière facultative, nom, téléphone,
                code postal et adresse.
              </p>
              <p className="mt-3">
                Les champs facultatifs ne sont pas nécessaires pour recevoir la newsletter. Ils
                permettent uniquement de mieux préparer les invitations locales et les informations
                liées à l&apos;ouverture.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Finalités et base légale</h2>
              <p className="mt-3">
                Les données sont traitées pour gérer la liste d&apos;attente, envoyer les nouvelles
                liées à l&apos;ouverture de MON latte, envoyer les newsletters et prévenir les doublons.
              </p>
              <p className="mt-3">
                La base légale est votre consentement, exprimé par une case à cocher non pré-cochée.
                La date du consentement et le texte accepté sont conservés pour démontrer l&apos;accord.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Durée de conservation</h2>
              <p className="mt-3">
                Les données sont conservées jusqu&apos;au retrait du consentement ou, à défaut, pendant
                une durée maximale de trois ans après le dernier contact émanant de la personne.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Destinataires et hébergement</h2>
              <p className="mt-3">
                Les données sont destinées à MON latte et aux personnes habilitées à gérer la liste
                d&apos;attente et les communications. Elles sont hébergées via les services Vercel,
                utilisés pour le site et le stockage technique du fichier clients.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Vos droits</h2>
              <p className="mt-3">
                Vous pouvez demander l&apos;accès, la rectification, l&apos;effacement, la limitation du
                traitement, l&apos;opposition lorsque applicable, ainsi que le retrait de votre
                consentement à tout moment.
              </p>
              <p className="mt-3">
                Pour exercer vos droits :{" "}
                <a href="mailto:contact@monlatte.fr" className="font-semibold text-green underline">
                  contact@monlatte.fr
                </a>
                . Vous pouvez également introduire une réclamation auprès de la CNIL.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Cookies et mesure d&apos;audience</h2>
              <p className="mt-3">
                À ce stade, le site MON latte n&apos;utilise pas de cookies publicitaires, de cookies
                de mesure d&apos;audience soumis à consentement ni de traceurs de réseaux sociaux.
                Aucun bandeau cookies n&apos;est donc affiché.
              </p>
              <p className="mt-3">
                Si des outils d&apos;audience, de publicité ou des contenus tiers soumis à consentement
                sont ajoutés plus tard, une information dédiée et, si nécessaire, un mécanisme de
                consentement seront mis en place.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-semibold text-text">Mise à jour</h2>
              <p className="mt-3">Dernière mise à jour : 29 avril 2026.</p>
            </section>
          </div>
        </article>

        <LegalFooter />
      </div>
    </main>
  );
}
