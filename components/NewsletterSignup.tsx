"use client";

import { FormEvent, useState } from "react";

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
  consent: false
};

export function NewsletterSignup() {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [form, setForm] = useState(initialForm);

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
        <div className="fixed inset-0 z-50 grid place-items-center bg-text/35 px-4 py-6 backdrop-blur-md">
          <div className="relative max-h-[calc(100dvh-3rem)] w-full max-w-2xl overflow-y-auto border border-white/70 bg-[linear-gradient(135deg,rgba(255,253,248,0.98),rgba(248,239,226,0.94))] p-5 shadow-2xl shadow-text/20 sm:p-7">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-text/10 bg-white/70 text-lg leading-none text-text/65 transition hover:border-gold/40 hover:text-green"
              aria-label="Fermer"
            >
              ×
            </button>

            <div className="max-w-xl pr-10">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                Liste privée MON latte
              </p>
              <h2 className="mt-3 font-serif text-[2.2rem] font-semibold leading-none text-text sm:text-[2.8rem]">
                On garde une tasse pour vous.
              </h2>
              <p className="mt-3 text-sm leading-6 text-text/62">
                Laissez vos coordonnées et vous recevrez les premières nouvelles avant
                l&apos;ouverture.
              </p>
            </div>

            <form onSubmit={submit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-green">
                  Prénom
                  <input
                    required
                    name="firstName"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(event) => updateField("firstName", event.target.value)}
                    className="min-h-12 border border-gold/20 bg-white/70 px-4 text-sm font-medium normal-case tracking-normal text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                    placeholder="Clément"
                  />
                </label>

                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-green">
                  Nom
                  <input
                    required
                    name="lastName"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={(event) => updateField("lastName", event.target.value)}
                    className="min-h-12 border border-gold/20 bg-white/70 px-4 text-sm font-medium normal-case tracking-normal text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                    placeholder="Ramirez"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-green">
                  E-mail
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
                  Téléphone
                  <input
                    required
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
                  Code postal
                  <input
                    required
                    name="postalCode"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    value={form.postalCode}
                    onChange={(event) => updateField("postalCode", event.target.value)}
                    className="min-h-12 border border-gold/20 bg-white/70 px-4 text-sm font-medium normal-case tracking-normal text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                    placeholder="11370"
                  />
                </label>

                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-green">
                  Adresse
                  <input
                    required
                    name="address"
                    autoComplete="street-address"
                    value={form.address}
                    onChange={(event) => updateField("address", event.target.value)}
                    className="min-h-12 border border-gold/20 bg-white/70 px-4 text-sm font-medium normal-case tracking-normal text-text outline-none transition placeholder:text-text/35 focus:border-green/45"
                    placeholder="Votre adresse"
                  />
                </label>
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
                  nouvelles liées à l&apos;ouverture et aux newsletters.
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
