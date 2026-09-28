import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { company, whyWords } from '../data/site';

const ease = [0.23, 1, 0.32, 1] as const;

export function WhyAIIVA() {
  const reduce = useReducedMotion();
  if (whyWords.length === 0) return null;
  return (
    <section aria-labelledby="why-title" className="bg-warm py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <p id="why-title" className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            09 / Why AIIVA
          </p>
          <p className="mt-8 max-w-sm text-lg leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">Our focus:</span> {company.focusStatement}
          </p>
        </div>
        <ul className="lg:col-span-8">
          {whyWords.map((w, i) =>
          <li key={w} className="overflow-hidden border-b border-line py-3 first:pt-0 md:py-4">
              <motion.span
              className={`block font-display text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl ${
              i % 2 === 1 ? 'text-brand' : 'text-ink'}`
              }
              initial={reduce ? false : { y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: i * 0.05, ease }}>
              
                {w}
              </motion.span>
            </li>
          )}
        </ul>
      </div>
    </section>);

}