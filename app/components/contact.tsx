"use client";

import { useActionState } from "react";
import Reveal from "./reveal";
import { transmitContact, type ContactState } from "../lib/actions";
import { contactFacts } from "../lib/data";

const initialContactState: ContactState = {
  status: "idle",
  message: "",
};

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    transmitContact,
    initialContactState,
  );

  return (
    <section id="contact" className="flex min-h-[calc(80svh+var(--header-h))] flex-col justify-center border-b-3 border-ink">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-3 border-3 border-ink bg-surface px-3 py-1.5 shadow-nb">
              <span className="h-3 w-3 bg-lime-deep" />
              <span className="text-xs font-bold tracking-[0.2em] text-paper">
                SECTION_05 // INITIATE CONNECTION
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-paper uppercase sm:text-5xl">
              Let&apos;s <span className="bg-lime px-2 text-ink">Link Up</span>
            </h2>
            <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-paper/90">
              Got a project, a wild idea, or a stack worth debating? Drop a
              transmission. I reply fast — usually within a day.
            </p>
            <div className="mt-8 space-y-3">
              {contactFacts.map(([k, v]) => (
                <div key={k} className="flex items-center gap-3 border-2 border-ink bg-surface px-4 py-3 shadow-[3px_3px_0_0_#0a0a0a]">
                  <span className="w-24 text-xs font-bold tracking-widest text-lime-text">
                    {k}
                  </span>
                  <span className="text-sm font-semibold text-paper/80">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            action={formAction}
            className="border-3 border-ink bg-surface p-6 shadow-nb-lg sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="nb-label block text-paper">
                  IDENTIFIER <span className="text-lime-text">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={80}
                  autoComplete="name"
                  placeholder="WHO ARE YOU?"
                  className="nb-input mt-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="nb-label block text-paper">
                  COMMS LINK <span className="text-lime-text">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={160}
                  autoComplete="email"
                  placeholder="YOUR@EMAIL.DEV"
                  className="nb-input mt-2"
                />
              </div>

              <div>
                <label htmlFor="message" className="nb-label block text-paper">
                  PAYLOAD <span className="text-lime-text">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  placeholder="DROP YOUR MESSAGE HERE..."
                  className="nb-input mt-2 resize-y"
                />
              </div>

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <button
                type="submit"
                disabled={pending}
                className="nb-btn nb-btn-active w-full px-6 py-4 text-sm disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending ? "TRANSMITTING..." : "TRANSMIT DATA ↗"}
              </button>

              {state.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`border-2 border-ink px-4 py-3 text-sm font-bold ${
                    state.status === "success"
                      ? "bg-lime text-ink"
                      : state.status === "error"
                        ? "bg-blue text-ink"
                        : "bg-surface text-paper"
                  }`}
                >
                  {state.message}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
