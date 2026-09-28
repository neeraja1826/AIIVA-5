import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { SectionHeading } from './SectionHeading';
import { availableProducts } from '../data/products';
import { galleryItems } from '../data/gallery';
import type { GalleryItem, ProductFilter } from '../types/content';

const ease = [0.23, 1, 0.32, 1] as const;
const filterOrder: ProductFilter[] = ['Lighting', 'Fan', 'Multi-Channel', 'Controls'];
// Asymmetric rhythm: every sixth tile starting at 0 and 4 is featured large.
const spanFor = (i: number) => i % 6 === 0 ? 'md:col-span-2 md:row-span-2' : i % 6 === 4 ? 'md:col-span-2' : '';

interface Tile {
  id: string;
  title: string;
  label: string;
  image: string;
  filters: string[];
}

export function ProductGallery() {
  const productTiles: Tile[] = useMemo(
    () => availableProducts.map((p) => ({ id: p.id, title: p.name, label: p.category, image: p.image as string, filters: p.filters })),
    []
  );
  const otherByCategory = useMemo(() => {
    const map = new Map<string, GalleryItem[]>();
    galleryItems.filter((g) => g.image).forEach((g) => map.set(g.category, [...(map.get(g.category) ?? []), g]));
    return map;
  }, []);

  const categories = useMemo(() => {
    const list: string[] = [];
    if (productTiles.length) list.push('Products');
    otherByCategory.forEach((_, k) => list.push(k));
    return list;
  }, [productTiles, otherByCategory]);

  const [category, setCategory] = useState(categories[0] ?? '');
  const [filter, setFilter] = useState<string>('All');
  const [open, setOpen] = useState<Tile | null>(null);

  const availableFilters = useMemo(
    () => filterOrder.filter((f) => productTiles.some((t) => t.filters.includes(f))),
    [productTiles]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (categories.length === 0) return null;

  const tiles: Tile[] =
  category === 'Products' ?
  productTiles.filter((t) => filter === 'All' || t.filters.includes(filter)) :
  (otherByCategory.get(category) ?? []).map((g) => ({ id: g.id, title: g.title, label: g.category, image: g.image as string, filters: [] }));

  return (
    <section id="gallery" className="bg-warm py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading label="05 / Gallery" lines={['The AIIVA', 'collection.']} size="lg" />
          <div className="space-y-4">
            {categories.length > 1 &&
            <div role="tablist" aria-label="Gallery categories" className="flex flex-wrap gap-2">
                {categories.map((c) =>
              <button
                key={c}
                role="tab"
                aria-selected={c === category}
                onClick={() => {
                  setCategory(c);
                  setFilter('All');
                }}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-150 ${
                c === category ? 'bg-ink text-white' : 'bg-white text-ink-muted hover:text-ink'}`
                }>
                
                    {c}
                  </button>
              )}
              </div>
            }
            {categories.length === 1 &&
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">{categories[0]}</p>
            }
            {category === 'Products' && availableFilters.length > 0 &&
            <div className="no-scrollbar flex gap-2 overflow-x-auto" role="group" aria-label="Filter products">
                {['All', ...availableFilters].map((f) =>
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={f === filter}
                className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-150 ${
                f === filter ? 'border-brand bg-brand text-white' : 'border-line bg-white text-ink-muted hover:border-ink hover:text-ink'}`
                }>
                
                    {f}
                  </button>
              )}
              </div>
            }
          </div>
        </div>

        <LayoutGroup>
          <motion.ul layout className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-4 md:[grid-auto-flow:dense]">
            <AnimatePresence mode="popLayout">
              {tiles.map((t, i) =>
              <motion.li
                layout
                key={t.id}
                className={spanFor(i)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease }}>
                
                  <button
                  type="button"
                  onClick={() => setOpen(t)}
                  aria-label={`View ${t.title}`}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-[20px] bg-tile text-left transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(41,41,41,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                  
                    <div className="relative min-h-0 flex-1">
                      <SafeImage
                      src={t.image}
                      alt={t.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
                    
                    </div>
                    <div className="flex items-baseline justify-between gap-3 px-5 pb-4">
                      <span className="truncate text-sm font-medium text-ink">{t.title}</span>
                      <span className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand sm:block">{t.label}</span>
                    </div>
                  </button>
                </motion.li>
              )}
            </AnimatePresence>
          </motion.ul>
        </LayoutGroup>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={open.title}>
          
            <motion.figure
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-[24px] bg-tile">
            
              <SafeImage src={open.image} alt={open.title} className="aspect-square max-h-[75vh] w-full object-contain" />
              <figcaption className="flex items-center justify-between gap-4 bg-white px-6 py-4">
                <span className="font-display text-lg font-bold text-ink">{open.title}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">{open.label}</span>
              </figcaption>
              <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-sm">
              
                <XIcon className="h-4 w-4" />
              </button>
            </motion.figure>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}