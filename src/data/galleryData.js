// Placeholder gallery items — no real photography yet. Each entry renders as
// a styled placeholder tile (see GalleryGrid) until `src` is filled in with
// a real image path, at which point GalleryGrid/GalleryLightbox will need a
// one-line change to render <img src={item.src}> instead of the placeholder.
//
// Shape once real photos are supplied:
// { id: string, category: 'food' | 'interior', caption: string, src: string | null, alt: string }

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food' },
  { id: 'interior', label: 'Interior' },
];

export const GALLERY_ITEMS = [
  { id: 'g1', category: 'food', caption: 'Doner Kebab', src: '/images/gallery/g1.webp' },
  { id: 'g2', category: 'food', caption: 'Loaded Snack Pack', src: '/images/gallery/g2.webp' },
  { id: 'g3', category: 'interior', caption: 'Dine-In Seating', src: '/images/gallery/g3.webp' },
  { id: 'g4', category: 'food', caption: 'Fresh Nachos', src: '/images/gallery/g4.webp' },
  { id: 'g5', category: 'food', caption: 'Falafel Plate', src: '/images/gallery/g5.webp' },
  { id: 'g6', category: 'interior', caption: 'The Kitchen', src: '/images/gallery/g6.webp' },
  { id: 'g7', category: 'food', caption: 'Gozleme, Fresh Off The Grill', src: '/images/gallery/g7.webp' },
  { id: 'g8', category: 'food', caption: 'Burrito Bowl', src: '/images/gallery/g8.webp' },
  { id: 'g9', category: 'interior', caption: 'Storefront', src: '/images/gallery/g9.webp' },
];
