import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { useActiveSection } from '../hooks/useActiveSection';
import { images } from '../data/images';
import { primaryNav } from '../data/site';
import { projects } from '../data/projects';
import type { NavLink } from '../types/content';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links: NavLink[] = useMemo(
    () => projects.length > 0 ? [...primaryNav, { label: 'Projects', href: '#projects' }] : primaryNav,
    []
  );
  const ids = useMemo(() => links.map((l) => l.href.slice(1)), [links]);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-line px-4 shadow-[0_6px_24px_-12px_rgba(41,41,41,0.18)] backdrop-blur-md transition-[height,background-color] duration-200 ease-out md:px-5 ${
        scrolled ? 'h-14 bg-white/95' : 'h-[68px] bg-white/80'}`
        }>
        
        <a href="#top" className="flex shrink-0 items-center" aria-label="AIIVA Automation — home">
          <SafeImage
            src={images.logo}
            alt="AIIVA Automation Private Limited"
            className={`w-auto object-contain mix-blend-multiply transition-[height] duration-200 ease-out ${scrolled ? 'h-10' : 'h-12'}`} />
          
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'}`
                  }>
                  
                  {l.label}
                </a>
                {isActive &&
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand"
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} />

                }
              </li>);

          })}
        </ul>

        <a
          href="#contact"
          className="group hidden items-center gap-2 whitespace-nowrap rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand-dark lg:inline-flex">
          
          Get a Consultation
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-ink lg:hidden">
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mt-2 max-w-7xl origin-top rounded-2xl border border-line bg-white p-3 shadow-lg lg:hidden">
          
            <ul>
              {links.map((l) =>
            <li key={l.href}>
                  <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium ${
                active === l.href.slice(1) ? 'bg-brand-light text-brand-dark' : 'text-ink'}`
                }>
                
                    {l.label}
                  </a>
                </li>
            )}
            </ul>
            <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3.5 text-sm font-semibold text-white">
            
              Get a Consultation <ArrowRightIcon className="h-4 w-4" />
            </a>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}