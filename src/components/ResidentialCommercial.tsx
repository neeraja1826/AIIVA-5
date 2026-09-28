import React from 'react';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';
import { segments } from '../data/site';

export function ResidentialCommercial() {
  if (segments.length === 0) return null;
  return (
    <section aria-label="Residential and commercial" className="bg-warm py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2 lg:px-8">
        {segments.map((seg, i) =>
        <Reveal key={seg.title} delay={i * 0.08}>
            <article className="group relative h-[520px] overflow-hidden rounded-[20px] bg-ink md:h-[680px]">
              <SafeImage
              src={seg.image}
              alt={`${seg.title} automation`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]" />
            
              <div className="absolute inset-0 bg-ink/35" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white transition-transform duration-300 ease-out group-hover:-translate-y-1.5 md:p-10">
                <span className="block h-0.5 w-10 bg-brand transition-[width] duration-300 ease-out group-hover:w-24" aria-hidden="true" />
                <h2 className="mt-6 font-display text-5xl font-black uppercase tracking-tight md:text-6xl">{seg.title}</h2>
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {seg.items.map((item) =>
                <li key={item} className="text-sm font-medium text-white/90">
                      {item}
                    </li>
                )}
                </ul>
              </div>
            </article>
          </Reveal>
        )}
      </div>
    </section>);

}