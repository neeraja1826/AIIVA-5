import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownIcon, ArrowRightIcon } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { images } from '../data/images';
import { availableProducts } from '../data/products';

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const productY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 50]);
  const featured = availableProducts.find((p) => p.id === 'p06') ?? availableProducts[0];

  return (
    <section id="top" ref={ref} className="relative bg-warm px-3 pb-3 pt-3 md:px-4 md:pb-4 md:pt-4">
      <div className="relative min-h-[100svh] md:min-h-[calc(100svh-2rem)]">
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-[20px]"
          initial={reduce ? false : { clipPath: 'inset(8% 8% 8% 8% round 20px)', opacity: 0.4 }}
          animate={{ clipPath: 'inset(0% 0% 0% 0% round 20px)', opacity: 1 }}
          transition={{ duration: 0.9, ease }}>
          
          <motion.div style={{ scale: imgScale }} className="h-full w-full">
            <SafeImage
              src={images.hero}
              alt="Contemporary Hyderabad apartment living room with automated curtains and cove lighting"
              className="h-full w-full object-cover" />
            
          </motion.div>
          <div className="absolute inset-0 bg-ink/10" aria-hidden="true" />
        </motion.div>

        <div className="relative flex min-h-[100svh] flex-col justify-end px-3 pb-3 pt-28 md:min-h-[calc(100svh-2rem)] md:px-8 md:pb-8">
          <div className="flex items-end justify-between gap-6">
            <motion.div
              style={{ y: panelY }}
              className="w-full max-w-2xl rounded-[20px] bg-white p-7 shadow-[0_24px_60px_-30px_rgba(41,41,41,0.45)] md:p-12">
              
              <motion.p
                className="flex flex-wrap items-center gap-x-3 text-xs font-semibold uppercase tracking-[0.22em]"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5, ease }}>
                
                <span className="text-ink">AIIVA Automation</span>
                <span className="text-brand">/ Smart Living</span>
              </motion.p>

              <h1 className="mt-6 font-display text-5xl font-black uppercase leading-[0.92] tracking-tight text-ink md:text-7xl">
                {['Smart Living.', 'Simplified.'].map((line, i) =>
                <span key={line} className="block overflow-hidden pb-1">
                    <motion.span
                    className={`block ${i === 1 ? 'text-brand' : ''}`}
                    initial={reduce ? false : { y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.08, ease }}>
                    
                      {line}
                    </motion.span>
                  </span>
                )}
              </h1>

              <motion.p
                className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8, ease }}>
                
                Smart and affordable automation solutions for homes, apartments, villas, offices and commercial spaces.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9, ease }}>
                
                <a
                  href="#solutions"
                  className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-brand-dark active:scale-[0.98]">
                  
                  Explore Solutions
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#how-it-works"
                  className="group inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-[border-color,transform] duration-150 ease-out hover:border-ink active:scale-[0.98]">
                  
                  See How It Works
                  <ArrowDownIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-y-0.5" />
                </a>
              </motion.div>
            </motion.div>

            {featured?.image &&
            <motion.figure
              style={{ y: productY }}
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.0, ease }}
              className="hidden w-56 shrink-0 overflow-hidden rounded-[20px] border border-white/60 bg-tile shadow-[0_24px_60px_-30px_rgba(41,41,41,0.5)] lg:block xl:w-64">
              
                <SafeImage src={featured.image} alt={`AIIVA ${featured.name}`} className="aspect-square w-full object-contain" />
                <figcaption className="border-t border-line bg-white px-5 py-3">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">AIIVA Control</span>
                  <span className="mt-0.5 block text-sm font-medium text-ink">{featured.name}</span>
                </figcaption>
              </motion.figure>
            }
          </div>
        </div>
      </div>
    </section>);

}