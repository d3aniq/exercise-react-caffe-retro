import React from 'react';
import type { SectionData } from '../data/sections';
import Menu from './Menu';

/**
 * Section component that renders a single section of the Caffe Retro site.
 * It displays the section title, ribbons, and a menu of items.
 * The background image is set via inline styles for each section.
 */
export default function Section({ s }: { s: SectionData }) {
  return (
    <section
      id={s.id}
      className={`panel panel--${s.id}`}
      aria-labelledby={`${s.id}-title`}
      style={{ backgroundImage: `url(${s.bg})` }}
    >
      <div className="panel__inner">
        <h2 id={`${s.id}-title`} className="display">
          {s.title}
        </h2>
        <p className="ribbon">{s.ribbons[0]}</p>
        <p className="ribbon ribbon--alt">{s.ribbons[1]}</p>
        <Menu items={s.menu} />
      </div>
    </section>
  );
}