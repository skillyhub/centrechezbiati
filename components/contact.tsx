'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
        {
          method: 'POST',
          headers: { Accept: 'application/json' },

          body: data,
        }
      );

      if (res.status === 429) {
        setError('Trop de tentatives. Veuillez réessayer dans quelques minutes.');
        return;
      }

      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="grid md:grid-cols-2">
        <div className="relative hidden min-h-[520px] md:block">
          <Image
            src="/images/private-dining.png"
            alt="Detail of a styled catering table setting"
            fill
            className="object-cover"
          />
        </div>

        <div className="px-6 py-20 lg:px-16 lg:py-28">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-card/70">Planifions</p>
          <h2 className="mt-4 font-serif text-4xl font-light text-balance lg:text-5xl">
            Organisons quelque chose d'inoubliable
          </h2>
          <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-card/80">
            Qu'il s'agisse d'un dîner en tête-à-tête ou d'une fête réunissant des centaines de
            personnes, nous serions ravis d'en savoir plus. Contactez-nous directement ou
            envoyez-nous une demande ci-dessous.
          </p>

          {submitted ? (
            <div className="mt-10 border border-card/30 px-6 py-8">
              <p className="font-serif text-2xl font-light">Merci.</p>
              <p className="mt-2 font-sans text-sm text-card/80">
                Votre demande a bien été transmise à notre équipe. Nous vous répondrons sous peu.
              </p>
            </div>
          ) : (
            <form className="mt-10 flex flex-col gap-5" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Nouvelle demande — Chez Biati" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" className="hidden" />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nom Complet" name="name" type="text" autoComplete="off" required />
                <Field label="Email" name="email" type="email" autoComplete="off" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Date de l'événement"
                  name="date"
                  type="date"
                  autoComplete="off"
                  min={new Date().toISOString().split('T')[0]}
                />
                <Field
                  label="Invités"
                  min={1}
                  max={10000}
                  autoComplete="off"
                  name="guests"
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="details"
                  className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-card/70"
                >
                  Planifions votre événement
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  autoComplete="off"
                  className="border-0 border-b border-card/30 bg-transparent py-2 font-sans text-sm text-card placeholder:text-card/40 focus:border-card focus:outline-none"
                  placeholder="Occasions, restauration, style…"
                />
              </div>

              {error && <p className="font-sans text-xs text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-3 self-start bg-card px-10 py-3.5 font-sans text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Envoi en cours…' : 'Envoyer la demande'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  min,
  max,
  autoComplete = 'off',
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  min?: number | string;
  max?: number | string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-card/70"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        max={max}
        autoComplete={autoComplete}
        className="border-0 border-b border-card/30 bg-transparent py-2 font-sans text-sm text-card placeholder:text-card/40 focus:border-card focus:outline-none [color-scheme:dark]"
      />
    </div>
  );
}
