import React from 'react';
import { SafeImage } from './SafeImage';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { directors } from '../data/directors';

export function Directors() {
  const visible = directors.filter((d) => d.name && d.role);
  if (visible.length === 0) return null;
  return (
    <section aria-labelledby="directors-title" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="directors-title">
          <SectionHeading label="10 / Leadership" lines={['The people', 'behind AIIVA.']} size="lg" />
        </div>
        <div className="mt-16 grid border-t border-ink md:grid-cols-2">
          {visible.map((d, i) =>
          <Reveal key={d.id} delay={i * 0.08} className={`py-10 md:py-14 ${i === 0 ? 'md:pr-12' : 'border-t border-line md:border-l md:border-t-0 md:pl-12'}`}>
              <article className="flex flex-col gap-8 sm:flex-row sm:items-start">
                {d.photo &&
              <SafeImage src={d.photo} alt={d.name} loading="lazy" className="h-40 w-32 shrink-0 rounded-2xl object-cover" />
              }
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">{d.role}</p>
                  <h3 className="mt-4 font-display text-3xl font-extrabold uppercase leading-[1] tracking-tight text-ink md:text-4xl">
                    {d.name.split(' ').map((part) =>
                  <span key={part} className="block">
                        {part}
                      </span>
                  )}
                  </h3>
                  {d.focus.length > 0 &&
                <ul className="mt-8 flex flex-wrap gap-2">
                      {d.focus.map((f) =>
                  <li key={f} className="rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-ink-soft">
                          {f}
                        </li>
                  )}
                    </ul>
                }
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}