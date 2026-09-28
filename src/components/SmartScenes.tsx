import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { SectionHeading } from './SectionHeading';
import { scenes } from '../data/site';

const ease = [0.23, 1, 0.32, 1] as const;

export function SmartScenes() {
  const [activeId, setActiveId] = useState(scenes[0]?.id);
  if (scenes.length === 0) return null;
  const active = scenes.find((s) => s.id === activeId) ?? scenes[0];

  return (
    <section className="bg-white py-24 md:py-36" aria-labelledby="scenes-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="scenes-title">
          <SectionHeading label="07 / Smart Scenes" lines={['Your routine.', 'Automated.']} size="lg" />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-ink lg:col-span-8 lg:aspect-auto lg:min-h-[560px]">
            <AnimatePresence initial={false}>
              <motion.div
                key={active.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease }}>
                
                <SafeImage
                  src={active.image}
                  alt={`${active.title} scene`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ filter: active.filter }} />
                
              </motion.div>
            </AnimatePresence>
            <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
              Scene · <span className="text-brand">{active.title}</span>
            </div>
          </div>

          <div className="flex flex-col lg:col-span-4">
            <div role="tablist" aria-label="Scenes" className="grid grid-cols-2 gap-2">
              {scenes.map((s) =>
              <button
                key={s.id}
                role="tab"
                aria-selected={s.id === active.id}
                onClick={() => setActiveId(s.id)}
                className={`rounded-xl border px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-150 ${
                s.id === active.id ? 'border-brand bg-brand text-white' : 'border-line text-ink-muted hover:border-ink hover:text-ink'}`
                }>
                
                  {s.title}
                </button>
              )}
            </div>

            <div className="mt-6 flex-1 rounded-[20px] bg-warm p-8" role="tabpanel" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease }}>
                  
                  <p className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink">{active.title}</p>
                  <ul className="mt-8 space-y-4">
                    {active.actions.map((a, i) =>
                    <motion.li
                      key={a}
                      className="flex items-center gap-4 border-b border-line pb-4 last:border-none"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.08 + i * 0.05, ease }}>
                      
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-light text-brand">
                          <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span className="text-base font-medium text-ink">{a}</span>
                      </motion.li>
                    )}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>);

}