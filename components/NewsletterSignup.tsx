"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

type Status = {
  tone: "success" | "error";
  message: string;
} | null;

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  postalCode: "",
  address: "",
  company: "",
  consent: false
};

export function NewsletterSignup() {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [open]);

  function updateField(field: keyof typeof initialForm, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus(null);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const result = (await response.json().catch(() => null)) as { message?: string } | null;

    setPending(false);
    setStatus({
      tone: response.ok ? "success" : "error",
      message:
        result?.message ??
        "Impossible d'enregistrer vos coordonnées pour le moment. Réessayez dans un instant."
    });

    if (response.ok) {
      setForm(initialForm);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-green px-6 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-2xl shadow-green/10 transition hover:-translate-y-0.5 hover:bg-text sm:w-auto"
      >
        Être prévenu
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 overflow-y-auto overscroll-y-contain bg-text/30 px-4 py-4 sm:grid sm:place-items-center sm:py-6 sm:backdrop-blur-md"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-title"
            className="relative mx-auto w-full max-w-2xl border border-white/70 bg-[linear-gradient(135deg,rgba(255,253,248,0.98),rgba(248,239,226,0.94))] p-5 shadow-xl shadow-text/15 sm:p-7 sm:shadow-2xl sm:shadow-text/20"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-text/10 bg-white/80 text-lg leading-none text-text/65 transition hover:border-gold/40 hover:text-green"
              aria-label="Fermer"
            >
              ×
            </button>

            <div className="max-w-xl pr-10">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                Liste privée MON latte
              </p>
              <h2
                id="newsletter-title"
                className="mt-3 font-serif text-[2.2rem] font-semibold leading-none text-text sm:text-[2.8rem]"
              >
                On garde une tasse pour vous.
              </h2>
              <p className="mt-3 text-sm leading-6 text-text/62">
                Laissez vos coordonnées et vous recevrez les premières nouvelles avant
                l&apos;ouverture. Les champs marqués d&apos;un astérisque sont nécessaires.
                Les champs indiqués comme facultatifs restent libres.
              </p>
            </div>

            <form onSubmit={submit} className="mt-6 grid gap-4">
              <input
                type="text"
                name="company"
                autoComplete="off"
                tabIndex={-1}
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-green">
                  Prénom *
                  <span className="sr-only"> obligatoire</span>
                  <input
                    required
                    name="firstName"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(event) => updateField("firstName", event.target.value)}
                    className="min-h-12 border border-gold/20 bg-white/70 px-4 text-sm font-medium normal-case tracking-normal text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                    placeholder="Prénom"
                  />
                </label>

                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-green">
                  <span>
                    Nom <span className="text-text/45">(facultatif)</span>
                  </span>
                  <input
                    name="lastName"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={(event) => updateField("lastName", event.target.value)}
                    className="min-h-12 border border-gold/20 bg-white/70 px-4 text-sm font-medium normal-case tracking-normal text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                    placeholder="Nom"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-green">
                  E-mail *
                  <span className="sr-only"> obligatoire</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className="min-h-12 border border-gold/20 bg-white/70 px-4 text-sm font-medium normal-case tracking-normal text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                    placeholder="bonjour@monlatte.fr"
                  />
                </label>

                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-green">
                  <span>
                    Téléphone <span className="text-text/45">(facultatif)</span>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className="min-h-12 border border-gold/20 bg-white/70 px-4 text-sm font-medium normal-case tracking-normal text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                    placeholder="06 00 00 00 00"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.42fr_1fr]">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-green">
                  Code postal *
                  <span className="sr-only"> obligatoire</span>
                  <input
                    required
                    name="postalCode"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    maxLength={5}
                    autoComplete="postal-code"
                    value={form.postalCode}
                    onChange={(event) => updateField("postalCode", event.target.value)}
                    className="min-h-12 border border-gold/20 bg-white/70 px-4 text-sm font-medium normal-case tracking-normal text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                    placeholder="Code postal"
                  />
                </label>

                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-green">
                  <span>
                    Adresse <span className="text-text/45">(facultatif)</span>
                  </span>
                  <input
                    name="address"
                    autoComplete="street-address"
                    value={form.address}
                    onChange={(event) => updateField("address", event.target.value)}
                    className="min-h-12 border border-gold/20 bg-white/70 px-4 text-sm font-medium normal-case tracking-normal text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                    placeholder="Votre adresse"
                  />
                </label>
              </div>

              <div className="border border-gold/18 bg-white/45 p-4 text-sm leading-6 text-text/62">
                <p>
                  MON latte utilise ces informations pour gérer la liste d&apos;attente, envoyer
                  les nouvelles liées à l&apos;ouverture et, si vous les renseignez, adapter les
                  invitations locales. Vous pouvez retirer votre consentement à tout moment en
                  écrivant à{" "}
                  <a href="mailto:contact@monlatte.fr" className="font-semibold text-green underline">
                    contact@monlatte.fr
                  </a>
                  .
                </p>
              </div>

              <label className="flex items-start gap-3 border border-gold/18 bg-white/45 p-4 text-sm leading-6 text-text/62">
                <input
                  required
                  type="checkbox"
                  checked={form.consent}
                  onChange={(event) => updateField("consent", event.target.checked)}
                  className="mt-1 h-4 w-4 accent-green"
                />
                <span>
                  J&apos;accepte que MON latte conserve mes coordonnées pour m&apos;envoyer les
                  nouvelles liées à l&apos;ouverture et aux newsletters, conformément à la{" "}
                  <Link
                    href="/politique-confidentialite"
                    target="_blank"
                    className="font-semibold text-green underline"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </span>
              </label>

              {status ? (
                <p
                  className={`border px-4 py-3 text-sm font-semibold leading-6 ${
                    status.tone === "success"
                      ? "border-green/20 bg-green/10 text-green"
                      : "border-gold/30 bg-gold/10 text-text"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}

              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-green px-6 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-2xl shadow-green/10 transition hover:-translate-y-0.5 hover:bg-text disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {pending ? "Inscription..." : "Valider mes coordonnées"}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-text/10 bg-white/45 px-6 text-xs font-bold uppercase tracking-[0.08em] text-text transition hover:border-gold/40 hover:text-green"
                >
                  Fermer
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
