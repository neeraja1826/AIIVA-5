import React from 'react';
import { capabilities } from '../data/site';

export function TrustStrip() {
  if (capabilities.length === 0) return null;
  return (
    <section aria-label="Capabilities" className="border-b border-line bg-warm">
      <div className="mx-auto max-w-7xl">
        <ul className="no-scrollbar flex snap-x overflow-x-auto px-6 py-7 lg:justify-between lg:px-8">
          {capabilities.map((c, i) =>
          <li key={c} className="flex shrink-0 snap-start items-center">
              {i > 0 && <span className="mx-6 h-4 w-px bg-line lg:mx-0" aria-hidden="true" />}
              <span className="flex items-center gap-2.5 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-ink lg:px-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                {c}
              </span>
            </li>
          )}
        </ul>
      </div>
    </section>);

}