"use client";

import Image from "next/image";
import { values, type ValueCard } from "@/lib/values";

const toneClass: Record<ValueCard["tone"], string> = {
  green: "bg-green text-white border-white/10",
  gold: "bg-[#f4eadc] text-text border-gold/25",
  cream: "bg-white/54 text-text border-white/70",
  ink: "bg-text text-cream border-white/10"
};

const imageWrapClass: Record<ValueCard["tone"], string> = {
  green:
    "relative mt-4 aspect-[2.45] w-full overflow-hidden rounded-[1.6rem] border border-white/18 shadow-2xl shadow-text/15",
  gold:
    "relative mt-4 aspect-[2.45] w-full overflow-hidden rounded-[1.6rem] border border-gold/20 shadow-2xl shadow-gold/10",
  cream:
    "relative mt-4 aspect-[2.45] w-full overflow-hidden rounded-[1.6rem] border border-white/70 shadow-2xl shadow-gold/10",
  ink:
    "relative mt-4 aspect-[2.45] w-full overflow-hidden rounded-[1.6rem] border border-white/14 shadow-2xl shadow-black/20"
};

export function BentoValues() {
  return (
    <div className="mx-auto flex min-h-0 max-w-7xl flex-col justify-center md:min-h-[calc(100vh-7rem)]">
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_0.7fr] lg:items-end lg:gap-10">
        <div className="max-w-4xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-gold">
            <span className="h-px w-10 bg-gold" />
            Nos valeurs
          </p>
          <h2 className="max-w-3xl font-serif text-[3.3rem] font-semibold leading-[0.92] text-text sm:text-[3.9rem] lg:text-[5.2rem]">
            Une adresse <span className="italic text-green">inclusive</span>, précise, vivante.
          </h2>
        </div>
        <div className="max-w-md lg:justify-self-end">
          <p className="border-l border-gold/22 pl-4 text-[0.96rem] leading-7 text-text/66 sm:pl-5 sm:text-[1.02rem] sm:leading-8">
            MON latte emprunte la rigueur des interfaces premium et la chaleur d&apos;un lieu de
            quartier : peu de bruit, beaucoup de soin, et une carte qui donne envie de revenir.
          </p>
        </div>
      </div>

      <div className="mb-3 grid overflow-hidden rounded-lg border border-gold/18 bg-white/38 text-xs font-bold uppercase text-text/58 shadow-2xl shadow-green/5 backdrop-blur-xl sm:grid-cols-2">
        {["Torréfaction locale", "Options sans gluten / sans lactose"].map((label) => (
          <span key={label} className="border-b border-gold/12 px-4 py-3 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
            {label}
          </span>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {values.map((value) => (
          <article
            key={value.title}
            onPointerMove={(event) => {
              if (event.pointerType === "touch" || window.innerWidth <= 768) {
                return;
              }
              const rect = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
              event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
            }}
            className={`${toneClass[value.tone]} bento-glow group relative flex min-h-[500px] flex-col overflow-hidden rounded-lg border p-5 shadow-2xl shadow-green/5 sm:min-h-[520px] sm:p-6 lg:p-7`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
            <div className="relative z-10 flex h-full flex-col gap-5">
              <div>
                <h3 className="max-w-xl font-serif text-[2.25rem] font-semibold leading-[0.94] sm:text-[2.8rem] lg:text-[3.3rem]">
                  {value.title}
                </h3>
              </div>
              <figure className={imageWrapClass[value.tone]}>
                <Image
                  src={value.image}
                  alt={value.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 36vw, (min-width: 768px) 44vw, 92vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text/28 via-transparent to-white/8" />
              </figure>
              <div
                className={`mt-auto grid gap-5 ${value.metric ? "sm:grid-cols-[1fr_auto] sm:items-end" : ""}`}
              >
                <p className="max-w-xl text-sm leading-6 opacity-72 sm:text-base sm:leading-7">{value.body}</p>
                {value.metric ? (
                  <span className="font-serif text-[2.6rem] italic leading-none opacity-70 sm:text-4xl">
                    {value.metric}
                  </span>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
