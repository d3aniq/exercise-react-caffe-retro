import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Section from './components/Section';
import { sections } from './data/sections';

/**
 * The main application component for Caffe Retro.
 *
 * This component renders the skip link, top navigation, all sections and the footer.
 * It also sets up an IntersectionObserver to update the active navigation link based
 * on which section is currently in view. Accessibility is considered through
 * semantic markup and skip link.
 */
export default function App() {
  // Observe section intersections to update active nav link
  useEffect(() => {
    const secs = Array.from(
      document.querySelectorAll<HTMLElement>('section[id]'),
    );
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.site-nav a'),
    );

    const setActive = (id: string) => {
      links.forEach((a) => {
        a.classList.toggle(
          'is-active',
          a.getAttribute('href') === `#${id}`,
        );
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive((entry.target as HTMLElement).id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      },
    );

    secs.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Skip link for accessibility */}
      <a className="skip-link" href="#hot">
        Skip to content
      </a>
      {/* Top navigation */}
      <Nav />
      {/* Main content */}
      <main className="site-main" role="main">
        {sections.map((s) => (
          <Section key={s.id} s={s} />
        ))}
      </main>
      {/* Footer */}
      <footer className="site-footer" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Caffe Retro</p>
      </footer>
    </>
  );
}