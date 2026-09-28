import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SafeImage } from './SafeImage';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { solutions } from '../data/site';
import type { Solution } from '../types/content';

const ease = [0.23, 1, 0.32, 1] as const;
// Asymmetric placement for image-led solutions, applied in order.
const layout = [
'lg:col-span-7 lg:row-span-2 min-h-[420px] lg:min-h-[640px]',
'lg:col-span-5 min-h-[300px]',
'lg:col-span-5 min-h-[300px]',
'lg:col-span-5 min-h-[320px]',
'lg:col-span-7 min-h-[320px]'];


function ImageTile({ s, className, index }: {s: Solution;className: string;index: number;}) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-[20px] bg-sand ${className}`}
      initial={reduce ? false : { clipPath: 'inset(0% 0% 100% 0% round 20px)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 20px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index % 3 * 0.06, ease }}>
      
      <SafeImage
        src={s.image}
        alt={s.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
      
      <div className="absolute bottom-4 left-4 right-4 max-w-sm rounded-2xl bg-white/95 p-5 backdrop-blur md:bottom-5 md:left-5">
        <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink">{s.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.description}</p>
      </div>
    </motion.article>);

}

export function Solutions() {
  const withImages = solutions.filter((s) => s.image);
  const textOnly = solutions.filter((s) => !s.image);
  if (solutions.length === 0) return null;

  return (
    <section id="solutions" className="bg-warm py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading className="lg:col-span-7" label="03 / Solutions" lines={['One home.', 'Many possibilities.']} size="lg" />
          <p className="text-base leading-relaxed text-ink-soft md:text-lg lg:col-span-5">
            From lighting and curtains to security and building systems — every solution is planned to work together.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          {withImages.map((s, i) =>
          <ImageTile key={s.title} s={s} index={i} className={layout[i] ?? 'lg:col-span-6 min-h-[320px]'} />
          )}
        </div>

        {textOnly.length > 0 &&
        <div className="mt-4 grid divide-y divide-line rounded-[20px] bg-white md:grid-cols-3 md:divide-x md:divide-y-0">
            {textOnly.map((s, i) =>
          <Reveal key={s.title} delay={i * 0.05} className="p-8">
                <span className="block h-px w-8 bg-brand" aria-hidden="true" />
                <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
              </Reveal>
          )}
          </div>
        }
      </div>
    </section>);

}