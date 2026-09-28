import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';
import type { Product } from '../types/content';

interface ProductShowcaseProps {
  product: Product;
  index: number;
  active: boolean;
  onActive: () => void;
}

export function ProductShowcase({ product, index, active, onActive }: ProductShowcaseProps) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  if (!product.image || failed) return null;

  return (
    <li ref={ref} className="flex flex-col justify-center border-b border-line py-12 first:pt-0 lg:min-h-[72vh] lg:border-none lg:py-0">
      <Reveal>
        <div className="mb-8 overflow-hidden rounded-[20px] bg-tile lg:hidden">
          <SafeImage
            src={product.image}
            alt={`AIIVA ${product.name}`}
            loading="lazy"
            onFail={() => setFailed(true)}
            className="aspect-square w-full object-contain" />
          
        </div>
        <p className="font-display text-sm font-semibold text-ink-muted">Product {String(index + 1).padStart(2, '0')}</p>
        <p className={`mt-4 text-xs font-semibold uppercase tracking-[0.22em] transition-colors duration-200 ${active ? 'text-brand' : 'text-brand/70'}`}>
          {product.category}
        </p>
        <h3 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink md:text-4xl">
          {product.name}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">{product.description}</p>
        {product.capabilities.length > 0 &&
        <ul className="mt-6 flex flex-wrap gap-2">
            {product.capabilities.map((c) =>
          <li key={c} className="rounded-full bg-brand-light px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-dark">
                {c}
              </li>
          )}
          </ul>
        }
      </Reveal>
    </li>);

}