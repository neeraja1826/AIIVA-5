import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { LightbulbIcon, FanIcon, BlindsIcon } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { availableProducts } from '../data/products';
import { images } from '../data/images';

const stages = ['Real AIIVA Switch', 'Control', 'Automation', 'Home Experience'];
const indicators = [
{ label: 'Lights', state: 'On', Icon: LightbulbIcon },
{ label: 'Fan', state: 'Running', Icon: FanIcon },
{ label: 'Curtains', state: 'Closed', Icon: BlindsIcon }];


export function ProductToHomeStory() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [stage, setStage] = useState(reduce ? 3 : 0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (reduce) return;
    setStage(v < 0.2 ? 0 : v < 0.45 ? 1 : v < 0.7 ? 2 : 3);
  });

  const productOpacity = useTransform(scrollYProgress, [0, 0.12], [reduce ? 1 : 0.2, 1]);
  const productY = useTransform(scrollYProgress, [0, 0.15], [reduce ? 0 : 40, 0]);
  const line = useTransform(scrollYProgress, [0.15, 0.45], [reduce ? 1 : 0, 1]);
  const roomFilter = useTransform(scrollYProgress, [0.4, 0.75], reduce ? ['brightness(1)', 'brightness(1)'] : ['brightness(0.35) saturate(0.6)', 'brightness(1) saturate(1)']);

  const product = availableProducts.find((p) => p.id === 'p08') ?? availableProducts[0];
  if (!product?.image) return null;

  return (
    <section ref={ref} aria-labelledby="story-title" className="relative bg-white lg:h-[300vh]">
      <div className="flex min-h-screen items-center py-24 lg:sticky lg:top-0 lg:h-screen lg:py-0">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 id="story-title" className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-6xl">
              From switch
              <br />
              <span className="text-brand">to smart home.</span>
            </h2>
            <ol className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Story stages">
              {stages.map((s, i) =>
              <li
                key={s}
                className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                i <= stage ? 'text-ink' : 'text-ink-muted/60'}`
                }>
                
                  <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${i <= stage ? 'bg-brand' : 'bg-line'}`} aria-hidden="true" />
                  {s}
                </li>
              )}
            </ol>
          </div>

          <div className="mt-10 grid items-center gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-0">
            <motion.div style={{ opacity: productOpacity, y: productY }} className="lg:col-span-4">
              <div className="relative overflow-hidden rounded-[20px] bg-tile">
                <SafeImage src={product.image} alt={`AIIVA ${product.name}`} loading="lazy" className="mx-auto aspect-square w-full max-w-sm object-contain lg:max-w-none" />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                  stage >= 1 ? 'bg-brand text-white' : 'bg-white text-ink-muted'}`
                  }>
                  
                  {stage >= 1 ? 'Active' : 'Standby'}
                </span>
              </div>
              <p className="mt-3 text-sm font-medium text-ink">{product.name}</p>
            </motion.div>

            <div className="relative flex h-16 items-center justify-center lg:col-span-1 lg:h-full" aria-hidden="true">
              <div className="h-full w-px bg-line lg:hidden" />
              <motion.div style={{ scaleY: line }} className="absolute inset-y-0 left-1/2 w-px origin-top bg-brand lg:hidden" />
              <div className="hidden h-px w-full bg-line lg:block" />
              <motion.div style={{ scaleX: line }} className="absolute inset-x-0 top-1/2 hidden h-px origin-left bg-brand lg:block" />
              <span className={`absolute h-3 w-3 rounded-full border-2 border-white transition-colors duration-200 ${stage >= 2 ? 'bg-brand' : 'bg-line'}`} />
            </div>

            <div className="relative lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-ink">
                <motion.div style={{ filter: roomFilter }} className="h-full w-full">
                  <SafeImage src={images.livingEvening} alt="Living room with warm automated lighting" loading="lazy" className="h-full w-full object-cover" />
                </motion.div>
                <ul className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 md:bottom-6 md:left-6">
                  {indicators.map(({ label, state, Icon }, i) => {
                    const on = stage >= 2 + (i > 0 ? 1 : 0) || stage === 3;
                    return (
                      <li
                        key={label}
                        className={`flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-xs font-medium backdrop-blur transition-[background-color,color,transform,opacity] duration-200 ease-out ${
                        on ? 'translate-y-0 bg-white text-ink opacity-100' : 'translate-y-1 bg-white/20 text-white opacity-70'}`
                        }>
                        
                        <Icon className={`h-4 w-4 ${on ? 'text-brand' : ''}`} aria-hidden="true" />
                        <span>{label}</span>
                        <span className={on ? 'text-sage' : ''}>{on ? state : 'Off'}</span>
                      </li>);

                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}