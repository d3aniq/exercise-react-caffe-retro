import React from 'react';
import { sections } from '../data/sections';

/**
 * Top navigation component.
 *
 * Generates anchor links to each section using the data from sections.ts.
 * Includes a visually hidden heading for accessibility.
 */
export default function Nav() {
  return (
    <header className="site-header" role="banner" aria-label="Top navigation">
      <h1 className="sr-only">Caffe Retro</h1>
      <nav className="site-nav" aria-label="Primary">
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}