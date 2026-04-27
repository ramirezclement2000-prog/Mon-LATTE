import Image from "next/image";
import { storyHighlights, storyIntro, storyMilestones } from "@/lib/story";

export function StorySection() {
  return (
    <div className="mx-auto grid min-h-0 max-w-7xl items-start gap-8 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-12">
      <div>
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
          <span className="h-px w-10 bg-gold" />
          {storyIntro.eyebrow}
        </p>
        <h2 className="max-w-3xl font-serif text-[3.2rem] font-semibold leading-[0.9] text-text sm:text-6xl lg:text-[5.6rem]">
          {storyIntro.title} <span className="italic text-green">{storyIntro.accent}</span>.
        </h2>

        <div className="mt-5 grid gap-4 sm:mt-6">
          {storyIntro.paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-xl text-[0.98rem] leading-7 text-text/62 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {storyHighlights.map((item) => (
            <article
              key={item.label}
              className="border border-gold/18 bg-white/44 px-4 py-4 shadow-2xl shadow-green/5 backdrop-blur-xl sm:py-5"
            >
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-gold">
                {item.label}
              </p>
              <p className="mt-2 font-serif text-[1.45rem] font-semibold leading-tight text-text sm:text-[1.58rem]">
                {item.value}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:gap-5 lg:h-full lg:grid-rows-[auto_1fr]">
        <figure className="relative overflow-hidden rounded-[2rem] border border-white/65 bg-white/40 p-2 shadow-2xl shadow-green/10 sm:rounded-[2.3rem]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] sm:aspect-[18/10] sm:rounded-[2rem]">
            <Image
              src="/images/hero-gallery/hero-interieur-panorama.jpg"
              alt="Intérieur MON latte au Port de Leucate"
              fill
              quality={78}
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-text/16 via-transparent to-white/12" />
          </div>
        </figure>

        <div className="grid gap-3 sm:gap-4">
          {storyMilestones.map((milestone) => (
            <article
              key={milestone.step}
              className="relative border border-gold/16 bg-[#fffdf8]/72 p-4 pl-14 shadow-2xl shadow-green/5 sm:p-5 sm:pl-16"
            >
              <span className="absolute left-4 top-4 font-serif text-[1.65rem] italic leading-none text-gold sm:left-5 sm:top-5 sm:text-[1.85rem]">
                {milestone.step}
              </span>
              <h3 className="font-serif text-[1.55rem] font-semibold leading-none text-text sm:text-[1.75rem]">
                {milestone.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-text/62 sm:text-[0.98rem]">
                {milestone.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
