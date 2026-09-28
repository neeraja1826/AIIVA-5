import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SafeImage } from './SafeImage';
import { SectionHeading } from './SectionHeading';
import { ProductShowcase } from './ProductShowcase';
import { availableProducts } from '../data/products';

const ease = [0.23, 1, 0.32, 1] as const;
// Label anchor points around the product stage.
const labelSpots = ['left-4 top-6', 'right-4 top-1/3', 'left-4 bottom-8'];

export function FeaturedProducts() {
  const [active, setActive] = useState(0);
  if (availableProducts.length === 0) return null;
  const current = availableProducts[active] ?? availableProducts[0];
  const total = String(availableProducts.length).padStart(2, '0');

  return (
    <section id="products" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading className="lg:col-span-7" label="04 / AIIVA Products" lines={['Smart switches', 'designed for control.']} size="lg" />
          <p className="text-base leading-relaxed text-ink-soft md:text-lg lg:col-span-5">
            Modern control interfaces that bring lighting, fans and connected functions together in a clean, intuitive form.
          </p>
        </div>

        <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-square overflow-hidden rounded-[24px] bg-tile">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 40, scale: 0.97 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -40, scale: 0.97 }}
                    transition={{ duration: 0.28, ease }}>
                    
                    <SafeImage src={current.image} alt={`AIIVA ${current.name}`} className="h-full w-full object-contain" />
                  </motion.div>
                </AnimatePresence>

                {current.capabilities.slice(0, 3).map((cap, i) =>
                <motion.span
                  key={current.id + cap}
                  className={`absolute ${labelSpots[i]} flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 + i * 0.06, ease }}>
                  
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                    {cap}
                  </motion.span>
                )}

                <div className="absolute bottom-6 right-6 font-display text-sm font-semibold text-ink-muted">
                  <span className="text-ink">{String(active + 1).padStart(2, '0')}</span> / {total}
                </div>
              </div>
              <div className="mt-5 flex gap-1.5" aria-hidden="true">
                {availableProducts.map((p, i) =>
                <span key={p.id} className={`h-0.5 flex-1 rounded-full transition-colors duration-200 ${i <= active ? 'bg-brand' : 'bg-line'}`} />
                )}
              </div>
            </div>
          </div>

          <ol className="lg:col-span-5">
            {availableProducts.map((p, i) =>
            <ProductShowcase key={p.id} product={p} index={i} active={i === active} onActive={() => setActive(i)} />
            )}
          </ol>
        </div>
      </div>
    </section>);

}