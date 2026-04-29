import Image from "next/image";
import { eventHighlights, eventServices } from "@/lib/event";

export function EventSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid min-h-0 items-start gap-8 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:gap-12">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
            <span className="h-px w-10 bg-gold" />
            Événementiel
          </p>
          <h2 className="max-w-3xl font-serif text-[3.2rem] font-semibold leading-[0.9] text-text sm:text-6xl lg:text-[5.8rem]">
            Le bar à latte <span className="italic text-green">nomade</span> pour vos équipes.
          </h2>

          <div className="mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-3">
            {eventHighlights.map((item) => (
              <div
                key={item.label}
                className="border border-gold/18 bg-white/44 px-4 py-4 shadow-2xl shadow-green/5 backdrop-blur-xl sm:py-5"
              >
                <p className="font-serif text-3xl italic leading-none text-green">{item.value}</p>
                <p className="mt-2 text-[0.68rem] font-bold uppercase text-text/56">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:mt-9">
            {eventServices.map((service) => (
              <article
                key={service.title}
                className="border border-gold/16 bg-[#fffdf8]/70 p-4 shadow-2xl shadow-green/5 sm:p-5"
              >
                <h3 className="font-serif text-[1.65rem] font-semibold leading-none text-text sm:text-[1.9rem]">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-text/62 sm:text-base">
                  {service.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative lg:h-full">
          <figure className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-2 shadow-2xl shadow-green/10 sm:min-h-[620px] sm:rounded-[42px] lg:h-full lg:min-h-0">
            <div className="absolute inset-2 overflow-hidden rounded-[34px]">
              <Image
                src="/images/nomad-latte-bar.png"
                alt="Chariot événementiel MON latte avec bar à latte nomade"
                fill
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text/18 via-transparent to-white/10" />
            </div>
          </figure>
        </div>
      </div>

      <section className="mt-8 border border-gold/18 bg-white/52 p-5 shadow-2xl shadow-green/5 backdrop-blur-xl sm:mt-10 sm:p-7 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-gold">
              <span className="h-px w-10 bg-gold" />
              Contact entreprise
            </p>
            <h3 className="font-serif text-[2.3rem] font-semibold leading-[0.92] text-text sm:text-[2.9rem]">
              Construisons votre <span className="italic text-green">événement</span>.
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-text/65 sm:text-[0.98rem]">
              Décrivez votre besoin en 1 minute : séminaire, lancement, journée d&apos;équipe ou
              activation de marque. Nous revenons vers vous rapidement avec une proposition claire.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
              Réponse par e-mail : contact@monlatte.fr
            </p>
          </div>

          <form
            action="/api/contact"
            method="post"
            className="grid gap-3 sm:grid-cols-2"
          >
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-text/58">
                Entreprise
              </span>
              <input
                name="Entreprise"
                autoComplete="organization"
                required
                className="h-12 w-full border border-gold/20 bg-white/80 px-3 text-[0.96rem] text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                placeholder="Nom de l'entreprise"
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-text/58">
                Contact
              </span>
              <input
                name="Nom"
                autoComplete="name"
                required
                className="h-12 w-full border border-gold/20 bg-white/80 px-3 text-[0.96rem] text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                placeholder="Prénom et nom"
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-text/58">E-mail</span>
              <input
                name="Email"
                type="email"
                autoComplete="email"
                required
                className="h-12 w-full border border-gold/20 bg-white/80 px-3 text-[0.96rem] text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                placeholder="contact@entreprise.fr"
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-text/58">
                Téléphone
              </span>
              <input
                name="Téléphone"
                type="tel"
                autoComplete="tel"
                className="h-12 w-full border border-gold/20 bg-white/80 px-3 text-[0.96rem] text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                placeholder="+33 6 00 00 00 00"
              />
            </label>

            <label className="grid gap-1.5 sm:col-span-2">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-text/58">
                Type d&apos;événement
              </span>
              <select
                name="Type d'événement"
                className="h-12 w-full border border-gold/20 bg-white/80 px-3 text-[0.96rem] text-text outline-none transition focus:border-green/45"
                defaultValue="Séminaire d'entreprise"
              >
                <option>Séminaire d&apos;entreprise</option>
                <option>Lancement de produit</option>
                <option>Journée équipe / RH</option>
                <option>Activation de marque</option>
                <option>Autre projet</option>
              </select>
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-text/58">
                Nombre de personnes
              </span>
              <input
                name="Participants"
                type="number"
                min={1}
                className="h-12 w-full border border-gold/20 bg-white/80 px-3 text-[0.96rem] text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                placeholder="Ex. 80"
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-text/58">
                Date souhaitée
              </span>
              <input
                name="Date"
                type="date"
                className="h-12 w-full border border-gold/20 bg-white/80 px-3 text-[0.96rem] text-text outline-none transition focus:border-green/45"
              />
            </label>

            <label className="grid gap-1.5 sm:col-span-2">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-text/58">
                Lieu
              </span>
              <input
                name="Lieu"
                autoComplete="street-address"
                className="h-12 w-full border border-gold/20 bg-white/80 px-3 text-[0.96rem] text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                placeholder="Ville ou adresse"
              />
            </label>

            <label className="grid gap-1.5 sm:col-span-2">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-text/58">Message</span>
              <textarea
                name="Message"
                required
                rows={5}
                className="w-full border border-gold/20 bg-white/80 px-3 py-3 text-[0.96rem] leading-6 text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                placeholder="Présentez votre besoin, votre timing et vos attentes."
              />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex min-h-11 w-full items-center justify-center border border-green bg-green px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-cream transition hover:bg-[#3f5f3b] sm:w-auto sm:min-w-[240px]"
              >
                Envoyer la demande
              </button>
              <p className="mt-3 text-xs leading-6 text-text/50">
                L&apos;envoi ouvre votre application e-mail avec le formulaire prérempli vers{" "}
                <a
                  className="font-semibold text-green underline-offset-2 hover:underline"
                  href="mailto:contact@monlatte.fr"
                >
                  contact@monlatte.fr
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
