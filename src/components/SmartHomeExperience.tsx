import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SafeImage } from './SafeImage';
import { SectionHeading } from './SectionHeading';
import { hotspots } from '../data/site';
import { images } from '../data/images';

const ease = [0.23, 1, 0.32, 1] as const;

export function SmartHomeExperience() {
  const [activeId, setActiveId] = useState(hotspots[2]?.id ?? hotspots[0]?.id);
  if (hotspots.length === 0) return null;
  const active = hotspots.find((h) => h.id === activeId) ?? hotspots[0];
  const panelRight = active.x < 55;
  const panelEdgeX = panelRight ? 66 : 34;

  return (
    <section className="bg-white py-24 md:py-36" aria-labelledby="experience-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div id="experience-title">
            <SectionHeading label="02 / The Connected Home" lines={['One home.', 'One connected', 'experience.']} size="lg" />
          </div>
          <p className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            <span className="text-ink">One Home</span>
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <span className="text-ink">Multiple Systems</span>
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <span className="text-brand">One Experience</span>
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[20px] bg-sand">
          <div className="relative aspect-[4/3] md:aspect-[16/9]">
            <SafeImage
              src={images.experience}
              alt="Open-plan contemporary home with entry, media wall, living area, curtains and bedroom"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover" />
            
            <motion.div
              className="absolute inset-0 bg-ink"
              animate={{ opacity: 0.28 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true" />
            
            <motion.div
              key={active.id + '-focus'}
              className="pointer-events-none absolute h-[38%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20"
              style={{ left: `${active.x}%`, top: `${active.y}%`, filter: 'blur(40px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true" />
            

            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <motion.line
                key={active.id}
                x1={active.x}
                y1={active.y}
                x2={panelEdgeX}
                y2={50}
                stroke="#F1E7DC"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, ease }} />
              
            </svg>

            {hotspots.map((h) => {
              const isActive = h.id === active.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setActiveId(h.id)}
                  aria-pressed={isActive}
                  aria-label={`${h.room}: ${h.system}`}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}>
                  
                  <span
                    className={`flex items-center justify-center rounded-full border-2 border-white transition-[width,height,background-color] duration-200 ease-out ${
                    isActive ? 'h-9 w-9 bg-brand' : 'h-7 w-7 bg-white/30 backdrop-blur group-hover:bg-white/60 group-focus-visible:bg-white/60'}`
                    }>
                    
                    <span className={`h-2 w-2 rounded-full ${isActive ? 'bg-white' : 'bg-white'}`} />
                  </span>
                  <span
                    className={`absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] md:block ${
                    isActive ? 'bg-white text-ink' : 'bg-ink/60 text-white'}`
                    }>
                    
                    {h.room}
                  </span>
                </button>);

            })}

            <div className={`absolute top-1/2 hidden w-[30%] -translate-y-1/2 md:block ${panelRight ? 'right-[4%]' : 'left-[4%]'}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease }}
                  className="rounded-[18px] bg-white p-7 shadow-[0_24px_60px_-30px_rgba(41,41,41,0.6)]"
                  aria-live="polite">
                  
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">{active.room}</p>
                  <p className="mt-3 font-display text-2xl font-bold leading-tight text-ink">{active.system}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{active.description}</p>
                  <p className="mt-5 flex items-center gap-2 text-xs font-medium text-sage">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
                    Connected
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-6 md:hidden" aria-live="polite">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">{active.room}</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">{active.system}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{active.description}</p>
        </div>

        <ul className="no-scrollbar mt-6 flex gap-2 overflow-x-auto" aria-label="Rooms">
          {hotspots.map((h) =>
          <li key={h.id}>
              <button
              type="button"
              onClick={() => setActiveId(h.id)}
              aria-pressed={h.id === active.id}
              className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-150 ${
              h.id === active.id ? 'border-brand bg-brand text-white' : 'border-line text-ink-muted hover:border-ink hover:text-ink'}`
              }>
              
                {h.room}
              </button>
            </li>
          )}
        </ul>
      </div>
    </section>);

}