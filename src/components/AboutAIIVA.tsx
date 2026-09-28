import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SafeImage } from './SafeImage';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { company } from '../data/site';
import { images } from '../data/images';

const ease = [0.23, 1, 0.32, 1] as const;

export function AboutAIIVA() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="relative overflow-hidden bg-warm py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-7">
          <SectionHeading label="01 / About AIIVA" lines={['Technology', 'that works', 'around you.']} size="lg" />
          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <Reveal className="space-y-5 text-base leading-relaxed text-ink-soft md:col-span-7 md:text-lg">
              <p className="text-ink">{company.intro}</p>
              <p>{company.offer}</p>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-5">
              <aside className="rounded-[20px] bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Our Focus</p>
                <ul className="mt-5 divide-y divide-line">
                  {company.focus.map((f) =>
                  <li key={f} className="flex items-center gap-3 py-3.5 font-display text-base font-semibold text-ink">
                      <span className="h-px w-4 bg-brand" aria-hidden="true" />
                      {f}
                    </li>
                  )}
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            className="relative h-[420px] overflow-hidden rounded-[20px] md:h-[560px] lg:h-full lg:min-h-[640px]"
            initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}>
            
            <SafeImage
              src={images.about}
              alt="Modern Indian villa with white concrete and teak louvers"
              loading="lazy"
              className="h-full w-full object-cover" />
            
          </motion.div>
          <svg
            className="pointer-events-none absolute -left-6 top-10 hidden h-[80%] w-12 lg:block"
            viewBox="0 0 48 400"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="none">
            
            <motion.path
              d="M24 0 V300 H48"
              stroke="#9A5A2B"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }} />
            
          </svg>
        </div>
      </div>
    </section>);

}