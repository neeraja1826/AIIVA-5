import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { steps } from '../data/site';

export function HowItWorks() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] });
  const progress = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0, 1]);
  if (steps.length === 0) return null;

  return (
    <section id="how-it-works" className="bg-sand/60 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="06 / How It Works"
          lines={['How home', 'automation works.']}
          intro="A clear, guided process — from understanding your space to living in it."
          size="lg" />
        

        <ol ref={ref} className="relative mt-20 grid gap-12 pl-10 md:grid-cols-4 md:gap-8 md:pl-0">
          <div className="absolute bottom-2 left-[11px] top-2 w-px bg-line md:bottom-auto md:left-0 md:right-0 md:top-[11px] md:h-px md:w-auto" aria-hidden="true" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-brand md:hidden"
            aria-hidden="true" />
          
          <motion.div
            style={{ scaleX: progress }}
            className="absolute left-0 right-0 top-[11px] hidden h-px origin-left bg-brand md:block"
            aria-hidden="true" />
          
          {steps.map((s, i) =>
          <li key={s.title} className="relative">
              <span className="absolute -left-10 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-brand bg-warm md:static" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-brand" />
              </span>
              <Reveal delay={i * 0.06}>
                <p className="font-display text-sm font-semibold text-brand md:mt-8">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ink">{s.title}</h3>
                <p className="mt-3 max-w-xs text-base leading-relaxed text-ink-soft">{s.description}</p>
              </Reveal>
            </li>
          )}
        </ol>
      </div>
    </section>);

}