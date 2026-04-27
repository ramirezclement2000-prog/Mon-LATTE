import { socialLinks } from "@/lib/social";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.25" strokeWidth="1.5" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M13.65 20v-6.2h2.08l.31-2.42h-2.39V9.84c0-.7.19-1.18 1.2-1.18H16V6.5c-.19-.03-.86-.08-1.64-.08-1.62 0-2.73.99-2.73 2.8v1.56H9.8v2.42h1.83V20h2.02Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M14.8 4.2c.55 1.58 1.74 2.55 3.4 2.8v2.28c-1.26-.03-2.42-.37-3.4-1.03v5.48c0 3.11-2.37 5.32-5.35 5.32-3.12 0-5.45-2.36-5.45-5.33 0-3.06 2.46-5.48 5.9-5.28v2.38c-2.04-.24-3.44 1.12-3.44 2.9 0 1.58 1.22 2.82 2.95 2.82 1.62 0 2.93-1.14 2.93-2.84V4.2h2.46Z" />
    </svg>
  );
}

const iconByName = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  TikTok: TikTokIcon
} as const;

export function SocialSection() {
  return (
    <div className="mx-auto max-w-7xl py-4">
      <div className="grid gap-5 lg:grid-cols-[0.86fr_0.74fr] lg:items-end lg:gap-8">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
            <span className="h-px w-10 bg-gold" />
            Nos réseaux sociaux
          </p>
          <h2 className="max-w-2xl font-serif text-[3.2rem] font-semibold leading-[0.92] text-text sm:text-[3.9rem] lg:text-[5rem]">
            Rester proches, <span className="italic text-green">même en ligne</span>.
          </h2>
        </div>
        <div className="max-w-lg lg:justify-self-end">
          <p className="border-l border-gold/22 pl-4 text-[0.96rem] leading-7 text-text/64 sm:pl-5 sm:text-[1.02rem] sm:leading-8">
            Instagram, Facebook et TikTok porteront les nouveautés, les collabs, les dates
            événementielles et la vie du coffee shop. Les liens ci-dessous sont déjà
            branchables et pourront être remplacés par vos vraies URL.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 sm:mt-7">
        {socialLinks.map((link) => {
          const Icon = iconByName[link.name];

          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gold/16 bg-white/52 p-5 shadow-2xl shadow-green/5 transition hover:-translate-y-1 hover:border-gold/32 sm:p-6 md:min-h-[178px]"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                    {link.note}
                  </p>
                  <h3 className="mt-3 font-serif text-[1.8rem] font-semibold leading-none text-text sm:text-[2.1rem]">
                    {link.name}
                  </h3>
                  <p className="mt-3 text-sm font-semibold uppercase text-green">{link.handle}</p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-green/16 bg-green/8 text-green transition group-hover:scale-105 sm:h-14 sm:w-14">
                  <Icon />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
