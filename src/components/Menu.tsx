import React from 'react';
import type { MenuItem } from '../data/sections';

/**
 * Menu component to display a list of menu items with their prices.
 * It receives an array of MenuItem objects and renders them in a styled list.
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