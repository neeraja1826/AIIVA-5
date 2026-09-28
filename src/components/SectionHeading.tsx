import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  lines: string[];
  intro?: string;
  tone?: 'light' | 'dark';
  size?: 'md' | 'lg';
  className?: string;
}

const ease = [0.23, 1, 0.32, 1] as const;

export function SectionHeading({ label, lines, intro, tone = 'light', size = 'md', className = '' }: SectionHeadingProps) {
  const reduce = useReducedMotion();
  const dark = tone === 'dark';
  return (
    <div className={className}>
      {label &&
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          <span className="h-px w-8 bg-brand" aria-hidden="true" />
          {label}
        </p>
      }
      <h2
        className={`mt-5 font-display font-extrabold uppercase leading-[0.95] tracking-tight ${
        size === 'lg' ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-3xl md:text-5xl'} ${
        dark ? 'text-white' : 'text-ink'}`}>
        
        {lines.map((line, i) =>
        <span key={line} className="block overflow-hidden pb-1">
            <motion.span
            className="block"
            initial={reduce ? false : { y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.3, delay: i * 0.06, ease }}>
            
              {line}
            </motion.span>
          </span>
        )}
      </h2>
      {intro &&
      <p className={`mt-6 max-w-xl text-base leading-relaxed md:text-lg ${dark ? 'text-white/70' : 'text-ink-soft'}`}>{intro}</p>
      }
    </div>);

}