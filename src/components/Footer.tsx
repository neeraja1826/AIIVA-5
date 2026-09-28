import React from 'react';
import { SafeImage } from './SafeImage';
import { images } from '../data/images';
import { company, contact, footerNav } from '../data/site';

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="inline-flex rounded-2xl bg-white px-5 py-3">
              <SafeImage src={images.logo} alt="AIIVA Automation Private Limited" className="h-16 w-auto object-contain" />
            </div>
            <p className="mt-10 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl">
              {company.statement.map((s, i) =>
              <span key={s} className={`block ${i === 2 ? 'text-brand-light' : ''}`}>
                  {s}
                </span>
              )}
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{company.tagline}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-light">Navigate</p>
            <ul className="mt-5 space-y-3">
              {footerNav.map((l) =>
              <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/75 transition-colors duration-150 hover:text-white">
                    {l.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-light">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {contact.phones.map((p) =>
              <li key={p}>
                  <a href={`tel:+91${p}`} className="transition-colors duration-150 hover:text-white">{p}</a>
                </li>
              )}
              <li>
                <a href={`mailto:${contact.email.toLowerCase()}`} className="break-all transition-colors duration-150 hover:text-white">{contact.email}</a>
              </li>
              <li>Working Hours: {contact.hours}</li>
              <li className="pt-2 leading-relaxed">{contact.address.join(' ')}</li>
            </ul>
            {contact.social.length > 0 &&
            <ul className="mt-6 flex gap-4">
                {contact.social.map((s) =>
              <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/75 hover:text-white">{s.label}</a>
                  </li>
              )}
              </ul>
            }
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{company.closing}</p>
        </div>
      </div>
    </footer>);

}