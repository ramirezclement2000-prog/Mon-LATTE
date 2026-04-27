"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const heroGallery = [
  {
    src: "/images/hero-gallery/hero-terrasse.png",
    alt: "Terrasse MON latte baignée de lumière"
  },
  {
    src: "/images/hero-gallery/hero-interieur-panorama.png",
    alt: "Vue intérieure panoramique du coffee shop MON latte"
  },
  {
    src: "/images/hero-gallery/hero-pergola.png",
    alt: "Pergola et espace extérieur au Port de Leucate"
  },
  {
    src: "/images/hero-gallery/hero-cosy-corner.jpg",
    alt: "Coin cosy MON latte avec assises et lumière naturelle"
  }
] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "11%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <div
      ref={ref}
      className="mx-auto grid min-h-[calc(100dvh-6rem)] max-w-7xl items-start gap-7 pt-1 sm:gap-10 sm:pt-3 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-12 lg:pt-8"
    >
      <motion.div className="relative z-10 max-w-xl">
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
          <span className="h-px w-10 bg-gold" />
          Port de Leucate
        </p>
        <h1 className="font-serif text-[3.4rem] font-semibold leading-[0.9] text-text sm:text-[3.9rem] lg:text-[5.7rem] xl:text-[6.1rem]">
          Le coffee shop qui rend le sud <span className="italic text-green">irrésistible</span>
        </h1>
        <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-text/64 sm:mt-5 sm:text-base">
          Coffee shop de spécialité, latte art, matcha vibrant et recettes inclusives dans une adresse
          cosy, premium et franchement photogénique.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="#menu"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-green px-6 text-xs font-bold uppercase text-white shadow-2xl shadow-green/10 transition hover:-translate-y-0.5 hover:bg-text sm:w-auto"
          >
            Voir la carte
          </a>
          <a
            href="#values"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-text/10 bg-white/45 px-6 text-xs font-bold uppercase text-text backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-gold/40 hover:text-green sm:w-auto"
          >
            Notre vision
          </a>
        </div>

      </motion.div>

      <div className="relative min-h-[42vh] sm:min-h-[54vh] lg:h-full lg:min-h-0">
        <motion.figure
          style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
          className="absolute inset-0 overflow-hidden border border-white/55 bg-white/30 p-2 shadow-2xl shadow-green/10 sm:p-3"
        >
          <div className="grid h-full grid-cols-2 grid-rows-2 gap-2 sm:gap-3">
            {heroGallery.map((image, index) => (
              <div key={image.src} className="relative overflow-hidden bg-[#efe8de]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index < 2}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-text/10 via-transparent to-white/8" />
              </div>
            ))}
          </div>
        </motion.figure>
      </div>
    </div>
  );
}
