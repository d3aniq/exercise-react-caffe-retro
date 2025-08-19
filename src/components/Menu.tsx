import React from 'react';
import type { MenuItem } from '../data/sections';

/**
 * Renders a list of menu items inside a styled container.
 *
 * The menu is labelled semantically and lists each item with its price.
 */
export default function Menu({ items }: { items: MenuItem[] }) {
  return (
    <div className="menu" role="region" aria-labelledby="menu-title">
      <h3 id="menu-title" className="sr-only">
        Menu
      </h3>
      <ul className="menu__list">
        {items.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}