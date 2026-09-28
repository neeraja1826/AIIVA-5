import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ConsultationForm } from './ConsultationForm';
import { contact } from '../data/site';

export function Contact() {
  const rows = [
  { label: 'Office', content: contact.address.map((l) => <span key={l} className="block">{l}</span>) },
  {
    label: 'Phone',
    content: contact.phones.map((p) =>
    <a key={p} href={`tel:+91${p}`} className="block transition-colors duration-150 hover:text-brand">
          {p}
        </a>
    )
  },
  {
    label: 'WhatsApp',
    content:
    <a href={`https://wa.me/91${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="transition-colors duration-150 hover:text-brand">
          {contact.whatsapp}
        </a>

  },
  {
    label: 'Email',
    content:
    <a href={`mailto:${contact.email.toLowerCase()}`} className="break-all transition-colors duration-150 hover:text-brand">
          {contact.email}
        </a>

  },
  { label: 'Working Hours', content: contact.hours }];


  return (
    <section id="contact" className="bg-sand/60 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <SectionHeading
            label="11 / Consultation"
            lines={["Let's make", 'your space', 'smarter.']}
            intro="Tell us about your home, office or building and we'll help you explore the right automation solution."
            size="lg" />
          
          <a
            href="#consultation-form"
            className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-brand active:scale-[0.98]">
            
            Book a Consultation
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
          </a>

          <dl className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {rows.map((r) =>
            <div key={r.label} className="border-t border-line pt-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">{r.label}</dt>
                <dd className="mt-3 text-base font-medium leading-relaxed text-ink">{r.content}</dd>
              </div>
            )}
          </dl>
        </div>
        <div className="lg:col-span-7">
          <ConsultationForm />
        </div>
      </div>
    </section>);

}