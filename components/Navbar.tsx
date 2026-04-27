"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";

const navItems = [
  { label: "Vision", href: "#values" },
  { label: "L'expérience", href: "#experience" },
  { label: "Notre histoire", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Événementiel", href: "#events" },
  { label: "Réseaux", href: "#socials" },
  { label: "Partenaires", href: "#partners" },
  { label: "Nous trouver", href: "#visit" }
];

export function Navbar() {
  const [activeHash, setActiveHash] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(window.location.hash || "#hero");
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    const details = mobileNavRef.current;

    if (!details) return;

    const syncDetailsState = () => {
      const open = details.open;
      setMenuOpen(open);
      document.body.classList.toggle("menu-open", open);
    };

    const observer = new MutationObserver(syncDetailsState);
    observer.observe(details, { attributes: true, attributeFilter: ["open"] });
    syncDetailsState();

    return () => {
      observer.disconnect();
      document.body.classList.remove("menu-open");
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMobileMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function closeMobileMenu() {
    if (mobileNavRef.current) {
      mobileNavRef.current.open = false;
    }
    setMenuOpen(false);
  }

  function getScrollBehavior(): ScrollBehavior {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return "auto";
    }

    return "smooth";
  }

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const id = href.slice(1);
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", href);
    setActiveHash(href);
    closeMobileMenu();

    const top =
      target.getBoundingClientRect().top + window.scrollY - (window.innerWidth < 768 ? 78 : 96);
    window.scrollTo({ top: Math.max(0, top), behavior: getScrollBehavior() });
  }

  function linkClass(href: string) {
    const isActive = activeHash === href;
    const isMenu = href === "#menu";
    const isVisit = href === "#visit";

    if (isVisit) {
      return `inline-flex h-11 items-center rounded-full border px-5 text-[0.68rem] font-bold uppercase tracking-[0.02em] transition ${
        isActive
          ? "border-green bg-green text-cream shadow-xl shadow-green/20"
          : "border-gold/45 bg-[#f7f1e8] text-green hover:border-green/45 hover:bg-[#f3eade]"
      }`;
    }

    if (isMenu) {
      return `inline-flex h-11 items-center rounded-full border px-4 text-[0.66rem] font-bold uppercase tracking-[0.02em] transition ${
        isActive
          ? "border-gold/45 bg-gold/18 text-text"
          : "border-gold/28 bg-gold/10 text-text/85 hover:border-gold/45 hover:bg-gold/16"
      }`;
    }

    return `inline-flex h-11 items-center rounded-full px-3 text-[0.62rem] font-semibold uppercase tracking-[0.02em] transition ${
      isActive
        ? "bg-green/10 text-green"
        : "text-text/78 hover:bg-white/75 hover:text-green"
    }`;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6">
      <nav className="relative flex h-16 w-full max-w-6xl items-center justify-between rounded-full border border-gold/22 bg-[linear-gradient(100deg,rgba(250,247,242,0.94),rgba(246,238,227,0.88))] px-2 shadow-2xl shadow-text/5 backdrop-blur-2xl sm:h-[74px] sm:px-4">
        <a
          href="#hero"
          className="group flex min-w-0 flex-1 items-center gap-3 rounded-full pl-1 pr-3 sm:pl-0 sm:pr-4 lg:flex-none"
          aria-label="MON latte accueil"
          onClick={(event) => scrollToSection(event, "#hero")}
        >
          <span
            className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-[10px] bg-transparent sm:h-12 sm:w-12"
          >
            <Image
              src="/images/mon-latte-logo.png"
              alt=""
              fill
              sizes="48px"
              priority
              className="object-contain mix-blend-multiply contrast-110 saturate-90"
            />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block font-serif text-2xl font-semibold text-green">
              MON latte
            </span>
            <span className="block text-[0.64rem] font-semibold uppercase text-text/48">
              Coffee shop
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 sm:gap-1.5 lg:flex lg:max-w-none lg:gap-1.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => scrollToSection(event, item.href)}
              className={`whitespace-nowrap ${linkClass(item.href)}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <details
          ref={mobileNavRef}
          className="mobile-nav-details lg:hidden"
        >
          <summary
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="touch-callout-none flex h-12 w-12 list-none items-center justify-center rounded-full border border-gold/25 bg-white/70 text-text shadow-xl shadow-text/5 backdrop-blur-xl transition hover:border-green/30 hover:text-green [&::-webkit-details-marker]:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className="mobile-nav-line-1 absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current transition duration-300"
              />
              <span
                className="mobile-nav-line-2 absolute left-0 top-[7px] h-[1.5px] w-5 rounded-full bg-current transition duration-300"
              />
              <span
                className="mobile-nav-line-3 absolute left-0 top-[14px] h-[1.5px] w-5 rounded-full bg-current transition duration-300"
              />
            </span>
          </summary>

          <div
            className="mobile-nav-backdrop fixed inset-0 z-40 bg-text/22 backdrop-blur-md transition duration-300"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          <div
            id="mobile-nav"
            className="mobile-nav-panel fixed inset-x-3 top-[calc(4.8rem+env(safe-area-inset-top))] z-50 rounded-[2rem] border border-gold/18 bg-[linear-gradient(180deg,rgba(250,247,242,0.98),rgba(246,238,227,0.96))] p-3 shadow-2xl shadow-text/10 backdrop-blur-2xl transition duration-300 sm:inset-x-6"
          >
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isPrimary = item.href === "#menu" || item.href === "#visit";
                const isActive = activeHash === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => scrollToSection(event, item.href)}
                    className={`flex min-h-[54px] items-center justify-between rounded-[1.4rem] border px-4 py-3 font-serif text-[1.6rem] italic leading-none transition ${
                      isPrimary
                        ? isActive
                          ? "border-green bg-green text-cream"
                          : "border-gold/26 bg-white/76 text-green"
                        : isActive
                          ? "border-gold/24 bg-gold/12 text-green"
                          : "border-transparent bg-transparent text-text"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-sm not-italic text-current/50">{item.href === "#visit" ? "Maps" : "→"}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
