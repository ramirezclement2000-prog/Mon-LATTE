import Image from "next/image";
import { ritualSteps } from "@/lib/experience";

export function ExperienceSection() {
  return (
    <div className="mx-auto grid min-h-0 max-w-7xl items-start gap-8 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-12">
      <div className="relative order-2 lg:order-1 lg:h-full">
        <figure className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-2 shadow-2xl shadow-green/10 sm:min-h-[560px] sm:rounded-[42px] lg:h-full lg:min-h-0">
          <div className="absolute inset-2 overflow-hidden rounded-[34px]">
            <Image
              src="/images/latte-art-mug-1.jpg"
              alt="Latte art servi dans un mug, photo éditoriale coffee shop"
              fill
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-text/40 via-transparent to-white/10" />
          </div>
        </figure>
      </div>

      <div className="order-1 lg:order-2">
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
          <span className="h-px w-10 bg-gold" />
          Expérience
        </p>
        <h2 className="max-w-3xl font-serif text-[3.2rem] font-semibold leading-[0.9] text-text sm:text-6xl lg:text-[5.9rem]">
          Le rituel <span className="italic text-green">sensoriel</span> MON latte.
        </h2>
        <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-text/62 sm:mt-6 sm:text-base">
          Une expérience courte, précise, chaleureuse : on commande vite, mais chaque détail
          raconte le café de spécialité, l&apos;inclusion et le plaisir visuel.
        </p>

        <div className="mt-7 grid gap-3 sm:mt-9">
          {ritualSteps.map((step) => (
            <article
              key={step.index}
              className="grid gap-3 border border-gold/18 bg-white/48 p-4 shadow-2xl shadow-green/5 backdrop-blur-xl sm:grid-cols-[5rem_1fr] sm:gap-4 sm:p-5"
            >
              <span className="font-serif text-4xl italic leading-none text-gold">{step.index}</span>
              <div>
                <h3 className="font-serif text-[1.65rem] font-semibold leading-none text-text sm:text-[1.85rem]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-text/60 sm:leading-7">{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2 text-[0.68rem] font-bold uppercase text-green">
          {["sans gluten", "sans lactose", "matcha cérémonie", "ube velvet"].map((label) => (
            <span key={label} className="rounded-full border border-green/18 bg-green/8 px-3 py-2">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
