export function VisitSection() {
  return (
    <div className="mx-auto grid min-h-0 max-w-7xl items-start gap-8 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      <div>
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
          <span className="h-px w-10 bg-gold" />
          Port de Leucate
        </p>
        <h2 className="max-w-3xl font-serif text-[3.2rem] font-semibold leading-[0.9] text-cream sm:text-6xl lg:text-[5.9rem]">
          Une pause <span className="italic text-gold">face au sud</span>
        </h2>
        <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 text-sm font-semibold uppercase text-gold sm:mt-8 sm:grid-cols-2">
          <span className="border border-gold/20 bg-cream/[0.04] px-4 py-3">8H30 - 18H30</span>
          <span className="border border-gold/20 bg-cream/[0.04] px-4 py-3">Ouvert 7j/7</span>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9">
          <p className="text-base leading-7 text-cream/70 sm:text-lg sm:leading-8">
            MON latte installe son univers au cœur du Port de Leucate : café de spécialité,
            boissons signature, matières chaleureuses et service doux du matin à l&apos;après-midi.
          </p>
          <div className="mt-6 grid gap-3 text-sm font-semibold uppercase text-gold sm:mt-8 sm:grid-cols-2">
            <span className="border border-gold/20 bg-cream/[0.04] px-4 py-3">
              11 370 Leucate
            </span>
            <span className="border border-gold/20 bg-cream/[0.04] px-4 py-3">
              Coffee shop inclusif
            </span>
          </div>
        </div>

        <div className="overflow-hidden bg-white/[0.04] shadow-2xl shadow-black/20">
          <div className="bg-text px-5 py-4">
            <p className="font-serif text-2xl leading-none text-cream">Carte</p>
          </div>

          <div className="relative h-[280px] bg-[#191915] sm:h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.4402107025912!2d3.0368153767242503!3d42.86355190314313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b05ef5714c480b%3A0x78f0b7e36f726026!2sQuai%20de%20l'Angle%2C%2011370%20Leucate!5e0!3m2!1sfr!2sfr!4v1776953480718!5m2!1sfr!2sfr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Carte du Port de Leucate"
              className="h-full w-full border-0 opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
