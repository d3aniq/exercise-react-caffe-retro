/**
 * Data definitions for the three sections of the Caffe Retro site.
 *
 * Each section includes an identifier used for navigation anchors, a title,
 * two ribbon messages, a background image path (relative to the public folder),
 * and a list of menu items with names and prices.
 */
export type MenuItem = { name: string; price: string };

export type SectionData = {
  id: 'hot' | 'juicy' | 'cosy';
  title: string;
  ribbons: [string, string];
  bg: string;
  menu: MenuItem[];
};

// Define all sections in an array to drive the UI programmatically
export const sections: SectionData[] = [
  {
    id: 'hot',
    title: 'Hot',
    ribbons: [
      'Hot freshly ground black coffee or a cup of exquisite tea?',
      'We give you that perfect cup every time.',
    ],
    bg: '/assets/hot.jpg',
    menu: [
      { name: 'Mocha Latte', price: '€ 7.50' },
      { name: 'Caffè Formaggio', price: '€ 5.00' },
      { name: 'Espresso', price: '€ 3.50' },
      { name: 'Chai Verde Latte', price: '€ 5.50' },
    ],
  },
  {
    id: 'juicy',
    title: 'Juicy',
    ribbons: [
      'Natural, fresh-pressed juices, full of flavor.',
      'No sugar added – just fruit goodness.',
    ],
    bg: '/assets/juicy.jpg',
    menu: [
      { name: 'Banana Shake', price: '€ 6.00' },
      { name: 'Orange Juice', price: '€ 4.50' },
      { name: 'Apple Juice', price: '€ 4.50' },
      { name: 'Strawberry Smoothie', price: '€ 6.50' },
    ],
  },
  {
    id: 'cosy',
    title: 'Cosy',
    ribbons: [
      'A warm place to study, meet, and relax.',
      'Settle in, enjoy the vibe.',
    ],
    bg: '/assets/cosy.jpg',
    menu: [
      { name: 'Retro Sandwich', price: '€ 5.50' },
      { name: 'Blueberry Muffin', price: '€ 3.20' },
      { name: 'Chocolate Cake', price: '€ 3.80' },
      { name: 'Cinnamon Roll', price: '€ 2.90' },
    ],
  },
];