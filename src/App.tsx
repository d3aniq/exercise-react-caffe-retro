import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Section from './components/Section';
import { sections } from './data/sections';

export default function App() {
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
      {/* Navigation bar */}
      <Nav />
      {/* Main content area */}
      <main className="site-main" role="main">
        {sections.map((s) => (
          <Section key={s.id} s={s} />
        ))}
      </main>
      {/* Footer section */}
      <footer className="site-footer" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Caffe Retro</p>
      </footer>
    </>
  );
}