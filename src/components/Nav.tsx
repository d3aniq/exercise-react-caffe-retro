import React from 'react';
import { sections } from '../data/sections';

/**
 * Navigation component for the Caffe Retro site.
 * It renders a header with a list of links to each section.
 * The links are generated from the sections data.
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