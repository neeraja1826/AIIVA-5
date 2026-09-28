import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SafeImage } from './SafeImage';
import { SectionHeading } from './SectionHeading';
import { buildTypes } from '../data/site';

const ease = [0.23, 1, 0.32, 1] as const;

export function NewConstructionRetrofit() {
  const reduce = useReducedMotion();
  if (buildTypes.length === 0) return null;
  return (
    <section aria-labelledby="build-title" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="build-title">
          <SectionHeading label="08 / Any Stage" lines={['Build new.', 'Upgrade existing.']} size="lg" />
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-8">
          {buildTypes.map((b, i) =>
          <article key={b.title} className={i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-40'}>
              <motion.div
              className="overflow-hidden rounded-[20px] bg-sand"
              initial={reduce ? false : { clipPath: i === 0 ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 100%)' }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease }}>
              
                <SafeImage
                src={b.image}
                alt={b.title}
                loading="lazy"
                className={`w-full object-cover ${i === 0 ? 'aspect-[4/3]' : 'aspect-[4/5]'}`} />
              
              </motion.div>
              <div className="mt-6 flex items-start gap-5">
                <span className="mt-4 h-px w-10 shrink-0 bg-brand" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink">{b.title}</h3>
                  <p className="mt-2 max-w-sm text-base leading-relaxed text-ink-soft">{b.description}</p>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}