import Image from "next/image";
import { partnerCards, partnerTags } from "@/lib/partners";

export function PartnersSection() {
  return (
    <div className="mx-auto grid min-h-0 max-w-7xl items-start gap-8 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.98fr_1.02fr] lg:items-stretch lg:gap-12">
      <div>
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
          <span className="h-px w-10 bg-gold" />
          Nos partenaires
        </p>
        <h2 className="max-w-3xl font-serif text-[3.2rem] font-semibold leading-[0.9] text-text sm:text-6xl lg:text-[5.8rem]">
          Un réseau <span className="italic text-green">local</span>, choisi avec soin.
        </h2>
        <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-text/62 sm:mt-6 sm:text-base">
          MON latte veut avancer avec des maisons proches, sérieuses et engagées. Nous
          privilégions les partenaires locaux, le circuit court et une fabrication maison dès que
          cela sert vraiment la qualité du lieu et de la tasse.
        </p>

        <div className="mt-8 flex max-w-3xl flex-wrap gap-2 text-[0.68rem] font-bold uppercase text-green">
          {partnerTags.map((tag) => (
            <span key={tag} className="rounded-full border border-green/18 bg-green/8 px-3 py-2">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:mt-9">
          {partnerCards.map((card) => (
            <article
              key={card.title}
              className="relative border border-gold/16 bg-[#fffdf8]/72 p-4 shadow-2xl shadow-green/5 sm:p-5"
            >
              {card.logo ? (
                <div className="pointer-events-none absolute right-4 top-4 h-10 w-10 overflow-hidden rounded-full border border-gold/20 bg-white/85 p-1.5 sm:right-5 sm:top-5 sm:h-12 sm:w-12 relative">
                  <Image
                    src={card.logo}
                    alt={card.logoAlt ?? card.title}
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </div>
              ) : null}
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 pr-14 font-serif text-[1.65rem] font-semibold leading-none text-text sm:pr-16 sm:text-[1.9rem]">
                {card.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-text/62 sm:text-base">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative lg:h-full">
        <figure className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-2 shadow-2xl shadow-green/10 sm:min-h-[620px] sm:rounded-[42px] lg:h-full lg:min-h-0">
          <div className="absolute inset-2 overflow-hidden rounded-[34px]">
            <Image
              src="/images/signature-service.jpg"
              alt="Service signature MON latte, pensé avec des partenaires de proximité"
              fill
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-text/22 via-transparent to-white/10" />
          </div>
        </figure>
      </div>
    </div>
  );
}
