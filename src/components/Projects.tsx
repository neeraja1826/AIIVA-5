import React from 'react';
import { SafeImage } from './SafeImage';
import { SectionHeading } from './SectionHeading';
import { projects } from '../data/projects';

// Renders only when real project data exists. Fields that are missing are simply omitted.
export function Projects() {
  const complete = projects.filter((p) => p.name && p.image);
  if (complete.length === 0) return null;
  return (
    <section id="projects" className="bg-warm py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading label="Projects" lines={['Completed', 'projects.']} size="lg" />
        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {complete.map((p) =>
          <li key={p.id}>
              <SafeImage src={p.image} alt={p.name} loading="lazy" className="aspect-[4/3] w-full rounded-[20px] object-cover" />
              <h3 className="mt-5 font-display text-2xl font-bold uppercase text-ink">{p.name}</h3>
              {(p.type || p.location) &&
            <p className="mt-1 text-sm text-brand">{[p.type, p.location].filter(Boolean).join(' · ')}</p>
            }
              {p.summary && <p className="mt-3 text-ink-soft">{p.summary}</p>}
            </li>
          )}
        </ul>
      </div>
    </section>);

}