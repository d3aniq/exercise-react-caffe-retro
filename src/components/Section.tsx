import React from 'react';
import type { SectionData } from '../data/sections';
import Menu from './Menu';

/**
 * Renders a full-screen section (Hot, Juicy, or Cosy) with its content.
 *
 * Each section uses a background image via inline style and contains a heading,
 * two ribbon paragraphs and a menu list. The id prop ties the element to
 * navigation anchors.
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