import React from 'react';
import { SectionHeading } from './SectionHeading';
import { testimonials } from '../data/projects';

// Renders only when real testimonials exist.
export function Testimonials() {
  const valid = testimonials.filter((t) => t.quote && t.author);
  if (valid.length === 0) return null;
  return (
    <section className="bg-white py-24 md:py-36" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading label="Clients" lines={['In their words.']} />
        <ul className="mt-14 grid gap-10 md:grid-cols-2">
          {valid.map((t) =>
          <li key={t.id} className="border-l-2 border-brand pl-6">
              <blockquote className="text-xl leading-relaxed text-ink">“{t.quote}”</blockquote>
              <p className="mt-4 text-sm font-semibold text-ink">{t.author}</p>
              {t.context && <p className="text-sm text-ink-muted">{t.context}</p>}
            </li>
          )}
        </ul>
      </div>
    </section>);

}