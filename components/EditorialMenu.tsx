"use client";

import Image from "next/image";
import { menuCategories, menuItems, type MenuItem } from "@/lib/menu";

const shapeClass: Record<MenuItem["shape"], string> = {
  circle: "mask-circle",
  organicA: "mask-organic-a",
  organicB: "mask-organic-b",
  organicC: "mask-organic-c"
};

export function EditorialMenu() {
  return (
    <div className="mx-auto max-w-7xl py-1 sm:py-2">
      <header className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
        <p className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase text-gold">
          <span className="h-px w-10 bg-gold" />
          Signatures
          <span className="h-px w-10 bg-gold" />
        </p>
        <h2 className="font-serif text-[3.3rem] font-semibold leading-[0.9] text-text sm:text-6xl lg:text-[5.9rem]">
          Les coups de <span className="italic text-green">cœur</span>
        </h2>
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2 text-[0.65rem] font-bold uppercase text-green sm:mt-7 sm:text-[0.68rem]">
          {["laits végétaux", "sans lactose", "froid ou chaud", "signature maison"].map((label) => (
            <span key={label} className="rounded-full border border-green/18 bg-green/8 px-3 py-2">
              {label}
            </span>
          ))}
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        {menuItems.map((item) => (
          <article
            key={item.title}
            className="group grid gap-4 border border-gold/16 bg-white/46 p-4 shadow-2xl shadow-green/5 backdrop-blur-xl sm:grid-cols-[190px_1fr] sm:items-center sm:gap-5 sm:p-6"
          >
            <figure
              className={`${shapeClass[item.shape]} relative mx-auto aspect-[0.92] w-[min(68vw,210px)] overflow-hidden border border-white/60 bg-white/35 p-2 shadow-2xl shadow-green/8 sm:mx-0 sm:w-[190px]`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[inherit]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 190px, 62vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </figure>

            <div className="relative z-10">
              <div className="flex flex-wrap items-end gap-x-4 gap-y-1">
                <h3 className="font-serif text-[1.95rem] font-semibold leading-[0.95] text-text sm:text-[2.6rem]">
                  {item.title}
                </h3>
                <span className="font-serif text-[1.75rem] italic leading-none text-gold sm:text-[2rem]">
                  {item.price}
                </span>
              </div>
              <p className="mt-2 font-serif text-[1rem] italic leading-snug text-green sm:text-[1.15rem]">
                {item.note}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-text/62 sm:text-[0.96rem]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 border-t border-gold/18 pt-10 sm:mt-24 sm:pt-14">
        <div>
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-gold">
              <span className="h-px w-10 bg-gold" />
              Carte complète
            </p>
            <h3 className="font-serif text-[3.2rem] font-semibold leading-[0.9] text-text sm:text-6xl lg:text-[4.9rem]">
              Tout le menu, sans détour.
            </h3>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-2">
          {menuCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-lg border border-gold/16 bg-white/48 p-4 shadow-2xl shadow-green/5 backdrop-blur-xl sm:p-6"
            >
              <div className="mb-4 flex items-end justify-between gap-4 border-b border-gold/14 pb-4 sm:mb-5">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase text-gold">
                    {category.eyebrow}
                  </p>
                  <h4 className="mt-2 font-serif text-[2rem] font-semibold leading-none text-text sm:text-4xl">
                    {category.title}
                  </h4>
                </div>
              </div>

              <div className="divide-y divide-gold/12">
                {category.items.map((entry) => (
                  <div
                    key={entry.name}
                    tabIndex={entry.hoverImage ? 0 : undefined}
                    className="group/entry relative overflow-hidden py-4 outline-none"
                  >
                    <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                      <div className="relative z-10 flex min-w-0 items-start gap-3 lg:gap-0">
                        {entry.hoverImage ? (
                          <>
                            <figure className="mt-0 hidden w-0 shrink-0 overflow-hidden rounded-[22px] border border-white/70 bg-white/45 p-1 opacity-0 shadow-2xl shadow-green/10 transition-none group-hover/entry:mr-4 group-hover/entry:w-24 group-hover/entry:opacity-100 group-hover/entry:transition-all group-hover/entry:duration-500 group-focus/entry:mr-4 group-focus/entry:w-24 group-focus/entry:opacity-100 group-focus/entry:transition-all group-focus/entry:duration-500 lg:block">
                              <div className="relative aspect-[0.92] overflow-hidden rounded-[18px]">
                                <Image
                                  src={entry.hoverImage}
                                  alt={entry.hoverAlt ?? entry.name}
                                  fill
                                  sizes="96px"
                                  className="object-cover"
                                />
                              </div>
                            </figure>
                            <figure className="mt-0 w-[92px] shrink-0 self-start overflow-hidden rounded-[20px] border border-white/70 bg-white/40 p-1 shadow-2xl shadow-green/8 sm:w-[104px] lg:hidden">
                              <div className="relative aspect-[0.92] overflow-hidden rounded-[16px]">
                                <Image
                                  src={entry.hoverImage}
                                  alt={entry.hoverAlt ?? entry.name}
                                  fill
                                  sizes="(min-width: 640px) 104px, 92px"
                                  className="object-cover"
                                />
                              </div>
                            </figure>
                          </>
                        ) : null}
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-text transition group-hover/entry:text-green group-focus/entry:text-green">
                            {entry.name}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-text/56">{entry.detail}</p>
                          {entry.benefit ? (
                            <div className="mt-2 flex max-w-md flex-wrap items-center gap-2">
                              <span className="rounded-full border border-green/20 bg-green/10 px-2.5 py-1 text-[0.66rem] font-bold uppercase tracking-[0.08em] text-green sm:text-[0.7rem]">
                                {entry.benefitTag}
                              </span>
                              <span className="text-[0.77rem] font-medium leading-5 text-text/62 sm:text-[0.82rem]">
                                {entry.benefit}
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <p className="relative z-20 font-serif text-[1.75rem] italic leading-none text-gold sm:text-right sm:text-2xl">
                        {entry.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
