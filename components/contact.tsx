"use client";

import { useState } from "react";
import Image from "next/image";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
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
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-card/70">
            Planifions
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-balance lg:text-5xl">
            Organisons quelque chose d'inoubliable
          </h2>
          <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-card/80">
            Qu'il s'agisse d'un dîner en tête-à-tête ou d'une fête réunissant
            des centaines de personnes, nous serions ravis d'en savoir plus.
            Contactez-nous directement ou envoyez-nous une demande ci-dessous.
          </p>

          {submitted ? (
            <div className="mt-10 border border-card/30 px-6 py-8">
              <p className="font-serif text-2xl font-light">Thank you.</p>
              <p className="mt-2 font-sans text-sm text-card/80">
                Votre demande a bien été transmise à notre équipe. Nous vous
                répondrons sous peu.
              </p>
            </div>
          ) : (
            <form
              className="mt-10 flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Event date" name="date" type="date" />
                <Field label="Guests" name="guests" type="number" />
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
                  className="border-0 border-b border-card/30 bg-transparent py-2 font-sans text-sm text-card placeholder:text-card/40 focus:border-card focus:outline-none"
                  placeholder="Occasion, location, style…"
                />
              </div>
              <button
                type="submit"
                className="mt-3 self-start bg-card px-10 py-3.5 font-sans text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Envoyer la demande
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
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
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
        className="border-0 border-b border-card/30 bg-transparent py-2 font-sans text-sm text-card placeholder:text-card/40 focus:border-card focus:outline-none [color-scheme:dark]"
      />
    </div>
  );
}
