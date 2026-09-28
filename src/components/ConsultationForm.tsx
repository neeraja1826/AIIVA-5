import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, Loader2Icon } from 'lucide-react';
import { projectTypes } from '../data/site';

type Status = 'idle' | 'submitting' | 'success';
type Field = 'name' | 'phone' | 'email' | 'projectType' | 'location' | 'automate' | 'message';
type FormState = Record<Field, string>;

const empty: FormState = { name: '', phone: '', email: '', projectType: '', location: '', automate: '', message: '' };
const ease = [0.23, 1, 0.32, 1] as const;

function validate(f: FormState) {
  const e: Partial<Record<Field, string>> = {};
  if (!f.name.trim()) e.name = 'Please enter your name.';
  const digits = f.phone.replace(/\D/g, '');
  if (!digits) e.phone = 'Please enter your phone number.';else
  if (digits.length < 10) e.phone = 'Please enter a valid 10-digit number.';
  if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Please enter a valid email address.';
  if (!f.projectType) e.projectType = 'Please choose a project type.';
  return e;
}

export function ConsultationForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const set = (k: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 1000);
  };

  const input = (err?: string) =>
  `mt-2 w-full rounded-xl border bg-warm px-4 py-3.5 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-ink-muted/60 focus:border-brand focus:bg-white ${
  err ? 'border-red-400' : 'border-line'}`;

  const label = 'block text-xs font-semibold uppercase tracking-[0.16em] text-ink';
  const errorText = (k: Field) =>
  errors[k] ?
  <span id={`${k}-error`} className="mt-1.5 block text-xs font-medium text-red-600">
        {errors[k]}
      </span> :
  null;

  return (
    <div id="consultation-form" className="rounded-[24px] bg-white p-7 shadow-[0_24px_60px_-40px_rgba(41,41,41,0.35)] md:p-10">
      <AnimatePresence mode="wait">
        {status === 'success' ?
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease }}
          className="flex min-h-[480px] flex-col items-start justify-center"
          role="status">
          
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
              <CheckIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-8 font-display text-3xl font-extrabold uppercase tracking-tight text-ink">Thank you, {form.name.split(' ')[0]}.</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
              Your consultation request has been received. The AIIVA team will contact you during working hours, 9 AM – 7 PM.
            </p>
            <button
            type="button"
            onClick={() => {
              setForm(empty);
              setStatus('idle');
            }}
            className="mt-8 text-sm font-semibold text-brand transition-colors duration-150 hover:text-brand-dark">
            
              Submit another request
            </button>
          </motion.div> :

        <motion.form
          key="form"
          onSubmit={submit}
          noValidate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid gap-5 sm:grid-cols-2">
          
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:col-span-2">Request a consultation</h3>
            <label className={`${label} sm:col-span-2`}>
              Name
              <input className={input(errors.name)} value={form.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errorText('name')}
            </label>
            <label className={label}>
              Phone
              <input type="tel" inputMode="tel" className={input(errors.phone)} value={form.phone} onChange={set('phone')} autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} />
              {errorText('phone')}
            </label>
            <label className={label}>
              Email
              <input type="email" className={input(errors.email)} value={form.email} onChange={set('email')} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errorText('email')}
            </label>
            <label className={label}>
              Project Type
              <select className={input(errors.projectType)} value={form.projectType} onChange={set('projectType')} aria-invalid={!!errors.projectType} aria-describedby={errors.projectType ? 'projectType-error' : undefined}>
                <option value="" disabled>
                  Select
                </option>
                {projectTypes.map((t) =>
              <option key={t}>{t}</option>
              )}
              </select>
              {errorText('projectType')}
            </label>
            <label className={label}>
              Location
              <input className={input()} value={form.location} onChange={set('location')} autoComplete="address-level2" />
            </label>
            <label className={`${label} sm:col-span-2`}>
              What would you like to automate?
              <input className={input()} value={form.automate} onChange={set('automate')} />
            </label>
            <label className={`${label} sm:col-span-2`}>
              Message
              <textarea rows={4} className={`${input()} resize-none`} value={form.message} onChange={set('message')} />
            </label>
            <div className="sm:col-span-2">
              <button
              type="submit"
              disabled={status === 'submitting'}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-brand-dark active:scale-[0.98] disabled:opacity-80 sm:w-auto">
              
                {status === 'submitting' ?
              <>
                    <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending request…
                  </> :

              <>
                    Request a Consultation
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
                  </>
              }
              </button>
            </div>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}