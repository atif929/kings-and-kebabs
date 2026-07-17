import { useMemo, useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../../data/galleryData';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import Section from '../../components/ui/Section/Section';
import GalleryFilters from './components/GalleryFilters';
import GalleryGrid from './components/GalleryGrid';
import GalleryLightbox from './components/GalleryLightbox';

function Gallery() {
  useDocumentMeta('Gallery', 'A look at our food, kitchen, and space.');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredItems = useMemo(
    () => (activeCategory === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === activeCategory)),
    [activeCategory],
  );

  function handleCategoryChange(categoryId) {
    setActiveCategory(categoryId);
    setActiveIndex(null);
  }

  function handleNavigate(direction) {
    setActiveIndex((current) => {
      if (current === null) return current;
      const next = (current + direction + filteredItems.length) % filteredItems.length;
      return next;
    });
  }

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A Taste Of The Experience"
        description="Food, kitchen, and the space — a look at what we serve and where."
      />

      <Section tone="primary">
        <GalleryFilters categories={GALLERY_CATEGORIES} activeCategory={activeCategory} onChange={handleCategoryChange} />
        <GalleryGrid items={filteredItems} onSelect={setActiveIndex} />
      </Section>

      {activeIndex !== null && (
        <GalleryLightbox
          items={filteredItems}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
}

export default Gallery;
